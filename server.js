const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

// Toggle: set to false to restore the live feed.
const FEED_DISABLED = true;

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
  if (FEED_DISABLED) {
    res.writeHead(503, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "Live feed temporarily unavailable" }));
    return;
  }

  https
    .get(API_URL, (proxyRes) => {
      const headers = { "Content-Type": "application/json; charset=utf-8" };
      res.writeHead(proxyRes.statusCode || 502, headers);
      proxyRes.pipe(res);
    })
    .on("error", (err) => {
      res.writeHead(502, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ error: err.message }));
    });
}

function serveStatic(req, res) {
  const pathname = req.url.split("?")[0] === "/" ? "/index.html" : req.url.split("?")[0];
  const filePath = path.join(__dirname, pathname);

  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403).end("Forbidden");
    return;
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
