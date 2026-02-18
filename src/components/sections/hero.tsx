"use client";

import { useState } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {
  ClipboardText,
  GithubLogo,
  Terminal,
  CheckCircle,
} from "@phosphor-icons/react";

export function Hero() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText("npx create-klawn");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

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
            보안 경계 안에서 자유롭게 동작하는 AI 에이전트.
            <br />
            PIPA 준수, 감사 추적, 접근 제어까지 — 한 줄이면 시작됩니다.
          </p>

          <div className="mx-auto mt-10 max-w-sm sm:mt-12 sm:max-w-md">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 backdrop-blur sm:px-6 sm:py-4">
              <Terminal weight="light" className="h-5 w-5 shrink-0 text-white/40 sm:h-6 sm:w-6" />
              <code className="min-w-0 flex-1 truncate text-left font-mono text-sm text-white/90 sm:text-base">
                npx create-klawn
              </code>
              <button
                type="button"
                onClick={handleCopy}
                className="shrink-0 text-white/40 transition-colors hover:text-white/80"
                aria-label="복사"
              >
                {copied ? (
                  <CheckCircle weight="light" className="h-5 w-5 text-green-400 sm:h-6 sm:w-6" />
                ) : (
                  <ClipboardText weight="light" className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="#cta"
              className="w-full rounded-full bg-copper px-8 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-copper-light sm:w-auto sm:text-lg"
            >
              시작하기
            </a>
            <a
              href="https://github.com/flowos-kj/klawn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white sm:w-auto sm:text-lg"
            >
              <GithubLogo weight="light" className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
