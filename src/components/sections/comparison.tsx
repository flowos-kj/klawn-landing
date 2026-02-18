import { COMPARISON_ROWS } from "@/lib/constants";

export function Comparison() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="mb-4 text-center text-2xl font-bold text-navy-dark sm:text-3xl">
          OpenClaw vs Klawn
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-muted sm:mb-16 sm:text-base">
          OpenClaw의 철학을 계승하면서, 엔터프라이즈에 필요한 보안과 관리 기능을 더했습니다.
        </p>

        {/* Desktop table */}
        <div className="hidden overflow-hidden rounded-xl border border-border bg-surface sm:block">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-white">
                <th className="px-6 py-4 text-left font-semibold text-navy-dark">
                  기능
                </th>
                <th className="px-6 py-4 text-left font-medium text-muted">
                  OpenClaw (개인용)
                </th>
                <th className="px-6 py-4 text-left font-semibold text-copper">
                  Klawn (엔터프라이즈)
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, idx) => (
                <tr
                  key={row.feature}
                  className={
                    idx < COMPARISON_ROWS.length - 1
                      ? "border-b border-border"
                      : ""
                  }
                >
                  <td className="px-6 py-3 font-medium text-navy-dark">
                    {row.feature}
                  </td>
                  <td className="px-6 py-3 text-muted">{row.openclaw}</td>
                  <td className="px-6 py-3 font-medium text-foreground">{row.klawn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="space-y-3 sm:hidden">
          {COMPARISON_ROWS.map((row) => (
            <div
              key={row.feature}
              className="rounded-xl border border-border bg-surface p-4"
            >
              <div className="mb-2 text-sm font-semibold text-navy-dark">
                {row.feature}
              </div>
              <div className="mb-1 text-xs text-muted">
                <span className="font-medium">OpenClaw:</span> {row.openclaw}
              </div>
              <div className="text-xs font-medium text-foreground">
                <span className="text-copper">Klawn:</span> {row.klawn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
