"use client";

import {
  ShieldCheck,
  Scales,
  ListChecks,
  Key,
} from "@phosphor-icons/react";
import { TRUST_ITEMS } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  pipa: <ShieldCheck weight="thin" className="h-5 w-5 text-copper" />,
  "ai-act": <Scales weight="thin" className="h-5 w-5 text-copper" />,
  audit: <ListChecks weight="thin" className="h-5 w-5 text-copper" />,
  sso: <Key weight="thin" className="h-5 w-5 text-copper" />,
};

export function TrustBar() {
  return (
    <section className="border-b border-border bg-white py-5 sm:py-6">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 px-4 sm:gap-10 sm:px-6">
        {TRUST_ITEMS.map((item) => (
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
