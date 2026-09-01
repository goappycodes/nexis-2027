import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import {
  DEEP,
  CARD_LIGHT,
  CARD_DARK,
  AccentRule,
  Chip,
  Kicker,
  Points,
  Reveal,
} from "@/components/editorial";

export const metadata: Metadata = {
  title: "NEXIS 18 under 18 — East India's Biggest School Business League",
  description:
    "NEXIS 18 under 18 is East India's biggest business league for school students — three qualifier rounds, real-world challenges, and prizes and scholarships up to ₹2 Lakh.",
  alternates: { canonical: "/18-under-18" },
};

const ENQUIRE = "/ug/admission-enquiry";
const RESULTS_PDF =
  "https://nexisschool.com/wp-content/uploads/2025/01/18UNDER18-RESULTS-PDF.pdf";

const WHAT = [
  { t: "East India's biggest business league", d: "For high-school students across the region.", img: "/wp-media/2024/10/under-18-image.jpg" },
  { t: "Real-world challenges", d: "Students take on genuine business problems, not textbook cases.", img: "/images/ug/highlight-curriculum.jpg" },
  { t: "Win prizes up to ₹2 Lakh", d: "Cash prizes, scholarships and recognition for the sharpest teams.", img: "/images/ug/day-houses.jpg" },
];

const ROUNDS = [
  {
    n: "Round 1",
    t: "Online launch day",
    img: "/wp-media/2024/10/lunch-day.jpg",
    points: [
      "Engage in a business quiz and case-study showdown.",
      "Tackle real-world challenges.",
      "Push your business knowledge and problem-solving to the limit.",
    ],
  },
  {
    n: "Round 2",
    t: "Set the pace, own the stage",
    img: "/wp-media/2024/10/round2.jpg",
    points: [
      "Create a one-minute reel showcasing your innovative ideas.",
      "Present a creative solution to a community problem.",
      "Stand out with your personality and flair.",
    ],
  },
  {
    n: "Round 3",
    t: "One last round, one last chance",
    img: "/wp-media/2024/10/round3.jpg",
    points: [
      "Step into the role of an entrepreneur for a day.",
      "Showcase your negotiation and strategic thinking.",
      "Top 5 win up to a 50% scholarship for the NEXIS Undergrad program.",
    ],
  },
];

const STATS = [
  { k: "10,000+", l: "Students" },
  { k: "95+", l: "Schools" },
  { k: "150+", l: "Districts" },
];

const SCHOOL = [
  { t: "Hands-on business skills", d: "Equip students with real skills for real business challenges.", img: "/wp-media/2024/10/school-benefit.jpg" },
  { t: "Exposure & connections", d: "Students gain exposure and build connections beyond the school.", img: "/images/ug/learn-trek.jpg" },
  { t: "Awards & recognition", d: "Compete for the 18 under 18 title with exclusive awards, scholarships and recognition.", img: "/images/campus/apex-hall.jpg" },
];

export default function EighteenUnder18Page() {
  return (
    <main className="relative font-poppins lp-poppins">
      <SiteNav applyHref={ENQUIRE} logoHref="/" branding="2027" />

      {/* HERO */}
      <section id="top" className={`relative isolate overflow-hidden ${DEEP} text-white`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/wp-media/2024/10/Student-photos.png"
          alt="NEXIS 18 under 18 participants"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top opacity-40"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#08080a]/85 via-[#08080a]/70 to-[#08080a]" />
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-crimson/25 blur-[130px]" />

        <div className="shell relative flex flex-col items-center pb-14 pt-12 text-center sm:pt-16 lg:pb-20 lg:pt-24">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
              <span className="h-px w-8 bg-crimson" />
              <span className="text-crimson">The school business league</span>
              <span className="h-px w-8 bg-crimson" />
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display balance mt-6 max-w-4xl text-[clamp(2.2rem,6vw,4.6rem)] text-white">
              NEXIS <span className="serif-em text-crimson">18 under 18</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-white/75">
              East India&rsquo;s biggest business league for high-school students —
              three rounds, real-world challenges, and scholarships up to ₹2 Lakh.
            </p>
          </Reveal>
          <Reveal delay={220} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={RESULTS_PDF} target="_blank" rel="noreferrer" className="btn btn-crimson">
              View Round 1 results
              <ArrowUpRight className="arrow" />
            </a>
            <a href={ENQUIRE} className="btn border-white/25 bg-transparent text-white hover:bg-white/10">
              Register interest
              <ArrowRight className="arrow" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* WHAT IS */}
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-20">
          <div className="max-w-2xl">
            <Reveal>
              <Kicker>What it is</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.8rem,4.4vw,3.1rem)]">
                What is NEXIS <span className="serif-em text-crimson">18 under 18</span>?
              </h2>
            </Reveal>
          </div>
          <div className="mt-9 grid gap-4 sm:gap-5 md:grid-cols-3">
            {WHAT.map((c, i) => (
              <Reveal key={c.t} delay={(i % 3) * 80} className={`flex flex-col ${CARD_LIGHT}`}>
                <AccentRule />
                {c.img ? (
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.img} alt={c.t} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                ) : (
                  <div className="flex aspect-[16/10] items-center justify-center bg-paper-2">
                    <span className="display text-5xl text-crimson">0{i + 1}</span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-lg leading-tight">{c.t}</h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-2">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUALIFIER ROUNDS */}
      <section className={`${DEEP} text-white`}>
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal className="flex justify-center">
              <Kicker dark>Three rounds to the title</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.8rem,4.4vw,3.1rem)] text-white">
                The <span className="serif-em text-crimson">qualifier</span> rounds
              </h2>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-4 sm:gap-5 lg:grid-cols-3">
            {ROUNDS.map((r, i) => (
              <Reveal key={r.n} delay={(i % 3) * 80} className={`flex flex-col ${CARD_DARK}`}>
                <AccentRule />
                <div className="relative aspect-[16/9] overflow-hidden bg-black/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.img} alt={r.t} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-crimson px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white">{r.n}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-lg leading-tight text-white">{r.t}</h3>
                  <Points items={r.points} dark />
                </div>
              </Reveal>
            ))}
          </div>

          {/* STATS */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-9 text-center">
            {STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 80}>
                <p className="display text-[clamp(1.9rem,5vw,3.4rem)] text-crimson">{s.k}</p>
                <p className="mt-1.5 text-[0.85rem] uppercase tracking-[0.12em] text-white/60">{s.l}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOR YOUR SCHOOL */}
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="display balance text-[clamp(1.8rem,4.4vw,3.1rem)]">
                What&rsquo;s in it for <span className="serif-em text-crimson">your school</span>?
              </h2>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-3">
            {SCHOOL.map((c, i) => (
              <Reveal key={c.t} delay={(i % 3) * 80} className={`flex flex-col ${CARD_LIGHT}`}>
                <AccentRule />
                <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.t} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
                  <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-crimson font-serif text-[0.85rem] text-white">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-lg leading-tight">{c.t}</h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-2">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-crimson text-white">
        <div className="shell py-12 sm:py-16 lg:py-20 text-center">
          <Reveal>
            <h2 className="display balance mx-auto max-w-3xl text-[clamp(1.9rem,4.6vw,3.4rem)] text-white">
              Bring <span className="serif-em">18 under 18</span> to your school.
            </h2>
          </Reveal>
          <Reveal delay={120} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={ENQUIRE} className="btn btn-light">
              Register interest
              <ArrowRight className="arrow" />
            </a>
            <a href={RESULTS_PDF} target="_blank" rel="noreferrer" className="btn border-white/40 bg-transparent text-white hover:bg-white/10">
              View results
              <ArrowUpRight className="arrow" />
            </a>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
