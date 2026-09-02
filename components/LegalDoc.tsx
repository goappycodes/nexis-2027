import Reveal from "./Reveal";

export type LegalSection = {
  heading: string;
  body?: string[];
  list?: string[];
  list2Lead?: string;
  list2?: string[];
};

function sectionId(heading: string) {
  return `section-${heading
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;
}

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
    <section className="shell pb-16 pt-8 sm:pb-24 sm:pt-10">
      <div className="mx-auto max-w-3xl">
        {intro && (
          <Reveal>
            <p className="text-[1.05rem] leading-relaxed text-ink-2">{intro}</p>
          </Reveal>
        )}

        <Reveal className={intro ? "mt-8" : ""}>
          <nav
            aria-label="Policy sections"
            className="border-y border-line py-5"
          >
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-crimson">
              On this page
            </p>
            <div className="mt-3 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
              {sections.map((section, index) => (
                <a
                  key={section.heading}
                  href={`#${sectionId(section.heading)}`}
                  className="shrink-0 snap-start rounded-full border border-line bg-paper px-3.5 py-2 text-[0.78rem] font-medium text-ink-2 transition-colors hover:border-crimson/40 hover:text-crimson focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2"
                >
                  <span className="mr-1.5 text-crimson" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {section.heading}
                </a>
              ))}
            </div>
          </nav>
        </Reveal>

        <div className="mt-8 space-y-10 sm:mt-10 sm:space-y-12">
          {sections.map((s, i) => (
            <article
              key={s.heading}
              id={sectionId(s.heading)}
              className="scroll-mt-32"
            >
              <Reveal className="border-t border-line pt-8">
                <div className="grid grid-cols-[2rem_1fr] items-baseline gap-3 sm:grid-cols-[2.5rem_1fr] sm:gap-4">
                  <span className="section-index" aria-hidden>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
