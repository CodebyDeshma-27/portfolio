export type Skill = { name: string; slug: string };

export type SkillCategory = { name: string; items: Skill[] };

// slug = simpleicons.org slug (used with https://cdn.simpleicons.org/<slug>)
export const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    items: [
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Python", slug: "python" },
      { name: "Java", slug: "openjdk" },
      { name: "C", slug: "c" },
      { name: "SQL", slug: "mysql" },
      { name: "Bash", slug: "gnubash" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "React", slug: "react" },
      { name: "Vite", slug: "vite" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css" },
      { name: "Redux", slug: "redux" },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express", slug: "express" },
      { name: "REST", slug: "openapiinitiative" },
      { name: "JWT", slug: "jsonwebtokens" },
      { name: "WebSockets", slug: "socketdotio" },
    ],
  },
  {
    name: "Databases",
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MySQL", slug: "mysql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "Redis", slug: "redis" },
    ],
  },
  {
    name: "Cloud",
    items: [
      { name: "AWS", slug: "amazonwebservices" },
      { name: "EC2", slug: "amazonec2" },
      { name: "S3", slug: "amazons3" },
      { name: "Lambda", slug: "awslambda" },
      { name: "Cloudflare", slug: "cloudflare" },
    ],
  },
  {
    name: "DevOps",
    items: [
      { name: "Docker", slug: "docker" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "Nginx", slug: "nginx" },
      { name: "Linux", slug: "linux" },
    ],
  },
  {
    name: "Operating Systems",
    items: [
      { name: "Linux", slug: "linux" },
      { name: "Kali Linux", slug: "kalilinux" },
      { name: "Ubuntu", slug: "ubuntu" },
      { name: "Windows", slug: "windows11" },
    ],
  },
  {
    name: "Security",
    items: [
      { name: "OWASP", slug: "owasp" },
      { name: "Burp Suite", slug: "burpsuite" },
      { name: "Nmap", slug: "nmap" },
      { name: "Wireshark", slug: "wireshark" },
      { name: "Metasploit", slug: "metasploit" },
    ],
  },
  {
    name: "Networking",
    items: [
      { name: "Cisco", slug: "cisco" },
      { name: "OpenVPN", slug: "openvpn" },
      { name: "Cloudflare", slug: "cloudflare" },
      { name: "Let's Encrypt", slug: "letsencrypt" },
    ],
  },
  {
    name: "Developer Tools",
    items: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "VS Code", slug: "vscodium" },
      { name: "Postman", slug: "postman" },
      { name: "Figma", slug: "figma" },
    ],
  },
  {
    name: "Hands-on Platforms",
    items: [
      { name: "TryHackMe", slug: "tryhackme" },
      { name: "Hack The Box", slug: "hackthebox" },
      { name: "LeetCode", slug: "leetcode" },
      { name: "Kaggle", slug: "kaggle" },
    ],
  },
];
