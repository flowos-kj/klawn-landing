"use client";

import { ShieldCheck, Scales, Eye } from "@phosphor-icons/react";
import {
  SecurityEyeMasking,
  SecurityShieldRbac,
} from "@/components/svg-animations";
import { PII_DEMO, RBAC_TIERS } from "@/lib/constants";
import type { SecurityContent } from "@/lib/content/types";

export function Security({ content }: { content: SecurityContent }) {
  const rbacLabels = content.rbacLabels ?? RBAC_TIERS;

  return (
    <section id="security" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-4 text-center text-2xl font-bold text-navy-dark sm:text-3xl">
          {content.heading}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-muted sm:mb-16 sm:text-base">
          {content.subheading}
        </p>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* PII masking demo */}
          <div className="rounded-xl border border-border bg-surface p-4 sm:p-6">
            <div className="mb-5 flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4">
              <SecurityEyeMasking className="h-28 w-28 shrink-0" />
              <div>
                <h3 className="text-center text-lg font-semibold text-navy-dark sm:text-left">
                  PII 마스킹
                </h3>
                <p className="mt-1 text-center text-xs text-muted sm:text-left sm:text-sm">
                  LLM에 전달되기 전 자동 마스킹, 응답 시 복원
                </p>
              </div>
            </div>
            <div className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
              <div>
                <div className="mb-2 text-[10px] font-medium uppercase tracking-wider text-muted sm:text-xs">
                  원본
                </div>
                <pre className="overflow-x-auto rounded-lg bg-navy-dark p-3 font-mono text-[10px] leading-relaxed text-white/80 sm:p-4 sm:text-xs">
                  {PII_DEMO.before}
                </pre>
              </div>
              <div>
                <div className="mb-2 text-[10px] font-medium uppercase tracking-wider text-muted sm:text-xs">
                  마스킹 후
                </div>
                <pre className="overflow-x-auto rounded-lg bg-navy-dark p-3 font-mono text-[10px] leading-relaxed text-copper-light sm:p-4 sm:text-xs">
                  {PII_DEMO.after}
                </pre>
              </div>
            </div>
          </div>

          {/* RBAC tiers */}
          <div className="rounded-xl border border-border bg-surface p-4 sm:p-6">
            <div className="mb-5 flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4">
              <SecurityShieldRbac className="h-28 w-28 shrink-0" />
              <div>
                <h3 className="text-center text-lg font-semibold text-navy-dark sm:text-left">
                  6단계 접근 제어
                </h3>
                <p className="mt-1 text-center text-xs text-muted sm:text-left sm:text-sm">
                  RBAC + ABAC + SSO. 도구별 실행 권한과 데이터 분류 등급 관리.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              {rbacLabels.map((tier, idx) => (
                <div key={tier} className="flex items-center gap-2 sm:gap-3">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-navy to-copper"
                    style={{
                      width: `${100 - idx * 14}%`,
                      opacity: 1 - idx * 0.12,
                    }}
                  />
                  <span className="shrink-0 font-mono text-[10px] text-navy sm:text-xs">
                    {tier}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4">
          {[
            { icon: ShieldCheck, label: "PIPA (개인정보보호법)" },
            { icon: Scales, label: "AI 기본법" },
            { icon: Eye, label: "AI 워터마킹" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-navy sm:px-4 sm:py-2 sm:text-sm"
            >
              <Icon weight="thin" className="h-4 w-4 text-copper" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
