import type { Metadata } from "next";
import Image from "next/image";
import UgDetailShell from "@/components/UgDetailShell";
import Reveal from "@/components/Reveal";
import { AccentRule, CARD_DARK, CARD_LIGHT, Kicker } from "@/components/editorial";
import FaqAccordion from "@/components/FaqAccordion";
import { ADMISSION_STEPS, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "UG Admissions, Eligibility & Fees — Batch of 2027 | NEXIS",
  description:
    "Understand NEXIS UG eligibility, the NEXGen Test and interview process, 2027 tuition fees, semester-wise payment plans, loans and scholarships.",
  alternates: { canonical: "/ug/admissions-fees" },
};

const ELIGIBILITY = [
  "Appearing for or passed Class XII from a recognised board",
  "Students from Commerce, Science and Humanities can apply",
  "Mathematics is not compulsory",
  "No board-marks cut-off; the complete profile is considered",
];

const FEE_FAQS = [
  {
    q: "Is accommodation included in the tuition fee?",
    a: "No. Accommodation is optional and charged separately. NEXIS can help students connect with secure options close to campus, without charging a facilitation fee.",
  },
  {
    q: "Can the fee be paid semester by semester?",
    a: "Yes. Semester-wise payment plans are available, so the annual fee does not have to be paid in one instalment.",
  },
  {
    q: "Are education loans available?",
    a: "NEXIS works with Axis Bank on collateral-free education-loan options, subject to the bank's eligibility and approval process.",
  },
  {
    q: "How are scholarships awarded?",
    a: "Scholarships are merit-led and may be linked to the NEXGen or Himalayan Scholarship Test and the applicant's overall admission profile. The admissions team confirms the current award structure during counselling.",
  },
];

export default function AdmissionsFeesPage() {
  return (
    <UgDetailShell
      eyebrow="UG in Business Management · Admissions & fees"
      title={<>A clear route from <span className="serif-em text-crimson">curious</span> to campus.</>}
      lede="No maze of cut-offs and fine print. We look for students who are ambitious, coachable and ready to learn by doing—and we make the cost and process visible upfront."
      image="/images/ug/admissions.jpg"
      imageAlt="A NEXIS admission counselling conversation"
      facts={[
        { label: "Applications", value: "Open", note: "Batch of 2027–2030" },
        { label: "Eligibility", value: "Class XII", note: "Any stream" },
        { label: "Mathematics", value: "Optional", note: "Not compulsory" },
        { label: "Location", value: "Siliguri", note: "Full-time, on campus" },
      ]}
      ctaTitle={<>Your application is the start of a <span className="serif-em">conversation</span>.</>}
    >
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <Reveal className="max-w-3xl">
            <Kicker>The admission journey</Kicker>
            <h2 className="display balance mt-5 text-[clamp(2rem,5vw,3.8rem)]">
              Three steps. One chance for us to get to know <span className="serif-em text-crimson">the real you</span>.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {ADMISSION_STEPS.map((step, index) => (
              <Reveal key={step.n} delay={index * 80} className={`p-6 sm:p-8 ${CARD_LIGHT}`}>
                <AccentRule />
                <span className="display text-5xl text-crimson">{step.n}</span>
                <h3 className="mt-5 font-serif text-2xl leading-tight">{step.title}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-2">{step.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#08080a] text-white">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <Kicker dark>Tuition for the full programme</Kicker>
              <h2 className="display balance mt-5 text-[clamp(2rem,4.8vw,3.5rem)] text-white">
                Know the investment <span className="serif-em text-crimson">before you apply</span>.
              </h2>
              <p className="mt-5 text-[0.94rem] leading-relaxed text-white/60">
                Tuition covers the on-campus academic programme. Accommodation, travel and optional global immersion experiences are separate.
              </p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              <Reveal className={`${CARD_DARK} p-6 sm:p-8`}>
                <AccentRule />
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-crimson">First year</p>
                <p className="display mt-4 text-4xl text-white">₹2,35,000</p>
                <p className="mt-3 text-[0.86rem] leading-relaxed text-white/55">The first two semesters of the programme.</p>
              </Reveal>
              <Reveal delay={80} className={`${CARD_DARK} p-6 sm:p-8`}>
                <AccentRule />
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-crimson">Second & third year</p>
                <p className="display mt-4 text-4xl text-white">₹1,95,000</p>
                <p className="mt-3 text-[0.86rem] leading-relaxed text-white/55">Per year, for Years 2 and 3.</p>
              </Reveal>
              <Reveal delay={120} className="rounded-[5px] border border-crimson/25 bg-crimson/[0.08] p-6 sm:col-span-2 sm:p-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-crimson">Payment flexibility</p>
                    <p className="mt-3 font-serif text-xl text-white">Semester-wise plans</p>
                    <p className="mt-2 text-[0.84rem] leading-relaxed text-white/55">Split tuition into instalments across the academic year.</p>
                  </div>
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-crimson">Financing support</p>
                    <p className="mt-3 font-serif text-xl text-white">Education-loan options</p>
                    <p className="mt-2 text-[0.84rem] leading-relaxed text-white/55">Collateral-free options through Axis Bank, subject to approval.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <Kicker>Who can apply</Kicker>
              <h2 className="display balance mt-5 text-[clamp(2rem,4.5vw,3.4rem)]">
                We are looking for <span className="serif-em text-crimson">readiness</span>, not one perfect score.
              </h2>
              <ul className="mt-7 space-y-3">
                {ELIGIBILITY.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.92rem] leading-relaxed text-ink-2">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-crimson" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={CONTACT.applyHref} className="btn btn-crimson mt-8">Start the application</a>
            </Reveal>
            <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[5px] bg-paper-2 lg:col-span-7">
              <Image src="/images/campus/tour6.jpg" alt="Students arriving at the NEXIS campus" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-5 left-5 max-w-sm font-serif text-xl text-white sm:bottom-7 sm:left-7 sm:text-2xl">Come as you are. Show us what you want to become.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-2/50 text-ink">
        <div className="shell grid gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:py-24">
          <Reveal className="lg:col-span-4">
            <Kicker>Fees & funding FAQ</Kicker>
            <h2 className="display mt-5 text-[clamp(2rem,4vw,3rem)]">The practical questions, answered.</h2>
          </Reveal>
          <div className="lg:col-span-8">
            <FaqAccordion items={FEE_FAQS} />
          </div>
        </div>
      </section>
    </UgDetailShell>
  );
}
