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
  pipa: <ShieldCheck weight="thin" className="h-7 w-7 text-copper sm:h-8 sm:w-8" />,
  "ai-act": <Scales weight="thin" className="h-7 w-7 text-copper sm:h-8 sm:w-8" />,
  audit: <ListChecks weight="thin" className="h-7 w-7 text-copper sm:h-8 sm:w-8" />,
  sso: <Key weight="thin" className="h-7 w-7 text-copper sm:h-8 sm:w-8" />,
  "always-on": <Clock weight="thin" className="h-7 w-7 text-copper sm:h-8 sm:w-8" />,
  "no-complaints": <SmileyMeh weight="thin" className="h-7 w-7 text-copper sm:h-8 sm:w-8" />,
  memory: <Brain weight="thin" className="h-7 w-7 text-copper sm:h-8 sm:w-8" />,
  support: <Wrench weight="thin" className="h-7 w-7 text-copper sm:h-8 sm:w-8" />,
};

export function TrustBar({ items }: { items: TrustItem[] }) {
  return (
    <section className="border-b border-border bg-white py-6 sm:py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-4 sm:gap-12 sm:px-6">
        {items.map((item) => (
          <div
            key={item.key}
            className="flex items-center gap-2.5 text-sm font-medium text-navy sm:text-base"
          >
            {ICONS[item.key]}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
