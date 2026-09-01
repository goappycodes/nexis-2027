import type { Metadata } from "next";
import Image from "next/image";
import UgDetailShell from "@/components/UgDetailShell";
import StudentStrip from "@/components/StudentStrip";
import Reveal from "@/components/Reveal";
import { AccentRule, CARD_DARK, CARD_LIGHT, Kicker } from "@/components/editorial";
import { STUDENTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "NEXIS UG Batches | Students, Internships & Campus Stories",
  description:
    "Meet the students building NEXIS from the ground up—first-year internships, student ventures, competitions, campus films and the culture of the founding cohorts.",
  alternates: { canonical: "/ug/founding-batch" },
};

const FILMS = [
  { src: "/videos/ug/batch-1.mp4", poster: "/images/ug/founding-1.jpg", label: "The people" },
  { src: "/videos/ug/batch-2.mp4", poster: "/images/ug/founding-2.jpg", label: "The work" },
  { src: "/videos/ug/batch-3.mp4", poster: "/images/ug/founding-3.jpg", label: "The energy" },
];

const MILESTONES = [
  { t: "First paying briefs", d: "Students take on live business problems while the fundamentals are still fresh." },
  { t: "First internships", d: "The cohort starts building professional proof long before final placements." },
  { t: "First ventures", d: "Dropshipping, creator and startup challenges turn classroom ideas into market feedback." },
  { t: "First traditions", d: "House leagues, pitch nights, clubs and celebrations become the culture future batches inherit." },
];

export default function FoundingBatchPage() {
  const organisations = new Set(STUDENTS.map((student) => student.org)).size;
  return (
    <UgDetailShell
      eyebrow="UG in Business Management · Our batches"
      title={<>The students setting the <span className="serif-em text-crimson">tone</span>.</>}
      lede="The early NEXIS cohorts did not arrive to inherit a college culture. They arrived to build one—through internships, ventures, house rivalries, long project nights and a lot of firsts."
      image="/images/ug/founding-2.jpg"
      imageAlt="Students from an early NEXIS UG cohort"
      facts={[
        { label: "Students featured", value: `${STUDENTS.length}`, note: "Real first-year journeys" },
        { label: "Workplaces", value: `${organisations}+`, note: "Internships & live roles" },
        { label: "Cohorts on campus", value: "2", note: "2025–28 and 2026–29" },
        { label: "Next intake", value: "2027", note: "Third UG cohort" },
      ]}
      ctaTitle={<>The next set of NEXIS traditions could have <span className="serif-em">your name</span> on them.</>}
    >
      <section className="overflow-hidden bg-[#08080a] text-white">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <Reveal className="max-w-3xl">
            <Kicker dark>Already out in the world</Kicker>
            <h2 className="display balance mt-5 text-[clamp(2rem,5vw,3.8rem)] text-white">
              First-year students. Real teams. <span className="serif-em text-crimson">Real responsibility</span>.
            </h2>
            <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-white/60">
              These are not stock profiles. They are students from the current cohort and the organisations where they have already worked, interned or competed.
            </p>
          </Reveal>
          <div className="-mx-[var(--gutter)] mt-10 sm:mt-14">
            <StudentStrip />
          </div>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <Kicker>What a founding cohort does</Kicker>
              <h2 className="display balance mt-5 text-[clamp(2rem,4.4vw,3.3rem)]">
                They turn a new campus into <span className="serif-em text-crimson">their place</span>.
              </h2>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {MILESTONES.map((item, index) => (
                <Reveal key={item.t} delay={(index % 2) * 70} className={`p-6 sm:p-7 ${CARD_LIGHT}`}>
                  <AccentRule />
                  <span className="display text-3xl text-crimson">0{index + 1}</span>
                  <h3 className="mt-4 font-serif text-xl">{item.t}</h3>
                  <p className="mt-2 text-[0.86rem] leading-relaxed text-ink-2">{item.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#08080a] text-white">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Kicker dark>Three short films</Kicker>
            <h2 className="display balance mt-5 text-[clamp(2rem,4.8vw,3.5rem)] text-white">
              See the cohort, not a <span className="serif-em text-crimson">sales pitch</span>.
            </h2>
          </Reveal>
          <div className="-mx-[var(--gutter)] mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--gutter)] pb-3 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:px-0 [&::-webkit-scrollbar]:hidden">
            {FILMS.map((film, index) => (
              <Reveal key={film.src} delay={index * 80} className={`${CARD_DARK} w-[78vw] max-w-[330px] shrink-0 snap-start sm:w-auto sm:max-w-none`}>
                <AccentRule />
                <video controls playsInline preload="none" poster={film.poster} aria-label={film.label} className="aspect-[9/16] w-full object-cover">
                  <source src={film.src} type="video/mp4" />
                </video>
                <div className="p-5">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-crimson">Film 0{index + 1}</p>
                  <h3 className="mt-2 font-serif text-xl text-white">{film.label}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="shell grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[5px] bg-paper-2">
            <Image src="/images/ug/life-4.jpg" alt="NEXIS students together on campus" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </Reveal>
          <Reveal>
            <Kicker>Batch of 2027–2030</Kicker>
            <h2 className="display balance mt-5 text-[clamp(2rem,4.5vw,3.5rem)]">
              You will not be student number <span className="serif-em text-crimson">4,021</span>.
            </h2>
            <p className="mt-5 text-[0.96rem] leading-relaxed text-ink-2">
              A young, deliberately sized programme means the faculty know your work, founders can challenge your thinking, and your batch has room to start the next club, competition or campus ritual.
            </p>
          </Reveal>
        </div>
      </section>
    </UgDetailShell>
  );
}
