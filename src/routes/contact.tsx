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
  { label: "Email", value: () => socials.email, href: () => `mailto:${socials.email}` },
  { label: "GitHub", value: () => socials.github.replace("https://", ""), href: () => socials.github },
  { label: "LinkedIn", value: () => socials.linkedin.replace("https://", ""), href: () => socials.linkedin },
  { label: "LeetCode", value: () => socials.leetcode.replace("https://", ""), href: () => socials.leetcode },
  { label: "TryHackMe", value: () => socials.tryhackme.replace("https://", ""), href: () => socials.tryhackme },
];

function ContactPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="./contact"
        title="Contact"
        description="Best way to reach me is email. I'm also active on the platforms below."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href()}
            target={l.label === "Email" ? undefined : "_blank"}
            rel="noreferrer"
            className="panel panel-hover p-5 flex items-center justify-between gap-4"
          >
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                {l.label}
              </div>
              <div className="mt-2 text-sm text-foreground font-mono truncate">
                {l.value()}
              </div>
            </div>
            <span className="font-mono text-xs text-muted-foreground">→</span>
          </a>
        ))}
      </div>

      <Panel className="mt-6">
        <p className="text-sm text-muted-foreground">
          For engineering opportunities, feel free to email directly with a
          short description and I'll respond within a few days.
        </p>
      </Panel>
    </Page>
  );
}
