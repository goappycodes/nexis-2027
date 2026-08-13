import { STUDENTS } from "@/lib/content";

/** Two dense rows of student portraits scrolling in opposite directions, each
    fading out at both ends. Cards are a fixed height with natural widths, and
    the original files are served straight from /public — so no photo is
    cropped or resized down. Pauses on hover; static under reduced motion. */
export default function StudentCarousel() {
  const half = Math.ceil(STUDENTS.length / 2);
  const rows = [STUDENTS.slice(0, half), STUDENTS.slice(half)];

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
              <figure
                key={`${s.name}-${i}`}
                className="relative h-[132px] shrink-0 overflow-hidden rounded-[3px] border border-white/10 bg-white/5 sm:h-[156px] lg:h-[172px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.img}
                  alt={`${s.name} — ${s.org}`}
                  loading="lazy"
                  decoding="async"
                  className="block h-full w-auto max-w-none"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/55 to-transparent p-2.5 pt-8">
                  <p className="font-serif text-[0.78rem] leading-tight text-white">
                    {s.name}
                  </p>
                  <p className="mt-0.5 truncate text-[0.54rem] font-semibold uppercase tracking-[0.1em] text-lime">
                    {s.org}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        );
      })}
    </div>
  );
}
