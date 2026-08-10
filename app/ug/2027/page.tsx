import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Recognition from "@/components/Recognition";
import LeadForm from "@/components/LeadForm";
import { ArrowRight } from "@/components/icons";
import {
  BATCH,
  CONTACT,
  WHY_NEXIS,
  CURRICULUM,
  OUTCOME_STATS,
  FAQS,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Apply — UG in Business Management, Batch of 2027 | NEXIS Siliguri",
  description:
    "A three-year, on-campus undergraduate program in Siliguri where you learn business by building real businesses — mentored by founders and CXOs. Apply for the Batch of 2027.",
  // Paid-ads landing page — keep it out of organic search and the sitemap.
  robots: { index: false, follow: true },
};

const PROOF = [
  "70% hands-on",
  "Internships from Sem 1",
  "75+ recruiters",
  "6-month industry internship",
];

// Objection-handling FAQs, curated for the ad audience.
const LP_FAQS = [FAQS[3], FAQS[1], FAQS[4], FAQS[2]];

export default function UG2027LandingPage() {
  return (
    <main id="top" className="relative pb-20 lg:pb-0">
      {/* Urgency strip */}
      <div className="relative z-[60] bg-ink text-paper">
        <div className="shell flex items-center justify-center gap-3 py-2 text-center text-[0.72rem] uppercase tracking-[0.14em]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-crimson" />
          <span className="opacity-90">
            Admissions open · {BATCH.cohort} · Starts {BATCH.starts}
          </span>
        </div>
      </div>

      {/* Slim, distraction-free header */}
      <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="shell flex items-center justify-between py-3">
          <a href="#top" className="flex items-center gap-3" aria-label="NEXIS">
            <Image
              src="/brand/nexis-logo-dark.png"
              alt="NEXIS"
              width={254}
              height={66}
              priority
              className="h-7 w-auto"
            />
          </a>
          <div className="flex items-center gap-3">
            <a
              href={CONTACT.phoneHref}
              className="hidden text-[0.85rem] font-medium text-ink-2 sm:inline-flex"
            >
              Call {CONTACT.phone}
            </a>
            <a href="#apply-form" className="btn btn-crimson">
              Apply now
              <ArrowRight className="arrow" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero — copy + form above the fold */}
      <section className="shell pt-8 pb-10 sm:pt-12 lg:pt-14 lg:pb-16">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Copy */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="kicker flex items-center gap-3">
                <span className="h-px w-8 bg-crimson" />
                Undergraduate Program · {BATCH.city}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display balance mt-5 text-[clamp(2.5rem,6vw,4.6rem)]">
                Learn business by{" "}
                <span className="serif-em text-crimson">building</span> it.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-2">
                A three-year, on-campus program in {BATCH.city} where you work on
                real businesses from your first semester — mentored by founders
                and CXOs, not just lectured at. For students after Class XII.
              </p>
            </Reveal>

            <Reveal delay={210}>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {PROOF.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-line bg-paper px-4 py-2 text-[0.82rem] font-medium text-ink-2"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href="#apply-form" className="btn btn-crimson">
                  Apply for the Batch of {BATCH.year}
                  <ArrowRight className="arrow" />
                </a>
                <a href={CONTACT.phoneHref} className="btn btn-ghost">
                  Call {CONTACT.phone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-7 text-[0.82rem] leading-relaxed text-muted">
                NSQF-aligned · Recognised through NCVET via MEPSC · DPIIT Startup
                India. NEXIS is a school of business and does not confer degrees.
              </p>
            </Reveal>
          </div>

          {/* Form card */}
          <div id="apply-form" className="scroll-mt-24 lg:col-span-6">
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-[3px] border border-line bg-paper shadow-[0_40px_90px_-50px_rgba(11,12,16,0.55)]">
                <div className="border-b border-line bg-paper-2/60 px-5 py-4 sm:px-8">
                  <p className="kicker text-crimson">Apply · {BATCH.cohort}</p>
                  <h2 className="mt-2 font-serif text-xl leading-tight sm:text-2xl">
                    Book your place in the {BATCH.year} cohort
                  </h2>
                  <p className="mt-1.5 text-[0.88rem] text-ink-2">
                    Fill this one-minute form and our team will call you back.
                  </p>
                </div>
                <div className="p-5 sm:p-8">
                  <LeadForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust bar — recruiters + accreditation */}
      <Recognition />

      {/* Why NEXIS */}
      <section className="bg-ink text-paper">
        <div className="shell py-12 sm:py-20">
          <div className="max-w-3xl">
            <Reveal>
              <p className="kicker flex items-center gap-3 text-white/55">
                <span className="h-px w-8 bg-crimson" />
                Why NEXIS
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.9rem,4.4vw,3.2rem)]">
                A business education built for how business actually{" "}
                <span className="serif-em text-crimson">works</span>.
              </h2>
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[2px] border border-white/15 bg-white/15 lg:grid-cols-4">
            {WHY_NEXIS.map((w, i) => (
              <Reveal key={w.t} delay={i * 80} className="bg-ink p-5 sm:p-8">
                <p className="display text-3xl text-crimson sm:text-5xl">{w.k}</p>
                <h3 className="mt-3 font-serif text-base leading-tight sm:mt-4 sm:text-xl">
                  {w.t}
                </h3>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-white/60 sm:mt-3 sm:text-[0.95rem]">
                  {w.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum snapshot */}
      <section className="shell py-12 sm:py-20">
        <div className="max-w-3xl">
          <Reveal>
            <p className="kicker flex items-center gap-3">
              <span className="h-px w-8 bg-crimson" />
              Three years, structured around practice
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display balance mt-6 text-[clamp(1.9rem,4.4vw,3.2rem)]">
              What you&rsquo;ll actually{" "}
              <span className="serif-em text-crimson">do</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {CURRICULUM.map((c, i) => (
            <Reveal
              key={c.year}
              delay={i * 90}
              className="flex flex-col rounded-[2px] border border-line bg-paper p-6 sm:p-8"
            >
              <span className="kicker text-crimson">{c.year}</span>
              <h3 className="mt-4 font-serif text-xl leading-tight sm:text-2xl">
                {c.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-2">
                {c.lede}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-y border-line bg-paper-2/50">
        <div className="shell py-10 sm:py-14">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {OUTCOME_STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 70}>
                <p className="display text-[clamp(2.2rem,5vw,3.4rem)] text-ink">
                  {s.k}
                </p>
                <p className="mt-2 text-[0.86rem] leading-snug text-muted">
                  {s.l}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="shell py-12 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="kicker flex items-center gap-3">
                <span className="h-px w-8 bg-crimson" />
                Before you apply
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-6 text-[clamp(1.9rem,4.2vw,3rem)]">
                Quick <span className="serif-em text-crimson">answers</span>.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {LP_FAQS.map((f) => (
                <Reveal key={f.q} className="border-b border-line py-6">
                  <h3 className="font-serif text-lg leading-snug sm:text-xl">
                    {f.q}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[0.96rem] leading-relaxed text-ink-2">
                    {f.a}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-crimson text-white">
        <div className="shell py-12 sm:py-20">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-white/75">
                  <span className="h-px w-8 bg-white/50" />
                  Admissions open · {BATCH.cohort}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display balance mt-6 text-[clamp(2.2rem,5vw,4rem)] text-white">
                  Your seat in the {BATCH.year} cohort is one form{" "}
                  <span className="serif-em">away</span>.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Reveal delay={160} className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="#apply-form"
                  className="btn btn-light w-full justify-center sm:w-auto lg:w-full"
                >
                  Apply now
                  <ArrowRight className="arrow" />
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="btn w-full justify-center border-white/40 bg-transparent text-white hover:bg-white/10 sm:w-auto lg:w-full"
                >
                  Call {CONTACT.phone}
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Slim footer — compliance */}
      <footer className="bg-ink text-paper">
        <div className="shell py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Image
              src="/brand/nexis-logo-white.png"
              alt="NEXIS"
              width={400}
              height={105}
              className="h-8 w-auto"
            />
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[0.82rem] text-white/60">
              <a href="/about/privacy" className="ulink">
                Privacy Policy
              </a>
              <a href="/about/terms-of-use" className="ulink">
                Terms of Use
              </a>
              <a href={CONTACT.phoneHref} className="ulink">
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="ulink">
                {CONTACT.email}
              </a>
            </div>
          </div>
          <p className="mt-8 max-w-4xl text-[0.76rem] leading-relaxed text-white/45">
            {CONTACT.address}. NEXIS is a private school of business and a
            skilling institution — a Training Body accredited by MEPSC, an
            awarding body recognised by NCVET — offering NSQF-aligned
            certifications. NEXIS is not a college and does not confer any
            degrees. &copy; {BATCH.year} {CONTACT.entity}.
          </p>
        </div>
      </footer>

      {/* Sticky mobile CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 backdrop-blur-md lg:hidden">
        <div className="flex gap-2.5 p-3">
          <a
            href={CONTACT.phoneHref}
            className="btn btn-ghost flex-1 justify-center"
          >
            Call
          </a>
          <a href="#apply-form" className="btn btn-crimson flex-1 justify-center">
            Apply now
            <ArrowRight className="arrow" />
          </a>
        </div>
      </div>
    </main>
  );
}
