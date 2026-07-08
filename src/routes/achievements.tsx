import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHeader } from "@/components/ui-kit";
import { achievements } from "@/data/achievements";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Deshma Udayakumar" },
      { name: "description", content: "Hackathons, paper presentations, awards, research and competitions." },
      { property: "og:title", content: "Achievements — Deshma Udayakumar" },
      { property: "og:description", content: "Selected achievements." },
      { property: "og:url", content: "/achievements" },
    ],
    links: [{ rel: "canonical", href: "/achievements" }],
  }),
  component: AchievementsPage,
});

function AchievementsPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="./achievements"
        title="Achievements"
        description="Selected hackathons, presentations and competitions."
      />
      <ol className="relative border-l border-border pl-6 space-y-6">
        {achievements.map((a, i) => (
          <li key={i} className="relative">
            <span
              aria-hidden
              className="absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full bg-success ring-4 ring-background"
            />
            <div className="panel p-5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  {a.type}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {a.year}
                </span>
              </div>
              <h2 className="mt-2 text-base font-semibold text-foreground">
                {a.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {a.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Page>
  );
}
