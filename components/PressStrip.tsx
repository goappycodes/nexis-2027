import Image from "next/image";
import Reveal from "./Reveal";
import { PRESS } from "@/lib/content";

export default function PressStrip() {
  return (
    <section id="news" className="scroll-mt-24 border-y border-line bg-paper py-9 sm:py-14 lg:py-18">
      <div className="shell">
        <Reveal className="mb-10 flex items-center gap-4">
          <span className="kicker">NEXIS in the news</span>
          <span className="h-px flex-1 bg-line" />
        </Reveal>

        <div className="flex flex-wrap justify-center gap-5">
          {PRESS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 60}
              className="group w-[46%] sm:w-[31%] lg:w-[18.5%]"
            >
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] border border-line bg-paper-2">
                  <Image
                    src={p.img}
                    alt={`${p.name} — coverage of NEXIS`}
                    fill
                    sizes="(max-width:640px) 46vw, (max-width:1024px) 31vw, 19vw"
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-3 flex items-center justify-center gap-2 text-center text-[0.82rem] font-medium text-ink-2">
                  <span className="h-1 w-1 rounded-full bg-crimson" />
                  {p.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
