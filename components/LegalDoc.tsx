import Reveal from "./Reveal";

export type LegalSection = {
  heading: string;
  body?: string[];
  list?: string[];
  list2Lead?: string;
  list2?: string[];
};

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 max-w-2xl space-y-2.5">
      {items.map((li, j) => (
        <li
          key={j}
          className="flex gap-3 text-[0.98rem] leading-relaxed text-ink-2"
        >
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
          <span>{li}</span>
        </li>
      ))}
    </ul>
  );
}

/** Clean, editorial reading layout for legal documents. */
export default function LegalDoc({
  intro,
  sections,
}: {
  intro?: string;
  sections: LegalSection[];
}) {
  return (
    <section className="shell pb-16 sm:pb-24">
      <div className="mx-auto max-w-3xl">
        {intro && (
          <Reveal>
            <p className="text-[1.05rem] leading-relaxed text-ink-2">{intro}</p>
          </Reveal>
        )}

        <div className="mt-10 space-y-10 sm:space-y-12">
          {sections.map((s, i) => (
            <Reveal key={s.heading} className="border-t border-line pt-8">
              <div className="flex items-baseline gap-4">
                <span className="section-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-serif text-xl leading-tight sm:text-2xl">
                  {s.heading}
                </h2>
              </div>

              {s.body?.map((p, j) => (
                <p
                  key={j}
                  className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-ink-2"
                >
                  {p}
                </p>
              ))}

              {s.list && <Bullets items={s.list} />}

              {s.list2Lead && (
                <p className="mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-ink-2">
                  {s.list2Lead}
                </p>
              )}
              {s.list2 && <Bullets items={s.list2} />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
