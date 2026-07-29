"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { ContactModal } from "./ContactModal";

const STATS = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Live Support" },
  { value: "7-Day", label: "Free Trial" },
];

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-12 md:pt-28 md:pb-15 lg:pt-32 lg:pb-15">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div
        className="animate-float pointer-events-none absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-40 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--accent-violet), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute right-[8%] top-[20%] h-[320px] w-[320px] rounded-full opacity-30 blur-[100px]"
        style={{ background: "radial-gradient(circle, var(--accent-cyan), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">


        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Trusted Cloud Hosting Provider
          <br />
          for{" "}
          <span className="text-gradient bg-[length:200%_auto] animate-gradient-x">
            Enterprise Cloud &amp; Managed IT Solutions
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted sm:text-lg"
        >
          Cloudbox99 is a trusted cloud hosting provider delivering secure, scalable enterprise cloud infrastructure, VPS hosting, dedicated servers, cloud storage, cyber security, and managed IT solutions for businesses worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="group glow-cyan inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            Start your 7-day free trial
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#services"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <ShieldCheck className="h-4 w-4 text-accent-cyan" />
            Explore infrastructure
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="glass mx-auto mt-16 grid max-w-3xl grid-cols-1 divide-y divide-white/[0.06] rounded-2xl sm:grid-cols-3 sm:divide-y-0 sm:divide-x"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 px-4 py-6">
              <dt className="font-display text-2xl font-semibold text-white">{stat.value}</dt>
              <dd className="text-xs text-muted">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>

      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
