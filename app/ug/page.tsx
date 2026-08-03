import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import Recognition from "@/components/Recognition";
import Overview from "@/components/Overview";
import Curriculum from "@/components/Curriculum";
import HowYouLearn from "@/components/HowYouLearn";
import Faculty from "@/components/Faculty";
import Outcomes from "@/components/Outcomes";
import CampusLife from "@/components/CampusLife";
import PressStrip from "@/components/PressStrip";
import Founders from "@/components/Founders";
import Admissions from "@/components/Admissions";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import SiteFooter from "@/components/SiteFooter";

export default function UGPage() {
  return (
    <main className="relative">
      <SiteNav />
      <Hero />
      <Recognition />
      <Overview />
      <Curriculum />
      <HowYouLearn />
      <Faculty />
      <Outcomes />
      <CampusLife />
      <PressStrip />
      <Founders />
      <Admissions />
      <Faq />
      <CtaBand />
      <SiteFooter />
    </main>
  );
}
