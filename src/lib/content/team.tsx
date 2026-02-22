import type { PageContent } from "./types";

const content: PageContent = {
  hero: {
    headline: "최저임금으로 채용하는",
    subheadline: "AI 직원",
    body: (
      <>
        잠 안 자고, 불평 안 하고, 모든 걸 기억합니다.
        <br />
        4대보험도 필요 없습니다 — 월 216만원이면 충분합니다.
      </>
    ),
    ctaLabel: "채용 문의하기",
    ctaHref: "mailto:anton@flowos.work",
  },
  trustItems: [
    { label: "24시간 근무", key: "always-on" },
    { label: "불평 없음", key: "no-complaints" },
    { label: "완벽한 기억력", key: "memory" },
    { label: "전담 엔지니어 지원", key: "support" },
  ],
  features: {
    heading: "모든 부서에서 일합니다",
    subheading:
      "재무부터 고객서비스까지. Klawn은 어디에나 배치할 수 있는 AI 직원입니다.",
    items: [
      {
        title: "재무 / 경리",
        description: "더존 ERP 연동, 반복 업무 자동화",
        bullets: [
          "송장 조회 및 전표 자동 생성",
          "월말 정산 데이터 정리",
          "경비 처리 및 영수증 분류",
          "세금계산서 발행 보조",
        ],
        large: false,
        iconKey: "calculator",
      },
      {
        title: "마케팅",
        description: "데이터 분석부터 콘텐츠 초안까지",
        bullets: [
          "캠페인 성과 리포트 자동 생성",
          "SNS 콘텐츠 초안 작성",
          "경쟁사 모니터링 및 요약",
          "고객 세그먼트 분석",
        ],
        large: true,
        iconKey: "megaphone",
      },
      {
        title: "영업",
        description: "24시간 고객 응대, CRM 연동",
        bullets: [
          "리드 문의 즉시 응답",
          "제안서 초안 작성",
          "미팅 후 팔로업 자동화",
        ],
        large: false,
        iconKey: "handshake",
      },
      {
        title: "운영",
        description: "프로세스 자동화, 업무 승인 보조",
        bullets: [
          "위하고 결재 목록 관리",
          "재고 현황 실시간 조회",
          "공급망 이슈 알림 및 보고",
        ],
        large: false,
        iconKey: "gear",
      },
      {
        title: "고객서비스",
        description: "Slack, JANDI로 즉시 응대",
        bullets: [
          "FAQ 자동 답변",
          "문의 유형별 자동 분류",
          "에스컬레이션 자동 알림",
        ],
        large: false,
        iconKey: "headset",
      },
      {
        title: "HR / 총무",
        description: "사내 정책 안내, 온보딩 보조",
        bullets: [
          "신입사원 온보딩 가이드",
          "사내 규정 질의응답",
          "휴가/출장 신청 안내",
          "복리후생 정보 안내",
        ],
        large: true,
        iconKey: "users",
      },
    ],
  },
  skillsShowcase: {
    heading: "2,200가지 업무, 자동으로 처리합니다",
    subheading:
      "Klawn은 2,200개 이상의 스킬을 자동으로 활용하여 문제를 해결하고, 기존 스킬로 해결할 수 없는 문제는 새로운 스킬을 자동 생성하여 즉시 대응합니다.",
    description:
      "송장 처리, 이메일 답변, 보고서 작성, 일정 관리 등 2,200가지 이상의 업무를 별도 설정 없이 바로 수행합니다. 부서나 업무에 맞는 스킬이 자동으로 선택됩니다.",
    autoGenDescription:
      "처음 보는 업무라도 걱정 없습니다. Klawn이 스스로 새로운 처리 방법을 만들어 즉시 실행합니다. 한 번 배운 업무는 다음부터 더 빠르게 처리합니다.",
  },
  security: {
    heading: "직원 데이터, 안전하게",
    subheading:
      "주민등록번호, 연락처, 급여 정보 — 민감한 데이터는 AI에게 전달되기 전에 자동으로 보호됩니다.",
    rbacLabels: [
      "전체 관리자",
      "기업 관리자",
      "팀 관리자",
      "파워 유저",
      "일반 직원",
      "열람자",
    ],
  },
  howItWorks: {
    heading: "24시간 안에 팀에 합류합니다",
    subheading:
      "전담 엔지니어가 직접 방문해서 설치, 설정, 교육까지 한 번에 끝냅니다.",
    variant: "simple",
    simpleSteps: [
      {
        title: "문의 & 계약",
        description:
          "이메일 한 통이면 됩니다. 필요한 부서와 업무를 알려주세요.",
        iconKey: "envelope",
      },
      {
        title: "방문 설치 (24시간)",
        description:
          "전담 엔지니어가 회사에 방문합니다. 설치부터 보안 설정까지 직접 진행합니다.",
        iconKey: "wrench",
      },
      {
        title: "바로 업무 시작",
        description:
          "설치 완료 즉시 업무 투입. 팀원들에게 사용법을 교육해드립니다.",
        iconKey: "rocket",
      },
    ],
  },
  comparison: {
    heading: "직원 채용 vs Klawn 채용",
    subheading:
      "같은 최저임금, 전혀 다른 결과. Klawn이 더 나은 선택인 이유.",
    leftLabel: "직원 채용",
    rightLabel: "Klawn 채용",
    rows: [
      {
        feature: "월급",
        left: "₩2,156,880 + 4대보험",
        right: "₩2,156,880 (전부)",
      },
      { feature: "근무 시간", left: "9시 - 6시", right: "24시간 365일" },
      { feature: "불만/이직", left: "있음", right: "없음" },
      {
        feature: "기억력",
        left: "제한적, 인수인계 필요",
        right: "완벽, 모든 대화 기록",
      },
      {
        feature: "4대보험",
        left: "사업자 부담 ~15%",
        right: "없음",
      },
      { feature: "식대/복지", left: "월 10-20만원", right: "없음" },
      {
        feature: "학습 속도",
        left: "수개월 온보딩",
        right: "24시간 내 업무 시작",
      },
      {
        feature: "지원",
        left: "-",
        right: "전담 엔지니어 상시 지원",
      },
    ],
  },
  pricing: {
    badge: "최저임금 AI 직원",
    heading: "사람 한 명 뽑는 비용으로, AI 직원을 채용하세요",
    subheading:
      "2025년 최저임금 기준. 추가 비용 없이, 24시간 일하는 직원을 얻습니다.",
    monthlyWage: "₩2,156,880",
    monthlyWageNumber: "월급",
    setupNote: "설치비 포함",
    benefits: [
      "4대보험 없음",
      "식대 없음",
      "휴가 없음",
      "퇴근 없음",
      "24시간 365일 근무",
    ],
    onboarding: "24시간 온보딩",
    onboardingDetail: "전담 엔지니어가 직접 방문하여 설치부터 교육까지",
    expenseNote: "실비 별도",
    promoLabel: "첫 월급 50% 지원",
    promoPrice: "₩1,078,440",
    referralLabel: "소개-계약 시 혜택",
    referralDetail: "3개월간 월급 50% 할인",
    ctaLabel: "채용 문의하기",
    ctaHref: "mailto:anton@flowos.work",
  },
  deployment: {
    heading: "도입 방식",
    subheading:
      "회사 환경에 맞게 선택하세요. 어떤 방식이든 전담 엔지니어가 설치해드립니다.",
    options: [
      {
        title: "클라우드 (SaaS)",
        description:
          "별도 서버 없이 바로 시작. 가장 빠르고 간편한 방식입니다.",
        command: "가장 빠른 시작",
        iconKey: "cloud",
      },
      {
        title: "온프레미스",
        description:
          "회사 내부 서버에 직접 설치. 데이터가 외부로 나가지 않습니다.",
        command: "데이터 완전 보호",
        iconKey: "building",
      },
      {
        title: "매니지드 서비스",
        description:
          "설치, 운영, 업데이트 모두 저희가 관리합니다. 신경 쓸 것 없습니다.",
        command: "전담 엔지니어 지원 포함",
        iconKey: "wrench",
      },
    ],
  },
  cta: {
    heading: "지금 Klawn을 채용하세요",
    subheading:
      "첫 달 50% 할인. 24시간 안에 팀에 합류합니다.",
    ctaLabel: "anton@flowos.work",
    ctaHref: "mailto:anton@flowos.work",
  },
};

export default content;
