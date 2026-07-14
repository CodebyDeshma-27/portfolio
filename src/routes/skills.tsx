import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Cloud,
  Code2,
  Fingerprint,
  GitBranch,
  Network,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import { Page, PageHeader, Panel } from "@/components/ui-kit";
import { skillCategories, type Skill } from "@/data/skills";

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
  Fingerprint,
  ScanLine,
};

const stackChips = [
  { label: "Backend Development", icon: Code2 },
  { label: "Cybersecurity", icon: ShieldCheck },
  { label: "Cloud & DevOps", icon: Cloud },
  { label: "Continuous Learning", icon: BookOpen },
];

function SkillIcon({ skill, className }: { skill: Skill; className?: string }) {
  const [imgFailed, setImgFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const LucideIcon = skill.icon ? lucideIconMap[skill.icon] : undefined;

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setImgFailed(true);
    }
  }, []);

  if (LucideIcon) {
    return <LucideIcon className={className} />;
  }

  if (imgFailed || !skill.slug) {
    return (
      <div
        className={`flex items-center justify-center rounded-md bg-surface-2 font-mono text-[10px] text-foreground ${className}`}
      >
        {skill.name.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={`https://cdn.simpleicons.org/${skill.slug}`}
      alt={skill.name}
      loading="lazy"
      className={className}
      onError={() => setImgFailed(true)}
    />
  );
}

function SkillsPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="./skills"
        title="Skills"
        description="Tools and technologies I use to build, secure, and ship software."
      />

      {/* Engineering Stack */}
      <section className="mb-8 fade-in-up">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
          engineering stack
        </div>
        <div className="flex flex-wrap gap-2">
          {stackChips.map((chip) => {
            const Icon = chip.icon;
            return (
              <div
                key={chip.label}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground hover:border-primary/50 transition-colors"
              >
                <Icon className="h-4 w-4 text-primary" />
                <span>{chip.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((cat, i) => (
          <Panel
            key={cat.name}
            className="!p-5 fade-in-up"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-[10px] text-primary">&gt;_</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {cat.name}
              </span>
              <span className="ml-auto font-mono text-[10px] text-muted-foreground/60">
                {String(cat.items.length).padStart(2, "0")}
              </span>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {cat.items.map((s) => (
                <div
                  key={s.name}
                  className="group relative flex flex-col items-center gap-2 rounded-md border border-transparent p-2 hover:border-primary hover:bg-surface-2 transition-all"
                >
                  <SkillIcon
                    skill={s}
                    className="h-9 w-9 text-foreground/80 transition-transform group-hover:scale-110 group-hover:text-foreground"
                  />
                  <span className="font-mono text-[10px] text-muted-foreground group-hover:text-foreground text-center leading-tight">
                    {s.name}
                  </span>

                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap rounded-md border border-border bg-surface-2 px-2 py-1 font-mono text-[10px] text-foreground shadow-sm">
                    {s.name}
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        ))}
      </div>
    </Page>
  );
}
