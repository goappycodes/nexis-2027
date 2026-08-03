import SectionHeader from "./SectionHeader";
import ExperienceCarousel from "./ExperienceCarousel";

export default function HowYouLearn() {
  return (
    <section id="learn" className="scroll-mt-24 py-12 sm:py-20 lg:py-28">
      <div className="shell overflow-hidden">
        <SectionHeader
          index="03"
          kicker="How you'll learn"
          title={
            <>
              Learn by doing — not by{" "}
              <span className="serif-em text-crimson">sitting</span>.
            </>
          }
          lede="Every semester puts you inside a real challenge. These are the signature experiences that turn students into operators before they graduate."
        />
        <ExperienceCarousel />
      </div>
    </section>
  );
}
