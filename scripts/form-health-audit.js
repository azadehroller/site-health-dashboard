#!/usr/bin/env node
"use strict";

const path = require("path");
const {
  ORIGIN,
  normPath,
  isBlogPath,
  sydneyDate,
  longDate,
  daysBetween,
  stripTags,
  fetchText,
  mapPool,
  sitemapLocs,
  loadWindowFile,
  saveWindowFile
} = require("./lib");

const ROOT = path.join(__dirname, "..");
const DATA_FILE = path.join(ROOT, "form-audit.data.js");
const PORTAL = "3375779";
const FOOTER_FORM = "efa7bd0a-929a-4ea4-8480-1c6f77843cf2";
const LETS_CHAT = "20a46e0f-ec52-4e8d-ad13-a1c6bae4c8f0";
const CALENDLY = "48a28f64-ceaf-4249-90c7-fbfd7a10aec3";

const dryRun = process.argv.includes("--dry-run");

function footerBounds(html) {
  const start = html.search(/id=["']js-footer["']/i);
  if (start < 0) return null;
  const end = html.indexOf("</footer>", start);
  return { start, end: end < 0 ? html.length : end };
}

function targetInFooter(html, target, bounds) {
  if (!bounds || !target) return false;
  const re = new RegExp(`id=["']${target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`, "i");
  const m = re.exec(html);
  if (!m) return false;
  return m.index >= bounds.start && m.index <= bounds.end;
}

function extractPlacements(html) {
  const bounds = footerBounds(html);
  const marks = [];
  const idRe = /formId\s*:\s*['"]([0-9a-f-]{36})['"]/gi;
  let m;
  while ((m = idRe.exec(html))) marks.push({ id: m[1].toLowerCase(), index: m.index });

  const raw = [];
  for (let i = 0; i < marks.length; i++) {
    const start = marks[i].index;
    const end = i + 1 < marks.length ? marks[i + 1].index : Math.min(html.length, start + 12000);
    const slice = html.slice(start, end);
    const targetMatch = slice.match(/target\s*:\s*['"]#?([A-Za-z0-9_-]+)['"]/);
    const target = targetMatch ? targetMatch[1] : "";
    raw.push({
      id: marks[i].id,
      target,
      inFooter: targetInFooter(html, target, bounds),
      mechanism: "embed"
    });
  }

  const apiRe = /api\.hsforms\.com\/submissions\/v3\/integration\/submit\/\d+\/([0-9a-f-]{36})/gi;
  while ((m = apiRe.exec(html))) {
    raw.push({ id: m[1].toLowerCase(), target: "", inFooter: false, mechanism: "api" });
  }

  const byId = new Map();
  for (const hit of raw) {
    if (!byId.has(hit.id)) byId.set(hit.id, []);
    byId.get(hit.id).push(hit);
  }

  const kept = [];
  for (const [id, hits] of byId) {
    const body = hits.filter((h) => !h.inFooter);
    if (!body.length) continue;
    kept.push({
      id,
      mechanism: body.every((h) => h.mechanism === "api") ? "api" : "embed",
      double: hits.length > 1
    });
  }
  return { kept, literalForms: (html.match(/<form[\s>]/gi) || []).length };
}

function bandFor(days) {
  if (days == null || days < 0) return "dead";
  if (days <= 30) return "fresh";
  if (days < 180) return "warm";
  if (days < 500) return "cold";
  return "dead";
}

function pillFor(band) {
  if (band === "fresh") return "ok";
  if (band === "dead") return "bad";
  return "warn";
}

function statusLabel(band, meta) {
  return (meta[band] && meta[band].label) || band;
}

async function hubspotGet(token, apiPath) {
  const res = await fetch("https://api.hubapi.com" + apiPath, {
    headers: { Authorization: "Bearer " + token, Accept: "application/json" }
  });
  const text = await res.text();
  if (!res.ok) {
    const err = new Error(`HubSpot ${res.status} ${apiPath.split("?")[0]}`);
    err.status = res.status;
    err.body = text.slice(0, 300);
    throw err;
  }
  return JSON.parse(text);
}

async function loadHubSpot(token, formIds) {
  const names = new Map();
  let listed = 0;
  let offsetForms = null;
  try {
    const forms = await hubspotGet(token, "/forms/v2/forms");
    const list = Array.isArray(forms) ? forms : (forms.results || []);
    listed = list.length;
    for (const form of list) {
      const id = String(form.guid || form.id || "").toLowerCase();
      if (id && form.name) names.set(id, form.name);
    }
  } catch (err) {
    offsetForms = err;
  }

  const stats = new Map();
  const today = sydneyDate().replace(/-/g, "");
  let analyticsError = null;
  try {
    let offset = 0;
    for (let page = 0; page < 20; page++) {
      const data = await hubspotGet(
        token,
        `/analytics/v2/reports/forms/total?start=20180101&end=${today}&limit=350&offset=${offset}`
      );
      const rows = Array.isArray(data.breakdowns) ? data.breakdowns : [];
      for (const row of rows) {
        const id = String(row.breakdown || "").toLowerCase();
        if (!id) continue;
        const submissions = Number(row.submissions || 0);
        const views = Number(row.formViews != null ? row.formViews : (row.views != null ? row.views : row.visibles || 0));
        const prev = stats.get(id);
        if (!prev) stats.set(id, { submissions, views });
        else stats.set(id, { submissions: prev.submissions + submissions, views: prev.views + views });
      }
      offset += rows.length;
      const total = Number(data.total || 0);
      if (!rows.length || (total && offset >= total)) break;
    }
  } catch (err) {
    analyticsError = err;
  }

  const last = new Map();
  for (const id of formIds) {
    try {
      const data = await hubspotGet(token, `/form-integrations/v1/submissions/forms/${id}?limit=1`);
      const ts = data.results && data.results[0] && data.results[0].submittedAt;
      if (ts) last.set(id, sydneyDate(new Date(Number(ts))));
    } catch (err) {
      if (err.status !== 404) console.error(`Last submit unavailable for ${id}: ${err.message}`);
    }
  }

  return { names, listed, stats, last, formListError: offsetForms, analyticsError };
}

function conversionFor(submissions, views) {
  if (views < 10 && submissions > views * 2) return null;
  if (!views) return null;
  return Math.round((submissions / views) * 10000) / 100;
}

function pageTitle(html) {
  const m = String(html).match(/<title>([^<]*)<\/title>/i);
  if (!m) return "";
  return stripTags(m[1]).replace(/\s*[|–-]\s*ROLLER\s*$/i, "").trim();
}

function buildFlags(forms, doubles) {
  const flags = [];
  const byId = new Map(forms.map((f) => [f.id, f]));
  const chat = byId.get(LETS_CHAT);
  const calendly = byId.get(CALENDLY);
  const onGetStarted = (form) => form && (form.pages || []).some((p) => normPath(p.url) === "/get-started");

  if (onGetStarted(chat) && onGetStarted(calendly)) {
    flags.push({
      id: "get-started-two-forms",
      title: "/get-started/ runs two forms",
      severity: "warn",
      body: "“Let’s chat v2” is the form people see. “Calendly tag registration form” is submitted by the page when a booking is made, and it has no form markup of its own."
    });
  }

  if (calendly && calendly.conversion == null) {
    flags.push({
      id: "calendly-conversion",
      title: "Calendly conversion figures are meaningless",
      severity: "warn",
      body: `The Calendly form shows ${Number(calendly.views || 0).toLocaleString()} page views against ${Number(calendly.submissions || 0).toLocaleString()} submissions because it never renders. Treat the submissions as completed bookings.`
    });
  }

  if (chat && (chat.pageCount > 1 || doubles.some((d) => d.id === LETS_CHAT))) {
    const paths = chat.pages.map((p) => p.path).join(", ");
    const extra = doubles.filter((d) => d.id === LETS_CHAT).map((d) => d.path);
    flags.push({
      id: "lets-chat-shared",
      title: `Let’s chat v2 is on ${chat.pageCount} page${chat.pageCount === 1 ? "" : "s"}`,
      severity: "warn",
      body: `Its ${Number(chat.submissions || 0).toLocaleString()} submissions cannot be split by page. Pages: ${paths}.` +
        (extra.length ? ` It is embedded more than once on ${extra.join(", ")}.` : "")
    });
  }

  const spam = forms.find((f) => /spam/i.test(f.name));
  if (spam) {
    flags.push({
      id: "spam-leads-naming",
      title: "Get Started naming is tangled",
      severity: "warn",
      body: `“${spam.name}” is live on ${spam.pageCount} page${spam.pageCount === 1 ? "" : "s"} with ${Number(spam.submissions || 0).toLocaleString()} submissions, last one ${spam.lastSubmitted || "unknown"}.`
    });
  }

  const idle = forms.filter((f) => f.band === "cold" || f.band === "dead");
  const oldest = idle.slice().sort((a, b) => String(a.lastSubmitted || "").localeCompare(String(b.lastSubmitted || "")))[0];
  flags.push({
    id: "idle-forms",
    title: idle.length
      ? `${idle.length} form${idle.length === 1 ? " has" : "s have"} been silent for 6+ months`
      : "No form has been silent for 6+ months",
    severity: idle.length ? "bad" : "info",
    body: oldest
      ? `Their pages stay published. The longest silence is “${oldest.name}”, last submitted ${oldest.lastSubmitted}.`
      : "Every form on the site has a submission in the last six months."
  });

  const shared = forms.filter((f) => f.pageCount > 1);
  flags.push({
    id: "shared-attribution",
    title: shared.length
      ? `${shared.length} form${shared.length === 1 ? " sits" : "s sit"} on more than one page`
      : "No form sits on more than one page",
    severity: shared.length ? "info" : "info",
    body: shared.length
      ? `Their submissions pool and cannot be attributed by form ID. ${shared.map((f) => `${f.name} (${f.pageCount})`).join("; ")}.`
      : "Each live form was found on a single page."
  });

  return { flags, oldest };
}

async function main() {
  const today = sydneyDate();
  const todayLong = longDate(today);
  const data = loadWindowFile(DATA_FILE, "FORM_AUDIT");
  const previous = new Map((data.forms || []).map((f) => [f.id, f]));
  const roles = new Map();
  for (const form of data.forms || []) {
    for (const page of form.pages || []) roles.set(`${form.id}|${normPath(page.url)}`, page.role);
  }

  console.log("Fetching sitemap…");
  const locs = await sitemapLocs();
  const targets = locs.filter((url) => {
    try { return !isBlogPath(normPath(url)); } catch { return false; }
  });
  console.log(`Non-blog URLs: ${targets.length}`);

  let done = 0;
  const crawled = await mapPool(targets, 8, async (url) => {
    const res = await fetchText(url);
    done++;
    if (done % 40 === 0) console.log(`Crawled ${done}/${targets.length}`);
    return { requested: url, ...res };
  });

  const okPages = crawled.filter((p) => p.ok);
  if (okPages.length < targets.length * 0.8) {
    throw new Error(`Only ${okPages.length} of ${targets.length} pages fetched. Not updating Form Health.`);
  }

  const found = new Map();
  const doubles = [];
  let literalForms = 0;
  let redirects = 0;

  for (const page of okPages) {
    let finalPath;
    let requestedPath;
    try {
      finalPath = normPath(page.url);
      requestedPath = normPath(page.requested);
    } catch {
      continue;
    }
    if (finalPath !== requestedPath) {
      redirects++;
      if (isBlogPath(finalPath)) continue;
    }
    if (isBlogPath(finalPath)) continue;
    const extracted = extractPlacements(page.text);
    literalForms += extracted.literalForms;
    const path = finalPath;
    const url = page.url || page.requested;
    for (const hit of extracted.kept) {
      if (!found.has(hit.id)) found.set(hit.id, []);
      const list = found.get(hit.id);
      if (list.some((p) => normPath(p.url) === path)) {
        const existing = list.find((p) => normPath(p.url) === path);
        existing.double = existing.double || hit.double;
        continue;
      }
      list.push({
        url,
        path: new URL(url).pathname,
        role: roles.get(`${hit.id}|${path}`) || (hit.mechanism === "api" ? "API submit" : (pageTitle(page.text) || "Form placement")),
        double: hit.double,
        mechanism: hit.mechanism
      });
      if (hit.double) doubles.push({ id: hit.id, path: new URL(url).pathname });
    }
  }

  const placementCount = [...found.values()].reduce((n, pages) => n + pages.length, 0);
  console.log(`Forms ${found.size}, placements ${placementCount}, literal <form> tags ${literalForms}, redirects ${redirects}`);
  if (placementCount < 10) {
    throw new Error("Crawl found too few form placements. Not updating Form Health.");
  }

  const token = process.env.HUBSPOT_TOKEN || "";
  let hub = null;
  if (!token) {
    if (!dryRun) throw new Error("HUBSPOT_TOKEN is not set.");
    console.error("HUBSPOT_TOKEN is not set. Dry run will keep the previous HubSpot figures.");
  } else {
    try {
      hub = await loadHubSpot(token, [...found.keys()]);
      if (hub.formListError) console.error("HubSpot form list failed:", hub.formListError.message, hub.formListError.body || "");
      if (hub.analyticsError) console.error("HubSpot form analytics failed:", hub.analyticsError.message, hub.analyticsError.body || "");
      console.log(`HubSpot forms listed: ${hub.listed}. Analytics rows: ${hub.stats.size}. Last-submit dates: ${hub.last.size}.`);
    } catch (err) {
      console.error("HubSpot request failed:", err.message);
      hub = null;
    }
  }

  const hubspotOk = Boolean(hub && !hub.analyticsError && hub.stats.size);
  if (token && !hubspotOk) {
    const why = hub && hub.analyticsError ? hub.analyticsError.message : "HubSpot analytics returned no form rows";
    throw new Error(`${why}. Form Health was not updated.`);
  }
  const forms = [];
  for (const [id, pages] of found) {
    const prev = previous.get(id) || {};
    const name = (hub && hub.names.get(id)) || prev.name || "Untitled form";
    let submissions = prev.submissions || 0;
    let views = prev.views || 0;
    let lastSubmitted = prev.lastSubmitted || "";
    if (hubspotOk && hub.stats.has(id)) {
      submissions = hub.stats.get(id).submissions;
      views = hub.stats.get(id).views;
    }
    const gotFreshDate = Boolean(hub && hub.last.has(id));
    if (gotFreshDate) lastSubmitted = hub.last.get(id);
    const days = lastSubmitted ? daysBetween(lastSubmitted, today) : null;
    const band = gotFreshDate || (hubspotOk && !prev.lastSubmitted) ? bandFor(days) : (prev.band || bandFor(days));
    forms.push({
      name,
      id,
      hubspotUrl: `https://app.hubspot.com/forms/${PORTAL}/editor/${id}/edit/form`,
      band,
      pageCount: pages.length,
      submissions,
      views,
      conversion: conversionFor(submissions, views),
      lastSubmitted,
      daysAgoLabel: days == null ? "" : `${days}d ago`,
      pages: pages
        .sort((a, b) => {
          const prevPages = (prev.pages || []).map((p) => normPath(p.url));
          const ia = prevPages.indexOf(normPath(a.url));
          const ib = prevPages.indexOf(normPath(b.url));
          if (ia === -1 && ib === -1) return a.path.localeCompare(b.path);
          if (ia === -1) return 1;
          if (ib === -1) return -1;
          return ia - ib;
        })
        .map(({ url, path: p, role }) => ({ url, path: p, role })),
      status: statusLabel(band, data.statusMeta),
      pill: pillFor(band)
    });
  }
  forms.sort((a, b) => b.submissions - a.submissions || a.name.localeCompare(b.name));

  const statusCounts = { fresh: 0, warm: 0, cold: 0, dead: 0 };
  for (const form of forms) statusCounts[form.band] = (statusCounts[form.band] || 0) + 1;
  const { flags, oldest } = buildFlags(forms, doubles);

  data.auditedOn = todayLong;
  data.auditedOnIso = today;
  data.hubspotPortal = PORTAL;
  if (hub && hub.listed) data.hubspotFormsTotal = hub.listed;
  data.stats = {
    formsInUse: forms.length,
    pagesCrawled: okPages.length,
    placements: placementCount,
    lifetimeSubmissions: forms.reduce((n, f) => n + Number(f.submissions || 0), 0),
    idleSixMonths: statusCounts.cold + statusCounts.dead,
    sharedForms: forms.filter((f) => f.pageCount > 1).length
  };
  data.statusCounts = statusCounts;
  data.flags = flags;
  data.forms = forms;
  data.idleNote = oldest
    ? `Pages are still published. “${oldest.name}” last submitted on ${oldest.lastSubmitted}.`
    : "No form has been silent for six months.";
  if (hubspotOk) {
    data.hubspotAsOf = todayLong;
    data.source = `Site crawl of non-blog pages on ${todayLong}. Submission counts, views and last-submit dates are from HubSpot on ${todayLong}.`;
    data.notes = `No reliance on literal <form> tags (${literalForms} found in the served HTML). Detection covered the module options block, inline hbspt.forms.create() calls, and direct POSTs to api.hsforms.com. The global footer subscribe form is excluded except where that same form is embedded in the page body. ${okPages.length} non-blog pages crawled, ${forms.length} forms, ${placementCount} placements. Freshness is counted to ${todayLong}: active is a submission in the last 30 days, slowing is under six months, stale is six to about sixteen months, dormant is longer.`;
  } else {
    data.source = `Site crawl of non-blog pages on ${todayLong}. Submission counts, views and last-submit dates are still the HubSpot figures from ${data.hubspotAsOf || "the previous report"}, because today's HubSpot request did not return analytics.`;
    data.notes = `Placements were recrawled on ${todayLong} (${okPages.length} non-blog pages, ${forms.length} forms, ${placementCount} placements). Footer subscribe form ${FOOTER_FORM} is excluded except where it is embedded in the page body. Days since the last known submit are counted to ${todayLong}. Freshness bands were left as they were, because HubSpot analytics was not refreshed.`;
  }

  const sum = Object.values(statusCounts).reduce((a, b) => a + b, 0);
  if (sum !== forms.length) throw new Error(`Band counts ${sum} do not match ${forms.length} forms`);

  console.log(`${todayLong}: ${forms.length} forms, ${placementCount} placements, idle ${data.stats.idleSixMonths}, HubSpot ${hubspotOk ? "refreshed" : "unchanged"}`);
  if (dryRun) {
    for (const form of forms) {
      console.log(`- ${form.name} (${form.pageCount}) ${form.pages.map((p) => p.path).join(", ")}`);
    }
    return;
  }
  saveWindowFile(DATA_FILE, "FORM_AUDIT", data, 2);
  console.log("Wrote form-audit.data.js");
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err.message || err);
    process.exit(1);
  });
}

module.exports = { extractPlacements, bandFor, conversionFor };
