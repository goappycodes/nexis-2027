import Image from "next/image";
import Reveal from "./Reveal";
import { ArrowRight, ArrowUpRight } from "./icons";
import { BATCH, PROGRAM_FACTS } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="shell relative z-10 pt-14 pb-10 sm:pt-20 lg:pt-24">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          {/* Left — the statement */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="kicker flex items-center gap-3">
                <span className="h-px w-8 bg-crimson" />
                Undergraduate Program in Business Management
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="display balance mt-7 text-[clamp(2.9rem,8.2vw,6.6rem)]">
                Learn business
                <br />
                by <span className="serif-em text-crimson">building</span> it.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-ink-2">
                A three-year, on-campus program in {BATCH.city} where you work on
                real businesses from your first semester — mentored by founders
                and CXOs, not just lectured at. This is the most practical
                business education in India.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#apply" className="btn btn-crimson">
                  Apply for the {BATCH.cohort.split("–")[0]}
                  <ArrowRight className="arrow" />
                </a>
                <a href="#prospectus" className="btn btn-ghost">
                  Download prospectus
                  <ArrowUpRight className="arrow" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right — editorial campus plate */}
          <div className="lg:col-span-5">
            <Reveal delay={200} className="relative">
              <figure className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-paper-2">
                <Image
                  src="/images/campus/cafeteria.jpg"
                  alt="Inside the NEXIS campus in Siliguri"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-paper/90 px-3.5 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-ink backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                  Campus · {BATCH.city}
                </figcaption>
              </figure>

              {/* Floating credential chip */}
              <div className="absolute -left-3 -top-3 hidden rounded-[4px] border border-line bg-paper px-4 py-3 shadow-[0_18px_40px_-24px_rgba(11,12,16,0.5)] sm:block lg:-left-8">
                <p className="font-serif text-3xl leading-none">70%</p>
                <p className="mt-1 text-[0.68rem] uppercase tracking-[0.12em] text-muted">
                  hands-on
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Fact rail */}
      <div className="relative z-10 border-y border-line">
        <div className="shell grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
          {PROGRAM_FACTS.map((f, i) => (
            <Reveal
              key={f.label}
              delay={i * 70}
              className={`py-6 md:px-7 md:first:pl-0 ${
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
