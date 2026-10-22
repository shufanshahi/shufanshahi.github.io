/**
 * Achievements, awards and scholarships. Newest first within each group.
 */

export type Award = {
  title: string;
  /** Optional one-line context shown under the title. */
  description?: string;
  year: string;
};

export const achievements: Award[] = [
  {
    title: '5th Place, VAND4 International Competition',
    description: 'Zero-Shot Industrial Track',
    year: '2026',
  },
  {
    title: 'First Runner-up, IUT Coderush Hackathon',
    description: 'Rapid team application development',
    year: '2025',
  },
  {
    title: '7th Place, BAIC Datathon',
    description: 'Data preprocessing, visualization, and modeling',
    year: '2025',
  },
  {
    title: 'Participant, IEEE Signal Processing Cup (SP Cup)',
    description: 'Deepfake detection with fine-tuned ML models; wrote a technical report',
    year: '2025',
  },
];

export const scholarships: Award[] = [
  { title: 'IUT Partial Scholarship', year: '2022' },
  { title: 'HSC Scholarship', year: '2021' },
  { title: 'JSC Scholarship', year: '2016' },
];
