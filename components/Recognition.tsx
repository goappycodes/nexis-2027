import Reveal from "./Reveal";
import { RECRUITER_LOGOS, ACCREDITATION } from "@/lib/content";

export default function Recognition({
  vibrant = false,
  doubleRow = false,
  showAccreditation = true,
  showKicker = true,
}: {
  /** Full-colour logos in bordered chips, instead of the muted grayscale
      marquee — used where the recruiter row should read as a bolder,
      more eye-catching proof point (e.g. the 2027 landing page). */
  vibrant?: boolean;
  /** Two slow, opposing rows for the landing-page partner showcase. */
  doubleRow?: boolean;
  /** Hides the "Recognised & backed by" marks and the compliance
      paragraph — used where that block is being held back temporarily
      (e.g. the 2027 landing page). */
  showAccreditation?: boolean;
  /** Hides the "Where our students already work & learn" kicker —
      used where a page already supplies its own lead-in line right
      above this component (e.g. the 2027 landing page). */
  showKicker?: boolean;
}) {
  const offset = Math.ceil(RECRUITER_LOGOS.length / 2);
  const rows = doubleRow
    ? [RECRUITER_LOGOS.slice(0, offset), RECRUITER_LOGOS.slice(offset)]
    : [RECRUITER_LOGOS];
  return (
    <section className="overflow-hidden border-b border-line bg-paper-2/50 py-6 sm:py-10">
      {showKicker && (
        <div className="shell">
          <Reveal className="mb-9 text-center">
            <p className="kicker">
              Where our students already work &amp; learn
            </p>
          </Reveal>
        </div>
      )}

      {/* Exact duplicated groups keep the loops seamless in both directions. */}
      <div className="group marquee-mask space-y-3 overflow-hidden sm:space-y-4" tabIndex={0} aria-label="Recruiter and partner companies. Focus or hover to pause scrolling.">
        {rows.map((logos, rowIndex) => (
          <div
            key={rowIndex}
            className="flex w-max items-center animate-marquee group-hover:[animation-play-state:paused] group-focus:[animation-play-state:paused]"
            style={doubleRow ? { animationDuration: "100s", animationDirection: rowIndex === 0 ? "normal" : "reverse" } : undefined}
          >
            {(doubleRow ? [...logos, ...logos, ...logos, ...logos] : [...logos, ...logos]).map((l, i) =>
              vibrant ? (
                <div
                  key={`${l.name}-${i}`}
                  className="mx-2 flex h-14 shrink-0 items-center justify-center rounded-[6px] border border-line bg-paper px-6 shadow-[0_10px_30px_-20px_rgba(11,12,16,0.4)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-18px_rgba(11,12,16,0.5)] sm:h-16 sm:px-8"
                  title={l.name}
                  aria-hidden={i >= logos.length ? true : undefined}
                >
                  {/* plain img so SVG logos render without optimizer config */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={l.src}
                    alt={l.name}
                    className="h-7 w-auto max-w-[132px] object-contain sm:h-8"
                  />
                </div>
              ) : (
                <div
                  key={`${l.name}-${i}`}
                  className="flex h-12 shrink-0 items-center justify-center px-8 sm:px-10"
                  title={l.name}
                  aria-hidden={i >= logos.length ? true : undefined}
                >
                  {/* plain img so SVG logos render without optimizer config */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={l.src}
                    alt={l.name}
                    className="h-6 w-auto max-w-[132px] object-contain opacity-70 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 sm:h-7"
                  />
                </div>
              ),
            )}
          </div>
        ))}
      </div>

      {/* Recognised & backed by — official marks, dark on the light band */}
      {showAccreditation && (
        <>
          <div className="shell mt-10 sm:mt-12">
            <Reveal className="flex flex-col items-center gap-7 border-t border-line pt-9 md:flex-row md:justify-between md:gap-10">
              <span className="kicker shrink-0 text-muted">
                Recognised &amp; backed by
              </span>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
                {ACCREDITATION.map((a) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={a.name}
                    src={a.src}
                    alt={a.name}
                    className="h-9 w-auto max-w-[150px] object-contain opacity-80 [filter:brightness(0)] transition duration-500 hover:opacity-100 sm:h-11"
                  />
                ))}
              </div>
            </Reveal>
          </div>

          <div className="shell mt-10">
            <Reveal className="mx-auto max-w-3xl text-center text-[0.9rem] leading-relaxed text-muted">
              <p>
                NEXIS is a school of business and skilling institution — a
                Training Body accredited by{" "}
                <span className="font-medium text-ink-2">MEPSC</span>, an
                awarding body recognised by{" "}
                <span className="font-medium text-ink-2">NCVET</span>. Every
                year of the program earns a nationally recognised,{" "}
                <span className="font-medium text-ink-2">NSQF-aligned</span>{" "}
                qualification. We don&rsquo;t confer degrees — we build
                careers.
              </p>
            </Reveal>
          </div>
        </>
      )}
    </section>
  );
}
