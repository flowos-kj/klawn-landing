"use client";

import { Cube, ShareNetwork, Cloud } from "@phosphor-icons/react";
import { DEPLOYMENT_OPTIONS } from "@/lib/constants";

const ICONS = [
  <Cube key="docker" weight="thin" className="h-6 w-6 text-copper" />,
  <ShareNetwork key="k8s" weight="thin" className="h-6 w-6 text-copper" />,
  <Cloud key="cdk" weight="thin" className="h-6 w-6 text-copper" />,
];

export function Deployment() {
  return (
    <section id="deployment" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-4 text-center text-2xl font-bold text-navy-dark sm:text-3xl">
          배포 옵션
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-muted sm:mb-16 sm:text-base">
          단일 서버부터 클라우드 네이티브까지. 환경에 맞는 배포 방식을 선택하세요.
        </p>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {DEPLOYMENT_OPTIONS.map((opt, idx) => (
            <div
              key={opt.title}
              className="rounded-xl border border-border bg-white p-4 sm:p-6"
            >
              <div className="mb-3 sm:mb-4">{ICONS[idx]}</div>
              <h3 className="mb-2 text-base font-semibold text-navy-dark sm:text-lg">
                {opt.title}
              </h3>
              <p className="mb-3 text-xs text-muted sm:mb-4 sm:text-sm">{opt.description}</p>
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
