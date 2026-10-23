type Project = {
  name: string;
  desc: string;
  stack: string[];
  github?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    name: "DocuMind — RAG Document Q&A Assistant",
    desc: "Local RAG system for documents with cited answers and hallucination guardrails. Compared 4 chunking methods and 2 embedding models; added hybrid BM25 and reranking.",
    stack: ["Python", "LangChain", "LlamaIndex", "ChromaDB", "Ollama"],
  },
  {
    name: "Benhallu — Bengali Hallucination Detection",
    desc: "Retrieval-augmented pipeline that verifies Bengali answers against supplied context or a Bengali QA knowledge base. Built a hallucination dataset and fine-tuned BanglaBERT with answer-comparison features to classify responses.",
    stack: ["Python", "RAG", "BanglaBERT", "scikit-learn"],
  },
  {
    name: "Bengali Speaker Diarization — Speaker Turn Detection",
    desc: "Speech pipeline using neural voice activity detection, speaker embeddings, and agglomerative clustering to label timestamped speaker turns. Speaker counts estimated with silhouette scores; results exported to CSV.",
    stack: ["PyTorch", "Silero VAD", "ECAPA-TDNN"],
  },
  {
    name: "Drone Vision — Aerial Tracking",
    desc: "Fine-tuned YOLOv11X on VisDrone and used ByteTrack for human counting and multi-object tracking in aerial footage.",
    stack: ["PyTorch", "YOLOv11X", "ByteTrack"],
  },
  {
    name: "Postfolio — Professional Networking",
    desc: "Integrates social networking, portfolio and CV creation, job search, and AI interview preparation.",
    stack: ["Spring Boot", "Next.js", "Docker", "RabbitMQ", "Stripe"],
  },
  {
    name: "Redrick Routinson — Campus Automation",
    desc: "Genetic-algorithm scheduling, QR exam attendance, class swaps, events, forums, and lost-and-found.",
    stack: ["Python", "React", "Flask", "Firebase"],
  },
  {
    name: "Biztrack — Business Analytics",
    desc: "AI modules for real-time finance tracking, risk alerts, customer segmentation, and forecasting.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    name: "Cashless — Multi-Tenant Wallet API",
    desc: "Tenant-isolated wallets with atomic transfers, an immutable transaction ledger, and idempotent deposits and withdrawals.",
    stack: ["Django", "Django REST Framework", "PostgreSQL", "Docker"],
  },
];
