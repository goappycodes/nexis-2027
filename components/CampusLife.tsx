import Image from "next/image";
import Reveal from "./Reveal";
import { CAMPUS_STATS, CAMPUS_IMAGES } from "@/lib/content";

const HIGHLIGHTS = [
  "Student-led houses",
  "10+ sports",
  "Thriving clubs",
  "Bi-monthly competitions",
  "Treasure hunts",
  "Lifelong friendships",
];

// Bento column spans keyed by tile index for an editorial rhythm.
// Wide tiles at 0, 3, 6 keep each 4-col row balanced (2+1+1).
const SPAN = [
  "col-span-2 lg:col-span-2", // 0 life-at-nexis collage (wide)
  "",
  "",
  "col-span-2 lg:col-span-2", // 3 breakout spaces (wide)
  "",
  "",
  "col-span-2 lg:col-span-2", // 6 made to inspire (wide)
  "",
  "",
];

export default function CampusLife() {
  return (
    <section id="campus" className="scroll-mt-24 py-20 sm:py-28 lg:py-32">
      <div className="shell">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="section-index">06</span>
                <span className="h-px w-10 bg-line" />
                <span className="kicker">Campus Life</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-6 text-[clamp(2rem,4.6vw,3.5rem)]">
                A campus that buzzes{" "}
                <span className="serif-em text-crimson">every single day</span>.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-ink-2">
                A 360° experience at a next-gen campus in the heart of Siliguri.
                Lead clubs, represent your house, compete every month and build a
                network — and friendships — that outlast the program.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {HIGHLIGHTS.map((h) => (
                  <span
                    key={h}
                    className="rounded-full border border-line px-4 py-2 text-[0.82rem] text-ink-2"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Stats */}
          <div className="lg:col-span-5">
            <div className="border-t border-line">
              {CAMPUS_STATS.map((s, i) => (
                <Reveal
                  key={s.l}
                  delay={i * 90}
                  className="flex items-baseline gap-5 border-b border-line py-6"
                >
                  <p className="display w-32 shrink-0 text-[clamp(2rem,4.5vw,3rem)] text-crimson">
                    {s.k}
                  </p>
                  <p className="text-[0.95rem] leading-relaxed text-ink-2">
                    {s.l}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Bento gallery */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CAMPUS_IMAGES.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) * 60}
              className={`group relative aspect-[4/3] overflow-hidden rounded-[4px] bg-paper-2 ${SPAN[i] || ""}`}
            >
              <Image
                src={img.src}
                alt={img.cap}
                fill
                sizes="(max-width:640px) 50vw, (max-width:1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 flex items-center gap-2 p-4 text-[0.78rem] font-medium text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                {img.cap}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
