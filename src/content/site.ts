/**
 * Site-wide configuration.
 *
 * Everything a visitor sees at the top of the page — plus the master switches
 * for the optional sections — lives here.
 */

export type SectionKey =
  | 'about'
  | 'research'
  | 'publications'
  | 'education'
  | 'news'
  | 'projects'
  | 'teaching'
  | 'blog'
  | 'cv'
  | 'contact';

export const siteConfig = {
  /** Used for the browser tab, metadata and structured data. */
  name: 'Shufan Shahi',
  /** Shown directly under your name in the hero. */
  title: 'Undergraduate Researcher, Computer Science and Engineering',
  /** Institution / affiliation line. */
  affiliation: 'Islamic University of Technology',
  location: 'Dhaka, Bangladesh',

  /** One or two sentences. Keep it short — the About section carries the detail. */
  intro:
    'I am a computer science undergraduate working on multimodal machine learning and computer vision. My research looks at how models combine vision, language and audio — and what breaks when one modality dominates the others.',

  /**
   * Profile image. Place the file in /public and reference it from the root,
   * e.g. '/profile.jpg'. Set to null to render the hero without a photo.
   */
  profileImage: '/profile.jpg' as string | null,
  profileImageAlt: 'Portrait of Shufan Shahi',

  /** Used for <meta> description and Open Graph tags. */
  description:
    'Academic homepage of Shufan Shahi — research in multimodal machine learning, computer vision and emotion recognition.',
  /** Canonical URL of the deployed site (no trailing slash). */
  url: 'https://shufanshahi.github.io',

  /** Footer line. */
  footerNote: '',
} as const;

/**
 * Optional sections: flip a value to `false` and the section disappears from
 * both the page and the navigation bar. Required sections are listed here too
 * so the ordering of the navigation stays in one place, but leaving them on is
 * recommended.
 */
export const sections: Record<SectionKey, boolean> = {
  about: true,
  research: true,
  publications: true,
  education: true,
  news: true,
  projects: true,
  teaching: false,
  blog: true,
  cv: true,
  contact: true,
};

/**
 * Navigation order. Entries whose `key` is disabled above are filtered out
 * automatically. `href` values starting with '#' scroll to a section on the
 * home page; anything else is treated as a route.
 */
export const navigation: { key: SectionKey; label: string; href: string }[] = [
  { key: 'about', label: 'About', href: '#about' },
  { key: 'research', label: 'Research', href: '#research' },
  { key: 'publications', label: 'Publications', href: '#publications' },
  { key: 'education', label: 'Education', href: '#education' },
  { key: 'news', label: 'News', href: '#news' },
  { key: 'projects', label: 'Projects', href: '#projects' },
  { key: 'teaching', label: 'Teaching', href: '#teaching' },
  { key: 'blog', label: 'Blog', href: '/blog' },
  { key: 'cv', label: 'CV', href: '#cv' },
  { key: 'contact', label: 'Contact', href: '#contact' },
];
