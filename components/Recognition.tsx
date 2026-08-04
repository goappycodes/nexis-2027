import Reveal from "./Reveal";
import { RECRUITER_LOGOS, ACCREDITATION } from "@/lib/content";

export default function Recognition() {
  const row = [...RECRUITER_LOGOS, ...RECRUITER_LOGOS];
  return (
    <section className="overflow-hidden border-b border-line bg-paper-2/50 py-9 sm:py-12">
      <div className="shell">
        <Reveal className="mb-9 text-center">
          <p className="kicker">Where our students already work &amp; learn</p>
        </Reveal>
      </div>

      {/* Single-row logo carousel */}
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max items-center animate-marquee">
          {row.map((l, i) => (
            <div
              key={`${l.name}-${i}`}
              className="flex h-12 shrink-0 items-center justify-center px-8 sm:px-10"
              title={l.name}
            >
              {/* plain img so SVG logos render without optimizer config */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={l.src}
                alt={l.name}
                className="h-6 w-auto max-w-[132px] object-contain opacity-70 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 sm:h-7"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Recognised & backed by — official marks on a dark plate */}
      <div className="shell mt-10 sm:mt-12">
        <Reveal className="overflow-hidden rounded-[6px] bg-ink px-6 py-7 sm:px-10 sm:py-8">
          <div className="flex flex-col items-center gap-7 md:flex-row md:justify-between md:gap-10">
            <span className="kicker shrink-0 text-white/50">
              Recognised &amp; backed by
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-6 sm:gap-x-12">
              {ACCREDITATION.map((a) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={a.name}
                  src={a.src}
                  alt={a.name}
                  className="h-9 w-auto max-w-[150px] object-contain sm:h-11"
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="shell mt-9">
        <Reveal className="mx-auto max-w-3xl text-center text-[0.9rem] leading-relaxed text-muted">
          <p>
            NEXIS is a school of business and skilling institution — a Training
            Body accredited by{" "}
            <span className="font-medium text-ink-2">MEPSC</span>, an awarding
            body recognised by{" "}
            <span className="font-medium text-ink-2">NCVET</span>. Every year of
            the program earns a nationally recognised,{" "}
            <span className="font-medium text-ink-2">NSQF-aligned</span>{" "}
            qualification. We don&rsquo;t confer degrees — we build careers.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
