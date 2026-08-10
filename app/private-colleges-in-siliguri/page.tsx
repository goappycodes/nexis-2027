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
  title: "Best Private Colleges in Siliguri, Compared (2026) | NEXIS",
  description:
    "A clear, honest comparison of Siliguri's top private colleges — courses, learning focus and placements side by side. If your goal is a hands-on, industry-ready business career, see who leads.",
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
    d: "Not a traditional college — a new-generation business school and a smarter alternative to conventional college education. Learn business by doing it, backed by a strong placement record and close ties with leading businesses.",
  },
  {
    n: "02",
    name: "Inspiria Knowledge Campus",
    d: "Modern infrastructure — labs, media rooms and photography studios — with internships at leading companies.",
  },
  {
    n: "03",
    name: "Salesian College, Siliguri",
    d: "Comprehensive student development with extracurriculars, seminars and experienced, mentoring faculty.",
  },
  {
    n: "04",
    name: "Siliguri Institute of Technology",
    d: "Management students collaborate with technical peers, backed by strong corporate relationships.",
  },
  {
    n: "05",
    name: "IIAS School of Management",
    d: "Hospitality-management excellence, with internships and international placement exposure.",
  },
];

const CHECKLIST = [
  {
    t: "Industry exposure",
    d: "Look for real industry access during your studies, not just after you graduate.",
  },
  {
    t: "Faculty quality",
    d: "Faculty who've actually built and led in business, not only taught it.",
  },
  {
    t: "Infrastructure",
    d: "Modern classrooms, labs and spaces that support hands-on learning.",
  },
  {
    t: "Placement records",
    d: "A track record of placements and an active recruiter network.",
  },
];

const FAQS = [
  {
    q: "Which is the best private college in Siliguri?",
    a: "It depends on your goals. For a hands-on, industry-focused business education, NEXIS — a new-generation business school and an alternative to a traditional college — is our top recommendation, thanks to its practical curriculum, industry mentors and strong placement record.",
  },
  {
    q: "What course does NEXIS School of Business offer?",
    a: "A 3-Year Undergraduate Programme in Business Management, focused on Digital Sales & Marketing, Business Analytics and Entrepreneurship — plus 6 months of mandatory internship.",
  },
  {
    q: "How is NEXIS different from a traditional college?",
    a: "NEXIS is a new-gen business school, not a traditional college. You learn by doing — running real ventures, consulting live businesses and learning from 30+ industry leaders, with internships every year — so you graduate industry-ready, not just with a degree.",
  },
  {
    q: "What is the placement support at NEXIS?",
    a: "NEXIS supports strong placements through a 75+ recruiter network, career bootcamps, and résumé, LinkedIn and interview training from your first year.",
  },
  {
    q: "Who is eligible and how do I apply?",
    a: "Students who have completed or are appearing for Class XII are eligible. Fill the enquiry form to apply, download the brochure or raise an enquiry.",
  },
  {
    q: "When do admissions close?",
    a: "Admissions are open now with limited seats. Enquire early to secure your place.",
  },
];

export default function PrivateCollegesPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <PageHero
        kicker="Compare · Siliguri"
        title={
          <>
            The best private colleges in Siliguri,{" "}
            <span className="serif-em text-crimson">compared</span>.
          </>
        }
        lede="A clear, honest comparison of Siliguri's top private colleges — so you can pick the one that fits your goals. If that goal is a hands-on, industry-ready business career, here's who leads."
        actions={
          <>
            <a href="#pcs-enquire" className="btn btn-crimson">
              Get admission guidance
              <ArrowRight className="arrow" />
            </a>
            <a href={CONTACT.applyHref} className="btn btn-ghost">
              Apply now
              <ArrowUpRight className="arrow" />
            </a>
          </>
        }
      />

      {/* NEXIS #1 highlight */}
      <section className="shell pb-6">
        <Reveal className="rounded-[2px] border border-line bg-paper p-6 sm:p-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="kicker text-crimson">#1 · New-gen business school</span>
              <h2 className="mt-3 font-serif text-[clamp(1.6rem,3vw,2.2rem)] leading-tight">
                NEXIS School of Business
              </h2>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-2">
                A new-generation business school built for modern business
                management — a smarter alternative to a traditional college, where
                you practise what you learn, every single day.
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

      {/* Table 1 — top colleges */}
      <section className="shell py-8 sm:py-12">
        <Reveal className="mb-6 max-w-2xl">
          <h2 className="display text-[clamp(1.6rem,3.4vw,2.4rem)]">
            Top private colleges in Siliguri, compared
          </h2>
        </Reveal>
        <CompareTable
          columns={["Institution", "Popular courses", "Learning focus", "Placements"]}
          highlightRow={0}
          rows={[
            [
              "NEXIS School of Business",
              "3-Year UG in Business Management",
              "Industry-integrated, learn-by-doing",
              "Excellent",
            ],
            [
              "Inspiria Knowledge Campus",
              "BBA, BCA, Media Science",
              "Modern labs & media studios",
              "Strong",
            ],
            [
              "Salesian College, Siliguri",
              "BBA, BA, B.Com",
              "Holistic student development",
              "Strong",
            ],
            [
              "Siliguri Institute of Technology",
              "BBA, BCA, Engineering",
              "Tech + management exposure",
              "Strong",
            ],
            [
              "IIAS School of Management",
              "BBA, Hotel Management",
              "Hospitality management",
              "Strong",
            ],
          ]}
        />
        <p className="mt-3 text-[0.8rem] text-muted">
          NEXIS is a new-gen business school — an industry-focused alternative to
          a traditional college.
        </p>
      </section>

      {/* Table 2 — vs traditional */}
      <section className="shell py-8 sm:py-12">
        <Reveal className="mb-6 max-w-2xl">
          <h2 className="display text-[clamp(1.6rem,3.4vw,2.4rem)]">
            A traditional college vs the NEXIS business school
          </h2>
          <p className="mt-4 text-[1rem] leading-relaxed text-ink-2">
            Most colleges teach you about business; here you actually do business
            from year one — the difference that shows up on your CV.
          </p>
        </Reveal>
        <CompareTable
          columns={["Aspect", "Traditional college", "NEXIS Business School"]}
          highlightCol={2}
          rows={[
            [
              "Learning method",
              "Lectures and exams",
              "Run real ventures, consult live local businesses and take on real challenges from day one",
            ],
            [
              "Internship timing",
              "Final year",
              "Every year, plus a 75+ recruiter network driving a strong placement record",
            ],
            [
              "Industry access",
              "Meet industry after graduation",
              "30+ industry leaders mentor on campus during your studies",
            ],
            [
              "Graduation outcome",
              "Graduate with a degree",
              "Graduate with a running business, a portfolio and offers in hand",
            ],
          ]}
        />
      </section>

      {/* Shortlist in detail */}
      <section className="border-t border-line bg-paper-2/50">
        <div className="shell py-8 sm:py-16 lg:py-22">
          <Reveal className="mb-8 max-w-2xl">
            <h2 className="display text-[clamp(1.8rem,4vw,2.8rem)]">
              The best private colleges in Siliguri, in detail
            </h2>
          </Reveal>
          <div className="border-t border-line">
            {SHORTLIST.map((s, i) => (
              <Reveal
                key={s.name}
                delay={i * 60}
                className="flex flex-col gap-3 border-b border-line py-7 sm:flex-row sm:gap-8"
              >
                <div className="flex items-center gap-4 sm:w-64 sm:shrink-0">
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
            What to look for when you choose a college
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
          kicker="Admission guidance · No obligation"
          title={
            <>
              Talk to a NEXIS{" "}
              <span className="serif-em text-crimson">advisor</span>.
            </>
          }
          lede="Get personalised course and career guidance, clarity on fee structure and scholarship eligibility, plus the brochure and a campus visit."
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
          <EnquiryForm submitLabel="Get admission guidance" defaultPurpose="Admission Enquiry" />
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
            Ready to rethink college in{" "}
            <span className="serif-em">Siliguri</span>?
          </>
        }
        lede="See why students pick the NEXIS business school over a traditional college. Talk to our admissions team, or apply now — seats are limited."
        primary={{ label: "Apply now", href: CONTACT.applyHref }}
        secondary={{ label: "Get admission guidance", href: "#pcs-enquire" }}
      />

      <SiteFooter />
    </main>
  );
}
