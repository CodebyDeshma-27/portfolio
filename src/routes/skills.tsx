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
        description="Grouped by area — tools I use regularly and platforms I actively learn on."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((cat) => (
          <Panel key={cat.name}>
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
              {cat.name}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {cat.items.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[12px] text-foreground/90 hover:border-border-strong transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </Panel>
        ))}
      </div>
    </Page>
  );
}
