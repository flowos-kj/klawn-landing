"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/cn";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
  cta?: React.ReactNode;
}

export function FloatingNav({ navItems, className, cta }: FloatingNavProps) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (current < 100) {
      setVisible(true);
    } else if (current < lastScrollY) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    setLastScrollY(current);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-4 z-[5000] mx-auto flex max-w-fit items-center justify-center gap-6 rounded-full border border-border bg-white/90 px-8 py-3 shadow-lg backdrop-blur-md",
          className,
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="flex items-center gap-1.5 text-sm font-medium text-navy transition-colors hover:text-copper"
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}
        {cta}
      </motion.nav>
    </AnimatePresence>
  );
}
