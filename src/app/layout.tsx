import type { Metadata } from "next";
import Script from "next/script";
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
  "클라운",
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
  "온프레미스 AI",
  "AI 직원",
  "ChatGPT 대안",
  "기업용 ChatGPT",
  "AI SaaS",
  "AI 에이전트 자동화",
  "엔터프라이즈 AI 보안",
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

  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  category: "technology",

  other: {
    "naver-site-verification": "",
    "google-site-verification": "google7692ca65f33b22fb",
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
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="author" type="text/plain" href="/humans.txt" />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1420196239654950');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1420196239654950&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
