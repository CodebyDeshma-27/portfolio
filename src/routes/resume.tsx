import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHeader, Panel } from "@/components/ui-kit";
import { experience } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { achievements } from "@/data/achievements";
import { socials, profile } from "@/data/socials";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Deshma Udayakumar" },
      { name: "description", content: "Resume summary — education, experience, skills and achievements." },
      { property: "og:title", content: "Resume — Deshma Udayakumar" },
      { property: "og:description", content: "Resume summary." },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <Page>
      <PageHeader
        eyebrow="./resume"
        title="Resume"
        description="A summary of my education, experience, skills and achievements."
      />

      <div className="mb-8 flex flex-wrap gap-2 font-mono text-xs">
        <a
          href={socials.resumeUrl}
          download
          className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Download resume
        </a>
        <a
          href={socials.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-border bg-surface px-4 py-2 text-foreground hover:bg-surface-2 transition-colors"
        >
          Preview resume ↗
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Panel>
          <SectionTitle>Education</SectionTitle>
          <div className="mt-3 text-[15px] text-foreground">
            B.Tech, Computer Science and Engineering
          </div>
          <div className="mt-1 font-mono text-xs text-muted-foreground">
            Expected 2026 · {profile.location}
          </div>
        </Panel>

        <Panel>
          <SectionTitle>Contact</SectionTitle>
          <ul className="mt-3 space-y-1.5 font-mono text-xs text-muted-foreground">
            <li>
              <span className="text-foreground/70">email </span>
              <a className="text-foreground hover:text-primary" href={`mailto:${socials.email}`}>
                {socials.email}
              </a>
            </li>
            <li>
              <span className="text-foreground/70">github </span>
              <a className="text-foreground hover:text-primary" href={socials.github} target="_blank" rel="noreferrer">
                {socials.github.replace("https://", "")}
              </a>
            </li>
            <li>
              <span className="text-foreground/70">linkedin </span>
              <a className="text-foreground hover:text-primary" href={socials.linkedin} target="_blank" rel="noreferrer">
                {socials.linkedin.replace("https://", "")}
              </a>
            </li>
          </ul>
        </Panel>

        <Panel className="md:col-span-2">
          <SectionTitle>Experience</SectionTitle>
          <div className="mt-4 space-y-4">
            {experience.map((e, i) => (
              <div key={i} className="border-t border-border pt-4 first:border-0 first:pt-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <div className="text-sm font-semibold text-foreground">{e.role}</div>
                    <div className="font-mono text-xs text-muted-foreground">
                      {e.company}
                      {e.location ? ` · ${e.location}` : ""}
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {e.duration}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{e.description}</p>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="md:col-span-2">
          <SectionTitle>Skills</SectionTitle>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skillCategories.map((c) => (
              <div key={c.name}>
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  {c.name}
                </div>
                <div className="mt-1 text-sm text-foreground/90">
                  {c.items.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="md:col-span-2">
          <SectionTitle>Achievements</SectionTitle>
          <ul className="mt-3 space-y-2 text-sm">
            {achievements.map((a, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-mono text-xs text-muted-foreground w-14 shrink-0">
                  {a.year}
                </span>
                <span className="text-foreground">{a.title}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </Page>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
      {children}
    </div>
  );
}
