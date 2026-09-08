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
    title: 'Postfolio',
    description:
      'Combines social sharing, portfolio and CV generation, job searching, and AI-powered interview preparation.',
    tags: ['Spring Boot', 'Next.js', 'Docker', 'RabbitMQ', 'Stripe'],
    links: {
      repo: 'https://github.com/shufanshahi/Postfolio',
      demo: 'https://www.youtube.com/watch?v=U6N-ioqvg9c',
    },
  },
  {
    title: 'Redrick Routinson',
    description:
      'Developed genetic algorithm-based scheduling and automated exam seat planning with QR attendance. Added class swapping, event management, forums, and lost-and-found features.',
    tags: ['Python', 'React', 'Flask', 'Firebase'],
    links: {
      repo: 'https://github.com/shufanshahi/RedrickRoutinson',
      demo: 'https://www.youtube.com/watch?v=Fg-GkZrsIzw',
    },
  },
  {
    title: 'Biztrack',
    description:
      'Implemented AI modules for real-time finance tracking, risk alerts, segmentation, and forecasting for intelligent business insights.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    links: {
      repo: 'https://github.com/shufanshahi/biztrack',
      demo: 'https://www.youtube.com/watch?v=STNoXqq8kQM',
    },
  },
  {
    title: 'Drone Vision',
    description:
      'Fine-tuned YOLOv11X on VisDrone with class-balanced training and tiled inference for small aerial objects. Implemented human counting and multi-object tracking using ByteTrack.',
    tags: ['PyTorch', 'YOLOv11X', 'ByteTrack'],
    links: { repo: 'https://github.com/shufanshahi/droneVision' },
  },
  {
    title: 'BD Traffic Monitoring System',
    description: 'Fine-tuned YOLO on Bangladesh traffic data to detect local vehicle types.',
    tags: ['PyTorch', 'YOLO11L', 'Flask', 'Docker'],
    links: {
      repo: 'https://github.com/shufanshahi/bd-traffic-monitoring-system',
      project: 'https://huggingface.co/spaces/shufanshahi/bd-traffic-monitoring-system',
    },
  },
  {
    title: 'Animeverse',
    description:
      'Enables users to discover shows based on their interests and interact with the application through an intelligent chatbot.',
    tags: ['Flutter', 'Firebase'],
    links: { repo: 'https://github.com/shufanshahi/animeverse' },
  },
];
