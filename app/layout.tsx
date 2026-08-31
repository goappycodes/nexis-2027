import type { Metadata } from "next";
import { Inter, Fraunces, Poppins } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import StructuredData from "@/components/StructuredData";
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

// Brand sans (nexisschool.com identity). Loaded globally as a CSS var but
// only applied where opted in (currently the /ug page wrapper).
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
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
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${poppins.variable}`}
    >
      <head>
        {/* Adds `.js` before first paint so scroll-reveal only hides content
            when JS can bring it back. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="grain">
        <StructuredData />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
