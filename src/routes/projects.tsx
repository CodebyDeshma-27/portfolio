import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHeader } from "@/components/ui-kit";
import { projects } from "@/data/projects";
import { socials } from "@/data/socials";

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

const upcoming: { name: string; blurb: string; status: string; tags: string[] }[] = [
  {
    name: "NetProbe-Secure",
    blurb: "Automated Attack Surface Management using Python, Nmap and SQLite with scheduled scanning and baseline diffing.",
    status: "Currently Building",
    tags: ["Cybersecurity", "Python", "Nmap"],
  },
  {
    name: "FedShield",
    blurb: "Privacy-preserving federated fraud detection with Flower + Differential Privacy. ~99.8% accuracy in a distributed setup.",
    status: "Currently Building",
    tags: ["ML", "Federated Learning", "Privacy"],
  },
  {
    name: "Containerized Chat App",
    blurb: "Real-time chat with Docker Compose, separate frontend/backend services and Kubernetes deployment basics.",
    status: "Repository will be added",
    tags: ["Docker", "Kubernetes", "REST"],
  },
  {
    name: "Featured project slot",
    blurb: "Reserved for the next production project — case study, live demo, and open-source repository.",
    status: "Coming Soon",
    tags: ["TBA"],
  },
];

function ProjectsPage() {
  const showPlaceholders = projects.length === 0;

  return (
    <Page>
      <div className="glow-strong">
        <PageHeader
          eyebrow="./projects"
          title="Projects"
          description="A curated list of what I'm building. Case studies, code and live demos will be added as each ships."
        />
      </div>

      {showPlaceholders ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcoming.map((p, i) => (
            <article
              key={i}
              style={{ animationDelay: `${i * 60}ms` }}
              className="panel panel-hover p-6 fade-in-up hover:border-primary/40 flex flex-col"
            >
              <div className="flex items-center justify-between gap-3">
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
                <span className="rounded-md border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[10.5px] text-primary shrink-0">
                  {p.status}
                </span>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-foreground">{p.name}</h2>
              <p className="mt-2 text-[14px] leading-relaxed text-foreground/80 flex-1">
                {p.blurb}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 font-mono text-[11.5px] text-muted-foreground">
                <span className="rounded-md border border-border px-3 py-1.5">Repository — soon</span>
                <span className="rounded-md border border-border px-3 py-1.5">Case study — soon</span>
              </div>
            </article>
          ))}

          <article className="panel dot-grid p-6 flex flex-col items-center justify-center text-center md:col-span-2 min-h-[160px]">
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
              open slot
            </div>
            <p className="mt-2 max-w-md text-[13.5px] text-muted-foreground">
              More featured projects will land here. Follow along on{" "}
              <a href={socials.github} target="_blank" rel="noreferrer" className="text-foreground hover:text-primary">
                GitHub ↗
              </a>
              .
            </p>
          </article>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <article key={p.slug} className="panel panel-hover overflow-hidden flex flex-col">
              <div className="aspect-[16/9] bg-surface-2 border-b border-border overflow-hidden">
                {p.image ? (
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full dot-grid" />
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="mt-3 text-base font-semibold text-foreground">{p.title}</h2>
                <p className="mt-2 text-[13.5px] text-foreground/80">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[11px] text-foreground/90">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="rounded-md border border-border bg-surface-2 px-3 py-1.5 text-foreground hover:bg-surface">GitHub ↗</a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="rounded-md border border-border bg-surface-2 px-3 py-1.5 text-foreground hover:bg-surface">Live ↗</a>
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
