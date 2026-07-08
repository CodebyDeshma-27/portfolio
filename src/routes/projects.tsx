import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHeader } from "@/components/ui-kit";
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

const PLACEHOLDER_SLOTS = 4;

function ProjectsPage() {
  const showPlaceholders = projects.length === 0;

  return (
    <Page>
      <PageHeader
        eyebrow="./projects"
        title="Projects"
        description="Selected work. Each card links to code, a live demo where available, and a longer case study."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {showPlaceholders
          ? Array.from({ length: PLACEHOLDER_SLOTS }).map((_, i) => (
              <PlaceholderCard key={i} index={i + 1} />
            ))
          : projects.map((p) => (
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
                  <h2 className="mt-3 text-base font-semibold text-foreground">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-[13.5px] text-muted-foreground">
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
                      <a href={p.github} target="_blank" rel="noreferrer" className="rounded-md border border-border bg-surface-2 px-3 py-1.5 text-foreground hover:bg-surface transition-colors">GitHub ↗</a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="rounded-md border border-border bg-surface-2 px-3 py-1.5 text-foreground hover:bg-surface transition-colors">Live ↗</a>
                    )}
                    {p.caseStudy && (
                      <a href={p.caseStudy} className="rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-primary hover:bg-primary/15 transition-colors">Case study →</a>
                    )}
                  </div>
                </div>
              </article>
            ))}
      </div>
    </Page>
  );
}

function PlaceholderCard({ index }: { index: number }) {
  return (
    <article className="panel overflow-hidden flex flex-col opacity-90">
      <div className="aspect-[16/9] border-b border-border dot-grid flex items-center justify-center">
        <div className="text-center">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
            slot #{String(index).padStart(2, "0")}
          </div>
          <div className="mt-2 font-mono text-[11px] text-primary">
            production project · coming soon
          </div>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-1.5">
          <SkeletonTag />
          <SkeletonTag w="w-14" />
        </div>
        <div className="mt-3 h-4 w-2/3 rounded bg-surface-2" />
        <div className="mt-3 space-y-2">
          <div className="h-2.5 w-full rounded bg-surface-2" />
          <div className="h-2.5 w-11/12 rounded bg-surface-2" />
          <div className="h-2.5 w-8/12 rounded bg-surface-2" />
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          <SkeletonTag w="w-16" />
          <SkeletonTag w="w-12" />
          <SkeletonTag w="w-14" />
          <SkeletonTag w="w-10" />
        </div>
        <div className="mt-5 flex flex-wrap gap-2 font-mono text-[11px] text-muted-foreground/60">
          <span className="rounded-md border border-border px-3 py-1.5">GitHub</span>
          <span className="rounded-md border border-border px-3 py-1.5">Live Demo</span>
          <span className="rounded-md border border-border px-3 py-1.5">Case Study</span>
        </div>
      </div>
    </article>
  );
}

function SkeletonTag({ w = "w-10" }: { w?: string }) {
  return <div className={`h-4 ${w} rounded bg-surface-2`} />;
}
