export type Skill = {
  name: string;
  slug?: string; // cdn.simpleicons.org/<slug>
  icon?: string;
  group: SkillFilter;
};

export type SkillFilter =
  | "Languages"
  | "Backend"
  | "Frontend"
  | "Databases"
  | "Cybersecurity"
  | "Cloud & DevOps"
  | "AI Tools"
  | "Developer Tools";

export type SkillCategory = {
  name: SkillFilter;
  items: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    items: [
      { name: "Python", slug: "python", group: "Languages" },
      { name: "Java", slug: "openjdk", group: "Languages" },
      { name: "C++", slug: "cplusplus", group: "Languages" },
      { name: "JavaScript", slug: "javascript", group: "Languages" },
      { name: "TypeScript", slug: "typescript", group: "Languages" },
      { name: "SQL", slug: "mysql", group: "Languages" },
      { name: "Bash", slug: "gnubash", group: "Languages" },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", slug: "nodedotjs", group: "Backend" },
      { name: "Express.js", slug: "express", group: "Backend" },
      { name: "Flask", slug: "flask", group: "Backend" },
      { name: "FastAPI", slug: "fastapi", group: "Backend" },
      { name: "LangChain", slug: "langchain", group: "Backend" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "React", slug: "react", group: "Frontend" },
      { name: "Tailwind CSS", slug: "tailwindcss", group: "Frontend" },
      { name: "HTML5", slug: "html5", group: "Frontend" },
      { name: "CSS3", slug: "css", group: "Frontend" },
      { name: "Vite", slug: "vite", group: "Frontend" },
    ],
  },
  {
    name: "Databases",
    items: [
      { name: "MongoDB", slug: "mongodb", group: "Databases" },
      { name: "MySQL", slug: "mysql", group: "Databases" },
      { name: "PostgreSQL", slug: "postgresql", group: "Databases" },
      { name: "Neon", slug: "neon", group: "Databases" },
      { name: "SQLite", slug: "sqlite", group: "Databases" },
    ],
  },
  {
    name: "Cybersecurity",
    items: [
      { name: "Linux", slug: "linux", group: "Cybersecurity" },
      { name: "TryHackMe", slug: "tryhackme", group: "Cybersecurity" },
      { name: "Nmap", icon: "ScanLine", group: "Cybersecurity" },
      { name: "Wireshark", slug: "wireshark", group: "Cybersecurity" },
      { name: "Network Security", icon: "ShieldCheck", group: "Cybersecurity" },
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      { name: "AWS", slug: "amazonwebservices", group: "Cloud & DevOps" },
      { name: "Docker", slug: "docker", group: "Cloud & DevOps" },
      { name: "Kubernetes", slug: "kubernetes", group: "Cloud & DevOps" },
      { name: "GitHub Actions", slug: "githubactions", group: "Cloud & DevOps" },
      { name: "CI/CD", icon: "GitBranch", group: "Cloud & DevOps" },
    ],
  },
  {
    name: "AI Tools",
    items: [
      { name: "ChatGPT", slug: "openai", group: "AI Tools" },
      { name: "Claude", slug: "anthropic", group: "AI Tools" },
      { name: "Gemini", slug: "googlegemini", group: "AI Tools" },
      { name: "Cursor", slug: "cursor", group: "AI Tools" },
      { name: "GitHub Copilot", slug: "githubcopilot", group: "AI Tools" },
      { name: "Ollama", slug: "ollama", group: "AI Tools" },
    ],
  },
  {
    name: "Developer Tools",
    items: [
      { name: "Git", slug: "git", group: "Developer Tools" },
      { name: "GitHub", slug: "github", group: "Developer Tools" },
      { name: "VS Code", slug: "visualstudiocode", group: "Developer Tools" },
      { name: "Postman", slug: "postman", group: "Developer Tools" },
      { name: "IntelliJ IDEA", slug: "intellijidea", group: "Developer Tools" },
      { name: "PyCharm", slug: "pycharm", group: "Developer Tools" },
    ],
  },
];

export const skillFilters: ("All" | SkillFilter)[] = [
  "All",
  "Languages",
  "Backend",
  "Frontend",
  "Databases",
  "Cybersecurity",
  "Cloud & DevOps",
  "AI Tools",
  "Developer Tools",
];
