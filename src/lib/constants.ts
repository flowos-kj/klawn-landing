export const NAV_ITEMS = [
  { name: "기능", link: "#features" },
  { name: "보안", link: "#security" },
  { name: "배포", link: "#deployment" },
];

export const TRUST_ITEMS = [
  { label: "PIPA 준수", key: "pipa" },
  { label: "AI 기본법", key: "ai-act" },
  { label: "감사 추적", key: "audit" },
  { label: "SSO 인증", key: "sso" },
];

export const FEATURES = [
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
    large: true,
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
    large: true,
  },
];

export const COMPARISON_ROWS = [
  {
    feature: "채널",
    openclaw: "WhatsApp, Telegram, Discord 등 15+",
    klawn: "Slack, JANDI, Webhook",
  },
  {
    feature: "PII 보호",
    openclaw: "-",
    klawn: "12가지 한국형 개인정보 실시간 마스킹",
  },
  {
    feature: "접근 제어",
    openclaw: "DM 페어링 코드",
    klawn: "6단계 RBAC + ABAC + SSO",
  },
  {
    feature: "감사",
    openclaw: "-",
    klawn: "불변 해시 체인 감사 로그",
  },
  {
    feature: "규정 준수",
    openclaw: "-",
    klawn: "AI 기본법 워터마킹 + PIPA",
  },
  {
    feature: "배포",
    openclaw: "npm install -g",
    klawn: "Docker / K8s / AWS CDK",
  },
  {
    feature: "ERP",
    openclaw: "-",
    klawn: "더존 + 위하고 커넥터",
  },
  {
    feature: "관리",
    openclaw: "CLI",
    klawn: "어드민 대시보드 (10페이지) + CLI",
  },
];

export const DEPLOYMENT_OPTIONS = [
  {
    title: "Docker Compose",
    description: "단일 서버에 즉시 배포. 읽기 전용 FS, 비루트 실행, 리소스 제한 기본 적용.",
    command: "docker compose up -d",
  },
  {
    title: "Kubernetes (Helm)",
    description: "10개 템플릿: Deployment, Ingress, HPA, PDB, NetworkPolicy. 온프레미스/에어갭 지원.",
    command: "helm install klawn ./helm/openclaw",
  },
  {
    title: "AWS CDK",
    description: "6개 스택: Network, Storage, Auth, Compute, API, Monitoring. Fargate + 오토스케일링.",
    command: "npx cdk deploy --all",
  },
];

export const PII_DEMO = {
  before: `김철수님의 주민등록번호는 860101-1234567이고
전화번호는 010-1234-5678입니다.
카드번호: 4567-1234-5678-9012`,
  after: `[NAME-1]님의 주민등록번호는 [RRN-1]이고
전화번호는 [PHONE-1]입니다.
카드번호: [CARD-1]`,
};

export const RBAC_TIERS = [
  "platform_admin",
  "enterprise_admin",
  "team_admin",
  "power_user",
  "user",
  "viewer",
];
