import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHeader } from "@/components/ui-kit";
import { experience } from "@/data/experience";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Deshma Udayakumar" },
      { name: "description", content: "Professional experience and internships." },
      { property: "og:title", content: "Experience — Deshma Udayakumar" },
      { property: "og:description", content: "Professional experience and internships." },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <Page>
      <div className="glow-strong">
        <PageHeader
          eyebrow="./experience"
          title="Experience"
          description="Roles and internships — presented as case studies rather than bullet-point resumes."
        />
      </div>

      <div className="space-y-16">
        {experience.map((e, i) => (
          <article key={i} className="fade-in-up">
            {/* Two-column head */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-8 lg:gap-12">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">
                  {String(i + 1).padStart(2, "0")} · Internship
                </div>
                <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight leading-tight">
                  {e.company}
                </h2>
                <div className="mt-4 text-[15px] text-foreground/90 font-medium">
                  {e.role}
                </div>
                {e.location && (
                  <div className="mt-1.5 font-mono text-[12px] text-muted-foreground">
                    {e.location}
                  </div>
                )}
                <div className="mt-3 inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-primary">
                  {e.duration}
                </div>
              </div>

              <div>
                <p className="text-[15.5px] leading-relaxed text-foreground/85">
                  {e.description}
                </p>
              </div>
            </div>

            {/* Numbered highlights */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {e.highlights.map((h, j) => (
                <div
                  key={j}
                  className="panel panel-hover p-5 sm:p-6 hover:border-primary/40"
                >
                  <div className="font-mono text-lg text-primary/80 font-semibold">
                    {String(j + 1).padStart(2, "0")}
                  </div>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-foreground/90">
                    {h}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech tags */}
            {e.tech.length > 0 && (
              <div className="mt-10 pt-6 border-t border-border">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                  stack & focus
                </div>
                <div className="flex flex-wrap gap-2">
                  {e.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-[12px] text-foreground/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </Page>
  );
}
