const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT) || 3000;
const API_KEY = "a7f3c9e2b1d84e6f0a2c8b5d9e1f4a7c3b8e2d5f9a1c4e7b0d3f6a9c2e5b8d1";
const API_URL = `https://roller-site-health.vercel.app/api/daily-report?key=${API_KEY}`;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
};

function proxyFeed(res) {
  const url = `${API_URL}&_=${Date.now()}`;
  https
    .get(url, (proxyRes) => {
      const headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        "CDN-Cache-Control": "no-store",
        Pragma: "no-cache",
        Expires: "0"
      };
      res.writeHead(proxyRes.statusCode || 502, headers);
      proxyRes.pipe(res);
    })
    .on("error", (err) => {
      res.writeHead(502, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ error: err.message }));
    });
}

const SLUG_REDIRECTS = {
  "/index.html": "/",
  "/brand-numbers": "/brand-signal",
  "/brand-numbers.html": "/brand-signal",
  "/brand-numbers-detail": "/brand-signal-detail",
  "/brand-numbers-detail.html": "/brand-signal-detail",
};

function serveStatic(req, res) {
  const url = new URL(req.url, "http://127.0.0.1");
  let pathname = decodeURIComponent(url.pathname);

  if (SLUG_REDIRECTS[pathname]) {
    res.writeHead(301, { Location: SLUG_REDIRECTS[pathname] + url.search });
    res.end();
    return;
  }

  if (pathname.endsWith(".html")) {
    const clean = pathname.slice(0, -".html".length) || "/";
    res.writeHead(301, { Location: clean + url.search });
    res.end();
    return;
  }

  const lookup = pathname === "/" ? "/index.html" : pathname;
  let filePath = path.normalize(path.join(__dirname, lookup));
  const root = path.normalize(__dirname + path.sep);
  if (filePath !== path.normalize(__dirname) && !filePath.startsWith(root)) {
    res.writeHead(403).end("Forbidden");
    return;
  }

  if (!path.extname(lookup) && !fs.existsSync(filePath)) {
    const htmlPath = filePath + ".html";
    if (fs.existsSync(htmlPath)) filePath = htmlPath;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404).end("Not found");
      return;
    }
    res.writeHead(200, { "Content-Type": MIME[path.extname(filePath)] || "text/plain" });
    res.end(data);
  });
}

http
  .createServer((req, res) => {
    if (req.url.startsWith("/api/daily-report")) {
      proxyFeed(res);
      return;
    }
    serveStatic(req, res);
  })
  .listen(PORT, () => {
    console.log(`Dashboard running at http://localhost:${PORT}`);
    console.log("Live feed proxied through /api/daily-report");
  });
