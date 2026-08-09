import Reveal from "./Reveal";

type Stat = { k: string; l: string };

/** A bordered, divided stat rail — reused across interior pages. */
export default function Stats({
  items,
  cols = 4,
}: {
  items: Stat[];
  cols?: 3 | 4;
}) {
  const grid = cols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";
  return (
    <div className="border-y border-line">
      <div className={`shell grid grid-cols-2 divide-line ${grid} sm:divide-x`}>
        {items.map((s, i) => (
          <Reveal
            key={s.l}
            delay={i * 70}
            className={`py-5 sm:py-7 sm:px-7 sm:first:pl-0 ${
              i % 2 === 0 ? "pr-4" : "pl-4 sm:pl-7"
            } ${i < 2 ? "border-b border-line sm:border-b-0" : ""}`}
          >
            <p className="display text-[clamp(1.9rem,3.4vw,2.8rem)] text-crimson">
              {s.k}
            </p>
            <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink-2">
              {s.l}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
