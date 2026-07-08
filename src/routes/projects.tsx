import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHeader, Panel } from "@/components/ui-kit";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Deshma Udayakumar" },
      { name: "description", content: "Selected engineering projects — code, live demos and case studies." },
      { property: "og:title", content: "Projects — Deshma Udayakumar" },
      { property: "og:description", content: "Selected engineering projects." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="./projects"
        title="Projects"
        description="Selected work. Each card links to code, a live demo where available, and a longer case study."
      />

      {projects.length === 0 ? (
        <Panel className="dot-grid min-h-[280px] flex items-center justify-center text-center">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              status
            </div>
            <p className="mt-3 max-w-md text-[15px] text-foreground">
              Production-ready projects are currently under development.
            </p>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Real work will appear here as it ships — with code, screenshots and a short case study.
            </p>
          </div>
        </Panel>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <article key={p.slug} className="panel panel-hover overflow-hidden flex flex-col">
              <div className="aspect-[16/9] bg-surface-2 border-b border-border overflow-hidden">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full dot-grid" />
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-muted-foreground uppercase tracking-widest"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="mt-3 text-lg font-semibold text-foreground">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[11px] text-foreground/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md border border-border bg-surface-2 px-3 py-1.5 text-foreground hover:bg-surface transition-colors"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md border border-border bg-surface-2 px-3 py-1.5 text-foreground hover:bg-surface transition-colors"
                    >
                      Live ↗
                    </a>
                  )}
                  {p.caseStudy && (
                    <a
                      href={p.caseStudy}
                      className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground hover:opacity-90 transition-opacity"
                    >
                      Case study →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </Page>
  );
}
