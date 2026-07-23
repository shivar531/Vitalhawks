// ---------------------------------------------------------------------------
// VitalHawks — post-build SEO prerender
//
// Runs automatically after `vite build`. For every page in seo-pages.mjs it
// writes dist/<path>/index.html containing that page's own canonical, title,
// description and Open Graph tags — so Google sees correct metadata in the
// raw HTML response, before any JavaScript runs.
//
// Also generates dist/sitemap.xml and dist/robots.txt.
//
// You should not need to edit this file. Edit seo-pages.mjs instead.
// ---------------------------------------------------------------------------

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SITE_URL, DEFAULT_OG_IMAGE, pages } from './seo-pages.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const templatePath = join(distDir, 'index.html')

if (!existsSync(templatePath)) {
  console.error('\n[seo] dist/index.html not found. Run `vite build` first.\n')
  process.exit(1)
}

const template = readFileSync(templatePath, 'utf8')

// --- helpers ---------------------------------------------------------------

const escapeHtml = (str) =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const urlFor = (page) =>
  page.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${page.path}`

// Remove the metadata tags Vite baked in, so we can inject per-page versions.
function stripExistingMeta(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta[^>]+name=["']description["'][^>]*>/gi, '')
    .replace(/<meta[^>]+name=["']robots["'][^>]*>/gi, '')
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>/gi, '')
    .replace(/<meta[^>]+(?:property|name)=["']og:[^"']*["'][^>]*>/gi, '')
    .replace(/<meta[^>]+(?:property|name)=["']twitter:[^"']*["'][^>]*>/gi, '')
}

function buildHead(page) {
  const url = urlFor(page)
  const title = escapeHtml(page.title)
  const description = escapeHtml(page.description)
  const image = escapeHtml(page.ogImage || DEFAULT_OG_IMAGE)

  const robots = page.noindex
    ? '    <meta name="robots" content="noindex, follow" />'
    : '    <meta name="robots" content="index, follow, max-image-preview:large" />'

  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${escapeHtml(url)}" />
${robots}

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="VitalHawks" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${escapeHtml(url)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />
`
}

function writePage(page) {
  const html = stripExistingMeta(template).replace(
    /<\/head>/i,
    `${buildHead(page)}  </head>`
  )

  const outDir =
    page.path === '/' ? distDir : join(distDir, page.path.replace(/^\//, ''))

  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html, 'utf8')
}

// --- sitemap ---------------------------------------------------------------

function writeSitemap(indexable) {
  const today = new Date().toISOString().split('T')[0]

  const urls = indexable
    .map((page) => {
      return `  <url>
    <loc>${escapeHtml(urlFor(page))}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq || 'monthly'}</changefreq>
    <priority>${page.priority || '0.8'}</priority>
  </url>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
  writeFileSync(join(distDir, 'sitemap.xml'), xml, 'utf8')
}

function writeRobots() {
  const txt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`
  writeFileSync(join(distDir, 'robots.txt'), txt, 'utf8')
}

// --- run -------------------------------------------------------------------

const seen = new Set()
for (const page of pages) {
  if (seen.has(page.path)) {
    console.error(`[seo] duplicate path in seo-pages.mjs: ${page.path}`)
    process.exit(1)
  }
  if (!page.path.startsWith('/')) {
    console.error(`[seo] path must start with "/": ${page.path}`)
    process.exit(1)
  }
  seen.add(page.path)
  writePage(page)
}

const indexable = pages.filter((p) => !p.noindex)
writeSitemap(indexable)
writeRobots()

console.log(
  `\n[seo] generated ${pages.length} page(s) — ${indexable.length} in sitemap, ` +
    `${pages.length - indexable.length} noindex`
)
console.log('[seo] wrote sitemap.xml + robots.txt\n')
