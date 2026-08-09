import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FormLayout from "@/components/FormLayout";
import EnquiryForm from "@/components/EnquiryForm";
import { SITE_NAV, CONTACT } from "@/lib/content";

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
          <div className="space-y-6">
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
