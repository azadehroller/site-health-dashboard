const fs = require("fs");
const vm = require("vm");

const SITEMAP = "https://www.roller.software/sitemap.xml";
const ORIGIN = "https://www.roller.software";

function normPath(url) {
  const u = new URL(url, ORIGIN);
  let p = u.pathname;
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p.toLowerCase();
}

function isBlogPath(pathname) {
  return pathname === "/blog" || pathname.startsWith("/blog/");
}

function displayOf(url) {
  const u = new URL(url, ORIGIN);
  const host = u.hostname.replace(/^www\./, "");
  if (u.pathname === "/") return host;
  const path = u.pathname.endsWith("/") && u.pathname.length > 1
    ? u.pathname.slice(0, -1)
    : u.pathname;
  return host + path;
}

function sydneyDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Australia/Sydney",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

function longDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  const month = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ][m - 1];
  return `${d} ${month} ${y}`;
}

function daysBetween(fromIso, toIso) {
  const a = Date.parse(fromIso + "T00:00:00Z");
  const b = Date.parse(toIso + "T00:00:00Z");
  return Math.round((b - a) / 86400000);
}

function decodeEntities(s) {
  return String(s)
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function stripTags(html) {
  return decodeEntities(String(html).replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function visibleText(html) {
  return stripTags(
    String(html)
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
  );
}

async function fetchText(url, { retries = 2, timeoutMs = 25000 } = {}) {
  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeoutMs);
    try {
      const res = await fetch(url, {
        redirect: "follow",
        signal: ctrl.signal,
        headers: { "user-agent": "roller-site-health-dashboard/1.0" }
      });
      const text = await res.text();
      clearTimeout(timer);
      return { ok: res.ok, status: res.status, url: res.url || url, text };
    } catch (err) {
      clearTimeout(timer);
      lastErr = err;
      await new Promise((r) => setTimeout(r, 400 * (attempt + 1)));
    }
  }
  return { ok: false, status: 0, url, text: "", error: String(lastErr && lastErr.message || lastErr) };
}

async function mapPool(items, limit, fn) {
  const out = new Array(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const idx = next++;
      out[idx] = await fn(items[idx], idx);
    }
  }
  const n = Math.min(limit, items.length);
  await Promise.all(Array.from({ length: n }, worker));
  return out;
}

async function sitemapLocs(sitemapUrl = SITEMAP) {
  const seen = new Set();
  const pages = [];
  async function walk(url, depth) {
    if (seen.has(url) || depth > 2) return;
    seen.add(url);
    const res = await fetchText(url);
    if (!res.ok) throw new Error(`Sitemap fetch failed (${res.status}) ${url}`);
    const locs = [];
    const re = /<loc>([^<]+)<\/loc>/gi;
    let m;
    while ((m = re.exec(res.text))) locs.push(decodeEntities(m[1].trim()));
    const nested = locs.filter((loc) => /\.xml($|\?)/i.test(loc));
    const leaf = nested.length && nested.length === locs.length ? [] : locs.filter((loc) => !/\.xml($|\?)/i.test(loc));
    pages.push(...leaf);
    for (const loc of nested) await walk(loc, depth + 1);
  }
  await walk(sitemapUrl, 0);
  return [...new Set(pages)];
}

function loadWindowFile(file, globalName) {
  const src = fs.readFileSync(file, "utf8");
  const context = { window: {} };
  vm.runInNewContext(src, context, { filename: file });
  const data = context.window[globalName];
  if (!data) throw new Error(`${file} did not set window.${globalName}`);
  return data;
}

function saveWindowFile(file, globalName, data, indent) {
  const json = JSON.stringify(data, null, indent);
  const contents = `window.${globalName} = ${json};\n`;
  const tmp = file + ".tmp";
  fs.writeFileSync(tmp, contents);
  const check = { window: {} };
  vm.runInNewContext(fs.readFileSync(tmp, "utf8"), check, { filename: tmp });
  if (!check.window[globalName]) {
    fs.unlinkSync(tmp);
    throw new Error(`Refusing to replace ${file}: written file did not parse`);
  }
  fs.renameSync(tmp, file);
}

module.exports = {
  SITEMAP,
  ORIGIN,
  normPath,
  isBlogPath,
  displayOf,
  sydneyDate,
  longDate,
  daysBetween,
  stripTags,
  visibleText,
  fetchText,
  mapPool,
  sitemapLocs,
  loadWindowFile,
  saveWindowFile
};
