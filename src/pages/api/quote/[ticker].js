const sanitizeTicker = (ticker) => String(ticker || "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "");

const buildBrapiUrl = (ticker, query) => {
  const params = new URLSearchParams();
  const token = process.env.BRAPI_TOKEN;

  params.set("range", query.range || "6mo");
  params.set("interval", query.interval || "1d");
  params.set("fundamental", "true");

  if (token) {
    params.set("token", token);
  }

  return `https://brapi.dev/api/quote/${encodeURIComponent(ticker)}?${params.toString()}`;
};

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ticker = sanitizeTicker(req.query.ticker);

  if (!ticker) {
    return res.status(400).json({ error: "Ticker invalido" });
  }

  try {
    const response = await fetch(buildBrapiUrl(ticker, req.query));
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: "Nao foi possivel consultar o ativo" });
    }

    if (!Array.isArray(data?.results) || data.results.length === 0) {
      return res.status(404).json({ error: "Ativo nao encontrado" });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Nao foi possivel consultar o ativo agora" });
  }
}
