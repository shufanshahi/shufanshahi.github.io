/**
 * CV section.
 *
 * To swap in a new CV: replace public/cv.pdf with your own file and — if you
 * like — update `updated` below. Nothing else needs to change.
 */
export const cv = {
  /** Path inside /public. */
  file: '/cv.pdf',
  /** File name suggested to the browser when downloading. */
  downloadName: 'Shufan-Shahi-CV.pdf',
  /** Shown next to the button; set to null to hide. */
  updated: 'September 2026' as string | null,
  description:
    'A full academic curriculum vitae covering education, research experience, publications, awards and technical skills.',
};
