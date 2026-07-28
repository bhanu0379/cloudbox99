const ITEMS = [
  "99.9% Uptime SLA",
  "Enterprise-Grade Hardware",
  "24/7 Monitoring",
  "ISO 27001 Certified",
  "Dedicated Support",
  "7-Day Free Trial",
  "Tier-3 Facilities",
];

export function TrustMarquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-surface/60 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="animate-marquee flex w-max gap-10">
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
