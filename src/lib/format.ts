/** Formats an ISO date (YYYY-MM-DD) for display, without timezone drift. */
export function formatDate(
  iso: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
): string {
  if (!iso) return '';
  // Parsing as UTC and formatting as UTC keeps '2026-01-24' from rendering as
  // the 23rd for viewers west of Greenwich.
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat('en-GB', { ...options, timeZone: 'UTC' }).format(date);
}

/** Prefixes a site-internal asset path with the configured base path. */
export function withBasePath(assetPath: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  if (!assetPath.startsWith('/')) return assetPath;
  return `${basePath}${assetPath}`;
}
