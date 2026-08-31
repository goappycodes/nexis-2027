import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import {
  DEEP,
  ANCHOR,
  CARD_LIGHT,
  CARD_DARK,
  AccentRule,
  Chip,
  Kicker,
  Points,
  SectionRail,
  Reveal,
} from "@/components/editorial";
import JsonLd from "@/components/JsonLd";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "NEXIS School of AI — India's 1st School of AI for Class 8–12 Students | Siliguri",
  description:
    "A hands-on, weekend AI program in Siliguri for school students in Classes 8–12. Build AI apps, chatbots, automations and a capstone AI startup — mentored by faculty from IIT, IIM and ISB. AI Foundations & AI Mastery tracks.",
  alternates: { canonical: "/school-of-ai" },
  openGraph: {
    title: "NEXIS School of AI — for Class 8–12 students",
    description:
      "Build real AI projects, earn Google + NEXIS certifications, and gain a 4–6 year head start. Weekend classes in Siliguri, mentored by IIT/IIM/ISB faculty.",
    type: "website",
  },
};

const APPLY = "https://apply.nexisschool.com/nexis-school-of-ai-official-application/";
const ENQUIRE = "/ug/admission-enquiry";
const AI_EMAIL = "schoolofai@nexisschool.com";
const AI_PHONE = "+91 97331 52000";

const SECTIONS = [
  { label: "Programs", href: "#programs" },
  { label: "What you learn", href: "#learn" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Faculty", href: "#faculty" },
  { label: "Why NEXIS", href: "#why" },
  { label: "You receive", href: "#receive" },
  { label: "FAQs", href: "#faqs" },
];

const FACTS = [
  { label: "Format", value: "3 months", sub: "Hands-on, project-based" },
  { label: "Eligibility", value: "Classes 8–12", sub: "Paced for school students" },
  { label: "Schedule", value: "Weekends", sub: "Sat 4:30–6 PM · Sun 11:30 AM–1 PM" },
  { label: "Cohort", value: "30 seats", sub: "New batches forming" },
];

const PROGRAMS = [
  {
    tag: "Classes 8 & 10",
    name: "AI Foundations",
    fee: "₹24,999 + GST",
    d: "The basics of AI, prompt engineering, and building study partners, chatbots and websites — from zero, step by step.",
  },
  {
    tag: "Classes 11 & 12",
    name: "AI Mastery",
    fee: "₹34,999 + GST",
    d: "Advanced: how AI tools work internally, ATS resumes, personal branding, finance with AI, and building AI agents like JARVIS.",
    featured: true,
  },
];

const LEARN = [
  {
    t: "Do 10 hours of work in 1 hour",
    d: "Build apps and websites with no-code tools and master prompt engineering for maximum productivity.",
    img: "/wp-media/2025/08/nexis-ai-tools.jpg",
  },
  {
    t: "Build AI apps & websites",
    d: "Create AI study partners and personal tutors. Generate AI images, videos and study materials.",
    img: "/wp-media/2025/12/ai-foundation-week7.jpg",
  },
  {
    t: "Master chatbots & automations",
    d: "Build chatbots and complete two full AI apps as capstone projects with real-world uses.",
    img: "/wp-media/2025/12/ai-foundation-week2.jpg",
  },
  {
    t: "Get certified & future-ready",
    d: "Earn a Google & NEXIS Career Certificate and a 4–6 year head start in problem-solving and career.",
    img: "/wp-media/2025/12/ai-mastery-week3.jpg",
  },
];

type Month = {
  n: string;
  title: string;
  weeks: { w: number; t: string; d: string }[];
};

const MONTHS: Month[] = [
  {
    n: "Month 1",
    title: "Advanced understanding of AI tools and their applications",
    weeks: [
      { w: 1, t: "How AI Tools Work", d: "The technical foundations and architecture behind AI tools." },
      { w: 2, t: "ATS-Optimised Resume & Presentation", d: "Create ATS-friendly resumes and professional presentations with AI." },
      { w: 3, t: "Gemini for Images, Videos & Music", d: "Use Gemini AI to create multimedia — images, videos and music." },
      { w: 4, t: "AI for Personal Branding", d: "Build your online presence and personal brand using AI tools." },
    ],
  },
  {
    n: "Month 2",
    title: "Building your own AI apps & chatbots",
    weeks: [
      { w: 5, t: "Create Your Own Chatbot", d: "Build advanced chatbots with custom features and integrations." },
      { w: 6, t: "Build a Client-Ready Website", d: "Create professional, client-ready websites with real-world uses." },
      { w: 7, t: "Manage Finances with AI", d: "Use AI for budgeting, expense tracking and financial planning." },
      { w: 8, t: "Build a No-Code Game", d: "Create an interactive game using no-code tools and AI assistance." },
    ],
  },
  {
    n: "Month 3",
    title: "Building your own AI startup as your capstone",
    weeks: [
      { w: 9, t: "Build a JARVIS-like AI Intern", d: "Develop a personal AI assistant like JARVIS to automate your tasks." },
      { w: 10, t: "Automations Setup", d: "Set up advanced automations to save time and boost productivity." },
      { w: 11, t: "Capstone Startup — Part 1", d: "Design and plan your own AI-powered startup." },
      { w: 12, t: "Capstone Startup — Part 2", d: "Build, launch and run your AI startup with mentorship support." },
    ],
  },
];

const FACULTY = [
  { name: "Ritesh Agarwal", cred: "IIT Bombay · IIM Bangalore", role: "Industry Expert & Faculty", tag: "Ex-ITC & BCG", img: "/wp-media/2025/01/3-min.png" },
  { name: "Aryan Lohia", cred: "Software Engineer · Manipal Group", role: "COO & Faculty", tag: "Ex-Serverlane", img: "/wp-media/2025/01/1-min.png" },
  { name: "Aman Choudhury", cred: "ISB Hyderabad · SRCC Delhi", role: "Industry Expert & Faculty", tag: "Ex-ZS & EY", img: "/wp-media/2025/01/2-min.png" },
];

const WHY = [
  { t: "India's 1st school-focused AI curriculum", d: "Hands-on, real-world learning — not theory. Students build AI agents, apps, websites, automations and startups.", img: "/wp-media/2025/08/nexis-ai-tools.jpg" },
  { t: "Expert faculty from IIT, IIM, ISB, Manipal", d: "Mentors from India's best institutions guiding your AI journey.", img: "/wp-media/2025/08/faculty.jpg" },
  { t: "Capstone-based project learning", d: "Build 15+ real AI projects as your portfolio — and your own AI startup as the capstone.", img: "/wp-media/2025/08/networking.jpg" },
  { t: "Future-ready skills", d: "Research, branding, finance and productivity with AI — getting ahead of the competition.", img: "/wp-media/2025/12/ready-skills.jpg" },
];

const RECEIVE = [
  { t: "Professional Career Certificate", points: ["NEXIS School of AI Career Certificate", "Google AI Certification (AI Mastery)"] },
  { t: "LinkedIn badges & NEXIS goodies", points: ["Professional LinkedIn badges", "Exclusive NEXIS branded merchandise"] },
  { t: "Portfolio of 15+ real AI projects", points: ["A portfolio of real AI applications", "Proof of real-world problem-solving"] },
  { t: "Expert mentorship", points: ["Mentorship from IIT, IIM, ISB faculty", "Guidance from AI industry professionals"] },
];

const FUTURE_STATS = [
  { k: "70%", l: "of today's jobs won't exist", src: "by 2030" },
  { k: "80%", l: "of new jobs will require AI skills", src: "The Hindu" },
  { k: "90%", l: "of Indian graduates don't know AI", src: "The Economic Times" },
  { k: "75%", l: "of high-paid jobs now require advanced AI proficiency", src: "" },
];

const AI_FAQS: FaqItem[] = [
  {
    q: "Who can join NEXIS School of AI?",
    a: [
      { p: "NEXIS School of AI is designed for school students in Classes 8 to 12. We offer two programs:" },
      { ul: ["AI Foundations — for Classes 8 & 10", "AI Mastery — for Classes 11 & 12, or students who have completed AI Foundations"] },
    ],
  },
  {
    q: "Does my child need any prior programming or AI knowledge?",
    a: "No prior programming or AI knowledge is required. The curriculum is designed for complete beginners and takes students from the basics to building real AI applications, step by step.",
  },
  {
    q: "What is the duration and format?",
    a: "Both programs run for 3 months (12 weeks). Classes are held after school hours and on weekends so they don't interfere with regular studies. The focus batch is limited to 30 students for personalised attention.",
  },
  {
    q: "Where are the classes held?",
    a: "At the NEXIS Campus — 5th Floor, Tradium Building, Sevoke Road, Siliguri — in a modern, technology-enabled learning environment.",
  },
  {
    q: "Why is AI the most important skill for my child's future?",
    a: "By 2030, an estimated 70% of today's jobs won't exist, and 80% of new jobs will require AI skills — yet 90% of Indian graduates don't know AI. Students who learn AI now gain a 4–6 year advantage over their peers in admissions, internships and career opportunities.",
  },
  {
    q: "How is AI already changing education and careers?",
    a: [
      { p: "AI isn't the future — it's happening now:" },
      { ul: [
        "Top institutions (IITs, NITs, IIMs) are prioritising students with AI knowledge.",
        "Students using AI complete 10 hours of work in about 1 hour.",
        "AI skills are becoming essential across every field — medicine, design, business, research and academics.",
        "Roles requiring AI skills pay noticeably more than traditional ones.",
      ] },
    ],
  },
  {
    q: "What kind of projects will students build?",
    a: [
      { p: "Real, functional projects, including:" },
      { ul: ["An AI study partner and personal tutor", "Chatbots with custom features", "Complete websites built with AI tools", "Resume generators and AI agents for automation", "Two complete capstone AI applications"] },
    ],
  },
  {
    q: "What is the difference between AI Foundations and AI Mastery?",
    a: "AI Foundations (Classes 8 & 10) covers the basics of AI, prompt engineering, and building study partners, chatbots and websites. AI Mastery (Classes 11 & 12) is more advanced — how AI tools work internally, ATS resumes, personal branding, finance management with AI, and building AI agents like JARVIS.",
  },
  {
    q: "What certifications will students receive?",
    a: [
      { p: "Students receive:" },
      { ul: ["NEXIS School of AI Career Certificate (all students)", "Google AI Certification (AI Mastery students)", "LinkedIn badges to showcase on their profiles", "A portfolio of completed AI projects"] },
    ],
  },
  {
    q: "What are the program fees, and how do I apply?",
    a: [
      { p: "AI Foundations is ₹24,999 + GST and AI Mastery is ₹34,999 + GST. Fees include course resources, certifications, tool access and mentorship. Applicants pay 60% of the fee when applying and the remaining 40% when the course starts." },
      { p: "To apply: fill out the application form, pay the application fee to book a seat, and secure a place in the focus batch of 30 (first come, first served)." },
    ],
  },
  {
    q: "How can I get more information?",
    a: [
      { p: "You can reach the School of AI team directly:" },
      { ul: [`Email: ${AI_EMAIL}`, `Phone: ${AI_PHONE}`, "Location: 5th Floor, Tradium Building, Sevoke Road, Siliguri", "Instagram: @nexis.school"] },
    ],
  },
];

export default function SchoolOfAIPage() {
  return (
    <main className="relative font-poppins lp-poppins">
      <SiteNav applyHref={ENQUIRE} logoHref="/" branding="2027" />
      <JsonLd
        data={[
          courseSchema({
            name: "NEXIS School of AI — for Class 8–12 Students",
            description:
              "A hands-on, weekend AI program in Siliguri for school students in Classes 8–12. Build AI apps, chatbots, automations and a capstone AI startup — with Google + NEXIS certification.",
            path: "/school-of-ai",
            mode: "Onsite",
            duration: "P3M",
          }),
          faqPageSchema(AI_FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "School of AI", path: "/school-of-ai" },
          ]),
        ]}
      />

      {/* ============ HERO ============ */}
      <section id="top" className={`relative isolate overflow-hidden ${DEEP} text-white`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/wp-media/2025/01/DSC02349-min-scaled.jpg"
          alt="NEXIS School of AI students at work"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#08080a]/85 via-[#08080a]/60 to-[#08080a]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(8,8,10,0.72)_0%,rgba(8,8,10,0.4)_55%,transparent_100%)]" />
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-crimson/25 blur-[130px]" />

        <div className="shell relative flex flex-col items-center pb-12 pt-12 text-center sm:pt-16 lg:pb-16 lg:pt-24">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
              <span className="h-px w-8 bg-crimson" />
              <span className="text-crimson">Now in Siliguri</span>
              <span className="h-px w-8 bg-crimson" />
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display balance mt-6 max-w-4xl text-[clamp(2rem,5.4vw,4.2rem)] text-white">
              India&rsquo;s 1st School of AI for{" "}
              <span className="serif-em text-crimson">school students</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-white/70">
              The future is moving fast. Give your child the head start to move
              faster — building real AI, not just studying it.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={APPLY} target="_blank" rel="noreferrer" className="btn btn-crimson">
                Apply now
                <ArrowUpRight className="arrow" />
              </a>
              <a href={ENQUIRE} className="btn border-white/25 bg-transparent text-white hover:bg-white/10">
                Enquire now
                <ArrowRight className="arrow" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[0.82rem] text-white/55">
              <span>Classes 8–12</span>
              <span className="hidden h-1 w-1 rounded-full bg-crimson sm:inline-block" />
              <span>Weekend classes</span>
              <span className="hidden h-1 w-1 rounded-full bg-crimson sm:inline-block" />
              <span>Google + NEXIS certification</span>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionRail sections={SECTIONS} />

      {/* ============ PROGRAMS ============ */}
      <section className={`bg-paper-2/50 ${ANCHOR} text-ink`} id="programs">
        <div className="shell py-12 sm:py-16 lg:py-20">
          <div className="max-w-2xl">
            <Reveal>
              <Kicker>Programs designed for school students</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.8rem,4.4vw,3.1rem)]">
                Two paths into{" "}
                <span className="serif-em text-crimson">applied AI</span>.
              </h2>
            </Reveal>
          </div>

          <div className="mt-9 grid gap-4 sm:gap-5 md:grid-cols-2">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.name} delay={i * 90} className={`flex flex-col p-6 sm:p-8 ${CARD_LIGHT} ${p.featured ? "ring-1 ring-crimson/40" : ""}`}>
                <AccentRule />
                <div className="flex items-center justify-between gap-3">
                  <Chip>{p.tag}</Chip>
                  {p.featured && (
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-crimson">
                      Most popular
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-serif text-2xl leading-tight">{p.name}</h3>
                <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-ink-2">{p.d}</p>
                <p className="mt-5 border-t border-line pt-4 font-serif text-xl text-ink">
                  {p.fee}
                </p>
                <a href={APPLY} target="_blank" rel="noreferrer" className="btn btn-crimson mt-5 self-start">
                  Apply for {p.name}
                  <ArrowUpRight className="arrow" />
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-8 lg:grid-cols-4">
            {FACTS.map((f, i) => (
              <Reveal key={f.label} delay={i * 70}>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-crimson">{f.label}</p>
                <p className="mt-2 font-serif text-xl leading-tight">{f.value}</p>
                <p className="mt-0.5 text-[0.8rem] leading-snug text-muted">{f.sub}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT STUDENTS LEARN ============ */}
      <section className={`bg-paper ${ANCHOR} text-ink`} id="learn">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="display balance text-[clamp(1.8rem,4.4vw,3.1rem)]">
                What students{" "}
                <span className="serif-em text-crimson">learn</span>
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink-2">
                Real, practical AI — through hands-on projects, expert-led
                sessions and globally recognised certifications.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {LEARN.map((c, i) => (
              <Reveal key={c.t} delay={(i % 4) * 70} className={`flex flex-col ${CARD_LIGHT}`}>
                <AccentRule />
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.t} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-[1.05rem] leading-tight">{c.t}</h3>
                  <p className="mt-2 text-[0.86rem] leading-relaxed text-ink-2">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CURRICULUM — 12-WEEK JOURNEY ============ */}
      <section className={`${DEEP} ${ANCHOR} text-white`} id="curriculum">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="max-w-2xl">
            <Reveal>
              <Kicker dark>Different learning paths</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.8rem,4.4vw,3.1rem)] text-white">
                The 12-week{" "}
                <span className="serif-em text-crimson">AI journey</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-[0.95rem] text-white/55">AI Mastery track shown.</p>
            </Reveal>
          </div>

          <div className="mt-10 space-y-4 sm:space-y-5">
            {MONTHS.map((m, i) => (
              <Reveal key={m.n} delay={Math.min(i, 3) * 70} className={`overflow-hidden ${CARD_DARK}`}>
                <AccentRule />
                <div className="flex flex-col gap-1 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-baseline sm:gap-4 sm:px-8">
                  <span className="font-serif text-xl text-crimson">{m.n}</span>
                  <span className="text-[0.92rem] leading-snug text-white/70">{m.title}</span>
                </div>
                <div className="grid sm:grid-cols-2 sm:divide-x sm:divide-white/10">
                  {m.weeks.map((w) => (
                    <div key={w.w} className="flex gap-4 border-b border-white/10 px-6 py-4 sm:px-8 sm:[&:nth-last-child(-n+2)]:border-b-0">
                      <span className="mt-0.5 shrink-0 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-crimson">
                        Wk {w.w}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[0.9rem] font-medium leading-snug text-white">{w.t}</p>
                        <p className="mt-0.5 text-[0.8rem] leading-relaxed text-white/50">{w.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FACULTY ============ */}
      <section className={`bg-paper ${ANCHOR} text-ink`} id="faculty">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="display balance text-[clamp(1.8rem,4.4vw,3.1rem)]">
                Meet your{" "}
                <span className="serif-em text-crimson">faculty</span>
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink-2">
                Expert mentors from India&rsquo;s top institutions.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-3">
            {FACULTY.map((f, i) => (
              <Reveal key={f.name} delay={i * 80} className={`flex flex-col ${CARD_LIGHT}`}>
                <AccentRule />
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.img} alt={f.name} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover object-top" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl leading-tight">{f.name}</h3>
                  <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-crimson">{f.role}</p>
                  <p className="mt-3 text-[0.86rem] leading-relaxed text-ink-2">{f.cred}</p>
                  <p className="mt-3 inline-flex rounded-full border border-line px-3 py-1 text-[0.72rem] text-muted">{f.tag}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-col items-center gap-4 border-t border-line pt-9 text-center">
            <h3 className="display text-[clamp(1.3rem,3vw,2rem)]">
              Ready to learn from{" "}
              <span className="serif-em text-crimson">expert mentors</span>?
            </h3>
            <a href={APPLY} target="_blank" rel="noreferrer" className="btn btn-crimson">
              Start your application
              <ArrowUpRight className="arrow" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ WHY NEXIS SCHOOL OF AI ============ */}
      <section className={`bg-ink ${ANCHOR} text-white`} id="why">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal className="flex justify-center">
              <Kicker dark>Building AI leaders, one student at a time</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.8rem,4.4vw,3.1rem)] text-white">
                Why NEXIS{" "}
                <span className="serif-em text-crimson">School of AI</span>?
              </h2>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2">
            {WHY.map((a, i) => (
              <Reveal key={a.t} delay={(i % 2) * 80} className={`flex ${CARD_DARK}`}>
                <AccentRule />
                <div className="relative w-28 shrink-0 overflow-hidden bg-black/40 sm:w-40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.img} alt={a.t} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col justify-center p-5 sm:p-7">
                  <h3 className="font-serif text-lg leading-tight text-white sm:text-xl">{a.t}</h3>
                  <p className="mt-2 text-[0.86rem] leading-relaxed text-white/60">{a.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT STUDENTS RECEIVE ============ */}
      <section className={`bg-paper ${ANCHOR} text-ink`} id="receive">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="display balance text-[clamp(1.8rem,4.4vw,3.1rem)]">
                What students{" "}
                <span className="serif-em text-crimson">receive</span>
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink-2">
                Students don&rsquo;t just learn AI — they build it. Industry-recognised
                certifications and a portfolio of 15+ real AI projects.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {RECEIVE.map((c, i) => (
              <Reveal key={c.t} delay={(i % 4) * 70} className={`flex flex-col p-6 ${CARD_LIGHT}`}>
                <AccentRule />
                <span className="display text-3xl text-crimson">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-[1.05rem] leading-tight">{c.t}</h3>
                <Points items={c.points} dark={false} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ THE FUTURE OF JOBS ============ */}
      <section className={`${DEEP} text-white`}>
        <div className="shell py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="display balance text-[clamp(1.7rem,4vw,2.8rem)] text-white">
                The future of{" "}
                <span className="serif-em text-crimson">jobs</span>
              </h2>
            </Reveal>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 border-y border-white/10 py-8 lg:grid-cols-4">
            {FUTURE_STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 70} className="text-center">
                <p className="display text-[clamp(1.9rem,4.5vw,3.2rem)] text-crimson">{s.k}</p>
                <p className="mx-auto mt-2 max-w-[22ch] text-[0.86rem] leading-snug text-white/70">{s.l}</p>
                {s.src && <p className="mt-2 text-[0.7rem] uppercase tracking-[0.12em] text-white/35">{s.src}</p>}
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-8 max-w-xl text-center">
            <p className="font-serif text-[1.05rem] leading-relaxed text-white/80 sm:text-[1.25rem]">
              You won&rsquo;t be replaced by AI — but you might be replaced by
              someone who knows it.
            </p>
            <a href={APPLY} target="_blank" rel="noreferrer" className="btn btn-crimson mt-7">
              Get started now
              <ArrowUpRight className="arrow" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className={`bg-ink ${ANCHOR} text-white`} id="faqs">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Kicker dark>Questions</Kicker>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display balance mt-5 text-[clamp(1.9rem,4.4vw,3rem)] text-white">
                  Frequently asked{" "}
                  <span className="serif-em text-crimson">questions</span>.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-[0.9rem] leading-relaxed text-white/55">
                  Still curious? Write to{" "}
                  <a href={`mailto:${AI_EMAIL}`} className="ulink text-white">{AI_EMAIL}</a>{" "}
                  or call{" "}
                  <a href="tel:+919733152000" className="ulink text-white">{AI_PHONE}</a>.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={AI_FAQS} dark />
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section id="apply" className="scroll-mt-24 bg-crimson text-white">
        <div className="shell py-12 sm:py-18 lg:py-24">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/80">
                  <span className="h-px w-8 bg-white/60" />
                  New batches forming · Cohort of 30
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display balance mt-6 text-[clamp(2rem,5.2vw,4rem)] text-white">
                  Give your child a{" "}
                  <span className="serif-em">head start</span> in AI.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 max-w-lg text-[1.02rem] leading-relaxed text-white/85">
                  Weekend classes in Siliguri for Classes 8–12 — real projects, a
                  portfolio, and Google + NEXIS certification.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Reveal delay={200} className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href={APPLY} target="_blank" rel="noreferrer" className="btn btn-light w-full justify-center sm:w-auto lg:w-full">
                  Apply now
                  <ArrowUpRight className="arrow" />
                </a>
                <a href={ENQUIRE} className="btn w-full justify-center border-white/40 bg-transparent text-white hover:bg-white/10 sm:w-auto lg:w-full">
                  Enquire now
                  <ArrowRight className="arrow" />
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
