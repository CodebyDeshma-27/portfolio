import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Github, ExternalLink } from "lucide-react";
import { Page, PageHeader } from "@/components/ui-kit";
import { projects, projectFilters } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Deshma Udayakumar" },
      { name: "description", content: "Security, backend, machine learning and frontend projects with code and live demos." },
      { property: "og:title", content: "Projects — Deshma Udayakumar" },
      { property: "og:description", content: "Security, backend, ML and frontend projects with code and live demos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState<string>("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => (p.categories as string[]).includes(active));

  return (
    <Page>
      <div className="glow-strong">
        <PageHeader
          eyebrow="./projects"
          title="Projects"
          description="Things I've built across security, backend, machine learning and frontend."
        />
      </div>

      <section className="mb-8 fade-in-up">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
          filter
        </div>
        <div className="flex flex-wrap gap-2">
          {projectFilters.map((f) => {
            const isActive = f === active;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`rounded-md border px-3 py-1.5 font-mono text-[12px] transition-all duration-200 ${
                  isActive
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-surface text-muted-foreground hover:border-border-strong hover:text-foreground"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      </section>

      <div key={active} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visible.map((p, i) => (
          <article
            key={p.slug}
            style={{ animationDelay: `${i * 50}ms` }}
            className="panel panel-hover p-6 fade-in-up hover:border-primary/40 flex flex-col"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {p.categories.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
              {p.building ? (
                <span className="shrink-0 rounded-md border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[10.5px] text-primary">
                  Currently Building
                </span>
              ) : null}
            </div>

            <h2 className="mt-4 text-lg font-semibold text-foreground">{p.title}</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-foreground/85 flex-1">
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

            <div className="mt-5 flex flex-wrap gap-2 font-mono text-[12px]">
              {p.github ? (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-surface-2 px-3 py-1.5 text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Github className="h-3.5 w-3.5" />
                  View Repo
                </a>
              ) : null}
              {p.demo ? (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-surface-2 px-3 py-1.5 text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Site
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Page>
  );
}
