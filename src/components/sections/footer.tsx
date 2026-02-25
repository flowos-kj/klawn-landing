export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
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
              문의
            </div>
            <ul className="space-y-2 text-xs text-muted sm:text-sm">
              <li>
                <a
                  href="mailto:official@flowos.work"
                  className="transition-colors hover:text-copper"
                >
                  official@flowos.work
                </a>
              </li>
              <li>
                <a
                  href="tel:070-7727-1223"
                  className="transition-colors hover:text-copper"
                >
                  070-7727-1223
                </a>
              </li>
              <li>
                서울특별시 서초구 강남대로53길 8, 6-210호 (서초동, 스타크 강남빌딩)
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-[10px] text-muted sm:mt-10 sm:text-xs">
          <p>
            <strong className="text-navy">주식회사 플로우오에스 (FlowOS Co., Ltd.)</strong> | 대표: 안희창 | 사업자등록번호: 505-81-88117
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
