/**
 * Education timeline. Newest entry first.
 */

export type EducationEntry = {
  degree: string;
  institution: string;
  location: string;
  /** Free-form so that 'Sept 2022' and '2022' both work. */
  startDate: string;
  /** Use 'Present' for an ongoing degree. */
  endDate: string;
  thesisTitle?: string;
  thesisDescription?: string;
  /** Optional bullet points: honours, GPA, coursework. */
  details?: string[];
};

export const education: EducationEntry[] = [
  {
    degree: 'B.Sc. in Computer Science and Engineering',
    institution: 'Islamic University of Technology',
    location: 'Dhaka, Bangladesh',
    startDate: '2022',
    endDate: '2026',
    thesisTitle: 'Prototype-Guided Adaptive Feature Learning for Multimodal Emotion Recognition in Conversation',
    thesisDescription:
      'Work on multimodal emotion recognition in conversation, focusing on how graph-based models consume visual features and on reducing modality imbalance during fusion.',
    details: [
      'Final CGPA: 3.58 / 4.00',
      'Partial scholarship covering all four years of study',
      'Relevant coursework: Data Structures and Algorithms, Machine Learning, Deep Learning with Computer Vision, Database Systems, Computer Networks',
    ],
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Chuadanga Govt. College',
    location: 'Chuadanga, Bangladesh',
    startDate: '2021',
    endDate: '2021',
    details: ['GPA: 5.00 / 5.00'],
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'V.J. Govt. High School',
    location: 'Chuadanga, Bangladesh',
    startDate: '2019',
    endDate: '2019',
    details: ['GPA: 5.00 / 5.00'],
  },
  // --- Template ------------------------------------------------------------
  // {
  //   degree: 'M.Sc. in Computer Science',
  //   institution: 'University Name',
  //   location: 'City, Country',
  //   startDate: '2026',
  //   endDate: '2028',
  //   thesisTitle: 'Thesis Title',
  //   thesisDescription: 'One or two sentences about the thesis.',
  //   details: ['Advisor: Prof. Name'],
  // },
];
