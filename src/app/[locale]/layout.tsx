import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { getDictionary, isLocale, localeTags, locales } from '@/i18n';
import { absoluteUrl, site } from '@/lib/site';
import '../globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

/*
 * Chinese text needs a font shipped with the site.
 *
 * Relying on the reader's system CJK face looked cheap and free, but it means
 * anything without one renders every character as a tofu box — which is
 * exactly what the build agent's headless Chromium did, so it is not a
 * hypothetical. Google Fonts is not an option either: it is unreachable from
 * mainland China, so a good part of this audience would get the tofu instead.
 *
 * So: Noto CJK SC, subsetted to the ~715 glyphs this site actually uses, which
 * turns 8 MB per face into ~100 KB and is self-hosted. `unicode-range` is
 * CJK-only and `preload` is off, so an English visitor never fetches a byte of
 * it — the shared punctuation (— " … × µ Φ) stays with Inter and Cormorant so
 * it cannot pull these files in.
 *
 * Licence: SIL Open Font License 1.1 — see src/fonts/LICENSE.
 *
 * The unicode-range is repeated literally in both calls on purpose: next/font
 * statically analyses these arguments at build time, so a shared constant
 * serialises as an empty value and the font silently loses its range.
 */
const cjkSans = localFont({
  src: [
    { path: '../../fonts/NotoSansSC-Regular-subset.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/NotoSansSC-Bold-subset.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-cjk-sans',
  display: 'swap',
  preload: false,
  declarations: [
    { prop: 'unicode-range', value: 'U+2103, U+3000-303F, U+3400-4DBF, U+4E00-9FFF, U+FF00-FFEF' },
  ],
});

// The display serif is only ever set at weight 400 on this site, so one face.
const cjkSerif = localFont({
  src: [{ path: '../../fonts/NotoSerifSC-Regular-subset.woff2', weight: '400', style: 'normal' }],
  variable: '--font-cjk-serif',
  display: 'swap',
  preload: false,
  declarations: [
    { prop: 'unicode-range', value: 'U+2103, U+3000-303F, U+3400-4DBF, U+4E00-9FFF, U+FF00-FFEF' },
  ],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: t.meta.home.title,
      template: `%s | ${site.brand} ${site.productShort}`,
    },
    description: t.meta.home.description,
    alternates: {
      canonical: absoluteUrl(`/${locale}`),
      languages: {
        'en-SG': absoluteUrl('/en'),
        'zh-Hans': absoluteUrl('/zh'),
        'x-default': absoluteUrl('/en'),
      },
    },
    openGraph: {
      type: 'website',
      siteName: `${site.brand} ${t.brand.productName}`,
      title: `${t.brand.tagline} | ${site.brand} ${t.brand.productName}`,
      description: t.meta.home.description,
      url: absoluteUrl(`/${locale}`),
      locale: locale === 'zh' ? 'zh_CN' : 'en_SG',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t.brand.tagline} | ${site.brand} ${t.brand.productName}`,
      description: t.meta.home.description,
    },
    // The favicon comes from src/app/icon.svg via Next's file convention, which
    // prefixes the base path for us. A hardcoded '/favicon.svg' here would 404
    // on GitHub Pages, where the site is served under /zhenwang.
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <html
      lang={localeTags[locale]}
      className={`${display.variable} ${body.variable} ${cjkSans.variable} ${cjkSerif.variable}`}
    >
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100 focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          {t.common.skipToContent}
        </a>
        <Header locale={locale} t={t} />
        <main id="main">{children}</main>
        <Footer locale={locale} t={t} />
      </body>
    </html>
  );
}
