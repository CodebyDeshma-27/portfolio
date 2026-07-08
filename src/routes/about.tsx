import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHeader, Panel } from "@/components/ui-kit";
import { profile } from "@/data/socials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Deshma Udayakumar" },
      { name: "description", content: "About Deshma Udayakumar — background, education, and current focus." },
      { property: "og:title", content: "About — Deshma Udayakumar" },
      { property: "og:description", content: "Background, education, and current focus." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const cards = [
  {
    label: "Introduction",
    body: profile.intro,
  },
  {
    label: "Education",
    body:
      "B.Tech in Computer Science and Engineering. Coursework in data structures, operating systems, computer networks, databases and information security.",
  },
  {
    label: "Current Learning",
    body:
      "Deepening backend systems, container orchestration on AWS, and offensive security fundamentals via TryHackMe and HackTheBox.",
  },
  {
    label: "Current Interests",
    body:
      "Full stack architecture, API design, application security, and developer tooling.",
  },
  {
    label: "Career Goals",
    body:
      "Join an engineering team that ships real software and treats reliability and security as first-class concerns.",
  },
];

function AboutPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="./about"
        title="About"
        description="A short overview of who I am and what I'm working on."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((c) => (
          <Panel key={c.label}>
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
              {c.label}
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-foreground">
              {c.body}
            </p>
          </Panel>
        ))}
      </div>
    </Page>
  );
}
