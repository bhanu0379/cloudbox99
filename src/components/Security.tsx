"use client";

import { motion } from "framer-motion";
import { Eye, Lock, Flame, ScanEye, ArrowRight } from "lucide-react";

const PILLARS = [
  { icon: Eye, label: "24/7 Monitoring", description: "Round-the-clock visibility across every endpoint and workload." },
  { icon: Lock, label: "Data Encryption", description: "Data encrypted at rest and in transit, by default." },
  { icon: Flame, label: "Managed Firewalls", description: "Perimeter and host-level firewalls tuned to your environment." },
  { icon: ScanEye, label: "Threat Detection", description: "Real-time detection and response from our SOC team." },
];

const CONSULTING_SERVICES = [
  "Vulnerability Assessment",
  "Penetration Testing",
  "Data Loss Prevention (DLP)",
  "Email Security",
  "MDR / XDR",
];

export function Security() {
  return (
    <section id="security" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass relative grid grid-cols-1 gap-14 overflow-hidden rounded-3xl p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:p-16">
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-[100px]"
            style={{ background: "radial-gradient(circle, var(--accent-violet), transparent 70%)" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A SOC team watching your infrastructure, always.
            </h2>
            <p className="mt-4 max-w-md text-base text-muted">
              Cloudbox99 pairs infrastructure with a dedicated Security Operations
              Center — so monitoring, threat detection, and incident response are
              part of the platform, not an add-on you have to build yourself.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {PILLARS.map((pillar) => (
                <div key={pillar.label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <pillar.icon className="h-4 w-4 text-accent-cyan" />
                  <div className="mt-3 text-sm font-semibold text-white">{pillar.label}</div>
                  <div className="mt-1 text-xs leading-relaxed text-muted">{pillar.description}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                Cybersecurity Consulting
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {CONSULTING_SERVICES.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80"
          >
            {[0, 1, 2].map((ring) => (
              <span
                key={ring}
                className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full border border-accent-cyan/40"
                style={{ animationDelay: `${ring * 0.8}s` }}
              />
            ))}
            <div className="glow-cyan glass relative flex h-28 w-28 items-center justify-center rounded-full">
              <ScanEye className="h-10 w-10 text-accent-cyan" />
            </div>
            <div className="absolute inset-0 rounded-full border border-dashed border-white/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
