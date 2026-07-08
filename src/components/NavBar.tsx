import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/certifications", label: "Certifications" },
  { to: "/achievements", label: "Achievements" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur transition-colors ${
        scrolled
          ? "bg-background/80 border-b border-border"
          : "bg-background/50 border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="font-mono text-sm text-foreground hover:text-primary transition-colors"
          onClick={() => setOpen(false)}
        >
          <span className="text-primary">~/</span>deshma
        </Link>

        <nav className="hidden md:flex items-center gap-1 font-mono text-[13px]">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground hover:bg-surface"
              activeProps={{ className: "text-foreground bg-surface" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden font-mono text-xs rounded-md border border-border px-3 py-1.5 text-muted-foreground hover:text-foreground"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col font-mono text-sm">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-surface"
                activeProps={{ className: "text-foreground bg-surface" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
