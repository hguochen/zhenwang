import type { Metadata } from 'next';
import Image from 'next/image';
import { CtaBand, PageHero, SectionHeading } from '@/components/ui';
import { fireScale, finishes, processingAdvantages, specifications, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Rock Mineral Panel — product & specification',
  description:
    'Full specification for MinewayTech Rock Mineral Panel: A2 non-combustible, 0.5% water absorption, Grade E0 formaldehyde, 1220 × 2440 mm in 4–18 mm thicknesses.',
};

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="Rock Mineral Panel"
        intro="The hardness, fire resistance and waterproofing of stone, with the flexibility and workability of wood. One inorganic panel that your joiners can saw, groove, drill and glue on the equipment already on the shop floor."
        image="/img/rock-slabs.jpg"
        imageAlt="Slabs of fractured grey mineral rock"
      />

      {/* Product advantages narrative. */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Product advantages"
            title="An innovative inorganic panel, not another cement board"
            intro={
              <>
                <p>
                  {site.brand} RMP combines stone-like hardness with wood-like flexibility. Built on
                  self-developed high-temperature melt fibrization technology and intelligent
                  manufacturing, it breaks through the limitations of traditional materials in
                  structural performance, environmental impact and decorative versatility.
                </p>
                <p className="mt-4">
                  RMP is produced from slag extracted during ferroalloy smelting, which lets the
                  entire production line achieve 100% zero emissions — a genuine closed loop of
                  solid waste recycling, energy conservation and environmental protection.
                </p>
              </>
            }
          />

          <div className="space-y-8 self-center border-l-2 border-gold-400 pl-8">
            <div>
              <h3 className="font-display text-2xl text-ink-900">Performance without compromise</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-500">
                Grade A2 fire resilience, ultra-low water absorption and a high elastic modulus put
                RMP at the top of its class across the board — which is what makes it viable for
                commercial spaces, luxury interior design and highly bespoke projects.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-ink-900">Genuinely green and healthy</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-500">
                TVOC and formaldehyde emissions sit far below the ENF national standard, so RMP
                stands up as a truly green, healthy building material rather than a marginally
                compliant one.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-ink-900">Easy on tools and workflows</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-500">
                RMP works with standard woodworking tools at a 15% lower tool wear rate. Compatible
                finishes include melamine paper, PET film, PU paint, metal films and digital
                printing, giving designers the widest possible range of combinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specification table. */}
      <section className="bg-paper-dim">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading eyebrow="Technical data" title="Specification" />
          <div className="mt-12 overflow-hidden border border-ink-900/12 bg-paper">
            <table className="w-full text-left">
              <caption className="sr-only">Rock Mineral Panel technical specification</caption>
              <thead>
                <tr className="bg-ink-900 text-paper">
                  <th scope="col" className="px-5 py-4 text-xs font-semibold tracking-[0.16em] uppercase sm:px-8">
                    Property
                  </th>
                  <th scope="col" className="px-5 py-4 text-xs font-semibold tracking-[0.16em] uppercase sm:px-8">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((row, index) => (
                  <tr
                    key={row.property}
                    className={index % 2 === 1 ? 'bg-ink-900/[0.025]' : undefined}
                  >
                    <th
                      scope="row"
                      className="border-t border-ink-900/8 px-5 py-4 align-top text-sm font-semibold text-ink-800 sm:px-8 sm:w-2/5"
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
          <p className="mt-5 text-xs leading-relaxed text-ink-400">
            Figures as published in the {site.brand} Rock Mineral Panel product brochure. Panel
            dimensions and finishes can be customised — contact {site.legalName} for project-specific
            data sheets and test reports.
          </p>
        </div>
      </section>

      {/* Fire resistance. */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Fire performance"
              title="Excellent fire resistance"
              intro="Safety is always the primary consideration and will never be compromised. RMP has high construction safety and grade A2 fire resilience. Because the raw materials are inorganic, even the sawdust from the board carries no fire hazard — a wise choice for high-rise buildings and high-risk projects."
            />

            <div className="mt-12">
              <p className="eyebrow text-gold-600">Grade A2 fire resilience</p>
              <ol className="mt-5 flex" aria-label="Fire classification scale, A1 to F">
                {fireScale.map((grade) => {
                  const isRmp = grade === 'A2';
                  return (
                    <li
                      key={grade}
                      className={`flex-1 border-t-4 pt-3 text-center text-sm font-semibold ${
                        isRmp
                          ? 'border-gold-400 text-ink-900'
                          : 'border-ink-900/15 text-ink-300'
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
                <span>Non-combustible</span>
                <span>Combustible</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-4/3 overflow-hidden">
            <Image
              src="/img/lava.jpg"
              alt="Molten lava crusting over, evoking the 1450 °C melt the panel is made from"
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
            eyebrow="Processing advantages"
            title="Built to be worked, not just installed"
            tone="light"
          />
          <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {processingAdvantages.map((item, index) => (
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
            <Image
              src="/img/saw-cut.jpg"
              alt="Hand saw cutting cleanly through a gold-faced mineral fibre panel"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Design freedom"
              title="Full decorative compatibility"
              intro="Choose from the standard designs and colours, or specify your own. Custom sizes are supported and the processing stage stays flexible. Compared with cutting wood board, RMP reduces cutting tool wear by 15%, so construction is more efficient and cutting waste is minimised."
            />
            <ul className="mt-10 divide-y divide-ink-900/10 border-y border-ink-900/10">
              {finishes.map((finish) => (
                <li key={finish.name} className="flex items-baseline justify-between gap-6 py-4">
                  <span className="font-display text-xl text-ink-900">{finish.name}</span>
                  <span className="text-right text-sm text-ink-500">{finish.note}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-ink-400">
              Colour swatch selections are sourced from third-party suppliers. For extended finish
              styles our team can furnish a more exhaustive visual portfolio on request.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
