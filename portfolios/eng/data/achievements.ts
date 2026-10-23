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
    desc: "Built a zero-shot computer vision pipeline for detecting anomalies in industrial images using foundation models.",
  },
  {
    title: "First Runner-up — IUT Coderush Hackathon",
    event: "2025",
    desc: "Built an application under tight deadlines in a fast-paced team.",
  },
  {
    title: "7th Place — BAIC Datathon",
    event: "2025",
    desc: "Analyzed datasets using preprocessing, visualization, and modeling.",
  },
  {
    title: "IUT Partial Scholarship",
    event: "2022",
    desc: "Secured a partial scholarship covering all four years of B.Sc. studies.",
  },
  {
    title: "Runner-up — State-Level Physics Olympiad",
    event: "2018",
    desc: "Placed second at the state-level Physics Olympiad.",
  },
];
