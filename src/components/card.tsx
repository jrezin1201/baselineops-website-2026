import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-card p-6 transition-all hover:shadow-md hover:border-accent/20 ${className}`}
    >
      {children}
    </div>
  );
}
