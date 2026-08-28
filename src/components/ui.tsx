import Link from 'next/link';
import type { ReactNode } from 'react';
import { type Dictionary, localePath, type Locale } from '@/i18n';
import { Img } from './Img';

/** Eyebrow + serif heading + gold rule, the brochure's standard section opener. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'dark',
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
}) {
  const centred = align === 'center';
  return (
    <div className={`max-w-3xl ${centred ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className={`eyebrow ${tone === 'light' ? 'text-gold-300' : 'text-gold-600'}`}>{eyebrow}</p>
      )}
      <h2
        className={`mt-4 font-display text-3xl leading-tight tracking-tight sm:text-4xl ${
          tone === 'light' ? 'text-paper' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      <span
        aria-hidden="true"
        className={`mt-5 block h-0.5 w-14 bg-gold-400 ${centred ? 'mx-auto' : ''}`}
      />
      {intro && (
        <div
          className={`mt-6 text-base leading-relaxed ${
            tone === 'light' ? 'text-ink-200' : 'text-ink-500'
          }`}
        >
          {intro}
        </div>
      )}
    </div>
  );
}

/** Full-bleed page banner with a photographic background. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900">
      <Img
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/80 to-ink-900/30"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="eyebrow text-gold-300">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight text-paper sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <span aria-hidden="true" className="mt-7 block h-0.5 w-16 bg-gold-400" />
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-200">{intro}</p>
      </div>
    </section>
  );
}

/** Closing call-to-action band, reused at the foot of every page. */
export function CtaBand({
  locale,
  t,
  title,
  body,
}: {
  locale: Locale;
  t: Dictionary;
  /** Page-specific override; falls back to the shared closing message. */
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-gold-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
            {title ?? t.cta.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-800/85">{body ?? t.cta.body}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href={localePath('/contact', locale)}
            className="bg-ink-900 px-7 py-3.5 text-center text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-ink-700"
          >
            {t.common.contactZhenWang}
          </Link>
          <Link
            href={localePath('/product', locale)}
            className="border border-ink-900/30 px-7 py-3.5 text-center text-sm font-semibold tracking-wide text-ink-900 transition-colors hover:border-ink-900 hover:bg-ink-900/5"
          >
            {t.common.productSpecification}
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Oversized figure + caption, as used on the enterprise achievements spread. */
export function Stat({
  value,
  label,
  tone = 'dark',
}: {
  value: string;
  label: string;
  tone?: 'dark' | 'light';
}) {
  return (
    <div className="border-t border-current/15 pt-5">
      <p
        className={`font-display text-4xl leading-none tracking-tight sm:text-5xl ${
          tone === 'light' ? 'text-gold-300' : 'text-ink-900'
        }`}
      >
        {value}
      </p>
      <p
        className={`mt-4 text-sm leading-relaxed ${tone === 'light' ? 'text-ink-300' : 'text-ink-500'}`}
      >
        {label}
      </p>
    </div>
  );
}
