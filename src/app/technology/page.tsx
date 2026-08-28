import type { Metadata } from 'next';
import { Img } from '@/components/Img';
import { CtaBand, PageHero, SectionHeading } from '@/components/ui';
import { accreditation, intellectualProperty, processStages } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Technical process & patents',
  description:
    'How Rock Mineral Panel is made: rock melted above 1450 °C, centrifuged into Φ4 µm mineral fibre, co-polymerised with phenolic resin and continuously hot-pressed into 4–18 mm board.',
};

const flow = [
  { label: 'Rock / ore raw materials', detail: 'Electric furnace' },
  { label: 'Molten minerals', detail: '1450 °C' },
  { label: 'Mineral fibre', detail: 'Φ 4 µm, centrifuge' },
  { label: 'Fibre & resin mixture', detail: 'Phenolic resin' },
  { label: 'Hot press', detail: 'Continuous, high temperature' },
  { label: 'Finished panel', detail: '4 – 18 mm · 1220 × 2440 mm' },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Technical Process"
        intro="Rock melted above 1450 °C, spun into four-micron fibre, bound with phenolic resin and pressed into board on China's first self-developed mineral fibre panel production line."
        image="/img/ore.jpg"
        imageAlt="Crushed mineral ore, the raw feedstock for the melt furnace"
      />

      {/* Process narrative + four stages. */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Manufacturing"
          title="From slag to finished panel in four stages"
          intro="Raw materials are melted above 1450 °C and fibrillated to Φ4 µm through a centrifugal machine. Co-polymerisation with phenolic resin lifts performance, and the fibre-resin mixture is compressed into 4–18 mm board through a continuous high-temperature pressing system. After cooling, products are processed by CNC and anti-counterfeiting treatment, then tested by acceptance sampling before release. The entire process follows eco-friendly and safe manufacturing standards."
        />

        <ol className="mt-16 grid gap-px bg-ink-900/10 lg:grid-cols-2">
          {processStages.map((stage) => (
            <li key={stage.step} className="bg-paper p-8 sm:p-10">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-4xl leading-none text-gold-500">
                  {stage.step}
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
          <SectionHeading eyebrow="Process flow" title="The line, end to end" tone="light" />
          <ol className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {flow.map((node, index) => (
              <li key={node.label} className="relative border-t border-ink-100/15 pt-6">
                <span className="eyebrow text-gold-400">
                  Step {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-2xl leading-tight text-paper">
                  {node.label}
                </h3>
                <p className="mt-2 text-sm text-ink-300">{node.detail}</p>
                {index < flow.length - 1 && (
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
              eyebrow="Intellectual property"
              title="Self-owned patents breaking the monopoly"
              intro="Over ten core patents sit behind the production line, covering the fibrization process, the plant instrumentation and the energy management platform that runs it."
            />
            <ul className="mt-12 divide-y divide-ink-900/10 border-y border-ink-900/10">
              {intellectualProperty.map((item) => (
                <li key={item.ref} className="py-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="font-display text-xl text-ink-900">{item.title}</h3>
                    <span className="bg-gold-100 px-2.5 py-1 font-mono text-xs font-semibold tracking-wide text-gold-800">
                      {item.ref}
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
                alt="Curved white architectural facade with deep horizontal shadow bands"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="mt-8 bg-paper-dim p-8">
              <h3 className="eyebrow text-gold-600">Testing & accreditation</h3>
              <ul className="mt-6 space-y-4">
                {accreditation.map((item) => (
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
        title="Need the test reports?"
        body="Fire, formaldehyde, TVOC and radionuclide test documentation, along with the patent certificates, are available to specifiers on request."
      />
    </>
  );
}
