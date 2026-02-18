"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { EnvelopeSimple } from "@phosphor-icons/react";
import type { CTAContent } from "@/lib/content/types";

export function CTA({ content }: { content: CTAContent }) {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-navy-dark py-20 sm:py-32"
    >
      <BackgroundBeams />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          {content.heading}
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm text-white/60 sm:mb-10 sm:max-w-xl sm:text-base">
          {content.subheading}
        </p>

        <a
          href={content.ctaHref}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-copper px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-copper-light"
        >
          <EnvelopeSimple weight="light" className="h-4 w-4" />
          {content.ctaLabel}
        </a>
      </div>
    </section>
  );
}
