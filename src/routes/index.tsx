import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, Panel, StatusDot } from "@/components/ui-kit";
import { profile, socials, stats } from "@/data/socials";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <Page>
      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-14 items-center pt-4 pb-14">
        <div className="fade-in-up">
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <StatusDot />
            <span>available for opportunities</span>
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
            {profile.name}
          </h1>

          <div className="mt-4 font-mono text-sm text-primary">
            {profile.titles.join("  ·  ")}
          </div>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs">
            <a
              href={socials.resumeUrl}
              className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border bg-surface px-4 py-2 text-foreground hover:bg-surface-2 transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border bg-surface px-4 py-2 text-foreground hover:bg-surface-2 transition-colors"
            >
              LinkedIn ↗
            </a>
            <Link
              to="/contact"
              className="rounded-md border border-border bg-surface px-4 py-2 text-foreground hover:bg-surface-2 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Profile card */}
        <div className="fade-in-up">
          <div className="panel dot-grid w-56 sm:w-64 aspect-[4/5] p-3 flex items-end">
            <div className="w-full rounded-md border border-border bg-surface-2 p-4">
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                profile
              </div>
              <div className="mt-2 text-sm text-foreground">
                {profile.name.split(" ")[0]}
              </div>
              <div className="mt-1 font-mono text-xs text-muted-foreground">
                {profile.location}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-border pt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {stats.map((s) => (
            <Panel key={s.label} className="!p-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
              <div className="mt-2 text-xl font-semibold text-foreground">
                {s.value}
              </div>
            </Panel>
          ))}
        </div>
      </section>

      {/* Current focus — single section, nothing else */}
      <section className="mt-14">
        <Panel className="relative overflow-hidden">
          <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
            current focus
          </div>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-foreground">
            Currently building production-ready full stack applications while
            expanding my knowledge in Security Engineering, Cloud and DevOps.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 font-mono text-[11px] text-muted-foreground">
            <span className="rounded-md border border-border bg-surface-2 px-2 py-1">
              React · Node · PostgreSQL
            </span>
            <span className="rounded-md border border-border bg-surface-2 px-2 py-1">
              AWS · Docker · CI/CD
            </span>
            <span className="rounded-md border border-border bg-surface-2 px-2 py-1">
              OWASP · TryHackMe
            </span>
          </div>
        </Panel>
      </section>
    </Page>
  );
}
