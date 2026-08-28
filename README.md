# ZhenWang — MinewayTech Rock Mineral Panel website

Marketing website introducing **Rock Mineral Panel (RMP)**, a mineral fiber inorganic density
panel, for **ZHEN WANG CONSTRUCTION PTE LTD** — the Singapore general distributor for the
MinewayTech RMP line manufactured by Jiaocheng Yiwang Ferroalloy Co., Ltd.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | What it does                     |
| ------------------- | -------------------------------- |
| `npm run dev`       | Dev server on `0.0.0.0:3000`     |
| `npm run build`     | Static export into `out/`        |
| `npm run lint`      | ESLint (`eslint-config-next`)    |
| `npm run typecheck` | `tsc --noEmit`                   |

There is no `start` script: `output: 'export'` produces plain files, so `next start` does not
apply. To check a build locally, serve `out/` with any static server — but note that the export is
built for a `/zhenwang` base path, so serve it from a directory of that name.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4. No database and no API —
every page is statically renderable.

## Layout

```
src/
  app/
    layout.tsx          shared shell: fonts, metadata, header, footer
    page.tsx            /              home
    product/            /product       specification, fire performance, finishes
    technology/         /technology    manufacturing process and patents
    applications/       /applications  interior and public space scenarios
    about/              /about         manufacturer and distributor profiles
    contact/            /contact       contact details and enquiry form
    sitemap.ts          /sitemap.xml
    robots.ts           /robots.txt
  components/
    Header.tsx          sticky nav with mobile drawer
    Footer.tsx
    ui.tsx              SectionHeading, PageHero, CtaBand, Stat
    AdvantageIcon.tsx   hexagon-framed line icons
    EnquiryForm.tsx     composes a pre-filled mailto to the distributor
  lib/
    site.ts             all company details and product facts
public/img/             photography and logos extracted from the brochures
```

## Content

**`src/lib/site.ts` is the single source of truth** for company details, specification figures,
advantages, process stages and applications. Change a fact there and it updates everywhere.

Every claim on the site is transcribed from the two source brochures supplied by ZhenWang:
`Mineral fiber pannel_en_zhenwang.pdf` (product) and `生产商简介.pdf` (manufacturer profile).
**Do not add figures that are not in those documents** — the site is used by specifiers, and an
invented number is a liability. The photography and the MinewayTech logo in `public/img/` were
extracted from the same product brochure.

## Deployment

Published to GitHub Pages at **https://hguochen.github.io/zhenwang/** by
`.github/workflows/deploy.yml` on every push to `main`. The workflow lints, type-checks, runs
`next build` (which emits a static export to `out/`) and uploads that as the Pages artifact.

### One-time setup

The workflow cannot do these two itself — the token it runs with is not allowed to create a Pages
site, and asking it to (`configure-pages` with `enablement: true`) fails the run with
`Resource not accessible by integration`.

1. **The repository must be public**, or the account on GitHub Pro. Pages is not available for
   private repositories on GitHub Free, so the Pages API refuses to create the site at all.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**

Then re-run the workflow from the Actions tab. Every push to `main` deploys from that point on.

Two things make the static export work, and both are easy to break:

- **`NEXT_PUBLIC_BASE_PATH=/zhenwang`** is set only in the workflow, so dev and the Lightsprint
  preview keep serving from `/`. It feeds `basePath` in `next.config.ts`.
- **`src/components/Img.tsx`** wraps `next/image` and applies that prefix by hand. `images.unoptimized`
  — which a static host requires — makes `next/image` emit the raw `src`, skipping the basePath it
  applies everywhere else, so plain `<Image src="/img/…">` would 404 under `/zhenwang`. Use `Img`,
  not `Image`, for anything in `public/`.

`public/.nojekyll` stops Pages' Jekyll pass from discarding the `_next/` directory. `site.url` in
`src/lib/site.ts` is the canonical origin *including* the base path — `absoluteUrl()` builds on it
by concatenation, because `new URL('/product', base)` would silently drop that path segment.

### Moving to a custom domain

Three changes, all of which must land together: clear `NEXT_PUBLIC_BASE_PATH` in the workflow, set
`site.url` to the new origin, and add the domain in the repo's Pages settings (which writes a
`CNAME`).

## Notes

- The enquiry form has no backend. It builds a pre-filled `mailto:` to the distributor, so the
  visitor sends the enquiry from their own client and keeps a copy. Wiring it to a real endpoint
  means replacing `handleSubmit` in `EnquiryForm.tsx`.
- The site is English-only; the distributor's market is Singapore.
