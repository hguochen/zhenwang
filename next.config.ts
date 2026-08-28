import type { NextConfig } from 'next';

/*
 * GitHub Pages serves this repo at https://<user>.github.io/zhenwang/, so the
 * production build needs a base path. Dev and the Lightsprint preview serve
 * from the root, so the prefix is opt-in via the environment and only the
 * Pages workflow sets it. Point it at '' if the site ever moves to a custom
 * domain at the apex.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pages is a static host: no Node server, so no on-demand image optimizer
  // and no server rendering. Every route is prerendered to HTML at build time.
  output: 'export',
  // Pre-sized files with no image server behind them: one file, one URL. The
  // basePath that `unoptimized` skips is applied by the Img wrapper instead —
  // see src/components/Img.tsx.
  images: { unoptimized: true },
  // Emit /product/index.html rather than /product.html, which is what Pages
  // needs to serve /product/ without a redirect hop.
  trailingSlash: true,
  basePath,
  // The floating dev badge sits on top of the hero CTA and shows up in
  // preview screenshots; the terminal already reports build state.
  devIndicators: false,
  // The Lightsprint preview serves this app from https://<port>-<sandbox>.lightsprint.ai,
  // so the dev origin has to be allow-listed for HMR and server actions.
  allowedDevOrigins: ['*.lightsprint.ai'],
};

export default nextConfig;
