"use client";

import { motion } from "framer-motion";
import { Gauge, Wallet, LifeBuoy, Globe2, Gift, ShieldCheck, Infinity, SlidersHorizontal } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const FEATURES = [
  {
    icon: Gauge,
    title: "Flexible & scalable by design",
    description: "Add or reduce compute, storage, and bandwidth on demand as your needs change — no re-architecture required.",
  },
  {
    icon: Wallet,
    title: "Transparent, predictable pricing",
    description: "Financially transparent pricing with custom plans available — no hidden fees.",
  },
  {
    icon: LifeBuoy,
    title: "24/7 support, for life",
    description: "Our engineers are available around the clock at no extra cost — for as long as you're a customer.",
  },
  {
    icon: Globe2,
    title: "Multi-region data centers",
    description: "Facilities across multiple regions for performance, redundancy, and regional compliance.",
  },
  {
    icon: Gift,
    title: "7-day free trial",
    description: "Try Cloudbox99 risk-free before you commit — full access, no strings attached.",
  },
  {
    icon: ShieldCheck,
    title: "Security built in, not bolted on",
    description: "24/7 monitoring, data encryption, firewalls, and threat detection across every plan.",
  },
  {
    icon: Infinity,
    title: "Unlimited bandwidth",
    description: "Your site or app can absorb traffic spikes without hitting a bandwidth ceiling.",
  },
  {
    icon: SlidersHorizontal,
    title: "Fully customizable infrastructure",
    description: "Adjust server settings, choose your OS, and layer on additional services to fit your stack.",
  },
];

export function Features() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Why Cloudbox99"
            title="Enterprise reliability without enterprise friction"
            description="We built Cloudbox99 around the things that actually move the needle for growing teams: uptime, transparent cost, and support that picks up the phone."
            className="lg:sticky lg:top-32"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="rounded-2xl border border-white/[0.06] bg-surface p-5 transition-colors hover:border-white/15"
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
    </section>
  );
}
