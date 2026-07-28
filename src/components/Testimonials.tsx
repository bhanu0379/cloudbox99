"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const TESTIMONIALS = [
  {
    title: "Wonderful Support!",
    quote:
      "Cloudbox99 has been a great partner in our virtualization process. Till date we never faced a glitch even when there is a hike in traffic. Very few cloud companies are able to deliver that these days.",
    company: "Life Time Wellness Pvt. Ltd (Apollo Hospitals)",
    initials: "LW",
  },
  {
    title: "Awesome Services!",
    quote:
      "We got in alliance with Cloudbox99 when it was a small startup and probably that was the best decision we made while choosing a service. They grew along with us and helped us to fulfil our client requirements with utmost priority and care.",
    company: "UNIPRO TECH",
    initials: "UT",
  },
  {
    title: "Great & Talented Team!",
    quote:
      "Cloudbox99 has been a great cloud partner for us. Their uptime is unmatched and they have a great customer service team.",
    company: "Kendra Business Technologies Private Limited",
    initials: "KB",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by teams who need infrastructure that just works"
          description="Real feedback from the businesses running on Cloudbox99."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass relative flex flex-col rounded-2xl p-7"
            >
              <Quote className="h-6 w-6 text-accent-cyan" />
              <h3 className="mt-4 font-display text-base font-semibold text-white">
                {t.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-cyan to-accent-violet text-xs font-bold text-black">
                  {t.initials}
                </div>
                <div className="text-sm font-medium text-white">{t.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
