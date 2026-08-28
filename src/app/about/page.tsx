import type { Metadata } from 'next';
import { Img } from '@/components/Img';
import Link from 'next/link';
import { CtaBand, PageHero, SectionHeading, Stat } from '@/components/ui';
import { accreditation, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About ZhenWang & the manufacturer',
  description:
    'ZHEN WANG CONSTRUCTION PTE LTD is the Singapore general distributor for MinewayTech Rock Mineral Panel, manufactured by Jiaocheng Yiwang Ferroalloy Co., Ltd., founded 1988.',
};

const factoryFigures = [
  { value: '1988', label: 'Year Jiaocheng Yiwang Ferroalloy Co., Ltd. was founded' },
  { value: '1000+', label: 'Acres covered by the plant' },
  { value: '1,500+', label: 'Employees on site' },
  { value: '700,000 t', label: 'Annual ferroalloy production capacity' },
  { value: '4bn+', label: 'Annual output value (RMB)' },
  { value: '8 Million', label: 'Annual Rock Mineral Panel production capacity' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Company Intro"
        intro="A Singapore distributor and a Shanxi manufacturer, joined by one product line: green, circular, low-carbon building materials made from what a smelter used to throw away."
        image="/img/rock-strata.jpg"
        imageAlt="Layered rock strata catching low golden light"
      />

      {/* Manufacturer. */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Smart factory"
            title={site.manufacturer.name}
            intro={
              <>
                <p>
                  Founded in {site.manufacturer.founded}, Jiaocheng Yiwang Ferroalloy Co., Ltd. has
                  become a modern circular economy enterprise with leading advantages in its
                  industry. The company takes ferroalloy, Rock Mineral Panel, mineral wool and
                  microcrystalline stone as its core projects, pursuing green, circular and
                  low-carbon development.
                </p>
                <p className="mt-4">
                  It has always adhered to the development concept of &ldquo;Learning, Research and
                  Innovation&rdquo; set out by its founder, and actively explores the extension of
                  the industrial chain — contributing to the national green ecological industry and
                  circular economy.
                </p>
              </>
            }
          />

          <div className="self-center">
            <ul className="space-y-5">
              {['Green tech', 'Materials R&D', 'Circular economy', 'Value chain'].map((pillar) => (
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
          {factoryFigures.map((figure) => (
            <div key={figure.value}>
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
            eyebrow="Research & standards"
            title="A provincial R&D centre with a CNAS-certified lab"
            tone="light"
          />
          <ul className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {accreditation.map((item) => (
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
              alt="Panelised facade rising against a clear sky"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={site.role}
              title={site.legalName}
              intro={`ZhenWang Enterprise is the general distributor for ${site.brand} Rock Mineral Panel in Singapore. We hold the product knowledge, the test documentation and the supply relationship, so architects, main contractors and joinery subcontractors can specify and buy RMP locally.`}
            />
            <dl className="mt-10 divide-y divide-ink-900/10 border-y border-ink-900/10">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                <dt className="eyebrow text-ink-400">Role</dt>
                <dd className="text-sm text-ink-700">{site.role}, Singapore</dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                <dt className="eyebrow text-ink-400">Address</dt>
                <dd className="text-right text-sm text-ink-700">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                <dt className="eyebrow text-ink-400">Phone</dt>
                <dd className="text-sm text-ink-700">
                  <a href={`tel:${site.phoneHref}`} className="hover:text-gold-600">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                <dt className="eyebrow text-ink-400">Email</dt>
                <dd className="text-sm text-ink-700">
                  <a href={`mailto:${site.email}`} className="hover:text-gold-600">
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 underline decoration-gold-400 decoration-2 underline-offset-6 transition-colors hover:text-gold-600"
            >
              Get in touch
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
