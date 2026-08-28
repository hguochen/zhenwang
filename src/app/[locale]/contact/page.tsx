import type { Metadata } from 'next';
import { EnquiryForm } from '@/components/EnquiryForm';
import { PageHero, SectionHeading } from '@/components/ui';
import { getDictionary, locales, type Locale } from '@/i18n';
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
  return { title: t.meta.contact.title, description: t.meta.contact.description };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={t.contact.heroEyebrow}
        title={t.contact.heroTitle}
        intro={t.contact.heroIntro}
        image="/img/facade-curved.jpg"
        imageAlt={t.contact.heroImageAlt}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow={t.common.generalDistributor} title={t.brand.legalName} />

            <address className="mt-10 space-y-8 not-italic">
              <div className="border-t border-ink-900/12 pt-5">
                <h3 className="eyebrow text-ink-400">{t.contact.phoneLabel}</h3>
                <p className="mt-3">
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="font-display text-2xl text-ink-900 transition-colors hover:text-gold-600"
                  >
                    {site.phone}
                  </a>
                </p>
              </div>

              <div className="border-t border-ink-900/12 pt-5">
                <h3 className="eyebrow text-ink-400">{t.contact.emailLabel}</h3>
                <p className="mt-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="font-display text-2xl break-all text-ink-900 transition-colors hover:text-gold-600"
                  >
                    {site.email}
                  </a>
                </p>
              </div>

              <div className="border-t border-ink-900/12 pt-5">
                <h3 className="eyebrow text-ink-400">{t.contact.manufacturerLabel}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-600">
                  {t.brand.manufacturerName}
                  <br />
                  {t.brand.manufacturerLocation}
                </p>
              </div>
            </address>

            <div className="mt-10 bg-gold-400 p-7">
              <p className="font-display text-xl leading-snug text-ink-900">
                {t.contact.sampleTitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-800/85">{t.contact.sampleBody}</p>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow={t.contact.formEyebrow} title={t.contact.formTitle} />
            <div className="mt-10">
              <EnquiryForm t={t} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
