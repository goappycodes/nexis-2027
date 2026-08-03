import Reveal from "./Reveal";
import { CURRICULUM } from "@/lib/content";
import { Spark } from "./icons";

export default function Curriculum() {
  return (
    <section
      id="curriculum"
      className="relative scroll-mt-24 bg-ink text-paper"
    >
      <div className="shell py-20 sm:py-28 lg:py-32">
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="section-index">02</span>
              <span className="h-px w-10 bg-white/25" />
              <span className="kicker text-white/55">The Curriculum</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display balance mt-6 text-[clamp(2rem,4.6vw,3.5rem)]">
              Three years. Three edges you&rsquo;ll{" "}
              <span className="serif-em text-crimson">own</span>.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-white/70">
              A deliberately sequenced journey — each year a complete,
              nationally recognised qualification in its own right, and a
              building block toward the founder you become.
            </p>
          </Reveal>
        </div>

        {/* Year rows */}
        <div className="mt-16 border-t border-white/15">
          {CURRICULUM.map((c, i) => (
            <Reveal
              key={c.year}
              delay={i * 60}
              className="group grid gap-6 border-b border-white/15 py-10 md:grid-cols-12 md:items-start md:gap-10 md:py-12"
            >
              {/* Year marker */}
              <div className="md:col-span-3">
                <p className="kicker text-crimson">{c.year}</p>
                <p className="display mt-3 text-[clamp(2.4rem,6vw,4rem)] text-white/12 transition-colors duration-500 group-hover:text-white/25">
                  0{i + 1}
                </p>
              </div>

              {/* Title + lede */}
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl leading-tight sm:text-[1.7rem]">
                  {c.title}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-white/65">
                  {c.lede}
                </p>
                <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.1em] text-white/55">
                  <Spark className="text-crimson" />
                  {c.qualification}
                </p>
              </div>

              {/* What you do */}
              <div className="md:col-span-5">
                <ul className="space-y-3">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[0.98rem] text-white/80">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-crimson" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <a href="#prospectus" className="btn btn-light">
            Explore the full 3-year curriculum
          </a>
        </Reveal>
      </div>
    </section>
  );
}
