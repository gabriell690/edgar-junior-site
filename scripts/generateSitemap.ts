import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { properties } from "../src/data/properties/index";

const SITE_URL = "https://edgarjuniorcorretor.com";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, "../public");
const sitemapPath = path.join(publicDir, "sitemap.xml");

/**
 * Páginas estáticas que queremos indexar.
 */
const staticRoutes = [
  "/",
  "/joao-pessoa",
  "/campina-grande",
  "/consultoria-imobiliaria",
];

/**
 * Gera as URLs de todos os empreendimentos.
 * Remove slugs vazios e duplicados.
 */
const propertyRoutes = Array.from(
  new Set(
    properties
      .map((property) => property.slug?.trim())
      .filter((slug): slug is string => Boolean(slug))
  )
).map((slug) => `/lancamentos/${slug}`);

const routes = [...staticRoutes, ...propertyRoutes];

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const urls = routes
  .map((route) => {
    const url = `${SITE_URL}${route === "/" ? "/" : route}`;

    return `  <url>
    <loc>${escapeXml(url)}</loc>
  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(sitemapPath, sitemap, "utf8");

console.log("");
console.log("Sitemap gerado com sucesso.");
console.log(`Páginas estáticas: ${staticRoutes.length}`);
console.log(`Empreendimentos: ${propertyRoutes.length}`);
console.log(`Total de URLs: ${routes.length}`);
console.log(`Arquivo: ${sitemapPath}`);
console.log("");