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
    title: "An engineer who enjoys building software.",
    body: [
      "I'm Deshma Udayakumar — a Computer Science undergraduate who spends most of his time either shipping side projects or breaking things to understand how they work.",
      "I care about clean systems, thoughtful design, and code that holds up in production. I'd rather write one reliable service than five throwaway prototypes.",
    ],
  },
  {
    id: "started",
    label: "How I Started",
    index: "02",
    title: "From curiosity to code.",
    body: [
      "It started with small experiments — a landing page here, a Python script there — followed by the usual rabbit hole of tutorials, docs, and late-night debugging.",
      "Hackathons pushed me from writing code to shipping products: tight deadlines, real users, and the discipline of finishing what you start.",
    ],
  },
  {
    id: "security",
    label: "Why Security",
    index: "03",
    title: "Because reliability isn't optional.",
    body: [
      "The more I built, the more I noticed how much of software engineering is really about failure modes — network edges, trust boundaries, and the assumptions we forget to write down.",
      "Security became the lens I use to think about systems: what happens when inputs are hostile, when services misbehave, when the environment isn't friendly.",
    ],
  },
  {
    id: "today",
    label: "What I'm Building Today",
    index: "04",
    title: "Full stack features with a systems mindset.",
    body: [
      "Right now I'm building end-to-end web applications — well-typed backends, considered APIs, and interfaces that don't get in the way.",
      "Alongside that, I'm sharpening offensive security fundamentals on TryHackMe and HackTheBox, and studying cloud and DevOps patterns that make deployments boring in the best way.",
    ],
  },
  {
    id: "next",
    label: "What I Want Next",
    index: "05",
    title: "A team that ships real software.",
    body: [
      "I'm looking for an internship or first engineering role where reliability, security, and craft are treated as first-class concerns — not afterthoughts.",
      "The goal is simple: keep learning from people who are better than me, and contribute to systems that real users depend on.",
    ],
  },
];

const timeline = [
  { year: "2023", label: "Started B.Tech in Computer Science", note: "Foundations — DSA, systems, networks." },
  { year: "2024", label: "Hackathons & first shipped projects", note: "Learned to finish, not just start." },
  { year: "2025", label: "Cybersecurity internship", note: "Applied security thinking to real systems." },
  { year: "2026", label: "Security research & full stack projects", note: "Deeper into offensive security and cloud." },
  { year: "Present", label: "Building production-ready software", note: "Shipping, learning, iterating." },
];

function AboutPage() {
  const [activeId, setActiveId] = useState(chapters[0].id);
  const activeIndex = chapters.findIndex((c) => c.id === activeId);
  const active = chapters[activeIndex];

  const goPrev = () => setActiveId(chapters[Math.max(0, activeIndex - 1)].id);
  const goNext = () => setActiveId(chapters[Math.min(chapters.length - 1, activeIndex + 1)].id);

  return (
    <Page>
      <PageHeader
        eyebrow="./about"
        title="About"
        description="An engineering journey — read it chapter by chapter."
      />

      {/* Engineering Journey */}
      <section className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6">
        {/* Chapter rail */}
        <nav aria-label="Journey chapters" className="md:sticky md:top-24 md:self-start">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
            chapters
          </div>
          <ol className="relative">
            <span
              aria-hidden
              className="absolute left-[7px] top-1 bottom-1 w-px bg-border"
            />
            {chapters.map((c) => {
              const isActive = c.id === activeId;
              return (
                <li key={c.id} className="relative">
                  <button
                    type="button"
                    onClick={() => setActiveId(c.id)}
                    className={`group flex items-center gap-3 w-full text-left py-2 pl-6 pr-2 rounded-md transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`absolute left-[3px] top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full ring-4 ring-background transition-colors ${
                        isActive ? "bg-primary" : "bg-border-strong group-hover:bg-muted-foreground/60"
                      }`}
                    />
                    <span className="font-mono text-[10px] text-muted-foreground/70 w-5">
                      {c.index}
                    </span>
                    <span className="text-[13.5px]">{c.label}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Chapter content */}
        <div>
          <Panel className="!p-6 sm:!p-8 min-h-[320px]">
            <div key={active.id} className="fade-in-up">
              <div className="flex items-center justify-between">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  chapter {active.index}
                </div>
                <div className="font-mono text-[10px] text-muted-foreground/60">
                  {activeIndex + 1} / {chapters.length}
                </div>
              </div>
              <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-foreground">
                {active.title}
              </h2>
              <div className="mt-5 space-y-4">
                {active.body.map((p, i) => (
                  <p key={i} className="text-[14.5px] leading-relaxed text-muted-foreground">
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
                className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:hover:text-muted-foreground transition-colors"
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
                className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:hover:text-muted-foreground transition-colors"
              >
                Next →
              </button>
            </div>
          </Panel>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="mt-14">
        <div className="flex items-baseline justify-between mb-5">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
              journey timeline
            </div>
            <h2 className="mt-1 text-lg font-semibold text-foreground">2023 → Present</h2>
          </div>
          <div className="font-mono text-[10px] text-muted-foreground/60 hidden sm:block">
            {timeline.length} milestones
          </div>
        </div>

        <ol className="relative pl-6">
          <span
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-border"
          />
          {timeline.map((t, i) => (
            <li key={i} className="relative pb-4 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[calc(1.5rem-3px)] top-4 h-2.5 w-2.5 rounded-full bg-primary/80 ring-4 ring-background"
              />
              <div className="panel panel-hover p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-primary">
                    {t.year}
                  </span>
                  <span className="text-[14px] text-foreground font-medium">
                    {t.label}
                  </span>
                </div>
                <p className="mt-2 text-[13px] text-muted-foreground">{t.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </Page>
  );
}
