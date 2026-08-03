import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { ArrowUpRight } from "./icons";
import { EXPERIENCES } from "@/lib/content";

export default function HowYouLearn() {
  return (
    <section id="learn" className="shell scroll-mt-24 py-20 sm:py-28 lg:py-32">
      <SectionHeader
        index="03"
        kicker="How you'll learn"
        title={
          <>
            Learn by doing — not by{" "}
            <span className="serif-em text-crimson">sitting</span>.
          </>
        }
        lede="Every semester puts you inside a real challenge. These are the signature experiences that turn students into operators before they graduate."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {EXPERIENCES.map((e, i) => (
          <Reveal
            key={e.title}
            delay={(i % 3) * 90}
            className="lift group flex flex-col overflow-hidden rounded-[4px] border border-line bg-paper hover:border-ink/30"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
              <Image
                src={e.img}
                alt={e.title}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-crimson backdrop-blur">
                {e.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-2xl leading-tight">{e.title}</h3>
                <ArrowUpRight className="mt-1 text-lg text-muted transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
              </div>
              <p className="mt-3 flex-1 text-[0.96rem] leading-relaxed text-ink-2">
                {e.d}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
