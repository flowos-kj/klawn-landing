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
import content from "@/lib/content/agent";

const agentPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://klawn.ai.kr/agent",
  name: "ChatGPT vs Klawn - 기업 보안이 다릅니다",
  description:
    "ChatGPT에 없는 온프레미스 배포, 개인정보 자동 보호, 접근 제어, 감사 추적. 데이터가 회사 밖으로 나가지 않는 AI 에이전트.",
  isPartOf: { "@id": "https://klawn.ai.kr/#website" },
  inLanguage: "ko-KR",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://klawn.ai.kr" },
      { "@type": "ListItem", position: 2, name: "ChatGPT vs Klawn", item: "https://klawn.ai.kr/agent" },
    ],
  },
};

const agentFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Klawn과 ChatGPT의 차이점은 무엇인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Klawn은 온프레미스 배포, 개인정보 자동 보호, 6단계 접근 제어, 불변 감사 추적 등 ChatGPT에 없는 엔터프라이즈 보안 기능을 제공합니다. 데이터가 회사 밖으로 나가지 않습니다.",
      },
    },
    {
      "@type": "Question",
      name: "ChatGPT Enterprise보다 나은 점은 무엇인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Klawn은 온프레미스/에어갭 배포, 한국형 개인정보 12종 자동 보호, 더존 ERP/위하고 연동, 한국 AI 기본법 준수를 기본 제공합니다.",
      },
    },
  ],
};

export default function AgentPage() {
  return (
    <>
      <Script
        id="agent-page-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agentPageSchema) }}
      />
      <Script
        id="agent-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agentFaqSchema) }}
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
