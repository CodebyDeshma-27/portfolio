import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHeader, Panel } from "@/components/ui-kit";
import { socials } from "@/data/socials";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Deshma Udayakumar" },
      { name: "description", content: "Get in touch — email, GitHub, LinkedIn, LeetCode and TryHackMe." },
      { property: "og:title", content: "Contact — Deshma Udayakumar" },
      { property: "og:description", content: "Get in touch." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const links = [
  { label: "Email", value: socials.email, href: `mailto:${socials.email}`, external: false },
  { label: "GitHub", value: socials.github.replace("https://", ""), href: socials.github, external: true },
  { label: "LinkedIn", value: socials.linkedin.replace("https://", ""), href: socials.linkedin, external: true },
  { label: "LeetCode", value: socials.leetcode.replace("https://", ""), href: socials.leetcode, external: true },
  { label: "TryHackMe", value: socials.tryhackme.replace("https://", ""), href: socials.tryhackme, external: true },
];

function ContactPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="./contact"
        title="Contact"
        description="Email is the fastest. I'm also active on the platforms below."
      />
      <Panel className="!p-0 overflow-hidden">
        <ul className="divide-y divide-border">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noreferrer" : undefined}
                className="grid grid-cols-[80px_minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 hover:bg-surface-2 transition-colors"
              >
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {l.label}
                </span>
                <span className="font-mono text-[13px] text-foreground truncate">
                  {l.value}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {l.external ? "↗" : "→"}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Panel>
    </Page>
  );
}
