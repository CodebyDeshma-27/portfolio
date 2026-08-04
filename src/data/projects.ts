export type ProjectCategory =
  | "Security"
  | "Backend Dev"
  | "Machine Learning"
  | "Frontend"
  | "Docker";

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  categories: ProjectCategory[];
  github?: string;
  demo?: string;
  building?: boolean;
};

export const projectFilters: ("All" | ProjectCategory)[] = [
  "All",
  "Security",
  "Backend Dev",
  "Machine Learning",
  "Frontend",
  "Docker",
];

export const projects: Project[] = [
  {
    slug: "netprobe-secure",
    title: "NetProbe-Secure",
    description:
      "Automated Attack Surface Management platform with scheduled Nmap scanning, baseline diffing and alerting on newly exposed services.",
    tech: ["Python", "Nmap", "SQLite", "Docker"],
    categories: ["Security", "Backend Dev"],
    github: "https://github.com/CodebyDeshma-27/Attack-Surface-Management",
  },
  {
    slug: "fedshield",
    title: "FedShield",
    description:
      "Privacy-preserving federated fraud detection using Flower and Differential Privacy across distributed clients.",
    tech: ["Python", "Flower", "Differential Privacy"],
    categories: ["Security", "Machine Learning"],
    github: "https://github.com/CodebyDeshma-27/FedShield",
    building: true,
  },
  {
    slug: "game-cheat-detection",
    title: "Online-Game-Cheat-Detection-System",
    description:
      "ML system that flags suspicious players in online multiplayer games from behavioral signals like kill rate, accuracy and session duration.",
    tech: ["Python", "scikit-learn", "Streamlit"],
    categories: ["Machine Learning"],
    github: "https://github.com/CodebyDeshma-27/Online-Game-Cheat-Detection-System",
    demo: "https://online-game-cheat-detection-system-brseqfmrfnvxhnpvwx43cv.streamlit.app/",
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    description:
      "Personal portfolio presenting my projects, skills, certifications and engineering journey.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    categories: ["Frontend"],
    github: "https://github.com/CodebyDeshma-27/portfolio",
    demo: "https://deshma-portfolio.vercel.app/",
  },
  {
    slug: "flowpilot-ai",
    title: "FlowPilot AI",
    description:
      "AI meeting-to-execution platform that turns discussions into structured tasks, timelines, priorities and project workspaces.",
    tech: ["React", "TypeScript", "AI"],
    categories: ["Frontend", "Backend Dev"],
    github: "https://github.com/CodebyDeshma-27/FlowPilot",
    demo: "https://flow-pilot-opal.vercel.app/",
  },
  {
    slug: "containerized-chat-app",
    title: "Containerized Chat App",
    description:
      "Real-time chat app demonstrating Docker Compose and Kubernetes orchestration with a Python Flask backend.",
    tech: ["Docker", "Kubernetes", "Flask"],
    categories: ["Docker", "Backend Dev"],
    github: "https://github.com/CodebyDeshma-27/Containerized-Chat-App-",
  },
];
