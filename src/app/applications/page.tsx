import type { Metadata } from 'next';
import { Img } from '@/components/Img';
import { CtaBand, PageHero, SectionHeading } from '@/components/ui';
import { interiorApplications, publicApplications } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Application scenarios',
  description:
    'Where Rock Mineral Panel is used: interior wall linings, cabinet carcasses, floor panels and bespoke furniture, plus factories, hospitals, airports and schools.',
};

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="Application Scenarios"
        intro="One panel across interior finishing, cabinetry, flooring and furniture — and an A2 fire rating that holds up in the buildings where the specification is least forgiving."
        image="/img/facade-cladding.jpg"
        imageAlt="Panelised facade cladding seen from below against a bright sky"
      />

      {/* Interior space. */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Interior space"
          title="Wall, cabinet, floor and furniture — from one panel"
          intro="Because RMP machines on standard woodworking equipment, a single specified panel can run through the whole fit-out rather than forcing a different substrate for every element."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-stretch">
          <div className="relative min-h-80 overflow-hidden">
            <Img
              src="/img/interior-living.jpg"
              alt="Contemporary lounge with dark RMP wall panelling, full-height cabinet fronts and timber-look flooring"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <ol className="grid gap-px bg-ink-900/10">
            {interiorApplications.map((item, index) => (
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
            eyebrow="Public space"
            title="Where fire performance is not negotiable"
            intro="Non-combustible, low-emission and mould resistant — the combination that public buildings ask for, in a panel that still takes a decorative finish."
          />

          <ul className="mt-14 grid gap-8 sm:grid-cols-2">
            {publicApplications.map((item) => (
              <li key={item.title} className="group bg-paper">
                <div className="relative aspect-16/10 overflow-hidden">
                  <Img
                    src={item.image}
                    alt={`${item.title} interior finished with mineral fibre panels`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl text-ink-900">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why it holds up. */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative aspect-4/3 overflow-hidden lg:order-last">
            <Img
              src="/img/facade-timber.jpg"
              alt="Timber-clad contemporary house lit from within at dusk"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="In service"
              title="Specified once, and it stays put"
              intro="A 0.5% water absorption and expansion rate keeps panels from swelling, warping or cracking in humid Singapore conditions, and the inorganic body resists mould, insects and corrosion for the life of the fit-out."
            />
            <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {[
                { term: 'Wet areas', detail: 'Bathrooms, kitchens and laundries without a swelling substrate.' },
                { term: 'High-rise', detail: 'A2 non-combustible board for towers and high-risk projects.' },
                { term: 'Healthcare', detail: 'E0 emission and mould resistance for clinical interiors.' },
                { term: 'Acoustics', detail: 'The fibre structure absorbs noise as part of the build-up.' },
              ].map((item) => (
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
        title="Have a scenario we have not listed?"
        body="Tell us the building type, the fire requirement and the finish, and we will tell you whether Rock Mineral Panel is the right substrate for it."
      />
    </>
  );
}
