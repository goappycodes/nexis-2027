import type { Metadata } from "next";
import Image from "next/image";
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
          <a
            href={FORM}
            target="_blank"
            rel="noreferrer"
            className="btn btn-crimson w-full justify-center sm:w-auto"
          >
            Register your visit
            <ArrowUpRight className="arrow" />
          </a>
        }
      />

      <section className="shell pb-16 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <figure className="overflow-hidden rounded-[4px] border border-line bg-ink shadow-[0_28px_70px_-48px_rgba(11,12,16,0.8)]">
                <Image
                  src="/images/ug/life-5.jpg"
                  alt="NEXIS students with the four house flags on campus"
                  width={2560}
                  height={1920}
                  sizes="(max-width: 1023px) 100vw, 58vw"
                  className="h-auto w-full"
                />
                <figcaption className="flex items-center gap-3 border-t border-white/10 px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/70 sm:px-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                  Four houses. One campus.
                </figcaption>
              </figure>
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
              <a
                href={FORM}
                target="_blank"
                rel="noreferrer"
                className="btn btn-crimson w-full justify-center sm:w-auto"
              >
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
