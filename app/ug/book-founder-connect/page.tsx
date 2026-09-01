import type { Metadata } from "next";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FormLayout from "@/components/FormLayout";
import EnquiryForm from "@/components/EnquiryForm";
import { SITE_NAV, CONTACT, FOUNDERS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a Founder Connect | NEXIS School of Business",
  description:
    "Book a one-on-one conversation with the NEXIS founders. Talk through your ambitions, the three-year UG program, and whether NEXIS is the right fit for you.",
};

const POINTS = [
  "A candid one-on-one with founders from IIT, IIM, ISB and SRCC",
  "Understand the method, the curriculum and the outcomes first-hand",
  "Ask anything — admissions, careers, finance or campus life",
];

export default function BookFounderConnectPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <FormLayout
        kicker="Founder Connect"
        title={
          <>
            Meet the <span className="serif-em text-crimson">founders</span>.
          </>
        }
        lede="Book a one-on-one with the people who built NEXIS. Talk through your ambitions, the program and whether it's the right fit — founder to student."
        aside={
          <div className="space-y-7">
            <div className="grid grid-cols-2 overflow-hidden rounded-[3px] border border-line bg-ink shadow-[0_24px_60px_-44px_rgba(11,12,16,0.8)]">
              {FOUNDERS.map((founder, index) => (
                <figure
                  key={founder.name}
                  className={index === 0 ? "border-r border-white/10" : undefined}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={founder.img}
                      alt={founder.name}
                      fill
                      sizes="(max-width: 1023px) 50vw, 19vw"
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="border-t border-white/10 px-3 py-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white/75">
                    {founder.name}
                  </figcaption>
                </figure>
              ))}
            </div>
            <ul className="space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex gap-3 text-[0.92rem] leading-relaxed text-ink-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-[0.9rem] text-muted">
              Prefer to talk now? Call{" "}
              <a href={CONTACT.phoneHref} className="ulink font-medium text-ink-2">
                {CONTACT.phone}
              </a>
              .
            </p>
          </div>
        }
      >
        <EnquiryForm submitLabel="Book Founder Connect" defaultPurpose="Admission Enquiry" />
      </FormLayout>

      <SiteFooter />
    </main>
  );
}
