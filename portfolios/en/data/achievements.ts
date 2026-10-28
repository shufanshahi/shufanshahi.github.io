type Achievement = {
  title: string;
  event: string;
  desc: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    title: "5th Place — VAND4 International Competition",
    event: "2026 · Zero-Shot Industrial Track",
    desc: "Foundation-model anomaly detection for industrial images.",
  },
  {
    title: "First Runner-up — IUT Coderush Hackathon",
    event: "2025",
    desc: "Rapid team application development under a tight deadline.",
  },
  {
    title: "7th Place — BAIC Datathon",
    event: "2025",
    desc: "Data preprocessing, visualization, and modeling.",
  },
];
