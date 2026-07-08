export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
        <div>
          Designed &amp; developed by{" "}
          <span className="text-foreground">Deshma Udayakumar</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>Built with React</span>
          <span className="opacity-40">·</span>
          <span>Hosted on AWS</span>
          <span className="opacity-40">·</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
