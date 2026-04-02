"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Baseline<span className="text-accent">Ops</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/services"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Services
          </Link>
          <Link
            href="/case-studies"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Example Engagements
          </Link>
          <Link
            href="/about"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="group rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-white transition-all hover:bg-foreground/90"
          >
            Get Your Automation Plan
            <span className="ml-1.5 inline-block transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          </Link>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/services" className="text-sm text-muted hover:text-foreground" onClick={() => setMobileOpen(false)}>Services</Link>
            <Link href="/case-studies" className="text-sm text-muted hover:text-foreground" onClick={() => setMobileOpen(false)}>Example Engagements</Link>
            <Link href="/about" className="text-sm text-muted hover:text-foreground" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/#contact" className="rounded-lg bg-foreground px-4 py-2 text-center text-sm font-medium text-white" onClick={() => setMobileOpen(false)}>
              Get Your Automation Plan &rarr;
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
