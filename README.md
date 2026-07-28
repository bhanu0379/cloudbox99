# Cloudbox99

Marketing site for Cloudbox99 — VPS hosting, dedicated servers, cloud storage,
backup & disaster recovery, and 24/7 Security Operations Center services.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and
Framer Motion.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app` — App Router entry (`layout.tsx`, `page.tsx`, `globals.css`)
- `src/components` — page sections (Navbar, Hero, Services, Pricing, Contact, Footer, etc.)
- `src/lib` — shared utilities

## Deploying to Vercel

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Go to [vercel.com/new](https://vercel.com/new) and import the `cb99` repository.
3. Vercel auto-detects the Next.js framework — no configuration needed.
4. Deploy. Every push to the default branch redeploys automatically; PRs get preview URLs.

To point your domain (`cloudbox99.com`) at the deployment, add it under
Project Settings → Domains in the Vercel dashboard and follow the DNS
instructions Vercel provides.
