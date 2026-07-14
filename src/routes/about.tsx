import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHeader, Panel } from "@/components/ui-kit";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Deshma Udayakumar" },
      { name: "description", content: "The engineering journey of Deshma Udayakumar — background, motivation, and current focus." },
      { property: "og:title", content: "About — Deshma Udayakumar" },
      { property: "og:description", content: "The engineering journey of Deshma Udayakumar." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

type Chapter = {
  id: string;
  label: string;
  index: string;
  title: string;
  body: string[];
};

const chapters: Chapter[] = [
  {
    id: "who",
    label: "Who I Am",
    index: "01",
    title: "An engineer drawn to how systems break — and how to keep them safe.",
    body: [
      "I'm Deshma Udayakumar, an Information Technology undergraduate at Meenakshi Sundararajan Engineering College, Chennai. I spend most of my time either shipping side projects or breaking things to understand how they work.",
      "My interests sit at the intersection of cybersecurity, DevOps and reliable systems. I care about clean architecture, defensible defaults, and code that holds up in production — not just in a demo.",
    ],
  },
  {
    id: "started",
    label: "How I Started",
    index: "02",
    title: "From curiosity to code.",
    body: [
      "It started with small experiments — a Python script here, a landing page there — followed by the usual rabbit hole of tutorials, docs, and late-night debugging.",
      "Hackathons pushed me from writing code to shipping products: tight deadlines, real users, and the discipline of finishing what you start. I've participated in 7+ hackathons and ranked Top 5 among 25 teams in HackIntym at MSEC.",
    ],
  },
  {
    id: "security",
    label: "Why Security",
    index: "03",
    title: "Because reliability isn't optional.",
    body: [
      "The more I built, the more I noticed how much of software engineering is really about failure modes — network edges, trust boundaries, and the assumptions we forget to write down.",
      "Security became the lens I use to think about systems: hostile inputs, misbehaving services, unfriendly environments. This directly shaped my cybersecurity research internship at HTC Global Services, where I analyzed 30+ IEEE papers on risk assessment methodologies.",
    ],
  },
  {
    id: "today",
    label: "What I'm Building Today",
    index: "04",
    title: "Security-focused projects with a systems mindset.",
    body: [
      "Right now I'm building tools like NetProbe-Secure (an ASM tool with Nmap and SQLite) and FedShield (privacy-preserving federated fraud detection with differential privacy, ~99.8% accuracy).",
      "I recently presented a paper at the HICET International Conference 2026 on an AI-based intrusion detection system achieving 97%+ accuracy with sub-200ms latency. Alongside that, I'm sharpening offensive security fundamentals on TryHackMe and studying cloud security patterns.",
    ],
  },
  {
    id: "next",
    label: "What I Want Next",
    index: "05",
    title: "A team that ships real software — safely.",
    body: [
      "I'm looking for an internship or first engineering role in cybersecurity, DevSecOps, SOC operations or cloud security — somewhere reliability and craft are treated as first-class concerns.",
      "The goal is simple: keep learning from people who are better than me, and contribute to systems that real users depend on.",
    ],
  },
];

type TimelineItem = { year: string; label: string; notes: string[] };

const timeline: TimelineItem[] = [
  {
    year: "2023",
    label: "Started B.Tech Information Technology",
    notes: ["Foundations in DSA, systems, networks", "Meenakshi Sundararajan Engineering College"],
  },
  {
    year: "2024",
    label: "Built full-stack applications",
    notes: [
      "Learned backend systems (Node.js, Flask, FastAPI)",
      "Maintained active projects on GitHub",
      "Explored AI fundamentals and LangChain",
      "2nd place — E-Cube Blockchain Paper Presentation",
    ],
  },
  {
    year: "2025",
    label: "Cybersecurity Internship & Research",
    notes: [
      "Cybersecurity Research Intern — HTC Global Services",
      "Analyzed 30+ IEEE risk-assessment research papers",
      "Finalist — VIT Hack-A-Cure (AI medical chatbot)",
      "Top 5 / 25 teams — HackIntym, MSEC",
    ],
  },
  {
    year: "2026",
    label: "Present — Security-focused engineering",
    notes: [
      "Cloud Security & Palo Alto certifications",
      "Building NetProbe-Secure and FedShield",
      "Paper presented at HICET International Conference",
      "Pursuing Fortinet NSE 1 and DevSecOps depth",
    ],
  },
];

function AboutPage() {
  const [activeId, setActiveId] = useState(chapters[0].id);
  const activeIndex = chapters.findIndex((c) => c.id === activeId);
  const active = chapters[activeIndex];

  const goPrev = () => setActiveId(chapters[Math.max(0, activeIndex - 1)].id);
  const goNext = () => setActiveId(chapters[Math.min(chapters.length - 1, activeIndex + 1)].id);

  return (
    <Page>
      <div className="glow-strong">
        <PageHeader
          eyebrow="./about"
          title="The Engineering Journey"
          description="A story of curiosity, security, and the pursuit of building software that lasts."
        />
      </div>

      {/* Chapters */}
      <section className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        <nav aria-label="Journey chapters" className="md:sticky md:top-24 md:self-start">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
            chapters
          </div>
          <ol className="relative">
            <span aria-hidden className="absolute left-[7px] top-1 bottom-1 w-px bg-border" />
            {chapters.map((c) => {
              const isActive = c.id === activeId;
              return (
                <li key={c.id} className="relative">
                  <button
                    type="button"
                    onClick={() => setActiveId(c.id)}
                    className={`group flex items-center gap-3 w-full text-left py-2.5 pl-6 pr-2 rounded-md transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`absolute left-[3px] top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full ring-4 ring-background transition-colors ${
                        isActive ? "bg-primary" : "bg-border-strong group-hover:bg-muted-foreground/60"
                      }`}
                    />
                    <span className="font-mono text-[10px] text-muted-foreground/80 w-5">
                      {c.index}
                    </span>
                    <span className="text-[13.5px]">{c.label}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>

        <div>
          <Panel className="!p-6 sm:!p-8 min-h-[340px]">
            <div key={active.id} className="fade-in-up">
              <div className="flex items-center justify-between">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  chapter {active.index}
                </div>
                <div className="font-mono text-[10px] text-muted-foreground">
                  {activeIndex + 1} / {chapters.length}
                </div>
              </div>
              <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-foreground">
                {active.title}
              </h2>
              <div className="mt-5 space-y-4">
                {active.body.map((p, i) => (
                  <p key={i} className="text-[15px] leading-relaxed text-foreground/85">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-border pt-4">
              <button
                type="button"
                onClick={goPrev}
                disabled={activeIndex === 0}
                className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
              >
                ← Previous
              </button>
              <div className="flex gap-1.5" aria-hidden>
                {chapters.map((c, i) => (
                  <span
                    key={c.id}
                    className={`h-1 rounded-full transition-all ${
                      i === activeIndex ? "w-6 bg-primary" : "w-1.5 bg-border-strong"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={goNext}
                disabled={activeIndex === chapters.length - 1}
                className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
              >
                Next →
              </button>
            </div>
          </Panel>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="mt-16">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
              journey timeline
            </div>
            <h2 className="mt-1 text-2xl font-semibold text-foreground">2023 → Present</h2>
          </div>
          <div className="font-mono text-[11px] text-muted-foreground hidden sm:block">
            {timeline.length} milestones
          </div>
        </div>

        <ol className="relative pl-8">
          <span aria-hidden className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />
          {timeline.map((t, i) => (
            <li key={i} className="relative pb-6 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[calc(2rem-4px)] top-5 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-background shadow-[0_0_20px_oklch(0.83_0.12_200_/_0.6)]"
              />
              <div className="panel panel-hover p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1 font-mono text-[12px] text-primary font-medium">
                    {t.year}
                  </span>
                  <span className="text-[15px] text-foreground font-medium">
                    {t.label}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-[13.5px] text-foreground/80">
                  {t.notes.map((n, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-primary mt-1.5">▸</span>
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </Page>
  );
}
