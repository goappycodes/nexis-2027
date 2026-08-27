import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Recognition from "@/components/Recognition";
import StudentCarousel from "@/components/StudentCarousel";
import VideoPlate from "@/components/VideoPlate";
import LeadForm from "@/components/LeadForm";
import YearbookFlipBook from "@/components/YearbookFlipBook";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import { ArrowRight, ArrowUpRight, WhatsApp } from "@/components/icons";
import { ACCREDITATION, BATCH, CONTACT, FOUNDERS } from "@/lib/content";

export const metadata: Metadata = {
  title: "UG in Business Management, Batch of 2027 | NEXIS Siliguri",
  description:
    "A three-year, on-campus undergraduate program in Siliguri where you learn business by building real businesses — mentored by founders and CXOs. Enquire about the Batch of 2027.",
  // Paid-ads landing page — keep it out of organic search and the sitemap.
  robots: { index: false, follow: true },
};

// Faculty & mentor cards — pre-designed portrait cards (name/role/brand
// already composited into the image).
const FACULTY_PREVIEW = [
  { src: "/images/faculty/cards/faculty-01.jpg", name: "Neeraj Sancheti" },
  { src: "/images/faculty/cards/faculty-02.jpg", name: "Nawal Kishor Agarwal" },
  { src: "/images/faculty/cards/faculty-03.png", name: "Sangeeta Reddy" },
  { src: "/images/faculty/cards/faculty-04.png", name: "Prejit Narayan" },
  { src: "/images/faculty/cards/faculty-05.png", name: "Anisha Gupta" },
  { src: "/images/faculty/cards/faculty-06.jpg", name: "Rahul Kedia" },
  { src: "/images/faculty/cards/faculty-07.jpg", name: "Prabin Agarwal" },
  { src: "/images/faculty/cards/faculty-08.png", name: "Madhu Jay" },
  { src: "/images/faculty/cards/faculty-09.jpg", name: "Biju Chakraborty" },
  { src: "/images/faculty/cards/faculty-10.png", name: "Dhiraj Kothari" },
  { src: "/images/faculty/cards/faculty-11.png", name: "Sumit Sinhal" },
  { src: "/images/faculty/cards/faculty-12.png", name: "Pradeep Singhal" },
];

// Yearbook — rendered from the source PDF, one image per spread.
const YEARBOOK_PAGES = Array.from(
  { length: 37 },
  (_, i) => `/images/yearbook/page-${String(i + 1).padStart(2, "0")}.jpg`,
);

// "What's it really like" — curriculum-style accordion.
const NEXIS_LIFE_ITEMS: FaqItem[] = [
  {
    q: "Built for",
    a: "Students who want to build their business, intern from 1st year, and graduate as an experienced professional.",
  },
  {
    q: "What you learn",
    a: "Real insights from 100+ industry experts.",
  },
  {
    q: "The Outcome",
    a: [
      {
        ul: [
          "6 projects in three years to build your CV",
          "Internships from year one",
          "The ability to pitch to VCs",
          "The skills to run a business, raise funding, and find mentors who back you",
        ],
      },
    ],
  },
];

const OTHER_COURSES = [
  {
    name: "UG in Digital Marketing and Commerce",
    note: "This program is open to only 40 students. Early bird admissions begin 1st December, with just 15 slots available.",
  },
  {
    name: "UG in Computer Science and AI",
    note: "This program is open to only 40 students. Early bird admissions begin 1st December, with just 15 slots available.",
  },
];

const LP_FACTS = [
  { label: "Format", value: "On-campus", sub: "Opt-in residential" },
  {
    label: "Commencement",
    value: BATCH.starts,
    sub: "",
  },
  {
    label: "Eligibility",
    value: "10+2 / equivalent board",
    sub: "Current students & passouts",
  },
  {
    label: "Duration",
    value: "3 years",
    sub: "6 months mandatory internship",
  },
];

// Open WhatsApp with a pre-filled, source-tagged message.
const WA_HREF = `${CONTACT.whatsapp}?text=${encodeURIComponent(
  "Ref: LP / I want to know about NEXIS UG Programs.."
)}`;

export default function UG2027LandingPage() {
  return (
    <main id="top" className="relative font-poppins lp-poppins pb-20 lg:pb-0">
      {/* Urgency strip */}
      <div className="relative z-[60] bg-ink text-paper">
        <div className="shell flex items-center justify-center gap-2.5 py-1.5 text-center text-[0.64rem] uppercase tracking-[0.12em] sm:py-2 sm:text-[0.72rem] sm:tracking-[0.14em]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-crimson" />
          <span className="font-bold opacity-90">
            Early Bird Admissions for Batch 2027 open . 1st December
          </span>
        </div>
      </div>

      {/* Slim, distraction-free header */}
      <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="shell flex items-center justify-between py-2 sm:py-2.5">
          <a href="#top" className="flex items-center gap-3" aria-label="NEXIS">
            <Image
              src="/brand/nexis-logo-dark.png"
              alt="NEXIS"
              width={254}
              height={66}
              priority
              className="h-5 w-auto sm:h-7"
            />
          </a>
        </div>
      </header>

      {/* Hero — image band with overlaid statement */}
      <section className="relative h-[42vh] min-h-[290px] w-full overflow-hidden sm:h-[52vh] lg:h-[60vh]">
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
        <div className="shell relative flex h-full flex-col justify-end pb-6 sm:pb-9">
          <Reveal>
            <span className="mb-3 block h-px w-7 bg-crimson" />
            <h1 className="balance font-poppins text-[clamp(1.4rem,4.6vw,2.4rem)] font-bold uppercase leading-tight tracking-tight text-white">
              3-Year UG in Business Management
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="display mt-3 max-w-xl text-[clamp(1.05rem,3vw,1.5rem)] text-white/90">
              Learn Business by{" "}
              <span className="serif-em text-crimson">Building</span> it.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-3 max-w-xl text-[0.9rem] leading-relaxed text-white/85 sm:text-[1.02rem]">
              3-years on campus courses where you learn by doing, intern from
              your first year, build your own business, and graduate as an
              Industry-ready fresher.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Program at a glance — video plays inline, never navigates away */}
      <section className="bg-ink text-paper">
        <div className="shell py-6 sm:py-10">
          <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <Reveal>
                <VideoPlate
                  poster="/images/ug/program-overview.jpg"
                  alt="Three years at NEXIS, explained in three minutes"
                  videoId="Wl8ifZsBSqI"
                  width={1920}
                  height={1080}
                  label="NEXIS Explained"
                  showLabel={false}
                />
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-10">
                {LP_FACTS.map((f, i) => (
                  <Reveal key={f.label} delay={i * 70}>
                    <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-crimson">
                      {f.label}
                    </p>
                    <p className="mt-2 font-serif text-xl leading-tight">
                      {f.value}
                    </p>
                    {f.sub && (
                      <p className="mt-0.5 text-[0.8rem] leading-snug text-white/45">
                        {f.sub}
                      </p>
                    )}
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry — centered form; alumni credibility now lives below it */}
      <section id="enquire" className="scroll-mt-14 border-b border-line bg-paper-2/40">
        <div className="shell py-7 sm:py-12">
          <div className="mx-auto max-w-xl">
            <Reveal>
              <div className="overflow-hidden rounded-[3px] border border-line bg-paper shadow-[0_40px_90px_-55px_rgba(11,12,16,0.55)]">
                <div className="border-b border-line bg-paper-2/60 px-5 py-3.5 sm:px-7 sm:py-4">
                  <h2 className="font-serif text-2xl leading-tight sm:text-3xl">
                    Enquire about the 2027–2030 program
                  </h2>
                  <p className="mt-1 text-[0.84rem] text-ink-2">
                    Get details on curriculum, fees, and admissions from our
                    admission counsellor.
                  </p>
                </div>
                <div className="p-4 sm:p-7">
                  <LeadForm submitLabel="Send my enquiry" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Founders — alumni credibility, portrait cards on dark */}
      <section className="bg-ink text-paper">
        <div className="shell py-10 sm:py-16">
          <Reveal className="max-w-2xl">
            <p className="kicker flex items-center gap-2.5 text-white/55">
              <span className="h-px w-7 bg-crimson" />
              Founders
            </p>
            <h2 className="display balance mt-3 text-[clamp(1.7rem,4.8vw,3rem)] text-white">
              Built by the alumni of{" "}
              <span className="serif-em text-crimson">
                India&rsquo;s top colleges
              </span>
            </h2>
          </Reveal>
          <Reveal
            delay={80}
            className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-5"
          >
            {[
              { src: "/images/logos/iim.png", name: "IIM Bangalore" },
              { src: "/images/logos/iit.png", name: "IIT Bombay" },
              { src: "/images/logos/isb.png", name: "ISB Hyderabad" },
              { src: "/images/logos/srcc.png", name: "SRCC Delhi" },
            ].map((l) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={l.name}
                src={l.src}
                alt={l.name}
                className="h-8 w-auto object-contain opacity-90 sm:h-10"
              />
            ))}
          </Reveal>

          <div className="mt-10 grid items-stretch gap-5 sm:mt-14 md:grid-cols-2">
            {FOUNDERS.map((f, i) => {
              const [tag, subtitle] = f.role.split(" — ");
              return (
                <Reveal
                  key={f.name}
                  delay={140 + i * 100}
                  className="relative flex min-h-[340px] flex-col overflow-hidden rounded-[18px] border border-white/25 bg-gradient-to-br from-crimson/25 via-ink to-black p-6 sm:min-h-[420px] sm:p-8"
                >
                  <span className="absolute left-6 top-6 h-9 w-1 bg-crimson sm:left-8 sm:top-8" />
                  <div className="relative z-10 pl-5 sm:pl-6">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/85 sm:text-[0.78rem]">
                      {tag}
                    </p>
                    <p className="mt-0.5 text-[0.95rem] font-semibold text-white sm:text-[1.05rem]">
                      {subtitle}
                    </p>
                    <ul className="mt-5 space-y-1.5">
                      {f.creds.map((c) => (
                        <li
                          key={c}
                          className="text-[0.86rem] text-white/70 sm:text-[0.92rem]"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pointer-events-none absolute bottom-0 right-0 h-[78%] w-[52%] sm:h-[85%] sm:w-[46%]">
                    <Image
                      src={f.img}
                      alt={f.name}
                      fill
                      sizes="(max-width:640px) 50vw, 260px"
                      className="object-contain object-bottom"
                    />
                  </div>
                  <p className="relative z-10 mt-auto max-w-[54%] pl-5 pt-6 text-[1rem] font-bold uppercase leading-tight tracking-[0.06em] text-white sm:max-w-[52%] sm:pl-6 sm:text-[1.1rem]">
                    {f.name}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's it really like — curriculum-style accordion, no bottom CTA */}
      <section className="bg-paper py-8 sm:py-14">
        <div className="shell">
          <Reveal>
            <p className="kicker flex items-center gap-2.5">
              <span className="h-px w-7 bg-crimson" />
              UG in Business Management
            </p>
            <h2 className="display balance mt-3 text-[clamp(1.7rem,4.8vw,3rem)]">
              What&rsquo;s It{" "}
              <span className="serif-em text-crimson">Really Like</span> at
              NEXIS.
            </h2>
          </Reveal>

          <Reveal delay={80} className="mt-6">
            <FaqAccordion items={NEXIS_LIFE_ITEMS} />
          </Reveal>

          <Reveal
            delay={140}
            className="mt-6 rounded-[3px] border border-crimson/30 bg-crimson/5 p-4 sm:p-5"
          >
            <p className="text-[0.88rem] leading-relaxed text-ink sm:text-[0.95rem]">
              <span className="font-bold text-crimson">Limited seats.</span>{" "}
              This course is open to only 40 students. Early bird admissions
              begin 1st December, with just 15 slots available.
            </p>
          </Reveal>

          <div className="mt-10 sm:mt-14">
            <Reveal>
              <p className="kicker text-muted">Other courses that we offer</p>
            </Reveal>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {OTHER_COURSES.map((c, i) => (
                <Reveal
                  key={c.name}
                  delay={80 + i * 80}
                  className="rounded-[3px] border border-line bg-paper-2/40 p-5 sm:p-6"
                >
                  <h3 className="font-serif text-lg sm:text-xl">{c.name}</h3>
                  <p className="mt-2 text-[0.84rem] leading-relaxed text-ink-2">
                    <span className="font-semibold text-crimson">
                      Limited seats.
                    </span>{" "}
                    {c.note}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Students — proof faces, 3-row fade carousel */}
      <section className="border-y border-line bg-paper-2/40 py-7 sm:py-12">
        <div className="shell mb-5 max-w-2xl">
          <Reveal>
            <p className="flex items-center gap-2.5 text-[0.95rem] font-bold leading-snug text-ink sm:text-[1.15rem]">
              <span className="h-px w-7 shrink-0 bg-crimson" />
              They haven&rsquo;t even graduated — and they&rsquo;re already
              working.
            </p>
            <h2 className="display balance mt-3 text-[clamp(1.7rem,4.8vw,3rem)]">
              Meet our first-years, already{" "}
              <span className="serif-em text-crimson">
                interning and earning
              </span>
              .
            </h2>
          </Reveal>
        </div>
        <StudentCarousel />
      </section>

      {/* Intern spotlight — autoplaying, muted, looping background video.
          Self-hosted (compressed to ~8MB, no audio track — it's muted
          anyway) so there is no click-through / exit link and no reliance
          on a third-party embed's autoplay policy. Source is a 9:16 clip,
          centre-cropped to fill the wide banner the same way the hero
          photo is cropped. */}
      <section className="relative h-[62vh] min-h-[440px] w-full overflow-hidden bg-ink sm:h-[56vh]">
        <div className="absolute inset-0" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/videos/intern-spotlight-poster.jpg"
            tabIndex={-1}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
          >
            <source src="/videos/intern-spotlight.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Scrim at both ends, so text stays legible whether it sits at
            the top of the frame or the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-transparent to-transparent" />

        <div className="shell relative flex h-full flex-col py-8 sm:py-12">
          <Reveal className="max-w-sm">
            <h2 className="display balance text-[clamp(1.7rem,4.8vw,3rem)] text-white">
              You intern{" "}
              <span className="serif-em text-crimson">twice</span> in 3
              years.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Intro line for the recruiter marquee below */}
      <div className="relative overflow-hidden bg-gradient-to-br from-black via-ink to-black py-8 text-center sm:py-12">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/25 blur-[100px]" />
        <p className="shell relative display text-[clamp(1.3rem,3.6vw,1.9rem)] text-white">
          Learn by working{" "}
          <span className="serif-em text-crimson">with</span> —
        </p>
      </div>

      {/* Trust — recruiters + accreditation */}
      <Recognition vibrant showAccreditation={false} showKicker={false} />

      {/* Faculty — pre-designed portrait cards, auto-scrolling so the
          strip reads as lively on mobile without needing a swipe. */}
      <section className="overflow-hidden bg-ink text-paper py-7 sm:py-14">
        <div className="shell mb-6">
          <Reveal>
            <h2 className="display balance max-w-2xl text-[clamp(1.7rem,4.8vw,3rem)] text-white">
              The Indian Industry Is{" "}
              <span className="serif-em text-crimson">Your Faculty</span>
            </h2>
          </Reveal>
        </div>
        <div className="marquee-mask overflow-hidden">
          <div
            className="flex w-max items-center gap-4 animate-marquee sm:gap-5"
            style={{ animationDuration: "48s" }}
          >
            {[...FACULTY_PREVIEW, ...FACULTY_PREVIEW].map((f, i) => (
              <div
                key={`${f.src}-${i}`}
                className="relative aspect-[2/3] h-64 shrink-0 overflow-hidden rounded-[4px] border border-white/10 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.7)] sm:h-80"
              >
                <Image
                  src={f.src}
                  alt={f.name}
                  fill
                  loading={i < 6 ? "eager" : "lazy"}
                  sizes="(max-width:640px) 176px, 224px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="shell mt-7 sm:mt-10">
          <Reveal>
            <p className="max-w-3xl text-[0.92rem] leading-relaxed text-white/70 sm:text-[1rem]">
              Curriculum built by scholars and taught by professors who are
              industry experts, because the best way to learn an industry is
              from the people running it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Yearbook — real page-turn flip book */}
      <section className="bg-paper py-8 sm:py-14">
        <div className="shell mb-6">
          <Reveal>
            <h2 className="display balance text-[clamp(1.7rem,4.8vw,3rem)]">
              The Yearbook That Has{" "}
              <span className="serif-em text-crimson">It All</span>.
            </h2>
            <p className="mt-3 max-w-xl text-[0.92rem] leading-relaxed text-ink-2 sm:text-[1rem]">
              Flip through the fun of the NEXIS yearbook, featuring student
              work, real world learning, student achievements, and
              internship records.
            </p>
          </Reveal>
        </div>
        <div className="shell">
          <YearbookFlipBook pages={YEARBOOK_PAGES} />
        </div>
        <p className="shell mt-4 flex items-center justify-center gap-1.5 text-[0.76rem] text-muted">
          Drag a corner, or tap the edges, to turn the page
          <ArrowRight className="text-[0.9em]" />
        </p>
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
        {/* Dark overlay so the white statement reads clearly over the photo. */}
        <div className="absolute inset-0 bg-ink/80" />
        <div className="shell relative py-9 sm:py-16">
          <Reveal className="max-w-2xl">
            <p className="flex items-center gap-2.5 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-white/80">
              <span className="h-px w-7 bg-white/50" />
              Curious about NEXIS?
            </p>
            <h2 className="display balance mt-3 text-[clamp(1.7rem,4.8vw,3rem)] text-white">
              Get the full picture before you{" "}
              <span className="serif-em">decide</span>.
            </h2>
            <p className="mt-3 max-w-lg text-[0.92rem] leading-relaxed text-white/85 sm:text-[1rem]">
              Send an enquiry and our team will walk you through the program,
              fees and admissions.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-6 flex flex-wrap gap-3">
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

      {/* Footer */}
      <footer className="rounded-t-[2rem] bg-paper text-ink sm:rounded-t-[2.5rem]">
        <div className="shell py-10 sm:py-14">
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-6">
            <div>
              <Image
                src="/brand/nexis-logo-dark.png"
                alt="NEXIS School of Business"
                width={400}
                height={105}
                className="h-8 w-auto sm:h-9"
              />
              <p className="mt-2 text-[0.9rem] font-medium text-ink-2">
                NEXIS School of Business, {BATCH.city}
              </p>
              <p className="mt-1 text-[0.82rem] text-muted">
                {CONTACT.address}.
              </p>
              <p className="mt-4 max-w-sm text-[0.78rem] leading-relaxed text-muted">
                NEXIS is a private business school and does not confer any
                degrees.
              </p>
              <div className="mt-5">
                <p className="text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                  Accredited by
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-3">
                  {ACCREDITATION.map((a) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={a.name}
                      src={a.src}
                      alt={a.name}
                      className="h-6 w-auto max-w-[100px] object-contain opacity-80 [filter:brightness(0)] sm:h-7"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="sm:justify-self-end">
              <p className="kicker text-muted">Find Us At</p>
              <div className="mt-4 space-y-0.5 text-[0.9rem] text-ink-2">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="ulink block w-fit"
                >
                  {CONTACT.email}
                </a>
                <a href={CONTACT.phoneHref} className="ulink block w-fit">
                  {CONTACT.phone}
                </a>
                <p className="max-w-xs">{CONTACT.address}</p>
                <a
                  href="https://instagram.com/nexis.school"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ulink block w-fit"
                >
                  Instagram - @nexis.school
                </a>
              </div>
            </div>
          </div>

          <p className="mt-10 border-t border-line pt-5 text-[0.72rem] text-muted">
            &copy; {BATCH.year} {CONTACT.entity}.
          </p>
        </div>
      </footer>

      {/* Sticky mobile CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-2.5 p-2.5">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp us"
            className="btn shrink-0 border-[#25D366] bg-[#25D366] px-4 text-white"
          >
            <WhatsApp className="text-[1.35em]" />
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
