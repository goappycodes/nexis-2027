import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexisschool.com"),
  title: "Undergraduate Program in Business Management — Batch of 2027 | NEXIS",
  description:
    "A three-year, on-campus undergraduate program in Siliguri where you learn business by building real businesses — mentored by founders and CXOs from day one. Admissions open for the Batch of 2027.",
  icons: { icon: "/brand/nexis-icon.png" },
  openGraph: {
    title: "NEXIS — Undergraduate Program in Business Management · Batch of 2027",
    description:
      "Learn business by building it. Real work from your first semester, mentored by founders and CXOs. Admissions open for the Batch of 2027.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        {/* Adds `.js` before first paint so scroll-reveal only hides content
            when JS can bring it back. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
