"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "99.9%", label: "Platform uptime SLA" },
  { value: "24/7", label: "Live engineering support" },
  { value: "7 Days", label: "Free, full-access trial" },
];

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.06] md:grid-cols-3">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center justify-center gap-2 bg-background px-4 py-10 text-center"
            >
              <span className="text-gradient font-display text-3xl font-bold sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-xs text-muted sm:text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
