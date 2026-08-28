import Link from 'next/link';
import { AdvantageIcon } from '@/components/AdvantageIcon';
import { Img } from '@/components/Img';
import { CtaBand, SectionHeading, Stat } from '@/components/ui';
import { getDictionary, localePath, locales, type Locale } from '@/i18n';
import { coreAdvantageIcons, publicApplicationImages } from '@/lib/site';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale);

  return (
    <>
      {/* Hero — mirrors the brochure cover: gold field, angular shard, dark interior. */}
      <section className="relative isolate overflow-hidden bg-gold-400">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow text-ink-800/70">{t.home.heroEyebrow}</p>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
              {t.home.heroTitleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <ul className="mt-9 space-y-2.5">
              {t.headlineClaims.map((claim) => (
                <li key={claim} className="eyebrow flex items-center gap-3 text-ink-800">
                  <span aria-hidden="true" className="h-px w-6 shrink-0 bg-ink-800/50" />
                  {claim}
                </li>
              ))}
            </ul>
            <p className="mt-9 max-w-xl text-base leading-relaxed text-ink-800/85">
              {t.home.heroBody}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href={localePath('/product', locale)}
                className="bg-ink-900 px-7 py-3.5 text-center text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-ink-700"
              >
                {t.common.exploreThePanel}
              </Link>
              <Link
                href={localePath('/contact', locale)}
                className="border border-ink-900/30 px-7 py-3.5 text-center text-sm font-semibold tracking-wide text-ink-900 transition-colors hover:border-ink-900 hover:bg-ink-900/5"
              >
                {t.common.requestQuote}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="shard-alt absolute -top-5 -right-4 hidden h-full w-3/4 bg-ink-800/25 sm:block"
            />
            <div className="shard relative aspect-4/3 overflow-hidden">
              <Img
                src="/img/interior-living.jpg"
                alt={t.home.heroImageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Headline performance strip. */}
      <section className="border-b border-ink-900/10 bg-ink-900">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-ink-100/10 px-0 lg:grid-cols-4">
          {t.home.strip.map((item) => (
            <div key={item.term} className="bg-ink-900 px-6 py-8 sm:px-8">
              <dt className="eyebrow text-ink-400">{item.term}</dt>
              <dd className="mt-3 font-display text-2xl tracking-tight text-gold-300 sm:text-3xl">
                {item.detail}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Product introduction. */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative aspect-4/5 overflow-hidden sm:aspect-4/3 lg:aspect-4/5">
            <Img
              src="/img/rock-strata.jpg"
              alt={t.home.introImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-gold-400 px-6 py-5">
              <p className="eyebrow text-ink-800/70">{t.home.introBadgeEyebrow}</p>
              <p className="font-display text-2xl leading-tight text-ink-900">
                {t.home.introBadgeLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow={t.home.introEyebrow}
              title={t.home.introTitle}
              intro={
                <>
                  <p>{t.home.introBody1}</p>
                  <p className="mt-4">{t.home.introBody2}</p>
                </>
              }
            />
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4">
              {t.home.fourWords.map((word) => (
                <li
                  key={word}
                  className="border-l-2 border-gold-400 pl-4 font-display text-xl text-ink-800"
                >
                  {word}
                </li>
              ))}
            </ul>
            <Link
              href={localePath('/product', locale)}
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 underline decoration-gold-400 decoration-2 underline-offset-6 transition-colors hover:text-gold-600"
            >
              {t.common.readFullSpec}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 10 core advantages. */}
      <section className="bg-paper-dim">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex items-start gap-5">
            <span className="bg-gold-400 px-4 py-1 font-display text-5xl leading-none text-ink-900">
              10
            </span>
            <h2 className="font-display text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
              {t.home.advantagesTitleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>

          <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {coreAdvantageIcons.map((advantage) => {
              const copy = t.coreAdvantages[advantage.key];
              return (
                <li key={advantage.key}>
                  <AdvantageIcon name={advantage.icon} className="h-12 w-12 text-gold-600" />
                  <h3 className="mt-5 text-sm font-semibold tracking-wide text-ink-900">
                    {copy.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{copy.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Enterprise achievements. */}
      <section className="relative isolate overflow-hidden bg-ink-900">
        <Img
          src="/img/facade-timber.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow={t.home.enterpriseEyebrow}
            title={t.home.enterpriseTitle}
            tone="light"
            intro={t.home.enterpriseIntro}
          />
          <dl className="mt-16 grid gap-x-10 gap-y-12 text-ink-200 sm:grid-cols-2 lg:grid-cols-3">
            {t.enterpriseFigures.map((figure) => (
              <div key={figure.label}>
                <Stat value={figure.value} label={figure.label} tone="light" />
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Applications preview. */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow={t.home.applicationsEyebrow}
          title={t.home.applicationsTitle}
          intro={t.home.applicationsIntro}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div data-testid="home-interior-visual" className="relative aspect-16/10 overflow-hidden">
            <Img
              src="/img/interior-living.jpg"
              alt={t.home.interiorImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute top-0 right-0 bg-gold-400 px-5 py-2.5">
              <p className="font-display text-lg text-ink-900">{t.home.interiorSpaceLabel}</p>
            </div>
          </div>
          <ul className="grid gap-px bg-ink-900/10">
            {t.interiorApplications.map((item, index) => (
              <li key={item.title} className="flex gap-5 bg-paper px-1 py-5">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-gold-400 text-xs font-bold text-ink-900">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl text-ink-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <ul
          data-testid="home-public-spaces"
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {publicApplicationImages.map((item) => {
            const copy = t.publicApplications[item.key];
            return (
              <li key={item.key} className="group relative aspect-4/5 overflow-hidden">
                <Img
                  src={item.image}
                  alt={copy.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="eyebrow text-gold-300">{t.home.publicSpaceLabel}</p>
                  <h3 className="mt-1.5 font-display text-2xl text-paper">{copy.title}</h3>
                </div>
              </li>
            );
          })}
        </ul>

        <Link
          href={localePath('/applications', locale)}
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 underline decoration-gold-400 decoration-2 underline-offset-6 transition-colors hover:text-gold-600"
        >
          {t.common.seeAllApplications}
          <span aria-hidden="true">→</span>
        </Link>
      </section>

      <CtaBand locale={locale} t={t} />
    </>
  );
}
