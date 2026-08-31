import type { Metadata } from "next";
import Image from "@/components/SmartImage";
import LazyVideo from "@/components/LazyVideo";
import Reveal from "@/components/Reveal";
import Recognition from "@/components/Recognition";
import StudentCarousel from "@/components/StudentCarousel";
import VideoPlate from "@/components/VideoPlate";
import LeadForm from "@/components/LeadForm";
import YearbookFlipBook from "@/components/YearbookFlipBook";
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

const PROGRAM_HIGHLIGHTS = [
  {
    title: "Build your business",
    text: "Turn ideas into ventures. Learn to pitch, raise funds and lead.",
    img: "/images/ug/career-entrepreneurship.jpg",
    alt: "NEXIS students showcasing their own products",
    position: "35% center",
  },
  {
    title: "Learn from industry",
    text: "100+ experts. Founder mentorship. Internships from year one.",
    img: "/images/ug/career-jobs.jpg",
    alt: "An industry mentor leading a session with NEXIS students",
    position: "left center",
  },
  {
    title: "Graduate with experience",
    text: "6 CV-ready projects in three years. Real work to show for it.",
    img: "/images/ug/learn-ai.jpg",
    alt: "A NEXIS student presenting a completed software project",
    position: "center 60%",
  },
];

const OTHER_COURSES = [
  {
    name: "UG in Digital Marketing and Commerce",
    img: "/images/ug/learn-dropshipping.jpg",
    alt: "NEXIS students selling products at a campus business showcase",
    focus: "Brands · Content · Commerce",
    description: "Build brands, create campaigns, and grow businesses online.",
  },
  {
    name: "UG in Computer Science and AI",
    img: "/images/ug/learn-ai.jpg",
    alt: "A NEXIS student presenting a software project on campus",
    focus: "Code · Build · Innovate",
    description: "Turn ideas into software and explore what AI can build.",
  },
];

const ADMISSION_VALUE_CLASS =
  "whitespace-nowrap font-serif text-4xl leading-none text-crimson sm:text-[clamp(1.5rem,3.3vw,3rem)]";

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
        <div className="flex w-full items-center justify-center gap-1.5 px-3 py-2 text-center text-[clamp(10px,3.2vw,18px)] leading-tight tracking-normal sm:py-2.5">
          <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-crimson sm:h-1.5 sm:w-1.5" />
          <span className="whitespace-nowrap font-semibold opacity-90">
            Early Bird Admissions for 2027 Batch start 1st Dec
          </span>
        </div>
      </div>

      {/* Slim, distraction-free header */}
      <header className="relative z-50 border-b border-line bg-paper">
        <div className="shell flex items-center justify-between py-2 sm:py-2.5">
          <a href="#top" className="flex items-center gap-3" aria-label="NEXIS">
            <Image
              src="/brand/nexis-logo-dark.png"
              alt="NEXIS"
              width={254}
              height={66}
              priority
              className="h-8 w-auto sm:h-7"
            />
          </a>
          <a href="#enquire" className="btn btn-crimson hidden lg:inline-flex">
            Enquire now <ArrowRight className="arrow" />
          </a>
        </div>
      </header>

      <div className="lg:bg-ink">
      <div className="lg:mx-auto lg:grid lg:max-w-[1280px] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
      {/* Hero — image band with overlaid statement */}
      <section className="relative h-[42vh] min-h-[340px] w-full overflow-hidden sm:h-[52vh] lg:col-start-1 lg:row-start-1 lg:h-auto lg:min-h-[580px]">
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
        <div className="shell relative flex h-full flex-col justify-end pb-6 sm:pb-9 lg:justify-center lg:py-14">
          <Reveal>
            <h1 className="lp-hero-title balance font-serif text-[clamp(1.8rem,5.8vw,2.6rem)] leading-tight text-white lg:max-w-[22ch] lg:text-[clamp(2.5rem,3.5vw,3.25rem)]">
              3-Year Undergrad in{" "}
              <span className="text-crimson lg:block">Business Management</span>
            </h1>
            <span className="mt-3 block h-px w-7 bg-crimson" aria-hidden="true" />
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 max-w-xl font-poppins text-[0.9rem] leading-relaxed text-white/85 sm:text-[1.02rem]">
              <strong className="font-bold">Not your typical management college.</strong>{" "}
              Full time, hands-on courses at our Siliguri campus where you learn
              by doing, intern from your first year, build your own business, and
              graduate as an Industry-ready fresher.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Program at a glance — video plays inline, never navigates away */}
      <section className="bg-ink text-paper lg:col-span-2 lg:row-start-2 lg:bg-paper lg:text-ink lg:[box-shadow:0_0_0_100vmax_rgb(var(--paper))] lg:[clip-path:inset(0_-100vmax)]">
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
                      <p className="mt-0.5 text-[0.8rem] leading-snug text-white/45 lg:text-ink-2">
                        {f.sub}
                      </p>
                    )}
                  </Reveal>
                ))}
              </div>
              <Reveal delay={280} className="mt-6 grid max-w-lg grid-cols-2 items-center gap-6 border-t border-white/15 pt-5 sm:gap-8 lg:border-line">
                <p className="col-span-2 font-serif text-xl leading-tight sm:text-2xl">
                  Our courses are backed by
                </p>
                {ACCREDITATION.slice(0, 2).map((mark) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    loading="lazy"
                    decoding="async"
                    key={mark.name}
                    src={mark.src}
                    alt={mark.name}
                    className="h-16 w-full min-w-0 object-contain object-left brightness-0 invert sm:h-20 lg:invert-0"
                  />
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry — centered form; alumni credibility now lives below it */}
      <section id="enquire" className="scroll-mt-14 border-b border-line bg-paper-2/40 lg:col-start-2 lg:row-start-1 lg:flex lg:scroll-mt-24 lg:items-center lg:border-0 lg:bg-transparent">
        <div className="shell py-7 sm:py-12 lg:!pl-0 lg:py-10">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <Reveal>
              <div className="overflow-hidden rounded-[3px] border border-line bg-paper shadow-[0_40px_90px_-55px_rgba(11,12,16,0.55)]">
                <div className="border-b border-line bg-paper-2/60 px-5 py-3.5 sm:px-7 sm:py-4">
                  <h2 className="font-serif text-2xl leading-tight sm:text-3xl">
                    Enquire about the 2027 admissions
                  </h2>
                  <p className="mt-1 text-[0.84rem] text-ink-2">
                    Get info on curriculum, fees, and admissions
                  </p>
                </div>
                <div className="p-4 sm:p-7">
                  <LeadForm submitLabel="Send my enquiry" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={100} className="mt-4 flex items-center gap-3 rounded-lg border border-line bg-paper px-4 py-3 lg:border-white/15 lg:bg-white/5">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-line">
                <Image
                  src="/images/counselling/moira-priya-headshot.png"
                  alt="Ms. Moira Priya Devi, Counselling Head"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <p className="text-[0.8rem] leading-relaxed text-ink-2 lg:text-white/80">
                Get connected directly with our Counselling Head,{" "}
                <strong className="font-semibold text-ink lg:text-white">Ms. Moira Priya Devi,</strong>{" "}
                and have your questions answered.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      </div>
      </div>

      {/* Founders — alumni credibility, portrait cards on dark */}
      <section className="bg-ink text-paper">
        <div className="shell py-8 sm:py-10">
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
            className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            {[
              { src: "/images/logos/iim.png", name: "IIM Bangalore" },
              { src: "/images/logos/iit.png", name: "IIT Bombay" },
              { src: "/images/logos/isb.png", name: "ISB Hyderabad" },
              { src: "/images/logos/srcc.png", name: "SRCC Delhi" },
            ].map((l) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                loading="lazy"
                decoding="async"
                key={l.name}
                src={l.src}
                alt={l.name}
                className="h-8 w-auto object-contain opacity-90 sm:h-10"
              />
            ))}
          </Reveal>

          <div className="mt-6 grid items-stretch gap-3 sm:gap-4 md:grid-cols-2">
            {FOUNDERS.map((f, i) => {
              const [tag, subtitle] = f.role.split(" — ");
              return (
                <Reveal
                  key={f.name}
                  delay={140 + i * 100}
                  className="relative overflow-hidden rounded-xl border border-white/25 bg-gradient-to-br from-crimson/25 via-ink to-black p-4 sm:p-5"
                >
                  <div className="relative z-10 w-[66%] border-l-2 border-crimson pl-3 sm:pl-4">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/70 sm:text-[0.7rem]">
                      {tag}
                    </p>
                    <h3 className="mt-1 text-[1rem] font-bold uppercase leading-tight tracking-[0.03em] text-white sm:text-[1.1rem]">
                      {f.name}
                    </h3>
                    <p className="mt-1.5 text-[0.86rem] font-normal leading-snug text-white sm:text-[0.92rem]">
                      {subtitle}
                    </p>
                    <ul className="mt-3 space-y-1">
                      {f.creds.map((c) => (
                        <li
                          key={c}
                          className="text-[0.82rem] leading-snug text-white/70 sm:text-[0.86rem]"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pointer-events-none absolute bottom-0 right-0 h-full w-[34%]">
                    <Image
                      src={f.img}
                      alt={f.name}
                      fill
                      sizes="(max-width:767px) 32vw, (max-width:1440px) 16vw, 230px"
                      className="object-contain object-bottom"
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program at a glance — concise outcomes and image-led course cards */}
      <section className="bg-paper py-8 sm:py-14">
        <div className="shell">
          <Reveal>
            <p className="kicker flex items-center gap-2.5">
              <span className="h-px w-7 bg-crimson" />
              Undergrad in Business Management
            </p>
            <h2 className="display balance mt-3 text-[clamp(1.7rem,4.8vw,3rem)]">
              What&rsquo;s It{" "}
              <span className="serif-em text-crimson">Really Like</span> at
              NEXIS.
            </h2>
          </Reveal>

          <div className="mt-6 grid border-y border-line md:grid-cols-3 md:divide-x md:divide-line">
            {PROGRAM_HIGHLIGHTS.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 70}
                className="flex gap-4 border-b border-line py-5 last:border-b-0 md:flex-col md:border-b-0 md:px-6 md:py-7 md:first:pl-0"
              >
                <div className="relative h-20 w-20 shrink-0 sm:h-24 sm:w-24">
                  <div className="absolute inset-0 overflow-hidden rounded-full ring-1 ring-ink/10">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      fill
                      sizes="(max-width:639px) 73px, 96px"
                      className="object-cover"
                      style={{ objectPosition: item.position }}
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-paper font-serif text-[0.8rem] text-crimson ring-1 ring-line">
                    0{i + 1}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-xl leading-tight sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-sm text-[0.86rem] leading-relaxed text-ink-2 sm:text-[0.92rem]">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 sm:mt-14 lg:mt-8">
            <Reveal>
              <p className="kicker text-muted">Other Undergrad Courses</p>
            </Reveal>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
              {OTHER_COURSES.map((c, i) => (
                <Reveal
                  key={c.name}
                  delay={80 + i * 80}
                  className="group flex flex-col overflow-hidden rounded-[4px] border border-white/15 bg-ink text-paper lg:grid lg:grid-cols-[144px_minmax(0,1fr)] xl:grid-cols-[176px_minmax(0,1fr)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/9] lg:aspect-auto lg:min-h-[184px]">
                    <Image
                      src={c.img}
                      alt={c.alt}
                      fill
                      sizes="(max-width:1023px) 46vw, (max-width:1279px) 144px, 176px"
                      className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-2 top-2 rounded-full bg-crimson px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.08em] text-white shadow-sm sm:left-3 sm:top-3 sm:px-3 sm:text-[0.7rem]">
                      3 YEARS
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-start p-3 sm:p-6 lg:p-4 xl:p-5">
                    <p className="hidden text-[0.72rem] uppercase tracking-[0.16em] text-crimson sm:block">{c.focus}</p>
                    <h3 className="max-w-md font-serif text-[1.15rem] leading-tight sm:mt-2 sm:text-[1.8rem] lg:text-[1.35rem]">{c.name}</h3>
                    <p className="mt-2 hidden text-[0.82rem] leading-relaxed text-white/75 lg:block">
                      {c.description}
                    </p>
                    <a href="#enquire" className="ulink mt-auto inline-flex items-center gap-1.5 pt-3 text-[0.78rem] text-white sm:gap-2 sm:pt-4 sm:text-[0.82rem] lg:pt-3" aria-label={`Enquire about ${c.name}`}>
                      Explore program <ArrowUpRight className="shrink-0 text-crimson" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-6 grid grid-cols-2 items-stretch overflow-hidden rounded-[4px] border border-crimson/25 bg-crimson/[0.06] sm:grid-cols-3 sm:auto-rows-fr">
              <div className="p-4 sm:p-6">
                <p className={ADMISSION_VALUE_CLASS}>40</p>
                <p className="mt-2 text-[0.98rem] leading-snug text-ink">Students per program</p>
              </div>
              <div className="border-l border-crimson/20 p-4 sm:p-6">
                <p className={ADMISSION_VALUE_CLASS}>15</p>
                <p className="mt-2 text-[0.98rem] leading-snug text-ink">Early-bird places each</p>
              </div>
              <div className="col-span-2 border-t border-crimson/20 p-4 sm:col-span-1 sm:border-l sm:border-t-0 sm:p-6">
                <p className={ADMISSION_VALUE_CLASS}>1 December</p>
                <p className="mt-2 text-[0.98rem] leading-snug text-ink">Admissions open</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Students — proof faces, 3-row fade carousel */}
      <section className="border-y border-line bg-paper-2/40 py-7 sm:py-12">
        <div className="shell mb-5 max-w-2xl lg:max-w-none">
          <Reveal>
            <h2 className="display balance text-[clamp(1.7rem,4.8vw,3rem)] lg:max-w-3xl">
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

      {/* Intern spotlight — keep the approved mobile treatment; show the
          complete 9:16 frame beside the heading on desktop. */}
      <section className="relative h-[62vh] min-h-[440px] w-full overflow-hidden bg-ink sm:h-[56vh] lg:h-auto lg:min-h-0">
        <div className="h-full lg:mx-auto lg:grid lg:h-auto lg:max-w-[1040px] lg:grid-cols-[minmax(0,1fr)_288px] lg:items-center lg:gap-20 lg:px-12 lg:py-10">
        <div className="absolute inset-0 lg:relative lg:inset-auto lg:col-start-2 lg:row-start-1 lg:aspect-[9/16] lg:overflow-hidden lg:rounded-lg lg:bg-black lg:ring-1 lg:ring-white/15" aria-hidden="true">
          <LazyVideo
            src="/videos/intern-spotlight.mp4"
            poster="/videos/intern-spotlight-poster.jpg"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 object-cover lg:inset-0 lg:h-full lg:min-h-0 lg:w-full lg:min-w-0 lg:translate-x-0 lg:translate-y-0 lg:object-contain"
          />
        </div>
        {/* Scrim at both ends, so text stays legible whether it sits at
            the top of the frame or the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-transparent to-transparent lg:hidden" />

        <div className="shell relative flex h-full flex-col py-8 sm:py-12 lg:col-start-1 lg:row-start-1 lg:h-auto lg:min-w-0 lg:!p-0">
          <Reveal className="max-w-sm">
            <h2 className="display balance text-[clamp(1.7rem,4.8vw,3rem)] text-white lg:text-[3.5rem]">
              You intern{" "}
              <span className="serif-em text-crimson">thrice</span> in 3
              years.
            </h2>
          </Reveal>
          <div className="mt-9 hidden lg:block">
            <p className="mb-5 font-serif text-2xl text-white">
              Learn by working{" "}
              <span className="serif-em text-crimson">with</span> —
            </p>
            <Recognition vibrant doubleRow embedded showAccreditation={false} showKicker={false} />
          </div>
        </div>
        </div>
      </section>

      {/* Mobile keeps the full-width recruiter showcase below the video. */}
      <div className="lg:hidden">
      <div className="relative overflow-hidden bg-gradient-to-br from-black via-ink to-black py-8 text-center sm:py-12">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/25 blur-[100px]" />
        <p className="shell relative display text-[clamp(1.3rem,3.6vw,1.9rem)] text-white">
          Learn by working{" "}
          <span className="serif-em text-crimson">with</span> —
        </p>
      </div>

      {/* Trust — recruiters + accreditation */}
      <Recognition vibrant doubleRow showAccreditation={false} showKicker={false} />
      </div>

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
                  loading="lazy"
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
        <div className="lg:mx-auto lg:grid lg:max-w-[1280px] lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-center lg:gap-12 lg:px-12">
        <div className="shell mb-6 lg:mb-0 lg:!px-0">
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
        <div className="shell lg:!px-0">
          <YearbookFlipBook pages={YEARBOOK_PAGES} />
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
                <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-5">
                  {ACCREDITATION.map((a) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      loading="lazy"
                      decoding="async"
                      key={a.name}
                      src={a.src}
                      alt={a.name}
                      className="h-10 w-auto max-w-[140px] object-contain [filter:brightness(0)] sm:h-12 sm:max-w-[160px]"
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
