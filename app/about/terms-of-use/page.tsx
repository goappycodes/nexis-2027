import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import LegalDoc, { type LegalSection } from "@/components/LegalDoc";
import { SITE_NAV, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Use | NEXIS School of Business",
  description:
    "The terms governing your access to and use of the NEXIS School of Business website, services and affiliated platforms.",
};

const INTRO =
  'Welcome to NEXIS School of Business ("NEXIS," "we," "our," or "us"). By accessing or using our website, services, or any affiliated platforms (the "Services"), you agree to comply with and be bound by these Terms of Use ("Terms"). If you do not agree with these Terms, please do not use our Services.';

const SECTIONS: LegalSection[] = [
  {
    heading: "Acceptance of Terms",
    body: [
      "By using our website (www.nexisschool.com) and related services, you confirm that you have read, understood, and agreed to abide by these Terms. NEXIS reserves the right to modify these Terms at any time without prior notice. Your continued use of our Services after such modifications constitutes your acceptance of the revised Terms.",
    ],
  },
  {
    heading: "Eligibility",
    body: [
      "Our Services are intended for individuals who are at least 18 years old. If you are under 18, you may use our Services only with parental or guardian consent.",
    ],
  },
  {
    heading: "User Conduct",
    body: ["When accessing or using our Services, you agree to:"],
    list: [
      "Use the Services for lawful purposes only.",
      "Provide accurate and complete information when required.",
      "Respect the intellectual property rights of NEXIS and third parties.",
      "Not engage in fraudulent, abusive, or harmful activities.",
    ],
    list2Lead: "You agree not to:",
    list2: [
      "Violate any applicable laws or regulations.",
      "Use automated systems (bots, scrapers, etc.) to access or collect data from the Services.",
      "Disrupt or interfere with the integrity, security, or operation of our Services.",
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      "All content, materials, trademarks, logos, and intellectual property found on the NEXIS platform are owned by or licensed to NEXIS School of Business. You may not copy, modify, distribute, or exploit any content without prior written permission from NEXIS.",
    ],
  },
  {
    heading: "Registration & Account Security",
    body: ["If you register for an account on our platform:"],
    list: [
      "You are responsible for maintaining the confidentiality of your account credentials.",
      "You must notify us immediately of any unauthorized use of your account.",
      "NEXIS reserves the right to suspend or terminate your account if any fraudulent or suspicious activity is detected.",
    ],
  },
  {
    heading: "Payments & Refunds",
    body: [
      "Some of our Services may require payment (e.g., tuition fees, program enrollments, course materials). By making a payment, you agree to:",
    ],
    list: [
      "Provide accurate billing and payment information.",
      "Acknowledge that all fees are non-refundable unless explicitly stated otherwise.",
      "Abide by any additional policies regarding cancellations or refunds.",
    ],
  },
  {
    heading: "Disclaimer of Warranties",
    body: [
      'NEXIS provides the Services on an "as-is" and "as available" basis. While we strive to ensure high-quality educational content, we do not guarantee:',
    ],
    list: [
      "The accuracy, completeness, or reliability of any information.",
      "Uninterrupted or error-free access to our Services.",
      "Any particular outcomes or career results from using our Services.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: ["To the fullest extent permitted by law, NEXIS shall not be liable for:"],
    list: [
      "Any indirect, incidental, or consequential damages arising from your use of the Services.",
      "Any loss of data, revenue, or business opportunities due to reliance on our Services.",
      "Any technical failures, security breaches, or unauthorized access to your data.",
    ],
  },
  {
    heading: "Third-Party Links & Services",
    body: [
      "Our platform may contain links to third-party websites or services. NEXIS does not endorse, control, or take responsibility for the content, policies, or practices of these third parties. Use them at your own risk.",
    ],
  },
  {
    heading: "Termination of Access",
    body: [
      "We reserve the right to suspend or terminate access to our Services at our sole discretion, without notice, if you violate these Terms or engage in activities that harm NEXIS or its users.",
    ],
  },
  {
    heading: "Privacy Policy",
    body: [
      "Your use of our Services is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. By using our Services, you consent to our data practices as described in the Privacy Policy.",
    ],
  },
  {
    heading: "Governing Law & Jurisdiction",
    body: [
      "These Terms are governed by the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Siliguri, West Bengal.",
    ],
  },
  {
    heading: "Contact Information",
    body: [
      "If you have any questions about these Terms, please contact us at:",
      CONTACT.entity,
      `Email: ${CONTACT.email}`,
      `Phone: ${CONTACT.phone}`,
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <PageHero
        kicker="Legal"
        title={
          <>
            Terms of <span className="serif-em text-crimson">Use</span>
          </>
        }
        lede="The terms governing your access to and use of our website, services and affiliated platforms."
      />

      <LegalDoc intro={INTRO} sections={SECTIONS} />

      <div className="shell pb-16 sm:pb-24">
        <p className="mx-auto max-w-3xl border-t border-line pt-8 text-[0.95rem] leading-relaxed text-muted">
          By continuing to use our Services, you acknowledge that you have read,
          understood, and agreed to these Terms of Use. Thank you for choosing
          NEXIS School of Business.
        </p>
      </div>

      <SiteFooter />
    </main>
  );
}
