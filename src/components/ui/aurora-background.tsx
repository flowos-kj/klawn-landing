"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";

interface AuroraBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function AuroraBackground({ children, className }: AuroraBackgroundProps) {
  return (
    <div className={cn("relative w-full overflow-hidden bg-navy-dark", className)}>
      {/* Primary aurora blob — large, slow drift */}
      <motion.div
        className="pointer-events-none absolute -left-[20%] -top-[10%] h-[700px] w-[140%] rounded-full opacity-30 blur-[100px]"
        style={{
          background:
            "linear-gradient(135deg, #2D3561 0%, #C4875B 35%, #3D4578 60%, #D49B72 85%, #2D3561 100%)",
        }}
        animate={{
          x: [0, 80, -40, 60, 0],
          y: [0, -40, 30, -20, 0],
          scale: [1, 1.08, 0.95, 1.05, 1],
          rotate: [0, 5, -3, 4, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary blob — bottom, opposite movement */}
      <motion.div
        className="pointer-events-none absolute -bottom-[15%] -right-[10%] h-[500px] w-[120%] rounded-full opacity-25 blur-[120px]"
        style={{
          background:
            "linear-gradient(225deg, #D49B72 0%, #2D3561 40%, #C4875B 80%, #3D4578 100%)",
        }}
        animate={{
          x: [0, -60, 40, -30, 0],
          y: [0, 30, -20, 15, 0],
          scale: [1, 0.93, 1.06, 0.97, 1],
          rotate: [0, -4, 6, -2, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Accent copper glow — center, faster pulse */}
      <motion.div
        className="pointer-events-none absolute left-[30%] top-[25%] h-[350px] w-[400px] rounded-full opacity-20 blur-[90px]"
        style={{
          background: "radial-gradient(circle, #C4875B 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 50, -30, 40, 0],
          y: [0, -25, 20, -15, 0],
          scale: [1, 1.15, 0.9, 1.1, 1],
          opacity: [0.2, 0.3, 0.15, 0.28, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small navy highlight — top right, fast drift */}
      <motion.div
        className="pointer-events-none absolute right-[10%] top-[15%] h-[250px] w-[300px] rounded-full opacity-15 blur-[80px]"
        style={{
          background: "radial-gradient(circle, #3D4578 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -40, 60, -20, 0],
          y: [0, 30, -40, 20, 0],
          scale: [1, 1.1, 0.85, 1.05, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle dot overlay for texture */}
      <div
        className="pointer-events-none absolute inset-0 select-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {children}
    </div>
  );
}
