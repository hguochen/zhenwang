/**
 * Locale-invariant facts and structural data.
 *
 * Prose lives in `src/i18n/{en,zh}.ts`. What stays here is everything that
 * reads the same in every language — contact details, image paths, icon names
 * and the ids that tie a dictionary entry to its asset.
 *
 * Contact details are transcribed from the brochures supplied by ZhenWang.
 */

export const site = {
  legalName: 'ZHEN WANG CONSTRUCTION PTE LTD',
  brand: 'MinewayTech',
  productShort: 'RMP',
  // Canonical origin + base path. GitHub Pages serves a project repo under
  // /<repo>, so the path segment is part of the site's identity. On a custom
  // domain at the apex this becomes just 'https://example.com' — and
  // NEXT_PUBLIC_BASE_PATH in the deploy workflow has to be cleared to match.
  url: 'https://hguochen.github.io/zhenwang',
  phone: '+65 8011 3598',
  phoneHref: '+6580113598',
  email: 'shuzhen@zhenwang.org',
  // No postal address by choice. Phone and email are the contact routes; if a
  // street address is ever wanted back it needs adding to the footer, the
  // contact page and the about page, plus an `addressLabel` in both locales.
  manufacturerFounded: 1988,
};

/**
 * Absolute URL for a route.
 *
 * Deliberately string concatenation rather than `new URL(path, site.url)`:
 * an absolute path resets the base's path, so `new URL('/product', ...)` would
 * silently drop the `/zhenwang` base path and emit canonical URLs that 404.
 * The trailing slash matches `trailingSlash: true` in next.config.ts.
 */
export function absoluteUrl(path: string): string {
  const base = site.url.replace(/\/$/, '');
  if (path === '/') return `${base}/`;
  const clean = `/${path.replace(/^\/+|\/+$/g, '')}`;
  return `${base}${clean}/`;
}

/** Routes, in nav order. Labels come from the dictionary's `nav` block. */
export const navRoutes = [
  { href: '/', key: 'home' },
  { href: '/product', key: 'product' },
  { href: '/technology', key: 'technology' },
  { href: '/applications', key: 'applications' },
  { href: '/about', key: 'about' },
  { href: '/contact', key: 'contact' },
] as const;

export type NavKey = (typeof navRoutes)[number]['key'];

/** Icon per advantage; the copy lives under `coreAdvantages` in each locale. */
export const coreAdvantageIcons = [
  { key: 'fire', icon: 'flame' },
  { key: 'eco', icon: 'leaf' },
  { key: 'water', icon: 'droplet' },
  { key: 'stability', icon: 'square' },
  { key: 'mould', icon: 'shield' },
  { key: 'radionuclides', icon: 'atom' },
  { key: 'noise', icon: 'wave' },
  { key: 'screw', icon: 'screw' },
  { key: 'patents', icon: 'patent' },
  { key: 'dimensions', icon: 'ruler' },
] as const;

export type AdvantageKey = (typeof coreAdvantageIcons)[number]['key'];

/** Photograph per public-space scenario; copy lives under `publicApplications`. */
export const publicApplicationImages = [
  { key: 'factory', image: '/img/app-factory.jpg' },
  { key: 'hospital', image: '/img/app-hospital.jpg' },
  { key: 'airport', image: '/img/app-airport.jpg' },
  { key: 'school', image: '/img/app-school.jpg' },
] as const;

export type PublicApplicationKey = (typeof publicApplicationImages)[number]['key'];

/** Patent and registration numbers — identifiers, never translated. */
export const ipRefs = [
  'CN117779342A',
  'ZL 2022 2 2764625.3',
  'CN 2020 2 2380938.1',
  '2024SR0281785',
];

/** Fire classification scale used on the product page (GB/T 8624-2012). */
export const fireScale = ['A1', 'A2', 'B', 'C', 'D', 'E', 'F'];
