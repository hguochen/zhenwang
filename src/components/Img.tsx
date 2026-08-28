import NextImage, { type ImageProps } from 'next/image';

/*
 * Every image on this site is a pre-sized file in public/img with no image
 * server behind it, so next/image runs `unoptimized` — one file, one URL, no
 * responsive variants.
 *
 * The catch: `unoptimized` makes next/image emit the raw `src` verbatim,
 * skipping the basePath it applies to links and its own chunks. On GitHub
 * Pages the site lives under /zhenwang, so an unprefixed "/img/ore.jpg" 404s.
 * Prefixing here means call sites keep writing plain "/img/..." paths and only
 * this file knows where the site is mounted.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function Img({ src, ...props }: ImageProps) {
  const prefixed =
    typeof src === 'string' && src.startsWith('/') && !src.startsWith(`${basePath}/`)
      ? `${basePath}${src}`
      : src;

  return <NextImage {...props} src={prefixed} />;
}
