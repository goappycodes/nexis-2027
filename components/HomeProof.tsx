import Reveal from "./Reveal";
import StudentWall from "./StudentWall";

export default function HomeProof() {
  return (
    <section id="students" className="shell scroll-mt-24 py-8 sm:py-16 lg:py-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <Reveal>
            <p className="kicker flex items-center gap-3">
              <span className="h-px w-8 bg-crimson" />
              Our students
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display balance mt-5 text-[clamp(2rem,4.6vw,3.5rem)]">
              Already in the{" "}
              <span className="serif-em text-crimson">field</span>.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <p className="max-w-sm text-[0.98rem] leading-relaxed text-ink-2">
            Interning, building real ventures and winning national recognition —
            many of them in their very first year.
          </p>
        </Reveal>
      </div>

      <StudentWall />
    </section>
  );
}
