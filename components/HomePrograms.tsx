import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowUpRight } from "./icons";
import { PROGRAMS } from "@/lib/content";

export default function HomePrograms() {
  return (
    <section id="programs" className="shell scroll-mt-24 py-12 sm:py-20 lg:py-28">
      {/* Header */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <Reveal>
            <p className="kicker flex items-center gap-3">
              <span className="h-px w-8 bg-crimson" />
              Our Programs
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display balance mt-5 text-[clamp(2rem,4.6vw,3.5rem)]">
              Choose the path that fits your{" "}
              <span className="serif-em text-crimson">ambition</span>.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <p className="max-w-sm text-[0.98rem] leading-relaxed text-ink-2">
            Three programs, one philosophy — learn the skills that businesses
            actually pay for, by doing the work from day one.
          </p>
        </Reveal>
      </div>

      {/* Cards */}
      <div className="mt-10 sm:mt-16 grid gap-5 md:grid-cols-3">
        {PROGRAMS.map((p, i) => {
          const Card = p.live ? Link : "div";
          return (
            <Reveal key={p.title} delay={i * 90}>
              <Card
                href={p.href as string}
                className={`lift group flex h-full flex-col overflow-hidden rounded-[4px] border border-line bg-paper ${
                  p.live ? "hover:border-ink/30" : ""
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-crimson backdrop-blur">
                    {p.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-serif text-2xl leading-tight">{p.title}</h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-2">
                    {p.d}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.meta.map((m) => (
                      <span
                        key={m}
                        className="rounded-full border border-line px-3 py-1 text-[0.72rem] text-muted"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                    <span
                      className={`text-[0.82rem] font-medium ${
                        p.live ? "text-ink" : "text-muted"
                      }`}
                    >
                      {p.live ? "Explore program" : "Coming soon"}
                    </span>
                    {p.live && (
                      <ArrowUpRight className="text-lg text-crimson transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    )}
                  </div>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
