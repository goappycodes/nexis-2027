import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import StudentWall from "./StudentWall";
import { OUTCOME_STATS, PATHWAYS } from "@/lib/content";

export default function Outcomes() {
  return (
    <section id="outcomes" className="shell scroll-mt-24 py-12 sm:py-20 lg:py-28">
      <SectionHeader
        index="05"
        kicker="Outcomes"
        title={
          <>
            Careers don&rsquo;t start after NEXIS.
            <br className="hidden sm:block" /> They start the day you{" "}
            <span className="serif-em text-crimson">join</span>.
          </>
        }
        lede="First-year students are already interning, earning and winning national recognition. By the time they finish, they've built a track record most graduates are still waiting for."
      />

      {/* Stat band */}
      <div className="mt-10 sm:mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-line bg-line lg:grid-cols-4">
        {OUTCOME_STATS.map((s, i) => (
          <Reveal key={s.l} delay={i * 70} className="bg-paper p-5 sm:p-8">
            <p className="display text-[clamp(2.4rem,5vw,3.4rem)] text-ink">
              {s.k}
            </p>
            <p className="mt-2 text-[0.86rem] leading-snug text-muted">{s.l}</p>
          </Reveal>
        ))}
      </div>

      {/* The proof — real students at work */}
      <StudentWall />

      {/* Pathways */}
      <div className="mt-10 sm:mt-16 grid gap-5 md:grid-cols-3">
        {PATHWAYS.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 90}
            className="lift flex flex-col rounded-[4px] border border-line bg-paper p-8 sm:p-8 max-sm:p-6"
          >
            <span className="kicker text-crimson">{p.meta}</span>
            <h3 className="mt-5 font-serif text-2xl leading-tight">{p.title}</h3>
            <p className="mt-3 flex-1 text-[0.96rem] leading-relaxed text-ink-2">
              {p.d}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
