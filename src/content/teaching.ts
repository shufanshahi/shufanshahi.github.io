/**
 * Teaching. Disabled by default — turn it on in src/content/site.ts.
 */

export type TeachingEntry = {
  course: string;
  /** Optional course code, e.g. 'CSE 4108'. */
  code?: string;
  institution: string;
  term: string;
  role: string;
  description?: string;
  resources?: { label: string; href: string }[];
};

export const teaching: TeachingEntry[] = [
  {
    course: 'Course Title',
    code: 'CSE 0000',
    institution: 'Institution Name',
    term: 'Spring 2026',
    role: 'Teaching Assistant',
    description:
      'One or two sentences describing your responsibilities: sections taught, material prepared, number of students.',
    resources: [
      { label: 'Lecture slides', href: '#' },
      { label: 'Problem sets', href: '#' },
    ],
  },
];
