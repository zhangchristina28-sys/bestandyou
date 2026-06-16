# Natural Scalp Care Brand Site

An English Astro website for a natural scalp care brand focused on oily and greasy-prone scalps. The site is built for brand trust, SEO, AI search citation, waitlist collection, and future Cloudflare Pages deployment.

## Tech Stack

- Astro
- Tailwind CSS
- Markdown / MDX content
- Netlify-ready static output

## Local Development

```bash
npm install
npm run dev
```

Open the local URL shown by Astro.

## Build

```bash
npm run build
```

The production output is generated in:

```bash
dist
```

## Netlify

Use these settings:

- Build command: `npm run build`
- Publish directory: `dist`
- Framework preset: Astro

Before deployment, update the `site` value in `astro.config.mjs` and the sitemap URL in `public/robots.txt` to your real domain.

## Content

Blog articles live in `src/content/blog`.
Ingredient pages are generated from `src/data/ingredients.ts`.
Reusable components live in `src/components`.
