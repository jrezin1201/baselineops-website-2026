import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent-dark shadow-sm shadow-accent/20",
    secondary: "border border-border-strong text-foreground hover:bg-card-hover",
    dark: "bg-foreground text-white hover:bg-foreground/90",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">
        &rarr;
      </span>
    </Link>
  );
}
