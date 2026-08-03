import Image from "next/image";
import Reveal from "./Reveal";
import { STUDENTS } from "@/lib/content";

function Row({
  items,
  reverse = false,
}: {
  items: typeof STUDENTS;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={`flex w-max gap-4 animate-marquee ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {doubled.map((s, i) => (
          <figure
            key={`${s.name}-${i}`}
            className="group relative h-44 w-44 shrink-0 overflow-hidden rounded-[4px] bg-paper-2 sm:h-52 sm:w-52"
          >
            <Image
              src={s.img}
              alt={s.name}
              fill
              sizes="220px"
              className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/5 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-3">
              <p className="text-[0.82rem] font-semibold leading-tight text-white">
                {s.name}
              </p>
              <p className="mt-0.5 text-[0.66rem] uppercase tracking-[0.1em] text-white/75">
                {s.org}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function PhotoMarquee() {
  const half = Math.ceil(STUDENTS.length / 2);
  return (
    <section className="overflow-hidden border-b border-line bg-paper-2/40 py-16 sm:py-20">
      <div className="shell">
        <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="kicker text-crimson">The proof, walking around</p>
            <h2 className="display mt-4 text-[clamp(1.8rem,4vw,3rem)]">
              Believe us — these are{" "}
              <span className="serif-em text-crimson">first-year</span>{" "}
              students.
            </h2>
          </div>
          <p className="max-w-sm text-[0.95rem] leading-relaxed text-ink-2">
            Already interning, earning and winning national recognition — in
            their very first year on campus.
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col gap-4">
        <Row items={STUDENTS.slice(0, half)} />
        <Row items={STUDENTS.slice(half)} reverse />
      </div>
    </section>
  );
}
