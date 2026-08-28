import type { Metadata } from 'next';
import { Img } from '@/components/Img';
import { CtaBand, PageHero, SectionHeading } from '@/components/ui';
import { getDictionary, locales, type Locale } from '@/i18n';
import { fireScale } from '@/lib/site';

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
  return { title: t.meta.product.title, description: t.meta.product.description };
}

export default async function ProductPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={t.product.heroEyebrow}
        title={t.product.heroTitle}
        intro={t.product.heroIntro}
        image="/img/rock-slabs.jpg"
        imageAlt={t.product.heroImageAlt}
      />

      {/* Product advantages narrative. */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow={t.product.advantagesEyebrow}
            title={t.product.advantagesTitle}
            intro={
              <>
                <p>{t.product.advantagesBody1}</p>
                <p className="mt-4">{t.product.advantagesBody2}</p>
              </>
            }
          />

          <div className="space-y-8 self-center border-l-2 border-gold-400 pl-8">
            {t.product.pillars.map((pillar) => (
              <div key={pillar.title}>
                <h3 className="font-display text-2xl text-ink-900">{pillar.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-500">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specification table. */}
      <section className="bg-paper-dim">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading eyebrow={t.product.specEyebrow} title={t.product.specTitle} />
          <div className="mt-12 overflow-hidden border border-ink-900/12 bg-paper">
            <table className="w-full text-left">
              <caption className="sr-only">{t.product.specTableCaption}</caption>
              <thead>
                <tr className="bg-ink-900 text-paper">
                  <th
                    scope="col"
                    className="px-5 py-4 text-xs font-semibold tracking-[0.16em] uppercase sm:px-8"
                  >
                    {t.product.specColProperty}
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 text-xs font-semibold tracking-[0.16em] uppercase sm:px-8"
                  >
                    {t.product.specColValue}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.specifications.map((row, index) => (
                  <tr
                    key={row.property}
                    className={index % 2 === 1 ? 'bg-ink-900/[0.025]' : undefined}
                  >
                    <th
                      scope="row"
                      className="border-t border-ink-900/8 px-5 py-4 align-top text-sm font-semibold text-ink-800 sm:w-2/5 sm:px-8"
                    >
                      {row.property}
                    </th>
                    <td className="border-t border-ink-900/8 px-5 py-4 align-top text-sm text-ink-600 sm:px-8">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-ink-400">{t.product.specNote}</p>
        </div>
      </section>

      {/* Fire resistance. */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow={t.product.fireEyebrow}
              title={t.product.fireTitle}
              intro={t.product.fireIntro}
            />

            <div className="mt-12">
              <p className="eyebrow text-gold-600">{t.product.fireScaleLabel}</p>
              <ol className="mt-5 flex" aria-label={t.product.fireScaleAria}>
                {fireScale.map((grade) => {
                  const isRmp = grade === 'A2';
                  return (
                    <li
                      key={grade}
                      className={`flex-1 border-t-4 pt-3 text-center text-sm font-semibold ${
                        isRmp ? 'border-gold-400 text-ink-900' : 'border-ink-900/15 text-ink-300'
                      }`}
                    >
                      {grade}
                      {isRmp && (
                        <span className="mt-1.5 block text-[0.625rem] font-bold tracking-[0.14em] text-gold-600 uppercase">
                          RMP
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
              <div className="mt-4 flex justify-between text-xs font-medium text-ink-500">
                <span>{t.product.nonCombustible}</span>
                <span>{t.product.combustible}</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-4/3 overflow-hidden">
            <Img
              src="/img/lava.jpg"
              alt={t.product.fireImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Processing advantages. */}
      <section className="bg-ink-900">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow={t.product.processingEyebrow}
            title={t.product.processingTitle}
            tone="light"
          />
          <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {t.processingAdvantages.map((item, index) => (
              <li key={item.title} className="border-t border-ink-100/15 pt-6">
                <p className="font-display text-3xl leading-none text-gold-400">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-display text-2xl text-paper">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Finishes. */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-20">
          <div className="relative aspect-3/4 overflow-hidden">
            <Img
              src="/img/saw-cut.jpg"
              alt={t.product.finishesImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={t.product.finishesEyebrow}
              title={t.product.finishesTitle}
              intro={t.product.finishesIntro}
            />
            <ul className="mt-10 divide-y divide-ink-900/10 border-y border-ink-900/10">
              {t.finishes.map((finish) => (
                <li key={finish.name} className="flex items-baseline justify-between gap-6 py-4">
                  <span className="font-display text-xl text-ink-900">{finish.name}</span>
                  <span className="text-right text-sm text-ink-500">{finish.note}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-ink-400">{t.product.finishesNote}</p>
          </div>
        </div>
      </section>

      <CtaBand locale={locale} t={t} />
    </>
  );
}
