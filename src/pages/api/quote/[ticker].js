const sanitizeTicker = (ticker) => String(ticker || "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "");

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ticker = sanitizeTicker(req.query.ticker);

  if (!ticker) {
    return res.status(400).json({ error: "Ticker invalido" });
  }

  const token = process.env.BRAPI_TOKEN;
  const tokenQuery = token ? `?token=${encodeURIComponent(token)}` : "";
  const response = await fetch(`https://brapi.dev/api/quote/${encodeURIComponent(ticker)}${tokenQuery}`);
  const data = await response.json();

  if (!response.ok) {
    return res.status(response.status).json({ error: "Nao foi possivel consultar o ativo" });
  }

  return res.status(200).json(data);
}
