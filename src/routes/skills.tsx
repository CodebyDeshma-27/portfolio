import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { GitBranch, Network, ScanLine, ShieldCheck } from "lucide-react";
import { Page, PageHeader, Panel } from "@/components/ui-kit";
import { skillCategories, skillFilters, type Skill } from "@/data/skills";

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

const lucideIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Network,
  ShieldCheck,
  GitBranch,
  ScanLine,
};

const darkLogos = new Set([
  "github", "githubactions", "githubcopilot", "vercel", "openai", "anthropic",
  "cursor", "express", "flask", "visualstudiocode", "intellijidea", "pycharm",
  "render", "ollama", "perplexity", "langchain",
]);

function SkillIcon({ skill }: { skill: Skill }) {
  const [imgFailed, setImgFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const LucideIcon = skill.icon ? lucideIconMap[skill.icon] : undefined;

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setImgFailed(true);
  }, []);

  if (LucideIcon) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-2 border border-border transition-transform duration-200 group-hover:scale-110">
        <LucideIcon className="h-6 w-6 text-primary" />
      </div>
    );
  }

  if (imgFailed || !skill.slug) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-2 border border-border font-mono text-[11px] text-foreground transition-transform duration-200 group-hover:scale-110">
        {skill.name.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  const needsLightBg = darkLogos.has(skill.slug);
  const containerClass = needsLightBg
    ? "flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2 transition-transform duration-200 group-hover:scale-110"
    : "flex h-12 w-12 items-center justify-center transition-transform duration-200 group-hover:scale-110";

  return (
    <div className={containerClass}>
      <img
        ref={imgRef}
        src={`https://cdn.simpleicons.org/${skill.slug}`}
        alt={skill.name}
        loading="lazy"
        className="h-full w-full object-contain"
        onError={() => setImgFailed(true)}
      />
    </div>
  );
}

function SkillsPage() {
  const [active, setActive] = useState<string>("All");

  const visible =
    active === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.name === active);

  return (
    <Page>
      <div className="glow-strong">
        <PageHeader
          eyebrow="./skills"
          title="Skills"
          description="Tools and technologies I use to build, secure, and ship software."
        />
      </div>

      <section className="mb-8 fade-in-up">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
          filter
        </div>
        <div className="flex flex-wrap gap-2">
          {skillFilters.map((f) => {
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
        {visible.map((cat, i) => (
          <Panel
            key={cat.name}
            className="!p-6 fade-in-up hover:border-primary/50 transition-all duration-200"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div className="flex items-center gap-2 mb-5 pb-3 border-b border-border">
              <span className="font-mono text-[11px] text-primary">&gt;_</span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-foreground">
                {cat.name}
              </span>
              <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                {String(cat.items.length).padStart(2, "0")}
              </span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-3 gap-y-5">
              {cat.items.map((s) => (
                <div
                  key={s.name}
                  className="group relative flex flex-col items-center gap-3 rounded-lg p-2"
                >
                  <SkillIcon skill={s} />
                  <span className="text-[12px] text-foreground/90 text-center leading-tight font-mono">
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
