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

// Security

// Cloud

// Database

// GenAI

// Hackathons

// Internship

export const certificates: Certificate[] = [
  // Security
  { id: "sec-cloud", category: "Security", title: "Cloud Security", issuer: "Palo Alto Networks", date: "2025", image: "/certificates/Security__Cloud_security.png" },
  { id: "sec-network", category: "Security", title: "Network Security", issuer: "Palo Alto Networks", date: "2025", image: "/certificates/Security__Network_security.png" },
  { id: "sec-ops", category: "Security", title: "Security Operations", issuer: "Palo Alto Networks", date: "2025", image: "/certificates/Security__Security_Operations.png" },

  // Cloud
  { id: "cl-waf", category: "Cloud", title: "AWS Web Application Firewall (WAF)", issuer: "AWS Skill Builder", date: "2025", image: "/certificates/Cloud__AWS_WAF.png" },
  { id: "cl-serverless", category: "Cloud", title: "Deploying Serverless Applications", issuer: "AWS Skill Builder", date: "2025", image: "/certificates/Cloud__AWS_serverless_app_deployment.png" },
  { id: "cl-cc", category: "Cloud", title: "Cloud Computing Fundamentals", issuer: "Coursera", date: "2024", image: "/certificates/Cloud__CC.png" },
  { id: "cl-ccomp", category: "Cloud", title: "Cloud Computing", issuer: "NPTEL", date: "2024", image: "/certificates/Cloud__Cloud_computing.png" },

  // Database
  { id: "db-sql-int", category: "Database", title: "SQL (Intermediate)", issuer: "HackerRank", date: "2024", image: "/certificates/Database__HackerRank_sql_Intermediate.png" },
  { id: "db-sql-basic", category: "Database", title: "SQL (Basic)", issuer: "HackerRank", date: "2024", image: "/certificates/Database__HackerRank_sql_basic.png" },
  { id: "db-mongo", category: "Database", title: "MongoDB Basics", issuer: "MongoDB University", date: "2024", image: "/certificates/Database__MongoDB_basics.png" },

  // GenAI
  { id: "ai-coursera", category: "GenAI", title: "Generative AI Fundamentals", issuer: "Coursera", date: "2024", image: "/certificates/GenAI__Coursera.png" },

  // Hackathons
  { id: "hk-hr", category: "Hackathons", title: "HackerRank Orchestrate", issuer: "HackerRank", date: "June 2025", image: "/certificates/Hackathons__HackerRank_Orchestrate_June.png" },
  { id: "hk-kcg", category: "Hackathons", title: "Hackathon Participation", issuer: "KCG College of Technology", date: "2024", image: "/certificates/Hackathons__KCG.png" },
  { id: "hk-mnm", category: "Hackathons", title: "Hackathon Participation", issuer: "MNM Jain Engineering College", date: "2024", image: "/certificates/Hackathons__MNM.png" },
  { id: "hk-msec", category: "Hackathons", title: "HackIntym — Top 5 / 25 Teams", issuer: "MSEC (30-hour Hackathon)", date: "2024", image: "/certificates/Hackathons__MSEC.png" },
  { id: "hk-pani", category: "Hackathons", title: "Hackathon Participation", issuer: "Panimalar Engineering College", date: "2024", image: "/certificates/Hackathons__Panimalar.png" },
  { id: "hk-sathya", category: "Hackathons", title: "Hackathon Participation", issuer: "Sathyabama University", date: "2024", image: "/certificates/Hackathons__Sathyabama.png" },
  { id: "hk-tata", category: "Hackathons", title: "Hackathon Participation", issuer: "Tata Elxsi", date: "2024", image: "/certificates/Hackathons__Tata_Elxsi.png" },
  { id: "hk-think", category: "Hackathons", title: "Thinkathon", issuer: "Inter-College Innovation Challenge", date: "2024", image: "/certificates/Hackathons__Thinkathon.png" },
  { id: "hk-vit", category: "Hackathons", title: "VIT Hack-A-Cure — Finalist", issuer: "VIT University", date: "2025", image: "/certificates/Hackathons__VIT.png" },

  // Internship
  { id: "in-htc", category: "Internship", title: "Cybersecurity Research Internship", issuer: "HTC Global Services", date: "Aug 2025", image: "/certificates/Internship__HTC_Intern_completion.jpg" },

  // Paper Presentation
  { id: "pp-hicet", category: "Paper Presentation", title: "AI-Based Intrusion Detection System", issuer: "HICET International Conference 2026", date: "2026", image: "/certificates/Paper_presentation__HICET.png" },
  { id: "pp-msec", category: "Paper Presentation", title: "E-Cube — Blockchain (2nd Place)", issuer: "MSEC", date: "2024", image: "/certificates/Paper_presentation__MSEC_.png" },
];
