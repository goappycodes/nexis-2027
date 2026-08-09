import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import LegalDoc, { type LegalSection } from "@/components/LegalDoc";
import { SITE_NAV, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | NEXIS School of Business",
  description:
    "How NEXIS School of Business collects, uses, shares and protects your personal information across our website and services.",
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Information We Collect",
    body: ["We may collect the following types of information:"],
    list: [
      "Personal details such as name, email address, phone number, and address.",
      "Academic and professional information for admissions and enrollment purposes.",
      "Payment details for processing transactions.",
      "Usage data, such as IP address, browser type, and pages visited, for analytics purposes.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: ["We use the information we collect for the following purposes:"],
    list: [
      "To process and manage admissions applications.",
      "To communicate important updates and information about our programs.",
      "To improve our website and user experience through analytics.",
      "To comply with legal and regulatory requirements.",
    ],
  },
  {
    heading: "Sharing of Information",
    body: [
      "We do not sell your personal information to third parties. However, we may share your information with trusted service providers, such as payment processors and analytics tools, to facilitate our services. These third parties are obligated to protect your data and use it only for the intended purpose.",
    ],
  },
  {
    heading: "Data Security",
    body: [
      "We take reasonable measures to protect your information from unauthorized access, loss, misuse, or alteration. Despite our efforts, no system can guarantee complete security. Please ensure you protect your account credentials.",
    ],
  },
  {
    heading: "Your Rights",
    body: ["You have the right to:"],
    list: [
      "Access and update your personal information.",
      "Request the deletion of your personal data, subject to legal obligations.",
      "Opt-out of receiving marketing communications from us.",
    ],
  },
  {
    heading: "Cookies and Tracking",
    body: [
      "We use cookies and similar tracking technologies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.",
    ],
  },
  {
    heading: "Changes to This Privacy Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with the effective date.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      "If you have any questions about this Privacy Policy or your personal data, please contact us:",
      `NEXIS School of Business`,
      `Email: ${CONTACT.email}`,
      `Phone: ${CONTACT.phone}`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <PageHero
        kicker="Legal"
        title={
          <>
            Privacy <span className="serif-em text-crimson">Policy</span>
          </>
        }
        lede="How we collect, use and protect your information across nexisschool.com and our related services."
      />

      <LegalDoc sections={SECTIONS} />

      <SiteFooter />
    </main>
  );
}
