/**
 * Hexagon-framed line icons, matching the icon set on the brochure's
 * "10 Core Advantages" spread.
 */

const glyphs: Record<string, React.ReactNode> = {
  flame: (
    <path d="M24 13c3.4 4 5 6.9 5 9.4a5 5 0 0 1-10 0c0-1 .4-2 1.2-3-3.4 2.6-5.2 5.5-5.2 8.6a9 9 0 0 0 18 0c0-5.6-3-10.6-9-15Z" />
  ),
  leaf: (
    <>
      <path d="M16 32c0-8 5.3-14 16-14 0 10.7-5.3 16-14 16-1.5 0-2-.7-2-2Z" />
      <path d="M15 33c3-4.5 6.7-8.2 11-11" />
    </>
  ),
  droplet: (
    <>
      <path d="M24 13c5.3 6 8 10.6 8 14a8 8 0 1 1-16 0c0-3.4 2.7-8 8-14Z" />
      <path d="M14 34h20" />
    </>
  ),
  square: (
    <>
      <rect x="15" y="16" width="18" height="16" rx="1" />
      <path d="M15 21h18M15 27h18" />
    </>
  ),
  shield: <path d="M24 13l9 3.5v7c0 6-3.7 10.4-9 12.5-5.3-2.1-9-6.5-9-12.5v-7L24 13Z" />,
  atom: (
    <>
      <circle cx="24" cy="24" r="3" />
      <ellipse cx="24" cy="24" rx="10" ry="4.5" />
      <ellipse cx="24" cy="24" rx="10" ry="4.5" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="10" ry="4.5" transform="rotate(120 24 24)" />
    </>
  ),
  wave: <path d="M12 24c2-6 4-6 6 0s4 6 6 0 4-6 6 0 4 6 6 0" />,
  screw: (
    <>
      <path d="M24 13v22" />
      <path d="M19 16h10M19 20h10M19 24h10M19 28h10" />
      <path d="M21 32h6l-3 4-3-4Z" />
    </>
  ),
  patent: (
    <>
      <path d="M17 13h11l4 4v18H17V13Z" />
      <path d="M28 13v4h4" />
      <circle cx="24" cy="26" r="3.5" />
    </>
  ),
  ruler: (
    <>
      <rect x="13" y="19" width="22" height="10" rx="1" />
      <path d="M18 19v4M23 19v6M28 19v4M33 19v6" />
    </>
  ),
};

export function AdvantageIcon({ name, className = '' }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M24 2.5 43.6 13.8v22.4L24 47.5 4.4 36.2V13.8L24 2.5Z" strokeWidth="1" opacity="0.45" />
      {glyphs[name] ?? glyphs.square}
    </svg>
  );
}
