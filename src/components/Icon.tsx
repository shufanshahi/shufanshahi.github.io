type IconProps = {
  name: string;
  className?: string;
};

/**
 * Small inline SVG icon set — keeping these local avoids shipping an icon
 * library for a handful of glyphs. All icons share a 24×24 viewBox.
 */
const paths: Record<string, React.ReactNode> = {
  email: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6.5 9 6 9-6" />
    </>
  ),
  github: (
    <path d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.9c-2.7.6-3.3-1.2-3.3-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.6-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.6 1 1.5 1 2.6 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z" />
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10.5V17M7 7.4v.1M11 17v-3.6a2 2 0 0 1 4 0V17" />
    </>
  ),
  scholar: (
    <>
      <path d="M12 3.5 2.5 9 12 14.5 21.5 9 12 3.5Z" />
      <path d="M6.5 11.4V16c0 1.7 2.5 3 5.5 3s5.5-1.3 5.5-3v-4.6" />
    </>
  ),
  researchgate: (
    <>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M9.3 16.5V7.6h2.4a2.4 2.4 0 0 1 0 4.9H9.9m2.3 0 2.9 4" />
    </>
  ),
  orcid: (
    <>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M9 9.6V16m0-9v.1M12.6 16V9.6h1.7a3.2 3.2 0 0 1 0 6.4h-1.7Z" />
    </>
  ),
  twitter: (
    <path d="M4 4.5 10.6 13m0 0L20 4.5M10.6 13 4 19.5M10.6 13l5.9 6.5" />
  ),
  cv: (
    <>
      <path d="M6 2.8h7.5L19 8.3v12.9H6z" />
      <path d="M13.3 2.8v5.6H19" />
      <path d="M9 12.5h6M9 16h4" />
    </>
  ),
  link: (
    <>
      <path d="M10.5 13.5a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1.4 1.4" />
      <path d="M13.5 10.5a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1.4-1.4" />
    </>
  ),
  code: <path d="m8.5 8.5-4 3.5 4 3.5M15.5 8.5l4 3.5-4 3.5M13.5 5.5l-3 13" />,
  pdf: (
    <>
      <path d="M6 2.8h7.5L19 8.3v12.9H6z" />
      <path d="M13.3 2.8v5.6H19" />
      <path d="M12 11v6m0 0-2.3-2.3M12 17l2.3-2.3" />
    </>
  ),
  arrow: <path d="M4.5 12h15m0 0-5.5-5.5M19.5 12 14 17.5" />,
  chevron: <path d="m7 9.5 5 5 5-5" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  location: (
    <>
      <path d="M12 21.5s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </>
  ),
};

export default function Icon({ name, className = 'h-4 w-4' }: IconProps) {
  const path = paths[name];
  if (!path) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {path}
    </svg>
  );
}
