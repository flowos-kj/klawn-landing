"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { NAV_ITEMS } from "@/lib/constants";

export function Navbar() {
  return (
    <FloatingNav
      navItems={NAV_ITEMS}
      cta={
        <a
          href="#cta"
          className="rounded-full bg-copper px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-copper-light"
        >
          시작하기
        </a>
      }
    />
  );
}
