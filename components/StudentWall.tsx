import Image from "next/image";
import Reveal from "./Reveal";
import { STUDENTS } from "@/lib/content";

export default function StudentWall() {
  return (
    <div className="mt-6">
      <Reveal className="mb-6 flex items-center gap-4">
        <span className="kicker text-crimson">The Class of 2025, at work</span>
        <span className="h-px flex-1 bg-line" />
        <span className="text-[0.8rem] text-muted">{STUDENTS.length} students</span>
      </Reveal>

      <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-5 sm:gap-2 md:grid-cols-6 lg:grid-cols-10">
        {STUDENTS.map((s, i) => (
          <Reveal
            key={s.name}
            delay={(i % 10) * 40}
            className="group relative aspect-square overflow-hidden rounded-[2px] bg-paper-2"
          >
            <Image
              src={s.img}
              alt={`${s.name} — ${s.org}`}
              fill
              sizes="(max-width:640px) 30vw, (max-width:1024px) 16vw, 10vw"
              className="object-cover grayscale-[30%] transition-all duration-700 ease-premium group-hover:scale-110 group-hover:grayscale-0"
            />
            {/* Hover caption — gradient appears on hover so text stays legible */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 translate-y-1.5 p-2 opacity-0 transition-all duration-400 ease-premium group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-[0.72rem] font-semibold leading-tight text-white">
                {s.name}
              </p>
              <p className="mt-0.5 text-[0.58rem] uppercase leading-tight tracking-[0.06em] text-white/85">
                {s.org}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
