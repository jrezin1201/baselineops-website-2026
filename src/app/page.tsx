import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/section";
import { Card } from "@/components/card";
import { Button } from "@/components/button";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — Sharp, specific, painful
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 mb-6 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse-subtle" />
              For contractors, MSPs, and operations teams
            </span>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Your team wastes 20+ hours a week on work a{" "}
              <span className="gradient-text">system should handle</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted">
              Copying data between Excel and email. Re-keying PDF numbers into
              spreadsheets. Manually building estimates that should take minutes.
              <span className="block mt-2 text-foreground font-medium">
                We build the automation systems that make it stop.
              </span>
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/#contact">Get Your Free Workflow Audit</Button>
              <Button href="/case-studies" variant="secondary">
                See Client Results
              </Button>
            </div>
          </div>

          {/* Trust strip */}
          <div className="mt-16 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-muted">
              <span className="font-mono text-xs text-muted-light uppercase tracking-wider">Systems built for</span>
              <span>Painting contractors</span>
              <span>MSPs</span>
              <span>General contractors</span>
              <span>Growing SMBs</span>
            </div>
            <div className="flex items-center gap-6 text-xs text-muted-light font-mono">
              <span>1000s of data points processed daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PAIN — "You're probably dealing with this"
      ══════════════════════════════════════════ */}
      <Section className="bg-surface-dark text-white bg-grid-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-transparent to-surface-dark pointer-events-none" />
        <div className="relative">
          <SectionLabel>Sound familiar?</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            This is what broken operations look like
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            If any of these hit close to home, you&apos;re leaving hours — and money — on the table every week.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "You export data from one system just to re-enter it somewhere else",
              "Your estimates depend on someone manually updating a spreadsheet",
              "You don't fully trust your numbers because they're hand-typed",
              "Onboarding a new hire means teaching them your janky workarounds",
              "One person leaving would break three critical workflows",
              "You've said \"we should automate this\" at least five times this month",
            ].map((pain) => (
              <div
                key={pain}
                className="flex items-start gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-5"
              >
                <span className="mt-0.5 shrink-0 text-red-400 text-sm">&bull;</span>
                <span className="text-sm text-zinc-300">{pain}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm font-medium text-zinc-500">
            Manual processes don&apos;t scale. Systems do.
          </p>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          SOLUTION — Tangible, visual, real
      ══════════════════════════════════════════ */}
      <Section className="bg-white">
        <SectionLabel>How it works</SectionLabel>
        <SectionTitle>
          Your workflows run automatically. You review the output.
        </SectionTitle>
        <SectionDescription>
          We connect your existing tools — Excel, PDFs, email, databases — into
          a single automated system. No new software to learn. No ripping and replacing.
        </SectionDescription>

        {/* Visual flow */}
        <div className="mt-12 rounded-xl border border-border bg-surface p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-6">
            Example: Painting contractor bid automation
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-0">
            {[
              { label: "PDF arrives", sub: "Measurement report hits inbox", icon: "📄" },
              { label: "Data extracted", sub: "Sq ft, rooms, surfaces parsed", icon: "⚙️" },
              { label: "Pricing applied", sub: "Your rules, your margins", icon: "📊" },
              { label: "Estimate generated", sub: "Formatted, branded, ready", icon: "✉️" },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-4 md:flex-1">
                <div className="flex flex-col items-center text-center flex-1">
                  <span className="text-2xl mb-2">{step.icon}</span>
                  <span className="text-sm font-semibold">{step.label}</span>
                  <span className="text-xs text-muted mt-1">{step.sub}</span>
                </div>
                {i < 3 && (
                  <span className="hidden md:block text-accent font-mono text-lg animate-flow shrink-0 mx-2">
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-accent/5 border border-accent/10 px-4 py-3">
            <p className="text-sm text-center">
              <span className="font-semibold text-accent">Result:</span>
              <span className="text-muted ml-2">
                What took 4 hours now takes 15 minutes. Every bid is accurate. Every time.
              </span>
            </p>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          BEFORE / AFTER — Signature section
      ══════════════════════════════════════════ */}
      <Section>
        <div className="text-center mb-12">
          <SectionLabel>The transformation</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            If it requires copy-paste, it&apos;s broken
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted">
            See the difference between duct-taped processes and a real system.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Before */}
          <div className="rounded-xl border-2 border-red-200 bg-red-50/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 text-sm font-bold">
                &times;
              </span>
              <h3 className="text-lg font-bold text-red-700">Without Baseline Ops</h3>
            </div>
            <ul className="space-y-4">
              {[
                { step: "Download report from System A", time: "5 min" },
                { step: "Open in Excel, reformat 12 columns", time: "20 min" },
                { step: "Cross-reference against last week's data", time: "30 min" },
                { step: "Copy key figures, paste into email template", time: "15 min" },
                { step: "Manually update System B with new numbers", time: "25 min" },
                { step: "Hope nothing was missed", time: "∞" },
              ].map((item) => (
                <li key={item.step} className="flex items-start justify-between gap-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs">&times;</span>
                    <span className="text-muted">{item.step}</span>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-red-400">{item.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg bg-red-100/50 px-4 py-3 text-center">
              <span className="text-sm font-semibold text-red-700">Total: ~2 hours</span>
              <span className="text-xs text-red-500 ml-2">per report, per week</span>
            </div>
          </div>

          {/* After */}
          <div className="rounded-xl border-2 border-accent/30 bg-accent/[0.02] p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent text-sm font-bold">
                &#10003;
              </span>
              <h3 className="text-lg font-bold text-accent">With Baseline Ops</h3>
            </div>
            <ul className="space-y-4">
              {[
                { step: "System A triggers automation on schedule", time: "0 min" },
                { step: "Data extracted, cleaned, and validated automatically", time: "0 min" },
                { step: "Cross-referencing happens instantly against historical data", time: "0 min" },
                { step: "Report generated and delivered to the right inbox", time: "0 min" },
                { step: "System B updated — zero manual steps", time: "0 min" },
                { step: "Errors caught before they reach a client", time: "always" },
              ].map((item) => (
                <li key={item.step} className="flex items-start justify-between gap-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs font-bold">&#10003;</span>
                    <span>{item.step}</span>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-accent">{item.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg bg-accent/5 border border-accent/10 px-4 py-3 text-center">
              <span className="text-sm font-semibold text-accent">Total: 10 minutes</span>
              <span className="text-xs text-muted ml-2">to review. That&apos;s it.</span>
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          PROCESS — How we work
      ══════════════════════════════════════════ */}
      <Section className="bg-white">
        <SectionLabel>Our process</SectionLabel>
        <SectionTitle>Audit. Build. Deploy. Done.</SectionTitle>
        <SectionDescription>
          No six-month timelines. No discovery phases that go nowhere.
          We ship working automation systems in weeks, not quarters.
        </SectionDescription>

        <div className="mt-12 grid gap-0 lg:grid-cols-3">
          {[
            {
              step: "01",
              title: "We audit your workflow",
              desc: "We map every manual step, every handoff, every \"someone has to remember to do this\" moment. You'll see exactly where time and accuracy are lost.",
              detail: "Takes 1–2 sessions. You talk, we listen.",
            },
            {
              step: "02",
              title: "We build the system",
              desc: "Custom automation that connects your existing tools. Your Excel files, PDFs, email, CRM, accounting software — wired together into one reliable pipeline.",
              detail: "You see progress weekly. No black box.",
            },
            {
              step: "03",
              title: "We deploy + refine",
              desc: "Deployed in your environment, tested against real data, refined until it runs on autopilot. Your team owns it from day one.",
              detail: "We iterate until you forget it's there.",
            },
          ].map((item, i) => (
            <div key={item.step} className={`relative p-8 ${i < 2 ? "lg:border-r lg:border-border" : ""}`}>
              <span className="text-5xl font-bold text-accent/10 block mb-2">
                {item.step}
              </span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-muted">{item.desc}</p>
              <p className="mt-4 text-xs font-medium text-accent">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          USE CASES — Mini case studies
      ══════════════════════════════════════════ */}
      <Section>
        <SectionLabel>Real systems we&apos;ve built</SectionLabel>
        <SectionTitle>Not concepts. Not demos. Production systems.</SectionTitle>
        <SectionDescription>
          Each one custom-built for a specific client&apos;s workflow. Here&apos;s what the output looks like.
        </SectionDescription>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              industry: "Painting Contractor",
              title: "PDF takeoffs → priced estimates in 15 minutes",
              workflow: "Measurement PDFs arrive by email. System extracts square footage, applies per-room pricing rules, generates a branded estimate, and queues it for review.",
              before: "4 hours per bid, 8 bids/week",
              after: "15 min per bid, 30+ bids/week",
            },
            {
              industry: "General Contractor",
              title: "Material ordering across 12 sites — automated",
              workflow: "Foremen submit needs via mobile form. System prices against vendor catalogs, consolidates by supplier, and generates purchase orders. Office manager just approves.",
              before: "2 hrs/day, 3-4 errors/week",
              after: "20 min/day, <1 error/month",
            },
            {
              industry: "MSP / IT Provider",
              title: "Client reports delivered before the team arrives",
              workflow: "Every Friday at 6am, system pulls ticket and device data from PSA/RMM, generates per-client health reports as branded PDFs, and emails them automatically.",
              before: "6 hours every Friday, manual",
              after: "0 hours. Fully automated.",
            },
          ].map((item) => (
            <Card key={item.title} className="flex flex-col p-0 overflow-hidden">
              <div className="px-6 pt-6 pb-4 flex-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                  {item.industry}
                </span>
                <h3 className="mt-2 text-base font-bold leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.workflow}</p>
              </div>
              <div className="border-t border-border bg-surface px-6 py-4">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-muted-light uppercase tracking-wider font-medium">Before</span>
                    <p className="mt-1 font-semibold text-red-600">{item.before}</p>
                  </div>
                  <div>
                    <span className="text-muted-light uppercase tracking-wider font-medium">After</span>
                    <p className="mt-1 font-semibold text-accent">{item.after}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button href="/case-studies" variant="secondary">Read full case studies</Button>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          WHY BASELINE OPS — Positioning
      ══════════════════════════════════════════ */}
      <Section className="bg-surface-dark text-white bg-grid-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-transparent to-surface-dark pointer-events-none" />
        <div className="relative">
          <SectionLabel>Why Baseline Ops</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Not Zapier. Not a dev shop. Not offshore labor.
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            We&apos;re operators who build systems. There&apos;s a difference.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Built for messy real-world workflows",
                desc: "30-tab spreadsheets. PDFs that don't parse cleanly. Systems that were never meant to talk to each other. That's our specialty.",
              },
              {
                title: "Deep understanding of Excel + PDFs + operations",
                desc: "We've reverse-engineered hundreds of spreadsheet-based processes. We know the edge cases before you tell us about them.",
              },
              {
                title: "Custom-built systems, not templates",
                desc: "Every automation is designed for your specific workflow. No cookie-cutter solutions. No \"close enough\" configurations.",
              },
              {
                title: "Measured by ROI, not features",
                desc: "We track hours saved, errors eliminated, and capacity unlocked. If it doesn't move a number that matters, we don't build it.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          ROI — Numbers
      ══════════════════════════════════════════ */}
      <Section className="bg-white">
        <div className="text-center">
          <SectionLabel>Impact</SectionLabel>
          <SectionTitle>Measured in hours, not features</SectionTitle>
          <SectionDescription>
            <span className="block mx-auto">
              Our clients see measurable improvements within the first month of deployment.
            </span>
          </SectionDescription>
        </div>

        <div className="mt-12 grid gap-px bg-border rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "20+", unit: "hrs/week", label: "given back to your team" },
            { value: "95%", unit: "", label: "reduction in data entry errors" },
            { value: "3x", unit: "", label: "output without adding headcount" },
            { value: "<2", unit: "weeks", label: "from audit to first automation live" },
          ].map((item) => (
            <div key={item.label} className="bg-white p-8 text-center">
              <div className="text-3xl sm:text-4xl font-bold">
                <span className="gradient-text">{item.value}</span>
                {item.unit && <span className="text-lg text-muted font-normal ml-1">{item.unit}</span>}
              </div>
              <div className="mt-2 text-sm text-muted">{item.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          CTA / Contact — High-value framing
      ══════════════════════════════════════════ */}
      <Section id="contact" className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionLabel>Get started</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              See what we&apos;d automate first
            </h2>
            <p className="mt-4 text-lg text-muted">
              Tell us about the workflows burning your team&apos;s time.
              We&apos;ll send you a free audit showing exactly where automation
              would have the biggest impact — and what the system would look like.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { text: "Free workflow audit", sub: "We map your process and find the leverage points" },
                { text: "Custom automation plan", sub: "Specific to your tools, your team, your data" },
                { text: "No pitch, no pressure", sub: "If it's not a fit, we'll tell you" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs font-bold">&#10003;</span>
                  <div>
                    <span className="text-sm font-semibold">{item.text}</span>
                    <span className="block text-xs text-muted mt-0.5">{item.sub}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-lg border border-border bg-white p-4">
              <p className="text-xs text-muted">
                <span className="font-semibold text-foreground">Built for teams handling real volume.</span>
                {" "}Our systems process thousands of data points daily for contractors, MSPs, and operations teams across the country.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}
