"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (current < 100) {
      setVisible(true);
    } else if (current < lastScrollY) {
      setVisible(true);
    } else {
      setVisible(false);
      setMenuOpen(false);
    }
    setLastScrollY(current);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed left-1/2 top-4 z-[5000] -translate-x-1/2",
          className,
        )}
      >
        {/* Main bar */}
        <nav className="flex items-center gap-6 rounded-full border border-border bg-white/90 px-6 py-3 shadow-lg backdrop-blur-md sm:px-8">
          <a href="/" className="flex-shrink-0 font-sans text-2xl font-bold text-navy">
            Klawn
          </a>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-6 md:flex">
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
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-8 w-8 items-center justify-center md:hidden"
            aria-label="메뉴 열기"
          >
            <div className="relative flex h-5 w-5 flex-col items-center justify-center">
              <span
                className={cn(
                  "absolute block h-0.5 w-5 rounded-full bg-navy transition-all duration-200",
                  menuOpen ? "rotate-45" : "-translate-y-1.5",
                )}
              />
              <span
                className={cn(
                  "absolute block h-0.5 w-5 rounded-full bg-navy transition-all duration-200",
                  menuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute block h-0.5 w-5 rounded-full bg-navy transition-all duration-200",
                  menuOpen ? "-rotate-45" : "translate-y-1.5",
                )}
              />
            </div>
          </button>
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="mt-2 flex flex-col gap-1 rounded-2xl border border-border bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md md:hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-navy/5 hover:text-copper"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="mt-1">
                {cta}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
