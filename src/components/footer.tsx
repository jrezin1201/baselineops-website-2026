import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Baseline<span className="text-accent">Ops</span>
            </Link>
            <p className="mt-3 text-sm text-muted max-w-xs">
              Manual processes don&apos;t scale. Systems do.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/services" className="text-sm text-muted hover:text-foreground transition-colors">Services</Link></li>
              <li><Link href="/case-studies" className="text-sm text-muted hover:text-foreground transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted">Workflow Automation</li>
              <li className="text-sm text-muted">Data Processing</li>
              <li className="text-sm text-muted">Custom Internal Tools</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Get Started</h4>
            <p className="text-sm text-muted mb-3">
              See exactly what we&apos;d automate first.
            </p>
            <Link
              href="/#contact"
              className="inline-block rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-white hover:bg-foreground/90 transition-colors"
            >
              Free Workflow Audit &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <span>&copy; {new Date().getFullYear()} Baseline Ops. All rights reserved.</span>
          <span className="text-muted-light">If it requires copy-paste, it&apos;s broken.</span>
        </div>
      </div>
    </footer>
  );
}
