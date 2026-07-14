import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Page, PageHeader, Panel } from "@/components/ui-kit";
import { certificateCategories, certificates } from "@/data/certificates";
import type { Certificate, CertificateCategory } from "@/data/certificates";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Deshma Udayakumar" },
      { name: "description", content: "Filterable gallery of certifications — security, cloud, database, GenAI and more." },
      { property: "og:title", content: "Certifications — Deshma Udayakumar" },
      { property: "og:description", content: "Certifications gallery." },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: CertificationsPage,
});

type Filter = "All" | CertificateCategory;

function CertificationsPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<Certificate | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? certificates
        : certificates.filter((c) => c.category === filter),
    [filter],
  );

  const counts = useMemo(() => {
    const m: Record<string, number> = { All: certificates.length };
    for (const c of certificates) m[c.category] = (m[c.category] ?? 0) + 1;
    return m;
  }, []);

  return (
    <Page>
      <div className="glow-strong">
        <PageHeader
          eyebrow="./certifications"
          title="Certifications"
          description="Filter by category. Click any card to preview or download the full certificate."
        />
      </div>

      <div className="mb-8 flex flex-wrap gap-2 font-mono text-xs">
        {(["All", ...certificateCategories] as Filter[]).map((c) => {
          const activeFilter = filter === c;
          return (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-md border px-3 py-1.5 transition-colors ${
                activeFilter
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-surface text-muted-foreground hover:text-foreground hover:bg-surface-2"
              }`}
            >
              {c}
              <span className="ml-1.5 text-[10px] text-muted-foreground">
                {counts[c] ?? 0}
              </span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <Panel className="dot-grid min-h-[220px] flex items-center justify-center text-center">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              empty
            </div>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              No certificates in this category yet.
            </p>
          </div>
        </Panel>
      ) : (
        <div key={filter} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(c)}
              style={{ animationDelay: `${i * 30}ms` }}
              className="panel panel-hover text-left overflow-hidden fade-in-up hover:border-primary/40"
            >
              <div className="aspect-[4/3] bg-white border-b border-border overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  {c.category}
                </div>
                <h2 className="mt-2 text-sm font-semibold text-foreground line-clamp-2">
                  {c.title}
                </h2>
                <div className="mt-1 font-mono text-[11px] text-muted-foreground">
                  {c.issuer} · {c.date}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="panel max-w-3xl w-full overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-border p-4 gap-3">
              <div className="min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  {active.category}
                </div>
                <div className="mt-1 text-sm font-semibold text-foreground truncate">
                  {active.title}
                </div>
                <div className="font-mono text-[11px] text-muted-foreground">
                  {active.issuer} · {active.date}
                </div>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs shrink-0">
                <a
                  href={active.image}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-border bg-surface px-3 py-1.5 text-foreground hover:bg-surface-2"
                >
                  View ↗
                </a>
                <a
                  href={active.image}
                  download
                  className="rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-primary hover:bg-primary/15"
                >
                  Download ↓
                </a>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="rounded-md border border-border bg-surface-2 px-3 py-1.5 text-muted-foreground hover:text-foreground"
                >
                  close
                </button>
              </div>
            </div>
            <div className="p-4 bg-white">
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </Page>
  );
}
