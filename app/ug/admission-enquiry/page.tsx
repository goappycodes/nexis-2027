import type { Metadata } from "next";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FormLayout from "@/components/FormLayout";
import EnquiryForm from "@/components/EnquiryForm";
import { SITE_NAV, CONTACT, BATCH } from "@/lib/content";

export const metadata: Metadata = {
  title: "Admission Enquiry — UG Program | NEXIS School of Business",
  description:
    "Enquire about the NEXIS three-year Undergraduate Program in Business Management. Get personalised guidance on admissions, curriculum and career outcomes for the Batch of 2027.",
};

const POINTS = [
  "Personalised admissions guidance for the three-year UG program",
  "No cut-off on Class XII board marks — we assess the whole person",
  "Scholarships available via the NEXGen Scholarship Test",
  "Collateral-free education loans and semester-wise payment plans",
];

export default function AdmissionEnquiryPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <FormLayout
        kicker={`Admissions · ${BATCH.cohort}`}
        title={
          <>
            Enquire about the{" "}
            <span className="serif-em text-crimson">UG program</span>.
          </>
        }
        lede="Get personalised guidance on admissions, curriculum and career outcomes for the three-year Undergraduate Program in Business Management."
        aside={
          <div className="space-y-7">
            <figure className="overflow-hidden rounded-[3px] border border-line bg-ink shadow-[0_24px_60px_-44px_rgba(11,12,16,0.8)]">
              <Image
                src="/images/ug/admissions.jpg"
                alt="Students presenting to a full NEXIS classroom"
                width={2560}
                height={1303}
                sizes="(max-width: 1023px) 100vw, 38vw"
                className="h-auto w-full"
              />
              <figcaption className="flex items-center gap-3 border-t border-white/10 px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                Student presentations at NEXIS
              </figcaption>
            </figure>
            <ul className="space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex gap-3 text-[0.92rem] leading-relaxed text-ink-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-[0.9rem] text-muted">
              Prefer to talk? Call{" "}
              <a href={CONTACT.phoneHref} className="ulink font-medium text-ink-2">
                {CONTACT.phone}
              </a>
              .
            </p>
          </div>
        }
      >
        <EnquiryForm submitLabel="Submit enquiry" defaultPurpose="Admission Enquiry" />
      </FormLayout>

      <SiteFooter />
    </main>
  );
}
