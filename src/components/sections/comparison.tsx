import type { ComparisonContent } from "@/lib/content/types";

export function Comparison({ content }: { content: ComparisonContent }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="mb-4 text-center text-2xl font-bold text-navy-dark sm:text-3xl">
          {content.heading}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-muted sm:mb-16 sm:text-base">
          {content.subheading}
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
                  {content.leftLabel}
                </th>
                <th className="px-6 py-4 text-left font-semibold text-copper">
                  {content.rightLabel}
                </th>
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row, idx) => (
                <tr
                  key={row.feature}
                  className={
                    idx < content.rows.length - 1
                      ? "border-b border-border"
                      : ""
                  }
                >
                  <td className="px-6 py-3 font-medium text-navy-dark">
                    {row.feature}
                  </td>
                  <td className="px-6 py-3 text-muted">{row.left}</td>
                  <td className="px-6 py-3 font-medium text-foreground">
                    {row.right}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="space-y-3 sm:hidden">
          {content.rows.map((row) => (
            <div
              key={row.feature}
              className="rounded-xl border border-border bg-surface p-4"
            >
              <div className="mb-2 text-sm font-semibold text-navy-dark">
                {row.feature}
              </div>
              <div className="mb-1 text-xs text-muted">
                <span className="font-medium">{content.leftLabel}:</span>{" "}
                {row.left}
              </div>
              <div className="text-xs font-medium text-foreground">
                <span className="text-copper">{content.rightLabel}:</span>{" "}
                {row.right}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
