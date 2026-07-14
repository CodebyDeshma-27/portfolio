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
import c_secCloud from "@/assets/certs/Security/Cloud_security.png.asset.json";
import c_secNetwork from "@/assets/certs/Security/Network_security.png.asset.json";
import c_secOps from "@/assets/certs/Security/Security_Operations.png.asset.json";

// Cloud
import c_awsWaf from "@/assets/certs/Cloud/AWS_WAF.png.asset.json";
import c_awsServerless from "@/assets/certs/Cloud/AWS_serverless_app_deployment.png.asset.json";
import c_cc from "@/assets/certs/Cloud/CC.png.asset.json";
import c_ccomp from "@/assets/certs/Cloud/Cloud_computing.png.asset.json";

// Database
import c_sqlInt from "@/assets/certs/Database/HackerRank_sql_Intermediate.png.asset.json";
import c_sqlBasic from "@/assets/certs/Database/HackerRank_sql_basic.png.asset.json";
import c_mongo from "@/assets/certs/Database/MongoDB_basics.png.asset.json";

// GenAI
import c_coursera from "@/assets/certs/GenAI/Coursera.png.asset.json";

// Hackathons
import c_hrOrch from "@/assets/certs/Hackathons/HackerRank_Orchestrate_June.png.asset.json";
import c_kcg from "@/assets/certs/Hackathons/KCG.png.asset.json";
import c_mnm from "@/assets/certs/Hackathons/MNM.png.asset.json";
import c_msec from "@/assets/certs/Hackathons/MSEC.png.asset.json";
import c_pani from "@/assets/certs/Hackathons/Panimalar.png.asset.json";
import c_sathya from "@/assets/certs/Hackathons/Sathyabama.png.asset.json";
import c_tata from "@/assets/certs/Hackathons/Tata_Elxsi.png.asset.json";
import c_think from "@/assets/certs/Hackathons/Thinkathon.png.asset.json";
import c_vit from "@/assets/certs/Hackathons/VIT.png.asset.json";

// Internship
import c_htc from "@/assets/certs/Internship/HTC_Intern_completion.jpg.asset.json";

// Paper Presentation
import c_hicet from "@/assets/certs/Paper_presentation/HICET.png.asset.json";
import c_pmsec from "@/assets/certs/Paper_presentation/MSEC_.png.asset.json";

export const certificates: Certificate[] = [
  // Security
  { id: "sec-cloud", category: "Security", title: "Cloud Security", issuer: "Palo Alto Networks", date: "2025", image: c_secCloud.url },
  { id: "sec-network", category: "Security", title: "Network Security", issuer: "Palo Alto Networks", date: "2025", image: c_secNetwork.url },
  { id: "sec-ops", category: "Security", title: "Security Operations", issuer: "Palo Alto Networks", date: "2025", image: c_secOps.url },

  // Cloud
  { id: "cl-waf", category: "Cloud", title: "AWS Web Application Firewall (WAF)", issuer: "AWS Skill Builder", date: "2025", image: c_awsWaf.url },
  { id: "cl-serverless", category: "Cloud", title: "Deploying Serverless Applications", issuer: "AWS Skill Builder", date: "2025", image: c_awsServerless.url },
  { id: "cl-cc", category: "Cloud", title: "Cloud Computing Fundamentals", issuer: "Coursera", date: "2024", image: c_cc.url },
  { id: "cl-ccomp", category: "Cloud", title: "Cloud Computing", issuer: "NPTEL", date: "2024", image: c_ccomp.url },

  // Database
  { id: "db-sql-int", category: "Database", title: "SQL (Intermediate)", issuer: "HackerRank", date: "2024", image: c_sqlInt.url },
  { id: "db-sql-basic", category: "Database", title: "SQL (Basic)", issuer: "HackerRank", date: "2024", image: c_sqlBasic.url },
  { id: "db-mongo", category: "Database", title: "MongoDB Basics", issuer: "MongoDB University", date: "2024", image: c_mongo.url },

  // GenAI
  { id: "ai-coursera", category: "GenAI", title: "Generative AI Fundamentals", issuer: "Coursera", date: "2024", image: c_coursera.url },

  // Hackathons
  { id: "hk-hr", category: "Hackathons", title: "HackerRank Orchestrate", issuer: "HackerRank", date: "June 2025", image: c_hrOrch.url },
  { id: "hk-kcg", category: "Hackathons", title: "Hackathon Participation", issuer: "KCG College of Technology", date: "2024", image: c_kcg.url },
  { id: "hk-mnm", category: "Hackathons", title: "Hackathon Participation", issuer: "MNM Jain Engineering College", date: "2024", image: c_mnm.url },
  { id: "hk-msec", category: "Hackathons", title: "HackIntym — Top 5 / 25 Teams", issuer: "MSEC (30-hour Hackathon)", date: "2024", image: c_msec.url },
  { id: "hk-pani", category: "Hackathons", title: "Hackathon Participation", issuer: "Panimalar Engineering College", date: "2024", image: c_pani.url },
  { id: "hk-sathya", category: "Hackathons", title: "Hackathon Participation", issuer: "Sathyabama University", date: "2024", image: c_sathya.url },
  { id: "hk-tata", category: "Hackathons", title: "Hackathon Participation", issuer: "Tata Elxsi", date: "2024", image: c_tata.url },
  { id: "hk-think", category: "Hackathons", title: "Thinkathon", issuer: "Inter-College Innovation Challenge", date: "2024", image: c_think.url },
  { id: "hk-vit", category: "Hackathons", title: "VIT Hack-A-Cure — Finalist", issuer: "VIT University", date: "2025", image: c_vit.url },

  // Internship
  { id: "in-htc", category: "Internship", title: "Cybersecurity Research Internship", issuer: "HTC Global Services", date: "Aug 2025", image: c_htc.url },

  // Paper Presentation
  { id: "pp-hicet", category: "Paper Presentation", title: "AI-Based Intrusion Detection System", issuer: "HICET International Conference 2026", date: "2026", image: c_hicet.url },
  { id: "pp-msec", category: "Paper Presentation", title: "E-Cube — Blockchain (2nd Place)", issuer: "MSEC", date: "2024", image: c_pmsec.url },
];
