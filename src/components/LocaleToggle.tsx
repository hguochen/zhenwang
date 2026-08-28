'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isLocale, localeNames, locales, type Locale } from '@/i18n';

/**
 * EN / 中文 switch.
 *
 * Swaps the locale segment while staying on the same page, so a reader looking
 * at the spec table in English lands on the spec table in Chinese rather than
 * back at the home page.
 *
 * `usePathname()` reports the path with `basePath` already stripped, so the
 * segment at index 0 is always the locale.
 */
export function LocaleToggle({
  locale,
  label,
  className = '',
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname();

  const segments = pathname.split('/').filter(Boolean);
  const rest = isLocale(segments[0] ?? '') ? segments.slice(1) : segments;
  const suffix = rest.length ? `/${rest.join('/')}` : '';

  return (
    <div
      className={`flex items-center border border-ink-900/20 ${className}`}
      role="group"
      aria-label={label}
    >
      {locales.map((option) => {
        const active = option === locale;
        return (
          <Link
            key={option}
            href={`/${option}${suffix}`}
            hrefLang={option}
            aria-current={active ? 'true' : undefined}
            className={`px-2.5 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
              active
                ? 'bg-ink-900 text-paper'
                : 'text-ink-500 hover:bg-ink-900/5 hover:text-ink-900'
            }`}
          >
            {localeNames[option]}
          </Link>
        );
      })}
    </div>
  );
}
