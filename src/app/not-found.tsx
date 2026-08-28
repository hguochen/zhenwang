import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start px-5 py-28 sm:px-8 sm:py-36">
      <p className="eyebrow text-gold-600">404</p>
      <h1 className="mt-5 font-display text-4xl leading-tight tracking-tight text-ink-900 sm:text-5xl">
        This page is not part of the range
      </h1>
      <span aria-hidden="true" className="mt-6 block h-0.5 w-14 bg-gold-400" />
      <p className="mt-7 text-base leading-relaxed text-ink-500">
        The page you asked for does not exist. Head back to the panel, or tell us what you were
        looking for.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="bg-ink-900 px-7 py-3.5 text-center text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-ink-700"
        >
          Back to home
        </Link>
        <Link
          href="/contact"
          className="border border-ink-900/30 px-7 py-3.5 text-center text-sm font-semibold tracking-wide text-ink-900 transition-colors hover:border-ink-900 hover:bg-ink-900/5"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
