"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Gauge,
  Wallet,
  LifeBuoy,
  Globe2,
  Gift,
  ShieldCheck,
  Infinity,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const FEATURES = [
  {
    icon: Gauge,
    title: "Flexible & scalable by design",
    description: "Scale compute, storage and bandwidth on demand with enterprise cloud hosting and managed cloud hosting built to grow with you.",
  },
  {
    icon: Wallet,
    title: "Custom, predictable pricing",
    description: "Enjoy clear, usage-based cloud hosting services with custom plans and no hidden fees for your enterprise cloud solutions.",
  },
  {
    icon: LifeBuoy,
    title: "24/7 support",
    description: "Get always-on managed IT services and platform support from our engineering team at no extra cost.",
  },
  {
    icon: Gift,
    title: "7-day free trial",
    description: "Test our enterprise cloud hosting, VPS hosting and backup & disaster recovery capabilities free for 7 days before you commit.",
  },
  {
    icon: Infinity,
    title: "Unlimited bandwidth",
    description: "Handle traffic spikes with confidence thanks to unlimited bandwidth across our cloud hosting services.",
  },
  {
    icon: SlidersHorizontal,
    title: "Fully customizable infrastructure",
    description: "Tailor your VPS hosting or dedicated server hosting stack and layer on cloud storage solutions or backup & disaster recovery as needed.",
  },
];

export function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild?.clientWidth ?? 260;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -(cardWidth + 16) : cardWidth + 16,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Why Cloudbox99"
            title="Enterprise reliability without enterprise friction"
            description="We built Cloudbox99 around the things that actually move the needle for growing teams: uptime, transparent cost, and support that picks up the phone."
            className="lg:sticky lg:top-32"
          />

          <div className="relative">
            {/* mobile-only arrow buttons */}
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="absolute -left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-sm sm:hidden"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="absolute -right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-sm sm:hidden"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            <div
              ref={scrollRef}
              className="scrollbar-cyan flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden scroll-smooth pb-4 px-[11%] sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0"
            >
              {FEATURES.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                  className="w-[78%] flex-shrink-0 snap-center rounded-2xl border border-white/[0.06] bg-surface p-5 transition-colors hover:border-white/15 sm:w-auto sm:flex-shrink"
                >
                  <feature.icon className="h-5 w-5 text-accent-violet" />
                  <h3 className="mt-4 font-display text-base font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
