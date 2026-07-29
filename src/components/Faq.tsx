"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/cn";

const FAQS = [
  {
    q: "Why Choose Cloudbox99?",
    a: "Cloudbox99 delivers reliable cloud hosting with enterprise-grade infrastructure, 99.9% uptime, and round-the-clock technical support. Our secure, scalable solutions are designed to keep your business running smoothly as it grows.",
  },
  {
    q: "What's included in the 7-day free trial?",
    a: "Start with a risk-free 7-day trial and experience our high-performance VPS or dedicated server solutions. Test your applications, evaluate performance, and explore our platform with no hidden charges.",
  },
  {
    q: "What's the Difference Between VPS and Dedicated Servers?",
    a: "VPS hosting offers a flexible and cost-effective solution for growing businesses, while dedicated servers provide exclusive hardware resources for maximum performance, security, and enterprise workloads.",
  },
  {
    q: "Do you offer backup and disaster recovery?",
    a: "Yes. We provide flexible backup solutions with scheduled backups, multiple restore points, and disaster recovery options to help protect your business from unexpected data loss and downtime.",
  },
  {
    q: "What does the Security Operations Center actually monitor?",
    a: "Our 24×7 Security Operations Center continuously monitors your infrastructure for suspicious activity, security threats, and unusual behavior. When potential risks are detected, our experts respond quickly to help protect your environment.",
  },
  {
    q: "Where are your data centers located?",
    a: "Our primary data center is strategically located in Hyderabad, India, delivering high availability, low latency, and reliable connectivity for businesses across the country and beyond.",
  },
  {
    q: "How does pricing work?",
    a: "Cloudbox99 offers transparent, competitive pricing with no hidden fees. Choose from flexible VPS and dedicated server plans that can scale with your business needs while keeping costs predictable.",
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
                  type="button"
                  aria-expanded={isOpen}
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
