export type CertificateCategory =
  | "Security"
  | "Cloud"
  | "Database"
  | "GenAI"
  | "Hackathons"
  | "Internship"
  | "Paper Presentation";

export const certificateCategories: CertificateCategory[] = [
  "Security",
  "Cloud",
  "Database",
  "GenAI",
  "Hackathons",
  "Internship",
  "Paper Presentation",
];

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: CertificateCategory;
  image: string;
};

// Drop certificate images into public/certificates/ and reference them here.
export const certificates: Certificate[] = [];
