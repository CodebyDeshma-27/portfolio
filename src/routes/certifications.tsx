import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Page, PageHeader, Panel } from "@/components/ui-kit";
import { certificateCategories, certificates } from "@/data/certificates";
import type { Certificate, CertificateCategory } from "@/data/certificates";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Deshma Udayakumar" },
      { name: "description", content: "Filterable gallery of certifications across security, cloud and more." },
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

  return (
    <Page>
      <PageHeader
        eyebrow="./certifications"
        title="Certifications"
        description="Filter by category. Click any card to view the full certificate."
      />

      <div className="mb-6 flex flex-wrap gap-2 font-mono text-xs">
        {(["All", ...certificateCategories] as Filter[]).map((c) => {
          const activeFilter = filter === c;
          return (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-md border px-3 py-1.5 transition-colors ${
                activeFilter
                  ? "border-primary bg-primary/10 text-foreground"
                  : "border-border bg-surface text-muted-foreground hover:text-foreground hover:bg-surface-2"
              }`}
            >
              {c}
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
              No certificates in this category yet. Add entries to{" "}
              <code className="text-foreground">src/data/certificates.ts</code>{" "}
              to populate the gallery.
            </p>
          </div>
        </Panel>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c)}
              className="panel panel-hover text-left overflow-hidden"
            >
              <div className="aspect-[4/3] bg-surface-2 border-b border-border overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
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
            <div className="flex items-center justify-between border-b border-border p-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  {active.category}
                </div>
                <div className="mt-1 text-sm font-semibold text-foreground">
                  {active.title}
                </div>
                <div className="font-mono text-[11px] text-muted-foreground">
                  {active.issuer} · {active.date}
                </div>
              </div>
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="rounded-md border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-muted-foreground hover:text-foreground"
              >
                close
              </button>
            </div>
            <div className="p-4 bg-surface-2">
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-auto rounded-md border border-border"
              />
            </div>
          </div>
        </div>
      )}
    </Page>
  );
}
