/* ============================================================
   Single source of truth for page copy & data.
   Edit here to update the UG / Batch-of-2027 page.
   ============================================================ */

export const BATCH = {
  year: "2027",
  starts: "July 2027",
  cohort: "Batch of 2027–2030",
  city: "Siliguri",
};

/* Published reports & downloads (hosted on the live nexisschool.com CDN). */
export const REPORTS = {
  masterclass:
    "https://nexisschool.com/wp-content/uploads/2025/12/MASTERCLASS-Report.pdf",
  outclass:
    "https://nexisschool.com/wp-content/uploads/2025/12/OUTCLASS-REPORT-2025.pdf",
  internship:
    "https://nexisschool.com/wp-content/uploads/2026/05/NEXIS-Summer-Internship-Report-2026.pdf",
  yearbook: "https://nexisschool.com/wp-content/uploads/2026/04/NEXIS-Yearbook.pdf",
};

/* Upcoming events, shown as a horizontal carousel on /ug.

   ADD EVENTS HERE — the carousel scrolls sideways, so any number of entries
   works and nothing needs to change in the page. Newest first.
     t     required — event name
     d     required — one or two lines of detail
     img   required — poster or photo (any aspect; it fills a 16:10 frame)
     href  required — where the CTA goes
     cta   required — CTA label, e.g. "Register now"
     tag   optional — small kicker above the title, e.g. "Campus tour"
     date  optional — e.g. "Sat, 12 Sep · 10:00 AM"                          */
export type UgEvent = {
  t: string;
  d: string;
  img: string;
  href: string;
  cta: string;
  tag?: string;
  date?: string;
};

export const UG_EVENTS: UgEvent[] = [
  {
    tag: "Campus tour",
    t: "NEXIS Campus Tour & UG Admission Counselling",
    d: "A guided walk through the campus, followed by a one-to-one admission counselling session with the team.",
    img: "/images/campus/tour6.jpg",
    href: "/ug/book-campus-tour",
    cta: "Register now",
  },
  {
    tag: "Founder connect",
    t: "Founder Connect",
    d: "Sit down with a NEXIS founder to talk through the programme, the method, and whether it fits your plans.",
    img: "/images/campus/legacy-hall.jpg",
    href: "/ug/book-founder-connect",
    cta: "Book a slot",
  },
  {
    tag: "Admissions",
    t: "NEXGen Aptitude Test",
    d: "The 45-minute on-campus test that opens your application, followed by an interview and discussion round.",
    img: "/images/campus/apex-hall.jpg",
    href: "/ug/admission-enquiry",
    cta: "Apply now",
  },

  /* ---- PLACEHOLDER ENTRIES ----------------------------------------------
     Dummy events so the carousel can be reviewed with a realistic count.
     Titles and dates are invented — replace or delete before going live. */
  {
    tag: "Masterclass",
    date: "Sat, 20 Sep · 11:00 AM",
    t: "Masterclass: Building a D2C Brand",
    d: "A working session with a founder on positioning, pricing and the first thousand customers.",
    img: "/images/campus/tour7.jpg",
    href: "/events",
    cta: "Save your seat",
  },
  {
    tag: "Showcase",
    date: "Fri, 3 Oct · 4:00 PM",
    t: "OUTCLASS Demo Day",
    d: "Students present the local businesses they consulted, and the revenue their work moved.",
    img: "/images/campus/tour8.jpg",
    href: "/events",
    cta: "Register now",
  },
  {
    tag: "Scholarship",
    date: "Sun, 12 Oct · 10:00 AM",
    t: "NEXGen Scholarship Test",
    d: "The on-campus test that decides merit scholarships, worth 10% to 100% of tuition.",
    img: "/images/campus/life-at-nexis.jpg",
    href: "/ug/admission-enquiry",
    cta: "Apply now",
  },
  {
    tag: "Open house",
    date: "Sat, 25 Oct · 11:00 AM",
    t: "Parents' Open House",
    d: "Walk the campus, meet the faculty and get the fee, financing and outcomes picture in one sitting.",
    img: "/images/campus/legacy-hall.jpg",
    href: "/ug/book-campus-tour",
    cta: "Reserve a place",
  },
  {
    tag: "Competition",
    date: "Sat, 8 Nov · 9:00 AM",
    t: "Startup Weekend @ NEXIS",
    d: "Forty-eight hours from idea to pitch, judged by founders and investors from the network.",
    img: "/images/campus/safe-future.jpg",
    href: "/events",
    cta: "Join the cohort",
  },
];

/* Tools students actually work in, listed per semester. No vendor logo files
   ship with the repo, so each mark renders as a monogram tile in the brand's
   own type; drop a file at /images/tools/<key>.svg and set `src` here and the
   real logo is used instead — nothing else changes. */
export type ToolMark = { name: string; mark: string; src?: string };

export const TOOL_MARKS: Record<string, ToolMark> = {
  canva: { name: "Canva", mark: "Cv" },
  chatgpt: { name: "ChatGPT", mark: "AI" },
  linkedin: { name: "LinkedIn", mark: "in" },
  sheets: { name: "Google Sheets", mark: "Sh" },
  shopify: { name: "Shopify", mark: "Sp" },
  meta: { name: "Meta Ads", mark: "M" },
  wordpress: { name: "WordPress", mark: "W" },
  notion: { name: "Notion", mark: "N" },
  tally: { name: "Tally", mark: "T" },
  tradingview: { name: "TradingView", mark: "TV" },
  zapier: { name: "Zapier", mark: "Z" },
  googleads: { name: "Google Ads", mark: "Ads" },
  figma: { name: "Figma", mark: "Fg" },
  framer: { name: "Framer", mark: "Fr" },
  hubspot: { name: "HubSpot", mark: "Hs" },
  excel: { name: "Excel", mark: "X" },
  powerbi: { name: "Power BI", mark: "BI" },
  sql: { name: "SQL", mark: "SQL" },
  ga4: { name: "Google Analytics", mark: "GA" },
  jira: { name: "Jira", mark: "Jr" },
  semrush: { name: "Semrush", mark: "Se" },
  mailchimp: { name: "Mailchimp", mark: "Mc" },
  slack: { name: "Slack", mark: "Sl" },
};

/* The full three-year syllabus, as published on nexisschool.com/ug/curriculum.
   Each year runs two semesters; every semester carries what happens in class,
   what happens out of it, and the tools it is taught on. Rendered by
   <CurriculumJourney /> as a sticky year rail beside scrolling semesters. */
export type CurriculumBlock = {
  title: string;
  items: string[];
};

export type CurriculumProject = { t: string; d: string };

export type CurriculumSemester = {
  /** 1–6, continuous across the three years. */
  n: number;
  label: string;
  focus: string;
  inClass: CurriculumBlock[];
  outClass: CurriculumProject[];
  /** Keys into TOOL_MARKS. */
  tools: string[];
};

export type CurriculumYear = {
  n: string;
  year: string;
  lede: string;
  theme: string;
  semesters: CurriculumSemester[];
};

export const UG_CURRICULUM: CurriculumYear[] = [
  {
    n: "01",
    year: "Year 1",
    lede: "Build your basics",
    theme: "Digital Sales & Marketing",
    semesters: [
      {
        n: 1,
        label: "Semester 1",
        focus: "Foundations — and your first paying customer.",
        inClass: [
          {
            title: "Core course",
            items: [
              "Marketing 101",
              "Fundamentals of Accounting",
              "Foundation of HRM",
            ],
          },
          {
            title: "Everyday course",
            items: ["AI in Business", "Art of Communication"],
          },
          {
            title: "Focus workshops",
            items: ["Visual Storytelling with Canva", "LinkedIn for Growth"],
          },
        ],
        outClass: [
          {
            t: "Local Business Consulting",
            d: "Work closely with local cafés, dealerships and small businesses. Understand their challenges, come up with creative ideas, and help them boost their strategy, sales and growth — all while learning how real businesses work.",
          },
          {
            t: "Dropshipping Challenge",
            d: "Choose a product, set up your own online store, and experience what it takes to build a business from scratch — from designing your website to making your first sale.",
          },
        ],
        tools: ["canva", "linkedin", "chatgpt", "shopify", "sheets", "meta"],
      },
      {
        n: 2,
        label: "Semester 2",
        focus: "Systems, strategy and the first internship.",
        inClass: [
          {
            title: "Core course",
            items: [
              "Business Economics (Micro & Macro)",
              "Business Strategy and Decision Making",
              "Corporate Accounting",
            ],
          },
          {
            title: "Everyday course",
            items: [
              "Navigating the Digital World",
              "Financial Markets Fundamentals",
            ],
          },
          {
            title: "Focus workshops",
            items: [
              "Project Management",
              "Building Your Own Website",
              "The Personal Finance Playbook: Money Smart",
            ],
          },
        ],
        outClass: [
          {
            t: "AIvolution",
            d: "Identify one real problem in the world or in a business and build a working AI product around it. From idea to prototype, you create something that actually solves a pain point and can be tested and improved.",
          },
          {
            t: "Professional Internship Experience",
            d: "A full-time, hands-on internship inside a startup, local business or corporate team. You work like an actual team member, take ownership of tasks, and understand how real companies run.",
          },
        ],
        tools: ["wordpress", "notion", "tally", "tradingview", "zapier"],
      },
    ],
  },
  {
    n: "02",
    year: "Year 2",
    lede: "Get your hands dirty with experience",
    theme: "Business Analytics",
    semesters: [
      {
        n: 3,
        label: "Semester 3",
        focus: "Go to market — and build an audience of your own.",
        inClass: [
          {
            title: "Core course",
            items: [
              "Sales and Advanced Marketing (GTM)",
              "Digital Marketing and E-commerce",
              "Corporate Finance",
            ],
          },
          {
            title: "Everyday course",
            items: ["Design and No-Code", "Quantitative Techniques in Business"],
          },
          {
            title: "Focus workshops",
            items: ["Resume and Interview Prep"],
          },
        ],
        outClass: [
          {
            t: "Creator Challenge",
            d: "Learn marketing by building your personal brand. Create content and grow your audience on your chosen platform.",
          },
        ],
        tools: ["googleads", "meta", "figma", "framer", "hubspot"],
      },
      {
        n: 4,
        label: "Semester 4",
        focus: "Turn data into decisions.",
        inClass: [
          {
            title: "Core course",
            items: [
              "Data Analytics (Excel, BI)",
              "Product Management",
              "Entrepreneurship",
            ],
          },
          {
            title: "Everyday course",
            items: ["International Business: Imports and Exports"],
          },
          {
            title: "Focus workshops",
            items: ["The Art of Negotiation", "Sustainability and CSR"],
          },
        ],
        outClass: [
          {
            t: "The 10L Investment Challenge",
            d: "Learn finance by managing a virtual portfolio invested in live markets. Master personal finance while you are still a student.",
          },
        ],
        tools: ["excel", "powerbi", "sql", "ga4", "jira"],
      },
    ],
  },
  {
    n: "03",
    year: "Year 3",
    lede: "Craft your journey",
    theme: "Entrepreneurship",
    semesters: [
      {
        n: 5,
        label: "Semester 5",
        focus: "Brand, growth and a venture with your name on it.",
        inClass: [
          {
            title: "Core course",
            items: [
              "Strategic Brand Management",
              "Growth Hacking",
              "Advertising & Sales Promotion",
              "Advanced Taxation",
            ],
          },
          {
            title: "Everyday course",
            items: [
              "Financial Modelling",
              "Business Automation & Systems",
              "Understanding Computer Behaviour and Lifecycle",
            ],
          },
          {
            title: "Focus workshops",
            items: ["Career Bootcamp (resume, case study, interview preparation)"],
          },
        ],
        outClass: [
          {
            t: "Build Your Own Business (NEXIS Startup Lab)",
            d: "Turn your idea into a real venture — from product development to pitching your startup to mentors and investors.",
          },
          {
            t: "Career Bootcamp & Placement Drive",
            d: "Sessions on resume building, interviews and communication, then meeting recruiters directly through our placement drives.",
          },
        ],
        tools: ["excel", "semrush", "mailchimp", "zapier", "chatgpt"],
      },
      {
        n: 6,
        label: "Semester 6",
        focus: "Six months in the field, working like a team member.",
        inClass: [
          {
            title: "On the job",
            items: [
              "Weekly mentor reviews with faculty and founders",
              "Live project documentation and reporting",
              "Placement interviews and offer negotiation",
            ],
          },
        ],
        outClass: [
          {
            t: "6-month Professional Internship",
            d: "A real taste of the corporate world with a startup, SME or large company — applying what you have learned on live projects, seeing how businesses actually run, and building your confidence and network.",
          },
        ],
        tools: ["slack", "notion", "jira", "hubspot", "linkedin"],
      },
    ],
  },
];

/* In-page section rail on /ug — mirrors the tab strip on nexisschool.com/ug. */
export const UG_SECTIONS = [
  { label: "Why NEXIS", href: "#why" },
  { label: "Highlights", href: "#highlights" },
  { label: "Curriculum & Faculty", href: "#curriculum" },
  { label: "Admissions & Fees", href: "#admissions" },
  { label: "Career Outcome", href: "#careers" },
  { label: "Student Life", href: "#student-life" },
  { label: "Our batches", href: "#batches" },
  { label: "FAQs", href: "#faqs" },
];

export const NAV_LINKS = [
  { label: "Program", href: "#program" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "How you learn", href: "#learn" },
  { label: "Faculty", href: "#faculty" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Campus life", href: "#campus" },
  { label: "Admissions", href: "#admissions" },
];

export const HOME_NAV = [
  { label: "Programs", href: "#programs" },
  { label: "Why NEXIS", href: "#why" },
  { label: "Students", href: "#students" },
  { label: "Campus", href: "#campus" },
  { label: "News", href: "#news" },
];

/* The three NEXIS programs — the homepage's core hub. */
export const PROGRAMS = [
  {
    tag: "Undergraduate",
    title: "UG in Business Management",
    d: "A three-year, on-campus program where you learn business by building it — digital marketing, analytics, then entrepreneurship. For students after Class XII.",
    meta: ["3 years", "On-campus", "Batch of 2027"],
    img: "/images/campus/tour7.jpg",
    href: "/ug",
    live: true,
  },
  {
    tag: "Postgraduate",
    title: "PGP in Business & Technology",
    d: "A 12-month, part-time postgraduate program for graduates, entrepreneurs and family-business leaders — founder-led faculty and a mentored capstone.",
    meta: ["12 months", "Part-time", "For graduates"],
    img: "/images/campus/legacy-hall.jpg",
    href: "/pgp",
    live: true,
  },
  {
    tag: "New",
    title: "School of AI",
    d: "India's first School of AI for Class 8–12 students — build real AI apps, automations and a capstone startup, mentored by IIT/IIM/ISB faculty.",
    meta: ["Classes 8–12", "Hands-on", "Weekends"],
    img: "/images/campus/apex-hall.jpg",
    href: "/school-of-ai",
    live: true,
  },
];

/* Institution-level differentiators for the homepage. */
export const WHY_NEXIS = [
  {
    k: "70%",
    t: "Hands-on curriculum",
    d: "Practical, industry-backed learning — you do the work every day, not just study it for an exam.",
  },
  {
    k: "50+",
    t: "Faculty who've built",
    d: "Learn from CEOs, entrepreneurs and CXOs of India's fastest-growing companies — not just career academics.",
  },
  {
    k: "365",
    t: "A living campus",
    d: "Clubs, competitions, sport and real ventures — a modern campus in constant motion, all year round.",
  },
  {
    k: "75+",
    t: "Career-outcome focused",
    d: "Skills over theory, internships every year, and an active 75+ company recruiter network.",
  },
];

export const PROGRAM_FACTS = [
  { label: "Format", value: "On-campus", sub: `${BATCH.city} campus` },
  { label: "Commences", value: BATCH.starts, sub: BATCH.cohort },
  { label: "Duration", value: "3 years", sub: "incl. 6-month internship" },
  { label: "Eligibility", value: "Class XII", sub: "appearing or passed" },
];

export const DIFFERENTIATORS = [
  {
    k: "70%",
    t: "of your time is hands-on",
    d: "You spend the majority of the program doing the work — live projects, real clients, real revenue — not memorising theory for an exam.",
  },
  {
    k: "Sem 1",
    t: "internships start early",
    d: "Students begin interning with startups and founders as early as their first semester, building a résumé years before their peers.",
  },
  {
    k: "50+",
    t: "founders & CXOs mentor you",
    d: "Learn directly from the people who build and scale companies — from boAt and Lenskart to Zomato, Snitch and State Plate.",
  },
  {
    k: "75+",
    t: "companies in the network",
    d: "An active recruiter and partner network opens doors to internships, consulting projects and full-time roles from year one.",
  },
];

export const CURRICULUM = [
  {
    year: "Year 01",
    title: "Digital Sales & Marketing",
    lede: "Learn to build an audience and sell — the foundational skill of every modern business.",
    points: [
      "Launch real content channels and grow a following",
      "Run live campaigns for actual products and brands",
      "Build and scale your first D2C venture in semester one",
    ],
    qualification: "NSQF-aligned qualification, recognised under NCVET",
  },
  {
    year: "Year 02",
    title: "Business Analytics",
    lede: "Turn data into decisions — the edge that separates operators from guessers.",
    points: [
      "Work with real business data and dashboards",
      "Build AI tools and bots for genuine use-cases",
      "Consult local businesses to grow measurable revenue",
    ],
    qualification: "NSQF-aligned qualification, recognised under NCVET",
  },
  {
    year: "Year 03",
    title: "Entrepreneurship",
    lede: "Sit in the founder's seat — build, pitch and run a venture of your own.",
    points: [
      "Launch and scale a real venture with seed support",
      "Six-month industry internship with a growing company",
      "Graduate with a portfolio, a network and often a running business",
    ],
    qualification: "NSQF-aligned qualification, recognised under NCVET",
  },
];

export const EXPERIENCES = [
  {
    tag: "Content Creator Challenge",
    title: "Become an influencer",
    d: "Build your own influencer brand from scratch and grow channels that reach thousands — learning marketing by living it.",
    img: "/images/campus/tour6.jpg",
  },
  {
    tag: "Dropshipping Challenge",
    title: "Found a venture at 18",
    d: "Build and scale your own business from zero and earn real revenue and profit before you finish year one.",
    img: "/images/campus/tour7.jpg",
  },
  {
    tag: "OUTCLASS",
    title: "Consult real businesses",
    d: "Step into a consultant's shoes — from cafés to car dealerships — and revamp, advise and grow local businesses in your city.",
    img: "/images/campus/tour8.jpg",
  },
  {
    tag: "Industry Trek",
    title: "Decode how business runs",
    d: "Tour iconic factories, unicorn startups and offices to see firsthand how companies operate on the ground.",
    img: "/images/campus/tour9.jpg",
  },
  {
    tag: "AIvolution",
    title: "Build with AI",
    d: "Master the AI tools that make you work smarter — automating tasks and solving real business problems with ease.",
    img: "/images/campus/apex-hall.jpg",
  },
  {
    tag: "Global Immersion",
    title: "Learn beyond borders",
    d: "Opt into international immersion trips to Singapore and Dubai for first-hand exposure to global business culture.",
    img: "/images/campus/safe-future.jpg",
  },
];

/* Real first-year students — already interning, earning, winning.
   Photos are square (~500px). */
export const STUDENTS = [
  { name: "Aarav Agarwal", org: "Campus Fund", img: "/images/students/aarav.jpg" },
  { name: "Chirag Agrahari", org: "The Energy Company", img: "/images/students/chirag.jpg" },
  { name: "Nishi Agarwal", org: "Tata Motors", img: "/images/students/nishi.jpg" },
  { name: "Daiwik Bansal", org: "BeerBiceps", img: "/images/students/daiwik.jpg" },
  { name: "Pranay Shah", org: "ShUtuP Marketing", img: "/images/students/pranay.jpg" },
  { name: "Avneesh Agarwal", org: "U-19 Cricket Trials, Sikkim", img: "/images/students/avneesh.jpg" },
  { name: "Harman Bhatia", org: "The Energy Company", img: "/images/students/harman.jpg" },
  { name: "Tanmay Nimani", org: "Finassurance", img: "/images/students/tanmay.jpg" },
  { name: "Aman Tamang", org: "GFS Realtors", img: "/images/students/amantamang.jpg" },
  { name: "Dwaipayan Ghosh", org: "Cook N Serve", img: "/images/students/dwaipayan.jpg" },
  { name: "Krish Agarwal", org: "Doodhvale Farms", img: "/images/students/krish.jpg" },
  { name: "Muskan Agarwal", org: "GFS Realtors", img: "/images/students/muskan.jpg" },
  { name: "Waibhavi Agarwal", org: "Voyage Hotel & Resort", img: "/images/students/waibhavi.jpg" },
  { name: "Satyajeet Singh", org: "Sona Wheels", img: "/images/students/satyajeet.jpg" },
  { name: "Nand Kumar", org: "Sona Wheels", img: "/images/students/nand.jpg" },
  { name: "Mayank Garg", org: "StratWings", img: "/images/students/mayank.jpg" },
  { name: "Prince Rastogi", org: "BuzzWave", img: "/images/students/prince.jpg" },
  { name: "Shaswat Goyal", org: "ITC Foods", img: "/images/students/shaswat.jpg" },
  { name: "Aisha Thapa", org: "Cook N Serve", img: "/images/students/aisha.jpg" },
  { name: "Viviana Lama", org: "WowNooks", img: "/images/students/viviana.jpg" },
  { name: "Vaibhav Agarwal", org: "Kamac Engineers", img: "/images/students/vaibhav.jpg" },
  { name: "Yugal Agarwal", org: "Kamac Engineers", img: "/images/students/yugal.jpg" },
  { name: "Angad Agarwal", org: "Kamac Engineers", img: "/images/students/angad.jpg" },
  { name: "Jay Goyal", org: "The Corporate Pot", img: "/images/students/jay.jpg" },
  { name: "Mohit Baheti", org: "The Corporate Pot", img: "/images/students/mohit.jpg" },
  { name: "Hardik Khandelwal", org: "The Corporate Pot", img: "/images/students/hardik.jpg" },
  { name: "Aditya Khaitan", org: "The Corporate Pot", img: "/images/students/aditya.jpg" },
];

/* Campus imagery for galleries — all clean, real campus shots.
   Eight images fill both the 2-col and 4-col grid without gaps. */
export const CAMPUS_IMAGES = [
  { src: "/images/campus/cafeteria.jpg", cap: "The Aspire lounge" },
  { src: "/images/campus/apex-hall.jpg", cap: "Apex Hall" },
  { src: "/images/campus/tour7.jpg", cap: "Breakout spaces" },
  { src: "/images/campus/tour6.jpg", cap: "The NEXIS lobby" },
  { src: "/images/campus/legacy-hall.jpg", cap: "Legacy Hall" },
  { src: "/images/campus/safe-future.jpg", cap: "Made to inspire" },
  { src: "/images/campus/tour9.jpg", cap: "Teamwork rooms" },
  { src: "/images/campus/tour8.jpg", cap: "Discussion pods" },
];

export const PRESS = [
  { name: "Himalayan Darpan", img: "/images/press/himalayan-darpan.jpg" },
  { name: "Janpath Samachar", img: "/images/press/janpath-samachar.jpg" },
  { name: "Siliguri Times", img: "/images/press/siliguri-times.jpg" },
  { name: "The Cord", img: "/images/press/the-cord.jpg" },
  { name: "Voice of Sikkim", img: "/images/press/voice-of-sikkim.jpg" },
];

export const FACULTY = [
  {
    name: "Sharad Agarwal",
    role: "Marketing Expert",
    img: "/images/ug/mentor-sharad.jpg",
    d: "Founder of Primsy India — building North Bengal's fastest-growing hub for digital marketing and design.",
  },
  {
    name: "Neeraj Sancheti",
    role: "Brand Strategist",
    img: "/images/ug/mentor-neeraj.jpg",
    d: "Founder of Kreativ Street — the mind behind 500+ campaigns, turning content into sales.",
  },
  {
    name: "Naveen Jain",
    role: "Sales Expert",
    img: "/images/ug/mentor-naveen.jpg",
    d: "Director of HOC & Global Optics — turning vision into success since 1989, trusted by 1M+ customers.",
  },

  /* ---- PLACEHOLDER ENTRIES ----------------------------------------------
     Slots so the mentor carousel can be reviewed at a realistic length.
     These are NOT real people — swap in each mentor's photo, name, role and
     one-line credential, or delete, before this goes live. */
  { name: "Mentor 04", role: "Finance Expert", img: "/images/ug/mentor-sharad.jpg", d: "Placeholder — replace with this mentor's company and one-line credential." },
  { name: "Mentor 05", role: "Operations Expert", img: "/images/ug/mentor-neeraj.jpg", d: "Placeholder — replace with this mentor's company and one-line credential." },
  { name: "Mentor 06", role: "Product Expert", img: "/images/ug/mentor-naveen.jpg", d: "Placeholder — replace with this mentor's company and one-line credential." },
  { name: "Mentor 07", role: "Growth Expert", img: "/images/ug/mentor-sharad.jpg", d: "Placeholder — replace with this mentor's company and one-line credential." },
  { name: "Mentor 08", role: "People & Culture", img: "/images/ug/mentor-neeraj.jpg", d: "Placeholder — replace with this mentor's company and one-line credential." },
];

/* Government / accreditation marks — white logos, shown on a dark strip. */
export const ACCREDITATION = [
  {
    name: "Ministry of Skill Development & Entrepreneurship",
    src: "/images/logos/skill-ministry.png",
  },
  {
    name: "MEPSC — Management, Entrepreneurship & Professional Skills Council",
    src: "/images/logos/mepsc-white.png",
  },
  { name: "DPIIT · Startup India", src: "/images/logos/startupindia-white.png" },
  { name: "NCVET", src: "/images/logos/ncvet.png" },
];

/* Recruiter & partner network logos (from the NEXIS site's own CDN). */
export const RECRUITER_LOGOS = [
  { name: "boAt", src: "/images/recruiters/boat-logo.svg" },
  { name: "Zomato", src: "/images/recruiters/zomato.svg" },
  { name: "Swiggy", src: "/images/recruiters/swiggy.svg" },
  { name: "Lenskart", src: "/images/recruiters/lenscart-logo.svg" },
  { name: "Snitch", src: "/images/recruiters/snitch-logo.svg" },
  { name: "Razorpay", src: "/images/recruiters/razorpay.svg" },
  { name: "JP Morgan", src: "/images/recruiters/jpmorgan.svg" },
  { name: "Deloitte", src: "/images/recruiters/delloite-logo.svg" },
  { name: "EY", src: "/images/recruiters/ey-logo.svg" },
  { name: "Flipkart", src: "/images/recruiters/flipkart.png" },
  { name: "upGrad", src: "/images/recruiters/upgrad-logo.svg" },
  { name: "Bajaj", src: "/images/recruiters/bajaj-logo.svg" },
  { name: "Cultfit", src: "/images/recruiters/culltfit-logo.svg" },
  { name: "Bombay Shaving Co.", src: "/images/recruiters/bombay-shaving-logo.svg" },
  { name: "Delhivery", src: "/images/recruiters/delhivery-logo.svg" },
  { name: "Motilal Oswal", src: "/images/recruiters/motilal-logo.svg" },
  { name: "BlissClub", src: "/images/recruiters/blissclub-logo.svg" },
];

export const OUTCOME_STATS = [
  { k: "75+", l: "companies in the recruiter & partner network" },
  { k: "50+", l: "founders and CXOs mentoring on campus" },
  { k: "6 mo", l: "mandatory industry internship built into the program" },
  { k: "1st yr", l: "students already interning, earning and winning" },
];

export const PATHWAYS = [
  {
    title: "Land a career, early",
    d: "Internships every year, résumé, LinkedIn and interview training, and career bootcamps backed by a 75+ recruiter network.",
    meta: "Careers",
  },
  {
    title: "Start your own venture",
    d: "From dropshipping challenges to launching real brands — with mentor guidance and seed support from the NEXIS incubation centre.",
    meta: "Entrepreneurship",
  },
  {
    title: "Pursue higher studies",
    d: "GMAT / CAT and study-abroad guidance, plus a portfolio of real work that makes your profile stand out for an MBA or master's.",
    meta: "Higher studies",
  },
];

export const CAMPUS_STATS = [
  { k: "10+", l: "sports contested across houses, every month" },
  { k: "30+", l: "events, competitions and club activities in 3 years" },
  { k: "7,500", l: "sq ft modern campus in the heart of Siliguri" },
];

export const FOUNDERS = [
  {
    name: "Ritesh Agarwal",
    role: "Founder — Tech leader & startup founder",
    img: "/images/founders/ritesh.png",
    creds: ["MBA, IIM Bangalore", "B.Tech, IIT Bombay", "Ex-consultant, ITC & BCG"],
  },
  {
    name: "Aman Choudhury",
    role: "Founder — Educationist & business leader",
    img: "/images/founders/aman.png",
    creds: ["MBA, ISB Hyderabad", "B.Com (Hons), SRCC Delhi", "Ex-consultant, ZS & EY"],
  },
];

export const ADMISSION_STEPS = [
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

export const FAQS = [
  {
    q: "What exactly is NEXIS?",
    a: "NEXIS is a private school of business and a skilling institution. It operates as a Training Body accredited by MEPSC — an awarding body recognised by NCVET — and offers certifications in business-management vocational courses aligned to the NSQF framework. NEXIS is not a college and does not confer degrees; each year of the program earns a nationally recognised, NSQF-aligned qualification instead.",
  },
  {
    q: "What qualification do I earn, and when?",
    a: "The three-year integrated program is structured so that each year is an independent NSQF-aligned vocational qualification recognised under NCVET. You earn a nationally recognised qualification at the end of every year — not only at the end of three years.",
  },
  {
    q: "Is this an online program?",
    a: "No. It is a full-time, on-campus program at our modern 7,500 sq ft campus in Siliguri, with an opt-in residential option through tie-ups with nearby accommodation.",
  },
  {
    q: "Who is eligible for the Batch of 2027?",
    a: "Students appearing for or having passed Class XII from a recognised board (CBSE, ISC, WBCHSE and others) are eligible — with or without Mathematics. There is no board-marks cut-off; we evaluate academics alongside extracurriculars, leadership and personal experience.",
  },
  {
    q: "What financing options are available?",
    a: "We partner with Axis Bank for collateral-free education loans at low interest with moratorium benefits, and offer semester-wise payment plans so you can pay in instalments. Finance should not be a barrier if you're selected.",
  },
  {
    q: "Is accommodation included?",
    a: "It's an opt-in residential program. NEXIS helps students who wish to live close to campus connect with nearby, secure accommodation. Accommodation charges are not part of the fee, and NEXIS does not charge students or residences for facilitating this.",
  },
];

/* ============================================================
   Contact, navigation and shared form data — used across the
   interior pages (contact, about, forms, legal, etc.)
   ============================================================ */

export const CONTACT = {
  entity: "NEXIS Education Hub Private Limited",
  brand: "NEXIS School of Business",
  phone: "+91 97331 27000",
  phoneHref: "tel:+919733127000",
  whatsapp: "https://wa.me/919733127000",
  email: "info@nexisschool.com",
  emails: [
    { label: "General", value: "info@nexisschool.com" },
    { label: "Admissions", value: "admissions@nexisschool.com" },
    { label: "Careers", value: "careerservices@nexisschool.com" },
  ],
  address: "5th Floor, Tradium Building, Check Post, Siliguri – 734001",
  addressLines: ["5th Floor, Tradium Building", "Check Post, Siliguri – 734001", "West Bengal, India"],
  hours: "Mon–Fri · 10:00 AM – 6:00 PM",
  applyHref: "/ug/admission-enquiry",
  brochureHref: "https://link.nexisschool.com/nexisbrochure",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
  ],
};

/* Grouped, real-route navigation used site-wide (homepage, /ug and every
   interior page). Items with `children` render as dropdowns; items with
   `href` render as plain links. Legal, thank-you and the SEO landing pages
   are intentionally not in the top nav. */
export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const SITE_NAV: NavItem[] = [
  {
    label: "About",
    children: [
      { label: "About NEXIS", href: "/about" },
      { label: "Our Campus", href: "/about/campus" },
      { label: "Recognition", href: "/recognition" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    label: "Programs",
    children: [
      { label: "UG in Business Management", href: "/ug" },
      { label: "PGP in Business & Technology", href: "/pgp" },
      { label: "School of AI", href: "/school-of-ai" },
      { label: "Life at NEXIS", href: "/ug/life-at-nexis" },
      { label: "Career Prospects", href: "/ug/career-prospects" },
    ],
  },
  {
    label: "Participate",
    children: [
      { label: "PitchTank", href: "/ug/pitch-tank" },
      { label: "18 under 18", href: "/18-under-18" },
      { label: "Himalayan Scholarship Test", href: "/ug/himalayan-scholarship-test" },
      { label: "Voice of NEXIS", href: "/voice-of-nexis" },
      { label: "The NEXIS Journal", href: "/blog" },
    ],
  },
  {
    label: "Admissions",
    children: [
      { label: "Admission Enquiry", href: "/ug/admission-enquiry" },
      { label: "Book a Campus Tour", href: "/ug/book-campus-tour" },
      { label: "Register for a Day @ NEXIS", href: "/ug/register-for-day-nexis" },
      { label: "Book a Founder Connect", href: "/ug/book-founder-connect" },
      { label: "Request a Callback", href: "/ug/request-callback" },
    ],
  },
  { label: "Contact", href: "/contact-us" },
];

export const FOOTER_EXPLORE = [
  { label: "About NEXIS", href: "/about" },
  { label: "The UG Program", href: "/ug" },
  { label: "Life at NEXIS", href: "/ug/life-at-nexis" },
  { label: "Campus", href: "/about/campus" },
  { label: "Recognition", href: "/recognition" },
  { label: "The NEXIS Journal", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact-us" },
];

export const FOOTER_LEGAL = [
  { label: "Privacy Policy", href: "/about/privacy" },
  { label: "Terms of Use", href: "/about/terms-of-use" },
];

/* Shared option lists for the enquiry / callback forms. */
export const FORM_OPTIONS = {
  grade: ["Class 11", "Class 12", "Class 12 Passout", "Other"],
  board: ["ISC", "CBSE", "WBCHSE", "NIOS", "Other"],
  stream: ["Commerce", "Science", "Humanities"],
  purpose: ["Admission Enquiry", "Brochure Download", "Campus Visit"],
  timeSlot: ["10 AM – 12 PM", "1 PM – 3 PM"],
  query: ["Admissions", "Careers", "Partnership", "General Enquiry"],
};
