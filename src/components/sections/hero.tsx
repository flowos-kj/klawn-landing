"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { EnvelopeSimple } from "@phosphor-icons/react";

export function Hero() {
  return (
    <AuroraBackground>
      <div className="relative z-10 flex min-h-svh flex-col items-center justify-center px-4 py-20 sm:px-6">
        <div className="w-full max-w-4xl text-center">
          {/* Brand name */}
          <h1 className="mb-6 font-mono text-lg font-bold uppercase tracking-[0.3em] text-copper-light sm:mb-8 sm:text-xl md:text-2xl">
            Klawn
          </h1>

          <TextGenerateEffect
            words="기업을 위한"
            className="text-3xl leading-[1.25] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            duration={0.5}
            filter={false}
          />
          <TextGenerateEffect
            words="AI 에이전트 플랫폼"
            className="mt-1 text-3xl leading-[1.25] tracking-tight text-copper-light sm:text-5xl md:text-6xl lg:text-7xl"
            duration={0.5}
            filter={false}
          />

          <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-white/70 sm:mt-10 sm:max-w-xl sm:text-lg md:text-xl">
            OpenClaw만큼 쉽게, 엔터프라이즈에 맞게.
            <br />
            PIPA 준수, 감사 추적, 접근 제어까지 — 바로 도입하세요.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:mt-12 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="mailto:anton@flowos.work"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-copper px-8 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-copper-light sm:w-auto sm:text-lg"
            >
              <EnvelopeSimple weight="light" className="h-5 w-5" />
              도입 문의하기
            </a>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
