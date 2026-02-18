"use client";

import {
  Cube,
  ShareNetwork,
  Cloud,
  Buildings,
  Wrench,
} from "@phosphor-icons/react";
import type { DeploymentContent } from "@/lib/content/types";

const ICON_MAP: Record<string, React.ReactNode> = {
  cube: <Cube weight="thin" className="h-6 w-6 text-copper" />,
  network: <ShareNetwork weight="thin" className="h-6 w-6 text-copper" />,
  cloud: <Cloud weight="thin" className="h-6 w-6 text-copper" />,
  building: <Buildings weight="thin" className="h-6 w-6 text-copper" />,
  wrench: <Wrench weight="thin" className="h-6 w-6 text-copper" />,
};

export function Deployment({ content }: { content: DeploymentContent }) {
  return (
    <section id="deployment" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-4 text-center text-2xl font-bold text-navy-dark sm:text-3xl">
          {content.heading}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-muted sm:mb-16 sm:text-base">
          {content.subheading}
        </p>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {content.options.map((opt) => (
            <div
              key={opt.title}
              className="rounded-xl border border-border bg-white p-4 sm:p-6"
            >
              <div className="mb-3 sm:mb-4">
                {ICON_MAP[opt.iconKey]}
              </div>
              <h3 className="mb-2 text-base font-semibold text-navy-dark sm:text-lg">
                {opt.title}
              </h3>
              <p className="mb-3 text-xs text-muted sm:mb-4 sm:text-sm">
                {opt.description}
              </p>
              <code className="block overflow-x-auto rounded-lg bg-navy-dark px-3 py-2 font-mono text-[10px] text-white/80 sm:px-4 sm:py-2.5 sm:text-xs">
                {opt.command}
              </code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
