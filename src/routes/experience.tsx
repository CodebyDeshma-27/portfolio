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
      <PageHeader
        eyebrow="./experience"
        title="Experience"
        description="Roles and internships in reverse chronological order."
      />
      <ol className="relative border-l border-border pl-6 space-y-8">
        {experience.map((e, i) => (
          <li key={i} className="relative">
            <span
              aria-hidden
              className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background"
            />
            <div className="panel p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">
                    {e.role}
                  </h2>
                  <div className="mt-0.5 font-mono text-xs text-muted-foreground">
                    {e.company}
                    {e.location ? ` · ${e.location}` : ""}
                  </div>
                </div>
                <span className="rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                  {e.duration}
                </span>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground">
                {e.description}
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {e.responsibilities.map((r, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              {e.certificate ? (
                <div className="mt-5">
                  <a
                    href={e.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-foreground hover:bg-surface transition-colors"
                  >
                    View certificate ↗
                  </a>
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </Page>
  );
}
