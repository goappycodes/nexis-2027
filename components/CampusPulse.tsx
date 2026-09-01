import Image from "next/image";
import { ArrowRight } from "./icons";

const MOMENTS = [
  {
    src: "/images/ug/day-houses.jpg",
    label: "House leagues",
    note: "Compete together",
  },
  {
    src: "/wp-media/2025/03/stage1.jpg",
    label: "Pitch nights",
    note: "Ideas meet a live room",
  },
  {
    src: "/images/ug/learn-ai.jpg",
    label: "Build sprints",
    note: "Ship, test, improve",
  },
  {
    src: "/images/ug/day-treasure-hunt.jpg",
    label: "Campus quests",
    note: "The cohort gets moving",
  },
];

/** A real-photo campus pulse used before the footer across the site. */
export default function CampusPulse() {
  return (
    <section className="overflow-hidden border-b border-white/10 bg-[#08080a] text-white">
      <div className="shell py-10 sm:py-14 lg:py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-crimson">
              <span className="h-px w-8 bg-crimson" />
              Campus pulse
            </p>
            <h2 className="display mt-4 max-w-xl text-[clamp(1.8rem,4vw,3.2rem)] text-white">
              College should feel like something is always about to{" "}
              <span className="serif-em text-crimson">happen</span>.
            </h2>
          </div>
          <a
            href="/events"
            className="btn hidden border-white/20 bg-transparent text-white hover:bg-white/10 sm:inline-flex"
          >
            See what&rsquo;s on
            <ArrowRight className="arrow" />
          </a>
        </div>

        <div className="-mx-[var(--gutter)] mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-[var(--gutter)] pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
          {MOMENTS.map((moment, index) => (
            <a
              key={moment.label}
              href="/events"
              className="group relative aspect-[4/5] w-[72vw] max-w-[290px] shrink-0 snap-start overflow-hidden rounded-[5px] bg-white/5 sm:w-auto sm:max-w-none"
            >
              <Image
                src={moment.src}
                alt={`${moment.label} at NEXIS`}
                fill
                sizes="(max-width: 640px) 72vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                0{index + 1}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-serif text-xl text-white">{moment.label}</p>
                <p className="mt-1 text-[0.76rem] uppercase tracking-[0.1em] text-white/55">
                  {moment.note}
                </p>
              </div>
            </a>
          ))}
        </div>

        <a
          href="/events"
          className="btn mt-6 w-full justify-center border-white/20 bg-transparent text-white sm:hidden"
        >
          See what&rsquo;s on
          <ArrowRight className="arrow" />
        </a>
      </div>
    </section>
  );
}
