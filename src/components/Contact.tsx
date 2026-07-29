"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const DETAILS = [
  { icon: Phone, label: "IN: +91 74167 20444" },
  { icon: MapPin, label: "301, 1st Floor, CBR Monte Carlo, Kothaguda X Roads, Kondapur, Hyderabad, TS 500 084" },
  { icon: Mail, label: "cs(at)cloudbox99.com" },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <section id="contact" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass grid grid-cols-1 gap-14 overflow-hidden rounded-3xl p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title="Let's design your infrastructure"
              description="Tell us what you're running today and where you need to be. Our team replies with a plan, not a sales pitch."
            />

            <div className="mt-10 flex flex-col gap-4">
              {DETAILS.map((item) => (
                <div key={item.label} className="flex items-start gap-3 text-sm text-muted">
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            {status === "sent" ? (
              <div className="flex h-full min-h-[360px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center">
                <CheckCircle2 className="h-10 w-10 text-accent-cyan" />
                <h3 className="font-display text-lg font-semibold text-white">Request received</h3>
                <p className="text-sm text-muted">
                  Thanks — a member of our team will follow up shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Jane Doe" required />
                  <Field label="Company" name="company" placeholder="Acme Inc." />
                </div>
                <Field label="Work email" name="email" type="email" placeholder="jane@company.com" required />
                <Field label="What do you need?" name="need" placeholder="VPS, dedicated servers, SOC, backup..." />
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your infrastructure needs"
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-accent-cyan/50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                  {status !== "sending" && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium text-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-accent-cyan/50"
      />
    </div>
  );
}
