export type Project = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  tech: string[];
  tags: string[];
  github?: string;
  demo?: string;
  caseStudy?: string;
};

// Add real projects here. Empty = elegant placeholder in the UI.
export const projects: Project[] = [];
