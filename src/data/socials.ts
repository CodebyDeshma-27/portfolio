import resumeAsset from "@/assets/Deshma_U_Resume.pdf.asset.json";

export const socials = {
  email: "deshma2027@gmail.com",
  phone: "+91 9789688254",
  github: "https://github.com/CodebyDeshma-27/",
  linkedin: "https://www.linkedin.com/in/deshma-udayakumar-514023374/",
  leetcode: "https://leetcode.com/u/pDcfRDP6mh/",
  tryhackme: "https://tryhackme.com/p/deshma2005",
  hackerrank: "https://www.hackerrank.com/profile/deshma2027",
  twitter: "https://x.com/deshma27",
  resumeUrl: resumeAsset.url,
};

export type Stat = { label: string; value: string };

export const stats: Stat[] = [
  { label: "Hackathons", value: "7+" },
  { label: "Certificates", value: "23" },
  { label: "Internship", value: "01" },
  { label: "CGPA", value: "8.68" },
];

export const profile = {
  name: "Deshma Udayakumar",
  titles: ["Cybersecurity & DevOps Enthusiast", "Full Stack Developer"],
  intro:
    "Information Technology undergraduate focused on cybersecurity, DevOps and reliable systems. I build full-stack projects with Python, Docker and Linux — and think about how they hold up under attack.",
  location: "Chennai, India",
  status: "Building security-focused projects",
  availability: "Open to Internship Opportunities",
  focus: ["Cybersecurity", "Cloud Security", "DevSecOps", "SOC Operations"],
};
