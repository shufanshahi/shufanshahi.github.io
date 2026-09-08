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
      'Prototype-Guided Adaptive Feature Learning for Multimodal Emotion Recognition in Conversation',
    authors: [
      'Shufan Shahi',
      'Asif Or Rashid Alif',
      'Abdullah Al Jubaer Gem',
      'Shahriar Ivan',
      'Asaduzzaman Herok',
    ],
    venue: 'Preprint',
    year: 2026,
    category: 'preprint',
    status: 'Preprint',
    abstract:
      "Graph neural networks have advanced multimodal emotion recognition in conversation (MERC) by modeling contextual and cross-modal dependencies. M³Net further captures higher-order relations and complementary graph frequencies, but its prediction pipeline relies primarily on a shared fused objective and does not adapt modality features or impose class structure before graph propagation. We introduce Prototype-Guided Adaptive Feature Learning, an extension of M³Net that combines Adaptive Feature Weighting (AFW) with modality-specific prototype supervision. To make AFW compatible with flat graph batches, we replace padded temporal pooling with a per-dialogue segment mean that is broadcast to the corresponding utterance nodes. We then construct class prototypes from pre-graph representations and optimize prototypical cross-entropy together with early entropy regularization, providing direct class-discriminative guidance to each encoder. The resulting model preserves M³Net's multivariate and multi-frequency reasoning while improving its learned representations at both feature and class levels. On IEMOCAP and MELD, our method improves accuracy and weighted F1 over the reproduced backbone, demonstrating the effectiveness of adaptive feature processing and prototype-guided supervision for graph-based MERC.",
    links: {
      pdf: '#',
      code: '#',
    },
  },
  {
    title:
      'EthMuSAM: Mutual Scoring with SAM for Zero-Shot Anomaly Segmentation',
    authors: [
      'Md Abdullah Al Jubaer Gem',
      'Tanjil Hasan Khan',
      'Ibrahima Mamoudou',
      'Shufan Shahi',
      'Afra Anika',
    ],
    venue: 'Preprint',
    year: 2026,
    category: 'preprint',
    status: 'Preprint',
    abstract:
      'In this paper, we present an enhanced hybrid framework for zero-shot visual anomaly detection, focusing on robust defect segmentation in complex real-world industrial environments. To significantly improve pixel-level anomaly localization, we integrate a cascaded prompt refinement strategy leveraging the Segment Anything Model (SAM) with the MuSc-DINOv3 architecture. Specifically, we extract initial anomaly heatmaps and employ a 3-pass prompting mechanism. By dynamically sampling positive and negative point prompts through adaptive Otsu thresholding and structural dilation, and generating refined bounding box prompts from connected components, our method effectively isolates defective regions. This integration seamlessly converts coarse anomaly heatmaps into precise binary segmentation masks using a parameter-free SAM refinement module. Experimental results on MVTec AD 2 demonstrate strong localization behavior, achieving a mean SegF1 of 27.78% and several strong category-level results, including 55.55% SegF1 on fabric, 80.94% pixel-level AUROC on walnuts, 94.67% image-level AUROC on vial, and 73.45% mean image-level AP across categories.',
    links: {
      pdf: '#',
      code: '#',
    },
  },
  {
    title:
      'Rethinking Visual Features in Graph-Based Multimodal Emotion Recognition in Conversations: From Low-Level Pixels to Semantic Representations',
    authors: [
      'Abdullah Al Jubaer Gem',
      'Shufan Shahi',
      'Asif Or Rashid Alif',
      'Shahriar Ivan',
      'Asaduzzaman Herok',
    ],
    venue: 'Preprint',
    year: 2026,
    category: 'preprint',
    status: 'Preprint',
    abstract:
      "Multimodal Emotion Recognition in Conversations (MERC) aims to identify emotions in each utterance using visual, audio, and linguistic cues, with applications in affective computing and human-computer interaction. Among the various approaches proposed to solve this problem, graph based approaches have emerged as some of the most promising ones but they often underutilize the visual modality due to noisy pixel level features. Traditional visual encoders focus on geometric and texture patterns, which often fail to capture facial expressions and behavioral cues, resulting in weak cross-modal alignment. To address this issue, we propose a Vision Language Model (VLM) based approach that encodes facial expressions and behavioral cues from the visual modality into semantically meaningful representations. Each utterance's video is translated into a descriptive textual representation using structured VLM prompts capturing expressions, gestures, body language and scenario understanding. These semantic visual features replace traditional low level visual inputs in graph based MERC frameworks, reducing noise and allowing the model to focus on meaningful visual information. This work presents VLM based semantic visual feature extraction as a viable replacement for conventional visual feature extraction pipelines in graph based MERC frameworks.",
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
