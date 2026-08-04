import Image from "next/image";
import Reveal from "./Reveal";
import { ArrowRight, ArrowUpRight } from "./icons";

const HOME_FACTS = [
  { label: "Learning", value: "70% hands-on", sub: "you do the work" },
  { label: "Mentors", value: "50+ CXOs", sub: "founders & leaders" },
  { label: "Network", value: "75+ companies", sub: "recruiters & partners" },
  { label: "Campus", value: "Siliguri", sub: "on-campus, opt-in stay" },
];

export default function HomeHero() {
  return (
    <section id="top" className="relative">
      <div className="shell relative z-10 pt-5 pb-7 sm:pt-9 sm:pb-9 lg:pt-11">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left — statement */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="kicker flex items-center gap-3">
                <span className="h-px w-8 bg-crimson" />
                NEXIS School of Business · Siliguri
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="display balance mt-4 text-[clamp(2.5rem,6.4vw,5.1rem)]">
                India&rsquo;s most{" "}
                <span className="serif-em text-crimson">practical</span> business
                school.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-ink-2">
                Learn by doing. Work from day one. Build the skills real careers
                are made of — mentored by founders and CXOs, at a modern campus
                in Siliguri.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href="#programs" className="btn btn-crimson">
                  Explore programs
                  <ArrowRight className="arrow" />
                </a>
                <a href="#campus" className="btn btn-ghost">
                  Take a campus tour
                  <ArrowUpRight className="arrow" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right — campus plate */}
          <div className="lg:col-span-5">
            <Reveal delay={200} className="relative">
              <figure className="relative aspect-[16/10] overflow-hidden rounded-[2px] bg-paper-2 sm:aspect-[4/5] lg:aspect-[7/8]">
                <Image
                  src="/images/campus/apex-hall.jpg"
                  alt="Students inside the NEXIS campus in Siliguri"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-paper/90 px-3.5 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-ink backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                  Live on campus
                </figcaption>
              </figure>

              <div className="absolute -left-3 -top-3 hidden rounded-[2px] border border-line bg-paper px-4 py-3 shadow-[0_18px_40px_-24px_rgba(11,12,16,0.5)] sm:block lg:-left-8">
                <p className="font-serif text-3xl leading-none">50+</p>
                <p className="mt-1 text-[0.68rem] uppercase tracking-[0.12em] text-muted">
                  CXO mentors
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Fact rail */}
      <div className="relative z-10 border-y border-line">
        <div className="shell grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
          {HOME_FACTS.map((f, i) => (
            <Reveal
              key={f.label}
              delay={i * 70}
              className={`py-4 sm:py-6 md:px-7 md:first:pl-0 ${
                i % 2 === 0 ? "pr-4" : "pl-4 md:pl-7"
              } ${i < 2 ? "border-b border-line md:border-b-0" : ""}`}
            >
              <p className="kicker">{f.label}</p>
              <p className="mt-2 font-serif text-xl leading-tight">{f.value}</p>
              <p className="mt-0.5 text-[0.8rem] text-muted">{f.sub}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
