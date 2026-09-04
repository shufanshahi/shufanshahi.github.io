/**
 * Publications.
 *
 * Entries are grouped by `category` in the order given by
 * `publicationCategories` below, and sorted newest-first within each group.
 *
 * Every field except `title`, `authors`, `year` and `category` is optional —
 * omit what you do not have and the layout closes up around it.
 */

export type PublicationCategory =
  | 'journal'
  | 'conference'
  | 'workshop'
  | 'preprint';

export type PublicationStatus =
  | 'Published'
  | 'Accepted'
  | 'In press'
  | 'Under review'
  | 'Preprint';

export type Publication = {
  title: string;
  /** Mark yourself so the name can be bolded in the list. */
  authors: string[];
  /** Journal, conference or archive name. */
  venue?: string;
  year: number;
  category: PublicationCategory;
  status?: PublicationStatus;
  /** One or two sentences. Rendered in a collapsible "Abstract" disclosure. */
  abstract?: string;
  links?: {
    pdf?: string;
    abstract?: string;
    code?: string;
    project?: string;
    doi?: string;
    bibtex?: string;
  };
  /** Optional highlight badge, e.g. 'Best Paper', 'Oral', 'Spotlight'. */
  award?: string;
};

/** Bolded wherever it appears in an author list. */
export const authorName = 'Shufan Shahi';

export const publicationCategories: {
  key: PublicationCategory;
  label: string;
}[] = [
  { key: 'journal', label: 'Journal Articles' },
  { key: 'conference', label: 'Conference Papers' },
  { key: 'workshop', label: 'Workshop Papers' },
  { key: 'preprint', label: 'Preprints' },
];

export const publications: Publication[] = [
  {
    title:
      'EthMuSAM: Mutual Scoring with SAM for Zero-Shot Anomaly Segmentation',
    authors: ['Shufan Shahi', 'Co-author Name', 'Co-author Name'],
    venue: 'Preprint',
    year: 2026,
    category: 'preprint',
    status: 'Preprint',
    abstract:
      'We extract patch-level representations from images using pretrained DINOv2 encoders and localise anomalous regions by mutually scoring test-image embeddings against representations drawn from normal reference images, requiring no anomalous supervision at any stage.',
    links: {
      pdf: '#',
      code: '#',
    },
  },
  {
    title:
      'Prototype-Guided Adaptive Feature Learning for Multimodal Emotion Recognition in Conversation',
    authors: ['Shufan Shahi', 'Co-author Name'],
    venue: 'Preprint',
    year: 2026,
    category: 'preprint',
    status: 'Preprint',
    abstract:
      'We introduce graph-compatible adaptive feature weighting together with modality-specific prototype supervision, learning class-discriminative representations before cross-modal reasoning begins. The combination improves emotion-recognition performance across several benchmark conversation datasets.',
    links: {
      pdf: '#',
      code: '#',
    },
  },
  {
    title:
      'Rethinking Visual Features in Graph-Based Multimodal Emotion Recognition in Conversations: From Low-Level Pixels to Semantic Representations',
    authors: ['Shufan Shahi', 'Co-author Name'],
    venue: 'Preprint',
    year: 2026,
    category: 'preprint',
    status: 'Preprint',
    abstract:
      'We build a semantic visual-feature pipeline that converts utterance-level video into temporally structured descriptions of facial expression, gaze, body language and emotional transition, then encode those descriptions for graph-based multimodal reasoning. The result improves cross-modal alignment and offers a viable alternative to noisy handcrafted visual features.',
    links: {
      pdf: '#',
      code: '#',
    },
  },
  // --- Template ------------------------------------------------------------
  // {
  //   title: 'Paper Title',
  //   authors: ['Shufan Shahi', 'A. Collaborator'],
  //   venue: 'Conference on Computer Vision and Pattern Recognition (CVPR)',
  //   year: 2027,
  //   category: 'conference',
  //   status: 'Accepted',
  //   award: 'Oral',
  //   abstract: 'One or two sentences.',
  //   links: { pdf: '', abstract: '', code: '', project: '', doi: '' },
  // },
];
