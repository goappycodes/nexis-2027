import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import FacultyAvatar from "./FacultyAvatar";
import { FACULTY, RECRUITER_LOGOS } from "@/lib/content";

// A few marquee logos to show where mentors come from.
const MENTOR_LOGOS = ["boAt", "Lenskart", "Zomato", "Snitch", "Swiggy", "Razorpay"]
  .map((n) => RECRUITER_LOGOS.find((l) => l.name === n))
  .filter(Boolean) as { name: string; src: string }[];

export default function Faculty() {
  return (
    <section
      id="faculty"
      className="scroll-mt-24 border-y border-line bg-paper-2/50 py-20 sm:py-28 lg:py-32"
    >
      <div className="shell">
        <SectionHeader
          index="04"
          kicker="Faculty & Mentors"
          title={
            <>
              Taught by people who&rsquo;ve{" "}
              <span className="serif-em text-crimson">actually</span> built.
            </>
          }
          lede="50+ founders and CXOs mentor on campus, with 30+ masterclasses every semester. You learn how businesses are really built, scaled and sustained — directly from those who did it."
        />

        {/* Where your mentors come from */}
        <Reveal className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6 border-y border-line py-7">
          <span className="kicker shrink-0 text-muted">Mentors come from</span>
          {MENTOR_LOGOS.map((l) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={l.name}
              src={l.src}
              alt={l.name}
              className="h-6 w-auto max-w-[120px] object-contain opacity-70 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {FACULTY.map((m, i) => (
            <Reveal
              key={m.name}
              delay={i * 90}
              className="lift flex flex-col rounded-[4px] border border-line bg-paper p-8"
            >
              <div className="flex items-center gap-4">
                <FacultyAvatar src={m.img} name={m.name} />
                <div>
                  <h3 className="font-serif text-xl leading-tight">{m.name}</h3>
                  <p className="kicker mt-1 text-crimson">{m.role}</p>
                </div>
              </div>
              <p className="mt-6 text-[0.96rem] leading-relaxed text-ink-2">
                {m.d}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <a href="#prospectus" className="ulink text-[0.9rem] font-medium">
            See the full faculty line-up &rarr;
          </a>
        </Reveal>
      </div>
    </section>
  );
}
