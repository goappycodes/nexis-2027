import Reveal from "./Reveal";
import StudentWall from "./StudentWall";

export default function HomeProof() {
  return (
    <section id="students" className="shell scroll-mt-24 py-12 sm:py-20 lg:py-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <Reveal>
            <p className="kicker flex items-center gap-3">
              <span className="h-px w-8 bg-crimson" />
              The proof
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display balance mt-5 text-[clamp(2rem,4.6vw,3.5rem)]">
              Believe us — these are{" "}
              <span className="serif-em text-crimson">first-year</span> students.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <p className="max-w-sm text-[0.98rem] leading-relaxed text-ink-2">
            Already interning, earning and winning national recognition — in
            their very first year on campus.
          </p>
        </Reveal>
      </div>

      <StudentWall />
    </section>
  );
}
