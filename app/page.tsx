import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import HomeHero from "@/components/HomeHero";
import Recognition from "@/components/Recognition";
import Ethos from "@/components/Ethos";
import HomePrograms from "@/components/HomePrograms";
import HomeWhy from "@/components/HomeWhy";
import HomeProof from "@/components/HomeProof";
import CampusLife from "@/components/CampusLife";
import PressStrip from "@/components/PressStrip";
import Founders from "@/components/Founders";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import SiteFooter from "@/components/SiteFooter";
import { HOME_NAV } from "@/lib/content";

export const metadata: Metadata = {
  title: "NEXIS School of Business — India's Most Practical Business School | Siliguri",
  description:
    "NEXIS is India's most practical business school in Siliguri. Learn by doing, work from day one, and build real skills — mentored by founders and CXOs. Explore our UG, PG and School of AI programs.",
};

export default function Home() {
  return (
    <main className="relative">
      <SiteNav links={HOME_NAV} />
      <HomeHero />
      <Recognition />
      <Ethos />
      <HomePrograms />
      <HomeWhy />
      <HomeProof />
      <CampusLife index="" />
      <PressStrip />
      <Founders index="" />
      <Faq index="" />
      <CtaBand />
      <SiteFooter />
    </main>
  );
}
