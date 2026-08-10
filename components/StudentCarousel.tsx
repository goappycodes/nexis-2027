import Image from "next/image";
import { STUDENTS } from "@/lib/content";

/** Three rows of student faces, each auto-scrolling as a marquee, with the
    left/right edges faded out. Middle row scrolls the opposite way. Pauses on
    hover; falls back to static under prefers-reduced-motion (see globals.css). */
export default function StudentCarousel() {
  const rows = [
    STUDENTS.slice(0, 9),
    STUDENTS.slice(9, 18),
    STUDENTS.slice(18, 27),
  ];

  return (
    <div className="marquee-mask space-y-3 overflow-hidden">
      {rows.map((row, ri) => {
        const doubled = [...row, ...row];
        return (
          <div
            key={ri}
            className="flex w-max gap-3 animate-marquee hover:[animation-play-state:paused]"
            style={ri % 2 === 1 ? { animationDirection: "reverse" } : undefined}
          >
            {doubled.map((s, i) => (
              <div
                key={`${s.name}-${i}`}
                className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[2px] bg-paper-2 sm:h-28 sm:w-28"
                title={`${s.name} — ${s.org}`}
              >
                <Image
                  src={s.img}
                  alt={`${s.name} — ${s.org}`}
                  fill
                  sizes="120px"
                  className="object-cover grayscale-[20%]"
                />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
