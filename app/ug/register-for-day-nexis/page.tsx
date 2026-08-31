import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "@/components/icons";
import { SITE_NAV, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Register for a Day @ NEXIS — Spend a Day on Campus | NEXIS Siliguri",
  description:
    "Come spend a day at NEXIS in Siliguri. Sit in on live classes, meet current students and faculty, and experience campus culture first-hand before you apply.",
  alternates: { canonical: "/ug/register-for-day-nexis" },
};

const FORM = "https://forms.gle/RmCb1pBYzCBTBvYUA";

const WHO_FOR = [
  "Class 12 students and passouts curious about careers in business, entrepreneurship or startups.",
  "Parents who want to see how NEXIS prepares students for real-world success.",
  "Anyone considering applying to NEXIS.",
];

export default function DayAtNexisPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <PageHero
        kicker="Campus visit"
        title={
          <>
            Register for a Day <span className="serif-em text-crimson">@ NEXIS</span>
          </>
        }
        lede="Curious what it's really like to study at NEXIS? Come spend a day with us — sit in on live classes, interact with current students, meet the faculty and explore our campus culture first-hand."
        actions={
          <a href={FORM} target="_blank" rel="noreferrer" className="btn btn-crimson">
            Register your visit
            <ArrowUpRight className="arrow" />
          </a>
        }
      />

      <section className="shell pb-16 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] border border-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/campus/life-at-nexis.jpg"
                  alt="A day on the NEXIS campus in Siliguri"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-serif text-2xl leading-tight">Who is it for?</h2>
            </Reveal>
            <ul className="mt-6 space-y-4">
              {WHO_FOR.map((w, i) => (
                <Reveal key={w} delay={i * 80} className="flex gap-4 border-t border-line pt-4">
                  <span className="section-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[0.98rem] leading-relaxed text-ink-2">{w}</span>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={260} className="mt-8">
              <a href={FORM} target="_blank" rel="noreferrer" className="btn btn-crimson">
                Register Day @ NEXIS
                <ArrowUpRight className="arrow" />
              </a>
              <p className="mt-4 text-[0.85rem] leading-relaxed text-muted">
                Prefer to talk first? Call{" "}
                <a href={CONTACT.phoneHref} className="ulink text-ink-2">
                  {CONTACT.phone}
                </a>{" "}
                or email{" "}
                <a href={`mailto:${CONTACT.email}`} className="ulink text-ink-2">
                  {CONTACT.email}
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
