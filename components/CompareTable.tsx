import Reveal from "./Reveal";

type Props = {
  columns: string[];
  rows: string[][];
  highlightRow?: number;
  highlightCol?: number;
};

/** Responsive comparison table — scrolls horizontally on small screens. */
export default function CompareTable({
  columns,
  rows,
  highlightRow,
  highlightCol,
}: Props) {
  return (
    <Reveal className="overflow-x-auto rounded-[2px] border border-line">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="bg-paper-2/70">
            {columns.map((c, ci) => (
              <th
                key={c}
                className={`border-b border-line px-4 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-ink ${
                  ci === highlightCol ? "bg-crimson/10 text-crimson" : ""
                }`}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={ri === highlightRow ? "bg-crimson/[0.06]" : ""}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`border-b border-line-soft px-4 py-4 align-top text-[0.9rem] leading-relaxed ${
                    ci === 0
                      ? "font-serif text-[1rem] text-ink"
                      : "text-ink-2"
                  } ${
                    ci === highlightCol ? "bg-crimson/[0.06] font-medium text-ink" : ""
                  } ${
                    ri === highlightRow && ci === 0 ? "text-crimson" : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}
