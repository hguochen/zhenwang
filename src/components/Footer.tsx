import Link from 'next/link';
import { type Dictionary, fill, localePath, type Locale } from '@/i18n';
import { navRoutes, site } from '@/lib/site';
import { Img } from './Img';

export function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <footer className="bg-ink-900 text-ink-200">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Img
              src="/img/mineway-logo-light.png"
              alt={t.brand.logoAlt}
              width={850}
              height={230}
              className="h-9 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-300">{t.footer.body}</p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {t.headlineClaims.map((claim) => (
                <li key={claim} className="eyebrow text-gold-300">
                  {claim}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-ink-400">{t.common.sitemap}</h2>
            <ul className="mt-5 space-y-3">
              {navRoutes.map((item) => (
                <li key={item.href}>
                  <Link
                    href={localePath(item.href, locale)}
                    className="text-sm text-ink-200 transition-colors hover:text-gold-300"
                  >
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-ink-400">{t.common.generalDistributor}</h2>
            <address className="mt-5 space-y-3 text-sm leading-relaxed not-italic">
              <p className="font-semibold tracking-wide text-paper">{t.brand.legalName}</p>
              <p className="text-ink-300">
                {site.address.line1}
                <br />
                {site.address.line2}
              </p>
              <p>
                <a href={`tel:${site.phoneHref}`} className="transition-colors hover:text-gold-300">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold-300">
                  {site.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-100/10 pt-8 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {t.brand.legalName}. {t.footer.rights}
          </p>
          <p>{fill(t.footer.manufacturedBy, { manufacturer: t.brand.manufacturerName })}</p>
        </div>
      </div>
    </footer>
  );
}
