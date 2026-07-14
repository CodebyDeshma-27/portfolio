import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHeader } from "@/components/ui-kit";
import { socials } from "@/data/socials";

export const Route = createFileRoute("/profiles")({
  head: () => ({
    meta: [
      { title: "Coding & Security Profiles — Deshma Udayakumar" },
      { name: "description", content: "GitHub, LeetCode, TryHackMe and HackerRank profiles." },
      { property: "og:title", content: "Coding & Security Profiles — Deshma Udayakumar" },
      { property: "og:description", content: "Coding and security platform profiles." },
      { property: "og:url", content: "/profiles" },
    ],
    links: [{ rel: "canonical", href: "/profiles" }],
  }),
  component: ProfilesPage,
});

type Platform = {
  name: string;
  slug: string;
  username: string;
  description: string;
  url: string;
  darkLogo?: boolean;
};

const platforms: Platform[] = [
  {
    name: "GitHub",
    slug: "github",
    username: "CodebyDeshma-27",
    description: "Source code for every project I ship — from ASM tools and federated ML systems to hackathon prototypes.",
    url: socials.github,
    darkLogo: true,
  },
  {
    name: "LeetCode",
    slug: "leetcode",
    username: "pDcfRDP6mh",
    description: "Consistent problem-solving focused on data structures, algorithms and SQL patterns.",
    url: socials.leetcode,
  },
  {
    name: "TryHackMe",
    slug: "tryhackme",
    username: "deshma2005",
    description: "Hands-on offensive security labs — networking, Linux hardening, web exploitation and SOC workflows.",
    url: socials.tryhackme,
  },
  {
    name: "HackerRank",
    slug: "hackerrank",
    username: "deshma2027",
    description: "Verified badges in SQL (Basic & Intermediate) and problem-solving contests.",
    url: socials.hackerrank,
  },
];

function ProfilesPage() {
  return (
    <Page>
      <div className="glow-strong">
        <PageHeader
          eyebrow="./profiles"
          title="Coding & Security Profiles"
          description="Where I practice, ship and compete. Real accounts, live streaks, verified badges."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {platforms.map((p, i) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            style={{ animationDelay: `${i * 60}ms` }}
            className="panel panel-hover p-6 fade-in-up hover:border-primary/50 group"
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                  p.darkLogo ? "bg-white p-2.5" : "bg-surface-2 p-2"
                }`}
              >
                <img
                  src={`https://cdn.simpleicons.org/${p.slug}`}
                  alt={p.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-lg font-semibold text-foreground">{p.name}</h2>
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    ↗
                  </span>
                </div>
                <div className="mt-1 font-mono text-[12px] text-primary">
                  @{p.username}
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-foreground/85">
                  {p.description}
                </p>
                <div className="mt-4 inline-flex items-center rounded-md border border-primary/30 bg-primary/5 px-3 py-1.5 font-mono text-[11.5px] text-primary group-hover:bg-primary/10 transition-colors">
                  Visit Profile →
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Page>
  );
}
