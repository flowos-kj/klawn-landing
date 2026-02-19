"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { EnvelopeSimple } from "@phosphor-icons/react";
import Image from "next/image";
import type { HeroContent } from "@/lib/content/types";

export function Hero({ content }: { content: HeroContent }) {
  return (
    <AuroraBackground>
      <div className="relative z-10 flex min-h-svh flex-col items-center justify-center px-4 py-20 sm:px-6">
        <div className="w-full max-w-4xl text-center">
          {/* Brand logo */}
          <div className="mb-6 flex justify-center sm:mb-8">
            <Image
              src="/klawn.png"
              alt="Klawn"
              width={120}
              height={80}
              className="h-20 w-auto"
            />
          </div>

          <TextGenerateEffect
            words={content.headline}
            className="text-3xl leading-[1.25] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            duration={0.5}
            filter={false}
          />
          <TextGenerateEffect
            words={content.subheadline}
            className="mt-1 text-3xl leading-[1.25] tracking-tight text-copper-light sm:text-5xl md:text-6xl lg:text-7xl"
            duration={0.5}
            filter={false}
          />

          <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-white/70 sm:mt-10 sm:max-w-xl sm:text-lg md:text-xl">
            {content.body}
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:mt-12 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href={content.ctaHref}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-copper px-8 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-copper-light sm:w-auto sm:text-lg"
            >
              <EnvelopeSimple weight="light" className="h-5 w-5" />
              {content.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
