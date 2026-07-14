import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHeader, Panel } from "@/components/ui-kit";
import { socials } from "@/data/socials";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Deshma Udayakumar" },
      { name: "description", content: "Professional resume — education, experience, skills, projects and research." },
      { property: "og:title", content: "Resume — Deshma Udayakumar" },
      { property: "og:description", content: "Professional resume." },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <Page>
      <div className="glow-strong">
        <PageHeader
          eyebrow="./resume"
          title="Professional Resume"
          description="An ATS-friendly summary of my education, experience, projects and achievements."
        />
      </div>

      <div className="mb-8 flex flex-wrap gap-2 font-mono text-xs">
        <a
          href={socials.resumeUrl}
          download="Deshma_U_Resume.pdf"
          className="rounded-md border border-primary/40 bg-primary/10 px-4 py-2.5 text-primary hover:bg-primary/15 transition-colors"
        >
          Download PDF ↓
        </a>
        <a
          href={socials.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-border bg-surface px-4 py-2.5 text-foreground hover:bg-surface-2 transition-colors"
        >
          Open in new tab ↗
        </a>
      </div>

      {/* Resume document */}
      <Panel className="!p-0 overflow-hidden">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-border">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
            DESHMA UDAYAKUMAR
          </h2>
          <div className="mt-1.5 font-mono text-[13px] text-primary">
            Cybersecurity and DevOps Enthusiast
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-[12px] text-foreground/90">
            <a href={`mailto:${socials.email}`} className="hover:text-primary">{socials.email}</a>
            <span>{socials.phone}</span>
            <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-primary">
              github.com/CodebyDeshma-27
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">
              linkedin.com/in/deshma-udayakumar
            </a>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          <Section title="Summary">
            <p className="text-[14.5px] leading-relaxed text-foreground/90">
              Information Technology student interested in Cybersecurity and DevOps with hands-on experience in Python, Linux, Docker, and networking. Built projects related to attack surface monitoring, fraud detection, and AI chatbots using Flask and LangChain. Interested in network security, SOC operations, DevSecOps and cloud security.
            </p>
          </Section>

          <Section title="Education">
            <ResumeRow
              left="Meenakshi Sundararajan Engineering College, Chennai"
              right="2023 – 2027"
              sub="B.Tech — Information Technology · CGPA: 8.68"
            />
          </Section>

          <Section title="Technical Skills">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-[13.5px]">
              <SkillRow label="Languages" value="Python, C++, Java (Basic)" />
              <SkillRow label="Backend" value="Node.js, Express.js, Flask, FastAPI" />
              <SkillRow label="Databases" value="MongoDB, MySQL, Neon PostgreSQL" />
              <SkillRow label="Operating Systems" value="Linux (CLI)" />
              <SkillRow label="DevOps & Containers" value="Docker, Kubernetes" />
              <SkillRow label="Version Control" value="Git, GitHub" />
              <SkillRow label="Networking" value="Computer networking concepts" />
              <SkillRow label="Hands-on Labs" value="TryHackMe" />
            </div>
          </Section>

          <Section title="Internship">
            <ResumeRow
              left="Cybersecurity Research Intern — HTC Global Services, Guindy, Chennai"
              right="July – Aug 2025"
            />
            <ul className="mt-2 space-y-1.5 text-[13.5px] text-foreground/85">
              <Bullet>Analyzed 30+ IEEE cybersecurity research papers on risk-assessment frameworks and security-assessment methodologies.</Bullet>
              <Bullet>Prepared technical documentation and LaTeX-based research reports using Overleaf and presented findings to mentors.</Bullet>
            </ul>
          </Section>

          <Section title="Projects">
            <ProjectItem
              name="NetProbe-Secure — Automated Attack Surface Management (ASM)"
              period="Feb 2026 – Mar 2026"
              bullets={[
                "Built an ASM tool using Python, Nmap, and SQLite to monitor network exposure and services.",
                "Implemented scheduled scanning and baseline comparison to detect new ports and service changes.",
                "Basic understanding of SOC workflows, Linux security, and network traffic analysis.",
              ]}
            />
            <ProjectItem
              name="FedShield — Privacy-Preserving Federated Fraud Detection"
              period="Jan 2026 – Present"
              bullets={[
                "Developed a fraud-detection system using Federated Learning (Flower) enabling banks to collaborate without sharing sensitive data.",
                "Integrated Differential Privacy and secure aggregation with high model performance (~99.8% accuracy).",
                "Built a scalable pipeline with real-time Flask APIs demonstrating secure, distributed machine learning.",
              ]}
            />
            <ProjectItem
              name="Containerized Chat Application — MVP"
              period="Feb 2026 – Mar 2026"
              bullets={[
                "Developed a real-time chat application with separate frontend and backend services.",
                "Containerized with Docker and managed multi-service setup with Docker Compose.",
                "Explored Kubernetes basics for deployment and scalability, with REST APIs handling communication.",
              ]}
            />
          </Section>

          <Section title="Achievements, Hackathons & Research">
            <ul className="space-y-1.5 text-[13.5px] text-foreground/85">
              <Bullet>Secured 2nd place in E-Cube Paper Presentation on Blockchain.</Bullet>
              <Bullet>Participated in 7 hackathons with hands-on rapid prototyping and team-based development.</Bullet>
              <Bullet>Ranked Top 5 among 25 teams in HackIntym (30-hour hackathon, MSEC).</Bullet>
              <Bullet>Finalist in VIT Hack-A-Cure — built an AI medical chatbot using RAG and vector databases.</Bullet>
              <Bullet>Presented a research paper at HICET International Conference 2026 — AI-based IDS with 97%+ accuracy and &lt;200 ms latency.</Bullet>
            </ul>
          </Section>

          <Section title="Certifications">
            <ul className="space-y-1.5 text-[13.5px] text-foreground/85">
              <Bullet>Palo Alto Networks — Cloud Security, Security Operations, Network Security.</Bullet>
              <Bullet>AWS Skill Builder — Web Application Firewall (WAF), Deploying Serverless Applications.</Bullet>
              <Bullet>Pursuing Fortinet NSE 1 — network security fundamentals and threat awareness.</Bullet>
            </ul>
          </Section>
        </div>
      </Panel>
    </Page>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary pb-2 mb-3 border-b border-border">
        {title}
      </h3>
      {children}
    </section>
  );
}

function ResumeRow({ left, right, sub }: { left: string; right: string; sub?: string }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="text-[14.5px] font-semibold text-foreground">{left}</div>
        <div className="font-mono text-[12px] text-primary">{right}</div>
      </div>
      {sub && <div className="mt-1 text-[13px] text-foreground/85">{sub}</div>}
    </div>
  );
}

function SkillRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <span className="font-mono text-[12px] text-primary min-w-[120px] shrink-0">{label}:</span>
      <span className="text-foreground/90">{value}</span>
    </div>
  );
}

function ProjectItem({
  name,
  period,
  bullets,
}: {
  name: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div className="mb-4 last:mb-0">
      <ResumeRow left={name} right={period} />
      <ul className="mt-2 space-y-1.5 text-[13.5px] text-foreground/85">
        {bullets.map((b, i) => (
          <Bullet key={i}>{b}</Bullet>
        ))}
      </ul>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="text-primary mt-1.5 shrink-0">▸</span>
      <span>{children}</span>
    </li>
  );
}
