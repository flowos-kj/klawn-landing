import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klawn for Teams - 최저임금으로 AI 직원 채용",
  description:
    "4대보험 없이, 퇴근 없이. 월 216만원으로 24시간 일하는 AI 직원을 채용하세요. 재무, 마케팅, 영업, 운영, 고객서비스, HR 모든 부서에서 일합니다.",
  alternates: { canonical: "https://klawn.ai.kr/team" },
  openGraph: {
    url: "https://klawn.ai.kr/team",
    title: "Klawn for Teams - 최저임금으로 AI 직원 채용",
    description:
      "4대보험 없이, 퇴근 없이. 월 216만원으로 24시간 일하는 AI 직원.",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
