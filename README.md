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
    [locale]/           the whole site, once per language
      layout.tsx        root layout: <html lang>, fonts, header, footer
      page.tsx          /en          /zh          home
      product/          /en/product  /zh/product  specification, fire, finishes
      technology/       …            …            process and patents
      applications/     …            …            interior and public scenarios
      about/            …            …            manufacturer and distributor
      contact/          …            …            contact details and enquiry form
      not-found.tsx
    sitemap.ts          /sitemap.xml (both locales, with hreflang alternates)
    robots.ts           /robots.txt
    icon.svg            favicon, via Next's file convention
  components/
    Header.tsx          sticky nav with mobile drawer
    LocaleToggle.tsx    EN / 中文 switch, top right
    Footer.tsx
    ui.tsx              SectionHeading, PageHero, CtaBand, Stat
    AdvantageIcon.tsx   hexagon-framed line icons
    EnquiryForm.tsx     composes a pre-filled mailto to the distributor
    Img.tsx             next/image + basePath (see Deployment)
  i18n/
    config.ts           locales, tags, localePath()
    en.ts               English copy — its shape defines the Dictionary type
    zh.ts               Simplified Chinese copy
  lib/site.ts           locale-invariant facts, image paths, ids
  fonts/                subsetted Noto CJK SC (OFL, LICENSE included)
public/
  img/                  photography and logos extracted from the brochures
  index.html            hand-written root: sends / to /en or /zh
```

## Content and languages

Copy lives in **`src/i18n/en.ts` and `src/i18n/zh.ts`**; everything that reads the same in both
languages — phone, email, address, image paths — is in **`src/lib/site.ts`**.

`en.ts` is the reference: its shape defines the `Dictionary` type, so a key missing from `zh.ts`
is a type error rather than `undefined` on a live page. Add a string to `en.ts` first, then
`npm run typecheck` will tell you exactly what Chinese is missing.

Every claim is transcribed from the two source brochures supplied by ZhenWang:
`Mineral fiber pannel_en_zhenwang.pdf` (product) and `生产商简介.pdf` (manufacturer profile).
**Do not add figures that are not in those documents** — the site is read by specifiers, and an
invented number is a liability. The photography and the MinewayTech logo in `public/img/` were
extracted from the same product brochure.

Two things about the Chinese worth knowing before editing it:

- **`ZHEN WANG CONSTRUCTION PTE LTD` is deliberately left in English.** It is a registered
  Singapore entity and neither brochure gives a Chinese name; inventing one would put a company
  name on the site that exists nowhere else.
- **The plant size differs between the two brochures.** English says "1000+ acres", Chinese says
  千亩 (~165 acres). Each locale follows its own source rather than one being silently picked.
  Worth resolving with the client.

The Chinese was written against the client's own terminology (岩矿板, 智造工厂, 循环经济,
交城义望铁合金有限责任公司) but has **not been reviewed by a native speaker** — worth doing before
it is promoted, particularly the technical claims.

## Deployment

Published to GitHub Pages at **https://hguochen.github.io/zhenwang/** by
`.github/workflows/deploy.yml` on every push to `main`. The workflow lints, type-checks, runs
`next build` (which emits a static export to `out/`) and uploads that as the Pages artifact.

### One-time setup

**Settings → Pages → Build and deployment → Source: GitHub Actions.**

The workflow cannot do this for you. `configure-pages` has an `enablement: true` option that looks
like it should, but `GITHUB_TOKEN` is a GitHub App token and the Pages API will not let one create
a site — it answers `Create Pages site failed. Error: Resource not accessible by integration`,
whatever scopes the workflow declares. That was tried both while this repo was private and after it
was made public; same failure. Until the site exists, `configure-pages` also fails with
`Get Pages site failed. Error: Not Found`, so the first green run is the one after you flip the
setting.

**The repository also has to stay public**, separately from the above. Pages is not offered for
private repositories on GitHub Free, so making it private again would break the deploy even with
Pages configured.

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

The site root is `public/index.html`, a hand-written page that sends visitors to `/en/` or `/zh/`
depending on their browser language. It is not a Next route because `app/[locale]/layout.tsx` is
the root layout, and adding `app/page.tsx` would need a second root layout for six lines of
redirect. **`/` therefore 404s under `next dev`** — only the export has it. Use `/en/` locally.

### Chinese typography

Chinese is served by Noto CJK SC, subsetted to the ~715 glyphs the copy actually uses: ~100 KB a
face instead of 8 MB, self-hosted, wired up in `[locale]/layout.tsx`. Their `unicode-range` is
CJK-only and `preload` is off, so **an English visitor downloads none of it**; shared punctuation
(— " … × µ Φ) stays with Inter and Cormorant precisely so it cannot pull the CJK files in.

Do not swap this for a system font stack or Google Fonts. A system stack renders tofu boxes on any
device without a CJK face — which included the build agent's own headless Chromium — and Google
Fonts is unreachable from mainland China, so it fails for part of this audience.

If the Chinese copy gains characters outside the current subset they will render as tofu. Re-cut
the subset after any substantial edit:

```bash
pip install "fonttools[woff]" brotli
# collect the glyphs used, then for each face in src/fonts/:
pyftsubset NotoSansSC-Regular.otf --text-file=charset.txt \
  --output-file=src/fonts/NotoSansSC-Regular-subset.woff2 \
  --flavor=woff2 --layout-features='' --no-hinting --desubroutinize
```

### Moving to a custom domain

Three changes, all of which must land together: clear `NEXT_PUBLIC_BASE_PATH` in the workflow, set
`site.url` to the new origin, and add the domain in the repo's Pages settings (which writes a
`CNAME`).

## Notes

- The enquiry form has no backend. It builds a pre-filled `mailto:` to the distributor, so the
  visitor sends the enquiry from their own client and keeps a copy. Wiring it to a real endpoint
  means replacing `handleSubmit` in `EnquiryForm.tsx`.
- The site is English-only; the distributor's market is Singapore.
