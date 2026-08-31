/* ============================================================
   JSON-LD schema builders for per-page structured data (SEO/GEO).
   The canonical domain mirrors app/layout.tsx `metadataBase`.
   ============================================================ */
import type { FaqItem } from "@/components/FaqAccordion";
import { postUrl, type Vacancy, type FeaturedPost, type ArchivePost } from "@/lib/blog";

const SITE = "https://nexisschool.com";
const ORG_REF = { "@id": `${SITE}/#organization` };

const SILIGURI_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "5th Floor, Tradium Building, Check Post",
  addressLocality: "Siliguri",
  postalCode: "734001",
  addressRegion: "West Bengal",
  addressCountry: "IN",
} as const;

/** Flatten a rich FAQ answer (string | blocks) to plain text for schema. */
function faqText(a: FaqItem["a"]): string {
  if (typeof a === "string") return a;
  return a
    .map((b) => {
      if ("p" in b) return b.p;
      if ("h" in b) return b.h;
      if ("ul" in b) return b.ul.join(" ");
      if ("ol" in b) return b.ol.join(" ");
      return "";
    })
    .join(" ")
    .trim();
}

/** Course / program schema (Google "Course" rich result). */
export function courseSchema(o: {
  name: string;
  description: string;
  path: string;
  /** e.g. "Onsite", "Blended". */
  mode?: string;
  /** e.g. "P3Y", "P12M", "P3M". */
  duration?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: o.name,
    description: o.description,
    url: `${SITE}${o.path}`,
    provider: {
      "@type": "EducationalOrganization",
      name: "NEXIS School of Business",
      url: SITE,
      ...ORG_REF,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: o.mode ?? "Onsite",
      ...(o.duration ? { courseWorkload: o.duration } : {}),
      location: { "@type": "Place", name: "NEXIS Campus, Siliguri", address: SILIGURI_ADDRESS },
    },
  };
}

/** FAQPage schema from the same FaqItem[] the accordion renders. */
export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: faqText(i.a) },
    })),
  };
}

/** BreadcrumbList from a trail of {name, path}. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE}${t.path}`,
    })),
  };
}

/** JobPosting schema for one vacancy. */
export function jobPostingSchema(v: Vacancy) {
  const fullTime = /full/i.test(v.type);
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: v.title,
    description: v.summary,
    datePosted: v.date,
    employmentType: fullTime ? "FULL_TIME" : "INTERN",
    hiringOrganization: {
      "@type": "Organization",
      name: "NEXIS School of Business",
      sameAs: SITE,
      logo: `${SITE}/brand/nexis-logo-dark.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: SILIGURI_ADDRESS,
    },
    url: postUrl(v.slug),
    applicantLocationRequirements: { "@type": "Country", name: "India" },
  };
}

/** ItemList schema for the blog index. */
export function blogItemListSchema(posts: (FeaturedPost | ArchivePost)[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: postUrl(p.slug),
      name: p.title,
    })),
  };
}
