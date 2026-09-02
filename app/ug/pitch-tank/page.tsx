import type { Metadata } from "next";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowUpRight } from "@/components/icons";
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
  title: "PitchTank — Siliguri's Student Shark Tank | NEXIS School of Business",
  description:
    "PitchTank by NEXIS is East India's first student Shark Tank. Class 11, 12 and passout founders pitch real ideas to real investors for up to ₹1 Lakh in funding, mentorship and prizes.",
  alternates: { canonical: "/ug/pitch-tank" },
};

const FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSfZlmJDSv3TQU0wG2EsDZiaEd8dSnjyV7ZRslsoapUysSY9bQ/viewform";

const DETAILS = [
  { k: "Venue", v: "NEXIS Campus, Siliguri" },
  { k: "Eligibility", v: "Class 11, 12 & passouts" },
  { k: "Entry", v: "Free to register" },
  { k: "Prize pool", v: "Up to ₹1 Lakh" },
];

const STAGES = [
  {
    n: "Stage 1",
    t: "Idea submission & elevator pitch",
    img: "/images/ug/highlight-curriculum.jpg",
    points: [
      "Pick a business idea — a unique startup or a local business (no big companies).",
      "A 90-minute workshop on business-canvas creation.",
      "Present to judges: a 90-second elevator pitch, judged on creativity, clarity and business potential.",
      "The top 30 teams advance to Round 2.",
    ],
  },
  {
    n: "Stage 2",
    t: "The grand finale",
    img: "/images/ug/admissions.jpg",
    points: [
      "One-hour mentorship — teams work with a local business in Siliguri.",
      "30 minutes to refine the pitch with mentor guidance.",
      "A seven-minute final pitch, followed by a two-minute Q&A.",
      "The top three teams are recognised for innovation and business skill.",
    ],
  },
];

const WHY = [
  { t: "Pitch to real investors", d: "Experience a real Shark Tank as a student.", img: "/wp-media/2024/10/school-benefit.jpg" },
  { t: "Expert mentorship & workshops", d: "Learn directly from top entrepreneurs.", img: "/images/ug/highlight-faculty.jpg" },
  { t: "Unmatched networking", d: "Connect with investors, mentors and like-minded peers.", img: "/images/campus/cafeteria.jpg" },
  { t: "Win big", d: "Up to ₹1,00,000 in cash rewards, plus mentorship, internships and more.", img: "/images/ug/day-treasure-hunt.jpg" },
];

export default function PitchTankPage() {
  return (
    <main className="relative font-poppins lp-poppins">
      <SiteNav applyHref="/ug/admission-enquiry" logoHref="/" branding="2027" />

      {/* HERO */}
      <section id="top" className={`relative isolate overflow-hidden ${DEEP} text-white`}>
        <div className="pointer-events-none absolute -left-24 -top-24 -z-10 h-96 w-96 rounded-full bg-crimson/25 blur-[130px]" />

        <div className="shell relative flex flex-col items-center pb-14 pt-12 text-center sm:pt-16 lg:pb-20 lg:pt-24">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
              <span className="h-px w-8 bg-crimson" />
              <span className="text-crimson">Siliguri&rsquo;s first student Shark Tank</span>
              <span className="h-px w-8 bg-crimson" />
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display balance mt-6 max-w-4xl text-[clamp(2.2rem,6vw,4.6rem)] text-white">
              Pitch<span className="serif-em text-crimson">Tank</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-white/75">
              East India&rsquo;s first-ever student Shark Tank — where young
              founders turn ideas into reality and pitch to real investors for{" "}
              <span className="text-white">₹1 Lakh</span> in funding, prizes and
              mentorship.
            </p>
          </Reveal>
          <Reveal delay={220} className="w-full sm:w-auto">
            <a href={FORM} target="_blank" rel="noreferrer" className="btn btn-crimson mt-8 w-full justify-center sm:w-auto">
              Register now
              <ArrowUpRight className="arrow" />
            </a>
          </Reveal>

          <Reveal delay={260} className="mt-10 w-full max-w-5xl">
            <figure className="overflow-hidden rounded-[4px] border border-white/15 bg-black/35 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.9)]">
              <Image
                src="/images/ug/admissions.jpg"
                alt="Students presenting to a live audience at NEXIS"
                width={2560}
                height={1303}
                sizes="(max-width: 1023px) 100vw, 80vw"
                className="h-auto w-full"
                priority
              />
              <figcaption className="flex items-center gap-3 border-t border-white/10 px-4 py-3 text-left text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/65 sm:px-5">
                <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                A live student presentation at NEXIS
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={300} className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-9 sm:grid-cols-4">
            {DETAILS.map((d) => (
              <div key={d.k}>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-crimson">{d.k}</p>
                <p className="mt-1.5 font-serif text-[1.05rem] leading-tight text-white">{d.v}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-20">
          <Reveal className={`grid items-stretch overflow-hidden md:grid-cols-2 ${CARD_LIGHT}`}>
            <AccentRule />
            <div className="relative min-h-[240px] bg-paper-2">
              <Image
                src="/images/ug/creator-chirag.jpg"
                alt="A NEXIS student creator"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <Chip>The stage</Chip>
              <h2 className="display balance mt-5 text-[clamp(1.5rem,3.2vw,2.4rem)]">
                Turn your <span className="serif-em text-crimson">chai-pe-charcha</span> idea into a real business.
              </h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-2">
                NEXIS School of Business presents PitchTank — Eastern India&rsquo;s
                youngest entrepreneurs, this is your stage. Pitch. Impress. Win.
              </p>
              <a href={FORM} target="_blank" rel="noreferrer" className="btn btn-crimson mt-7 self-start">
                Register now
                <ArrowUpRight className="arrow" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EVENT FORMAT */}
      <section className={`${DEEP} text-white`}>
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal className="flex justify-center">
              <Kicker dark>How it works</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.8rem,4.4vw,3.1rem)] text-white">
                Event format &amp; <span className="serif-em text-crimson">rounds</span>
              </h2>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2">
            {STAGES.map((s, i) => (
              <Reveal key={s.n} delay={i * 90} className={`flex flex-col ${CARD_DARK}`}>
                <AccentRule />
                <div className="relative aspect-[16/9] overflow-hidden bg-black/40">
                  <Image src={s.img} alt={s.t} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-contain" />
                  <span className="absolute left-4 top-4 rounded-full bg-crimson px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white">{s.n}</span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="font-serif text-xl leading-tight text-white">{s.t}</h3>
                  <Points items={s.points} dark />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PARTICIPATE */}
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="display balance text-[clamp(1.8rem,4.4vw,3.1rem)]">
                Why you should <span className="serif-em text-crimson">participate</span>
              </h2>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((c, i) => (
              <Reveal key={c.t} delay={(i % 4) * 70} className={`flex flex-col ${CARD_LIGHT}`}>
                <AccentRule />
                {c.img ? (
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                    <Image src={c.img} alt={c.t} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" className="object-contain" />
                  </div>
                ) : (
                  <div className="flex aspect-[4/3] items-center justify-center bg-paper-2">
                    <span className="display text-5xl text-crimson">0{i + 1}</span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-[1.05rem] leading-tight">{c.t}</h3>
                  <p className="mt-2 text-[0.86rem] leading-relaxed text-ink-2">{c.d}</p>
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
              Imagine yourself pitching in a <span className="serif-em">Shark Tank</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <a href={FORM} target="_blank" rel="noreferrer" className="btn btn-light mt-8">
              Register now
              <ArrowUpRight className="arrow" />
            </a>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
