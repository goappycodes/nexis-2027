import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import StudentCarousel from "@/components/Ug2StudentCarousel";
import VideoPlate from "@/components/VideoPlate";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import {
  BATCH,
  CONTACT,
  REPORTS,
  UG_EVENTS,
  UG_SECTIONS,
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
  // Alternate layout of /ug — kept out of search so the two don't compete.
  robots: { index: false, follow: true },
};

/* ---- Content & layout mirror nexisschool.com/ug (kept local to /ug-2) ---- */

const FACTS = [
  { label: "Mode", value: "On-campus", sub: "Siliguri campus" },
  { label: "Commencement", value: BATCH.starts, sub: `(${BATCH.cohort})` },
  {
    label: "Eligibility",
    value: "Class XII",
    sub: "(current students and passouts)",
  },
  {
    label: "Duration",
    value: "3 years",
    sub: "with 6 months of mandatory internship",
  },
];

const MENTOR_POINTS = [
  "Get guided by entrepreneurs who've been there and done that",
  "Work on live industry projects that take you far beyond classroom learning",
];

const ALREADY = [
  "Consulted 5+ local businesses to grow their revenue",
  "Built 4 real D2C businesses from scratch in the 1st semester",
  "Developed 15+ AI bots across various use cases",
];

const INTERN_POINTS = [
  "Begin internships in startups as early as their first semester",
  "Undergo mentorship directly from founders and CXOs",
  "Gain hands-on experience across marketing, finance, operations and more",
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

const LIFE_POINTS = [
  "Lead thriving student clubs and organise 30+ events in 3 years",
  "Compete in bi-monthly competitions across 10+ sports",
  "Build lifelong friendships and a strong professional network that lasts",
];

/** Student-life photography from the live site, shown alongside the campus set. */
const LIFE_IMAGES = [
  { src: "/images/ug/life-1.jpg", cap: "BizNEX" },
  { src: "/images/ug/life-2.jpg", cap: "Student life" },
  { src: "/images/ug/life-3.jpg", cap: "Outdoor experiences" },
  { src: "/images/ug/life-4.jpg", cap: "Sports club" },
  { src: "/images/ug/life-5.jpg", cap: "Student-run clubs" },
];

const LEARN = [
  {
    badge: "Become an Influencer",
    title: "Become an Influencer — Content Creator Challenge",
    d: "Learn marketing by building your own influencer brand. Create channels that reach thousands — even millions — of followers.",
    img: "/images/ug/learn-influencer.jpg",
    metaLabel: "Our in-house LinkedIn creators",
    people: [
      { name: "Daiwik Bansal", src: "/images/ug/creator-daiwik.jpg" },
      { name: "Chirag Agrahari", src: "/images/ug/creator-chirag.jpg" },
    ],
  },
  {
    badge: "Dropshipping Challenge",
    title: "Become entrepreneurs at just 18",
    d: "Build and scale your own venture from scratch, and earn real revenue and profits.",
    img: "/images/ug/learn-dropshipping.jpg",
    metaLabel: "Brands our UG students have built",
    logos: [
      { name: "Toyzilla", src: "/images/ug/brand-toyzilla.jpg" },
      { name: "Ship Sukoon", src: "/images/ug/brand-shipsukoon.jpg" },
      { name: "Plushy Crafts", src: "/images/ug/brand-plushycrafts.jpg" },
      { name: "Chuparustam", src: "/images/ug/brand-chuparustam.jpg" },
    ],
  },
  {
    badge: "Consult local businesses",
    title: "Consult real local businesses and grow their profits",
    d: "Step into the shoes of a consultant — from cafés to car dealerships — to adopt, revamp and grow local businesses.",
    img: "/images/ug/learn-dropshipping.jpg",
    metaLabel: "Businesses our students have advised",
    logos: [
      { name: "Prabin", src: "/images/ug/client-prabin.svg" },
      { name: "Voyage", src: "/images/ug/client-voyage.png" },
      { name: "Kins Hospital", src: "/images/ug/client-kins.png" },
      { name: "Sohum", src: "/images/ug/client-sohum.png" },
    ],
  },
  {
    badge: "Industry Trek",
    title: "Decode real business operations",
    d: "Tour iconic factories, unicorn startups and offices to see firsthand how businesses operate on the ground.",
    img: "/images/ug/learn-trek.jpg",
    metaLabel: "Recent treks",
    logos: [
      { name: "Sapphire", src: "/images/ug/trek-sapphire.png" },
      { name: "Pastiano", src: "/images/ug/trek-pastiano.png" },
      { name: "Parle", src: "/images/ug/trek-parle.png" },
    ],
  },
  {
    badge: "AIvolution",
    title: "Exploring the power of AI in everyday business",
    d: "Learn to use powerful AI tools that make you work smarter, not harder — simplifying tasks, boosting creativity and solving real business challenges with ease.",
    img: "/images/ug/learn-ai.jpg",
  },
  {
    badge: "Global Immersion Program",
    title: "A world-class learning experience for future leaders",
    d: "Students can opt for international immersion trips to places like Singapore and Dubai for first-hand exposure to global business culture.",
    img: "/images/ug/learn-global.jpg",
  },
];

/* Batch films pulled from the live site (public/videos/ug). */
const BATCH_FILMS = [
  {
    src: "/videos/ug/batch-1.mp4",
    poster: "/images/ug/founding-1.jpg",
    label: "Meet the 2025–28 batch",
  },
  {
    src: "/videos/ug/batch-2.mp4",
    poster: "/images/ug/founding-2.jpg",
    label: "A student on her year at NEXIS",
  },
  {
    src: "/videos/ug/batch-3.mp4",
    poster: "/images/ug/founding-3.jpg",
    label: "A student on his year at NEXIS",
  },
];

const PATHWAYS = [
  {
    meta: "Careers",
    title: "Internships & careers first",
    lede: "Careers don't start after NEXIS — they start as soon as you join. Students gain:",
    points: [
      "Internships every year",
      "Résumé, LinkedIn and interview training",
      "Career bootcamps and a strong 75+ recruiter network",
    ],
    img: "/images/ug/career-jobs.jpg",
  },
  {
    meta: "Entrepreneurship",
    title: "Start your startup with the NEXIS Incubation Centre",
    lede: "Learning by building — that's our DNA. From dropshipping challenges to launching their own brands, students get:",
    points: [
      "Guidance from industry mentors and founders",
      "Seed-fund support for strong ideas",
      "Insights to scale family businesses",
    ],
    foot: "Many graduate with a running business and customers already in the market.",
    img: "/images/ug/career-entrepreneurship.jpg",
  },
  {
    meta: "Higher studies",
    title: "Ready for higher studies",
    lede: "Students at NEXIS don't guess their next step — they plan it. With regular career counselling, access to GMAT/CAT and study-abroad guidance, and a portfolio of real work, their CV stands out long before graduation.",
    foot: "Whether it's an MBA, a global university or a specialised master's — they move forward with confidence and competitive advantage.",
    img: "/images/ug/career-higher-studies.jpg",
  },
];

const DAY = [
  {
    t: "Treasure Hunt",
    d: "A day filled with clues, laughter and teamwork, as NEXIS students put their minds and energy to the test in the ultimate treasure hunt adventure.",
    img: "/images/ug/day-treasure-hunt.jpg",
  },
  {
    t: "Houses @ NEXIS",
    d: "Watch how creativity, unity and friendship come alive when our students represent their houses with pride.",
    img: "/images/ug/day-houses.jpg",
  },
  {
    t: "Sports at NEXIS",
    d: "Our students compete monthly across 10+ sports, representing their unique houses.",
    img: "/images/ug/day-sports.jpg",
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

const UG_FAQS: FaqItem[] = [
  {
    q: "What is NEXIS?",
    a: "NEXIS is a private business school and operates as a Training Body, duly accredited by MEPSC — an awarding body recognised by NCVET — and offers certification in vocational courses related to business management, which are aligned with the NSQF framework. NEXIS does not confer any degrees.",
  },
  {
    q: "Can I join NEXIS for a single year, or do I need to commit to the full 3-year programme?",
    a: [
      {
        p: "The 3-year integrated programme is the flagship at NEXIS — and most students who enrol opt for the same. It's designed as a full journey wherein Year 1 builds your foundations in Digital Sales & Marketing, Year 2 deepens your edge with Business Analytics, and Year 3 puts you in the entrepreneur's seat.",
      },
      {
        p: "Each year is structured around an independent NSQF-aligned vocational qualification recognised under the NCVET framework, which means you earn a nationally recognised qualification at the end of every year — not just at the end of 3 years.",
      },
    ],
  },
  {
    q: "Why should I join NEXIS School of Business?",
    a: [
      {
        p: "At the NEXIS School of Business, students are not just signing up for education but investing in a future-ready career. NEXIS is different because of its innovative approach to education, focusing on practical, hands-on learning rather than traditional classroom methods.",
      },
      { h: "Here's why NEXIS stands out" },
      {
        ul: [
          "Future-ready curriculum with AI & tech-based learning",
          "30+ masterclasses each semester led by founders of successful businesses",
          "Campus life full of events, sports, clubs, real projects and internships",
          "A modern campus built for how students actually work",
          "Study alongside the best students of your region",
        ],
      },
    ],
  },
  {
    q: "Is it an online program?",
    a: "No, the 3-year undergrad program at the NEXIS School of Business is a full-time, on-campus program in Siliguri. We have a 7,500 sq ft modern, new campus with an opt-in residential facility available through tie-ups with several PGs.",
  },
  {
    q: "What financing options are available to pay admission fees if I get selected?",
    a: "We offer financing options to ensure that finance is not a barrier if you are selected. We have partnered with Axis Bank to provide educational loans at low interest rates, without collateral, and with additional moratorium benefits. Additionally, we offer semester-wise payment plans, allowing you to pay fees in instalments at the start of each semester.",
  },
  {
    q: "Is this a fully residential program?",
    a: [
      {
        p: "No. This is an opt-in residential program wherein NEXIS assists students who wish to live close to campus in connecting with nearby resident facilities that offer comfortable, secure accommodation.",
      },
      {
        p: "(Neither the fee structure includes the accommodation charges, nor does NEXIS charge any sum to the students and/or resident facilities for facilitating such accommodation.)",
      },
    ],
  },
  {
    q: "What is the eligibility criteria for NEXIS School of Business?",
    a: [
      {
        p: "The NEXIS School of Business welcomes students who have completed their Class XII exams, as well as those currently appearing for them.",
      },
      { p: "At NEXIS, students will be evaluated on the following criteria:" },
      { h: "Academics and eligibility" },
      {
        p: "Class XII marks from a recognised board (e.g. CBSE, ISC, WBCHSE) are required. Students with or without Mathematics are eligible. However, there is no cut-off for Class XII board marks.",
      },
      { h: "Comprehensive profile evaluation" },
      {
        p: "We evaluate academic achievements, extracurriculars, leadership, community service and personal experiences.",
      },
      { h: "NEXGen Test" },
      {
        p: "A 45-minute on-campus aptitude test that assesses skills for business management and a mindset for excellence. It is followed by an interview cum discussion round where we assess whether the student is coachable, ambitious and fit for the 3-year program at NEXIS.",
      },
    ],
  },
  {
    q: "How can I apply for the scholarship?",
    a: [
      {
        p: "To apply for the scholarship, students must first give the NEXGen Scholarship Test.",
      },
      { h: "Merit scholarships" },
      {
        p: "Scholarships are awarded based on test scores and range from 10% to 100% of tuition fees.",
      },
      {
        p: "Additional scholarships will be given based on a comprehensive profile evaluation and the respective scholarship requirements.",
      },
      {
        ul: [
          "All-rounder Scholarships (ECA)",
          "Athletic Excellence Scholarships",
          "The Changemaker Scholarships",
          "EmpowerHer Scholarship",
          "Rise Scholar",
          "Himalayan Scholar",
        ],
      },
    ],
  },
  {
    q: "Where can I get an internship during my NEXIS UG?",
    a: [
      {
        p: "At NEXIS, students benefit from access to over 75+ recruiters, ensuring internship assistance from our side.",
      },
      {
        p: "We have collaborated with multiple local and national-level startups and corporates. Depending on the student's interest, the student can intern either in their city or outside. We provide exclusive access and training for students to crack these opportunities.",
      },
    ],
  },
  {
    q: "What does a week look like for a student at NEXIS?",
    a: "A week at NEXIS blends learning, industry exposure and hands-on experiences. Students dive into courses like AI in Business, Accounting, Communication, HR and Marketing, along with OUTCLASS activities such as the Dropshipping Challenge and local business consulting. The week features fireside chats with founders, factory visits, LinkedIn-building sessions and 1:1 mentorship. Sports competitions, games, club activities, masterclasses and the 1 Cr Investing Hackathon keep the campus in motion, making every day dynamic and impactful.",
  },
  {
    q: "What career outcomes can one expect after completing the program at NEXIS School of Business?",
    a: [
      {
        p: "Graduates of NEXIS School of Business are equipped with practical skills, industry-relevant knowledge and hands-on experience, making them highly sought after by employers and well-prepared for advanced studies. Career outcomes include:",
      },
      {
        ol: [
          "Entrepreneurship: students who are aspiring entrepreneurs or family-business growth leaders have a special place at NEXIS. The in-house Startup Incubation Centre offers a venture fund for student startups. Students gain access to networking events, 1:1 mentorship from business leaders and exclusive VC funding opportunities.",
          "Job placements: with personalised career coaching, a 2-month career bootcamp and connections to 75+ top recruiters, NEXIS ensures 100% placement assistance in management, marketing, finance, operations and HR roles across industries.",
          "Higher studies: graduates are prepared for advanced qualifications, including an MBA and specialised master's programs, with a strong foundation from hands-on learning.",
        ],
      },
    ],
  },
  {
    q: "Will I be able to pursue a master's degree later, and take competitive exams?",
    a: "On completion of qualification packs approved by NCVET, students are awarded a Certificate by NEXIS School of Business. Further, if a student opts for the 3-year comprehensive program, they will be awarded a Professional Certificate for the Undergraduate Program in Business Management by NEXIS School of Business upon completion of all 3 years.",
  },
  {
    q: "What is the fee structure for the three-year Business Management program?",
    a: [
      {
        p: "The fee structure for the NEXIS three-year Business Management program is as follows:",
      },
      {
        ul: [
          "First-year tuition fee: ₹2,35,000",
          "Second & third-year tuition fee: ₹1,95,000 (per year)",
        ],
      },
    ],
  },
  {
    q: "What recognitions does NEXIS School of Business have?",
    a: "NEXIS programmes are aligned with the National Skills Qualification Framework (NSQF) and recognised through NCVET — India's apex regulatory body for skill-focused programs — through our affiliation with MEPSC, a Sector Skill Council under the Ministry of Skill Development & Entrepreneurship, Government of India. NEXIS is also recognised by DPIIT under the Startup India initiative.",
  },
  {
    q: "Does NEXIS offer a degree?",
    a: [
      {
        p: "No, NEXIS itself doesn't offer a degree or diploma. It is an independent business school focusing on industry-led learning and career readiness, designed to prepare students for the jobs and businesses of tomorrow. We are not under the UGC or AICTE umbrella, and that is by choice. NEXIS comes under the NCVET umbrella, India's apex body for skill-focused programs.",
      },
      {
        p: "NEXIS provides a Certification in Business Management. Alongside this, students can independently pursue a Bachelor of Business Administration (BBA) from any UGC-certified university.",
      },
    ],
  },
  {
    q: "Why does NEXIS not offer its own degree?",
    a: "The idea behind NEXIS is to bridge the gap between qualifications and real-world readiness. Staying independent allows NEXIS to move beyond rigid regulations, update its curriculum continuously and work closely with industry — ensuring students graduate with practical skills, career clarity and strong employability, alongside a recognised qualification earned separately.",
  },
];

/* ---------------- shared bits ---------------- */

const DEEP = "bg-[#08080a]";
const ANCHOR = "scroll-mt-[7.5rem]";

/** Lime pill label — the live page's yellow card badge. */
function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="self-start rounded-full bg-lime px-3.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink">
      {children}
    </span>
  );
}

/** Arrow bullet list — the live page's list-arrow markers. */
function Points({ items, dark }: { items: string[]; dark: boolean }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((p) => (
        <li key={p} className="flex gap-3 text-[0.92rem] leading-relaxed">
          <ArrowRight
            className={`mt-[0.3rem] shrink-0 text-[0.72rem] ${
              dark ? "text-lime" : "text-crimson"
            }`}
          />
          <span className={dark ? "text-white/65" : "text-ink-2"}>{p}</span>
        </li>
      ))}
    </ul>
  );
}

/* Premium surfaces. Instead of a hard offset shadow, cards read as pressed
   panels: a hairline frame, genuine soft elevation, and a crimson gradient
   rule along the top edge that lengthens on hover. */
const CARD_LIGHT =
  "group relative overflow-hidden rounded-[4px] border border-line bg-paper " +
  "shadow-[0_1px_2px_rgba(11,12,16,0.03),0_18px_44px_-24px_rgba(11,12,16,0.22)] " +
  "transition-[transform,box-shadow,border-color] duration-500 ease-premium " +
  "hover:-translate-y-1 hover:border-ink/15 " +
  "hover:shadow-[0_1px_2px_rgba(11,12,16,0.04),0_30px_60px_-24px_rgba(11,12,16,0.3)]";

const CARD_DARK =
  "group relative overflow-hidden rounded-[4px] border border-white/10 bg-[#0e0e11] " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_56px_-28px_rgba(0,0,0,0.9)] " +
  "transition-[transform,box-shadow,border-color] duration-500 ease-premium " +
  "hover:-translate-y-1 hover:border-white/25";

/** Hairline brand rule along a card's top edge — grows from a short accent to
    the full width on hover. The premium stand-in for the offset shadow. */
function AccentRule({ lime = false }: { lime?: boolean }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute left-0 top-0 z-10 h-px w-24 bg-gradient-to-r to-transparent transition-[width] duration-700 ease-premium group-hover:w-full ${
        lime ? "from-lime" : "from-crimson"
      }`}
    />
  );
}

/* Intrinsic sizes of the creatives pulled from the live server, so the browser
   reserves the correct box before the full-resolution file lands. */
const DIM: Record<string, [number, number]> = {
  "/images/ug/program-overview.jpg": [584, 594],
  "/images/ug/highlight-faculty.jpg": [1280, 720],
  "/images/ug/highlight-curriculum.jpg": [406, 270],
  "/images/ug/highlight-brands.svg": [637, 327],
  "/images/ug/mentor-sharad.jpg": [406, 270],
  "/images/ug/mentor-neeraj.jpg": [406, 270],
  "/images/ug/mentor-naveen.jpg": [406, 270],
  "/images/ug/learn-influencer.jpg": [1920, 2560],
  "/images/ug/learn-dropshipping.jpg": [2560, 1707],
  "/images/ug/learn-trek.jpg": [1280, 720],
  "/images/ug/learn-ai.jpg": [1920, 2560],
  "/images/ug/learn-global.jpg": [1920, 2560],
  "/images/ug/career-jobs.jpg": [2560, 1920],
  "/images/ug/career-entrepreneurship.jpg": [2560, 1707],
  "/images/ug/career-higher-studies.jpg": [1920, 2560],
  "/images/ug/admissions.jpg": [2560, 1303],
  "/images/ug/day-treasure-hunt.jpg": [1280, 720],
  "/images/ug/day-houses.jpg": [1280, 720],
  "/images/ug/day-sports.jpg": [1280, 720],
  "/images/ug/founding-1.jpg": [241, 430],
  "/images/ug/founding-2.jpg": [1080, 1920],
  "/images/ug/founding-3.jpg": [1080, 1920],
};

/** The original file at its own aspect ratio, served straight from /public with
    no /_next/image resizing — so the whole creative is visible at full
    resolution, with neither a crop nor letterbox bars. */
function Plate({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [w, h] = DIM[src] ?? [1600, 900];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={w}
      height={h}
      loading="lazy"
      decoding="async"
      className={`block h-auto w-full ${className}`}
    />
  );
}

/** The live page's stacked highlight cards — media on one side, content on the
    other, in the premium panel treatment. */
function HighlightCard({
  chip,
  title,
  desc,
  points,
  ctaLabel,
  ctaHref,
  img,
  alt,
  dark,
  mediaLeft = false,
  mediaContain = false,
}: {
  chip: string;
  title: ReactNode;
  desc: ReactNode;
  points: string[];
  ctaLabel: string;
  ctaHref: string;
  img: string;
  alt: string;
  dark: boolean;
  mediaLeft?: boolean;
  mediaContain?: boolean;
}) {
  return (
    <Reveal className={`grid md:grid-cols-2 ${dark ? CARD_DARK : CARD_LIGHT}`}>
      <AccentRule lime={dark} />
      <div
        className={`flex items-center justify-center ${
          mediaContain
            ? "bg-[#0e0e11] p-8 sm:p-12"
            : dark
            ? "bg-[#08080a]"
            : "bg-paper-2"
        } ${mediaLeft ? "md:order-1" : "md:order-2"}`}
      >
        <Plate src={img} alt={alt} />
      </div>
      <div
        className={`flex flex-col justify-center p-6 sm:p-9 lg:p-11 ${
          mediaLeft ? "md:order-2" : "md:order-1"
        }`}
      >
        <Chip>{chip}</Chip>
        <h2
          className={`display balance mt-5 text-[clamp(1.5rem,3vw,2.3rem)] ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mt-4 text-[0.95rem] leading-relaxed ${
            dark ? "text-white/60" : "text-ink-2"
          }`}
        >
          {desc}
        </p>
        <Points items={points} dark={dark} />
        <a
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
          className={`btn mt-7 self-start ${
            dark
              ? "border-white/25 bg-transparent text-white hover:bg-white/10"
              : "btn-crimson"
          }`}
        >
          {ctaLabel}
          <ArrowUpRight className="arrow" />
        </a>
      </div>
    </Reveal>
  );
}

export default function UGPage() {
  return (
    <main className="relative font-poppins ug-poppins ug-serif">
      <SiteNav applyHref="#apply" theme="dark" />

      {/* ============ HERO — full-bleed media, centred content ============ */}
      <section
        id="top"
        className={`relative isolate overflow-hidden ${DEEP} text-white`}
      >
        <Image
          src="/images/ug/hero.jpg"
          alt="Inside the NEXIS campus in Siliguri"
          fill
          sizes="100vw"
          priority
          className="-z-10 object-cover opacity-80"
        />
        {/* Vertical scrim: light enough in the middle to read the photograph,
            solid at the bottom so the section below joins seamlessly. */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#08080a]/80 via-[#08080a]/45 to-[#08080a]" />
        {/* Horizontal scrim keeps the centred headline legible over busy areas. */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(8,8,10,0.72)_0%,rgba(8,8,10,0.35)_55%,transparent_100%)]" />
        <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-96 w-96 rounded-full bg-crimson/25 blur-[130px]" />
        <div className="pointer-events-none absolute -right-24 top-1/3 -z-10 h-72 w-72 rounded-full bg-lime/10 blur-[130px]" />

        <div className="shell relative flex flex-col items-center pb-12 pt-12 text-center sm:pt-16 lg:pb-16 lg:pt-24">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
              <span className="h-px w-8 bg-lime" />
              <span className="text-lime">
                Undergraduate Program · {BATCH.city} Campus
              </span>
              <span className="h-px w-8 bg-lime" />
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display balance mt-6 max-w-4xl text-[clamp(2.1rem,5.6vw,4.4rem)] text-white">
              Undergraduate Program in{" "}
              <span className="serif-em text-crimson">Business Management</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-white/70">
              A <span className="text-white">three-year programme</span> where you
              practise what you learn — every single day.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={CONTACT.applyHref} className="btn btn-crimson">
                Apply now
                <ArrowRight className="arrow" />
              </a>
              <a
                href={REPORTS.yearbook}
                target="_blank"
                rel="noreferrer"
                className="btn border-white/25 bg-transparent text-white hover:bg-white/10"
              >
                See 2025 Yearbook
                <ArrowUpRight className="arrow" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-6 max-w-2xl text-[0.66rem] leading-relaxed text-white/45 sm:mt-8 sm:text-[0.85rem] sm:text-white/50">
              Industry-integrated programme with a focus on Digital Sales &amp;
              Marketing, Business Analytics and Entrepreneurship, along with the
              industry-readiness skills that set you apart.
            </p>
          </Reveal>

          {/* Backed by — inside the hero, as on the live page */}
          <Reveal
            delay={340}
            className="mt-12 w-full border-t border-white/10 pt-9"
          >
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/45">
              Our programs are backed by
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {ACCREDITATION.map((a) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={a.name}
                  src={a.src}
                  alt={a.name}
                  className="h-9 w-auto max-w-[160px] object-contain opacity-90 sm:h-11"
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PROGRAM AT A GLANCE ============ */}
      <section className={`bg-ink ${ANCHOR} text-white`} id="highlights">
        <div className="shell py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-9 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <Reveal>
                <VideoPlate
                  poster="/images/ug/program-overview.jpg"
                  alt="Three years at NEXIS, explained in three minutes"
                  videoId="Wl8ifZsBSqI"
                  width={584}
                  height={594}
                  label="NEXIS in 3 minutes"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal>
                <h2 className="display balance text-[clamp(1.7rem,4vw,2.8rem)] text-white">
                  Undergraduate Program in{" "}
                  <span className="serif-em text-crimson">Business Management</span>
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-lime">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  Admissions open · {BATCH.cohort}
                </p>
              </Reveal>

              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-7 sm:gap-x-10">
                {FACTS.map((f, i) => (
                  <Reveal key={f.label} delay={i * 70}>
                    <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-lime">
                      {f.label}
                    </p>
                    <p className="mt-2 font-serif text-xl leading-tight">
                      {f.value}
                    </p>
                    <p className="mt-0.5 text-[0.8rem] leading-snug text-white/45">
                      {f.sub}
                    </p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={140} className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={CONTACT.brochureHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-crimson"
                >
                  Download brochure
                  <ArrowUpRight className="arrow" />
                </a>
                <a
                  href={CONTACT.applyHref}
                  className="btn border-white/25 bg-transparent text-white hover:bg-white/10"
                >
                  Enquire now
                  <ArrowRight className="arrow" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ UPCOMING EVENTS ============ */}
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="display balance text-[clamp(1.9rem,4.6vw,3.2rem)]">
                Upcoming events at{" "}
                <span className="serif-em text-crimson">NEXIS</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink-2">
                Catch a glimpse of how life at NEXIS is — in person, on campus.
              </p>
            </Reveal>
          </div>

        </div>

        {/* Dense horizontal carousel — manual scroll (no auto-advance), with
            both ends fading off. Scales to any number of events. */}
        <div className="relative mt-4 pb-10 sm:mt-6 sm:pb-14">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-4 [scrollbar-width:none] lg:px-[max(1.5rem,calc((100vw-1200px)/2))] [&::-webkit-scrollbar]:hidden">
            {UG_EVENTS.map((e, i) => (
              <Reveal
                key={e.t}
                delay={Math.min(i, 4) * 70}
                className={`w-[264px] shrink-0 snap-start sm:w-[300px] ${CARD_LIGHT} flex flex-col`}
              >
                <AccentRule />
                <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={e.img}
                    alt={e.t}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  />
                  {e.date && (
                    <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-paper backdrop-blur">
                      {e.date}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  {e.tag && (
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-crimson">
                      {e.tag}
                    </span>
                  )}
                  <h3 className="mt-2 font-serif text-[1.02rem] leading-tight">
                    {e.t}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.85rem] leading-relaxed text-ink-2">
                    {e.d}
                  </p>
                  <a
                    href={e.href}
                    className="mt-4 inline-flex items-center gap-2 text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-crimson"
                  >
                    {e.cta}
                    <ArrowRight className="arrow" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-paper to-transparent sm:w-20"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-paper to-transparent sm:w-20"
          />
        </div>
      </section>

      {/* ============ SECTION RAIL ============ */}
      <nav
        aria-label="Page sections"
        className="sticky top-[66px] z-30 border-y border-white/10 bg-[#0a0a0c]/95 backdrop-blur-md"
      >
        <div className="shell flex gap-6 overflow-x-auto py-3.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {UG_SECTIONS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="whitespace-nowrap text-[0.78rem] font-medium text-white/55 transition-colors hover:text-lime"
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ============ HIGHLIGHTS — faculty / curriculum / internships ============ */}
      <section className={`${DEEP} ${ANCHOR} text-white`} id="curriculum">
        <div className="shell space-y-10 py-12 sm:space-y-14 sm:py-16 lg:py-24">
          <HighlightCard
            dark
            chip="Faculty"
            img="/images/ug/highlight-faculty.jpg"
            alt="A founder masterclass on campus"
            title={
              <>
                Learn directly from industry leaders &amp;{" "}
                <span className="serif-em text-crimson">entrepreneurs</span>
              </>
            }
            desc={
              <>
                Get mentored by{" "}
                <span className="text-white">50+ industry leaders</span> from
                companies like boAt, Snitch, Lenskart, State Plate and Zomato.
              </>
            }
            points={MENTOR_POINTS}
            ctaLabel="Download masterclass report"
            ctaHref={REPORTS.masterclass}
          />

          <HighlightCard
            mediaLeft
            dark={false}
            chip="Curriculum"
            img="/images/ug/highlight-curriculum.jpg"
            alt="Students working on a live client project"
            title={
              <>
                A new-age curriculum for three years of{" "}
                <span className="serif-em text-crimson">transformation</span>
              </>
            }
            desc="At NEXIS, our students have already"
            points={ALREADY}
            ctaLabel="Download OUTCLASS report"
            ctaHref={REPORTS.outclass}
          />

          {/* The three years, at a glance */}
          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
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

          <HighlightCard
            dark
            chip="Internships"
            img="/images/ug/highlight-brands.svg"
            alt="Brands NEXIS students have interned with"
            mediaContain
            title={
              <>
                Intern with{" "}
                <span className="serif-em text-crimson">
                  top brands from your first year
                </span>{" "}
                itself
              </>
            }
            desc="Work with leading firms and gain real-world exposure. At NEXIS, students:"
            points={INTERN_POINTS}
            ctaLabel="Download internship report 2026"
            ctaHref={REPORTS.internship}
          />
        </div>
      </section>

      {/* ============ STUDENT LIFE — centred header + mosaic ============ */}
      <section className={`bg-paper ${ANCHOR} text-ink`} id="student-life">
        <div className="py-12 sm:py-16 lg:py-24">
          <div className="shell mx-auto max-w-3xl text-center">
            <Reveal className="flex justify-center">
              <Chip>Student Life &amp; Campus</Chip>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.7rem,4.2vw,3rem)]">
                Student life{" "}
                <span className="serif-em text-crimson">
                  is more than just lectures
                </span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5 text-[1rem] leading-relaxed text-ink-2">
                Undergo a 360° campus experience at a next-generation campus.
              </p>
            </Reveal>
          </div>

          {/* Single-row carousel — fixed height, natural widths, so every
              frame shows in full. Fades out at both ends. */}
          <div className="marquee-mask mt-8 overflow-hidden sm:mt-10">
            <div className="flex w-max gap-3 animate-marquee hover:[animation-play-state:paused]">
              {[...LIFE_IMAGES, ...CAMPUS_IMAGES, ...LIFE_IMAGES, ...CAMPUS_IMAGES].map(
                (img, i) => (
                  <figure
                    key={`${img.src}-${i}`}
                    className="relative h-[136px] shrink-0 overflow-hidden rounded-[3px] ring-1 ring-ink/10 sm:h-[176px] lg:h-[196px]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.cap}
                      loading="lazy"
                      decoding="async"
                      className="block h-full w-auto max-w-none"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-black/85 to-transparent p-3 pt-10 text-[0.74rem] font-medium text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                      {img.cap}
                    </figcaption>
                  </figure>
                )
              )}
            </div>
          </div>

          <div className="shell mt-11 grid gap-x-10 gap-y-4 sm:grid-cols-3">
            {LIFE_POINTS.map((p, i) => (
              <Reveal
                key={p}
                delay={i * 80}
                className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-2"
              >
                <ArrowRight className="mt-[0.3rem] shrink-0 text-[0.72rem] text-crimson" />
                <span>{p}</span>
              </Reveal>
            ))}
          </div>

          <div className="shell mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
            {CAMPUS_STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 70}>
                <p className="display text-[clamp(1.6rem,3.6vw,2.6rem)] text-ink">
                  {s.k}
                </p>
                <p className="mt-1.5 text-[0.82rem] leading-snug text-muted">
                  {s.l}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FIRST-YEAR STUDENTS (dark) ============ */}
      <section className={`${DEEP} text-white py-12 sm:py-16 lg:py-20`}>
        <div className="shell mb-9 max-w-2xl">
          <Reveal>
            <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
              <span className="h-px w-8 bg-lime" />
              <span className="text-lime">Our students, at work</span>
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display balance mt-5 text-[clamp(1.9rem,4.6vw,3.4rem)] text-white">
              These are our{" "}
              <span className="serif-em text-crimson">students</span>.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-[1rem] leading-relaxed text-white/60">
              Interning, earning and achieving national recognitions.
            </p>
          </Reveal>
        </div>
        <StudentCarousel />
        <Reveal className="shell mt-10 text-center">
          <a
            href={REPORTS.internship}
            target="_blank"
            rel="noreferrer"
            className="btn border-white/25 bg-transparent text-white hover:bg-white/10"
          >
            Download summer internship report
            <ArrowUpRight className="arrow" />
          </a>
        </Reveal>
      </section>

      {/* ============ 30+ INDUSTRY LEADERS ON CAMPUS (light) ============ */}
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="display balance text-[clamp(1.9rem,4.6vw,3.2rem)]">
                <span className="serif-em text-crimson">30+ industry leaders</span>{" "}
                already on campus
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink-2">
                Learn how businesses are built, scaled and sustained —{" "}
                <span className="font-medium text-ink">
                  directly from those who&rsquo;ve done it.
                </span>
              </p>
            </Reveal>
          </div>

          <div className="marquee-mask mt-8 overflow-hidden sm:mt-12">
            <div className="flex w-max items-stretch gap-5 animate-marquee hover:[animation-play-state:paused]">
              {[...FACULTY, ...FACULTY].map((f, i) => (
                <article
                  key={`${f.name}-${i}`}
                  className={`flex w-[288px] shrink-0 flex-col sm:w-[320px] ${CARD_LIGHT}`}
                >
                  <AccentRule />
                  <div className="overflow-hidden bg-ink">
                    <Plate src={f.img} alt={f.name} />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg leading-tight">{f.name}</h3>
                    <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-crimson">
                      {f.role}
                    </p>
                    <p className="mt-3 text-[0.86rem] leading-relaxed text-ink-2">
                      {f.d}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <Reveal className="mt-9 text-center">
            <a
              href={CONTACT.brochureHref}
              target="_blank"
              rel="noreferrer"
              className="btn btn-crimson"
            >
              Explore the faculty line-up
              <ArrowUpRight className="arrow" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ LEARN BY DOING (crimson) — asymmetric rows ============ */}
      <section className="bg-crimson text-white">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="display balance text-[clamp(1.8rem,4.4vw,3.2rem)] text-white">
                Learn by doing —{" "}
                <span className="serif-em">not just by sitting in lectures</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-8 grid items-stretch gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {LEARN.map((e, i) => (
              <Reveal
                key={e.title}
                delay={(i % 3) * 80}
                className={`flex flex-col ${CARD_LIGHT}`}
              >
                <AccentRule />
                {/* Uniform frame so every card in the row matches. */}
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={e.img}
                    alt={e.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <Chip>{e.badge}</Chip>
                  <h3 className="mt-3 font-serif text-[1.02rem] leading-tight text-ink">
                    {e.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.84rem] leading-relaxed text-ink-2">
                    {e.d}
                  </p>
                  {(e.people || e.logos) && (
                    <div className="mt-4 border-t border-line pt-3">
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-muted">
                        {e.metaLabel}
                      </p>
                      {e.people && (
                        <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-2">
                          {e.people.map((m) => (
                            <span
                              key={m.name}
                              className="flex items-center gap-2"
                            >
                              <span className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full bg-paper-2">
                                <Image
                                  src={m.src}
                                  alt={m.name}
                                  fill
                                  loading="lazy"
                                  sizes="28px"
                                  className="object-cover"
                                />
                              </span>
                              <span className="text-[0.72rem] font-medium text-ink">
                                {m.name}
                              </span>
                            </span>
                          ))}
                        </div>
                      )}
                      {e.logos && (
                        <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2">
                          {e.logos.map((l) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              key={l.name}
                              src={l.src}
                              alt={l.name}
                              title={l.name}
                              className="h-7 w-auto max-w-[68px] object-contain"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <a
              href={CONTACT.brochureHref}
              target="_blank"
              rel="noreferrer"
              className="btn btn-light"
            >
              Explore the 3-year detailed curriculum
              <ArrowUpRight className="arrow" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ CAREER PROSPECTS (light) ============ */}
      <section className={`bg-paper ${ANCHOR} text-ink`} id="careers">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="display balance text-[clamp(1.8rem,4.4vw,3.2rem)]">
                Career Prospects —{" "}
                <span className="serif-em text-crimson">
                  our exclusive network of 75+ companies
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="marquee-mask mt-10 overflow-hidden">
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

          <div className="mt-9 grid grid-cols-2 gap-6 border-y border-line py-8 lg:grid-cols-4">
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

          {/* On narrow screens these are a flex column, not a grid — a sticky
              child needs a tall containing block to travel in, and a one-column
              grid gives each card a row exactly its own height (no travel).
              From md they sit side by side and sticky is switched off. */}
          <div className="mt-9 flex flex-col gap-5 md:grid md:grid-cols-3 md:items-start">
            {PATHWAYS.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                style={{ top: `calc(6rem + ${i * 0.9}rem)` }}
                className={`sticky flex flex-col md:static ${CARD_DARK}`}
              >
                <AccentRule lime />
                <div className="relative aspect-[2/1] overflow-hidden bg-black/40 sm:aspect-[16/9]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-lime">
                    {p.meta}
                  </span>
                  <h3 className="mt-2 font-serif text-[1.02rem] leading-tight text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[0.84rem] leading-relaxed text-white/60">
                    {p.lede}
                  </p>
                  {p.points && (
                    <ol className="mt-3 space-y-1.5">
                      {p.points.map((pt, n) => (
                        <li
                          key={pt}
                          className="flex gap-3 text-[0.82rem] leading-relaxed text-white/70"
                        >
                          <span className="shrink-0 text-[0.74rem] font-semibold tabular-nums text-lime">
                            {String(n + 1).padStart(2, "0")}
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                  {p.foot && (
                    <p className="mt-3 border-t border-white/10 pt-3 text-[0.82rem] leading-relaxed text-white/50">
                      {p.foot}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-9 text-center">
            <a href="/ug/career-prospects" className="btn">
              Where does NEXIS take you?
              <ArrowRight className="arrow" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ ADMISSIONS (dark) — join panel + process ============ */}
      <section className={`bg-ink ${ANCHOR} text-white`} id="admissions">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <Reveal className="grid overflow-hidden rounded-[4px] bg-paper text-ink md:grid-cols-2">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <h2 className="display balance text-[clamp(1.7rem,4vw,2.8rem)]">
                Want to know how you can{" "}
                <span className="serif-em text-crimson">join NEXIS</span>?
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-ink-2">
                Discover our admission process, eligibility and key dates — and take
                the first step toward becoming a NEXIS student.
              </p>
              <a
                href={CONTACT.applyHref}
                className="btn btn-crimson mt-7 self-start"
              >
                Click here
                <ArrowRight className="arrow" />
              </a>
            </div>
            <div className="flex items-center bg-paper-2">
              <Plate
                src="/images/ug/admissions.jpg"
                alt="A NEXIS admissions counselling session"
              />
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-3">
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

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Reveal className="rounded-[3px] border border-white/10 bg-[#0e0e11] p-6 sm:p-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-lime">
                Eligibility
              </p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-white/70">
                Open to students appearing for or having passed Class XII from any
                recognised board — with or without Mathematics. We evaluate academics
                alongside extracurriculars, leadership and experience.
              </p>
            </Reveal>
            <Reveal
              delay={80}
              className="rounded-[3px] border border-white/10 bg-[#0e0e11] p-6 sm:p-8"
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-lime">
                Tuition fee
              </p>
              <ul className="mt-4 space-y-2.5 text-[0.95rem] leading-relaxed text-white/70">
                <li className="flex justify-between gap-4 border-b border-white/10 pb-2.5">
                  <span>First year</span>
                  <span className="font-serif text-white">₹2,35,000</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Second &amp; third year</span>
                  <span className="font-serif text-white">₹1,95,000 / yr</span>
                </li>
              </ul>
            </Reveal>
            <Reveal
              delay={160}
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

      {/* ============ A DAY IN THE LIFE (light) ============ */}
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="display balance text-[clamp(1.9rem,4.6vw,3.2rem)]">
              Experience a day in a{" "}
              <span className="serif-em text-crimson">
                NEXIS student&rsquo;s life
              </span>
            </h2>
          </Reveal>

          <div className="mt-9 grid gap-5 sm:mt-12 md:grid-cols-3">
            {DAY.map((d, i) => (
              <Reveal
                key={d.t}
                delay={i * 80}
                className={`flex flex-col ${CARD_LIGHT}`}
              >
                <AccentRule />
                <div className="overflow-hidden bg-ink">
                  <Plate src={d.img} alt={d.t} />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg leading-tight">{d.t}</h3>
                  <p className="mt-2.5 text-[0.88rem] leading-relaxed text-ink-2">
                    {d.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-9 text-center">
            <a href="/ug/life-at-nexis" className="btn">
              Get a glimpse of student life at NEXIS
              <ArrowRight className="arrow" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ UG BATCHES (dark) ============ */}
      <section className={`${DEEP} ${ANCHOR} text-white`} id="batches">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <Reveal>
                <h2 className="display balance text-[clamp(1.9rem,4.6vw,3.2rem)] text-white">
                  UG <span className="serif-em text-crimson">Batches</span>
                </h2>
              </Reveal>
              <Reveal delay={60}>
                <p className="mt-2 font-serif text-xl text-white/45">
                  2025&ndash;28 &amp; 2026&ndash;29
                </p>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-5 text-[0.95rem] leading-relaxed text-white/60">
                  Two cohorts are on campus today — the 2025&ndash;28 batch, now in
                  their second year, and the 2026&ndash;29 batch, who joined this
                  July. The {BATCH.cohort} will be the third.
                </p>
              </Reveal>
              <Reveal delay={140} className="mt-7">
                <a
                  href="/voice-of-nexis"
                  className="btn border-white/25 bg-transparent text-white hover:bg-white/10"
                >
                  See more
                  <ArrowRight className="arrow" />
                </a>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <div className="flex snap-x snap-mandatory items-start gap-3 overflow-x-auto pb-3 [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
                {BATCH_FILMS.map((v, i) => (
                  <Reveal
                    key={v.src}
                    delay={i * 80}
                    className="w-[74%] shrink-0 snap-start overflow-hidden rounded-[3px] border border-white/10 bg-[#0e0e11] sm:w-auto"
                  >
                    <video
                      controls
                      playsInline
                      preload="none"
                      poster={v.poster}
                      aria-label={v.label}
                      className="block h-auto w-full"
                    >
                      <source src={v.src} type="video/mp4" />
                    </video>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ (dark) ============ */}
      <section className={`bg-ink ${ANCHOR} text-white`} id="faqs">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
                  <span className="h-px w-8 bg-lime" />
                  <span className="text-lime">Questions</span>
                </p>
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
                  target="_blank"
                  rel="noreferrer"
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
