import { CONTACT } from "@/lib/content";

/* Canonical brand domain — matches app/layout.tsx `metadataBase`. Structured
   data must reference stable, resolvable URLs, so it points at the production
   domain even while the rebuild is previewed elsewhere. */
const SITE = "https://nexisschool.com";

/* Site-wide structured data (JSON-LD) for search + generative engines (GEO).
   NEXIS does not confer degrees, so it is modelled as a generic
   `EducationalOrganization`, never `CollegeOrUniversity`. Page-level Course /
   FAQPage / BreadcrumbList schema is added on the individual pages. */
const ORGANIZATION = {
  "@type": "EducationalOrganization",
  "@id": `${SITE}/#organization`,
  name: "NEXIS School of Business",
  legalName: CONTACT.entity,
  alternateName: "NEXIS",
  url: SITE,
  logo: {
    "@type": "ImageObject",
    url: `${SITE}/brand/nexis-logo-dark.png`,
  },
  description:
    "NEXIS is a private, industry-integrated business school in Siliguri where students learn business by building it — mentored by founders and CXOs. Programs are NSQF-aligned and recognised through NCVET via MEPSC.",
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "5th Floor, Tradium Building, Check Post",
    addressLocality: "Siliguri",
    postalCode: "734001",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  areaServed: { "@type": "AdministrativeArea", name: "Siliguri, West Bengal" },
  sameAs: ["https://instagram.com/nexis.school"],
};

const WEBSITE = {
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: SITE,
  name: "NEXIS School of Business",
  publisher: { "@id": `${SITE}/#organization` },
  inLanguage: "en-IN",
};

const GRAPH = {
  "@context": "https://schema.org",
  "@graph": [ORGANIZATION, WEBSITE],
};

/** Injects the site-wide Organization + WebSite JSON-LD graph. Rendered once
    from the root layout. */
export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // Static, trusted content — safe to inline as JSON-LD.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(GRAPH) }}
    />
  );
}
