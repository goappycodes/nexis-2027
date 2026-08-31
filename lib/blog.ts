/* ============================================================
   Blog + Careers index data (from nexisschool.com WordPress).

   The full article bodies still live on the WordPress domain, so the
   rebuilt /blog and /careers indexes present the catalogue in the 2027
   design and deep-link each entry to its live permalink. When the blog
   is migrated to a CMS, swap `LIVE` for internal routes and render bodies.
   ============================================================ */

export const LIVE = "https://nexisschool.com";

/** Permalink for a post (root-level /%postname%/ on the live site). */
export const postUrl = (slug: string) => `${LIVE}/${slug}/`;

export type FeaturedPost = {
  title: string;
  slug: string;
  date: string;
  category: string;
  img: string;
  excerpt: string;
};

/** The 10 most recent articles — rich cards with image + excerpt. */
export const FEATURED_POSTS: FeaturedPost[] = [
  {
    title: "The Rise of Skill-First Business Schools in North Bengal",
    slug: "the-rise-of-skill-first-business-schools-in-north-bengal",
    date: "2026-08-29",
    category: "Articles",
    img: `${LIVE}/wp-content/uploads/2026/08/Rise-of-Skill-First-Business-Schools.png`,
    excerpt:
      "Choosing a business school after Class 12 is about more than picking a familiar name. For a growing number of students in North Bengal, skills come first.",
  },
  {
    title: "Fees of BBA Colleges in Siliguri: A Transparent Comparison",
    slug: "fees-of-bba-colleges-in-siliguri-a-transparent-comparison",
    date: "2026-08-27",
    category: "Articles",
    img: `${LIVE}/wp-content/uploads/2026/08/BBA-COLLEGEES-IN-SILIGURI.png`,
    excerpt:
      "Choosing where to study after Class 12 is about more than picking a name. A transparent look at what different options in Siliguri actually cost.",
  },
  {
    title:
      "The Food Story of Siliguri: Hiteshi Jalan on Flavours, Culture & Building a Cafe",
    slug: "the-food-story-of-siliguri",
    date: "2026-07-20",
    category: "CXO Insights",
    img: `${LIVE}/wp-content/uploads/2026/07/The-Food-Story-of-Siliguri-Hiteshi-Jalan.png`,
    excerpt:
      "Food creator Hiteshi Jalan on Siliguri's food culture — Bidhan Market memories, Sevoke Road's rise, street food, and the patience behind building a brand.",
  },
  {
    title:
      "100% First-Year Internships: How NEXIS Makes Students Industry-Ready",
    slug: "first-year-internships-nexis-siliguri",
    date: "2026-07-20",
    category: "Articles",
    img: `${LIVE}/wp-content/uploads/2026/07/First-Year-Internships-at-NEXIS-School-of-Business.png`,
    excerpt:
      "100% of NEXIS students who wanted internships secured one — 95% paid — in their first year, across 25+ companies. Here's how the model works.",
  },
  {
    title:
      "The Pressure to Succeed Before 23: What Gen-Z Business Students Really Think",
    slug: "pressure-to-succeed-before-23",
    date: "2026-07-20",
    category: "Articles",
    img: `${LIVE}/wp-content/uploads/2026/07/The-Pressure-to-Succeed-Before-23.png`,
    excerpt:
      "Is our generation in a hurry to succeed? NEXIS students unpack the pressure to 'make it' before 23 — and redefine what success means.",
  },
  {
    title: "First Semester at NEXIS, Unfiltered: Dropshipping, Consulting & AI",
    slug: "first-semester-at-nexis-unfiltered",
    date: "2026-07-18",
    category: "Articles",
    img: `${LIVE}/wp-content/uploads/2026/07/First-Semester-at-NEXIS-Unfiltered.png`,
    excerpt:
      "Founding-batch students on their first semester — running a ₹50,000 dropshipping business, consulting real companies, building apps with AI, and interning in year one.",
  },
  {
    title:
      "The Business of Tea in North Bengal: Inside Kusum Tea Estate with Vijay Mitraka",
    slug: "the-business-of-tea-north-bengal",
    date: "2026-07-18",
    category: "CXO Insights",
    img: `${LIVE}/wp-content/uploads/2026/07/The_Business_of_Tea_in_North_Bengal.png`,
    excerpt:
      "Tea director Vijay Mitraka on the business behind your chai — history, quality, pricing pressures, and how young people (and AI) can reshape the industry.",
  },
  {
    title:
      "Studying Abroad from Siliguri: Busting the Myths, with Arun Nagar",
    slug: "studying-abroad-from-siliguri",
    date: "2026-07-18",
    category: "CXO Insights",
    img: `${LIVE}/wp-content/uploads/2026/07/Studying-Abroad-from-Siliguri.png`,
    excerpt:
      "Global Reach founder Arun Nagar on studying abroad from Siliguri — busting the 'only for the rich' myth, choosing the right country, and education loans.",
  },
  {
    title: "Why We Built NEXIS: A Founder's Story of Rethinking Education",
    slug: "why-we-built-nexis-founder-story",
    date: "2026-07-13",
    category: "Articles",
    img: `${LIVE}/wp-content/uploads/2026/07/Why-We-Built-NEXIS-%E2%80%94-Founder-Ritesh-Agarwals-Story.png`,
    excerpt:
      "From engineer to founder: the story behind NEXIS School of Business, the new-gen business school reimagining how students in Siliguri learn business.",
  },
  {
    title:
      "From Forest Village to Gateway of Northeast India: The Story of Siliguri",
    slug: "siliguri-gateway-of-northeast-india",
    date: "2026-07-13",
    category: "Articles",
    img: `${LIVE}/wp-content/uploads/2026/07/How-Siliguri-Became-the-Gateway-of-Northeast-India.png`,
    excerpt:
      "How did Siliguri go from a colonial-era forest village to the 'Gateway of Northeast India'? NEXIS students trace the history, geography and trade that built it.",
  },
];

export type ArchivePost = { title: string; slug: string; date: string };

/** The remaining published articles — compact archive list, linked to live. */
export const ARCHIVE_POSTS: ArchivePost[] = [
  { title: "The Siliguri Corridor (Chicken's Neck): Why This Tiny Strip Is India's Lifeline", slug: "siliguri-corridor-chickens-neck", date: "2026-07-13" },
  { title: "Sell in 30 Seconds: How NEXIS Students Learn to Pitch and Sell for Real", slug: "how-nexis-students-learn-pitch-sell", date: "2026-07-10" },
  { title: "NEXIS School of Business: Everything You Need to Know in 2026", slug: "nexis-school-of-business", date: "2026-07-10" },
  { title: "Inside the NEXIS Dropshipping Mela: Where 18-Year-Olds Become Entrepreneurs", slug: "nexis-dropshipping-mela-young-entrepreneurs", date: "2026-07-09" },
  { title: "How to Win a NEXIS Scholarship: Inside the NES Awards & Selection Rounds", slug: "how-to-win-a-nexis-scholarship", date: "2026-07-08" },
  { title: "What Business Students Learned from a Cinema Industry Visit in Siliguri", slug: "cinema-industry-visit-nexis-school-business", date: "2026-07-08" },
  { title: "“She's Excited to Go”: What Parents Notice After a Child Joins NEXIS", slug: "what-parents-say-about-nexis", date: "2026-07-08" },
  { title: "From Siliguri to Real Companies: The Stories Behind Year 1 Internships", slug: "first-year-student-internships", date: "2026-06-11" },
  { title: "PitchTank: The Startup Pitching Event That Brought Shark Tank to Siliguri", slug: "pitchtank-siliguri-startup-event", date: "2026-06-11" },
  { title: "Practical Business Education: Why Students From Family Businesses Are Choosing It", slug: "practical-business-education-family-business", date: "2026-06-10" },
  { title: "How NEXIS Students Got Internships at ITC, Tata Motors & BeerBiceps in Year 1", slug: "bba-internships-siliguri", date: "2026-06-08" },
  { title: "BBA After Science: Why More Students Are Choosing Business Over Engineering", slug: "bba-after-science", date: "2026-06-08" },
  { title: "What Can You Actually Do After BBA? — Career Options & Scope", slug: "bba-career-options", date: "2026-05-28" },
  { title: "Confused After Class 12? You're Not Lost. You're Just at the Starting Line", slug: "confused-after-class-12-career-starting-point", date: "2026-05-02" },
  { title: "Degree vs Skills After Class 12: What Really Matters for Students in Siliguri", slug: "degree-vs-skills-after-class-12", date: "2026-05-02" },
  { title: "BBA vs B.Com: The Question Almost Every Home Is Asking Right Now", slug: "bba-vs-bcom-after-class-12", date: "2026-04-06" },
  { title: "Career Options After 12th: A Simple Guide to What Each Path Really Offers", slug: "career-options-after-12th-a-simple-guide-to-what-each-path-really-offers", date: "2026-04-06" },
  { title: "Top Career Options After Class 12th: What Actually Makes Sense Today?", slug: "top-career-options-after-class-12th-what-actually-makes-sense-today", date: "2026-04-03" },
  { title: "MAD4MARKET: The First Move by NEXIS Marketing Club, And It Hit Right", slug: "mad4market-the-first-move-by-nexis-marketing-club-and-it-hit-right", date: "2026-03-28" },
  { title: "Boards Are Over. Now Everyone Has Advice. But What Do You Choose?", slug: "what-to-choose-after-boards", date: "2026-03-23" },
  { title: "After 12th, The Real Question Isn't “What Course?” It's “What Will You Actually Learn?”", slug: "after-12th-the-real-question-isnt-what-course-its-what-will-you-actually-learn", date: "2026-03-04" },
  { title: "Why Management Courses in Siliguri Are Suddenly Getting So Much Attention", slug: "why-management-courses-in-siliguri-are-suddenly-getting-so-much-attention", date: "2026-03-04" },
  { title: "Your Degree Isn't the Finish Line. It's the Moment the Real Test Starts.", slug: "your-degree-isnt-the-finish-line-its-the-moment-the-real-test-starts", date: "2026-02-16" },
  { title: "From the Hills to the Hub: Why Students Are Choosing Siliguri to Shape Their Future", slug: "from-the-hills-to-the-hub-why-students-are-choosing-siliguri-to-shape-their-future", date: "2026-02-16" },
  { title: "NEXIS School of AI: Reimagining AI Education for School Students in Siliguri", slug: "nexis-school-of-ai-reimagining-ai-education-for-school-students-in-siliguri", date: "2026-01-18" },
  { title: "Where the NEXIS Team Comes Together", slug: "where-the-nexis-team-comes-together", date: "2026-01-07" },
  { title: "How NEXIS Chose to Begin: The Founding Cohort on Record", slug: "how-nexis-chose-to-begin-the-founding-cohort-on-record", date: "2025-12-30" },
  { title: "From Christmas Lights to Customer Conversations: A NEXMAS Story", slug: "from-christmas-lights-to-customer-conversations-a-nexmas-story", date: "2025-12-30" },
  { title: "When Students Stop Waiting and Start Building: Inside NEXIS Hackathons", slug: "when-students-stop-waiting-and-start-building-inside-nexis-hackathons-that-changed-the-game", date: "2025-12-19" },
  { title: "How a Papad Sparked a Startup: A Webinar with Raghav Jhawar at NEXIS", slug: "how-a-papad-sparked-a-startup-a-webinar-with-raghav-jhawar-at-nexis", date: "2025-12-14" },
  { title: "Siliguri Is Becoming East India's Opportunity Capital — And Students Are Noticing", slug: "siliguri-is-becoming-east-indias-big-opportunity-city-and-students-are-finally-noticing", date: "2025-12-05" },
  { title: "Siliguri: The City No One Expected — But Everyone Now Needs", slug: "siliguri-the-city-no-one-expected-but-everyone-now-needs", date: "2025-11-30" },
  { title: "Top Reasons to Study Business Management After 12th", slug: "study-business-management-after-12th-reasons", date: "2025-11-28" },
  { title: "NEXIS 3-Year Business Management — Why It's the Smartest Choice After 12th", slug: "nexis-3yr-business-management-smartest-choice", date: "2025-11-28" },
  { title: "Top 10 Myths About Business Management Every 12th-Pass Student Should Ignore", slug: "myths-about-business-management-course", date: "2025-11-26" },
  { title: "Introducing the Post Graduate Program in Business & Technology at NEXIS", slug: "the-program-that-builds-the-next-generation-of-leaders-introducing-the-post-graduate-program-in-business-technology-at-nexis", date: "2025-11-24" },
  { title: "FRESHERS 2025: Where It All Began — The First Chapter of NEXIS", slug: "freshers-2025-where-it-all-began-the-first-chapter-of-nexis", date: "2025-11-21" },
  { title: "Building a Brand That Speaks Gen Z: The boAt Way — Webinar by Prejit Narayan", slug: "building-a-brand-that-speaks-gen-z-the-boat-way-webinar-by-prejit-narayan-chief-business-officer-boat", date: "2025-11-06" },
  { title: "Beyond Classrooms: How Student-Led Clubs at NEXIS Are Shaping Leaders", slug: "beyond-classrooms-how-student-led-clubs-at-nexis-are-shaping-the-next-generation-of-leaders", date: "2025-11-01" },
  { title: "A Festival of Light, Love, and Belonging — Diwali at NEXIS, Siliguri", slug: "a-festival-of-light-love-and-belonging-diwali-at-nexis-school-of-business-siliguri", date: "2025-10-27" },
  { title: "The Truth About Business Revenue in Siliguri: Growth Is About Mindset", slug: "the-truth-about-business-revenue-in-siliguri-growth-isnt-about-money-its-about-mindset", date: "2025-10-23" },
  { title: "Beyond Marks: Why the Future of Business Education Is Being Written in Siliguri", slug: "beyond-marks-why-the-future-of-business-education-is-being-written-in-siliguri", date: "2025-10-13" },
  { title: "Why Brands Must Be Built Before Products: Insights from Dr. Sanjay Arora", slug: "why-brands-must-be-built-before-products-insights-from-dr-sanjay-arora-the-mind-behind-the-viral-doms-pencils-campaign", date: "2025-10-10" },
  { title: "NEXIS Undergraduate Orientation of the Founding Cohort 2025", slug: "nexis-undergraduate-orientation-of-the-founding-cohort-2025-the-first-ever-induction-at-nexis", date: "2025-10-08" },
  { title: "Pre-Orientation Day at NEXIS", slug: "pre-orientation-day-at-nexis", date: "2025-06-29" },
  { title: "Top Careers for Young Women in the 21st Century in India", slug: "top-careers-women-india", date: "2025-05-27" },
  { title: "How to Decide Between a Traditional B.Com and NEXIS", slug: "traditional-b-com-vs-nexis", date: "2025-05-19" },
  { title: "NEXIS Admission Process: A Step-by-Step Guide for 2025 Applicants", slug: "admission-process-2025-applicants", date: "2025-05-19" },
  { title: "Traditional BBA vs. NEXIS 3-yr Business Management: The Smarter Choice", slug: "traditional-bba-vs-nexis", date: "2025-03-03" },
  { title: "Guide to Choosing the Right Path for Sikkim Students", slug: "guide-to-choosing-right-college-sikkim-students", date: "2025-03-01" },
  { title: "List of Best Career Paths After Class 12", slug: "career-options-after-12th", date: "2025-02-20" },
  { title: "Top Placement-Based Institutions in Siliguri", slug: "placement-based-colleges-in-siliguri", date: "2025-01-30" },
  { title: "Affordable Business Programs in Siliguri", slug: "affordable-business-colleges-in-siliguri", date: "2025-01-29" },
  { title: "Best Management Courses in Siliguri", slug: "management-courses-in-siliguri", date: "2025-01-20" },
];

export type Vacancy = {
  title: string;
  slug: string;
  date: string;
  location: string;
  type: string;
  summary: string;
};

/** Open roles (WP "Vacancies @ NEXIS" category). Full JD lives on the live
    permalink; applications go to careerservices@nexisschool.com. */
export const VACANCIES: Vacancy[] = [
  {
    title: "Student Engagement Executive",
    slug: "student-engagement-executive",
    date: "2026-08-03",
    location: "Siliguri · Work from office",
    type: "Internship · 4–6 months · Stipend",
    summary:
      "For confident, energetic people who enjoy meeting people and building relationships — coordinating school visits, career workshops, seminars and admission events, and engaging prospective students, parents and schools.",
  },
  {
    title: "Digital Marketing Intern",
    slug: "digital-marketing-intern",
    date: "2026-08-03",
    location: "Siliguri · Work from office",
    type: "Internship · 4–6 months · Stipend",
    summary:
      "For creative, driven people who want to go beyond posting — real experience in branding, content strategy and AI-powered marketing across Instagram, LinkedIn, YouTube and WhatsApp.",
  },
  {
    title: "Founder's Office Intern — Events & Admissions",
    slug: "hiring-for-founders-office-intern-events-and-admissions",
    date: "2026-02-12",
    location: "NEXIS, Siliguri campus",
    type: "Internship",
    summary:
      "Work closely with the founding team on campus events, student engagement and the admissions journey — a blend of event execution, student interaction, operations and startup problem-solving.",
  },
  {
    title: "Founder's Office Intern — Branding & Marketing",
    slug: "hiring-for-founders-office-intern-branding-and-marketing",
    date: "2026-02-12",
    location: "NEXIS, Siliguri campus",
    type: "Internship",
    summary:
      "Work closely with the founding team to build and grow the NEXIS brand — a blend of strategy, creativity, marketing execution and startup problem-solving.",
  },
  {
    title: "Head of Events & Resident Faculty",
    slug: "hiring-for-head-of-events-resident-faculty",
    date: "2025-03-10",
    location: "NEXIS, Siliguri campus",
    type: "Full-time",
    summary:
      "Drive events, extracurriculars and student well-being while serving as resident faculty in a core domain — Marketing, Finance, HR, Operations or Business Strategy.",
  },
];
