import Link from 'next/link';
import { Img } from './Img';
import { headlineClaims, nav, site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-200">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Img
              src="/img/mineway-logo-light.png"
              alt={`${site.brand} — Mineral Fiber Panel`}
              width={850}
              height={230}
              className="h-9 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-300">
              {site.tagline}. {site.product} ({site.productShort}) is a rock fibre inorganic density
              panel that brings the hardness, fire resistance and water resistance of stone to the
              workability of wood.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {headlineClaims.map((claim) => (
                <li key={claim} className="eyebrow text-gold-300">
                  {claim}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-ink-400">Sitemap</h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-200 transition-colors hover:text-gold-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-ink-400">{site.role}</h2>
            <address className="mt-5 space-y-3 text-sm leading-relaxed not-italic">
              <p className="font-semibold tracking-wide text-paper">{site.legalName}</p>
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
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>
            {site.brand} {site.product} is manufactured by {site.manufacturer.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
