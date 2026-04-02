import type { Metadata } from "next";
import { Section, SectionLabel, SectionTitle } from "@/components/section";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "Case Studies — Baseline Ops",
  description:
    "Real workflows automated. See exactly how we cut hours of manual work for contractors, MSPs, and operations teams.",
};

const caseStudies = [
  {
    industry: "Painting Contractor",
    headline: "Bid time: 4 hours → 15 minutes",
    title: "PDF measurement takeoffs automated into priced, branded estimates",
    challenge:
      "A growing residential painting company was spending 4+ hours per bid. The estimator would receive measurement PDFs via email, manually extract room dimensions and surface types, calculate paint coverage in a complex Excel workbook, apply pricing rules, and format the final estimate by hand. At 8 bids per week, that was 32+ hours — almost a full employee — just on estimating.",
    workflow: [
      "PDF measurement reports arrive via email",
      "Estimator manually extracts sq ft and room counts",
      "Numbers entered into a 15-tab Excel pricing workbook",
      "Final estimate formatted and emailed to client",
    ],
    solution:
      "We built an automation system that monitors the estimator's inbox for incoming measurement PDFs. When one arrives, the system extracts square footage, room counts, and surface types. It runs the data through the company's exact pricing model — same rules, same margins — and generates a formatted, branded estimate. The estimator reviews it, clicks send. Done.",
    results: [
      { label: "Time per bid", before: "4 hours", after: "15 minutes" },
      { label: "Bids per week", before: "8", after: "30+" },
      { label: "Data entry errors", before: "3-4 per week", after: "Near zero" },
      { label: "Revenue capacity", before: "Capped", after: "3x increase" },
    ],
    quote: "We went from turning down jobs because we couldn't estimate fast enough to bidding on everything that moves.",
  },
  {
    industry: "MSP / IT Service Provider",
    headline: "6 hours of Friday reporting → fully automated",
    title: "Per-client health reports generated and delivered with zero manual effort",
    challenge:
      "A managed service provider with 15+ clients was spending every Friday afternoon generating reports. A senior technician would export ticket data from their PSA, device data from their RMM, merge everything in Excel, build summary tables and charts for each client, format branded PDF reports, and email them individually. Six hours of skilled labor, every single week.",
    workflow: [
      "Export ticket data from PSA tool",
      "Export device/alert data from RMM tool",
      "Merge datasets in Excel, filter by client",
      "Create charts, format into branded PDF, email each client",
    ],
    solution:
      "We built a reporting pipeline that runs every Friday at 6am. It pulls data directly from the PSA and RMM APIs, merges and aggregates by client, generates per-client summaries with the metrics that matter, formats everything into branded PDF reports, and delivers them via email. The team arrives to find it done.",
    results: [
      { label: "Weekly time spent", before: "6 hours", after: "0 (automated)" },
      { label: "Report accuracy", before: "Manual spot-check", after: "100% data-driven" },
      { label: "Delivery consistency", before: "Sometimes late", after: "6am every Friday" },
      { label: "Technician time freed", before: "0 extra hours", after: "6 hours/week" },
    ],
    quote: "Our clients started commenting on how consistent and detailed the reports were. They have no idea a human doesn't touch them.",
  },
  {
    industry: "General Contractor",
    headline: "Material ordering across 12 sites — error-free",
    title: "Foreman requests to purchase orders, fully automated",
    challenge:
      "A general contractor managing 12 active job sites had foremen texting and calling material needs to the office. The office manager would manually log requests in a spreadsheet, cross-reference vendor catalogs for pricing, consolidate by supplier, and place individual orders. Errors were constant — wrong quantities, missed items, delayed deliveries holding up entire crews.",
    workflow: [
      "Foremen text or call in material needs (unstructured)",
      "Office manager re-types requests into a spreadsheet",
      "Cross-references 3 vendor catalogs for pricing",
      "Manually creates and sends purchase orders",
    ],
    solution:
      "We built a mobile-friendly intake form for foremen — takes 30 seconds to submit a request with item, quantity, and job site. The system automatically prices against vendor catalogs, consolidates orders by supplier to minimize shipments, generates purchase orders, and routes them to the office manager for one-click approval.",
    results: [
      { label: "Order processing", before: "2 hours/day", after: "20 min/day" },
      { label: "Ordering errors", before: "3-4 per week", after: "<1 per month" },
      { label: "Missed deliveries", before: "Weekly", after: "Rare" },
      { label: "Admin time freed", before: "0 extra", after: "8+ hours/week" },
    ],
    quote: "The foremen actually like using it because it's faster than texting. And we stopped getting calls about missing materials.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Section className="bg-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
        <div className="relative max-w-2xl">
          <SectionLabel>Case Studies</SectionLabel>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            These aren&apos;t demos. These are production systems.
          </h1>
          <p className="mt-6 text-lg text-muted">
            Real workflows. Real clients. Real numbers. See exactly what we
            built and the impact it had.
          </p>
        </div>
      </Section>

      {caseStudies.map((cs, i) => (
        <Section key={cs.title} className={i % 2 === 0 ? "bg-white" : ""}>
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
              {cs.industry}
            </span>
            <p className="mt-1 text-sm font-semibold text-muted">{cs.headline}</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              {cs.title}
            </h2>

            {/* Challenge */}
            <div className="mt-10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-red-500 mb-3">
                The Problem
              </h3>
              <p className="text-muted leading-relaxed">{cs.challenge}</p>
            </div>

            {/* Workflow */}
            <div className="mt-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
                The Manual Workflow
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {cs.workflow.map((step, j) => (
                  <div key={step} className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50/30 p-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
                      {j + 1}
                    </span>
                    <span className="text-sm text-muted">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="mt-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-3">
                What We Built
              </h3>
              <div className="rounded-lg border border-accent/20 bg-accent/[0.02] p-6">
                <p className="text-sm leading-relaxed">{cs.solution}</p>
              </div>
            </div>

            {/* Results */}
            <div className="mt-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-green-600 mb-3">
                Results
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {cs.results.map((r) => (
                  <div key={r.label} className="rounded-lg border border-border bg-card p-4 text-center">
                    <div className="text-xs text-muted-light mb-2">{r.label}</div>
                    <div className="text-sm text-red-500 line-through mb-1">{r.before}</div>
                    <div className="text-lg font-bold text-accent">{r.after}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 rounded-lg bg-surface border border-border px-6 py-5">
              <p className="text-sm italic text-muted">
                &ldquo;{cs.quote}&rdquo;
              </p>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section className={caseStudies.length % 2 === 0 ? "" : "bg-white"}>
        <div className="text-center">
          <SectionTitle>Your workflow could look like this</SectionTitle>
          <p className="mt-4 mx-auto max-w-lg text-lg text-muted">
            Tell us what&apos;s eating your team&apos;s time.
            We&apos;ll show you exactly what the automated version looks like.
          </p>
          <div className="mt-8">
            <Button href="/#contact">Get Your Free Workflow Audit</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
