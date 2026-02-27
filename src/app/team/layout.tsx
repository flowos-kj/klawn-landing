import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "최저임금으로 AI 직원 채용 - 24시간 근무, 모든 부서 배치",
  description:
    "4대보험 없이, 퇴근 없이. 월 108만원으로 24시간 일하는 AI 직원을 채용하세요. 재무·마케팅·영업·운영·고객서비스·HR 모든 부서에서 일합니다. 더존 ERP, 위하고 연동. 전담 엔지니어가 24시간 안에 설치해드립니다. 첫 달 무료.",
  alternates: { canonical: "https://klawn.ai.kr/team" },
  openGraph: {
    url: "https://klawn.ai.kr/team",
    title: "최저임금으로 AI 직원 채용 - 24시간 근무, 모든 부서 배치 | Klawn",
    description:
      "4대보험 없이, 퇴근 없이. 월 108만원으로 24시간 일하는 AI 직원. 재무·마케팅·영업·운영·고객서비스·HR 모든 부서에서 일합니다.",
    images: [{ url: "https://klawn.ai.kr/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
