/**
 * Professional and research experience. Newest first, with the current AI Engineer role on top.
 */

export type ExperienceEntry = {
  role: string;
  organization: string;
  /** Free-form, e.g. '2025–Present'. */
  period: string;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: 'AI Engineer',
    organization: 'GLiTch LABS',
    period: '2025–Present',
    points: [
      'Develop, fine-tune, and evaluate machine learning and LLM-based features in Python, using PyTorch and TensorFlow, and turn prototypes into production-ready services.',
      'Build RAG pipelines with embeddings, vector databases, and reranking, and expose models through backend APIs integrated with client applications.',
      'Prepare and manage datasets and databases for training, evaluation, and inference, and troubleshoot model and pipeline issues alongside teammates.',
    ],
  },
  {
    role: 'Student Researcher',
    organization: 'Elite Research Lab',
    period: '2026–Present',
    points: ['Support research projects through literature reviews, experiments, and analysis.'],
  },
  {
    role: 'Researcher',
    organization: 'IUT Computer Vision Lab',
    period: '2025–2026',
    points: ['Researched multimodal AI methods to improve integration and mitigate modality imbalance.'],
  },
  {
    role: 'Senior Executive',
    organization: 'Project Aero',
    period: '2025–2026',
    points: ['Contributed to drone R&D by applying AI-based object tracking for international UAV competitions.'],
  },
  {
    role: 'Intern',
    organization: 'Battery Low Interactive Ltd.',
    period: '2025',
    points: ['Learned Flutter development, REST API integration, and applications of fine-tuned ML models.'],
  },
];
