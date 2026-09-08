/**
 * News / academic milestones, newest first.
 *
 * `date` is an ISO string (YYYY-MM-DD) so entries sort and format reliably.
 * Set `maxVisible` to limit how many items show before the "show all" toggle.
 */

export type NewsItem = {
  date: string;
  title: string;
  description?: string;
  link?: { label: string; href: string };
};

export const maxVisibleNews = 5;

export const news: NewsItem[] = [
  {
    date: '2026-03-01',
    title: 'Joined the Elite Research Lab as a student researcher',
    description:
      'Supporting research projects through literature review, experiment design and analysis.',
  },
  {
    date: '2026-02-01',
    title: 'Fifth place, VAND4 International Competition',
    description:
      'Zero-shot industrial track — a zero-shot computer vision pipeline for detecting anomalies in industrial images using foundation models.',
  },
  {
    date: '2025-08-01',
    title:
      'Preprint released: Prototype-Guided Adaptive Feature Learning for Multimodal Emotion Recognition in Conversation',
    link: { label: 'See publications', href: '#publications' },
  },
  {
    date: '2025-06-01',
    title: 'First runner-up, IUT Coderush Hackathon',
    description: 'Built a working application under a tight deadline in a fast-paced team.',
  },
  {
    date: '2025-05-01',
    title: 'Preprint released: EthMuSAM: Mutual Scoring with SAM for Zero-Shot Anomaly Segmentation',
    link: { label: 'See publications', href: '#publications' },
  },
  {
    date: '2025-03-01',
    title:
      'Preprint released: Rethinking Visual Features in Graph-Based Multimodal Emotion Recognition in Conversations',
    link: { label: 'See publications', href: '#publications' },
  },
  {
    date: '2025-03-01',
    title: 'Seventh place, BAIC Datathon',
    description:
      'Preprocessing, visualisation and modelling over a previously unseen dataset.',
  },
];
