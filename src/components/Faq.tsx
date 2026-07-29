"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/cn";

const FAQS = [
  {
    q: "Why Choose Cloudbox99?",
    a: "Reliable cloud hosting with 99.9% uptime, enterprise-grade security, and expert support whenever you need it.",
  },
  {
    q: "What's included in the 7-day free trial?",
    a: "Experience Cloudbox99 with a 7-day free trial and explore our secure, high-performance hosting risk free.",
  },
  {
    q: "What's the difference between VPS and dedicated servers?",
    a: "Choose between flexible VPS hosting or powerful dedicated servers tailored to your business needs and growth.",
  },
  {
    q: "Do you offer backup and disaster recovery?",
    a: "Protect your business with reliable backups and fast disaster recovery to keep your data safe.",
  },
  {
    q: "What does the Security Operations Center actually monitor?",
    a: "Our 24×7 Security Operations Center proactively monitors your infrastructure to keep your business secure.",
  },
  {
    q: "Where are your data centers located?",
    a: "Our primary data center is located in Hyderabad, India.",
  },
  {
    q: "How does pricing work?",
    a: "Cloudbox99 offers transparent and competitive pricing with no hidden charges.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16">
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
