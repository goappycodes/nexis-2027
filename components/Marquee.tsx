export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden">
      <div className="flex w-max animate-marquee">
        {doubled.map((it, i) => (
          <div key={i} className="flex items-center gap-10 pr-10">
            <span className="font-serif text-2xl text-ink-2/70 sm:text-3xl">
              {it}
            </span>
            <span className="text-crimson/60">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
