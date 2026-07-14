import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, Panel, StatusDot } from "@/components/ui-kit";
import { profile, socials, stats } from "@/data/socials";
import avatar from "@/assets/avatar.jpg";

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
    <div className="panel overflow-hidden w-full max-w-2xl mx-auto">
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
  return (
    <Page>
      {/* Hero */}
      <section className="glow-strong grid grid-cols-1 lg:grid-cols-[1.15fr_auto] gap-10 lg:gap-16 items-center pt-4 pb-16">
        <div className="fade-in-up min-w-0">
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <StatusDot tone="success" />
            <span>available for opportunities</span>
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
            {profile.name.split(" ")[0]}{" "}
            <span className="gradient-text">Udayakumar</span>
          </h1>

          <div className="mt-4 font-mono text-[13.5px] text-primary/90">
            {profile.titles.join("  ·  ")}
          </div>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-foreground/85">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs">
            <a
              href={socials.resumeUrl}
              download
              className="rounded-md border border-primary/40 bg-primary/10 px-4 py-2.5 text-primary hover:bg-primary/15 transition-colors"
            >
              Resume ↓
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border bg-surface px-4 py-2.5 text-foreground hover:bg-surface-2 transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border bg-surface px-4 py-2.5 text-foreground hover:bg-surface-2 transition-colors"
            >
              LinkedIn ↗
            </a>
            <Link
              to="/contact"
              className="rounded-md border border-border bg-surface px-4 py-2.5 text-foreground hover:bg-surface-2 transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="mt-10">
            <YamlProfile />
          </div>
        </div>

        {/* Avatar */}
        <div className="fade-in-up flex justify-center lg:justify-end">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary/25 via-primary/10 to-transparent blur-2xl"
            />
            <div className="relative h-52 w-52 sm:h-64 sm:w-64 rounded-full overflow-hidden border border-primary/40 shadow-[0_0_40px_-10px_oklch(0.83_0.12_200_/_0.6)]">
              <img
                src={avatar}
                alt="Deshma Udayakumar"
                width={512}
                height={512}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 text-center font-mono text-[11px] text-muted-foreground">
              📍 {profile.location}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-border pt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s) => (
            <Panel key={s.label} className="!p-5 panel-hover">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                {s.label}
              </div>
              <div className="mt-2 text-3xl font-semibold text-foreground">
                {s.value}
              </div>
            </Panel>
          ))}
        </div>
      </section>
    </Page>
  );
}
