import type { PageContent } from "./types";

const content: PageContent = {
  hero: {
    headline: "기업을 위한",
    subheadline: "AI 에이전트 플랫폼",
    body: (
      <>
        OpenClaw만큼 쉽게, 엔터프라이즈에 맞게.
        <br />
        PIPA 준수, 감사 추적, 접근 제어까지 — 바로 도입하세요.
      </>
    ),
    ctaLabel: "도입 문의하기",
    ctaHref: "mailto:anton@flowos.work",
  },
  trustItems: [
    { label: "PIPA 준수", key: "pipa" },
    { label: "AI 기본법", key: "ai-act" },
    { label: "감사 추적", key: "audit" },
    { label: "SSO 인증", key: "sso" },
  ],
  features: {
    heading: "핵심 기능",
    subheading:
      "에이전트부터 보안 가드, 스케줄링, 메모리까지. 엔터프라이즈에 필요한 모든 것을 갖추고 있습니다.",
    items: [
      {
        title: "AI 에이전트",
        description: "Claude Opus 4.6 기반 에이전트 루프",
        bullets: [
          "도구 실행 및 스킬 자동화",
          "메모리와 컨텍스트 관리",
          "서브 에이전트 위임",
          "실시간 스트리밍 응답",
        ],
        large: false,
        iconKey: "brain",
      },
      {
        title: "한국어 PII 보호",
        description: "12가지 한국형 개인정보 실시간 마스킹",
        bullets: [
          "주민등록번호, 전화번호, 카드번호",
          "이름, 주소, 이메일 등 12종",
          "LLM 전달 전 자동 마스킹",
          "응답 시 원본 복원",
        ],
        large: false,
        iconKey: "fingerprint",
      },
      {
        title: "접근 제어",
        description: "6단계 RBAC + ABAC + SSO",
        bullets: [
          "도구별 실행 권한 관리",
          "데이터 분류 등급 제어",
          "SAML 2.0 / OIDC SSO",
        ],
        large: false,
        iconKey: "lock",
      },
      {
        title: "감사 추적",
        description: "불변 해시 체인 감사 로그",
        bullets: [
          "위변조 탐지 및 검증 API",
          "전체 세션 이력 기록",
          "무결성 증명 내보내기",
        ],
        large: false,
        iconKey: "clock",
      },
      {
        title: "ERP 연동",
        description: "더존 ERP와 위하고 그룹웨어 직접 연결",
        bullets: [
          "송장 조회 및 전표 생성",
          "결재 목록 및 업무 관리",
          "웹훅 기반 실시간 연동",
        ],
        large: false,
        iconKey: "plugs",
      },
      {
        title: "관리 대시보드",
        description: "React 18 기반 10페이지 어드민 패널",
        bullets: [
          "실시간 세션 및 사용자 관리",
          "빌링 및 토큰 사용량 추적",
          "감사 로그 및 무결성 검증",
          "보안 감사 결과 확인",
        ],
        large: false,
        iconKey: "layout",
      },
      {
        title: "SSRF 가드",
        description: "사설 IP·루프백·DNS 리바인딩 자동 차단",
        bullets: [
          "사설 IP 및 루프백 주소 차단",
          "우회 IP 표기법 자동 탐지",
          "DNS 리바인딩 공격 방어",
          "웹 검색 도구에 자동 적용",
        ],
        large: false,
        iconKey: "ssrf",
      },
      {
        title: "Shell 가드",
        description: "위험 환경 변수 자동 제거 후 셸 실행",
        bullets: [
          "코드 삽입 위험 변수 자동 제거",
          "라이브러리 주입 경로 차단",
          "런타임 옵션 변조 방지",
          "안전한 셸 실행 환경 보장",
        ],
        large: false,
        iconKey: "shell",
      },
      {
        title: "심링크 쓰기 가드",
        description: "파일 쓰기 전 경로 검증으로 탈출 차단",
        bullets: [
          "심볼릭 링크 경로 자동 검증",
          "레이스 컨디션 방어",
          "경로 탈출 시도 차단",
          "실제 경로 확인 후 쓰기 허용",
        ],
        large: false,
        iconKey: "symlink",
      },
      {
        title: "Fetch 크기 제한",
        description: "응답 크기 제한으로 메모리 폭주 차단",
        bullets: [
          "응답 본문 크기 하드 리밋",
          "스트리밍 바이트 실시간 카운팅",
          "초과 시 즉시 연결 종료",
          "메모리 폭주 원천 차단",
        ],
        large: false,
        iconKey: "fetch",
      },
      {
        title: "스케줄러",
        description: "반복·예약 태스크 자동 실행 및 재시도",
        bullets: [
          "동시 실행 수 제어",
          "근무 시간 및 타임존 제한",
          "실패 시 지수 백오프 재시도",
          "웹훅 알림",
        ],
        large: false,
        iconKey: "scheduler",
      },
      {
        title: "크리덴셜 로테이션",
        description: "복수 API 키 자동 분배 및 쿨다운",
        bullets: [
          "복수 API 키 자동 분배",
          "레이트 리밋 시 자동 쿨다운",
          "가장 빠른 복구 키 자동 선택",
          "라운드로빈·LRU 전략 지원",
        ],
        large: false,
        iconKey: "credential",
      },
      {
        title: "중첩 서브 에이전트",
        description: "에이전트가 하위 에이전트를 자동 생성",
        bullets: [
          "최대 깊이 및 자식 수 제어",
          "필요한 도구만 선택 전달",
          "계층적 태스크 위임",
          "복잡한 작업 자동 분할",
        ],
        large: false,
        iconKey: "nested",
      },
      {
        title: "한국어 메모리 검색",
        description: "조사 제거 + 벡터 검색으로 정확한 한국어 매칭",
        bullets: [
          "한국어 특화 키워드 검색",
          "조사 자동 제거 토크나이저",
          "벡터 스토어 기반 유사도 검색",
          "세션 간 영속 메모리",
        ],
        large: false,
        iconKey: "memory",
      },
      {
        title: "세션 관리",
        description: "JSONL 기반 세션 저장·복원·검색",
        bullets: [
          "전체 대화 이력 JSONL 저장",
          "중단 지점 체크포인팅 복원",
          "세션 내 한국어 검색",
          "크로스 세션 컨텍스트 유지",
        ],
        large: false,
        iconKey: "session",
      },
    ],
  },
  skillsShowcase: {
    heading: "2,200개 이상의 스킬, 자동으로",
    subheading:
      "Klawn은 2,200개 이상의 스킬을 자동으로 활용하여 문제를 해결하고, 기존 스킬로 해결할 수 없는 문제는 새로운 스킬을 자동 생성하여 즉시 대응합니다.",
    description:
      "사전 구축된 2,200개 이상의 스킬이 ERP 연동, 문서 처리, 데이터 분석, 커뮤니케이션 등 다양한 업무를 즉시 수행합니다. 에이전트가 상황에 맞는 최적의 스킬을 자동 선택합니다.",
    autoGenDescription:
      "기존 스킬로 해결할 수 없는 새로운 문제를 만나면, Klawn이 실시간으로 새로운 스킬을 자동 생성하여 즉시 대응합니다. 한 번 생성된 스킬은 재사용되어 점점 더 강력해집니다.",
  },
  security: {
    heading: "보안이 기본입니다",
    subheading:
      "모든 입력은 비신뢰로 취급됩니다. PII 마스킹, 접근 제어, 규정 준수가 아키텍처에 내장되어 있습니다.",
  },
  howItWorks: {
    heading: "시작 방법",
    subheading:
      "npx create-klawn 한 줄이면 7단계 마법사가 설치부터 배포까지 안내합니다.",
    variant: "technical",
  },
  comparison: {
    heading: "OpenClaw vs Klawn",
    subheading:
      "OpenClaw의 철학을 계승하면서, 엔터프라이즈에 필요한 보안과 관리 기능을 더했습니다.",
    leftLabel: "OpenClaw (개인용)",
    rightLabel: "Klawn (엔터프라이즈)",
    rows: [
      {
        feature: "채널",
        left: "WhatsApp, Telegram, Discord 등 15+",
        right: "Slack, JANDI, Webhook",
      },
      {
        feature: "PII 보호",
        left: "-",
        right: "12가지 한국형 개인정보 실시간 마스킹",
      },
      {
        feature: "접근 제어",
        left: "DM 페어링 코드",
        right: "6단계 RBAC + ABAC + SSO",
      },
      { feature: "감사", left: "-", right: "불변 해시 체인 감사 로그" },
      {
        feature: "규정 준수",
        left: "-",
        right: "AI 기본법 워터마킹 + PIPA",
      },
      {
        feature: "배포",
        left: "npm install -g",
        right: "Docker / K8s / AWS CDK",
      },
      { feature: "ERP", left: "-", right: "더존 + 위하고 커넥터" },
      {
        feature: "관리",
        left: "CLI",
        right: "어드민 대시보드 (10페이지) + CLI",
      },
    ],
  },
  pricing: {
    badge: "투명한 가격",
    heading: "AI 직원, 최저임금 절반으로 채용하세요",
    subheading: "최저임금의 절반 비용. 사람보다 저렴하고, 사람보다 빠릅니다.",
    monthlyWage: "₩1,078,440",
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
    onboardingDetail: "전담 엔지니어가 직접 방문하여 설치부터 컨설팅까지",
    expenseNote: "실비 별도",
    promoLabel: "첫 달 무료",
    promoPrice: "₩0",
    referralLabel: "소개-계약 시 혜택",
    referralDetail: "첫 달 무료 추가 제공",
    ctaLabel: "도입 문의하기",
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
    heading: "OpenClaw만큼 쉽게, 엔터프라이즈에 맞게",
    subheading: "익숙한 설치 경험에 보안, 규정 준수, 관리 기능을 더했습니다.",
    ctaLabel: "anton@flowos.work",
    ctaHref: "mailto:anton@flowos.work",
  },
};

export default content;
