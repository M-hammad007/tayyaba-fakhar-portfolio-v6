# Tayyaba Fakhar Portfolio — v6 Final

Static portfolio site for Tayyaba Fakhar, built with Next.js 15 and exported as static HTML (`output: 'export'`).

## Structure
- `app/` — Next.js app router pages and components
- `public/` — static assets (CV PDF)
- `work/` — case study pages (`f2`, `oqaabi`, `zakipay`, `carluex`, `evelingo`, `memo`)
- `next.config.mjs` — configured for static export (`output: 'export'`)

## Build
```bash
npm install
npm run build
```
Build output: `out/` (deployable static site).

## Deployment
Deploy `out/` contents to Hostinger subdomain `tayyabafakhar.xingabot.com` (`public_html/tayyabafakhar/`).
Built and verified: all `/work/<slug>/` pages serve HTTP 200.
