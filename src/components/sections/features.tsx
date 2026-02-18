"use client";

import {
  Brain,
  Fingerprint,
  LockKey,
  ClockCounterClockwise,
  Plugs,
  Layout,
} from "@phosphor-icons/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FEATURES } from "@/lib/constants";

const ICONS = [
  <Brain key="brain" weight="thin" className="h-7 w-7 text-copper" />,
  <Fingerprint key="fp" weight="thin" className="h-7 w-7 text-copper" />,
  <LockKey key="lock" weight="thin" className="h-7 w-7 text-copper" />,
  <ClockCounterClockwise key="clock" weight="thin" className="h-7 w-7 text-copper" />,
  <Plugs key="plugs" weight="thin" className="h-7 w-7 text-copper" />,
  <Layout key="layout" weight="thin" className="h-7 w-7 text-copper" />,
];

export function Features() {
  return (
    <section id="features" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-4 text-center text-2xl font-bold text-navy-dark sm:text-3xl">
          핵심 기능
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-muted sm:mb-16 sm:text-base">
          에이전트부터 감사 추적까지. 엔터프라이즈에 필요한 모든 것을 갖추고 있습니다.
        </p>
        <BentoGrid>
          {FEATURES.map((feature, idx) => (
            <BentoGridItem
              key={feature.title}
              title={feature.title}
              description={feature.description}
              bullets={feature.bullets}
              icon={ICONS[idx]}
              className={feature.large ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
