import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { DIFFERENTIATORS } from "@/lib/content";

export default function Overview() {
  return (
    <section id="program" className="shell scroll-mt-24 py-12 sm:py-20 lg:py-28">
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

      <div className="mt-8 sm:mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-line bg-line">
        {DIFFERENTIATORS.map((d, i) => (
          <Reveal
            key={d.t}
            delay={i * 80}
            className="group bg-paper p-4 transition-colors duration-500 hover:bg-paper-2/70 sm:p-10"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
              <span className="display text-3xl text-crimson sm:text-5xl">
                {d.k}
              </span>
              <span className="font-serif text-base leading-tight text-ink sm:text-lg">
                {d.t}
              </span>
            </div>
            <p className="mt-3 max-w-md text-[0.86rem] leading-relaxed text-ink-2 sm:mt-5 sm:text-[0.98rem]">
              {d.d}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
