import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT vs Klawn - 기업 보안이 다릅니다",
  description:
    "ChatGPT에 없는 온프레미스 배포, 개인정보 자동 보호, 접근 제어, 감사 추적. 데이터가 회사 밖으로 나가지 않는 AI 에이전트. 더존 ERP, 위하고 연동. 첫 달 무료.",
  alternates: { canonical: "https://klawn.ai.kr/agent" },
  openGraph: {
    url: "https://klawn.ai.kr/agent",
    title: "ChatGPT vs Klawn - 기업 보안이 다릅니다",
    description:
      "ChatGPT에 없는 온프레미스 배포, 개인정보 자동 보호, 접근 제어, 감사 추적. 데이터가 회사 밖으로 나가지 않는 AI 에이전트.",
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
