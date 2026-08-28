import type { Metadata } from 'next';
import { Img } from '@/components/Img';
import { CtaBand, PageHero, SectionHeading } from '@/components/ui';
import { getDictionary, locales, type Locale } from '@/i18n';
import { publicApplicationImages } from '@/lib/site';

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
  return { title: t.meta.applications.title, description: t.meta.applications.description };
}

export default async function ApplicationsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={t.applications.heroEyebrow}
        title={t.applications.heroTitle}
        intro={t.applications.heroIntro}
        image="/img/facade-cladding.jpg"
        imageAlt={t.applications.heroImageAlt}
      />

      {/* Interior space. */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow={t.applications.interiorEyebrow}
          title={t.applications.interiorTitle}
          intro={t.applications.interiorIntro}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-stretch">
          <div className="relative min-h-80 overflow-hidden">
            <Img
              src="/img/interior-living.jpg"
              alt={t.applications.interiorImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <ol className="grid gap-px bg-ink-900/10">
            {t.interiorApplications.map((item, index) => (
              <li key={item.title} className="flex gap-5 bg-paper p-6 sm:p-7">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-gold-400 text-sm font-bold text-ink-900">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl text-ink-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Public space. */}
      <section className="bg-paper-dim">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow={t.applications.publicEyebrow}
            title={t.applications.publicTitle}
            intro={t.applications.publicIntro}
          />

          <ul className="mt-14 grid gap-8 sm:grid-cols-2">
            {publicApplicationImages.map((item) => {
              const copy = t.publicApplications[item.key];
              return (
                <li key={item.key} className="group bg-paper">
                  <div className="relative aspect-16/10 overflow-hidden">
                    <Img
                      src={item.image}
                      alt={copy.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl text-ink-900">{copy.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{copy.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Why it holds up. */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative aspect-4/3 overflow-hidden lg:order-last">
            <Img
              src="/img/facade-timber.jpg"
              alt={t.applications.serviceImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={t.applications.serviceEyebrow}
              title={t.applications.serviceTitle}
              intro={t.applications.serviceIntro}
            />
            <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {t.applications.serviceItems.map((item) => (
                <div key={item.term} className="border-t border-ink-900/12 pt-5">
                  <dt className="text-sm font-semibold tracking-wide text-ink-900">{item.term}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink-500">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <CtaBand
        locale={locale}
        t={t}
        title={t.applications.ctaTitle}
        body={t.applications.ctaBody}
      />
    </>
  );
}
