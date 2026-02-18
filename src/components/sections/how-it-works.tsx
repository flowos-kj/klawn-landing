"use client";

import {
  Terminal,
  CheckCircle,
  CircleNotch,
  Buildings,
  Key,
  ChatDots,
  UsersThree,
  MagnifyingGlass,
  Rocket,
} from "@phosphor-icons/react";

const WIZARD_STEPS = [
  {
    step: "0/7",
    icon: MagnifyingGlass,
    title: "사전 점검",
    subtitle: "Prerequisites",
    lines: [
      { prefix: "check", text: "Docker v27.4.0" },
      { prefix: "check", text: "Docker Compose v2.31.0" },
      { prefix: "check", text: "디스크 여유: 48.2 GB" },
      { prefix: "check", text: "포트 8080 사용 가능" },
    ],
  },
  {
    step: "1/7",
    icon: Buildings,
    title: "조직 정보",
    subtitle: "Organization",
    lines: [
      { prefix: "input", text: '회사명: "주식회사 예시"' },
      { prefix: "input", text: "업종: 제조업" },
      { prefix: "input", text: "언어: 한국어" },
      { prefix: "input", text: "배포: Docker Compose" },
    ],
  },
  {
    step: "2/7",
    icon: Key,
    title: "API 키 & LLM",
    subtitle: "API Keys & LLM",
    lines: [
      { prefix: "input", text: "Anthropic API: sk-ant-••••" },
      { prefix: "select", text: "모델: Claude Opus 4.6" },
      { prefix: "check", text: "페일오버: Gemini Flash" },
    ],
  },
  {
    step: "3/7",
    icon: ChatDots,
    title: "채널 & 커넥터",
    subtitle: "Channels & Connectors",
    lines: [
      { prefix: "check", text: "Slack (Socket Mode)" },
      { prefix: "check", text: "JANDI (Webhook)" },
      { prefix: "check", text: "더존 ERP 연동" },
      { prefix: "check", text: "위하고 그룹웨어" },
    ],
  },
  {
    step: "4/7",
    icon: UsersThree,
    title: "팀 & 관리자",
    subtitle: "Teams & Admin",
    lines: [
      { prefix: "input", text: "관리자: admin@example.co.kr" },
      { prefix: "input", text: "에이전트: 예시 AI 어시스턴트" },
      { prefix: "select", text: "성격: Professional" },
    ],
  },
  {
    step: "5/7",
    icon: Terminal,
    title: "검토 & 생성",
    subtitle: "Review & Generate",
    lines: [
      { prefix: "file", text: ".env" },
      { prefix: "file", text: "enterprise.yaml" },
      { prefix: "file", text: "docker-compose.yml" },
      { prefix: "file", text: "QUICKSTART.md" },
    ],
  },
  {
    step: "6/7",
    icon: Rocket,
    title: "배포 & 검증",
    subtitle: "Deploy & Verify",
    lines: [
      { prefix: "spinner", text: "[1/5] Docker 이미지 Pull" },
      { prefix: "check", text: "[2/5] 서비스 시작" },
      { prefix: "check", text: "[3/5] 헬스 체크 통과" },
      { prefix: "check", text: "[4/5] 통합 검증 완료" },
      { prefix: "done", text: "Klawn is ready!" },
    ],
  },
];

function LinePrefix({ type }: { type: string }) {
  switch (type) {
    case "check":
      return <CheckCircle weight="fill" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-400" />;
    case "spinner":
      return <CircleNotch weight="bold" className="mt-0.5 h-3.5 w-3.5 shrink-0 animate-spin text-copper-light" />;
    case "done":
      return <CheckCircle weight="fill" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-copper-light" />;
    case "file":
      return <span className="mt-0.5 shrink-0 text-xs text-white/30">{">"}</span>;
    case "input":
      return <span className="mt-0.5 shrink-0 text-xs text-copper/70">{">"}</span>;
    case "select":
      return <span className="mt-0.5 shrink-0 text-xs text-copper/70">{">"}</span>;
    default:
      return <span className="mt-0.5 shrink-0 text-xs text-white/30">$</span>;
  }
}

function StepDots({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 7 }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${
            i < current
              ? "bg-green-400"
              : i === current
                ? "bg-copper-light"
                : "bg-white/20"
          }`}
        />
      ))}
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-4 text-center text-2xl font-bold text-navy-dark sm:text-3xl">
          시작 방법
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-muted sm:mb-16 sm:text-base">
          npx create-klawn 한 줄이면 7단계 마법사가 설치부터 배포까지 안내합니다.
        </p>

        {/* CLI window */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-navy-dark/10 shadow-2xl">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-white/5 bg-navy-dark px-4 py-2.5">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-400/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <div className="h-3 w-3 rounded-full bg-green-400/80" />
            </div>
            <span className="ml-2 font-mono text-xs text-white/40">
              npx create-klawn
            </span>
          </div>

          {/* Terminal content */}
          <div className="bg-[#1A1D3A] p-4 sm:p-6">
            {/* Banner */}
            <div className="mb-6 font-mono text-[10px] leading-relaxed text-white/50 sm:text-xs">
              <pre className="whitespace-pre">
{`  █▄▀  █    ▄▀█  █   █  █▄  █
  █ █  █▄▄  █▀█  ▀▄▀▄▀  █ ▀▄█
  ─────────────────────────────
  Enterprise AI Agent Installer`}
              </pre>
            </div>

            {/* Steps grid */}
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              {WIZARD_STEPS.map((step, stepIdx) => {
                const Icon = step.icon;
                const stepNum = stepIdx;
                const isLast = stepIdx === WIZARD_STEPS.length - 1;

                return (
                  <div
                    key={step.step}
                    className={`rounded-lg border px-3 py-3 sm:px-4 sm:py-3.5 ${
                      isLast
                        ? "border-copper/30 bg-copper/5 md:col-span-2"
                        : "border-white/5 bg-white/[0.02]"
                    }`}
                  >
                    {/* Step header */}
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon
                          weight="light"
                          className={`h-4 w-4 ${isLast ? "text-copper-light" : "text-white/50"}`}
                        />
                        <span className="font-mono text-[11px] font-medium text-white/70 sm:text-xs">
                          Step {step.step}
                        </span>
                        <span className="text-xs font-semibold text-white/90 sm:text-sm">
                          {step.title}
                        </span>
                        <span className="hidden text-[10px] text-white/30 sm:inline">
                          {step.subtitle}
                        </span>
                      </div>
                      <StepDots current={stepNum} />
                    </div>

                    {/* Step lines */}
                    <div className="space-y-1">
                      {step.lines.map((line) => (
                        <div
                          key={line.text}
                          className="flex items-start gap-2 font-mono"
                        >
                          <LinePrefix type={line.prefix} />
                          <span
                            className={`text-[11px] sm:text-xs ${
                              line.prefix === "done"
                                ? "font-semibold text-copper-light"
                                : "text-white/70"
                            }`}
                          >
                            {line.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Final output */}
            <div className="mt-5 border-t border-white/5 pt-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-copper-light">
                <CheckCircle weight="fill" className="h-4 w-4" />
                <span className="font-semibold">Klawn is ready!</span>
              </div>
              <div className="mt-1.5 text-white/40">
                <span className="text-white/60">{">"}</span>{" "}
                http://localhost:8080/admin
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
