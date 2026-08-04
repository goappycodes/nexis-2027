import Image from "next/image";
import Reveal from "./Reveal";
import { FOUNDERS } from "@/lib/content";

export default function Founders({ index = "07" }: { index?: string }) {
  return (
    <section className="border-y border-line bg-paper-2/50 py-12 sm:py-20 lg:py-28">
      <div className="shell">
        <div className="max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-4">
              {index && (
                <>
                  <span className="section-index">{index}</span>
                  <span className="h-px w-10 bg-line" />
                </>
              )}
              <span className="kicker">The Founders</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display balance mt-6 text-[clamp(2rem,4.6vw,3.5rem)]">
              Built by alumni of India&rsquo;s{" "}
              <span className="serif-em text-crimson">finest</span>.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-ink-2">
              NEXIS was founded by people who studied at the country&rsquo;s top
              institutions and built careers at its most respected firms — and
              chose to build the school they wished they&rsquo;d had.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 sm:mt-16 grid gap-5 md:grid-cols-2">
          {FOUNDERS.map((f, i) => (
            <Reveal
              key={f.name}
              delay={i * 100}
              className="flex flex-col gap-6 rounded-[2px] border border-line bg-paper p-6 sm:p-8 sm:flex-row sm:items-start sm:p-10"
            >
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[2px] bg-paper-2 ring-1 ring-line">
                <Image
                  src={f.img}
                  alt={f.name}
                  fill
                  sizes="120px"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl leading-tight">{f.name}</h3>
                <p className="mt-1 text-[0.86rem] text-muted">{f.role}</p>
                <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                  {f.creds.map((c) => (
                    <li
                      key={c}
                      className="flex items-center gap-3 text-[0.95rem] text-ink-2"
                    >
                      <span className="h-1 w-1 rounded-full bg-crimson" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
