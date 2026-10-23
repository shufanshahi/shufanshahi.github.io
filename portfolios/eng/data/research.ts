type Research = {
  title: string;
  status: string;
  bullets: string[];
  link?: string;
};

export const research: Research[] = [
  {
    title: "EthMuSAM: Mutual Scoring With SAM For Zero Shot Anomaly Segmentation",
    status: "2026",
    bullets: [
      "Extracted patch-level representations from images using pretrained DINOv2 encoders.",
      "Localized anomalous regions by comparing test-image embeddings with representations from normal reference images.",
    ],
  },
  {
    title: "Prototype-Guided Adaptive Feature Learning for Multimodal Emotion Recognition in Conversation (MERC)",
    status: "2026",
    bullets: [
      "Developed graph-compatible adaptive feature weighting and modality-specific prototype supervision to learn class-discriminative representations before cross-modal reasoning.",
      "Improved multimodal emotion-recognition performance across multiple benchmark datasets through adaptive feature processing and prototype-guided learning.",
    ],
  },
  {
    title: "Rethinking Visual Features in Graph Based MERC: From Low Level Pixels to Semantic Representations",
    status: "2026",
    bullets: [
      "Developed a semantic visual-feature pipeline that converts utterance-level videos into temporally structured descriptions of facial expressions, gaze, body language, and emotional transitions.",
      "Encoded the descriptions into dense representations for graph-based multimodal reasoning, improving cross-modal alignment while providing a viable alternative to noisy handcrafted visual features.",
    ],
  },
];
