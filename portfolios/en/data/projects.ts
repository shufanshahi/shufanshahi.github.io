type Project = {
  name: string;
  desc: string;
  stack: string[];
  github?: string;
  link?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    name: "Postfolio — Professional Networking",
    desc: "Integrates social networking, portfolio and CV creation, job search, and AI interview preparation.",
    stack: ["Spring Boot", "Next.js", "Docker", "RabbitMQ", "Stripe"],
    github: "https://github.com/shufanshahi/Postfolio",
    link: "https://www.youtube.com/watch?v=U6N-ioqvg9c",
    linkLabel: "Demo",
  },
  {
    name: "Redrick Routinson — Campus Automation",
    desc: "Built genetic-algorithm scheduling, QR exam attendance, class swaps, events, forums, and lost-and-found.",
    stack: ["Python", "React", "Flask", "Firebase"],
    github: "https://github.com/shufanshahi/RedrickRoutinson",
    link: "https://www.youtube.com/watch?v=Fg-GkZrsIzw",
    linkLabel: "Demo",
  },
  {
    name: "Biztrack — Business Analytics",
    desc: "Built AI modules for real-time finance tracking, risk alerts, customer segmentation, and forecasting.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    github: "https://github.com/shufanshahi/biztrack",
    link: "https://www.youtube.com/watch?v=STNoXqq8kQM",
    linkLabel: "Demo",
  },
  {
    name: "Cashless — Multi-Tenant Wallet API",
    desc: "Built tenant-isolated wallets with atomic transfers, an immutable transaction ledger, and idempotent deposits and withdrawals.",
    stack: ["Django", "Django REST Framework", "PostgreSQL", "Docker"],
  },
  {
    name: "DocuMind — Document Q&A",
    desc: "Built a local RAG system for documents with cited answers and hallucination guardrails. Compared 4 chunking methods and 2 embedding models; added hybrid BM25 and reranking.",
    stack: ["Python", "LangChain", "LlamaIndex", "ChromaDB", "Ollama"],
    github: "https://github.com/shufanshahi/DocuMind",
  },
  {
    name: "Drone Vision — Aerial Tracking",
    desc: "Fine-tuned YOLOv11X on VisDrone and used ByteTrack for human counting and multi-object tracking.",
    stack: ["PyTorch", "YOLOv11X", "ByteTrack"],
    github: "https://github.com/shufanshahi/droneVision",
  },
];
