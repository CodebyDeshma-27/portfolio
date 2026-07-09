import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <header className="mb-8 fade-in-up">
      <div className="font-mono text-[11px] uppercase tracking-widest text-primary">
        {eyebrow}
      </div>
      <h1 className="mt-2 text-2xl sm:text-[26px] font-semibold text-foreground">
        {title}
      </h1>
      {description ? (
        <p className="mt-2 max-w-2xl text-[13.5px] sm:text-sm text-muted-foreground">
          {description}
        </p>
      ) : null}
    </header>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
      {children}
    </main>
  );
}

export function Panel({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`panel p-5 sm:p-6 ${className}`} style={style}>{children}</div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
      {children}
    </span>
  );
}

export function StatusDot({ tone = "success" }: { tone?: "success" | "primary" }) {
  const color = tone === "success" ? "bg-success" : "bg-primary";
  return (
    <span className="relative inline-flex h-2 w-2">
      <span className={`absolute inset-0 rounded-full ${color} opacity-60 animate-ping`} />
      <span className={`relative inline-flex h-2 w-2 rounded-full ${color}`} />
    </span>
  );
}
