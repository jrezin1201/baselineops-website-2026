import type { Metadata } from "next";
import { Section, SectionLabel, SectionTitle } from "@/components/section";
import { Card } from "@/components/card";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "About — Baseline Ops",
  description:
    "We're operators who build systems. Deep expertise in Excel, PDFs, and the messy reality of business workflows.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="bg-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
        <div className="relative max-w-2xl">
          <SectionLabel>About</SectionLabel>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            We&apos;ve spent years inside the kind of workflows most people pretend
            don&apos;t exist.
          </h1>
          <p className="mt-6 text-lg text-muted">
            30-tab spreadsheets. PDFs that don&apos;t parse cleanly. Five systems
            that were never meant to talk to each other. That&apos;s where we work.
            That&apos;s what we fix.
          </p>
        </div>
      </Section>

      {/* Founder bio */}
      <Section className="bg-white">
        <div className="max-w-2xl mx-auto">
          <SectionLabel>Who&apos;s behind Baseline Ops</SectionLabel>

          <div className="mt-6 flex flex-col items-center sm:items-start sm:flex-row gap-8">
            {/* Photo placeholder — replace with actual image later */}
            <div
              className="founder-photo h-[200px] w-[200px] shrink-0 rounded-full bg-zinc-200"
              role="img"
              aria-label="Jordan — Founder, Baseline Ops"
            />

            <div className="text-muted leading-relaxed space-y-4">
              <p>
                I&apos;m Jordan — an electrical engineer turned enterprise SaaS sales
                professional turned automation builder.
              </p>
              <p>
                I spent 5 years in hardware and embedded systems engineering, then 8+
                years selling cybersecurity and IT infrastructure software to mid-market
                and enterprise companies. I&apos;ve sat in hundreds of ops reviews where
                the &ldquo;system&rdquo; was a spreadsheet someone built three years ago
                that nobody fully understands.
              </p>
              <p>
                Baseline Ops is what happens when you combine engineering chops with a
                deep understanding of how growing businesses actually operate. I build
                the automation systems your team has been asking for.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionLabel>Our approach</SectionLabel>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              We build systems. Not slide decks.
            </h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              <p>
                Baseline Ops exists because too many businesses still run on
                copy-paste, manual data entry, and processes that break when one
                person takes a day off.
              </p>
              <p>
                We&apos;re not a general agency that dabbles in automation.
                We&apos;re operators and engineers who have spent years building
                systems inside messy, real-world operations — the kind where
                &ldquo;the spreadsheet&rdquo; <em>is</em> the system.
              </p>
              <p>
                Every project starts with the same question:{" "}
                <span className="text-foreground font-medium">
                  what would this look like if it just worked?
                </span>
              </p>
              <p>
                Then we build exactly that.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Measured by ROI, not features",
                desc: "Hours saved. Errors eliminated. Capacity unlocked. If it doesn't move a number you care about, we don't build it.",
              },
              {
                title: "Your team owns it",
                desc: "Every system is documented and maintainable. When we hand off, your team can run it, modify it, and extend it without us.",
              },
              {
                title: "No fluff. No discovery phases.",
                desc: "We audit your workflow, build the system, and deploy it. You see progress weekly, not quarterly.",
              },
              {
                title: "Your tools, connected",
                desc: "We work with what you have — Excel, Google Sheets, QuickBooks, PSA/RMM tools, email, PDFs. We wire them together.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <h3 className="text-sm font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* What we're not */}
      <Section className="bg-surface-dark text-white bg-grid-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-transparent to-surface-dark pointer-events-none" />
        <div className="relative">
          <SectionLabel>What we&apos;re not</SectionLabel>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-white">
            Clear on what we don&apos;t do
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                not: "Not Zapier",
                why: "We don't connect apps with pre-built connectors. We build custom systems for workflows that are too complex or too specific for off-the-shelf tools.",
              },
              {
                not: "Not a dev shop",
                why: "We don't take feature requests and ship code. We understand your operations, identify leverage points, and build the automation that has the highest ROI.",
              },
              {
                not: "Not offshore labor",
                why: "We're not a team of contractors you manage. We own the problem, design the solution, and deliver a working system you can rely on.",
              },
            ].map((item) => (
              <div key={item.not} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-base font-bold text-white">{item.not}</h3>
                <p className="mt-2 text-sm text-zinc-400">{item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Who we work with */}
      <Section>
        <SectionLabel>Who we work with</SectionLabel>
        <SectionTitle>
          Teams that have outgrown manual processes but haven&apos;t had time to fix them
        </SectionTitle>
        <p className="mt-4 max-w-2xl text-muted">
          Our clients are growing businesses where the team is too busy doing the work
          to fix the systems around it. Sound familiar?
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Contractors & Trades",
              desc: "Painting companies, GCs, and specialty trades running estimating, bidding, and project ops on spreadsheets and PDFs.",
              stat: "Typical result: 80% less time on estimates",
            },
            {
              title: "MSPs & IT Providers",
              desc: "Managed service providers buried in manual reporting, ticket routing, and client communication workflows.",
              stat: "Typical result: Reporting fully automated",
            },
            {
              title: "Growing SMBs",
              desc: "Businesses where operations still run on email, spreadsheets, and the one person who knows how everything works.",
              stat: "Typical result: 20+ hrs/week freed up",
            },
          ].map((item) => (
            <Card key={item.title} className="flex flex-col">
              <h3 className="text-base font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted flex-1">{item.desc}</p>
              <p className="mt-4 text-xs font-semibold text-accent">{item.stat}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-white text-center">
        <SectionTitle>Let&apos;s talk about what&apos;s broken</SectionTitle>
        <p className="mt-4 mx-auto max-w-lg text-lg text-muted">
          No pitch decks. No six-month timelines. Just a conversation about
          what&apos;s eating your team&apos;s time and how we&apos;d fix it.
        </p>
        <div className="mt-8">
          <Button href="/#contact">Get Your Free Workflow Audit</Button>
        </div>
      </Section>
    </>
  );
}
