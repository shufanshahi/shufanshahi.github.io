/**
 * Projects. Disable the whole section from src/content/site.ts.
 */

export type Project = {
  title: string;
  description: string;
  /** Technologies or research areas — rendered as small tags. */
  tags: string[];
  links?: {
    repo?: string;
    demo?: string;
    project?: string;
    paper?: string;
  };
  /** Optional image in /public, e.g. '/projects/thumbnail.png'. */
  thumbnail?: string;
  /** Optional year or range shown beside the title. */
  period?: string;
};

export const projects: Project[] = [
  {
    title: 'Zero-Shot Anomaly Segmentation Pipeline',
    description:
      'The inference pipeline behind our VAND4 competition entry: DINOv2 patch embeddings compared against normal reference images, with SAM used to turn noisy similarity maps into clean region proposals.',
    tags: ['PyTorch', 'DINOv2', 'SAM', 'Computer Vision'],
    period: '2026',
    links: { repo: 'https://github.com/shufanshahi' },
  },
  {
    title: 'Semantic Visual Features for Conversational Emotion Models',
    description:
      'Tooling that converts utterance-level video into temporally structured descriptions of facial expression, gaze and body language, then encodes them for graph-based multimodal reasoning.',
    tags: ['PyTorch', 'Multimodal', 'Graph Neural Networks'],
    period: '2025–2026',
    links: { repo: 'https://github.com/shufanshahi' },
  },
  {
    title: 'UAV Object Tracking for Competition Flight',
    description:
      'AI-based object tracking developed with Project Aero for international UAV competitions, tuned for onboard latency constraints rather than benchmark accuracy alone.',
    tags: ['Object Tracking', 'Robotics', 'Python'],
    period: '2025',
    links: { repo: 'https://github.com/shufanshahi' },
  },
];
