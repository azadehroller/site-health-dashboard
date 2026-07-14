// Toggle: set to false to restore the live feed.
const FEED_DISABLED = true;

const API_KEY = "a7f3c9e2b1d84e6f0a2c8b5d9e1f4a7c3b8e2d5f9a1c4e7b0d3f6a9c2e5b8d1";
const UPSTREAM = `https://roller-site-health.vercel.app/api/daily-report?key=${API_KEY}`;

module.exports = async (req, res) => {
  if (FEED_DISABLED) {
    res.status(503).json({ error: "Live feed temporarily unavailable" });
    return;
  }

  try {
    const response = await fetch(UPSTREAM, { cache: "no-store" });
    const body = await response.text();
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");
    res.status(response.status).send(body);
  } catch (err) {
    res.status(502).json({ error: err.message });
  }
};
