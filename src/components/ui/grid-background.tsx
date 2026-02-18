"use client";

import { cn } from "@/lib/cn";

interface GridBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function GridBackground({ children, className }: GridBackgroundProps) {
  return (
    <div className={cn("relative w-full overflow-hidden bg-navy-dark", className)}>
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 select-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(196,135,91,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Radial fade from center */}
      <div
        className="pointer-events-none absolute inset-0 select-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(45,53,97,0) 0%, #1E2249 100%)",
        }}
      />
      {/* Copper glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 select-none rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #C4875B 0%, transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}
