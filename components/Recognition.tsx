import Reveal from "./Reveal";
import Marquee from "./Marquee";
import { BRANDS } from "@/lib/content";

export default function Recognition() {
  return (
    <section className="border-b border-line bg-paper-2/60 py-12">
      <div className="shell">
        <Reveal className="mb-8 flex flex-col items-center gap-3 text-center">
          <p className="kicker">Where our students already work & learn</p>
        </Reveal>
      </div>
      <Marquee items={BRANDS} />
      <div className="shell mt-10">
        <Reveal className="mx-auto max-w-3xl text-center text-[0.9rem] leading-relaxed text-muted">
          <p>
            NEXIS is a school of business and skilling institution — a Training
            Body accredited by{" "}
            <span className="font-medium text-ink-2">MEPSC</span>, an awarding
            body recognised by{" "}
            <span className="font-medium text-ink-2">NCVET</span>. Every year of
            the program earns a nationally recognised,{" "}
            <span className="font-medium text-ink-2">NSQF-aligned</span>{" "}
            qualification. We don&rsquo;t confer degrees — we build careers.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
