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

export const NAV_LINKS = [
  { label: "Program", href: "#program" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "How you learn", href: "#learn" },
  { label: "Faculty", href: "#faculty" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Campus life", href: "#campus" },
  { label: "Admissions", href: "#admissions" },
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
    img: "/images/campus/tour-main.jpg",
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

/* Campus imagery for galleries. */
export const CAMPUS_IMAGES = [
  { src: "/images/campus/life-at-nexis.jpg", cap: "Life at NEXIS", wide: true },
  { src: "/images/campus/apex-hall.jpg", cap: "Apex Hall" },
  { src: "/images/campus/legacy-hall.jpg", cap: "Legacy Hall" },
  { src: "/images/campus/cafeteria.jpg", cap: "The Cafeteria" },
  { src: "/images/campus/tour-main.jpg", cap: "On campus" },
  { src: "/images/campus/tour6.jpg", cap: "Everyday buzz" },
  { src: "/images/campus/tour7.jpg", cap: "Clubs & events" },
  { src: "/images/campus/tour8.jpg", cap: "Competitions" },
  { src: "/images/campus/tour9.jpg", cap: "Student life" },
  { src: "/images/campus/safe-future.jpg", cap: "A safe, modern campus" },
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
    d: "Founder of Primsy India — building North Bengal's fastest-growing hub for digital marketing and design.",
  },
  {
    name: "Neeraj Sancheti",
    role: "Brand Strategist",
    d: "Founder of Kreativ Street — the mind behind 500+ campaigns, turning content into sales.",
  },
  {
    name: "Naveen Jain",
    role: "Sales Expert",
    d: "Director of HOC & Global Optics — turning vision into success since 1989, trusted by 1M+ customers.",
  },
];

export const BRANDS = [
  "boAt",
  "Lenskart",
  "Zomato",
  "Snitch",
  "State Plate",
  "ITC",
  "TATA Motors",
  "BeerBiceps",
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
