import Image from "next/image";
import Reveal from "./Reveal";
import { STUDENTS } from "@/lib/content";

export default function StudentWall() {
  return (
    <div className="mt-6">
      <Reveal className="mb-5 flex items-center gap-4 sm:mb-6">
        <span className="kicker text-crimson">The Class of 2025, at work</span>
        <span className="h-px flex-1 bg-line" />
        <span className="shrink-0 text-[0.8rem] text-muted">
          {STUDENTS.length} students
        </span>
      </Reveal>

      <p className="mb-3 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-muted sm:hidden">
        Swipe to meet the cohort
      </p>

      <ul
        id="student-roster"
        aria-label="Class of 2025 students and their organisations"
        className="-mx-[var(--gutter)] flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-[var(--gutter)] pb-3 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-5 sm:gap-2 sm:overflow-visible sm:px-0 sm:pb-0 md:grid-cols-6 lg:grid-cols-10 [&::-webkit-scrollbar]:hidden"
      >
        {STUDENTS.map((s, i) => (
          <Reveal
            key={s.name}
            delay={(i % 10) * 40}
            as="li"
            className="group relative aspect-[4/5] w-[43vw] max-w-[172px] shrink-0 snap-start overflow-hidden rounded-[3px] bg-paper-2 sm:aspect-square sm:w-auto sm:max-w-none"
          >
            <Image
              src={s.img}
              alt={`${s.name} — ${s.org}`}
              fill
              sizes="(max-width:640px) 43vw, (max-width:1024px) 16vw, 10vw"
              className="object-cover grayscale-[30%] transition-all duration-700 ease-premium group-hover:scale-110 group-hover:grayscale-0"
            />
            {/* Names stay visible on touch screens; the denser desktop wall reveals them on hover. */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 p-3 opacity-100 transition-all duration-400 ease-premium sm:translate-y-1.5 sm:p-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
              <p className="text-[0.82rem] font-semibold leading-tight text-white sm:text-[0.72rem]">
                {s.name}
              </p>
              <p className="mt-1 text-[0.62rem] uppercase leading-tight tracking-[0.06em] text-white/80 sm:mt-0.5 sm:text-[0.58rem]">
                {s.org}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
