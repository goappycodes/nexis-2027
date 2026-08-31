import type { MetadataRoute } from "next";

/* The live deployment. Swap to https://nexisschool.com when the custom
   domain cuts over to this site (also update app/robots.ts). */
const BASE = "https://nexis-2027.vercel.app";
const lastModified = "2026-08-09";

const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/ug", priority: 0.9 },
  { path: "/pgp", priority: 0.9 },
  { path: "/school-of-ai", priority: 0.9 },
  { path: "/private-colleges-in-siliguri", priority: 0.8 },
  { path: "/bba-colleges-in-siliguri", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/about/campus", priority: 0.7 },
  { path: "/ug/life-at-nexis", priority: 0.7 },
  { path: "/ug/career-prospects", priority: 0.7 },
  { path: "/recognition", priority: 0.7 },
  { path: "/events", priority: 0.6 },
  { path: "/voice-of-nexis", priority: 0.6 },
  { path: "/voice-of-nexis/registration", priority: 0.5 },
  { path: "/ug/pitch-tank", priority: 0.6 },
  { path: "/18-under-18", priority: 0.6 },
  { path: "/ug/himalayan-scholarship-test", priority: 0.6 },
  { path: "/ug/register-for-day-nexis", priority: 0.5 },
  { path: "/contact-us", priority: 0.6 },
  { path: "/ug/admission-enquiry", priority: 0.6 },
  { path: "/ug/book-campus-tour", priority: 0.6 },
  { path: "/ug/book-founder-connect", priority: 0.6 },
  { path: "/ug/request-callback", priority: 0.6 },
  { path: "/about/privacy", priority: 0.3 },
  { path: "/about/terms-of-use", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));
}
