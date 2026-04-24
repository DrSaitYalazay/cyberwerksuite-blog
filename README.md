# CyberWerkSuite Blog

Astro-based static blog for [www.cyberwerksuite.com](https://www.cyberwerksuite.com), deployed at `blog.cyberwerksuite.com`.

## Stack
- **Astro 5** (static SSG)
- **Tailwind CSS** (matches main site brand)
- **Bilingual** (DE / EN) via Astro i18n
- **Content collections** for typed Markdown
- **Auto sitemap + RSS feeds** (`/rss-de.xml`, `/rss-en.xml`)
- **JSON-LD Article schema** + Open Graph + hreflang

## Local development

```bash
npm install
npm run dev   # http://localhost:4321
npm run build
npm run preview
```

## Adding a post

Create a markdown file in either:
- `src/content/de/<slug>.md` (German)
- `src/content/en/<slug>.md` (English)

Frontmatter:
```yaml
---
title: "Titel des Artikels"
description: "Kurze Beschreibung (max ~160 Zeichen für SEO)"
pubDate: 2026-04-24
tags: ["NIS2", "Compliance"]
image: "/posts/my-image.jpg"   # optional, place in public/posts/
draft: false
---
```

The post automatically appears at `/de/<slug>/` or `/en/<slug>/`.

## Deploy (Cloudflare Pages)

1. Push this repo to GitHub
2. Cloudflare Dashboard → Pages → Create → Connect to Git
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output: `dist`
4. Add custom domain: `blog.cyberwerksuite.com`
5. Done — every `git push` auto-deploys.

## Structure

```
src/
├── components/   # Header, Footer, PostCard
├── content/      # de/*.md, en/*.md (typed via config.ts)
├── i18n/         # ui.ts (translations)
├── layouts/      # BaseLayout.astro (SEO + chrome)
├── pages/
│   ├── index.astro       # → redirect /de/
│   ├── de/index.astro    # DE blog listing
│   ├── de/[...slug].astro # DE post template
│   ├── en/index.astro
│   ├── en/[...slug].astro
│   ├── rss-de.xml.js
│   └── rss-en.xml.js
└── styles/global.css
```

## Brand
Colors and fonts mirror `www.cyberwerksuite.com` (deep blue primary, gold accent, Inter).
