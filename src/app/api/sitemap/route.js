export async function GET() {
  const baseUrl = 'https://tusitio.com';  // Cambia por tu URL real en producción

  // Simulando rutas dinámicas (puedes luego traerlas desde base de datos)
  const routes = [
    '',
    'about',
    'contact',
    'blog/post-1',
    'blog/post-2'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>${baseUrl}/${route}</loc>
    </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
