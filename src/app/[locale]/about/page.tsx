import type { Metadata } from 'next';
import Link from 'next/link';
import { Img } from '@/components/Img';
import { CtaBand, PageHero, SectionHeading, Stat } from '@/components/ui';
import { getDictionary, localePath, locales, type Locale } from '@/i18n';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  return { title: t.meta.about.title, description: t.meta.about.description };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={t.about.heroEyebrow}
        title={t.about.heroTitle}
        intro={t.about.heroIntro}
        image="/img/rock-strata.jpg"
        imageAlt={t.about.heroImageAlt}
      />

      {/* Manufacturer. */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow={t.about.factoryEyebrow}
            title={t.brand.manufacturerName}
            intro={
              <>
                <p>{t.about.factoryBody1}</p>
                <p className="mt-4">{t.about.factoryBody2}</p>
              </>
            }
          />

          <div className="self-center">
            <ul className="space-y-5">
              {t.about.pillars.map((pillar) => (
                <li
                  key={pillar}
                  className="border-l-2 border-gold-400 pl-5 font-display text-2xl text-ink-800"
                >
                  {pillar}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <dl className="mt-20 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {t.about.factoryFigures.map((figure) => (
            <div key={figure.label}>
              <Stat value={figure.value} label={figure.label} />
            </div>
          ))}
        </dl>
      </section>

      {/* Accreditation band. */}
      <section className="relative isolate overflow-hidden bg-ink-900">
        <Img
          src="/img/ore.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading
            eyebrow={t.about.researchEyebrow}
            title={t.about.researchTitle}
            tone="light"
          />
          <ul className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {t.accreditation.map((item) => (
              <li key={item} className="flex gap-4 border-t border-ink-100/15 pt-5">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-400" />
                <span className="text-sm leading-relaxed text-ink-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Distributor. */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <div className="relative aspect-4/3 overflow-hidden">
            <Img
              src="/img/facade-cladding.jpg"
              alt={t.about.distributorImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={t.common.generalDistributor}
              title={t.brand.legalName}
              intro={t.about.distributorIntro}
            />
            <dl className="mt-10 divide-y divide-ink-900/10 border-y border-ink-900/10">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                <dt className="eyebrow text-ink-400">{t.about.roleLabel}</dt>
                <dd className="text-sm text-ink-700">{t.about.roleValue}</dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                <dt className="eyebrow text-ink-400">{t.about.addressLabel}</dt>
                <dd className="text-right text-sm text-ink-700">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                <dt className="eyebrow text-ink-400">{t.about.phoneLabel}</dt>
                <dd className="text-sm text-ink-700">
                  <a href={`tel:${site.phoneHref}`} className="hover:text-gold-600">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                <dt className="eyebrow text-ink-400">{t.about.emailLabel}</dt>
                <dd className="text-sm text-ink-700">
                  <a href={`mailto:${site.email}`} className="hover:text-gold-600">
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
            <Link
              href={localePath('/contact', locale)}
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 underline decoration-gold-400 decoration-2 underline-offset-6 transition-colors hover:text-gold-600"
            >
              {t.common.getInTouch}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <CtaBand locale={locale} t={t} />
    </>
  );
}
