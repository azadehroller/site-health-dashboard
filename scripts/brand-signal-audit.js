#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const {
  ORIGIN,
  normPath,
  isBlogPath,
  displayOf,
  sydneyDate,
  longDate,
  stripTags,
  visibleText,
  fetchText,
  mapPool,
  sitemapLocs,
  loadWindowFile,
  saveWindowFile
} = require("./lib");

const ROOT = path.join(__dirname, "..");
const DATA_FILE = path.join(ROOT, "brand-numbers.data.js");
const REPORT_FILE = path.join(ROOT, "brand-numbers-audit-report.json");
const dryRun = process.argv.includes("--dry-run");

const ON_BRAND = /(?<![\d$])3[\s,.]?500\+?(?![\d,])/;
const RETIRED = /(?<![\d$])(3[\s,.]?000|2[\s,.]?600|2[\s,.]?300)\+?(?![\d,])/gi;
const VENUE_WORD = /venues?|attractions?|clients?|customers?|sites?|parcs?|worldwide|monde/i;
const MONEY = /(?<![\d])\$\s*([3-5])\s*(?:B|bn|billion)\b/gi;

function retiredMentions(text) {
  const out = [];
  const re = new RegExp(RETIRED.source, "gi");
  let m;
  while ((m = re.exec(text))) {
    const before = text.slice(Math.max(0, m.index - 50), m.index);
    const after = text.slice(m.index + m[0].length, m.index + m[0].length + 80);
    const around = `${before}${m[0]}${after}`.replace(/\s+/g, " ").trim();
    if (/\$\s*$/.test(before)) continue;
    if (/sq\.?\s*ft|buyers|width|lane|sku/i.test(around)) continue;
    if (!VENUE_WORD.test(around)) continue;
    out.push(around);
  }
  return out;
}

function moneyHits(text) {
  const out = [];
  const re = new RegExp(MONEY.source, "gi");
  let m;
  while ((m = re.exec(text))) {
    const around = text.slice(Math.max(0, m.index - 70), m.index + m[0].length + 80).replace(/\s+/g, " ");
    if (/per-guest/i.test(around)) continue;
    if (/market|industry/i.test(around) && !/transactions processed|processed annually/i.test(around)) continue;
    out.push({ billions: m[1], around });
  }
  return out;
}

function pageTitle(html) {
  const m = String(html).match(/<title>([^<]*)<\/title>/i);
  return m ? stripTags(m[1]).replace(/\s*[|–-]\s*ROLLER\s*$/i, "").trim() : "";
}

function headingsText(html) {
  const parts = [];
  const re = /<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi;
  let m;
  while ((m = re.exec(html))) parts.push(stripTags(m[1]));
  return parts.join(" \n ");
}

function logoHeadings(html) {
  const clean = String(html)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ");
  const out = [];
  const re = /logo-set-heading[^>]*>([\s\S]*?)<\//gi;
  let m;
  while ((m = re.exec(clean))) {
    const text = stripTags(m[1]);
    if (text) out.push(text);
  }
  return out;
}

function signalsOf(html) {
  const text = visibleText(html);
  return {
    title: pageTitle(html),
    text,
    headings: headingsText(html),
    logos: logoHeadings(html)
  };
}

function component(data, id) {
  const found = data.components.find((c) => c.id === id);
  if (!found) throw new Error(`Brand data is missing the ${id} component`);
  return found;
}

function worst(statuses) {
  const rank = { ok: 0, context: 1, unverified: 2, review: 3, drift: 4 };
  return statuses.reduce((best, status) => ((rank[status] || 0) > (rank[best] || 0) ? status : best), "ok");
}

function setDrift(number, phrase, reason, action) {
  number.status = "drift";
  number.reason = reason;
  number.action = action;
  if (phrase) number.value = phrase.slice(0, 180);
}

function setOk(number, reason) {
  const wasRetired = /3[\s,.]?000|2[\s,.]?600|2[\s,.]?300/.test(number.value || "");
  number.status = "ok";
  number.reason = reason;
  number.action = "";
  return wasRetired;
}

function applyLive(number, sig) {
  if (!sig || number.status === "unverified" || number.status === "context") return "left";
  if (number.status !== "ok" && number.status !== "drift") return "left";

  if (number.kind === "venue") {
    const source = sig.logos.length && /logo|Trusted by over 3/i.test(number.value || "")
      ? sig.logos.join(" \n ")
      : (sig.headings || sig.text);
    const retired = retiredMentions(source);
    if (!retired.length && source !== sig.text) {
      const inHeadings = retiredMentions(sig.headings);
      if (inHeadings.length && !/logo-set|Trusted by over 3/i.test(number.value || "")) {
        setDrift(number, inHeadings[0], "Shows a retired venue count", "Change it to 3,500+");
        return "drift";
      }
    }
    if (retired.length) {
      setDrift(number, retired[0], "Shows a retired venue count", "Change it to 3,500+");
      return "drift";
    }
    const blob = `${sig.logos.join(" ")} ${sig.headings} ${sig.text}`;
    if (ON_BRAND.test(blob)) {
      setOk(number, "Matches 3,500+");
      return "ok";
    }
    return "left";
  }

  if (number.kind === "revenue") {
    const hits = moneyHits(sig.text);
    const has5 = hits.some((h) => h.billions === "5");
    const retired = hits.filter((h) => h.billions !== "5" && /transactions processed|processed annually/i.test(h.around));
    if (retired.length && !has5) {
      setDrift(number, retired[0].around, "Shows a retired transactions figure", "Change it to $5B");
      return "drift";
    }
    if (has5) {
      setOk(number, "Matches $5B");
      return "ok";
    }
    return "left";
  }

  return "left";
}

function recompute(data, pagesAudited) {
  const counts = { ok: 0, context: 0, unverified: 0, review: 0, drift: 0 };
  const hrefs = new Set();
  let instances = 0;
  for (const comp of data.components) {
    const cc = { ok: 0, context: 0, unverified: 0, review: 0, drift: 0 };
    let attention = 0;
    for (const page of comp.pages) {
      hrefs.add(normPath(page.href));
      const statuses = [];
      for (const number of page.numbers || []) {
        instances++;
        cc[number.status] = (cc[number.status] || 0) + 1;
        counts[number.status] = (counts[number.status] || 0) + 1;
        if ((data.attentionStatuses || []).includes(number.status)) attention++;
        statuses.push(number.status);
      }
      page.status = statuses.length ? worst(statuses) : page.status;
    }
    comp.statusCounts = cc;
    comp.attention = attention;
    comp.pageCount = comp.pages.length;
  }
  data.statusCounts = counts;
  data.instanceCount = instances;
  data.pagesWithNumbers = hrefs.size;
  data.pagesAudited = pagesAudited;
  data.pagesLiveChecked = pagesAudited;

  for (const truth of data.sourceOfTruth || []) {
    const kind = truth.id === "venues" ? "venue" : truth.id === "revenue" ? "revenue" : "";
    if (!kind) continue;
    const nums = [];
    for (const comp of data.components) {
      for (const page of comp.pages) {
        for (const number of page.numbers || []) {
          if (number.kind === kind && (number.status === "ok" || number.status === "drift")) nums.push(number);
        }
      }
    }
    truth.instances = nums.length;
    truth.onBrand = nums.filter((n) => n.status === "ok").length;
    truth.offBrand = nums.filter((n) => n.status === "drift").length;
    if (truth.id === "venues") {
      const retired = new Set();
      for (const number of nums.filter((n) => n.status === "drift")) {
        if (/3[\s,.]?000/.test(number.value || "")) retired.add("3,000");
        if (/2[\s,.]?600/.test(number.value || "")) retired.add("2,600");
        if (/2[\s,.]?300/.test(number.value || "")) retired.add("2,300");
      }
      truth.retiredFound = [...retired];
      truth.blurb = truth.offBrand
        ? `The current figure is 3,500+. ${truth.offBrand} live instance${truth.offBrand === 1 ? "" : "s"} still show a retired venue count.`
        : "The current figure is 3,500+. Marketing pages and blog posts that cite the venue count match.";
    } else {
      const retired = new Set();
      for (const number of nums.filter((n) => n.status === "drift")) {
        if (/\$\s*4/.test(number.value || "")) retired.add("$4B");
        if (/\$\s*3/.test(number.value || "")) retired.add("$3B");
      }
      truth.retiredFound = [...retired];
      truth.blurb = truth.offBrand
        ? `The current figure is $5B transactions processed. ${truth.offBrand} live instance${truth.offBrand === 1 ? "" : "s"} still show a retired amount.`
        : "The headline money figure is $5B transactions processed. Live brand claims match. Year-in-Review pages may still carry frozen annual numbers on purpose.";
    }
  }
}

function assertConsistent(data) {
  const sum = Object.values(data.statusCounts).reduce((a, b) => a + b, 0);
  if (sum !== data.instanceCount) {
    throw new Error(`Brand status counts add up to ${sum}, but there are ${data.instanceCount} figures`);
  }
  for (const comp of data.components) {
    const numbers = comp.pages.reduce((n, page) => n + (page.numbers || []).length, 0);
    const counted = Object.values(comp.statusCounts).reduce((a, b) => a + b, 0);
    if (numbers !== counted || comp.pageCount !== comp.pages.length) {
      throw new Error(`Component ${comp.id} counts do not match its pages`);
    }
  }
}

function trackedPaths(data) {
  const paths = new Set();
  for (const comp of data.components) {
    for (const page of comp.pages) paths.add(normPath(page.href));
  }
  return paths;
}

function addDriftPage(comp, url, title, phrase, kind, reason, action) {
  const href = new URL(url, ORIGIN).toString();
  comp.pages.push({
    title: title || displayOf(href),
    href,
    display: displayOf(href),
    numbers: [{ kind, value: phrase.slice(0, 180), status: "drift", reason, action }],
    status: "drift"
  });
}

async function main() {
  const today = sydneyDate();
  const todayLong = longDate(today);
  const data = loadWindowFile(DATA_FILE, "BRAND_NUMBERS");
  const known = trackedPaths(data);

  console.log("Fetching sitemap…");
  const locs = await sitemapLocs();
  const extras = [];
  for (const comp of data.components) {
    for (const page of comp.pages) extras.push(page.href);
  }
  const byPath = new Map();
  for (const url of [...locs, ...extras]) {
    let key;
    try { key = normPath(url); } catch { continue; }
    if (!byPath.has(key)) byPath.set(key, url.startsWith("http") ? url : ORIGIN + key);
  }
  const urls = [...byPath.values()];
  console.log(`URLs to check: ${urls.length}`);

  let done = 0;
  const fetched = await mapPool(urls, 8, async (url) => {
    const res = await fetchText(url);
    done++;
    if (done % 100 === 0) console.log(`Crawled ${done}/${urls.length}`);
    let path = "";
    let finalPath = "";
    try {
      path = normPath(url);
      finalPath = normPath(res.url || url);
    } catch { /* ignore bad urls */ }
    const redirected = Boolean(finalPath && finalPath !== path);
    const sig = res.ok && !redirected ? signalsOf(res.text) : null;
    return {
      url,
      path,
      ok: res.ok,
      redirected,
      blog: isBlogPath(path),
      title: sig ? sig.title : "",
      sig
    };
  });

  const marketingOk = fetched.filter((p) => p.ok && !p.redirected && !p.blog);
  if (marketingOk.length < 100) {
    throw new Error(`Only ${marketingOk.length} marketing pages fetched. Not updating Brand Signal.`);
  }
  const byLive = new Map(fetched.filter((p) => p.sig).map((p) => [p.path, p]));

  let flippedDrift = 0;
  let restored = 0;
  let logosRead = 0;
  for (const comp of data.components) {
    for (const page of comp.pages) {
      const live = byLive.get(normPath(page.href));
      if (!live) continue;
      if (comp.id === "ls") logosRead += live.sig.logos.length ? 1 : 0;
      for (const number of page.numbers || []) {
        const before = number.status;
        const logoText = live.sig.logos.join(" \n ");
        const source = comp.id === "ls" && number.kind === "venue"
          ? { ...live.sig, headings: logoText, text: logoText }
          : live.sig;
        const result = applyLive(number, source);
        if (before !== "drift" && result === "drift") flippedDrift++;
        if (before === "drift" && result === "ok") restored++;
      }
    }
  }

  const hc = component(data, "hc");
  const blog = component(data, "blog");
  const ss = component(data, "ss");
  let added = 0;
  for (const page of fetched) {
    if (!page.sig || page.redirected) continue;
    const retired = retiredMentions(`${page.sig.headings} \n ${page.sig.text}`);
    const covered = data.components.some((comp) => comp.pages.some((p) => {
      if (normPath(p.href) !== page.path) return false;
      return (p.numbers || []).some((n) => n.kind === "venue" && (n.status === "drift" || retired.some((phrase) => phrase.slice(0, 24) && (n.value || "").includes(phrase.slice(0, 24)))));
    }));
    const venueDest = page.blog ? blog : hc;
    const alreadyThere = venueDest.pages.some((p) => normPath(p.href) === page.path);
    if (retired.length && !covered && !alreadyThere) {
      addDriftPage(
        venueDest,
        page.url,
        page.title,
        retired[0],
        "venue",
        "Shows a retired venue count",
        "Change it to 3,500+"
      );
      added++;
    }
    if (page.blog) continue;
    const hits = moneyHits(page.sig.text).filter((h) => h.billions !== "5" && /transactions processed|processed annually/i.test(h.around));
    const moneyCovered = data.components.some((comp) => comp.pages.some((p) => normPath(p.href) === page.path && (p.numbers || []).some((n) => n.kind === "revenue" && n.status === "drift")));
    const revenueThere = ss.pages.some((p) => normPath(p.href) === page.path);
    if (hits.length && !moneyCovered && !revenueThere && !moneyHits(page.sig.text).some((h) => h.billions === "5")) {
      addDriftPage(ss, page.url, page.title, hits[0].around, "revenue", "Shows a retired transactions figure", "Change it to $5B");
      added++;
    }
  }

  const blogChecked = fetched.filter((p) => p.blog && p.ok && !p.redirected).length;
  const citing = blog.pages.length;
  const blogOff = blog.pages.filter((p) => (p.numbers || []).some((n) => n.status === "drift")).length;
  blog.updateNote = `${blogChecked} posts were checked. ${citing} cite the venue count${blogOff ? `, and ${blogOff} are off brand` : ", and they match 3,500+"}. Dollar amounts that are not the brand figure were left out.`;

  const ls = component(data, "ls");
  recompute(data, marketingOk.length);
  const lsDrift = ls.pages.filter((p) => (p.numbers || []).some((n) => n.status === "drift"));
  ls.updateNote = lsDrift.length
    ? `${ls.pageCount} logo headings checked. ${lsDrift.length} no longer match 3,500+: ${lsDrift.map((p) => p.display).join(", ")}.`
    : `One edit in the logo-set-global default changes the heading on the English pages. All ${ls.statusCounts.ok} logo headings that state a venue count match 3,500+, including the French heading on /fr/commencer. /iaapa-europe-2026 and /2026-wwa use the module for a partner heading and do not carry the venue count. /competitor/booknow-software redirects to the homepage.`;

  const hcDrift = hc.pages.filter((p) => (p.numbers || []).some((n) => n.status === "drift"));
  if (hcDrift.length) {
    hc.updateNote = `${hcDrift.length} heading${hcDrift.length === 1 ? "" : "s"} show a retired venue count and need an edit: ${hcDrift.map((p) => p.display).join(", ")}.`;
  } else if (/retired venue count/.test(hc.updateNote || "")) {
    hc.updateNote = "Each of these pages is edited individually. None of the tracked headings show a retired venue count.";
  }

  data.scrapeDate = todayLong;
  assertConsistent(data);

  const venues = data.sourceOfTruth.find((t) => t.id === "venues");
  const revenue = data.sourceOfTruth.find((t) => t.id === "revenue");
  const report = {
    auditedAt: new Date().toISOString(),
    method: "Live re-check of sitemap marketing pages, published pages already tracked by Brand Signal, and all blog posts, scored against 3,500+ venues and $5B transactions processed. Linked PDFs were not re-read.",
    pagesRequested: urls.length,
    marketingPages: marketingOk.length,
    blogPagesChecked: blogChecked,
    fetchErrors: fetched.filter((p) => !p.ok).slice(0, 20).map((p) => p.url),
    flippedToOffBrand: flippedDrift,
    restoredToOnBrand: restored,
    newOffBrandPages: added,
    logoHeadingsRead: logosRead,
    statusAfter: data.statusCounts,
    sourceOfTruth: data.sourceOfTruth.map((t) => ({
      id: t.id,
      value: t.value,
      instances: t.instances,
      onBrand: t.onBrand,
      offBrand: t.offBrand,
      retiredFound: t.retiredFound
    }))
  };

  console.log(`${todayLong}: ${marketingOk.length} marketing pages, ${blogChecked} posts, venues ${venues.onBrand}/${venues.instances}, revenue ${revenue.onBrand}/${revenue.instances}, off brand ${data.statusCounts.drift}, logo headings read ${logosRead}`);
  if (!logosRead) console.error("Warning: no logo headings were read. Logo-Set rows were left as they were.");
  if (dryRun) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }
  saveWindowFile(DATA_FILE, "BRAND_NUMBERS", data, 1);
  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2) + "\n");
  console.log("Wrote brand-numbers.data.js and brand-numbers-audit-report.json");
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err.stack || err.message || err);
    process.exit(1);
  });
}

module.exports = { retiredMentions, moneyHits, signalsOf };
