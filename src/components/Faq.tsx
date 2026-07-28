"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/cn";

const FAQS = [
  {
    q: "Why Choose Cloudbox99?",
    a: "99.9% uptime, 24x7 support, enterprise infrastructure, scalability, security",
  },
  {
    q: "What's included in the 7-day free trial?",
    a: "Full access to Cloudbox99's VPS hosting platform for 7 days — no credit card lock-in required to evaluate performance, uptime, and support before you commit.",
  },
  {
    q: "What's the difference between VPS and dedicated servers?",
    a: "VPS hosting gives you a virtualized slice of shared hardware that's fast to provision and easy to scale. Dedicated servers give you an entire physical machine to yourself for workloads that need guaranteed, uncontended performance.",
  },
  {
    q: "Do you offer backup and disaster recovery?",
    a: "Yes. Our cloud backup and disaster recovery service automates snapshots of your infrastructure and enables fast restores, so you're covered if something goes wrong.",
  },
  {
    q: "What does the Security Operations Center actually monitor?",
    a: "Our SOC provides 24/7 monitoring, data encryption, managed firewalls, and real-time threat detection across your environment — with our engineers responding to incidents as they happen.",
  },
  {
    q: "Where are your data centers located?",
    a: "Cloudbox99 operates across multiple regions to provide performance, redundancy, and compliance with regional regulations — so you can deploy closer to your users.",
  },
  {
    q: "How does pricing work?",
    a: "Standard VPS infrastructure is billed at a predictable rate. Dedicated servers, managed IT, and SOC services are quoted as custom plans based on your requirements.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />

        <div className="mt-12 flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-white/[0.06] bg-surface"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-medium text-white">{item.q}</span>
                  <Plus
                    className={cn(
                      "h-4 w-4 shrink-0 text-accent-cyan transition-transform duration-300",
                      isOpen && "rotate-45"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
