import type { Metadata } from "next";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FormLayout from "@/components/FormLayout";
import EnquiryForm from "@/components/EnquiryForm";
import { SITE_NAV, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a Campus Tour | NEXIS School of Business",
  description:
    "Book a tour of the NEXIS campus in the heart of Siliguri. Walk the studios, idea pods and social spaces, sit in on an information session, and see daily life at NEXIS.",
};

const POINTS = [
  "A guided walk through studios, idea pods and social spaces",
  "A UG information session with the admissions team",
  "See daily life at NEXIS for yourself, up close",
];

export default function BookCampusTourPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <FormLayout
        kicker="Campus Tour"
        title={
          <>
            See the campus for{" "}
            <span className="serif-em text-crimson">yourself</span>.
          </>
        }
        lede="Walk our modern campus in the heart of Siliguri, sit in on an information session, and get a real feel for how NEXIS works — every day."
        aside={
          <div className="space-y-7">
            <figure className="overflow-hidden rounded-[3px] border border-line bg-ink shadow-[0_24px_60px_-44px_rgba(11,12,16,0.8)]">
              <div className="relative aspect-square">
                <Image
                  src="/images/campus/apex-hall.jpg"
                  alt="The Apex Hall learning space at the NEXIS campus"
                  fill
                  sizes="(max-width: 1023px) 100vw, 38vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="flex items-center gap-3 border-t border-white/10 px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                Your first look at NEXIS
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
            <div className="space-y-1 text-[0.9rem] text-muted">
              <p>
                <span className="text-ink-2">Tours:</span> {CONTACT.hours}
              </p>
              <p>{CONTACT.address}</p>
            </div>
          </div>
        }
      >
        <EnquiryForm submitLabel="Book campus tour" defaultPurpose="Campus Visit" />
      </FormLayout>

      <SiteFooter />
    </main>
  );
}
