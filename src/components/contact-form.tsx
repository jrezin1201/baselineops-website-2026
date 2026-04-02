"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold">We&apos;ll be in touch</h3>
        <p className="mt-2 text-sm text-muted">
          Expect a reply within one business day with your workflow audit outline.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-8 space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
        <input
          type="text" id="name" name="name" required
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">Work Email</label>
        <input
          type="email" id="email" name="email" required
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-1.5">Company</label>
        <input
          type="text" id="company" name="company"
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          placeholder="Your company"
        />
      </div>
      <div>
        <label htmlFor="team-size" className="block text-sm font-medium mb-1.5">Team size</label>
        <select
          id="team-size" name="team-size" required
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors appearance-none"
          defaultValue=""
        >
          <option value="" disabled>Select team size</option>
          <option value="just-me">Just me</option>
          <option value="2-5">2–5</option>
          <option value="6-15">6–15</option>
          <option value="16-50">16–50</option>
          <option value="50+">50+</option>
        </select>
      </div>
      <div>
        <label htmlFor="manual-hours" className="block text-sm font-medium mb-1.5">
          Hours/week your team spends on manual data work
        </label>
        <select
          id="manual-hours" name="manual-hours" required
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors appearance-none"
          defaultValue=""
        >
          <option value="" disabled>Select hours per week</option>
          <option value="<5">Less than 5</option>
          <option value="5-10">5–10</option>
          <option value="10-20">10–20</option>
          <option value="20-40">20–40</option>
          <option value="40+">40+</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          What&apos;s the messiest workflow on your plate right now?
        </label>
        <textarea
          id="message" name="message" rows={4} required
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none"
          placeholder='Example: "We spend 3 hours every Monday re-entering data from PDFs into QuickBooks"'
        />
      </div>
      <button
        type="submit"
        className="group w-full rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-foreground/90"
      >
        Get Your Free Workflow Audit
        <span className="ml-1.5 inline-block transition-transform group-hover:translate-x-0.5">&rarr;</span>
      </button>
      <p className="text-xs text-center text-muted-light">
        No pitch. We&apos;ll map your workflow and show you exactly what to automate first.
      </p>
    </form>
  );
}
