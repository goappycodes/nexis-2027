import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { DIFFERENTIATORS } from "@/lib/content";

export default function Overview() {
  return (
    <section id="program" className="shell scroll-mt-24 py-20 sm:py-28 lg:py-32">
      <SectionHeader
        index="01"
        kicker="The Program"
        title={
          <>
            An undergraduate program that
            <br className="hidden sm:block" /> behaves like a{" "}
            <span className="serif-em text-crimson">startup</span>.
          </>
        }
        lede="Three years, structured around real work. You build ventures, consult businesses, intern with founders and graduate with a portfolio — not just a transcript. Here is what makes it different."
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2">
        {DIFFERENTIATORS.map((d, i) => (
          <Reveal
            key={d.t}
            delay={i * 80}
            className="group bg-paper p-8 transition-colors duration-500 hover:bg-paper-2/70 sm:p-10"
          >
            <div className="flex items-baseline gap-4">
              <span className="display text-4xl text-crimson sm:text-5xl">
                {d.k}
              </span>
              <span className="font-serif text-lg text-ink">{d.t}</span>
            </div>
            <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-ink-2">
              {d.d}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
