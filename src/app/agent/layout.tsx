import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klawn vs ChatGPT - 엔터프라이즈 AI 에이전트 비교",
  description:
    "ChatGPT가 못하는 것을 Klawn이 합니다. 온프레미스 배포로 데이터 유출 차단, PII 12종 자동 마스킹, 6단계 RBAC 접근 제어, 불변 감사 추적, AI 기본법 워터마킹. 엔터프라이즈에 필요한 보안은 ChatGPT에 없습니다. 무료 체험 가능.",
  alternates: { canonical: "https://klawn.ai.kr/agent" },
  openGraph: {
    url: "https://klawn.ai.kr/agent",
    title: "Klawn vs ChatGPT - 엔터프라이즈 AI 에이전트 비교",
    description:
      "ChatGPT가 못하는 것을 Klawn이 합니다. 온프레미스 배포, PII 마스킹, 6단계 RBAC, 불변 감사 추적 — 엔터프라이즈에 필요한 보안은 ChatGPT에 없습니다.",
    images: [{ url: "https://klawn.ai.kr/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function AgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
