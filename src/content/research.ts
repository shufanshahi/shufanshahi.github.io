/**
 * Research Interests.
 *
 * Add, remove or reorder entries freely — the layout adapts to any count.
 */

export type ResearchInterest = {
  title: string;
  description: string;
  /** Optional short keywords rendered as small tags under the description. */
  keywords?: string[];
};

export const researchIntro =
  'My work centres on making multimodal models reason well when their inputs are unequal in quality, density and reliability.';

export const researchInterests: ResearchInterest[] = [
  {
    title: 'Multimodal Machine Learning',
    description:
      'Fusing vision, language and audio into representations that stay useful when one modality is noisy, missing or overwhelmingly dominant. I am particularly interested in modality imbalance and in fusion schemes that remain interpretable.',
    keywords: ['Fusion', 'Modality imbalance', 'Representation learning'],
  },
  {
    title: 'Emotion Recognition in Conversation',
    description:
      'Graph-based models of dialogue that carry speaker state and context across turns, and the question of which visual features actually help — semantic descriptions of expression and gaze rather than low-level pixel statistics.',
    keywords: ['MERC', 'Graph neural networks', 'Affective computing'],
  },
  {
    title: 'Zero-Shot Anomaly Detection',
    description:
      'Localising defects in industrial imagery without labelled anomalies, by comparing patch-level embeddings from pretrained vision encoders against normal reference images and scoring the disagreement.',
    keywords: ['SAM', 'DINOv2', 'Industrial inspection'],
  },
  {
    title: 'Vision Foundation Models',
    description:
      'What large pretrained encoders already know, how far that knowledge transfers without fine-tuning, and where prompting or lightweight adaptation beats full supervision.',
    keywords: ['Transfer learning', 'Prompting', 'Self-supervision'],
  },
];

/** Optional — set to null to hide the "Looking ahead" note. */
export const futureDirections: string | null =
  'Looking ahead, I want to work on multimodal systems that can say when a modality should be ignored — models that reason about the reliability of their own inputs rather than assuming every channel deserves equal trust.';
