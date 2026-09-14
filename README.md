# AromaIQ Web

Marketing site for AromaIQ smart diffusers — Home and About pages. Built with Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS 4, Motion and Lenis.

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local   # optional, see below
npm run dev                  # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Environment variables

| Name | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production origin for canonical URLs, sitemap, robots and OG images. Defaults to `https://aromaiq.in`. |
| `NEXT_PUBLIC_MEDIA_URL` | Base URL for videos on Cloudflare R2. Empty = serve from `public/videos`. |

Both are inlined at build time, so redeploy after changing them.

## Project structure

- `src/app` — routes, metadata, sitemap, robots, OG images
- `src/components/sections` — page sections (`home/`, `about/`)
- `src/components/shared`, `src/components/layout`, `src/components/ui` — building blocks
- `src/content` — page copy
- `src/assets` — images and the asset manifest (`index.ts`); see `src/assets/README.md`
- `src/config/site.ts` — brand, navigation and footer links

## Deployment

The site is fully static and deploys to Vercel with zero config:

1. Import the GitHub repo in Vercel (framework preset: Next.js).
2. Set `NEXT_PUBLIC_SITE_URL` (and `NEXT_PUBLIC_MEDIA_URL` if videos live on R2).
3. Deploy. Every push to `main` redeploys.

Any Node host also works: `npm ci && npm run build && npm run start`.
