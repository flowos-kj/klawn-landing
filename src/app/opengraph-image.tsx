import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Klawn - 기업을 위한 AI 에이전트 플랫폼";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          backgroundColor: "#1A1D3A",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(45,53,97,0.6) 0%, transparent 70%)",
          }}
        />

        {/* Copper accent line */}
        <div
          style={{
            width: 120,
            height: 3,
            backgroundColor: "#C4875B",
            borderRadius: 2,
            marginBottom: 24,
          }}
        />

        {/* Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          {/* K icon box */}
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              backgroundColor: "#1E2249",
              border: "2px solid rgba(196,135,91,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 900,
              color: "#C4875B",
            }}
          >
            K
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 8,
              color: "#C4875B",
              opacity: 0.9,
            }}
          >
            KLAWN
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: 8,
          }}
        >
          기업을 위한
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#C4875B",
            lineHeight: 1.2,
            marginBottom: 32,
          }}
        >
          AI 에이전트 플랫폼
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
            marginBottom: 40,
          }}
        >
          보안 경계 안에서 자유롭게 동작하는 엔터프라이즈 AI 에이전트
        </div>

        {/* Feature pills */}
        <div style={{ display: "flex", gap: 12 }}>
          {["PII 마스킹", "RBAC", "감사 추적", "SSO", "AI 기본법"].map(
            (label) => (
              <div
                key={label}
                style={{
                  padding: "8px 20px",
                  borderRadius: 20,
                  backgroundColor: "#2D3561",
                  border: "1px solid rgba(196,135,91,0.3)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#C4875B",
                }}
              >
                {label}
              </div>
            ),
          )}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 100,
            right: 100,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* CLI snippet */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              borderRadius: 8,
              backgroundColor: "#0f1128",
              border: "1px solid rgba(255,255,255,0.08)",
              fontSize: 15,
              fontFamily: "monospace",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.3)" }}>$</span>
            <span style={{ color: "rgba(255,255,255,0.7)" }}>
              npx create-klawn
            </span>
          </div>

          {/* URL */}
          <div
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.25)",
            }}
          >
            klawn.ai.kr
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
