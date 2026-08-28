'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { type Dictionary, localePath, type Locale } from '@/i18n';
import { navRoutes, site } from '@/lib/site';
import { Img } from './Img';
import { LocaleToggle } from './LocaleToggle';

export function Header({ locale, t }: { locale: Locale; t: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    const full = localePath(href, locale);
    return href === '/' ? pathname.replace(/\/$/, '') === full : pathname.startsWith(full);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href={localePath('/', locale)}
          className="flex shrink-0 items-center"
          aria-label={site.brand}
        >
          <Img
            src="/img/mineway-logo.png"
            alt={t.brand.logoAlt}
            width={850}
            height={230}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav aria-label={t.common.mainNav} className="hidden items-center gap-1 lg:flex">
          {navRoutes.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={localePath(item.href, locale)}
                aria-current={active ? 'page' : undefined}
                className={`relative rounded-sm px-3.5 py-2 text-sm font-medium transition-colors ${
                  active ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
                }`}
              >
                {t.nav[item.key]}
                {active && (
                  <span
                    className="absolute inset-x-3.5 -bottom-px h-0.5 bg-gold-400"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LocaleToggle locale={locale} label={t.common.switchLanguage} />
          <a
            href={`tel:${site.phoneHref}`}
            className="text-sm font-medium whitespace-nowrap text-ink-600 transition-colors hover:text-ink-900"
          >
            {site.phone}
          </a>
          <Link
            href={localePath('/contact', locale)}
            className="bg-ink-900 px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-paper transition-colors hover:bg-gold-500 hover:text-ink-900"
          >
            {t.common.requestQuote}
          </Link>
        </div>

        {/* The toggle stays visible at every width — it is the one control a
            reader in the wrong language needs before they can read the menu. */}
        <div className="flex items-center gap-2 lg:hidden">
          <LocaleToggle locale={locale} label={t.common.switchLanguage} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink-800"
          >
            <span className="sr-only">{open ? t.common.closeMenu : t.common.openMenu}</span>
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        // Closing on click rather than on a pathname effect: navigating to the
        // current route would otherwise leave the drawer stuck open.
        <div
          id="mobile-nav"
          onClick={() => setOpen(false)}
          className="border-t border-ink-900/10 bg-paper lg:hidden"
        >
          <nav aria-label={t.common.mobileNav} className="mx-auto max-w-7xl px-5 py-3 sm:px-8">
            {navRoutes.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={localePath(item.href, locale)}
                  aria-current={active ? 'page' : undefined}
                  className={`block border-b border-ink-900/5 py-3 text-base font-medium ${
                    active ? 'text-gold-600' : 'text-ink-700'
                  }`}
                >
                  {t.nav[item.key]}
                </Link>
              );
            })}
            <div className="flex flex-col gap-3 pt-5 pb-2">
              <a href={`tel:${site.phoneHref}`} className="text-sm font-medium text-ink-600">
                {site.phone}
              </a>
              <Link
                href={localePath('/contact', locale)}
                className="bg-ink-900 px-5 py-3 text-center text-sm font-semibold text-paper"
              >
                {t.common.requestQuote}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
