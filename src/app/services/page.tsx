import type { Metadata } from "next";
import { Section, SectionLabel, SectionTitle } from "@/components/section";
import { Card } from "@/components/card";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "Services — Baseline Ops",
  description:
    "Workflow automation, data processing, and custom internal tools. Built for messy real-world operations.",
};

const services = [
  {
    label: "Workflow Automation",
    title: "The steps your team repeats daily? Gone.",
    problem:
      "Download a file. Reformat it. Copy data into another system. Send an update. Repeat tomorrow. Your team burns hours on predictable work that a system should handle — and every handoff is a chance for errors.",
    solution:
      "We map your workflow end-to-end, identify every manual handoff, and build an automation system that eliminates them. Triggers fire on schedule or on event. Data flows between your tools automatically. Your team only gets involved when something genuinely needs a human decision.",
    outcomes: [
      "20+ hours/week returned to your team",
      "Errors from manual data handling drop to near zero",
      "New hires onboard in days, not weeks",
    ],
    example: "Contractor estimate workflow: PDF → parsed → priced → formatted → delivered. Automatically.",
  },
  {
    label: "Data Processing",
    title: "Your Excel files and PDFs become structured, reliable data.",
    problem:
      "Critical numbers are trapped in spreadsheets with 30 tabs, PDFs that don't copy cleanly, and email attachments nobody can find. Every time someone needs data, it means 45 minutes of manual extraction and cross-referencing.",
    solution:
      "We build ingestion pipelines that automatically extract data from Excel, PDFs, CSVs, and email attachments. Data is cleaned, validated against your business rules, and routed to the right system — before your team even opens their laptop.",
    outcomes: [
      "Automatic extraction from any file format",
      "Validation catches bad data before it propagates",
      "Structured output ready for reporting or downstream systems",
    ],
    example: "MSP client data: PSA export + RMM export → merged, cleaned → per-client report generated.",
  },
  {
    label: "Custom Internal Tools",
    title: "Tools built for how your team actually works. Not how software companies think you should.",
    problem:
      "Off-the-shelf software doesn't match your process. So your team builds workarounds — shadow spreadsheets, manual checklists, tribal knowledge that only two people understand. When someone leaves, three processes break.",
    solution:
      "We build lightweight internal tools tailored to your exact workflow. Mobile-friendly intake forms, approval dashboards, pricing calculators, automated routing — whatever replaces the duct tape holding your operations together.",
    outcomes: [
      "Tools that match your process exactly — no workarounds needed",
      "One source of truth — no more shadow spreadsheets",
      "Any team member can run the process, not just \"the person who knows\"",
    ],
    example: "Construction materials: mobile form → auto-priced → PO generated → sent to supplier.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section className="bg-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
        <div className="relative max-w-2xl">
          <SectionLabel>Services</SectionLabel>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Your workflows run automatically. You review the output.
          </h1>
          <p className="mt-6 text-lg text-muted">
            We don&apos;t sell software licenses or generic templates.
            We build custom automation systems that plug into your existing tools
            and eliminate the manual work that&apos;s burning your team&apos;s time.
          </p>
        </div>
      </Section>

      {services.map((service, i) => (
        <Section key={service.label} className={i % 2 === 0 ? "bg-white" : ""}>
          <div className="mb-10">
            <SectionLabel>{service.label}</SectionLabel>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl max-w-2xl">
              {service.title}
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <Card>
              <span className="text-xs font-bold uppercase tracking-wider text-red-500">The Problem</span>
              <p className="mt-3 text-sm text-muted leading-relaxed">{service.problem}</p>
            </Card>

            <Card>
              <span className="text-xs font-bold uppercase tracking-wider text-accent">What We Build</span>
              <p className="mt-3 text-sm text-muted leading-relaxed">{service.solution}</p>
            </Card>

            <Card>
              <span className="text-xs font-bold uppercase tracking-wider text-green-600">What You Get</span>
              <ul className="mt-3 space-y-2">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-0.5 text-green-500 font-bold shrink-0">&#10003;</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="mt-6 rounded-lg border border-border bg-surface px-5 py-3">
            <p className="text-xs text-muted">
              <span className="font-semibold text-foreground">In practice:</span>{" "}
              {service.example}
            </p>
          </div>
        </Section>
      ))}

      <Section className={services.length % 2 === 0 ? "" : "bg-white"}>
        <div className="text-center">
          <SectionTitle>Not sure where to start?</SectionTitle>
          <p className="mt-4 mx-auto max-w-lg text-lg text-muted">
            We&apos;ll audit your workflows for free and show you exactly where
            automation will have the biggest impact.
          </p>
          <div className="mt-8">
            <Button href="/#contact">Get Your Free Workflow Audit</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
