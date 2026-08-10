import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Recognition from "@/components/Recognition";
import StudentCarousel from "@/components/StudentCarousel";
import LeadForm from "@/components/LeadForm";
import { ArrowRight, ArrowUpRight, WhatsApp } from "@/components/icons";
import { BATCH, CONTACT, WHY_NEXIS, CAMPUS_IMAGES, FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "UG in Business Management, Batch of 2027 | NEXIS Siliguri",
  description:
    "A three-year, on-campus undergraduate program in Siliguri where you learn business by building real businesses — mentored by founders and CXOs. Enquire about the Batch of 2027.",
  // Paid-ads landing page — keep it out of organic search and the sitemap.
  robots: { index: false, follow: true },
};

const PROOF = [
  "70% hands-on",
  "Internships from Sem 1",
  "75+ recruiters",
  "6-month internship",
];

// Awareness-stage objection handling, curated for a cold ad audience.
const LP_FAQS = [FAQS[3], FAQS[1], FAQS[4], FAQS[2]];

export default function UG2027LandingPage() {
  return (
    <main id="top" className="relative pb-24 lg:pb-0">
      {/* Urgency strip */}
      <div className="relative z-[60] bg-ink text-paper">
        <div className="shell flex items-center justify-center gap-2.5 py-2 text-center text-[0.68rem] uppercase tracking-[0.12em] sm:text-[0.72rem] sm:tracking-[0.14em]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-crimson" />
          <span className="opacity-90">
            Admissions open · {BATCH.cohort} · Starts {BATCH.starts}
          </span>
        </div>
      </div>

      {/* Slim, distraction-free header */}
      <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="shell flex items-center justify-between py-2.5">
          <a href="#top" className="flex items-center gap-3" aria-label="NEXIS">
            <Image
              src="/brand/nexis-logo-dark.png"
              alt="NEXIS"
              width={254}
              height={66}
              priority
              className="h-6 w-auto sm:h-7"
            />
          </a>
          <div className="flex items-center gap-3">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 text-[0.85rem] font-medium text-[#25D366] sm:inline-flex"
            >
              <WhatsApp className="text-[1.05em]" />
              WhatsApp us
            </a>
            <a href="#enquire" className="btn btn-crimson">
              Enquire now
              <ArrowRight className="arrow" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero — image band with overlaid statement */}
      <section className="relative h-[52vh] min-h-[340px] w-full overflow-hidden sm:h-[56vh] lg:h-[64vh]">
        <Image
          src="/images/campus/life-at-nexis.jpg"
          alt="Students on the NEXIS campus in Siliguri"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Legibility overlays: a strong uniform scrim + a heavy bottom
            gradient so the white headline stays readable over bright photos. */}
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/25" />
        <div className="shell relative flex h-full flex-col justify-end pb-7 sm:pb-10">
          <Reveal>
            <p className="flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white/80 sm:text-[0.72rem]">
              <span className="h-px w-8 bg-crimson" />
              Undergraduate Program · {BATCH.city}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display balance mt-3 max-w-3xl text-[clamp(2.3rem,8vw,4.8rem)] text-white">
              Learn business by{" "}
              <span className="serif-em text-crimson">building</span> it.
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-white/85 sm:text-[1.05rem]">
              A three-year, on-campus program in {BATCH.city} where you work on
              real businesses from day one — for students after Class XII.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Enquiry — form first on mobile */}
      <section id="enquire" className="scroll-mt-16 border-b border-line bg-paper-2/40">
        <div className="shell grid gap-8 py-9 sm:py-12 lg:grid-cols-12 lg:gap-14">
          {/* Form */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <Reveal>
              <div className="overflow-hidden rounded-[3px] border border-line bg-paper shadow-[0_40px_90px_-55px_rgba(11,12,16,0.55)]">
                <div className="border-b border-line bg-paper-2/60 px-5 py-4 sm:px-7">
                  <p className="kicker text-crimson">
                    Admission Enquiry · {BATCH.cohort}
                  </p>
                  <h2 className="mt-2 font-serif text-xl leading-tight sm:text-2xl">
                    Enquire about the {BATCH.year} program
                  </h2>
                  <p className="mt-1.5 text-[0.86rem] text-ink-2">
                    Get details on the curriculum, fees and admissions —
                    we&rsquo;ll call you back. No commitment.
                  </p>
                </div>
                <div className="p-5 sm:p-7">
                  <LeadForm submitLabel="Send my enquiry" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Supporting copy */}
          <div className="order-2 lg:order-1 lg:col-span-6 lg:pt-2">
            <Reveal>
              <ul className="flex flex-wrap gap-2">
                {PROOF.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-[0.78rem] font-medium text-ink-2 sm:text-[0.82rem]"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-ink-2">
                NEXIS is a next-generation business school where you learn by
                doing — building ventures, consulting real businesses and
                interning with founders, from your very first semester.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href={CONTACT.brochureHref}
                  className="btn justify-center border-crimson bg-transparent text-crimson hover:bg-crimson/5"
                >
                  Download prospectus
                  <ArrowUpRight className="arrow" />
                </a>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn justify-center border-[#25D366] bg-transparent text-[#25D366] hover:bg-[#25D366]/10"
                >
                  <WhatsApp className="text-[1.1em]" />
                  WhatsApp us
                </a>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-7">
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                  Recognised by
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-7 gap-y-4">
                  {[
                    { src: "/images/logos/mepsc-white.png", name: "MEPSC" },
                    { src: "/images/logos/ncvet.png", name: "NCVET" },
                    {
                      src: "/images/logos/startupindia-white.png",
                      name: "Startup India",
                    },
                  ].map((l) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={l.name}
                      src={l.src}
                      alt={l.name}
                      className="h-8 w-auto max-w-[120px] object-contain opacity-80 [filter:brightness(0)] sm:h-9"
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Campus gallery — swipeable strip */}
      <section className="py-9 sm:py-12">
        <div className="shell mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="kicker flex items-center gap-3">
              <span className="h-px w-8 bg-crimson" />
              Inside the campus
            </p>
            <h2 className="display mt-3 text-[clamp(1.6rem,4.5vw,2.6rem)]">
              A campus alive with{" "}
              <span className="serif-em text-crimson">ambition</span>.
            </h2>
          </div>
        </div>
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-[var(--gutter)] pb-2 no-scrollbar">
          {CAMPUS_IMAGES.map((img, i) => (
            <div
              key={img.src}
              className="group relative aspect-[4/3] w-[74%] shrink-0 snap-start overflow-hidden rounded-[2px] bg-paper-2 sm:w-[42%] lg:w-[26%]"
            >
              <Image
                src={img.src}
                alt={img.cap}
                fill
                loading={i < 2 ? "eager" : "lazy"}
                sizes="(max-width:640px) 74vw, (max-width:1024px) 42vw, 26vw"
                className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 flex items-center gap-2 p-3 text-[0.76rem] font-medium text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                {img.cap}
              </figcaption>
            </div>
          ))}
        </div>
      </section>

      {/* Why NEXIS — dark, compact */}
      <section className="bg-ink text-paper">
        <div className="shell py-10 sm:py-14">
          <Reveal className="max-w-2xl">
            <p className="kicker flex items-center gap-3 text-white/55">
              <span className="h-px w-8 bg-crimson" />
              Why NEXIS
            </p>
            <h2 className="display balance mt-4 text-[clamp(1.7rem,4.4vw,3rem)]">
              Built for how business actually{" "}
              <span className="serif-em text-crimson">works</span>.
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-[2px] border border-white/15 bg-white/15 lg:grid-cols-4">
            {WHY_NEXIS.map((w, i) => (
              <Reveal key={w.t} delay={i * 70} className="bg-ink p-4 sm:p-7">
                <p className="display text-3xl text-crimson sm:text-5xl">{w.k}</p>
                <h3 className="mt-2.5 font-serif text-base leading-tight sm:mt-4 sm:text-xl">
                  {w.t}
                </h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-white/60 sm:text-[0.92rem]">
                  {w.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Students — proof faces, 3-row fade carousel */}
      <section className="border-y border-line bg-paper-2/40 py-10 sm:py-14">
        <div className="shell mb-7 max-w-2xl">
          <Reveal>
            <p className="kicker flex items-center gap-3">
              <span className="h-px w-8 bg-crimson" />
              Real students, already at work
            </p>
            <h2 className="display balance mt-4 text-[clamp(1.7rem,4.4vw,3rem)]">
              Interning, earning,{" "}
              <span className="serif-em text-crimson">winning</span>.
            </h2>
          </Reveal>
        </div>
        <StudentCarousel />
      </section>

      {/* Trust — recruiters + accreditation */}
      <Recognition />

      {/* FAQ — compact */}
      <section className="shell py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="kicker flex items-center gap-3">
                <span className="h-px w-8 bg-crimson" />
                Before you enquire
              </p>
              <h2 className="display balance mt-4 text-[clamp(1.7rem,4.2vw,2.8rem)]">
                Quick <span className="serif-em text-crimson">answers</span>.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {LP_FAQS.map((f) => (
                <Reveal key={f.q} className="border-b border-line py-5">
                  <h3 className="font-serif text-base leading-snug sm:text-lg">
                    {f.q}
                  </h3>
                  <p className="mt-2.5 max-w-2xl text-[0.92rem] leading-relaxed text-ink-2">
                    {f.a}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — awareness framing, over image */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/campus/apex-hall.jpg"
          alt="NEXIS campus"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-crimson/95" />
        <div className="shell relative py-11 sm:py-16">
          <Reveal className="max-w-2xl">
            <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white/80">
              <span className="h-px w-8 bg-white/50" />
              Curious about NEXIS?
            </p>
            <h2 className="display balance mt-4 text-[clamp(1.9rem,5vw,3.6rem)] text-white">
              Get the full picture before you{" "}
              <span className="serif-em">decide</span>.
            </h2>
            <p className="mt-4 max-w-lg text-[1rem] leading-relaxed text-white/85">
              Send an enquiry and our team will walk you through the program,
              fees and admissions — no pressure, no commitment.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-7 flex flex-wrap gap-3">
            <a href="#enquire" className="btn btn-light">
              Enquire now
              <ArrowRight className="arrow" />
            </a>
            <a
              href={CONTACT.brochureHref}
              className="btn border-white/40 bg-transparent text-white hover:bg-white/10"
            >
              Download prospectus
              <ArrowUpRight className="arrow" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Slim footer — compliance */}
      <footer className="bg-ink text-paper">
        <div className="shell py-9">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <Image
              src="/brand/nexis-logo-white.png"
              alt="NEXIS"
              width={400}
              height={105}
              className="h-7 w-auto self-start"
            />
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.8rem] text-white/60">
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
          <p className="mt-6 max-w-4xl text-[0.74rem] leading-relaxed text-white/45">
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
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn flex-1 justify-center border-[#25D366] bg-transparent text-[#25D366]"
          >
            <WhatsApp className="text-[1.15em]" />
            WhatsApp
          </a>
          <a href="#enquire" className="btn btn-crimson flex-1 justify-center">
            Enquire now
            <ArrowRight className="arrow" />
          </a>
        </div>
      </div>
    </main>
  );
}
