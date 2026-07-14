export type Experience = {
  role: string;
  company: string;
  duration: string;
  location?: string;
  description: string;
  highlights: string[];
  tech: string[];
  certificate?: string | null;
};

export const experience: Experience[] = [
  {
    role: "Cybersecurity Research Intern",
    company: "HTC Global Services",
    duration: "July – August 2025",
    location: "Guindy, Chennai",
    description:
      "Cybersecurity research internship focused on risk assessment frameworks, security evaluation methodologies, and structured technical documentation. Contributed to research discussions and produced IEEE-style deliverables under mentor guidance.",
    highlights: [
      "Analyzed 30+ IEEE cybersecurity research papers on risk assessment and security evaluation methodologies.",
      "Prepared technical documentation and LaTeX-based research reports using Overleaf.",
      "Presented findings to mentors and contributed to cybersecurity research discussions.",
      "Strengthened understanding of secure system design and structured security research.",
    ],
    tech: ["LaTeX", "Overleaf", "Risk Assessment", "IEEE Research", "Documentation"],
    certificate: null,
  },
];
