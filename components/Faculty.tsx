import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { FACULTY } from "@/lib/content";

function monogram(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export default function Faculty() {
  return (
    <section
      id="faculty"
      className="scroll-mt-24 border-y border-line bg-paper-2/50 py-20 sm:py-28 lg:py-32"
    >
      <div className="shell">
        <SectionHeader
          index="04"
          kicker="Faculty & Mentors"
          title={
            <>
              Taught by people who&rsquo;ve{" "}
              <span className="serif-em text-crimson">actually</span> built.
            </>
          }
          lede="50+ founders and CXOs mentor on campus, with 30+ masterclasses every semester. You learn how businesses are really built, scaled and sustained — directly from those who did it."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {FACULTY.map((m, i) => (
            <Reveal
              key={m.name}
              delay={i * 90}
              className="lift flex flex-col rounded-[4px] border border-line bg-paper p-8"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-paper-2 font-serif text-lg text-crimson">
                  {monogram(m.name)}
                </span>
                <div>
                  <h3 className="font-serif text-xl leading-tight">{m.name}</h3>
                  <p className="kicker mt-1 text-crimson">{m.role}</p>
                </div>
              </div>
              <p className="mt-6 text-[0.96rem] leading-relaxed text-ink-2">
                {m.d}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <a href="#prospectus" className="ulink text-[0.9rem] font-medium">
            See the full faculty line-up &rarr;
          </a>
        </Reveal>
      </div>
    </section>
  );
}
