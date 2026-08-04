import Reveal from "./Reveal";

export default function Ethos() {
  return (
    <section className="shell py-16 sm:py-24 lg:py-28">
      <Reveal className="max-w-4xl">
        <p className="kicker flex items-center gap-3 text-crimson">
          <span className="h-px w-8 bg-crimson" />
          The NEXIS idea
        </p>
      </Reveal>
      <Reveal delay={100}>
        <p className="display mt-8 text-[clamp(1.7rem,3.5vw,2.9rem)] leading-[1.18] text-ink">
          Business isn&rsquo;t learned in a lecture hall. It&rsquo;s learned in
          the field —{" "}
          <span className="serif-em text-crimson">
            building, selling, failing and building again.
          </span>{" "}
          We built an institution around that conviction.
        </p>
      </Reveal>
    </section>
  );
}
