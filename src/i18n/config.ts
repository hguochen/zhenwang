export const locales = ['en', 'zh'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/** Label shown on the language toggle — each in its own language, never translated. */
export const localeNames: Record<Locale, string> = {
  en: 'EN',
  zh: '中文',
};

/** `lang` and `hreflang` attribute values. */
export const localeTags: Record<Locale, string> = {
  en: 'en-SG',
  zh: 'zh-Hans',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Prefix a route with its locale: ('/product', 'zh') -> '/zh/product'. */
export function localePath(path: string, locale: Locale): string {
  if (path === '/') return `/${locale}`;
  return `/${locale}${path.startsWith('/') ? path : `/${path}`}`;
}
