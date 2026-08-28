import type { Metadata } from 'next';
import { Img } from '@/components/Img';
import { CtaBand, PageHero, SectionHeading } from '@/components/ui';
import { getDictionary, locales, type Locale } from '@/i18n';
import { ipRefs } from '@/lib/site';

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
  return { title: t.meta.technology.title, description: t.meta.technology.description };
}

export default async function TechnologyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={t.technology.heroEyebrow}
        title={t.technology.heroTitle}
        intro={t.technology.heroIntro}
        image="/img/ore.jpg"
        imageAlt={t.technology.heroImageAlt}
      />

      {/* Process narrative + four stages. */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow={t.technology.processEyebrow}
          title={t.technology.processTitle}
          intro={t.technology.processIntro}
        />

        <ol className="mt-16 grid gap-px bg-ink-900/10 lg:grid-cols-2">
          {t.processStages.map((stage, index) => (
            <li key={stage.title} className="bg-paper p-8 sm:p-10">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-4xl leading-none text-gold-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl leading-tight text-ink-900">{stage.title}</h3>
              </div>
              <p className="mt-5 text-base leading-relaxed text-ink-500">{stage.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Process flow diagram. */}
      <section className="bg-ink-900">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow={t.technology.flowEyebrow}
            title={t.technology.flowTitle}
            tone="light"
          />
          <ol className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {t.flow.map((node, index) => (
              <li key={node.label} className="relative border-t border-ink-100/15 pt-6">
                <span className="eyebrow text-gold-400">
                  {t.technology.step} {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-2xl leading-tight text-paper">
                  {node.label}
                </h3>
                <p className="mt-2 text-sm text-ink-300">{node.detail}</p>
                {index < t.flow.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-6 right-0 hidden text-gold-500/50 lg:inline"
                  >
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Patents and accreditation. */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow={t.technology.ipEyebrow}
              title={t.technology.ipTitle}
              intro={t.technology.ipIntro}
            />
            <ul className="mt-12 divide-y divide-ink-900/10 border-y border-ink-900/10">
              {t.intellectualProperty.map((item, index) => (
                <li key={item.title} className="py-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="font-display text-xl text-ink-900">{item.title}</h3>
                    <span className="bg-gold-100 px-2.5 py-1 font-mono text-xs font-semibold tracking-wide text-gold-800">
                      {ipRefs[index]}
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="relative aspect-4/3 overflow-hidden">
              <Img
                src="/img/facade-curved.jpg"
                alt={t.technology.ipImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="mt-8 bg-paper-dim p-8">
              <h3 className="eyebrow text-gold-600">{t.technology.accreditationTitle}</h3>
              <ul className="mt-6 space-y-4">
                {t.accreditation.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-600">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        locale={locale}
        t={t}
        title={t.technology.ctaTitle}
        body={t.technology.ctaBody}
      />
    </>
  );
}
