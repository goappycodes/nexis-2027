import Reveal from "./Reveal";
import { WHY_NEXIS } from "@/lib/content";

export default function HomeWhy() {
  return (
    <section id="why" className="scroll-mt-24 bg-ink text-paper">
      <div className="shell py-12 sm:py-20 lg:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <p className="kicker flex items-center gap-3 text-white/55">
              <span className="h-px w-8 bg-crimson" />
              Why NEXIS
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display balance mt-5 text-[clamp(2rem,4.6vw,3.5rem)]">
              A business school,{" "}
              <span className="serif-em text-crimson">reimagined</span>.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-white/70">
              We set aside the lecture-first tradition and rebuilt business
              education around practice — building, selling, consulting and
              shipping from the very first semester.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 sm:mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[2px] border border-white/15 bg-white/15 lg:grid-cols-4">
          {WHY_NEXIS.map((w, i) => (
            <Reveal
              key={w.t}
              delay={i * 80}
              className="bg-ink p-4 sm:p-8"
            >
              <p className="display text-3xl text-crimson sm:text-5xl">{w.k}</p>
              <h3 className="mt-3 font-serif text-base leading-tight sm:mt-4 sm:text-xl">
                {w.t}
              </h3>
              <p className="mt-2 text-[0.86rem] leading-relaxed text-white/60 sm:mt-3 sm:text-[0.95rem]">
                {w.d}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
