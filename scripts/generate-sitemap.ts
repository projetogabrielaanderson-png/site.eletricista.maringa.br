import fs from 'node:fs';
import { getSSGRoutes } from '../src/data/ssg-routes.ts';


const DOMAIN = "https://site.eletricista.maringa.br";

const generateSitemap = () => {
  const staticPaths = [
    "/",
    "/servicos",
    "/onde-atendemos",
    "/contato",
    "/privacidade",
    "/termos-de-uso"
  ];

  const allPaths = [...new Set([...staticPaths, ...getSSGRoutes()])];
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths.map(path => `  <url>
    <loc>${DOMAIN}${path === "/" ? "" : path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${path === "/" ? "daily" : "weekly"}</changefreq>
    <priority>${path === "/" ? "1.0" : (staticPaths.includes(path) ? "0.8" : "0.6")}</priority>
  </url>`).join("\n")}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', xml);
  console.log(`Sitemap generated with ${allPaths.length} routes.`);
};

generateSitemap();
