"use client";

import {
  ShieldCheck,
  Scales,
  ListChecks,
  Key,
  Clock,
  SmileyMeh,
  Brain,
  Wrench,
} from "@phosphor-icons/react";
import type { TrustItem } from "@/lib/content/types";

const ICONS: Record<string, React.ReactNode> = {
  pipa: <ShieldCheck weight="thin" className="h-5 w-5 text-copper" />,
  "ai-act": <Scales weight="thin" className="h-5 w-5 text-copper" />,
  audit: <ListChecks weight="thin" className="h-5 w-5 text-copper" />,
  sso: <Key weight="thin" className="h-5 w-5 text-copper" />,
  "always-on": <Clock weight="thin" className="h-5 w-5 text-copper" />,
  "no-complaints": <SmileyMeh weight="thin" className="h-5 w-5 text-copper" />,
  memory: <Brain weight="thin" className="h-5 w-5 text-copper" />,
  support: <Wrench weight="thin" className="h-5 w-5 text-copper" />,
};

export function TrustBar({ items }: { items: TrustItem[] }) {
  return (
    <section className="border-b border-border bg-white py-5 sm:py-6">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 px-4 sm:gap-10 sm:px-6">
        {items.map((item) => (
          <div
            key={item.key}
            className="flex items-center gap-2 text-xs font-medium text-navy sm:text-sm"
          >
            {ICONS[item.key]}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
