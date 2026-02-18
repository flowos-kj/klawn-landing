"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { NAV_ITEMS } from "@/lib/constants";

const PAGE_LINKS = [
  { name: "팀장님용", link: "/team" },
  { name: "개발자용", link: "/agent" },
];

export function Navbar() {
  return (
    <FloatingNav
      navItems={[...NAV_ITEMS, ...PAGE_LINKS]}
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
