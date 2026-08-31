import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import VideoPlate from "@/components/VideoPlate";
import Recognition from "@/components/Recognition";
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
  Plate,
  SectionRail,
  Reveal,
} from "@/components/editorial";
import { CONTACT, ACCREDITATION } from "@/lib/content";
import JsonLd from "@/components/JsonLd";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "Postgraduate Program (PGP) in Business & Technology — 12-Month Launchpad | NEXIS Siliguri",
  description:
    "A 12-month, part-time postgraduate program in Siliguri for entrepreneurs, family-business leaders and working professionals. Learn from 75% outstation founders and CXOs, specialise, and finish with a mentored capstone.",
  alternates: { canonical: "/pgp" },
  openGraph: {
    title: "NEXIS PGP — 12-Month Launchpad to transform Business Leaders",
    description:
      "Part-time postgraduate program in Siliguri. Founder-led faculty, three specialisation tracks, and a mentored capstone that ships a real business.",
    type: "website",
  },
};

const APPLY = "https://apply.nexisschool.com/pgp-admission/";
const ENQUIRE = CONTACT.applyHref; // reuse the existing enquiry flow

const SECTIONS = [
  { label: "Program", href: "#program" },
  { label: "Who it's for", href: "#who" },
  { label: "The advantage", href: "#advantage" },
  { label: "Faculty", href: "#faculty" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Specialisations", href: "#tracks" },
  { label: "FAQs", href: "#faqs" },
];

const FACTS = [
  { label: "Duration", value: "12 months", sub: "9 months taught + 3-month capstone" },
  { label: "Format", value: "Executive hours", sub: "2 days a week · Fri & Sat evenings" },
  { label: "Location", value: "NEXIS Campus", sub: "Check Post, Siliguri" },
  { label: "Cohort", value: "30 seats", sub: "Selective, rolling intake" },
];

const WHO_FOR = [
  {
    t: "Graduates & early professionals",
    d: "Learn the real-world skills no one taught you, and move forward with clarity.",
    img: "/wp-media/2025/07/business-professional-min-scaled.jpg",
  },
  {
    t: "Young entrepreneurs",
    d: "Get the tools and structure to grow your business without burning out.",
    img: "/wp-media/2025/08/final-capstone.jpg",
  },
  {
    t: "Next-gen family business leaders",
    d: "Learn how to lead, modernise and take your family business forward — your way.",
    img: "/wp-media/2025/08/case-study.jpg",
  },
  {
    t: "Women entrepreneurs & solopreneurs",
    d: "Build your venture with the right skills, real support and the confidence to own your journey.",
    img: "/wp-media/2025/08/new-hero3.jpg",
  },
];

const ADVANTAGE = [
  {
    t: "Learn from world-class faculty",
    d: "75% of our faculty are outstation CXOs, founders and industry leaders who fly into Siliguri every week.",
    img: "/wp-media/2025/08/faculty.jpg",
  },
  {
    t: "A 12-month career launchpad",
    d: "A curriculum built for the real world — hands-on, outcome-driven and industry-led.",
    img: "/wp-media/2025/08/curriculum.jpg",
  },
  {
    t: "An exclusive business network",
    d: "Your next investor, co-founder or growth partner might be in the room.",
    img: "/wp-media/2025/08/networking.jpg",
  },
  {
    t: "A modern 360° campus",
    d: "Built like a boardroom, not a classroom — because you're here to build, not just to learn.",
    img: "/wp-media/2025/08/campus.jpg",
  },
];

type Faculty = {
  name: string;
  role: string;
  subject: string;
  img: string;
  logo: string;
  linkedin: string;
};

const FACULTY: Faculty[] = [
  { name: "Raghav Jhawar", role: "Founder, State Plate · Shark Tank S1", subject: "Business Systems & Processes", img: "/wp-media/2025/08/Raghav-Jhawar.jpg", logo: "/wp-media/2025/08/state-logo.png", linkedin: "https://www.linkedin.com/in/raghav-jhawar-72a644149/" },
  { name: "Pratik Agarwal", role: "CEO Office, Snitch", subject: "Entering New Products & Cities", img: "/wp-media/2025/08/pratik-agarwal.jpg", logo: "/wp-media/2024/10/snitch-logo.svg", linkedin: "https://www.linkedin.com/in/pratikagarwal11/" },
  { name: "Sonaal Goel", role: "Co-founder, Salty", subject: "E-commerce & Quick Commerce", img: "/wp-media/2025/08/Sonaal-goel.jpg", logo: "/wp-media/2025/08/salty-logo.png", linkedin: "https://www.linkedin.com/in/sonaal-goel-a874876a/" },
  { name: "Shivam Tiwari", role: "Head of Product & Growth", subject: "Creating AI Agents & Bots", img: "/wp-media/2025/08/shivam-tiwari.jpg", logo: "/wp-media/2025/08/good-bug-logo.png", linkedin: "https://www.linkedin.com/in/shivamtiwariin/" },
  { name: "Prejit Narayan", role: "CBO, boAt", subject: "Growth Hacking", img: "/wp-media/2025/08/Prejith-Narayan.jpg", logo: "/wp-media/2025/08/boat-logo.png", linkedin: "https://www.linkedin.com/in/prejit-narayan-6a67a034/" },
  { name: "Siddha Jain", role: "CBO, Bombae by BSC", subject: "Business Growth & Automation", img: "/wp-media/2025/08/Siddha-Jain_Business-Head_Visage-Lines.jpeg", logo: "/wp-media/2025/08/bombay-logo.png", linkedin: "https://www.linkedin.com/in/siddha-jain-65a88353/" },
  { name: "Vaibhav Choubey", role: "VP Product, Urban Company", subject: "Data-driven Decision Making", img: "/wp-media/2025/08/Vaibhav.jpg", logo: "/wp-media/2025/08/urban-logo.png", linkedin: "https://www.linkedin.com/in/vaibhav-choubey-4657b513/" },
  { name: "Uttam Gupta", role: "Founder's Office, GrowthSchool", subject: "Scaling & Founder Operations", img: "/wp-media/2025/08/Uttam-Gupta-.jpg", logo: "/wp-media/2025/08/growth-logo.png", linkedin: "https://www.linkedin.com/in/uttammgupta/" },
  { name: "Omang Agarwal", role: "COO's Office, Tetr", subject: "AI for Business Productivity", img: "/wp-media/2025/08/omang-agarwal.jpg", logo: "/wp-media/2025/08/tetr-logo.png", linkedin: "https://www.linkedin.com/in/omangagarwal/" },
  { name: "Neeraj Sancheti", role: "Founder, Kreativ Street", subject: "Modern Marketing & Content", img: "/wp-media/2025/08/Neeraj-sancheti.jpg", logo: "/wp-media/2025/08/kreativ-logo.png", linkedin: "https://www.linkedin.com/in/neerajsancheti/" },
];

type Phase = {
  n: string;
  months: string;
  title: string;
  lede: string;
  img: string;
  weeks: { w: number; t: string; d: string }[];
};

const PHASES: Phase[] = [
  {
    n: "01",
    months: "Months 1–3",
    title: "The Entrepreneur's Mindset",
    lede: "Build the mental and strategic foundation of a 21st-century founder.",
    img: "/wp-media/2025/08/nexis-visual-plan.png",
    weeks: [
      { w: 1, t: "Foundations of New-Age Entrepreneurship", d: "How modern businesses grow by combining systems, tech and teams — even in small cities." },
      { w: 2, t: "Growth Planning & Business Engine Mapping", d: "Define success your way and break your business into trackable parts." },
      { w: 3, t: "AI Tools for Smarter Execution — Part 1", d: "Use ChatGPT, Canva AI and more to automate tasks, write better and think faster." },
      { w: 4, t: "AI for Content & Operations — Part 2", d: "Go deeper into AI to generate content, reports and visual plans for your business." },
      { w: 5, t: "WhatsApp for Business: Strategy", d: "Use WhatsApp as more than chat — catalogs, broadcasts and automation flows." },
      { w: 6, t: "Automating Sales & Follow-ups", d: "Integrate lead forms, Sheets and simple CRMs to stay on top of every customer." },
      { w: 7, t: "Delegation & Role Clarity", d: "Delegation tools and processes so you stop being the bottleneck." },
    ],
  },
  {
    n: "02",
    months: "Months 4–6",
    title: "Systems That Scale",
    lede: "Design repeatable processes to run your business with structure, not stress.",
    img: "/wp-media/2025/08/sops.jpg",
    weeks: [
      { w: 8, t: "Designing SOPs for Consistency", d: "Simple checklists and SOPs so your team does things right — every time." },
      { w: 9, t: "Modern Funnel Building for Lead Gen", d: "Funnel design fundamentals applied to your own product or service." },
      { w: 10, t: "Local Brand Building & Low-Cost Marketing", d: "Strengthen your local brand with low-cost campaigns and a strong Google presence." },
      { w: 11, t: "Business Analytics & Dashboards", d: "Visualise your business in Sheets or Notion and make better decisions." },
      { w: 12, t: "Pricing Strategy & Cash Flow", d: "Track cash flow, margins and costs with simple tools you can use daily." },
      { w: 13, t: "Hiring Systems for Growing Teams", d: "Hire and onboard your first or next team members with clarity." },
      { w: 14, t: "Your Business Operating System", d: "Bring it together into a complete, scalable business control system." },
    ],
  },
  {
    n: "03",
    months: "Months 7–9",
    title: "The Digital Growth Engine",
    lede: "Master modern marketing, funnels and tools to accelerate acquisition and retention.",
    img: "/wp-media/2025/08/track-orientation.jpg",
    weeks: [
      { w: 15, t: "Track Orientation & Strategic Mapping", d: "Begin your track with role models, needs analysis and your first transformation targets." },
      { w: 16, t: "System Thinking for Track Growth", d: "Redesign how your business operates using scalable systems and templates." },
      { w: 17, t: "Tech Stack by Business Type", d: "CRMs, Meta Ads, POS or booking systems chosen for your business type." },
      { w: 18, t: "Retention & Loyalty Frameworks", d: "A predictable engine for customer loyalty, referrals and reactivation." },
      { w: 19, t: "Scaling Human Capital", d: "Structure your hiring plan and manage your team with trust and accountability." },
      { w: 20, t: "Smart Tech Integrations", d: "Tools that cut time on repetitive tasks and increase visibility." },
      { w: 21, t: "Sector Case Studies & Tool Mastery", d: "Case studies and tools used by real businesses in your sector." },
    ],
  },
  {
    n: "04",
    months: "Months 10–12",
    title: "The Mentored Capstone Sprint",
    lede: "Implement your learning in a real business, guided by a mentor.",
    img: "/wp-media/2025/07/hero5-min-scaled.jpg",
    weeks: [
      { w: 22, t: "Capstone Planning & Roadmap", d: "Finalise your capstone goal and get the templates and roadmap to start." },
      { w: 23, t: "Capstone Build — Week 1", d: "Start building your real-world system, guided by faculty and feedback." },
      { w: 24, t: "Capstone Build — Week 2", d: "Present your rough system to mentors and refine with their feedback." },
      { w: 25, t: "Review & Feedback Loop", d: "Learn to present your project clearly and confidently." },
      { w: 26, t: "Presentation & Storytelling", d: "Showcase what you've built to real-world mentors." },
      { w: 27, t: "Final Showcase & Jury Evaluation", d: "Structure your capstone pitch and present to the jury." },
      { w: 28, t: "Crafting Your Capstone Narrative", d: "Strengthen your final plan by reviewing others' work." },
      { w: 29, t: "Peer Review & Refinement", d: "Present to experts and peers and get your final feedback." },
      { w: 30, t: "Post-Program Growth Roadmap", d: "Get ready for what's next — beyond the classroom." },
    ],
  },
];

const TRACKS = [
  {
    t: "Transforming family business",
    d: "Take your family enterprise to the next level. Balance tradition with innovation, set up clear systems and lead with purpose.",
    points: [
      "Professionalising family-run operations",
      "Introducing technology & modern systems to legacy businesses",
      "Scaling with external teams, vendors & advisors",
    ],
  },
  {
    t: "Service-led businesses & SMBs",
    d: "For salons, agencies, coaching centres, logistics firms and consultancies ready to streamline and grow without chaos.",
    points: [
      "Business-process design & service-delivery excellence",
      "Smart team management & client onboarding systems",
      "Pricing, profitability and capacity planning",
      "Local marketing, reputation and automation",
    ],
  },
  {
    t: "D2C & e-commerce ventures",
    d: "Have a product — or planning one? Build an online brand, reach the right audience and run the backend like a pro.",
    points: [
      "Performance marketing & customer acquisition",
      "Product catalogs, inventory & Shopify tools",
      "Shipping, delivery & payment systems",
      "Brand, visual identity, retention & support",
    ],
  },
];

const TAKEAWAYS = [
  "A network money can't buy — an exclusive circle of founders and experts.",
  "Your 1% club — access to the top tier of entrepreneurs and leaders.",
  "Discussion circles and learning pods for peer-to-peer knowledge exchange.",
];

/* Reframed from the live "harsh reality" fear framing into the confident,
   prime-institution voice — the market context that makes the program matter. */
const CONTEXT_STATS = [
  { k: "70%", l: "of startups fail within their first five years", src: "Failory · CB Insights" },
  { k: "80%", l: "of family businesses don't survive beyond the third generation", src: "Harvard Business Review" },
  { k: "1 Cr+", l: "graduate every year in India — only ~20% considered job-ready", src: "India Skills Report, Wheebox" },
];

const PGP_FAQS: FaqItem[] = [
  {
    q: "Who is eligible to apply for the PGP in Business & Technology?",
    a: [
      { p: "Applicants should be graduates in any discipline at the time of application. The program is best suited for:" },
      {
        ol: [
          "Next-gen family business leaders looking to modernise, grow or transition a legacy business.",
          "Aspiring entrepreneurs looking to validate, build or scale a new venture.",
          "Women entrepreneurs and solopreneurs aiming to start or expand their services.",
          "Working professionals seeking to upskill and pivot into leadership roles.",
        ],
      },
    ],
  },
  {
    q: "Is prior work experience required for admission?",
    a: "No, prior work experience is not mandatory. The program is experiential and application-based, so those with real-world exposure — running a family business, a startup, or working in a company — often derive extra value. Freshers with clear career direction and enthusiasm are also welcome.",
  },
  {
    q: "Can I pursue this alongside a full-time job or business?",
    a: [
      { p: "Yes. The PGP is designed to be flexible for entrepreneurs and working professionals." },
      {
        ul: [
          "Live sessions are held on Friday and Saturday evenings, led by outstation industry experts — so your regular work or business hours stay unaffected.",
          "Assignments and projects are designed to fit around your schedule, making it easier to balance learning with your day-to-day.",
        ],
      },
    ],
  },
  {
    q: "What qualification do I earn on completion?",
    a: "This is a certificate program by design, not a degree or diploma. Rather than a traditional credential, the focus is the practical skills, real-world experience and network that help you excel as a leader or entrepreneur. Every candidate who completes the program receives a Post Graduate Program (PGP) Certificate in Business & Technology from NEXIS.",
  },
  {
    q: "What is the duration and structure of the program?",
    a: [
      { p: "The PGP is a 12-month program — 9 months of learning plus a 3-month capstone and career support." },
      {
        ol: [
          "The first 9 months cover core subjects, specialisation modules, live sessions, hands-on projects and mentorship.",
          "The final 3 months are dedicated to the capstone project, career preparation, startup incubation (for those interested) and personalised mentorship.",
        ],
      },
    ],
  },
  {
    q: "Who will be teaching and mentoring us?",
    a: [
      { p: "At NEXIS, 75% of the faculty are industry experts who fly in each week from leading companies to teach and mentor you — professionals associated with brands like Snitch, boAt, Bombay Shaving Company and other fast-growing businesses. Our faculty includes:" },
      {
        ul: [
          "Founders, CXOs and growth leaders who have built or scaled real businesses.",
          "Family-business practitioners who bring live case studies and real-world insight — not just theory.",
          "Guest mentors and advisors who engage with students through sessions, projects and reviews.",
        ],
      },
    ],
  },
  {
    q: "Does the program include a specialisation and a capstone?",
    a: [
      { p: "Yes. You choose one specialisation track based on your background and goals:" },
      {
        ol: [
          "Family Business Transformation — succession, governance, innovation and professionalisation.",
          "Service-led Businesses & SMBs — scaling operations, expanding markets and using the right tools.",
          "Entrepreneurial Leadership in Emerging Markets — consumer-first brands, digital growth and customer experience.",
        ],
      },
      { p: "The program ends with a 3-month capstone where you apply everything toward a real objective — scaling your family business, launching a venture or expanding your services — mentored closely by an industry expert and the NEXIS team." },
    ],
  },
  {
    q: "What career and entrepreneurial support does NEXIS provide?",
    a: [
      { p: "Whether you're launching a startup, expanding a family business or exploring a new direction, you'll receive:" },
      {
        ul: [
          "1-on-1 mentorship and career mapping to define and navigate your goals.",
          "Business-pitch preparation and access to investor meetups.",
          "Resume building, interview practice and personal-branding support.",
          "Connections into a wider network of founders, mentors and business leaders — plus startup-incubation support for promising ideas.",
        ],
      },
    ],
  },
];

/** Media-left / media-right highlight card in the premium panel treatment. */
function HighlightCard({
  chip,
  title,
  desc,
  points,
  img,
  alt,
  dark,
  mediaLeft = false,
}: {
  chip: string;
  title: ReactNode;
  desc: ReactNode;
  points?: string[];
  img: string;
  alt: string;
  dark: boolean;
  mediaLeft?: boolean;
}) {
  return (
    <Reveal className={`grid md:grid-cols-2 ${dark ? CARD_DARK : CARD_LIGHT}`}>
      <AccentRule />
      <div
        className={`relative min-h-[220px] overflow-hidden sm:min-h-[300px] ${
          mediaLeft ? "md:order-1" : "md:order-2"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
        />
      </div>
      <div
        className={`flex flex-col justify-center p-6 sm:p-9 lg:p-11 ${
          mediaLeft ? "md:order-2" : "md:order-1"
        }`}
      >
        <Chip>{chip}</Chip>
        <h3
          className={`display balance mt-5 text-[clamp(1.4rem,3vw,2.1rem)] ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-4 text-[0.95rem] leading-relaxed ${
            dark ? "text-white/60" : "text-ink-2"
          }`}
        >
          {desc}
        </p>
        {points && <Points items={points} dark={dark} />}
      </div>
    </Reveal>
  );
}

export default function PGPPage() {
  return (
    <main className="relative font-poppins lp-poppins">
      <SiteNav applyHref={ENQUIRE} logoHref="/" branding="2027" />
      <JsonLd
        data={[
          courseSchema({
            name: "Postgraduate Program (PGP) in Business & Technology",
            description:
              "A 12-month, part-time postgraduate program in Siliguri for graduates, entrepreneurs and family-business leaders — founder-led faculty, a specialisation track and a mentored capstone.",
            path: "/pgp",
            mode: "Blended",
            duration: "P12M",
          }),
          faqPageSchema(PGP_FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "PGP in Business & Technology", path: "/pgp" },
          ]),
        ]}
      />

      {/* ============ HERO ============ */}
      <section
        id="top"
        className={`relative isolate overflow-hidden ${DEEP} text-white`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/wp-media/2025/07/business-professional-min-scaled.jpg"
          alt="Professionals in a working session at the NEXIS campus"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#08080a]/85 via-[#08080a]/55 to-[#08080a]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(8,8,10,0.7)_0%,rgba(8,8,10,0.35)_55%,transparent_100%)]" />
        <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-96 w-96 rounded-full bg-crimson/25 blur-[130px]" />

        <div className="shell relative flex flex-col items-center pb-12 pt-12 text-center sm:pt-16 lg:pb-16 lg:pt-24">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
              <span className="h-px w-8 bg-crimson" />
              <span className="text-crimson">Postgraduate Program · Siliguri</span>
              <span className="h-px w-8 bg-crimson" />
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display balance mt-6 max-w-4xl text-[clamp(2rem,5.4vw,4.2rem)] text-white">
              A 12-month launchpad to transform{" "}
              <span className="serif-em text-crimson">business leaders</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-white/70">
              Learn the skills you need to build, scale and lead a modern
              business — part-time, alongside your work or venture.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={ENQUIRE} className="btn btn-crimson">
                Enquire now
                <ArrowRight className="arrow" />
              </a>
              <a
                href={APPLY}
                target="_blank"
                rel="noreferrer"
                className="btn border-white/25 bg-transparent text-white hover:bg-white/10"
              >
                Apply now
                <ArrowUpRight className="arrow" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={340} className="mt-12 w-full border-t border-white/10 pt-9">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/45">
              Our programs are backed by
            </p>
            <div className="mx-auto mt-7 grid max-w-3xl grid-cols-2 items-center justify-items-center gap-x-8 gap-y-7 sm:grid-cols-4">
              {ACCREDITATION.map((a) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={a.name}
                  src={a.src}
                  alt={a.name}
                  className="h-12 w-full max-w-[150px] object-contain opacity-90 sm:h-14"
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <SectionRail sections={SECTIONS} />

      {/* ============ PROGRAM AT A GLANCE ============ */}
      <section className={`bg-paper-2/50 ${ANCHOR} text-ink`} id="program">
        <div className="shell py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-9 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <Reveal>
                <VideoPlate
                  poster="/wp-media/2025/07/business-professional-min-scaled.jpg"
                  alt="Inside the NEXIS PGP program"
                  videoId="Wl8ifZsBSqI"
                  width={1920}
                  height={1080}
                  label="NEXIS in 3 minutes"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal>
                <h2 className="display balance text-[clamp(1.7rem,4vw,2.8rem)] text-ink">
                  The <span className="serif-em text-crimson">program details</span>
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-crimson/30 bg-crimson/10 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-crimson">
                  <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                  Rolling intake · Cohort of 30
                </p>
              </Reveal>

              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-7 sm:gap-x-10">
                {FACTS.map((f, i) => (
                  <Reveal key={f.label} delay={i * 70}>
                    <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-crimson">
                      {f.label}
                    </p>
                    <p className="mt-2 font-serif text-xl leading-tight">{f.value}</p>
                    <p className="mt-0.5 text-[0.8rem] leading-snug text-muted">{f.sub}</p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={140} className="mt-8 flex flex-wrap items-center gap-3">
                <a href={ENQUIRE} className="btn btn-crimson">
                  Enquire now
                  <ArrowRight className="arrow" />
                </a>
                <a href={APPLY} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  Apply now
                  <ArrowUpRight className="arrow" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHO IS THIS FOR ============ */}
      <section className={`bg-paper ${ANCHOR} text-ink`} id="who">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="max-w-2xl">
            <Reveal>
              <Kicker>Who it&rsquo;s for</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.8rem,4.4vw,3.1rem)]">
                Designed for people who are{" "}
                <span className="serif-em text-crimson">ready to build</span>.
              </h2>
            </Reveal>
          </div>

          <div className="mt-9 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHO_FOR.map((c, i) => (
              <Reveal key={c.t} delay={(i % 4) * 70} className={`flex flex-col ${CARD_LIGHT}`}>
                <AccentRule />
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.t}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  />
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

      {/* ============ THE UNFAIR ADVANTAGE ============ */}
      <section className={`bg-ink ${ANCHOR} text-white`} id="advantage">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal className="flex justify-center">
              <Kicker dark>Catapulting you to the 1%</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.8rem,4.4vw,3.1rem)] text-white">
                The <span className="serif-em text-crimson">unfair advantage</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2">
            {ADVANTAGE.map((a, i) => (
              <Reveal key={a.t} delay={(i % 2) * 80} className={`flex ${CARD_DARK}`}>
                <AccentRule />
                <div className="relative w-28 shrink-0 overflow-hidden bg-black/40 sm:w-40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.img}
                    alt={a.t}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
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

      {/* ============ FACULTY ============ */}
      <section className={`bg-paper ${ANCHOR} text-ink`} id="faculty">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="display balance text-[clamp(1.8rem,4.4vw,3.1rem)]">
                Learn from{" "}
                <span className="serif-em text-crimson">world-class faculty</span>
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink-2">
                75% of our faculty fly in every week from the companies building
                India&rsquo;s fastest-growing brands.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FACULTY.map((f, i) => (
              <Reveal key={f.name} delay={(i % 3) * 70} className={`flex flex-col ${CARD_LIGHT}`}>
                <AccentRule />
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={f.img}
                    alt={f.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                  <span className="absolute right-3 top-3 flex h-8 items-center rounded-full bg-ink/70 px-3 shadow-sm ring-1 ring-white/15 backdrop-blur-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={f.logo} alt="" className="h-3.5 w-auto max-w-[60px] object-contain brightness-0 invert" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-lg leading-tight">{f.name}</h3>
                  <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-crimson">
                    {f.role}
                  </p>
                  <p className="mt-3 flex-1 text-[0.85rem] leading-relaxed text-ink-2">
                    Teaches <span className="text-ink">{f.subject}</span>
                  </p>
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="ulink mt-4 inline-flex w-fit items-center gap-1.5 text-[0.76rem] font-semibold uppercase tracking-[0.1em] text-ink-2"
                  >
                    LinkedIn
                    <ArrowUpRight className="text-crimson" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-col items-center gap-4 border-t border-line pt-9 text-center">
            <h3 className="display text-[clamp(1.3rem,3vw,2rem)]">
              Ready to learn from{" "}
              <span className="serif-em text-crimson">real-world experts</span>?
            </h3>
            <a href={ENQUIRE} className="btn btn-crimson">
              Enquire now
              <ArrowRight className="arrow" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ CURRICULUM / 12-MONTH JOURNEY ============ */}
      <section className={`${DEEP} ${ANCHOR} text-white`} id="curriculum">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="max-w-2xl">
            <Reveal>
              <Kicker dark>Skip semesters — progress in phases</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.8rem,4.4vw,3.1rem)] text-white">
                Your 12-month{" "}
                <span className="serif-em text-crimson">PGP journey</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-10 space-y-4 sm:space-y-5">
            {PHASES.map((p, i) => (
              <Reveal key={p.n} delay={Math.min(i, 3) * 60} className={`overflow-hidden ${CARD_DARK}`}>
                <AccentRule />
                <div className="grid lg:grid-cols-12">
                  <div className="relative min-h-[160px] overflow-hidden lg:col-span-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-[#0e0e11]/40 to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="display text-4xl text-crimson">{p.n}</span>
                      <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/60">
                        {p.months}
                      </p>
                      <h3 className="mt-2 font-serif text-xl leading-tight text-white">{p.title}</h3>
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="border-b border-white/10 px-6 py-4 text-[0.9rem] leading-relaxed text-white/60 sm:px-8">
                      {p.lede}
                    </p>
                    <ol className="divide-y divide-white/10">
                      {p.weeks.map((w) => (
                        <li key={w.w} className="flex gap-4 px-6 py-3.5 sm:px-8">
                          <span className="mt-0.5 shrink-0 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-crimson">
                            Wk {w.w}
                          </span>
                          <div className="min-w-0">
                            <p className="text-[0.9rem] font-medium leading-snug text-white">{w.t}</p>
                            <p className="mt-0.5 text-[0.8rem] leading-relaxed text-white/50">{w.d}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SPECIALISATIONS ============ */}
      <section className={`bg-paper ${ANCHOR} text-ink`} id="tracks">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="display balance text-[clamp(1.8rem,4.4vw,3.1rem)]">
                Specialise in your{" "}
                <span className="serif-em text-crimson">chosen career</span>
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink-2">
                200+ hours of networking and mentorship, focused on the track you choose.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:gap-5 lg:grid-cols-3">
            {TRACKS.map((t, i) => (
              <Reveal key={t.t} delay={(i % 3) * 80} className={`flex flex-col p-6 sm:p-8 ${CARD_LIGHT}`}>
                <AccentRule />
                <span className="display text-3xl text-crimson">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-xl leading-tight">{t.t}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-2">{t.d}</p>
                <p className="mt-5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted">
                  You&rsquo;ll master
                </p>
                <Points items={t.points} dark={false} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NETWORK / INNER CIRCLE ============ */}
      <section className={`bg-ink text-white`}>
        <div className="shell py-12 sm:py-16 lg:py-20">
          <div className="max-w-2xl">
            <Reveal>
              <Kicker dark>Beyond the classroom</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.8rem,4.4vw,3.1rem)] text-white">
                Unlock your{" "}
                <span className="serif-em text-crimson">inner circle of the 1%</span>
              </h2>
            </Reveal>
          </div>
          <div className="mt-9 grid gap-4 sm:gap-5 md:grid-cols-3">
            {TAKEAWAYS.map((t, i) => (
              <Reveal key={t} delay={i * 80} className="rounded-[3px] border border-white/10 bg-[#0e0e11] p-6 sm:p-8">
                <span className="display text-3xl text-crimson">0{i + 1}</span>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-white/70">{t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ THE CASE FOR BUILDING NOW ============ */}
      <section className={`${DEEP} text-white`}>
        <div className="shell py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="display balance text-[clamp(1.7rem,4vw,2.8rem)] text-white">
                Why this program{" "}
                <span className="serif-em text-crimson">exists</span>
              </h2>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-6 border-y border-white/10 py-8 sm:grid-cols-3">
            {CONTEXT_STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 80} className="text-center sm:border-l sm:border-white/10 sm:first:border-l-0">
                <p className="display text-[clamp(2rem,5vw,3.4rem)] text-crimson">{s.k}</p>
                <p className="mx-auto mt-2 max-w-[24ch] text-[0.9rem] leading-snug text-white/70">{s.l}</p>
                <p className="mt-2 text-[0.7rem] uppercase tracking-[0.12em] text-white/35">{s.src}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-8 max-w-2xl text-center">
            <p className="font-serif text-[1.05rem] leading-relaxed text-white/75 sm:text-[1.2rem]">
              The PGP is built to put you on the right side of these numbers — with
              systems, a network and a business you&rsquo;ve actually built.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ EXPERIENCE NEXIS ============ */}
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-20">
          <Reveal className={`grid items-stretch overflow-hidden md:grid-cols-2 ${CARD_LIGHT}`}>
            <AccentRule />
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <h2 className="display balance text-[clamp(1.6rem,3.6vw,2.6rem)]">
                Experience <span className="serif-em text-crimson">NEXIS</span>
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-ink-2">
                Curious about the PGP journey? Attend an info session or a campus
                tour and get clarity straight from the NEXIS team.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="/ug/book-campus-tour" className="btn btn-crimson">
                  Book a campus tour
                  <ArrowRight className="arrow" />
                </a>
                <a href={ENQUIRE} className="btn btn-ghost">
                  Enquire now
                  <ArrowUpRight className="arrow" />
                </a>
              </div>
            </div>
            <div className="relative min-h-[240px] bg-paper-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/wp-media/2025/08/exp-nexis.png"
                alt="Experience the NEXIS campus"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ RECRUITER / PARTNER PROOF ============ */}
      <section className="bg-paper text-ink">
        <div className="shell pb-4 text-center">
          <Reveal>
            <p className="kicker">Where our students and mentors work</p>
          </Reveal>
        </div>
        <Recognition vibrant doubleRow embedded showKicker={false} showAccreditation={false} />
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
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={PGP_FAQS} dark />
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
                  Rolling intake · Cohort of 30
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display balance mt-6 text-[clamp(2rem,5.2vw,4rem)] text-white">
                  Build the next chapter of your{" "}
                  <span className="serif-em">career</span>.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 max-w-lg text-[1.02rem] leading-relaxed text-white/85">
                  A 12-month, part-time postgraduate program in Siliguri —
                  founder-led faculty, a specialisation track and a capstone that
                  ships a real business.
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
