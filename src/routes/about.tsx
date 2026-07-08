import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHeader, Panel } from "@/components/ui-kit";
import { profile } from "@/data/socials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Deshma Udayakumar" },
      { name: "description", content: "About Deshma Udayakumar — background, education, and current focus." },
      { property: "og:title", content: "About — Deshma Udayakumar" },
      { property: "og:description", content: "Background, education, and current focus." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const cards = [
  {
    label: "Introduction",
    body: profile.intro,
  },
  {
    label: "Current Focus",
    body:
      "Shipping full stack features end-to-end and applying security thinking from design through deployment.",
  },
  {
    label: "Currently Learning",
    body:
      "Container orchestration on AWS, offensive security fundamentals on TryHackMe / HackTheBox, and system design patterns.",
  },
  {
    label: "Technical Interests",
    body:
      "API design, application security, developer tooling, and observability in production systems.",
  },
  {
    label: "Career Goals",
    body:
      "Join an engineering team that ships real software and treats reliability and security as first-class concerns.",
  },
  {
    label: "Education",
    body:
      "B.Tech in Computer Science and Engineering — coursework in DSA, operating systems, networks, databases and information security.",
  },
];

const timeline = [
  { year: "2023", label: "Started B.Tech" },
  { year: "2024", label: "Participated in Hackathons" },
  { year: "2025", label: "Cybersecurity Internship" },
  { year: "2026", label: "Security Research & Full Stack Projects" },
  { year: "Present", label: "Building production-ready software" },
];

function AboutPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="./about"
        title="About"
        description="A structured overview — who I am, what I'm learning, and where I'm headed."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {cards.map((c) => (
          <Panel key={c.label} className="!p-5">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {c.label}
            </div>
            <p className="mt-3 text-[14px] leading-relaxed text-foreground">
              {c.body}
            </p>
          </Panel>
        ))}
      </div>

      {/* Timeline */}
      <section className="mt-8">
        <Panel className="!p-6">
          <div className="flex items-center justify-between">
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
              timeline
            </div>
            <div className="font-mono text-[10px] text-muted-foreground/60">
              2023 → present
            </div>
          </div>
          <ol className="mt-6 relative border-l border-border ml-2">
            {timeline.map((t, i) => (
              <li key={i} className="relative pl-6 pb-6 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-primary/80 ring-4 ring-background"
                />
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-mono text-[11px] text-primary w-20 shrink-0">
                    {t.year}
                  </span>
                  <span className="text-[14px] text-foreground">
                    {t.label}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </Panel>
      </section>
    </Page>
  );
}
