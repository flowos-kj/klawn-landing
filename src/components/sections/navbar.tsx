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
          className="block whitespace-nowrap rounded-full bg-copper px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-copper-light md:py-1.5"
        >
          도입 문의하기
        </a>
      }
    />
  );
}
