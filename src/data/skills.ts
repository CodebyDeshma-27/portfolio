export type Skill = {
  name: string;
  slug?: string; // api.iconify.design/simple-icons/<slug>
  icon?: string; // lucide-react icon name
};

export type SkillCategory = {
  name: string;
  items: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express.js", slug: "express" },
      { name: "Flask", slug: "flask" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "REST APIs", icon: "Network" },
    ],
  },
  {
    name: "Cybersecurity",
    items: [
      { name: "Linux", slug: "linux" },
      { name: "TryHackMe", slug: "tryhackme" },
      { name: "Nmap", icon: "ScanLine" },
      { name: "Wireshark", slug: "wireshark" },
      { name: "Network Security", icon: "ShieldCheck" },
    ],
  },
  {
    name: "DevOps",
    items: [
      { name: "AWS", slug: "amazonwebservices" },
      { name: "EC2", slug: "amazonec2" },
      { name: "S3", slug: "amazons3" },
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "CI/CD", icon: "GitBranch" },
    ],
  },
  {
    name: "Languages",
    items: [
      { name: "Python", slug: "python" },
      { name: "Java", slug: "openjdk" },
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "SQL", slug: "mysql" },
      { name: "Bash", slug: "gnubash" },
    ],
  },
  {
    name: "Databases",
    items: [
      { name: "MongoDB", slug: "mongodb" },
      { name: "MySQL", slug: "mysql" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Neon PostgreSQL", slug: "neon" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "React", slug: "react" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css" },
      { name: "Vite", slug: "vite" },
    ],
  },
  {
    name: "Developer Tools",
    items: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "VS Code", slug: "visualstudiocode" },
      { name: "Postman", slug: "postman" },
      { name: "IntelliJ IDEA", slug: "intellijidea" },
      { name: "PyCharm", slug: "pycharm" },
    ],
  },
  {
    name: "AI Tools",
    items: [
      { name: "ChatGPT", slug: "openai" },
      { name: "Claude", slug: "anthropic" },
      { name: "Gemini", slug: "google" },
      { name: "Cursor", slug: "cursor" },
      { name: "GitHub Copilot", slug: "githubcopilot" },
      { name: "Ollama", slug: "ollama" },
      { name: "Perplexity", slug: "perplexity" },
    ],
  },
  {
    name: "Deployment",
    items: [
      { name: "Vercel", slug: "vercel" },
      { name: "Netlify", slug: "netlify" },
      { name: "AWS", slug: "amazonwebservices" },
      { name: "Render", slug: "render" },
      { name: "GitHub Pages", slug: "github" },
    ],
  },
];
