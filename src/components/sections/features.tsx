"use client";

import {
  Brain,
  Fingerprint,
  LockKey,
  ClockCounterClockwise,
  Plugs,
  Layout,
  Calculator,
  Megaphone,
  Handshake,
  Gear,
  Headset,
  UsersThree,
  ShieldCheck,
} from "@phosphor-icons/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import type { FeaturesContent } from "@/lib/content/types";

const ICON_MAP: Record<string, React.ReactNode> = {
  brain: <Brain weight="thin" className="h-7 w-7 text-copper" />,
  fingerprint: <Fingerprint weight="thin" className="h-7 w-7 text-copper" />,
  lock: <LockKey weight="thin" className="h-7 w-7 text-copper" />,
  clock: <ClockCounterClockwise weight="thin" className="h-7 w-7 text-copper" />,
  plugs: <Plugs weight="thin" className="h-7 w-7 text-copper" />,
  layout: <Layout weight="thin" className="h-7 w-7 text-copper" />,
  calculator: <Calculator weight="thin" className="h-7 w-7 text-copper" />,
  megaphone: <Megaphone weight="thin" className="h-7 w-7 text-copper" />,
  handshake: <Handshake weight="thin" className="h-7 w-7 text-copper" />,
  gear: <Gear weight="thin" className="h-7 w-7 text-copper" />,
  headset: <Headset weight="thin" className="h-7 w-7 text-copper" />,
  users: <UsersThree weight="thin" className="h-7 w-7 text-copper" />,
  shield: <ShieldCheck weight="thin" className="h-7 w-7 text-copper" />,
};

export function Features({ content }: { content: FeaturesContent }) {
  return (
    <section id="features" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-4 text-center text-2xl font-bold text-navy-dark sm:text-3xl">
          {content.heading}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-muted sm:mb-16 sm:text-base">
          {content.subheading}
        </p>
        <BentoGrid>
          {content.items.map((feature) => (
            <BentoGridItem
              key={feature.title}
              title={feature.title}
              description={feature.description}
              bullets={feature.bullets}
              icon={ICON_MAP[feature.iconKey]}
              className={feature.large ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
