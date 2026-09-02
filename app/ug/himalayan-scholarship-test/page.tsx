import type { Metadata } from "next";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import {
  DEEP,
  CARD_LIGHT,
  AccentRule,
  Chip,
  Kicker,
  Reveal,
} from "@/components/editorial";

export const metadata: Metadata = {
  title:
    "Himalayan Scholarship Test — Up to 50% Scholarship for Class 12 | NEXIS Siliguri",
  description:
    "The Himalayan Nex Gen Scholarship Test by NEXIS — a 30-minute online test exclusively for Class 12 students of the Eastern Himalayas. Secure up to 50% scholarship at East India's first industry-led business school.",
  alternates: { canonical: "/ug/himalayan-scholarship-test" },
};

const APPLY =
  "https://apply.nexisschool.com/himalayan-nex-gen-scholarship-test-application/";

const DETAILS = [
  { k: "Mode", v: "Online", s: "" },
  { k: "Eligibility", v: "Class 12", s: "Eastern Himalayas" },
  { k: "Duration", v: "30 minutes", s: "Aptitude-based" },
  { k: "Award", v: "Up to 50%", s: "Merit scholarship" },
];

const JOURNEY = [
  { n: "01", t: "Register online", d: "Enrol in the Himalayan Scholarship Test and compete with learners from across the hills.", img: "/wp-media/2026/01/why3.jpg" },
  { n: "02", t: "Get assessed", d: "The test measures your logical reasoning, quantitative aptitude and data-interpretation abilities.", img: "/wp-media/2026/01/why2.jpg" },
  { n: "03", t: "Earn scholarships", d: "Perform well and secure a top rank to unlock exciting scholarship benefits.", img: "/wp-media/2026/01/why1.jpg" },
];

const REWARDS = [
  { r: "Rank 1", v: "Up to 50%", img: "/wp-media/2026/01/scholarship-structure1.jpg" },
  { r: "Rank 2", v: "Up to 30%", img: "/wp-media/2026/01/scholarship-structure2.jpg" },
  { r: "Rank 3", v: "Up to 20%", img: "/wp-media/2026/01/scholarship-structure3.jpg" },
  { r: "Top 10", v: "Up to 10%", img: "/wp-media/2026/01/scholarship-structure4.jpg" },
];

export default function HimalayanScholarshipPage() {
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
              <span className="text-crimson">For Class 12 · Eastern Himalayas</span>
              <span className="h-px w-8 bg-crimson" />
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display balance mt-6 max-w-4xl text-[clamp(2rem,5.4vw,4.2rem)] text-white">
              Himalayan <span className="serif-em text-crimson">Scholarship Test</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-white/75">
              A one-of-a-kind test exclusively for Class 12 students of the Eastern
              Himalayas — a rare chance to secure up to 50% scholarship and begin
              your journey at East India&rsquo;s first industry-led business school.
            </p>
          </Reveal>
          <Reveal delay={220} className="w-full sm:w-auto">
            <a href={APPLY} target="_blank" rel="noreferrer" className="btn btn-crimson mt-8 w-full justify-center sm:w-auto">
              Apply for the scholarship test
              <ArrowUpRight className="arrow" />
            </a>
          </Reveal>

          <Reveal delay={260} className="mt-10 w-full max-w-5xl">
            <figure className="overflow-hidden rounded-[4px] border border-white/15 bg-black/35 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.9)]">
              <Image
                src="/wp-media/2025/01/himalayan-hero.jpg"
                alt="A NEXIS student at the campus entrepreneurship showcase"
                width={1600}
                height={1066}
                sizes="(max-width: 1023px) 100vw, 80vw"
                className="h-auto w-full"
                priority
              />
              <figcaption className="flex items-center gap-3 border-t border-white/10 px-4 py-3 text-left text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/65 sm:px-5">
                <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                Students building from their first year
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={300} className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-9 sm:grid-cols-4">
            {DETAILS.map((d) => (
              <div key={d.k}>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-crimson">{d.k}</p>
                <p className="mt-1.5 font-serif text-[1.05rem] leading-tight text-white">{d.v}</p>
                {d.s && <p className="mt-0.5 text-[0.78rem] text-white/45">{d.s}</p>}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* AWARD STAT */}
      <section className="border-b border-line bg-paper-2/50 text-ink">
        <div className="shell py-8 text-center sm:py-10">
          <Reveal>
            <p className="display text-[clamp(2rem,5vw,3.2rem)] text-crimson">40+</p>
            <p className="mt-1 text-[0.95rem] text-ink-2">scholarships awarded last year</p>
          </Reveal>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="display balance text-[clamp(1.8rem,4.4vw,3.1rem)]">
                Your <span className="serif-em text-crimson">scholarship journey</span>
              </h2>
            </Reveal>
          </div>
          <div className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 md:grid-cols-3">
            {JOURNEY.map((c, i) => (
              <Reveal key={c.n} delay={(i % 3) * 80} className={`flex min-w-[82vw] snap-start flex-col sm:min-w-0 ${CARD_LIGHT}`}>
                <AccentRule />
                <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                  <Image src={c.img} alt={c.t} fill sizes="(max-width: 639px) 82vw, (max-width: 767px) 50vw, 33vw" className="object-contain" />
                  <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-crimson font-serif text-[0.85rem] text-white">{c.n}</span>
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

      {/* REWARDS */}
      <section className={`${DEEP} text-white`}>
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal className="flex justify-center">
              <Kicker dark>Be first to the finish line</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.8rem,4.4vw,3.1rem)] text-white">
                Rewards of <span className="serif-em text-crimson">excellence</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-[1rem] leading-relaxed text-white/60">
                Earn scholarships based on your rank.
              </p>
            </Reveal>
          </div>
          <div className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
            {REWARDS.map((c, i) => (
              <Reveal key={c.r} delay={(i % 4) * 70} className="min-w-[76vw] snap-start overflow-hidden rounded-[4px] border border-white/10 bg-[#0e0e11] sm:min-w-0">
                <div className="relative aspect-square bg-black/30">
                  <Image src={c.img} alt={`${c.r} — ${c.v} scholarship`} fill sizes="(max-width: 639px) 76vw, (max-width: 1023px) 50vw, 25vw" className="object-contain" />
                </div>
                <div className="border-t border-white/10 p-5">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-crimson">{c.r}</p>
                  <p className="mt-1 font-serif text-2xl text-white">{c.v}</p>
                  <p className="text-[0.8rem] text-white/60">scholarship</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-20">
          <Reveal className={`grid items-stretch overflow-hidden md:grid-cols-2 ${CARD_LIGHT}`}>
            <AccentRule />
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <Chip>Start your application</Chip>
              <h2 className="display balance mt-5 text-[clamp(1.5rem,3.2vw,2.4rem)]">
                Challenge yourself. Earn a <span className="serif-em text-crimson">scholarship</span>.
              </h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-2">
                Showcase your potential and earn scholarships that support your
                education. Register for the Himalayan Scholarship Test today.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={APPLY} target="_blank" rel="noreferrer" className="btn btn-crimson w-full justify-center sm:w-auto">
                  Apply now
                  <ArrowUpRight className="arrow" />
                </a>
                <a href="/ug" className="btn btn-ghost w-full justify-center sm:w-auto">
                  Explore the UG program
                  <ArrowRight className="arrow" />
                </a>
              </div>
            </div>
            <div className="relative min-h-[240px] bg-paper-2">
              <Image
                src="/wp-media/2025/11/admission-student-min-scaled.jpg"
                alt="A NEXIS admissions counselling session"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
