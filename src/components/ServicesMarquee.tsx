const ITEMS = [
  "VPS Hosting",
  "Dedicated Servers",
  "Cloud Storage",
  "CCTV Cloud Storage",
  "Cloud Backup & Recovery",
  "Managed IT Services",
  "Cybersecurity Consulting",
  "Microsoft Licensing",
];

export function ServicesMarquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-b border-white/[0.06] bg-surface/30 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="animate-marquee flex w-max gap-10" style={{ animationDirection: "reverse" }}>
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-2 whitespace-nowrap font-mono text-xs uppercase tracking-widest text-muted"
          >
            <span className="h-1 w-1 rounded-full bg-accent-cyan" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
