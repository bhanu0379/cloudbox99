"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/cn";

const PLANS = [
  {
    name: "VPS Cloud",
    tagline: "For teams launching on their own infrastructure",
    price: "Predictable plans",
    highlighted: false,
    features: [
      "Instant VPS provisioning",
      "Full root access",
      "Multi-region availability",
      "24/7 support at no extra cost",
      "7-day free trial included",
    ],
    cta: "Start free trial",
  },
  {
    name: "Dedicated & Managed",
    tagline: "For growing businesses that need guaranteed performance",
    price: "Custom pricing",
    highlighted: true,
    features: [
      "Everything in VPS Cloud",
      "Bare-metal dedicated servers",
      "Managed IT services",
      "Automated backup & disaster recovery",
      "Priority SOC monitoring",
    ],
    cta: "Talk to sales",
  },
  {
    name: "Enterprise & SOC",
    tagline: "For organizations that need security and compliance at scale",
    price: "Custom pricing",
    highlighted: false,
    features: [
      "Everything in Dedicated & Managed",
      "Dedicated Security Operations Center",
      "Compliance-ready, multi-region deployment",
      "Custom SLAs",
      "Dedicated account manager",
    ],
    cta: "Contact sales",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent pricing. Custom when you need it."
          description="Predictable pricing for standard infrastructure, or work with our team on a custom plan for dedicated, managed, and SOC services. No hidden fees — ever."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "relative flex flex-col rounded-3xl p-8",
                plan.highlighted
                  ? "glow-violet border border-accent-violet/40 bg-gradient-to-b from-white/[0.06] to-transparent"
                  : "border border-white/[0.06] bg-surface"
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet px-3 py-1 text-[11px] font-semibold text-black">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted">{plan.tagline}</p>
              <div className="mt-6 font-display text-2xl font-bold text-white">{plan.price}</div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={cn(
                  "group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02]",
                  plan.highlighted
                    ? "bg-white text-black"
                    : "border border-white/15 text-white hover:bg-white/5"
                )}
              >
                {plan.cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
