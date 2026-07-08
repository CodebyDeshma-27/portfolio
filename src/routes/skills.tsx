import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHeader, Panel } from "@/components/ui-kit";
import { skillCategories } from "@/data/skills";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Deshma Udayakumar" },
      { name: "description", content: "Technologies and tools I work with, grouped by category." },
      { property: "og:title", content: "Skills — Deshma Udayakumar" },
      { property: "og:description", content: "Technologies and tools I work with." },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="./skills"
        title="Skills"
        description="Grouped by domain. Icons via Simple Icons."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {skillCategories.map((cat) => (
          <Panel key={cat.name} className="!p-5">
            <div className="flex items-center justify-between">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {cat.name}
              </div>
              <div className="font-mono text-[10px] text-muted-foreground/60">
                {String(cat.items.length).padStart(2, "0")}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-2">
              {cat.items.map((s) => (
                <div
                  key={s.name}
                  className="group flex flex-col items-center gap-2 rounded-md border border-transparent p-2 hover:border-border hover:bg-surface-2 transition-colors"
                  title={s.name}
                >
                  <img
                    src={`https://cdn.simpleicons.org/${s.slug}/ffffff`}
                    alt={s.name}
                    loading="lazy"
                    className="h-6 w-6 opacity-70 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.visibility =
                        "hidden";
                    }}
                  />
                  <span className="text-[10.5px] text-muted-foreground group-hover:text-foreground text-center leading-tight">
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </Panel>
        ))}
      </div>
    </Page>
  );
}
