import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, Panel, StatusDot } from "@/components/ui-kit";
import { profile, socials, stats } from "@/data/socials";
import { achievements } from "@/data/achievements";
import { certificates } from "@/data/certificates";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function YamlProfile() {
  const K = ({ children }: { children: React.ReactNode }) => (
    <span className="text-primary">{children}</span>
  );
  const V = ({ children }: { children: React.ReactNode }) => (
    <span className="text-foreground">{children}</span>
  );
  const D = ({ children }: { children: React.ReactNode }) => (
    <span className="text-muted-foreground">{children}</span>
  );

  return (
    <div className="panel overflow-hidden w-full sm:max-w-md">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
        <span className="ml-2 font-mono text-[11px] text-muted-foreground">
          profile.yaml
        </span>
      </div>
      <pre className="font-mono text-[12.5px] leading-relaxed p-4 sm:p-5 overflow-x-auto">
        <D>$</D> <span className="text-foreground">cat profile.yaml</span>
        {"\n"}
        <K>name</K>: <V>{profile.name}</V>
        {"\n"}
        <K>role</K>:{"\n"}
        {profile.titles.map((t) => (
          <span key={t}>
            {"  "}- <V>{t}</V>
            {"\n"}
          </span>
        ))}
        <K>focus</K>:{"\n"}
        {profile.focus.map((f) => (
          <span key={f}>
            {"  "}- <V>{f}</V>
            {"\n"}
          </span>
        ))}
        <K>status</K>: <V>{profile.status}</V>
        {"\n"}
        <K>availability</K>: <span className="text-primary">{profile.availability}</span>
      </pre>
    </div>
  );
}

function HomePage() {
  const latestAchievement = achievements[0];
  const latestCert = certificates[0];

  return (
    <Page>
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-14 items-start pt-2 pb-14">
        <div className="fade-in-up min-w-0">
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <StatusDot tone="success" />
            <span>available for opportunities</span>
          </div>

          <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            {profile.name}
          </h1>

          <div className="mt-3 font-mono text-[13px] text-muted-foreground">
            {profile.titles.join("  ·  ")}
          </div>

          <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-muted-foreground">
            {profile.intro}
          </p>

          <div className="mt-7 flex flex-wrap gap-2 font-mono text-xs">
            <a
              href={socials.resumeUrl}
              className="rounded-md border border-primary/40 bg-primary/10 px-3.5 py-2 text-primary hover:bg-primary/15 transition-colors"
            >
              Resume ↓
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border bg-surface px-3.5 py-2 text-foreground hover:bg-surface-2 transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border bg-surface px-3.5 py-2 text-foreground hover:bg-surface-2 transition-colors"
            >
              LinkedIn ↗
            </a>
            <Link
              to="/contact"
              className="rounded-md border border-border bg-surface px-3.5 py-2 text-foreground hover:bg-surface-2 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <YamlProfile />
      </section>

      {/* Stats */}
      <section className="border-t border-border pt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s) => (
            <Panel key={s.label} className="!p-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
              <div className="mt-2 text-2xl font-semibold text-foreground">
                {s.value}
              </div>
            </Panel>
          ))}
        </div>
      </section>

      {/* Current focus + latest achievement + latest cert */}
      <section className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-3">
        <Panel className="lg:col-span-1">
          <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
            current focus
          </div>
          <p className="mt-3 text-[14px] leading-relaxed text-foreground">
            Shipping production-ready full stack projects while going deeper on
            security, cloud and DevOps fundamentals.
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px] text-muted-foreground">
            {profile.focus.map((f) => (
              <span key={f} className="rounded-md border border-border bg-surface-2 px-2 py-1">
                {f}
              </span>
            ))}
          </div>
        </Panel>

        <Panel>
          <div className="flex items-center justify-between">
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
              latest achievement
            </div>
            <Link to="/achievements" className="font-mono text-[11px] text-muted-foreground hover:text-foreground">
              all →
            </Link>
          </div>
          {latestAchievement ? (
            <div className="mt-3">
              <div className="font-mono text-[11px] text-muted-foreground">
                {latestAchievement.year} · {latestAchievement.type}
              </div>
              <div className="mt-1.5 text-[14px] font-medium text-foreground">
                {latestAchievement.title}
              </div>
              <p className="mt-1.5 text-[13px] text-muted-foreground line-clamp-3">
                {latestAchievement.description}
              </p>
            </div>
          ) : (
            <EmptyMini label="No entries yet." />
          )}
        </Panel>

        <Panel>
          <div className="flex items-center justify-between">
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
              latest certification
            </div>
            <Link to="/certifications" className="font-mono text-[11px] text-muted-foreground hover:text-foreground">
              all →
            </Link>
          </div>
          {latestCert ? (
            <div className="mt-3">
              <div className="font-mono text-[11px] text-muted-foreground">
                {latestCert.category} · {latestCert.date}
              </div>
              <div className="mt-1.5 text-[14px] font-medium text-foreground">
                {latestCert.title}
              </div>
              <div className="mt-1 font-mono text-[11px] text-muted-foreground">
                {latestCert.issuer}
              </div>
            </div>
          ) : (
            <EmptyMini label="Certificates coming soon." />
          )}
        </Panel>
      </section>
    </Page>
  );
}

function EmptyMini({ label }: { label: string }) {
  return (
    <div className="mt-3 flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
      {label}
    </div>
  );
}
