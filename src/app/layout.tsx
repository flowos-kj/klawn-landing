import type { Metadata } from "next";
import { notoSansKr, geistMono } from "@/lib/fonts";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

const SITE_URL = "https://klawn.ai.kr";
const SITE_NAME = "Klawn";
const TITLE = "Klawn - 기업을 위한 AI 에이전트 플랫폼";
const DESCRIPTION =
  "보안 경계 안에서 자유롭게 동작하는 엔터프라이즈 AI 에이전트. PIPA 준수, AI 기본법 대응, 6단계 RBAC, 불변 감사 추적, 한국어 PII 실시간 마스킹. Docker, Kubernetes, AWS CDK 배포 지원. 한 줄이면 시작됩니다.";
const KEYWORDS = [
  "Klawn",
  "AI 에이전트",
  "엔터프라이즈 AI",
  "기업용 AI",
  "AI 에이전트 플랫폼",
  "한국형 AI",
  "PIPA",
  "개인정보보호법",
  "AI 기본법",
  "PII 마스킹",
  "RBAC",
  "감사 추적",
  "SSO",
  "Claude",
  "LLM",
  "AI 보안",
  "AI 컴플라이언스",
  "더존 ERP",
  "위하고",
  "Slack AI",
  "JANDI AI",
  "FlowOS",
  "한국 AI 플랫폼",
  "AI 워터마킹",
  "기업 AI 도입",
  "AI 접근 제어",
  "Docker AI 배포",
  "Kubernetes AI",
  "AWS CDK AI",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: "FlowOS", url: "https://flowos.work" }],
  creator: "FlowOS Co., Ltd.",
  publisher: "FlowOS Co., Ltd.",
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@flowos_kr",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
    languages: {
      "ko-KR": SITE_URL,
    },
  },

  category: "technology",

  other: {
    "naver-site-verification": "",
    "google-site-verification": "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} ${geistMono.variable}`}>
      <head>
        <JsonLd />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
