export default defineEventHandler(async (event) => {
  const baseUrl = 'https://ai.sheyann.com'
  
  // 基础页面
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' }
  ]
  
  // 生成sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  // 设置响应头
  setHeader(event, 'content-type', 'application/xml')
  setHeader(event, 'cache-control', 'max-age=3600')
  
  return sitemap
}) 