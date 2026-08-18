const API_KEY = "a7f3c9e2b1d84e6f0a2c8b5d9e1f4a7c3b8e2d5f9a1c4e7b0d3f6a9c2e5b8d1";
const UPSTREAM = `https://roller-site-health.vercel.app/api/daily-report?key=${API_KEY}`;

function noStore(res) {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("CDN-Cache-Control", "no-store");
  res.setHeader("Vercel-CDN-Cache-Control", "no-store");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
}

module.exports = async (req, res) => {
  try {
    const response = await fetch(`${UPSTREAM}&_=${Date.now()}`, { cache: "no-store" });
    const body = await response.text();
    noStore(res);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(response.status).send(body);
  } catch (err) {
    noStore(res);
    res.status(502).json({ error: err.message });
  }
};
