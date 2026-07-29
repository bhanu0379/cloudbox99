"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Cpu, Server, HardDrive, Globe, Sliders, TrendingUp, Headset, ShieldCheck, Settings } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ContactModal } from "./ContactModal";
import { cn } from "@/lib/cn";

const VPS_PLANS = [
  {
    name: "VPS BASIC",
    tagline: "Perfect for small websites and startups.",
    price: "₹999",
    period: " /mo",
    billed: "Billed monthly",
    highlighted: false,
    specs: [
      { icon: Cpu, text: "2 vCPU Cores" },
      { icon: Server, text: "4 GB RAM" },
      { icon: HardDrive, text: "100 GB SSD Storage" },
      { icon: Globe, text: "1 IPv4 Address" },
    ],
    features: [
      "99.9% Uptime SLA",
      "24/7 Technical Support",
      "Instant Deployment",
      "Full Root Access",
    ],
    cta: "Get Started",
  },
  {
    name: "VPS MEDIUM",
    tagline: "Ideal for growing businesses and applications.",
    price: "₹3,199",
    period: " /mo",
    billed: "Billed monthly",
    highlighted: true,
    specs: [
      { icon: Cpu, text: "8 vCPU Cores" },
      { icon: Server, text: "16 GB RAM" },
      { icon: HardDrive, text: "200 GB SSD Storage" },
      { icon: Globe, text: "1 IPv4 Address" },
    ],
    features: [
      "99.9% Uptime SLA",
      "24/7 Technical Support",
      "Instant Deployment",
      "Full Root Access",
    ],
    cta: "Get Started",
  },
];

const CUSTOM_PLAN = {
  name: "CUSTOM PLAN",
  tagline: "Need something specific? We tailor it to your needs.",
  features: [
    {
      icon: Sliders,
      title: "Custom Configurations",
      description: "Choose the resources that fit your business.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Easily scale up or down as your needs grow.",
    },
    {
      icon: Headset,
      title: "Dedicated Support",
      description: "Get expert advice to build the perfect setup.",
    },
    {
      icon: ShieldCheck,
      title: "Flexible & Reliable",
      description: "Built to match your goals with high performance.",
    },
  ],
  cta: "Configure Now",
};

export function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleOpenModal = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  return (
    <section id="pricing" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Choose the Right Plan for Your Business"
          description="High Performance VPS Hosting Solutions - Built for Speed, Security & Reliability"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* VPS Plans */}
          {VPS_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "relative flex flex-col rounded-3xl p-8",
                plan.highlighted
                  ? "glow-violet border border-accent-violet/40 bg-gradient-to-b from-white/[0.06] to-transparent pt-10"
                  : "border border-white/[0.06] bg-surface"
              )}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 w-full flex justify-center">
                  <div className="rounded-b-xl bg-gradient-to-r from-accent-cyan to-accent-violet px-6 py-1.5 text-[11px] font-bold tracking-widest text-black flex items-center gap-1">
                    ★ MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mt-2">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-violet/10 text-accent-cyan ring-1 ring-accent-violet/20">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white uppercase tracking-wider">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted">{plan.tagline}</p>
                <div className="mt-6 font-display text-4xl font-bold text-white">
                  {plan.price}<span className="text-xl font-medium text-muted">{plan.period}</span>
                </div>
                <p className="mt-2 text-xs text-muted">{plan.billed}</p>
              </div>

              <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <ul className="flex flex-col gap-4">
                {plan.specs.map((spec, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-white">
                    <spec.icon className="h-5 w-5 text-accent-cyan/80 shrink-0" />
                    {spec.text}
                  </li>
                ))}
              </ul>

              <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-muted">
                    <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-accent-violet/20 text-accent-violet shrink-0 border border-accent-violet/30">
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenModal(plan.name);
                }}
                className={cn(
                  "group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all hover:scale-[1.02]",
                  plan.highlighted
                    ? "bg-gradient-to-r from-accent-cyan to-accent-violet text-black border-none shadow-[0_0_20px_rgba(34,229,255,0.3)] hover:shadow-[0_0_25px_rgba(34,229,255,0.4)]"
                    : "border border-white/15 text-white hover:bg-white/5"
                )}
              >
                {plan.cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </motion.div>
          ))}

          {/* Custom Plan */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex flex-col rounded-3xl p-8 border border-white/[0.06] bg-surface"
          >
            <div className="text-center mt-2">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400 ring-1 ring-green-500/20">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white uppercase tracking-wider">{CUSTOM_PLAN.name}</h3>
              <p className="mt-2 text-sm text-muted">{CUSTOM_PLAN.tagline}</p>
            </div>

            <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <ul className="flex flex-col gap-6 flex-1">
              {CUSTOM_PLAN.features.map((feature, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <feature.icon className="h-6 w-6 text-green-400/80 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
                    <p className="mt-1.5 text-sm text-muted/80">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleOpenModal(CUSTOM_PLAN.name);
              }}
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all hover:scale-[1.02] border border-green-500/50 text-green-400 hover:bg-green-500/10"
            >
              {CUSTOM_PLAN.cta}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        </div>
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          defaultNeed={selectedPlan}
        />
      </div>
    </section>
  );
}
