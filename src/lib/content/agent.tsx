import type { PageContent } from "./types";

const content: PageContent = {
  hero: {
    headline: "ChatGPT가 못하는 것을",
    subheadline: "Klawn이 합니다",
    body: (
      <>
        데이터가 외부로 나가지 않습니다. PII 마스킹, RBAC, 감사 추적 —
        <br />
        엔터프라이즈에 필요한 보안은 ChatGPT에 없습니다.
      </>
    ),
    ctaLabel: "PoC 문의하기",
    ctaHref: "mailto:anton@flowos.work",
  },
  trustItems: [
    { label: "PIPA 준수", key: "pipa" },
    { label: "AI 기본법", key: "ai-act" },
    { label: "감사 추적", key: "audit" },
    { label: "SSO 인증", key: "sso" },
  ],
  features: {
    heading: "ChatGPT에는 없는 기능",
    subheading:
      "범용 AI 챗봇과 엔터프라이즈 AI 에이전트는 다릅니다. Klawn만의 차별점.",
    items: [
      {
        title: "온프레미스 배포",
        description: "데이터가 회사 밖으로 나가지 않습니다",
        bullets: [
          "Docker / Kubernetes / AWS CDK",
          "에어갭 환경 지원",
          "사내 네트워크에서만 동작",
          "ChatGPT: 클라우드 전용, 데이터 외부 전송",
        ],
        large: false,
        iconKey: "lock",
      },
      {
        title: "한국어 PII 마스킹",
        description: "주민번호 12종 개인정보 실시간 보호",
        bullets: [
          "LLM에 전달 전 자동 마스킹",
          "응답 시 원본 복원",
          "주민등록번호, 카드번호 등 12종",
          "ChatGPT: PII 보호 기능 없음",
        ],
        large: true,
        iconKey: "fingerprint",
      },
      {
        title: "6단계 접근 제어",
        description: "RBAC + ABAC + SSO",
        bullets: [
          "도구별 실행 권한 관리",
          "데이터 분류 등급 제어",
          "ChatGPT: 팀 단위 기본 권한만",
        ],
        large: false,
        iconKey: "shield",
      },
      {
        title: "불변 감사 추적",
        description: "모든 행동을 해시 체인으로 기록",
        bullets: [
          "위변조 탐지 및 검증 API",
          "전체 세션 이력 기록",
          "ChatGPT: 기본 로그만, 감사 기능 없음",
        ],
        large: false,
        iconKey: "clock",
      },
      {
        title: "ERP / 그룹웨어 연동",
        description: "더존, 위하고 네이티브 커넥터",
        bullets: [
          "송장 조회, 전표 생성",
          "결재, 업무, 메시지 연동",
          "ChatGPT: 외부 시스템 연동 제한적",
        ],
        large: false,
        iconKey: "plugs",
      },
      {
        title: "에이전트 루프",
        description: "대화가 아닌 실행. 도구를 직접 사용합니다",
        bullets: [
          "Claude Opus 4.6 기반 에이전트",
          "도구 실행, 메모리, 서브 에이전트",
          "워크플로우 엔진 + 스케줄러",
          "ChatGPT: 대화형 응답 위주",
        ],
        large: true,
        iconKey: "brain",
      },
    ],
  },
  skillsShowcase: {
    heading: "2,200+ 스킬 — ChatGPT에는 없습니다",
    subheading:
      "Klawn automatically leverages 2,200+ skills to solve problems, and when existing skills fall short, it auto-generates new ones on the spot.",
    description:
      "2,200개 이상의 사전 구축 스킬이 에이전트 루프 안에서 자동 실행됩니다. 도구 호출, API 연동, 데이터 파이프라인까지 — ChatGPT의 플러그인과는 차원이 다릅니다.",
    autoGenDescription:
      "기존 스킬로 해결 불가능한 문제를 만나면, 에이전트가 즉석에서 새로운 스킬을 코드로 생성합니다. 생성된 스킬은 자동으로 등록되어 다음부터 재사용됩니다.",
  },
  security: {
    heading: "엔터프라이즈 보안, ChatGPT에는 없습니다",
    subheading:
      "ChatGPT Enterprise도 제공하지 않는 PII 마스킹, 해시 체인 감사, 온프레미스 배포를 Klawn은 기본으로 제공합니다.",
  },
  howItWorks: {
    heading: "시작 방법",
    subheading:
      "npx create-klawn 한 줄이면 7단계 마법사가 설치부터 배포까지 안내합니다.",
    variant: "technical",
  },
  comparison: {
    heading: "ChatGPT / Gemini vs Klawn",
    subheading:
      "범용 AI 챗봇은 편리하지만, 기업 환경에서는 부족합니다.",
    leftLabel: "ChatGPT / Gemini",
    rightLabel: "Klawn",
    rows: [
      {
        feature: "데이터 보안",
        left: "클라우드 전송 (미국 서버)",
        right: "온프레미스 / 사내 네트워크",
      },
      {
        feature: "PII 처리",
        left: "보호 기능 없음",
        right: "12가지 한국형 PII 실시간 마스킹",
      },
      {
        feature: "접근 제어",
        left: "팀 단위 기본 권한",
        right: "6단계 RBAC + ABAC + SSO",
      },
      {
        feature: "감사 추적",
        left: "기본 로그",
        right: "불변 해시 체인 감사 로그",
      },
      {
        feature: "규정 준수",
        left: "SOC 2 (미국 기준)",
        right: "PIPA + AI 기본법 (한국 기준)",
      },
      {
        feature: "ERP 연동",
        left: "제한적 (플러그인)",
        right: "더존 + 위하고 네이티브 커넥터",
      },
      {
        feature: "배포",
        left: "SaaS 전용",
        right: "Docker / K8s / AWS CDK / 에어갭",
      },
      {
        feature: "실행 방식",
        left: "대화형 응답",
        right: "에이전트 루프 (도구 실행 + 워크플로우)",
      },
    ],
  },
  pricing: {
    badge: "투명한 가격",
    heading: "ChatGPT Enterprise보다 합리적입니다",
    subheading:
      "사용자당 과금 없이, 월 정액제로 엔터프라이즈 AI 에이전트를 운영하세요.",
    monthlyWage: "₩1,078,440",
    monthlyWageNumber: "월 정액",
    setupNote: "설치비 포함",
    benefits: [
      "사용자 수 제한 없음",
      "온프레미스 배포 포함",
      "ERP 연동 포함",
      "감사 추적 포함",
      "24시간 에이전트 운영",
    ],
    onboarding: "24시간 온보딩",
    onboardingDetail: "전담 엔지니어가 직접 방문하여 설치부터 PoC까지",
    expenseNote: "실비 별도",
    promoLabel: "첫 달 무료",
    promoPrice: "₩0",
    referralLabel: "소개-계약 시 혜택",
    referralDetail: "첫 달 무료 추가 제공",
    ctaLabel: "PoC 문의하기",
    ctaHref: "mailto:anton@flowos.work",
  },
  deployment: {
    heading: "배포 옵션",
    subheading:
      "단일 서버부터 클라우드 네이티브, 온프레미스까지. 환경에 맞는 배포 방식을 선택하세요.",
    options: [
      {
        title: "Docker Compose",
        description:
          "단일 서버에 즉시 배포. 읽기 전용 FS, 비루트 실행, 리소스 제한 기본 적용.",
        command: "docker compose up -d",
        iconKey: "cube",
      },
      {
        title: "Kubernetes (Helm)",
        description:
          "10개 템플릿: Deployment, Ingress, HPA, PDB, NetworkPolicy. 온프레미스/에어갭 지원.",
        command: "helm install klawn ./helm/openclaw",
        iconKey: "network",
      },
      {
        title: "AWS CDK",
        description:
          "6개 스택: Network, Storage, Auth, Compute, API, Monitoring. Fargate + 오토스케일링.",
        command: "npx cdk deploy --all",
        iconKey: "cloud",
      },
      {
        title: "온프레미스",
        description:
          "사내 서버에 직접 설치. 데이터가 외부로 나가지 않습니다. 에어갭 환경 지원. 하드웨어 비용 별도.",
        command: "전담 엔지니어 방문 설치",
        iconKey: "server",
      },
    ],
  },
  cta: {
    heading: "ChatGPT 대신, Klawn으로 시작하세요",
    subheading:
      "PoC부터 프로덕션까지. 첫 달 무료로 바로 시작할 수 있습니다.",
    ctaLabel: "anton@flowos.work",
    ctaHref: "mailto:anton@flowos.work",
  },
};

export default content;
