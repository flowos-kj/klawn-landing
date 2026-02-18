import { BackgroundBeams } from "@/components/ui/background-beams";
import { EnvelopeSimple } from "@phosphor-icons/react";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-navy-dark py-20 sm:py-32"
    >
      <BackgroundBeams />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          OpenClaw만큼 쉽게, 엔터프라이즈에 맞게
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm text-white/60 sm:mb-10 sm:max-w-xl sm:text-base">
          익숙한 설치 경험에 보안, 규정 준수, 관리 기능을 더했습니다.
          <br />
          도입 상담을 요청하세요.
        </p>

        <a
          href="mailto:anton@flowos.work"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-copper px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-copper-light"
        >
          <EnvelopeSimple weight="light" className="h-4 w-4" />
          anton@flowos.work
        </a>
      </div>
    </section>
  );
}
