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
import { fileURLToPath, pathToFileURL } from 'node:url'
import { SITE_URL, DEFAULT_OG_IMAGE, pages } from './seo-pages.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const templatePath = join(distDir, 'index.html')

if (!existsSync(templatePath)) {
  console.error('\n[seo] dist/index.html not found. Run `vite build` first.\n')
  process.exit(1)
}

const template = readFileSync(templatePath, 'utf8')

// Full page render (built by `vite build --ssr src/entry-server.jsx`). If it is
// missing or fails, each page falls back to the basic body below, so the build
// never breaks because of it.
const ssrEntry = join(__dirname, '..', 'dist-ssr', 'entry-server.js')
let renderPage = null
if (existsSync(ssrEntry)) {
  try {
    const mod = await import(pathToFileURL(ssrEntry).href)
    renderPage = mod.render
  } catch (err) {
    console.warn(`[seo] could not load SSR bundle, using basic prerender: ${err?.message || err}`)
  }
} else {
  console.warn('[seo] dist-ssr/entry-server.js not found, using basic prerender')
}

// React logs a lot during server render (e.g. useLayoutEffect warnings); keep
// the build log readable while rendering.
async function quietly(fn) {
  const { error, warn } = console
  console.error = () => {}
  console.warn = () => {}
  try {
    return await fn()
  } finally {
    console.error = error
    console.warn = warn
  }
}

async function fullBody(page) {
  if (!renderPage) return null
  try {
    const html = await quietly(() => renderPage(page.path))
    // Sanity check: real content, not an empty shell or the loading screen.
    const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
    if (text.split(' ').length < 80 || /Loading Experience/i.test(text)) return null
    return `<div id="root">${html}</div>`
  } catch (err) {
    console.warn(`[seo] full render failed for ${page.path}: ${err?.message || err}`)
    return null
  }
}

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

// --- crawlable body ----------------------------------------------------------
// The React app mounts into <div id="root"> with createRoot, which replaces
// whatever is inside it. So we put real text + plain <a href> links in there:
// Google (and anyone without JS) sees the page heading, its description and
// links to every other page, and visitors get the full React page a moment later.

const ROLE_PATHS = /^\/(cfo|ceo|cio|cmo|coo|hr-director|procurement-head|sales-head)-database$/

function linkGroups(indexable) {
  const groups = [
    ['Company', []],
    ['Data by industry', []],
    ['Data by role', []],
    ['Compare', []],
  ]
  for (const p of indexable) {
    let i = 0
    if (p.path.endsWith('-alternative')) i = 3
    else if (ROLE_PATHS.test(p.path)) i = 2
    else if (p.path !== '/' && /database|contact-data|financial-services|lead-lists/.test(p.path)) i = 1
    groups[i][1].push(p)
  }
  return groups.filter(([, list]) => list.length)
}

const linkLabel = (p) =>
  p.path === '/' ? 'Home' : p.title.split(/\s[|—–-]\s/)[0].trim()

function buildBody(page, indexable) {
  const nav = linkGroups(indexable)
    .map(
      ([name, list]) => `        <section>
          <h2>${escapeHtml(name)}</h2>
          <ul>
${list
  .map((p) => `            <li><a href="${escapeHtml(p.path)}">${escapeHtml(linkLabel(p))}</a></li>`)
  .join('\n')}
          </ul>
        </section>`
    )
    .join('\n')

  return `<div id="root">
      <main>
        <h1>${escapeHtml(page.h1 || page.title)}</h1>
        <p>${escapeHtml(page.description)}</p>
        <p><a href="/SampleList">Get a free sample list</a> · <a href="/Pricing">See pricing</a> · <a href="/Contact">Contact us</a></p>
      </main>
      <nav aria-label="Site">
${nav}
      </nav>
    </div>`
}

async function writePage(page, indexable) {
  const full = await fullBody(page)
  const body = full || buildBody(page, indexable)
  const html = stripExistingMeta(template)
    .replace(/<\/head>/i, `${buildHead(page)}  </head>`)
    .replace(/<div id="root"><\/div>/i, () => body)

  const outDir =
    page.path === '/' ? distDir : join(distDir, page.path.replace(/^\//, ''))

  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html, 'utf8')
  return Boolean(full)
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

const indexable = pages.filter((p) => !p.noindex)

const seen = new Set()
let fullCount = 0
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
  if (await writePage(page, indexable)) fullCount++
}

writeSitemap(indexable)
writeRobots()

console.log(
  `\n[seo] generated ${pages.length} page(s) — ${indexable.length} in sitemap, ` +
    `${pages.length - indexable.length} noindex`
)
console.log(`[seo] full content rendered for ${fullCount}/${pages.length} page(s), basic fallback for the rest`)
console.log('[seo] wrote sitemap.xml + robots.txt\n')
