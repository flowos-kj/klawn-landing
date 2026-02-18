"use client";

import { cn } from "@/lib/cn";
import { motion } from "motion/react";

// 1. Dot Grid
export function DotGrid({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0", className)}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(196,135,91,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, transparent 0%, #1E2249 100%)",
        }}
      />
    </div>
  );
}

// 2. Line Grid
export function LineGrid({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0", className)}>
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #C4875B 1px, transparent 1px), linear-gradient(to bottom, #C4875B 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 0%, #1E2249 100%)",
        }}
      />
    </div>
  );
}

// 3. Aurora
export function Aurora({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <motion.div
        className="absolute -left-1/4 top-0 h-[600px] w-[150%] rounded-full opacity-30 blur-[100px]"
        style={{
          background:
            "linear-gradient(135deg, #2D3561 0%, #C4875B 40%, #3D4578 70%, #D49B72 100%)",
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -20, 10, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-1/4 bottom-0 h-[400px] w-[120%] rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "linear-gradient(225deg, #C4875B 0%, #2D3561 50%, #D49B72 100%)",
        }}
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 15, -10, 0],
          scale: [1, 0.97, 1.03, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// 4. Particles / Stars
export function Particles({ className }: { className?: string }) {
  const dots = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-copper"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
          }}
          animate={{ opacity: [0.1, 0.6, 0.1] }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, transparent 0%, #1E2249 80%)",
        }}
      />
    </div>
  );
}

// 5. Diagonal Lines
export function DiagonalLines({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0", className)}>
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #C4875B 0, #C4875B 1px, transparent 0, transparent 40px)",
        }}
      />
      <div
        className="absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[100px]"
        style={{
          background: "radial-gradient(circle, #C4875B 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, #1E2249 100%)",
        }}
      />
    </div>
  );
}

// 6. Gradient Orbs
export function GradientOrbs({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <motion.div
        className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full opacity-25 blur-[80px]"
        style={{ background: "#C4875B" }}
        animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[15%] top-[30%] h-96 w-96 rounded-full opacity-15 blur-[100px]"
        style={{ background: "#3D4578" }}
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[30%] h-64 w-64 rounded-full opacity-20 blur-[90px]"
        style={{ background: "#D49B72" }}
        animate={{ x: [0, 40, -20, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export const BACKGROUNDS = [
  { name: "도트", component: DotGrid },
  { name: "그리드", component: LineGrid },
  { name: "오로라", component: Aurora },
  { name: "파티클", component: Particles },
  { name: "대각선", component: DiagonalLines },
  { name: "오브", component: GradientOrbs },
] as const;
