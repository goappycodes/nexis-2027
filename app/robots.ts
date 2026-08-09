import type { MetadataRoute } from "next";

/* Keep in sync with app/sitemap.ts. */
const BASE = "https://nexis-2027.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/ug/thank-you"],
    },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
