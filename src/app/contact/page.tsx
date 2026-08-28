import type { Metadata } from 'next';
import { EnquiryForm } from '@/components/EnquiryForm';
import { PageHero, SectionHeading } from '@/components/ui';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${site.legalName}, the Singapore general distributor for ${site.brand} Rock Mineral Panel. Phone ${site.phone} or email ${site.email}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the distributor"
        intro="Samples, test reports, panel sizes, finishes and lead times for Singapore delivery — send us the project and we will come back with the detail."
        image="/img/facade-curved.jpg"
        imageAlt="Curved architectural facade with banded shadows"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow={site.role} title={site.legalName} />

            <address className="mt-10 space-y-8 not-italic">
              <div className="border-t border-ink-900/12 pt-5">
                <h3 className="eyebrow text-ink-400">Phone</h3>
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
                <h3 className="eyebrow text-ink-400">Email</h3>
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
                <h3 className="eyebrow text-ink-400">Address</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-600">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </p>
              </div>

              <div className="border-t border-ink-900/12 pt-5">
                <h3 className="eyebrow text-ink-400">Manufacturer</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-600">
                  {site.manufacturer.name}
                  <br />
                  {site.manufacturer.location}
                </p>
              </div>
            </address>

            <div className="mt-10 bg-gold-400 p-7">
              <p className="font-display text-xl leading-snug text-ink-900">
                Ask for a physical sample
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-800/85">
                The panel is easier to judge in the hand than on a screen. Tell us the thickness and
                finish you are considering and we will arrange a sample.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Enquiry" title="Send us the project" />
            <div className="mt-10">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
