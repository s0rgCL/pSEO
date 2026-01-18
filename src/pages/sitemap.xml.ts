import data from '../../data.json';
import { createSlug } from '../utils/helpers';

const SITE_URL = 'https://www.smartpromptguide.com';

interface SitemapItem {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

export async function GET() {
  const { profesiones, estilos, acciones } = data;

  // Generate homepage entry
  const sitemap: SitemapItem[] = [
    {
      url: SITE_URL,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1.0,
    },
  ];

  // Generate entries for all prompt pages
  profesiones.forEach((profesion) => {
    estilos.forEach((estilo) => {
      acciones.forEach((accion) => {
        const slug = `${createSlug(profesion)}-${createSlug(estilo)}-${createSlug(accion)}`;
        sitemap.push({
          url: `${SITE_URL}/${slug}`,
          lastmod: new Date().toISOString(),
          changefreq: 'weekly',
          priority: 0.8,
        });
      });
    });
  });

  // Generate XML sitemap
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
