import Image from "next/image";
import Reveal from "./Reveal";
import { PRESS } from "@/lib/content";

export default function PressStrip() {
  return (
    <section className="border-y border-line bg-paper py-14">
      <div className="shell">
        <Reveal className="mb-8 flex items-center gap-4">
          <span className="kicker">NEXIS in the news</span>
          <span className="h-px flex-1 bg-line" />
        </Reveal>
        <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {PRESS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 60}
              className="group flex h-24 items-center justify-center rounded-[4px] border border-line bg-paper-2/40 p-4"
            >
              <div className="relative h-full w-full">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="200px"
                  className="object-contain opacity-70 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
