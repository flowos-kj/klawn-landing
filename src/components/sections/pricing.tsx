"use client";

import {
  CheckCircle,
  X,
  Tag,
  Users,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import type { PricingContent } from "@/lib/content/types";

export function Pricing({ content }: { content: PricingContent }) {
  return (
    <section className="bg-navy-dark py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-4 flex justify-center">
          <span className="rounded-full border border-copper/30 bg-copper/10 px-4 py-1 text-xs font-medium text-copper-light">
            {content.badge}
          </span>
        </div>
        <h2 className="mb-4 text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          {content.heading}
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-sm text-white/60 sm:mb-12 sm:text-base">
          {content.subheading}
        </p>

        {/* Pricing card */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          {/* Price header */}
          <div className="border-b border-white/10 p-6 text-center sm:p-8">
            <div className="mb-1 text-sm text-white/50">
              {content.monthlyWageNumber}
            </div>
            <div className="text-4xl font-bold text-white sm:text-5xl">
              {content.monthlyWage}
            </div>
            <div className="mt-2 text-xs text-white/40">
              {content.setupNote} · {content.expenseNote}
            </div>
          </div>

          {/* Benefits */}
          <div className="border-b border-white/10 p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {content.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 text-sm text-white/80"
                >
                  <X
                    weight="bold"
                    className="h-4 w-4 shrink-0 text-copper-light"
                  />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Onboarding */}
          <div className="border-b border-white/10 p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <CheckCircle
                weight="fill"
                className="mt-0.5 h-5 w-5 shrink-0 text-copper-light"
              />
              <div>
                <div className="font-semibold text-white">
                  {content.onboarding}
                </div>
                <div className="mt-1 text-sm text-white/60">
                  {content.onboardingDetail}
                </div>
              </div>
            </div>
          </div>

          {/* Promotions */}
          <div className="p-6 sm:p-8">
            <div className="space-y-4">
              {/* First month promo */}
              <div className="flex items-start gap-3 rounded-xl border border-copper/20 bg-copper/5 p-4">
                <Tag
                  weight="fill"
                  className="mt-0.5 h-5 w-5 shrink-0 text-copper-light"
                />
                <div>
                  <div className="font-semibold text-copper-light">
                    {content.promoLabel}
                  </div>
                  <div className="mt-1 text-sm text-white/60">
                    첫 달은{" "}
                    <span className="font-semibold text-white">
                      무료
                    </span>
                    로 시작하세요
                  </div>
                </div>
              </div>

              {/* Referral */}
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <Users
                  weight="fill"
                  className="mt-0.5 h-5 w-5 shrink-0 text-white/50"
                />
                <div>
                  <div className="font-semibold text-white/90">
                    {content.referralLabel}
                  </div>
                  <div className="mt-1 text-sm text-white/60">
                    {content.referralDetail}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 text-center">
              <a
                href={content.ctaHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-copper px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-copper-light"
              >
                <EnvelopeSimple weight="light" className="h-5 w-5" />
                {content.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
