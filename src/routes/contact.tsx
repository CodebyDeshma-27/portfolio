import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHeader } from "@/components/ui-kit";
import { socials } from "@/data/socials";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Deshma Udayakumar" },
      { name: "description", content: "Get in touch — email, GitHub, LinkedIn, X." },
      { property: "og:title", content: "Contact — Deshma Udayakumar" },
      { property: "og:description", content: "Get in touch." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

type Channel = {
  label: string;
  slug?: string;
  value: string;
  href: string;
  darkLogo?: boolean;
  inline?: "linkedin";
};

const channels: Channel[] = [
  { label: "Email", slug: "gmail", value: socials.email, href: `mailto:${socials.email}` },
  { label: "GitHub", slug: "github", value: "CodebyDeshma-27", href: socials.github, darkLogo: true },
  { label: "LinkedIn", inline: "linkedin", value: "deshma-udayakumar", href: socials.linkedin },
  { label: "X (Twitter)", slug: "x", value: "@deshma27", href: socials.twitter, darkLogo: true },
];

function LinkedInLogo() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label="LinkedIn" className="h-full w-full">
      <path
        fill="#0A66C2"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"
      />
    </svg>
  );
}


function ContactPage() {
  return (
    <Page>
      <div className="glow-strong">
        <PageHeader
          eyebrow="./contact"
          title="Let's Connect"
          description="Email is the fastest way to reach me — I usually reply within a day."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {channels.map((c, i) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={c.href.startsWith("mailto:") ? undefined : "noreferrer"}
            style={{ animationDelay: `${i * 50}ms` }}
            className="panel panel-hover p-5 fade-in-up flex items-center gap-4 hover:border-primary/50 group"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                c.darkLogo ? "bg-white p-2" : "bg-surface-2 p-2"
              }`}
            >
              <img
                src={`https://cdn.simpleicons.org/${c.slug}`}
                alt={c.label}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                {c.label}
              </div>
              <div className="mt-1 text-[14.5px] font-medium text-foreground truncate">
                {c.value}
              </div>
            </div>
            <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">
              {c.href.startsWith("mailto:") ? "→" : "↗"}
            </span>
          </a>
        ))}
      </div>
    </Page>
  );
}
