import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { site } from '@/lib/site';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} ${site.product} | ${site.legalName}`,
    template: `%s | ${site.brand} ${site.productShort}`,
  },
  description: site.description,
  keywords: [
    'mineral fiber panel',
    'rock mineral panel',
    'RMP',
    'inorganic density panel',
    'A2 fire rated panel',
    'non-combustible panel Singapore',
    'E0 formaldehyde panel',
    'MinewayTech',
    'ZhenWang Construction',
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    type: 'website',
    siteName: `${site.brand} ${site.product}`,
    title: `${site.tagline} | ${site.brand} ${site.product}`,
    description: site.description,
    url: site.url,
    locale: 'en_SG',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.tagline} | ${site.brand} ${site.product}`,
    description: site.description,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100 focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
