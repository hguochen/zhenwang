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
| `npm run build`     | Production build                 |
| `npm run start`     | Serve the production build       |
| `npm run lint`      | ESLint (`eslint-config-next`)    |
| `npm run typecheck` | `tsc --noEmit`                   |

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

## Notes

- The enquiry form has no backend. It builds a pre-filled `mailto:` to the distributor, so the
  visitor sends the enquiry from their own client and keeps a copy. Wiring it to a real endpoint
  means replacing `handleSubmit` in `EnquiryForm.tsx`.
- `site.url` in `src/lib/site.ts` is a placeholder. Set it to the real domain before launch —
  it drives `metadataBase`, `sitemap.xml` and `robots.txt`.
- The site is English-only; the distributor's market is Singapore.
