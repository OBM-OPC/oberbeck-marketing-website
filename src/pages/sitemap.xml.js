import { getCollection } from 'astro:content';

export async function GET() {
  const siteUrl = 'https://oberbeck-marketing.de';
  
  // Get all blog posts
  const posts = await getCollection('blog');
  
  // Static pages
  const staticPages = [
    { url: '', changefreq: 'weekly', priority: 1.0 },
    { url: '/leistungen', changefreq: 'weekly', priority: 0.9 },
    { url: '/marketing-agentur-laumersheim', changefreq: 'monthly', priority: 0.8 },
    { url: '/marketing-agentur-bad-duerkheim', changefreq: 'monthly', priority: 0.8 },
    { url: '/marketing-agentur-neustadt-weinstrasse', changefreq: 'monthly', priority: 0.8 },
    { url: '/marketing-agentur-deidesheim', changefreq: 'monthly', priority: 0.8 },
    { url: '/marketing-agentur-gruenstadt', changefreq: 'monthly', priority: 0.8 },
    { url: '/marketing-agentur-frankenthal', changefreq: 'monthly', priority: 0.8 },
    { url: '/marketing-agentur-speyer', changefreq: 'monthly', priority: 0.8 },
    { url: '/marketing-agentur-landau', changefreq: 'monthly', priority: 0.8 },
    { url: '/marketing-agentur-worms', changefreq: 'monthly', priority: 0.8 },
    { url: '/marketing-agentur-ludwigshafen', changefreq: 'monthly', priority: 0.8 },
    { url: '/blog', changefreq: 'weekly', priority: 0.9 },
    { url: '/impressum', changefreq: 'yearly', priority: 0.3 },
    { url: '/datenschutz', changefreq: 'yearly', priority: 0.3 },
  ];
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  
  ${staticPages.map(page => `
  <url>
    <loc>${siteUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>
  `).join('')}
  
  ${posts.map(post => `
  <url>
    <loc>${siteUrl}/blog/${post.id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <lastmod>${post.data.pubDate.toISOString().split('T')[0]}</lastmod>
    <image:image>
      <image:loc>${siteUrl}${post.data.image}</image:loc>
      <image:title>${post.data.title}</image:title>
      <image:caption>${post.data.description}</image:caption>
    </image:image>
  </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}