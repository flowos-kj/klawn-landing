export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <div className="mb-3 text-lg font-bold text-navy-dark">Klawn</div>
            <p className="text-xs leading-relaxed text-muted sm:text-sm">
              기업이 자사 데이터로 성장하는
              <br />
              운영체제를 만듭니다.
            </p>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold text-navy-dark">
              링크
            </div>
            <ul className="space-y-2 text-xs text-muted sm:text-sm">
              <li>
                <a
                  href="https://github.com/flowos-kj/klawn"
                  className="transition-colors hover:text-copper"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/flowos-kj/klawn/blob/main/CONTRIBUTING.md"
                  className="transition-colors hover:text-copper"
                >
                  기여 가이드
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/flowos-kj/klawn/blob/main/LICENSE"
                  className="transition-colors hover:text-copper"
                >
                  Apache 2.0 라이선스
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold text-navy-dark">
              문의
            </div>
            <ul className="space-y-2 text-xs text-muted sm:text-sm">
              <li>
                <a
                  href="mailto:anton@flowos.work"
                  className="transition-colors hover:text-copper"
                >
                  anton@flowos.work
                </a>
              </li>
              <li>
                서울 서초구 강남대로53길 8, 6층
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-[10px] text-muted sm:mt-10 sm:text-xs">
          <p>
            <strong className="text-navy">(주)플로우오에스</strong> | 대표 안희창
          </p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} FlowOS Co., Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
