import { Img } from '@/components/Img';
import Link from 'next/link';
import { AdvantageIcon } from '@/components/AdvantageIcon';
import { CtaBand, SectionHeading, Stat } from '@/components/ui';
import {
  coreAdvantages,
  enterpriseFigures,
  headlineClaims,
  interiorApplications,
  publicApplications,
  site,
} from '@/lib/site';

export default function HomePage() {
  return (
    <>
      {/* Hero — mirrors the brochure cover: gold field, angular shard, dark interior. */}
      <section className="relative isolate overflow-hidden bg-gold-400">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow text-ink-800/70">
              {site.role} · Singapore
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
              Redefining Panels
              <br />
              with the Power
              <br />
              of Stone
            </h1>
            <ul className="mt-9 space-y-2.5">
              {headlineClaims.map((claim) => (
                <li key={claim} className="eyebrow flex items-center gap-3 text-ink-800">
                  <span aria-hidden="true" className="h-px w-6 bg-ink-800/50" />
                  {claim}
                </li>
              ))}
            </ul>
            <p className="mt-9 max-w-xl text-base leading-relaxed text-ink-800/85">
              {site.product} ({site.productShort}) is a rock fibre inorganic density panel that
              combines the hardness, fire resistance and waterproofing of stone with the flexibility
              and workability of wood — machined on the woodworking equipment your joiners already
              own.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/product"
                className="bg-ink-900 px-7 py-3.5 text-center text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-ink-700"
              >
                Explore the panel
              </Link>
              <Link
                href="/contact"
                className="border border-ink-900/30 px-7 py-3.5 text-center text-sm font-semibold tracking-wide text-ink-900 transition-colors hover:border-ink-900 hover:bg-ink-900/5"
              >
                Request a quote
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
                alt="Dark contemporary living room lined with Rock Mineral Panel wall and cabinet surfaces"
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
          {[
            { term: 'Fire classification', detail: 'A2 non-combustible' },
            { term: 'Water absorption', detail: '0.5% expansion' },
            { term: 'Formaldehyde', detail: 'Grade E0 / ENF' },
            { term: 'Screw holding', detail: 'Over 1200 N' },
          ].map((item) => (
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
              alt="Close-up of layered basalt rock strata, the raw feedstock for mineral fibre"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-gold-400 px-6 py-5">
              <p className="eyebrow text-ink-800/70">Mineral fiber</p>
              <p className="font-display text-2xl leading-tight text-ink-900">
                Inorganic
                <br />
                density panel
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Product introduction"
              title="A revolutionary rock fibre inorganic density panel"
              intro={
                <>
                  <p>
                    RMP was born with China&rsquo;s first self-developed production line and
                    optimised proprietary processes. It achieves A2-grade fire resistance to
                    GB/T&nbsp;8624-2012 and a 0.5% water absorption and expansion rate, which keeps
                    the panel from deforming and cracking.
                  </p>
                  <p className="mt-4">
                    It carries Grade E0 formaldehyde emission — ENF grade in China — with TVOC held
                    at one sixth of the national standard. The unique fibrization technology gives
                    it a higher elastic modulus and greater toughness than traditional inorganic
                    boards such as calcium silicate, cement and magnesia, so it can be processed
                    directly on woodworking equipment.
                  </p>
                </>
              }
            />
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4">
              {['Hard', 'Non-combustible', 'Waterproof', 'Eco-friendly'].map((word) => (
                <li
                  key={word}
                  className="border-l-2 border-gold-400 pl-4 font-display text-xl text-ink-800"
                >
                  {word}
                </li>
              ))}
            </ul>
            <Link
              href="/product"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 underline decoration-gold-400 decoration-2 underline-offset-6 transition-colors hover:text-gold-600"
            >
              Read the full specification
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 10 core advantages. */}
      <section className="bg-paper-dim">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-start gap-5">
              <span className="bg-gold-400 px-4 py-1 font-display text-5xl leading-none text-ink-900">
                10
              </span>
              <div>
                <h2 className="font-display text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
                  Core Advantages
                  <br />
                  Breaking Technological Monopoly
                </h2>
              </div>
            </div>
          </div>

          <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {coreAdvantages.map((advantage) => (
              <li key={advantage.title}>
                <AdvantageIcon name={advantage.icon} className="h-12 w-12 text-gold-600" />
                <h3 className="mt-5 text-sm font-semibold tracking-wide text-ink-900">
                  {advantage.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{advantage.body}</p>
              </li>
            ))}
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
            eyebrow="Achievements of enterprise"
            title="Backed by a thousand-acre smart manufacturing base"
            tone="light"
            intro="Rock Mineral Panel is produced from slag extracted during ferroalloy smelting, so the whole line runs at 100% zero emissions — a closed loop of solid waste recycling, energy conservation and environmental protection."
          />
          <dl className="mt-16 grid gap-x-10 gap-y-12 text-ink-200 sm:grid-cols-2 lg:grid-cols-3">
            {enterpriseFigures.map((figure) => (
              <div key={figure.value}>
                <Stat value={figure.value} label={figure.label} tone="light" />
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Applications preview. */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Application scenarios"
          title="From private interiors to high-traffic public buildings"
          intro="One panel covers wall linings, cabinet carcasses, floors and bespoke furniture — and the A2 fire rating makes it a sound choice where the specification is unforgiving."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div data-testid="home-interior-visual" className="relative aspect-16/10 overflow-hidden">
            <Img
              src="/img/interior-living.jpg"
              alt="Interior lounge with RMP wall panelling, cabinet fronts and flooring"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute top-0 right-0 bg-gold-400 px-5 py-2.5">
              <p className="font-display text-lg text-ink-900">Interior Space</p>
            </div>
          </div>
          <ul className="grid gap-px bg-ink-900/10">
            {interiorApplications.map((item, index) => (
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

        <ul data-testid="home-public-spaces" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {publicApplications.map((item) => (
            <li key={item.title} className="group relative aspect-4/5 overflow-hidden">
              <Img
                src={item.image}
                alt={`${item.title} interior finished with mineral fibre panels`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="eyebrow text-gold-300">Public space</p>
                <h3 className="mt-1.5 font-display text-2xl text-paper">{item.title}</h3>
              </div>
            </li>
          ))}
        </ul>

        <Link
          href="/applications"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 underline decoration-gold-400 decoration-2 underline-offset-6 transition-colors hover:text-gold-600"
        >
          See all application scenarios
          <span aria-hidden="true">→</span>
        </Link>
      </section>

      <CtaBand />
    </>
  );
}
