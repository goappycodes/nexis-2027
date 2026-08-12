import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import StudentCarousel from "@/components/StudentCarousel";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import {
  BATCH,
  CONTACT,
  ACCREDITATION,
  RECRUITER_LOGOS,
  CAMPUS_IMAGES,
  CAMPUS_STATS,
  OUTCOME_STATS,
  FACULTY,
} from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Undergraduate Program in Business Management — Batch of 2027 | NEXIS",
  description:
    "A three-year, on-campus undergraduate program in Siliguri where you practise what you learn every single day — Digital Sales & Marketing, Business Analytics and Entrepreneurship, mentored by founders and CXOs.",
};

/* ---- Content mirrors nexisschool.com/ug (kept local to /ug) ---- */

const FACTS = [
  { label: "Mode", value: "On-campus", sub: "Siliguri campus" },
  { label: "Commencement", value: BATCH.starts, sub: BATCH.cohort },
  { label: "Eligibility", value: "Class XII", sub: "current students & passouts" },
  { label: "Duration", value: "3 years", sub: "incl. 6-month internship" },
];

const MENTOR_POINTS = [
  "Get guided by entrepreneurs who've been there and done that.",
  "Work on live industry projects that take you far beyond classroom learning.",
];

const CURRICULUM = [
  {
    year: "Year 01",
    title: "Digital Sales & Marketing",
    lede: "Build your foundations — learn to build an audience and sell, the core skill of every modern business.",
  },
  {
    year: "Year 02",
    title: "Business Analytics",
    lede: "Deepen your edge — turn data into decisions with dashboards, AI tools and real client work.",
  },
  {
    year: "Year 03",
    title: "Entrepreneurship",
    lede: "Take the entrepreneur's seat — build, pitch and run a venture of your own.",
  },
];

const ALREADY = [
  "Consulted 5+ local businesses to grow their revenue",
  "Built 4 real D2C businesses from scratch in the first semester",
  "Developed 15+ AI bots for real use-cases",
];

const INTERN_POINTS = [
  "Begin internships in startups as early as their first semester",
  "Are mentored directly by founders and CXOs",
  "Gain hands-on experience across marketing, finance, operations and more",
];

const LIFE_POINTS = [
  "A 360° campus experience at a next-gen campus",
  "Lead thriving student clubs and organise 30+ events in 3 years",
  "Compete in bi-monthly competitions across 10+ sports",
  "Build lifelong friendships and a professional network that lasts",
];

const EXPERIENCES = [
  {
    tag: "Content Creator Challenge",
    title: "Become an Influencer",
    d: "Learn marketing by building your own influencer brand — and grow channels that reach thousands, even millions.",
    img: "/images/campus/tour6.jpg",
  },
  {
    tag: "Dropshipping Challenge",
    title: "Become an entrepreneur at 18",
    d: "Build and scale your own venture from scratch — and earn real revenue and profit.",
    img: "/images/campus/tour7.jpg",
  },
  {
    tag: "OUTCLASS",
    title: "Consult local businesses",
    d: "Step into a consultant's shoes — from cafés to car dealerships — to revamp and grow real local businesses.",
    img: "/images/campus/tour8.jpg",
  },
  {
    tag: "Industry Trek",
    title: "Decode real business operations",
    d: "Tour iconic factories, unicorn startups and offices to see firsthand how businesses run on the ground.",
    img: "/images/campus/tour9.jpg",
  },
  {
    tag: "AIvolution",
    title: "Build with AI",
    d: "Use powerful AI tools that make you work smarter, not harder — solving real business problems with ease.",
    img: "/images/campus/apex-hall.jpg",
  },
  {
    tag: "Global Immersion",
    title: "Learn beyond borders",
    d: "Opt into international immersion trips to Singapore and Dubai for first-hand exposure to global business culture.",
    img: "/images/campus/safe-future.jpg",
  },
];

const PATHWAYS = [
  {
    meta: "Careers",
    title: "Internships & careers first",
    d: "Careers don't start after NEXIS — they start as soon as you join. Internships every year, résumé, LinkedIn and interview training, and career bootcamps backed by a 75+ recruiter network.",
  },
  {
    meta: "Entrepreneurship",
    title: "Start your startup with the NEXIS Incubation Centre",
    d: "Learning by building is our DNA. Mentor and founder guidance, seed-fund support for strong ideas, and insights to scale family businesses — many graduate with a running business and customers already in the market.",
  },
  {
    meta: "Higher studies",
    title: "Ready for higher studies",
    d: "Regular career counselling, GMAT/CAT and study-abroad guidance, and a portfolio of real work. Whether it's an MBA, a global university or a specialised master's — you move forward with confidence.",
  },
];

const DAY = [
  {
    t: "Treasure Hunt",
    d: "A day of clues, laughter and teamwork as students put their minds and energy to the test.",
  },
  {
    t: "Houses @ NEXIS",
    d: "Creativity, unity and friendship come alive as students represent their houses with pride.",
  },
  {
    t: "Sports at NEXIS",
    d: "Students compete every month across 10+ sports, representing their houses.",
  },
];

const ADMISSION_STEPS = [
  {
    n: "01",
    title: "Apply online",
    d: "Submit your application and profile. There is no cut-off on Class XII board marks — we look at the whole person.",
  },
  {
    n: "02",
    title: "NEXGen Test",
    d: "A 45-minute on-campus aptitude test that assesses your readiness and mindset for business management.",
  },
  {
    n: "03",
    title: "Interview & discussion",
    d: "A conversation to understand whether you're coachable, ambitious and a fit for the three-year program.",
  },
];

const UG_FAQS = [
  {
    q: "What is NEXIS?",
    a: "NEXIS is a private business school that operates as a Training Body, duly accredited by MEPSC — an awarding body recognised by NCVET — and offers certification in vocational courses related to business management, aligned with the NSQF framework. NEXIS does not confer any degrees.",
  },
  {
    q: "Can I join for a single year, or do I need to commit to the full 3-year programme?",
    a: "The 3-year integrated programme is the flagship at NEXIS, and most students opt for it. Year 1 builds your foundations in Digital Sales & Marketing, Year 2 deepens your edge with Business Analytics, and Year 3 puts you in the entrepreneur's seat. Each year is an independent NSQF-aligned qualification recognised under NCVET, so you earn a nationally recognised qualification at the end of every year — not just after three.",
  },
  {
    q: "Why should I join NEXIS School of Business?",
    a: "NEXIS focuses on practical, hands-on learning rather than traditional classroom methods: a future-ready curriculum with AI & tech-based learning, 30+ masterclasses each semester led by founders of successful businesses, a campus full of events, sport, clubs, real projects and internships, and the chance to study alongside the best students in your region.",
  },
  {
    q: "Is it an online program?",
    a: "No. The 3-year undergraduate program is full-time and on-campus in Siliguri, at a 7,500 sq ft modern campus with an opt-in residential facility through tie-ups with nearby PGs.",
  },
  {
    q: "What financing options are available?",
    a: "We've partnered with Axis Bank for collateral-free education loans at low interest with moratorium benefits, plus semester-wise payment plans so you can pay in instalments. Finance shouldn't be a barrier if you're selected.",
  },
  {
    q: "Is this a fully residential program?",
    a: "No — it's opt-in. NEXIS helps students who wish to live close to campus connect with nearby, secure accommodation. Accommodation charges aren't part of the fee, and NEXIS doesn't charge students or residences for facilitating this.",
  },
  {
    q: "What is the eligibility criteria?",
    a: "Students who have completed Class XII from a recognised board (CBSE, ISC, WBCHSE and others), with or without Mathematics. There is no board-marks cut-off — we evaluate academics alongside extracurriculars, leadership and personal experience, followed by the 45-minute on-campus NEXGen aptitude test and an interview.",
  },
];

/* Eyebrow label — crimson by default, neon-lime on dark sections. */
function Eyebrow({
  children,
  lime = false,
}: {
  children: ReactNode;
  lime?: boolean;
}) {
  return (
    <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
      <span className={`h-px w-8 ${lime ? "bg-lime" : "bg-crimson"}`} />
      <span className={lime ? "text-lime" : "text-crimson"}>{children}</span>
    </p>
  );
}

function monogram(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

const DEEP = "bg-[#08080a]";

export default function UGPage() {
  return (
    <main className="relative font-poppins ug-poppins">
      <SiteNav applyHref="#apply" theme="dark" />

      {/* ============ HERO ============ */}
      <section id="top" className={`relative overflow-hidden ${DEEP} text-white`}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-crimson/25 blur-[130px]" />
          <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-lime/10 blur-[130px]" />
        </div>

        <div className="shell relative grid items-center gap-10 pt-9 pb-11 sm:pt-12 lg:grid-cols-12 lg:gap-12 lg:pb-20 lg:pt-16">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow lime>Undergraduate Program · {BATCH.city}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display balance mt-5 text-[clamp(2.1rem,5.4vw,4.2rem)] text-white">
                Undergraduate Program in{" "}
                <span className="serif-em text-crimson">Business Management</span>
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-white/70">
                A three-year programme where you practise what you learn — every
                single day. Industry-integrated, with a focus on Digital Sales &amp;
                Marketing, Business Analytics and Entrepreneurship, plus the
                industry-readiness skills that set you apart.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href={CONTACT.applyHref} className="btn btn-crimson">
                  Apply now
                  <ArrowRight className="arrow" />
                </a>
                <a
                  href={CONTACT.brochureHref}
                  className="btn border-white/25 bg-transparent text-white hover:bg-white/10"
                >
                  Download brochure
                  <ArrowUpRight className="arrow" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={200} className="relative">
              <figure className="relative aspect-[16/11] overflow-hidden rounded-[4px] bg-white/5 sm:aspect-[4/5] lg:aspect-[7/8]">
                <Image
                  src="/images/campus/cafeteria.jpg"
                  alt="Inside the NEXIS campus in Siliguri"
                  fill
                  sizes="(max-width:1024px) 100vw, 40vw"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent" />
                <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/45 px-3.5 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  Campus · {BATCH.city}
                </figcaption>
              </figure>
              <div className="absolute -left-3 -top-3 hidden rounded-[3px] border border-white/10 bg-[#0e0e11] px-4 py-3 shadow-2xl sm:block lg:-left-7">
                <p className="display text-3xl leading-none text-lime">70%</p>
                <p className="mt-1 text-[0.64rem] uppercase tracking-[0.14em] text-white/50">
                  hands-on
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Fact rail */}
        <div className="relative border-t border-white/10">
          <div className="shell grid grid-cols-2 md:grid-cols-4">
            {FACTS.map((f, i) => (
              <Reveal
                key={f.label}
                delay={i * 70}
                className={`py-5 sm:py-6 md:px-7 md:first:pl-0 ${
                  i % 2 === 0 ? "pr-4" : "pl-4 md:pl-7"
                } ${i < 2 ? "border-b border-white/10 md:border-b-0" : ""} ${
                  i > 0 ? "md:border-l md:border-white/10" : ""
                }`}
              >
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-lime">
                  {f.label}
                </p>
                <p className="mt-2 font-serif text-xl leading-tight">{f.value}</p>
                <p className="mt-0.5 text-[0.8rem] text-white/45">{f.sub}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BACKED BY ============ */}
      <section className="bg-ink text-white">
        <div className="shell py-9 sm:py-12">
          <Reveal className="text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/45">
              Our programs are backed by
            </p>
          </Reveal>
          <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {ACCREDITATION.map((a) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={a.name}
                src={a.src}
                alt={a.name}
                className="h-9 w-auto max-w-[160px] object-contain opacity-90 sm:h-11"
              />
            ))}
          </Reveal>
          <Reveal className="mx-auto mt-9 max-w-3xl border-t border-white/10 pt-8 text-center text-[0.88rem] leading-relaxed text-white/50">
            <p>
              NEXIS is a private business school and a Training Body accredited by{" "}
              <span className="font-medium text-white/80">MEPSC</span> — an awarding
              body recognised by{" "}
              <span className="font-medium text-white/80">NCVET</span> — offering{" "}
              <span className="font-medium text-white/80">NSQF-aligned</span>{" "}
              certification in business management. NEXIS does not confer any degrees.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ LEARN DIRECTLY FROM INDUSTRY LEADERS (light) ============ */}
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow>Faculty &amp; Mentors</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display balance mt-5 text-[clamp(1.9rem,4.6vw,3.4rem)]">
                  Learn directly from industry leaders &amp;{" "}
                  <span className="serif-em text-crimson">entrepreneurs</span>.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-ink-2">
                  Get mentored by 50+ industry leaders from companies like boAt,
                  Snitch, Lenskart, State Plate and Zomato.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <ul className="space-y-4">
                {MENTOR_POINTS.map((p, i) => (
                  <Reveal
                    key={p}
                    delay={i * 80}
                    className="flex gap-4 rounded-[3px] border border-line bg-paper p-5"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-crimson" />
                    <span className="text-[0.98rem] leading-relaxed text-ink-2">
                      {p}
                    </span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CURRICULUM (dark) ============ */}
      <section className={`${DEEP} text-white`}>
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow lime>The Curriculum</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.9rem,4.6vw,3.4rem)] text-white">
                A new-age curriculum for three years of{" "}
                <span className="serif-em text-crimson">transformation</span>.
              </h2>
            </Reveal>
          </div>

          <div className="mt-9 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
            {CURRICULUM.map((c, i) => (
              <Reveal
                key={c.year}
                delay={i * 90}
                className="flex flex-col rounded-[3px] border border-white/10 bg-[#0e0e11] p-6 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-lime">
                    {c.year}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="mt-5 font-serif text-xl leading-tight sm:text-2xl">
                  {c.title}
                </h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-white/60">
                  {c.lede}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 rounded-[3px] border border-white/10 bg-white/[0.03] p-6 sm:mt-10 sm:p-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-lime">
              At NEXIS, our students have already
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {ALREADY.map((a) => (
                <li
                  key={a}
                  className="flex gap-3 text-[0.92rem] leading-relaxed text-white/75"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ============ INTERNSHIPS (light) ============ */}
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow>Internships</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display balance mt-5 text-[clamp(1.9rem,4.6vw,3.4rem)]">
                  Intern with top brands from your{" "}
                  <span className="serif-em text-crimson">first year</span>.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-ink-2">
                  Work with leading firms and gain real-world exposure. At NEXIS,
                  students:
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <ul className="space-y-3 border-t border-line pt-2">
                {INTERN_POINTS.map((p, i) => (
                  <Reveal
                    key={p}
                    delay={i * 80}
                    className="flex gap-3 border-b border-line py-4 text-[0.98rem] leading-relaxed text-ink-2"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                    <span>{p}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STUDENT LIFE (dark) ============ */}
      <section className="bg-ink text-white">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow lime>Student Life &amp; Campus</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display balance mt-5 text-[clamp(1.9rem,4.6vw,3.4rem)] text-white">
                  Student life is more than just{" "}
                  <span className="serif-em text-crimson">lectures</span>.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <ul className="mt-6 space-y-3">
                  {LIFE_POINTS.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-[0.96rem] leading-relaxed text-white/70"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <div className="border-t border-white/10">
                {CAMPUS_STATS.map((s, i) => (
                  <Reveal
                    key={s.l}
                    delay={i * 90}
                    className="flex items-baseline gap-5 border-b border-white/10 py-5"
                  >
                    <p className="display w-28 shrink-0 text-[clamp(1.8rem,4vw,2.6rem)] text-lime">
                      {s.k}
                    </p>
                    <p className="text-[0.92rem] leading-relaxed text-white/65">
                      {s.l}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-12 md:grid-cols-4">
            {CAMPUS_IMAGES.map((img, i) => (
              <Reveal
                key={img.src}
                delay={(i % 4) * 60}
                className="group relative aspect-[4/3] overflow-hidden rounded-[3px] bg-white/5"
              >
                <Image
                  src={img.src}
                  alt={img.cap}
                  fill
                  loading="lazy"
                  sizes="(max-width:768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 flex items-center gap-2 p-3 text-[0.74rem] font-medium text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  {img.cap}
                </figcaption>
              </Reveal>
            ))}
          </div>

          {/* A day in the life */}
          <div className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-3">
            {DAY.map((d, i) => (
              <Reveal
                key={d.t}
                delay={i * 80}
                className="rounded-[3px] border border-white/10 bg-[#0e0e11] p-6"
              >
                <h3 className="font-serif text-lg leading-tight">{d.t}</h3>
                <p className="mt-2.5 text-[0.88rem] leading-relaxed text-white/60">
                  {d.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FIRST-YEAR STUDENTS (dark) ============ */}
      <section className={`${DEEP} text-white py-12 sm:py-16 lg:py-20`}>
        <div className="shell mb-8 max-w-2xl">
          <Reveal>
            <Eyebrow lime>The founding batch, at work</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display balance mt-5 text-[clamp(1.9rem,4.6vw,3.4rem)] text-white">
              These are our first-year{" "}
              <span className="serif-em text-crimson">students</span>.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-[1rem] leading-relaxed text-white/60">
              Already interning, earning and winning national recognitions.
            </p>
          </Reveal>
        </div>
        <StudentCarousel />
      </section>

      {/* ============ 30+ INDUSTRY LEADERS ON CAMPUS (light) ============ */}
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>On Campus</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.9rem,4.6vw,3.4rem)]">
                30+ industry leaders already on{" "}
                <span className="serif-em text-crimson">campus</span>.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-ink-2">
                Learn how businesses are built, scaled and sustained — directly
                from those who&rsquo;ve done it.
              </p>
            </Reveal>
          </div>

          <div className="mt-9 grid gap-5 sm:mt-14 md:grid-cols-3">
            {FACULTY.map((f, i) => (
              <Reveal
                key={f.name}
                delay={i * 90}
                className="rounded-[3px] border border-line bg-paper p-6 sm:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink font-serif text-lg text-paper">
                  {monogram(f.name)}
                </div>
                <h3 className="mt-5 font-serif text-xl leading-tight">{f.name}</h3>
                <p className="mt-1 text-[0.8rem] font-medium uppercase tracking-[0.1em] text-crimson">
                  {f.role}
                </p>
                <p className="mt-4 border-t border-line pt-4 text-[0.92rem] leading-relaxed text-ink-2">
                  {f.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LEARN BY DOING (crimson) ============ */}
      <section className="bg-crimson text-white">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/80">
                <span className="h-px w-8 bg-white/60" />
                Learn by doing
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.9rem,4.6vw,3.4rem)] text-white">
                Learn by doing — not just by sitting in{" "}
                <span className="serif-em">lectures</span>.
              </h2>
            </Reveal>
          </div>

          <div className="mt-9 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCES.map((e, i) => (
              <Reveal
                key={e.title}
                delay={(i % 3) * 80}
                className="group relative aspect-[4/3] overflow-hidden rounded-[3px] bg-black/20"
              >
                <Image
                  src={e.img}
                  alt={e.title}
                  fill
                  loading="lazy"
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-lime">
                    {e.tag}
                  </span>
                  <h3 className="mt-1.5 font-serif text-lg leading-tight">
                    {e.title}
                  </h3>
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-white/75">
                    {e.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CAREER PROSPECTS (light) ============ */}
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Career Prospects</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.9rem,4.6vw,3.4rem)]">
                Our exclusive network of{" "}
                <span className="serif-em text-crimson">75+ companies</span>.
              </h2>
            </Reveal>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-6 border-y border-line py-8 sm:mt-12 lg:grid-cols-4">
            {OUTCOME_STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 70}>
                <p className="display text-[clamp(2rem,4.5vw,3.2rem)] text-ink">
                  {s.k}
                </p>
                <p className="mt-1.5 text-[0.85rem] leading-snug text-muted">
                  {s.l}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {PATHWAYS.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                className="rounded-[3px] border border-line bg-paper p-6 sm:p-8"
              >
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-crimson">
                  {p.meta}
                </span>
                <h3 className="mt-4 font-serif text-lg leading-tight sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-2">
                  {p.d}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-muted">
              Where our students already work &amp; learn
            </p>
          </Reveal>
          <div className="marquee-mask mt-7 overflow-hidden">
            <div className="flex w-max items-center animate-marquee">
              {[...RECRUITER_LOGOS, ...RECRUITER_LOGOS].map((l, i) => (
                <div
                  key={`${l.name}-${i}`}
                  className="flex h-12 shrink-0 items-center justify-center px-8 sm:px-10"
                  title={l.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={l.src}
                    alt={l.name}
                    className="h-6 w-auto max-w-[130px] object-contain opacity-70 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 sm:h-7"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ ADMISSIONS (dark) ============ */}
      <section className="bg-ink text-white">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow lime>Admissions</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.9rem,4.6vw,3.4rem)] text-white">
                Want to know how you can join{" "}
                <span className="serif-em text-crimson">NEXIS</span>?
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-white/65">
                Discover our admission process, eligibility and key dates — and
                take the first step toward becoming a NEXIS student.
              </p>
            </Reveal>
          </div>

          <div className="mt-9 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
            {ADMISSION_STEPS.map((s, i) => (
              <Reveal
                key={s.n}
                delay={i * 90}
                className="rounded-[3px] border border-white/10 bg-[#0e0e11] p-6 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="display text-3xl text-lime">{s.n}</span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="mt-5 font-serif text-xl leading-tight">{s.title}</h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-white/60">
                  {s.d}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Reveal className="rounded-[3px] border border-white/10 bg-[#0e0e11] p-6 sm:p-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-lime">
                Eligibility
              </p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-white/70">
                Open to students appearing for or having passed Class XII from any
                recognised board — with or without Mathematics. We evaluate
                academics alongside extracurriculars, leadership and experience.
              </p>
            </Reveal>
            <Reveal
              delay={90}
              className="rounded-[3px] border border-white/10 bg-[#0e0e11] p-6 sm:p-8"
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-lime">
                Financing
              </p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-white/70">
                Finance shouldn&rsquo;t be a barrier. We partner with Axis Bank for
                collateral-free education loans at low interest, plus semester-wise
                payment plans so you can pay in instalments.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FAQ (dark) ============ */}
      <section className={`${DEEP} text-white`}>
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow lime>Questions</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display balance mt-5 text-[clamp(1.9rem,4.4vw,3rem)] text-white">
                  Frequently asked{" "}
                  <span className="serif-em text-crimson">questions</span>.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={UG_FAQS} dark />
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA (crimson) ============ */}
      <section id="apply" className="scroll-mt-24 bg-crimson text-white">
        <div className="shell py-12 sm:py-18 lg:py-24">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/80">
                  <span className="h-px w-8 bg-white/60" />
                  Admissions open · {BATCH.cohort}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display balance mt-6 text-[clamp(2rem,5.2vw,4rem)] text-white">
                  Take the first step toward becoming a NEXIS{" "}
                  <span className="serif-em">student</span>.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 max-w-lg text-[1.02rem] leading-relaxed text-white/85">
                  Applications are open for the {BATCH.cohort} in {BATCH.city}.
                  Discover the admission process, eligibility and key dates.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Reveal
                delay={200}
                className="flex flex-col gap-3 sm:flex-row lg:flex-col"
              >
                <a
                  href={CONTACT.applyHref}
                  className="btn btn-light w-full justify-center sm:w-auto lg:w-full"
                >
                  Apply now
                  <ArrowRight className="arrow" />
                </a>
                <a
                  href={CONTACT.brochureHref}
                  className="btn w-full justify-center border-white/40 bg-transparent text-white hover:bg-white/10 sm:w-auto lg:w-full"
                >
                  Download brochure
                  <ArrowUpRight className="arrow" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
