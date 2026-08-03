import Reveal from "./Reveal";
import { RECRUITER_LOGOS } from "@/lib/content";

export default function Recognition() {
  const row = [...RECRUITER_LOGOS, ...RECRUITER_LOGOS];
  return (
    <section className="overflow-hidden border-b border-line bg-paper-2/50 py-12">
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

      <div className="shell mt-11">
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
