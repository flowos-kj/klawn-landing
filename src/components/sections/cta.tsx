"use client";

import { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
  Terminal,
  ClipboardText,
  CheckCircle,
  GithubLogo,
} from "@phosphor-icons/react";

export function CTA() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText("npx create-klawn");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-navy-dark py-20 sm:py-32"
    >
      <BackgroundBeams />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          지금 시작하세요
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm text-white/60 sm:mb-10 sm:max-w-xl sm:text-base">
          한 줄 명령어로 라이선스 인증부터 Docker 배포까지.
          7단계 마법사가 안내합니다.
        </p>

        <div className="mx-auto mb-6 max-w-xs sm:mb-8 sm:max-w-md">
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur sm:gap-3 sm:px-5 sm:py-3.5">
            <Terminal weight="light" className="h-4 w-4 shrink-0 text-white/40 sm:h-5 sm:w-5" />
            <code className="min-w-0 flex-1 truncate text-left font-mono text-xs text-white/90 sm:text-sm">
              npx create-klawn
            </code>
            <button
              type="button"
              onClick={handleCopy}
              className="shrink-0 text-white/40 transition-colors hover:text-white/80"
              aria-label="복사"
            >
              {copied ? (
                <CheckCircle weight="light" className="h-4 w-4 text-green-400 sm:h-5 sm:w-5" />
              ) : (
                <ClipboardText weight="light" className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <a
            href="https://github.com/flowos-kj/klawn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-copper px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-copper-light sm:w-auto"
          >
            <GithubLogo weight="light" className="h-4 w-4" />
            GitHub에서 보기
          </a>
          <a
            href="mailto:anton@flowos.work"
            className="w-full rounded-full border border-white/20 px-6 py-2.5 text-center text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white sm:w-auto"
          >
            문의하기
          </a>
        </div>
      </div>
    </section>
  );
}
