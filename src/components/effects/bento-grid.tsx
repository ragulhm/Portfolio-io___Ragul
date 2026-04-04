"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(280px,auto)]",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3;
}

export function BentoCard({ children, className, colSpan = 1 }: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl glass-card p-6 overflow-hidden transition-all duration-500",
        "hover:scale-[1.02] hover:-translate-y-1",
        colSpan === 2 && "md:col-span-2",
        colSpan === 3 && "md:col-span-2 lg:col-span-3",
        className
      )}
    >
      {/* Spotlight gradient on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
