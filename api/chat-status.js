// api/chat-status.js (ESM para Node.js en Vercel Serverless)
// Mismo comprobador que usa Carlos en automatizes: pregunta desde el servidor si el n8n del chat responde.
// Así el navegador no se topa con CORS y distinguimos "n8n arriba" de una página de error del túnel (530/1033).
// Túnel fijo de Cloudflare (nas-ugreen) en n8n.equipoextra.es; N8N_BASE_URL en Vercel lo puede sobrescribir.
const DEFAULT_BASE = 'https://n8n.equipoextra.es';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=20, stale-while-revalidate=40');

  const base = (process.env.N8N_BASE_URL || DEFAULT_BASE).replace(/\/+$/, '');
  if (!/^https:\/\/[a-z0-9.-]+(:\d+)?$/i.test(base)) {
    return res.status(200).json({ online: false });
  }

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 3500);
  try {
    const r = await fetch(`${base}/healthz`, { signal: ctrl.signal, redirect: 'manual' });
    return res.status(200).json({ online: r.status === 200 });
  } catch (err) {
    return res.status(200).json({ online: false });
  } finally {
    clearTimeout(timer);
  }
}
