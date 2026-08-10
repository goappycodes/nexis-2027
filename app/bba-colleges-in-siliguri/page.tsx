import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CompareTable from "@/components/CompareTable";
import FormLayout from "@/components/FormLayout";
import EnquiryForm from "@/components/EnquiryForm";
import CalloutCta from "@/components/CalloutCta";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { SITE_NAV, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Best BBA Colleges in Siliguri, Compared (2026) | NEXIS",
  description:
    "A clear, honest comparison of Siliguri's top BBA colleges — courses, focus and outcomes side by side. If your goal is a hands-on, industry-ready business career, see who leads.",
};

const HIGHLIGHTS = [
  { k: "6-Month", l: "internship" },
  { k: "75+", l: "recruiters" },
  { k: "30+", l: "industry mentors" },
];

const SHORTLIST = [
  {
    n: "01",
    name: "NEXIS School of Business",
    badge: "Top recommended",
    d: "A next-generation business school offering a unique 3-Year Undergraduate Programme in Business Management, with specialisations in Marketing & Business Development, Finance, and Entrepreneurship & Family Business — an industry-focused alternative to a traditional BBA. NEXIS provides a 3-year industry certification and does not confer a degree itself; students are encouraged to parallelly enrol for a BBA/degree from a UGC-recognised university, so they graduate with both a recognised degree and industry-ready skills.",
  },
  {
    n: "02",
    name: "Inspiria Knowledge Campus",
    d: "Among the best-known BBA colleges in Siliguri — modern infrastructure, an active entrepreneurship cell and consistent placement records.",
  },
  {
    n: "03",
    name: "Salesian College, Siliguri",
    d: "Affiliated with the University of North Bengal; holistic education, values, soft skills and vibrant student life.",
  },
  {
    n: "04",
    name: "Siliguri Institute of Technology (SIT)",
    d: "Affiliated with MAKAUT; hands-on training, project-based learning and campus recruitment.",
  },
  {
    n: "05",
    name: "North Bengal St. Xavier's College",
    d: "Offers a BBA at its Siliguri campus, with academic excellence and ethical values.",
  },
];

const CHECKLIST = [
  {
    t: "Industry exposure",
    d: "You want to be employable the day you graduate, not just holding a certificate.",
  },
  {
    t: "Placements & career scope",
    d: "A BBA is only as valuable as the doors it opens — look at the recruiter network.",
  },
  {
    t: "Faculty & mentorship",
    d: "Learn from people who've built and led in business, not only taught it.",
  },
  {
    t: "Recognition & degree",
    d: "The strongest option pairs a UGC-recognised degree with genuinely industry-ready skills.",
  },
];

const FAQS = [
  {
    q: "Which is the best BBA college in Siliguri?",
    a: "Inspiria, Salesian, SIT and North Bengal St. Xavier's are all strong choices. For a hands-on, high-placement business education, NEXIS — a new-generation business school and an alternative to a traditional BBA — is our top recommendation.",
  },
  {
    q: "Is NEXIS a BBA college?",
    a: "NEXIS is a business school, not a traditional BBA college. It offers a 3-Year Undergraduate Programme in Business Management with a 3-year industry certification, and does not confer a degree itself. Students are encouraged to parallelly enrol for a BBA/degree from a UGC-recognised university.",
  },
  {
    q: "What specialisations does the NEXIS programme offer?",
    a: "Marketing & Business Development, Finance, and Entrepreneurship & Family Business — each taught with a hands-on, industry-focused approach and a 6-month specialised internship.",
  },
  {
    q: "What is the eligibility for BBA admission in Siliguri?",
    a: "Completed or appearing Class XII, any stream. At NEXIS, there is no minimum marks cut-off — admission is via the NEXGen Test and an interview with the founders and leadership team.",
  },
  {
    q: "BBA or the NEXIS programme — which is better for a career?",
    a: "A traditional BBA gives you a degree; the NEXIS programme gives you a UGC-recognised degree (via a partner university) plus real, industry-ready skills and mentorship from 30+ industry leaders.",
  },
  {
    q: "When do BBA admissions close in Siliguri?",
    a: "Admissions for the upcoming batch are open now, with limited seats. Enquire early to secure your place.",
  },
];

export default function BbaCollegesPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <PageHero
        kicker="Compare · Siliguri"
        title={
          <>
            The best BBA colleges in Siliguri,{" "}
            <span className="serif-em text-crimson">compared</span>.
          </>
        }
        lede="A clear, honest comparison of Siliguri's top BBA colleges — courses, focus and outcomes side by side. If your goal is a hands-on, industry-ready business career, here's who leads."
        actions={
          <>
            <a href="#pcs-enquire" className="btn btn-crimson">
              Enquire about NEXIS
              <ArrowRight className="arrow" />
            </a>
            <a href="/ug" className="btn btn-ghost">
              See the 3-year curriculum
              <ArrowUpRight className="arrow" />
            </a>
          </>
        }
      />

      {/* At a glance / NEXIS highlight */}
      <section className="shell pb-6">
        <Reveal className="rounded-[2px] border border-line bg-paper p-6 sm:p-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="kicker text-crimson">At a glance</span>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-2">
                Every option here is a genuinely good choice for business studies.
                The right fit depends on your goals — note that NEXIS is a new-gen
                business school and an industry-focused alternative to a
                traditional BBA, rather than a conventional degree college.
              </p>
            </div>
            <div className="grid shrink-0 grid-cols-3 gap-6">
              {HIGHLIGHTS.map((h) => (
                <div key={h.l}>
                  <p className="display text-[clamp(1.4rem,3vw,2rem)] text-crimson">
                    {h.k}
                  </p>
                  <p className="mt-1 text-[0.76rem] leading-tight text-ink-2">
                    {h.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* vs table */}
      <section className="shell py-8 sm:py-12">
        <Reveal className="mb-6 max-w-2xl">
          <h2 className="display text-[clamp(1.6rem,3.4vw,2.4rem)]">
            A traditional BBA vs the NEXIS business school
          </h2>
          <p className="mt-4 text-[1rem] leading-relaxed text-ink-2">
            A traditional BBA teaches you about business. NEXIS is built so you
            actually do business from year one — the difference that shows up on
            your CV.
          </p>
        </Reveal>
        <CompareTable
          columns={["Criterion", "Traditional BBA", "NEXIS Business School"]}
          highlightCol={2}
          rows={[
            [
              "Learning approach",
              "Mostly lectures and exams",
              "Run real ventures, consult live businesses and take on real challenges from year one",
            ],
            [
              "Internships & placements",
              "Start in the final year",
              "Every year, plus a 75+ recruiter network",
            ],
            [
              "Industry interaction",
              "Meet industry after graduation",
              "30+ industry leaders mentor on campus",
            ],
            [
              "Graduation outcome",
              "Graduate with a BBA degree",
              "UGC-recognised degree + industry-ready skills",
            ],
          ]}
        />
      </section>

      {/* Shortlist */}
      <section className="border-t border-line bg-paper-2/50">
        <div className="shell py-8 sm:py-16 lg:py-22">
          <Reveal className="mb-8 max-w-2xl">
            <h2 className="display text-[clamp(1.8rem,4vw,2.8rem)]">
              The best BBA colleges in Siliguri, in detail
            </h2>
          </Reveal>
          <div className="border-t border-line">
            {SHORTLIST.map((s, i) => (
              <Reveal
                key={s.name}
                delay={i * 60}
                className="flex flex-col gap-3 border-b border-line py-7 sm:flex-row sm:gap-8"
              >
                <div className="flex items-start gap-4 sm:w-64 sm:shrink-0">
                  <span className="section-index">{s.n}</span>
                  <div>
                    <h3 className="font-serif text-lg leading-tight sm:text-xl">
                      {s.name}
                    </h3>
                    {s.badge && (
                      <span className="mt-1 inline-block rounded-full bg-crimson/10 px-2.5 py-0.5 text-[0.68rem] font-medium uppercase tracking-[0.08em] text-crimson">
                        {s.badge}
                      </span>
                    )}
                  </div>
                </div>
                <p className="flex-1 text-[0.96rem] leading-relaxed text-ink-2">
                  {s.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="shell py-8 sm:py-16 lg:py-22">
        <Reveal className="mb-8 max-w-2xl">
          <h2 className="display text-[clamp(1.8rem,4vw,2.8rem)]">
            What to look for in a BBA college
          </h2>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-[2px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {CHECKLIST.map((c, i) => (
            <Reveal key={c.t} delay={i * 70} className="bg-paper p-7">
              <p className="display text-2xl text-crimson">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-lg leading-tight">{c.t}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-2">
                {c.d}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Enquiry */}
      <div id="pcs-enquire" className="scroll-mt-24 border-t border-line bg-paper-2/50">
        <FormLayout
          kicker="Get guidance · No obligation"
          title={
            <>
              Enquire about{" "}
              <span className="serif-em text-crimson">NEXIS</span>.
            </>
          }
          lede="Get personalised course and career guidance, clarity on fees and scholarship eligibility, plus the brochure and a campus visit."
          aside={
            <ul className="space-y-3">
              {[
                "Personalised course & career guidance",
                "Fee structure & scholarship eligibility",
                "Brochure & campus visit",
              ].map((b) => (
                <li key={b} className="flex gap-3 text-[0.92rem] text-ink-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          }
        >
          <EnquiryForm submitLabel="Get guidance" defaultPurpose="Admission Enquiry" />
        </FormLayout>
      </div>

      {/* FAQ */}
      <section className="shell py-8 sm:py-16 lg:py-22">
        <Reveal className="mb-8 max-w-2xl">
          <h2 className="display text-[clamp(1.8rem,4vw,2.8rem)]">
            Frequently asked questions
          </h2>
        </Reveal>
        <div className="border-t border-line">
          {FAQS.map((f) => (
            <Reveal key={f.q} className="border-b border-line py-6">
              <h3 className="font-serif text-lg leading-snug sm:text-xl">{f.q}</h3>
              <p className="mt-3 max-w-3xl text-[0.96rem] leading-relaxed text-ink-2">
                {f.a}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <CalloutCta
        kicker="Admissions open"
        title={
          <>
            Ready to start your business career in{" "}
            <span className="serif-em">Siliguri</span>?
          </>
        }
        lede="See why students choose the NEXIS business school over a traditional BBA. Talk to our admissions team, or apply now — seats are limited."
        primary={{ label: "Apply now", href: CONTACT.applyHref }}
        secondary={{ label: "Enquire about NEXIS", href: "#pcs-enquire" }}
      />

      <SiteFooter />
    </main>
  );
}
