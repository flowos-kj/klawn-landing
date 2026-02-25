import Script from "next/script";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { CorporateLogos } from "@/components/sections/corporate-logos";
import { IndustryShowcase } from "@/components/sections/industry-showcase";
import { TrustBar } from "@/components/sections/trust-bar";
import { Features } from "@/components/sections/features";
import { PlatformVisual } from "@/components/sections/platform-visual";
import { SkillsShowcase } from "@/components/sections/skills-showcase";
import { Security } from "@/components/sections/security";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Comparison } from "@/components/sections/comparison";
import { Pricing } from "@/components/sections/pricing";
import { Deployment } from "@/components/sections/deployment";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import content from "@/lib/content/team";

const teamPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://klawn.ai.kr/team",
  name: "AI 직원 채용 - 최저임금 절반, 24시간 근무",
  description:
    "4대보험 없이, 퇴근 없이. 최저임금 절반으로 24시간 일하는 AI 직원. 재무, 마케팅, 영업, HR 모든 부서에서 일합니다.",
  isPartOf: { "@id": "https://klawn.ai.kr/#website" },
  inLanguage: "ko-KR",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://klawn.ai.kr" },
      { "@type": "ListItem", position: 2, name: "AI 직원 채용", item: "https://klawn.ai.kr/team" },
    ],
  },
};

const teamFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "AI 직원은 어떤 부서에서 일할 수 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "재무/경리, 마케팅, 영업, 운영, 고객서비스, HR/총무 등 모든 부서에서 일할 수 있습니다. 더존 ERP, 위하고 그룹웨어와 연동되어 실제 업무를 수행합니다.",
      },
    },
    {
      "@type": "Question",
      name: "AI 직원 도입에 얼마나 걸리나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "전담 엔지니어가 직접 방문하여 24시간 안에 설치, 설정, 교육까지 완료합니다. 설치 완료 즉시 업무에 투입됩니다.",
      },
    },
  ],
};

export default function TeamPage() {
  return (
    <>
      <Script
        id="team-page-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamPageSchema) }}
      />
      <Script
        id="team-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamFaqSchema) }}
      />
      <Navbar />
      <main>
        <Hero content={content.hero} />
        <CorporateLogos />
        <IndustryShowcase />
        <TrustBar items={content.trustItems} />
        <Features content={content.features} />
        <PlatformVisual />
        <SkillsShowcase content={content.skillsShowcase} />
        <Security content={content.security} />
        <HowItWorks content={content.howItWorks} />
        <Comparison content={content.comparison} />
        <Pricing content={content.pricing} />
        <Deployment content={content.deployment} />
        <CTA content={content.cta} />
      </main>
      <Footer />
    </>
  );
}
