import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import LegalDoc, { type LegalSection } from "@/components/LegalDoc";
import { SITE_NAV, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Late Payment of Fees Policy | NEXIS School of Business",
  description:
    "The NEXIS late-payment policy: grace period, tiered late charges, consequences of non-payment, special considerations and accepted modes of payment.",
  alternates: { canonical: "/ug/late-payment-of-fees-policy" },
  robots: { index: false, follow: true },
};

const INTRO =
  "In order to ensure smooth academic operations, students are required to adhere strictly to the prescribed fee payment schedules. The following terms shall apply in case of late payment:";

const SECTIONS: LegalSection[] = [
  {
    heading: "Grace Period",
    body: ["A grace period of 7 days from the due date shall be permitted without penalty."],
  },
  {
    heading: "Late Fee Charges",
    list: [
      "8–15 days late: ₹500 flat late fee.",
      "16–30 days late: ₹1,000 flat late fee.",
      "Beyond 30 days: ₹2,000 late fee and potential suspension of academic access until dues are cleared.",
    ],
  },
  {
    heading: "Consequences of Continued Non-Payment",
    body: [
      "Failure to clear dues within 45 days of the due date may lead to temporary suspension from classes, withholding of hall tickets / admit cards, and/or cancellation of enrollment.",
    ],
  },
  {
    heading: "Special Considerations",
    body: [
      "Requests for extension due to medical or exceptional reasons must be submitted in writing along with supporting documents, and are subject to approval by the Admissions / Accounts Department.",
    ],
  },
  {
    heading: "Mode of Payment",
    body: [
      "All late payments must be cleared through the designated online payment gateway or at the NEXIS accounts office.",
    ],
  },
];

export default function LatePaymentPolicyPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <PageHero
        kicker="Fees"
        title={
          <>
            Late Payment of Fees <span className="serif-em text-crimson">Policy</span>
          </>
        }
        lede="Please adhere to the prescribed fee-payment schedules. The following terms apply in the case of late payment."
      />

      <LegalDoc intro={INTRO} sections={SECTIONS} />

      <div className="shell pb-16 sm:pb-24">
        <p className="mx-auto max-w-3xl border-t border-line pt-8 text-[0.95rem] leading-relaxed text-muted">
          The institution reserves the right to revise the late-fee charges or
          related terms at its discretion. For any query on fees, write to{" "}
          <a href={`mailto:${CONTACT.email}`} className="ulink text-ink-2">
            {CONTACT.email}
          </a>
          .
        </p>
      </div>

      <SiteFooter />
    </main>
  );
}
