/**
 * Links shown in the hero, the contact section and the footer.
 *
 * Delete an entry to hide it everywhere. `icon` must be one of the keys in
 * src/components/Icon.tsx.
 */

export type SocialIcon =
  | 'email'
  | 'github'
  | 'linkedin'
  | 'scholar'
  | 'researchgate'
  | 'orcid'
  | 'twitter'
  | 'cv';

export type SocialLink = {
  label: string;
  /** Full URL, or a mailto: link for email. */
  href: string;
  /** Shown next to the label in the contact section. */
  display: string;
  icon: SocialIcon;
  /** Show this link in the compact hero row. */
  inHero?: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    label: 'Email',
    href: 'mailto:shufanshahi@gmail.com',
    display: 'shufanshahi@gmail.com',
    icon: 'email',
    inHero: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/shufanshahi',
    display: 'github.com/shufanshahi',
    icon: 'github',
    inHero: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shahi-shufan-680135289/',
    display: 'linkedin.com/in/shahi-shufan',
    icon: 'linkedin',
    inHero: true,
  },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID',
    display: 'Google Scholar profile',
    icon: 'scholar',
    inHero: true,
  },
  {
    label: 'ResearchGate',
    href: 'https://www.researchgate.net/profile/YOUR-PROFILE',
    display: 'ResearchGate profile',
    icon: 'researchgate',
    inHero: true,
  },
  {
    label: 'CV',
    href: '/cv.pdf',
    display: 'Curriculum vitae (PDF)',
    icon: 'cv',
    inHero: true,
  },
];
