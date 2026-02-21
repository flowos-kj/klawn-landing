const SITE_URL = "https://klawn.ai.kr";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "FlowOS Co., Ltd.",
  alternateName: "(주)플로우오에스",
  url: "https://flowos.work",
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/klawn-logo.jpeg`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/klawn-logo.jpeg`,
  foundingDate: "2025",
  address: {
    "@type": "PostalAddress",
    streetAddress: "강남대로53길 8, 6층",
    addressLocality: "서초구",
    addressRegion: "서울",
    postalCode: "06621",
    addressCountry: "KR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "anton@flowos.work",
    contactType: "sales",
    availableLanguage: ["Korean", "English"],
  },
  sameAs: [
    "https://github.com/flowos-kj/klawn",
    "https://www.npmjs.com/package/create-klawn",
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: "Klawn",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "AI Agent Platform",
  operatingSystem: "Linux, macOS, Windows (Docker)",
  description:
    "기업을 위한 AI 에이전트 플랫폼. PIPA 준수, AI 기본법 대응, 6단계 RBAC, 불변 감사 추적, 한국어 PII 실시간 마스킹을 제공합니다.",
  url: SITE_URL,
  installUrl: "https://www.npmjs.com/package/create-klawn",
  downloadUrl: "https://www.npmjs.com/package/create-klawn",
  softwareVersion: "1.0.0",
  offers: {
    "@type": "Offer",
    priceCurrency: "KRW",
    description: "라이선스 및 가격은 FlowOS에 문의",
  },
  author: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "FlowOS Co., Ltd.",
  },
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "FlowOS Co., Ltd.",
  },
  featureList: [
    "Claude Opus 4.6 기반 AI 에이전트 루프",
    "한국어 PII 12종 실시간 마스킹/복원",
    "6단계 RBAC + ABAC + SSO 접근 제어",
    "불변 해시 체인 감사 추적",
    "AI 기본법 워터마킹",
    "PIPA 개인정보보호법 준수",
    "더존 ERP / 위하고 그룹웨어 연동",
    "Slack / JANDI / Webhook 채널 지원",
    "Docker / Kubernetes / AWS CDK 배포",
    "React 관리 대시보드 10페이지",
  ],
  screenshot: `${SITE_URL}/opengraph-image`,
  inLanguage: "ko",
  softwareRequirements: "Node.js 18+, Docker 20.10+",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Klawn",
  alternateName: "클라운",
  url: SITE_URL,
  description:
    "기업을 위한 AI 에이전트 플랫폼. 보안 경계 안에서 자유롭게 동작합니다.",
  inLanguage: "ko-KR",
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "FlowOS Co., Ltd.",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "Klawn - 기업을 위한 AI 에이전트 플랫폼",
  description:
    "보안 경계 안에서 자유롭게 동작하는 엔터프라이즈 AI 에이전트. PIPA 준수, AI 기본법 대응, 6단계 RBAC, 불변 감사 추적, 한국어 PII 실시간 마스킹.",
  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },
  about: {
    "@id": `${SITE_URL}/#software`,
  },
  inLanguage: "ko-KR",
  datePublished: "2025-01-01",
  dateModified: "2026-02-21",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "홈",
        item: SITE_URL,
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Klawn은 무엇인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Klawn은 기업을 위한 AI 에이전트 플랫폼입니다. Claude Opus 4.6 기반 에이전트 루프, 한국어 PII 마스킹, 6단계 RBAC, 불변 감사 추적, AI 기본법 워터마킹 등 엔터프라이즈에 필요한 보안과 관리 기능을 제공합니다.",
      },
    },
    {
      "@type": "Question",
      name: "Klawn은 어떻게 설치하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "npx create-klawn 명령어 한 줄로 설치할 수 있습니다. 7단계 마법사가 라이선스 인증부터 Docker 배포까지 안내합니다. Node.js 18 이상과 Docker가 필요합니다.",
      },
    },
    {
      "@type": "Question",
      name: "Klawn은 어떤 보안 기능을 제공하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "주민등록번호, 전화번호, 카드번호 등 12가지 한국형 개인정보 실시간 마스킹, 6단계 역할 기반 접근 제어(RBAC + ABAC), SAML/OIDC SSO, 불변 해시 체인 감사 로그, AI 기본법 워터마킹, 프롬프트 인젝션 탐지를 제공합니다.",
      },
    },
    {
      "@type": "Question",
      name: "Klawn과 ChatGPT의 차이점은 무엇인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Klawn은 엔터프라이즈 전용으로, ChatGPT에 없는 온프레미스 배포, PII 마스킹, 6단계 RBAC, 불변 감사 추적, PIPA/AI 기본법 컴플라이언스를 제공합니다. 데이터가 조직의 보안 경계 안에 머무릅니다.",
      },
    },
    {
      "@type": "Question",
      name: "Klawn의 가격은 어떻게 되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "라이선스 및 가격에 대해서는 FlowOS에 문의하시면 됩니다. 기업 규모와 요구사항에 맞는 맞춤 견적을 제공합니다.",
      },
    },
    {
      "@type": "Question",
      name: "어떤 배포 방식을 지원하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Docker Compose(단일 서버), Kubernetes Helm 차트(온프레미스/에어갭 지원), AWS CDK(6개 스택: Network, Storage, Auth, Compute, API, Monitoring)를 지원합니다.",
      },
    },
    {
      "@type": "Question",
      name: "어떤 채널과 연동되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Slack(Socket Mode), JANDI(웹훅), REST Webhook을 지원합니다. ERP 연동으로는 더존(송장 조회, 전표 생성, 직원 검색)과 위하고(업무 생성, 메시지 전송, 결재 목록)를 제공합니다.",
      },
    },
    {
      "@type": "Question",
      name: "에어갭(폐쇄망) 환경에서 사용할 수 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네, Kubernetes Helm 차트의 values-airgap.yaml로 에어갭 환경에 배포할 수 있습니다. LLM API 호출만 네트워크 접근이 필요합니다.",
      },
    },
  ],
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
