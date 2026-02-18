import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klawn vs ChatGPT - 엔터프라이즈 AI 에이전트",
  description:
    "ChatGPT가 못하는 것을 Klawn이 합니다. 온프레미스 배포, PII 마스킹, 6단계 RBAC, 불변 감사 추적 — 엔터프라이즈에 필요한 보안은 ChatGPT에 없습니다.",
  alternates: { canonical: "https://klawn.ai.kr/agent" },
  openGraph: {
    url: "https://klawn.ai.kr/agent",
    title: "Klawn vs ChatGPT - 엔터프라이즈 AI 에이전트",
    description:
      "ChatGPT가 못하는 것을 Klawn이 합니다. 온프레미스 배포, PII 마스킹, RBAC, 감사 추적.",
  },
};

export default function AgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
