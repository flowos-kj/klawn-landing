"use client";

import {
  FeatureBrainAi,
  FeatureFingerprintPii,
  FeatureLockAccess,
  FeatureClockAudit,
  FeaturePlugsErp,
  FeatureLayoutDashboard,
  FeatureCalculator,
  FeatureMegaphone,
  FeatureHandshake,
  FeatureGear,
  FeatureHeadset,
  FeatureUsers,
  FeatureShield,
  KlawnCrab,
} from "@/components/svg-animations";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import type { FeaturesContent } from "@/lib/content/types";

const ICON_MAP: Record<string, React.ReactNode> = {
  brain: <FeatureBrainAi className="h-40 w-40" />,
  fingerprint: <FeatureFingerprintPii className="h-40 w-40" />,
  lock: <FeatureLockAccess className="h-40 w-40" />,
  clock: <FeatureClockAudit className="h-40 w-40" />,
  plugs: <FeaturePlugsErp className="h-40 w-40" />,
  layout: <FeatureLayoutDashboard className="h-40 w-40" />,
  calculator: <FeatureCalculator className="h-40 w-40" />,
  megaphone: <FeatureMegaphone className="h-40 w-40" />,
  handshake: <FeatureHandshake className="h-40 w-40" />,
  gear: <FeatureGear className="h-40 w-40" />,
  headset: <FeatureHeadset className="h-40 w-40" />,
  users: <FeatureUsers className="h-40 w-40" />,
  shield: <FeatureShield className="h-40 w-40" />,
};

export function Features({ content }: { content: FeaturesContent }) {
  return (
    <section id="features" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Crab mascot + heading */}
        <div className="mb-12 flex flex-col items-center sm:mb-16">
          <KlawnCrab className="mb-4 h-24 w-auto sm:h-32" />
          <h2 className="mb-4 text-center text-2xl font-bold text-navy-dark sm:text-3xl">
            {content.heading}
          </h2>
          <p className="max-w-2xl text-center text-sm text-muted sm:text-base">
            {content.subheading}
          </p>
        </div>
        <BentoGrid>
          {content.items.map((feature) => (
            <BentoGridItem
              key={feature.title}
              title={feature.title}
              description={feature.description}
              bullets={feature.bullets}
              icon={ICON_MAP[feature.iconKey]}
              wide={feature.large}
              className={feature.large ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
