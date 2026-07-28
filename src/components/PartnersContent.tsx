"use client";

import { useState, type FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Wallet,
  Headset,
  Tag,
  ShieldCheck,
  Layers,
  Zap,
  BarChart3,
  Lock,
  Server,
  Briefcase,
  Store,
  Cloud,
  Code2,
  Settings2,
  Plus,
  CheckCircle2,
  X,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/cn";

const BENEFITS = [
  {
    icon: Server,
    title: "Enterprise Infrastructure",
    description:
      "Give your clients access to enterprise-grade cloud hosting, VPS, dedicated servers, and managed services — without building it yourself.",
  },
  {
    icon: Tag,
    title: "White-Label Opportunities",
    description:
      "Resell under your own brand with co-branded or fully white-label options available for eligible partners.",
  },
  {
    icon: Wallet,
    title: "Recurring Revenue",
    description:
      "Earn predictable, subscription-based income on every active client — not just a one-time commission.",
  },
  {
    icon: Headset,
    title: "Dedicated Partner Support",
    description:
      "A real point of contact for partner deals, technical questions, and onboarding — not a shared support queue.",
  },
  {
    icon: Layers,
    title: "Flexible Partner Models",
    description:
      "Choose the model that works for your business — referral, reseller, or fully white-labeled deployment.",
  },
  {
    icon: Zap,
    title: "Fast Service Deployment",
    description:
      "Provision and deliver cloud services quickly so you can respond to client needs without delays.",
  },
  {
    icon: BarChart3,
    title: "Scalable Solutions",
    description:
      "Offer the full catalog — cloud storage, backup, cybersecurity, managed IT — and scale your portfolio as your business grows.",
  },
  {
    icon: Lock,
    title: "Trusted Security",
    description:
      "Back your clients with 24/7 SOC monitoring, managed firewalls, data encryption, and enterprise-grade cybersecurity.",
  },
];

const PROFILES = [
  {
    icon: Server,
    title: "Managed Service Providers (MSPs)",
    description:
      "Extend your stack with enterprise infrastructure and security services without building it in-house.",
  },
  {
    icon: Briefcase,
    title: "IT Solution Providers",
    description:
      "Add cloud hosting, backup, and managed IT to your existing service offerings with ease.",
  },
  {
    icon: Cloud,
    title: "Hosting Providers",
    description:
      "Expand your hosting catalog with VPS, dedicated servers, cloud storage, and enterprise services.",
  },
  {
    icon: Code2,
    title: "Cloud Consultants",
    description:
      "Deliver complete cloud transformation projects backed by enterprise infrastructure and managed services.",
  },
  {
    icon: Store,
    title: "Digital Agencies",
    description:
      "Offer your clients reliable hosting and cybersecurity as part of the packages you already sell.",
  },
  {
    icon: Settings2,
    title: "System Integrators",
    description:
      "Build and deliver integrated cloud and IT solutions for enterprise clients at scale.",
  },
];

const FAQS = [
  {
    q: "Who can join the Cloudbox99 Partner Program?",
    a: "Our program is designed for MSPs, IT service providers, hosting companies, cloud consultants, digital agencies, and technology partners.",
  },
  {
    q: "Is there any fee to join the partner program?",
    a: "No. Joining is free, subject to approval.",
  },
  {
    q: "What solutions can I resell?",
    a: "Cloud hosting, VPS, dedicated servers, cloud storage, backup, cybersecurity, and managed cloud services.",
  },
  {
    q: "Do you offer white-label solutions?",
    a: "Yes, for eligible partners.",
  },
  {
    q: "Will I receive technical support?",
    a: "Yes. We provide deployment, migration, and ongoing technical assistance.",
  },
  {
    q: "How do partners earn recurring revenue?",
    a: "By reselling Cloudbox99 subscription-based services.",
  },
  {
    q: "How long does partner approval take?",
    a: "Typically 2–5 business days.",
  },
  {
    q: "How do I become a Cloudbox99 Partner?",
    a: "Complete the application form and our team will guide you through onboarding after approval.",
  },
];

export function PartnersContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      <Hero onOpenContact={() => setIsModalOpen(true)} />
      <Benefits />
      <Profiles />
      <PartnerFaq />
      <AnimatePresence>
        {isModalOpen && <PartnerContactModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function Hero({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(ellipse, var(--accent-cyan), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent-cyan">
            Get Started
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl">
            Ready to Grow with Cloudbox99?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">
            Become a trusted Cloudbox99 Partner and deliver enterprise-grade cloud and cybersecurity solutions while
            building predictable recurring revenue.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <button
              onClick={onOpenContact}
              className="group glow-cyan inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              Contact Our Team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Partner with Cloudbox99"
          title="Everything you need to grow your cloud business"
          description="A partnership built around recurring revenue, real support, and a catalog you can confidently sell."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <b.icon className="h-5 w-5 text-accent-cyan" />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold text-white">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Profiles() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Who this is for"
          title="Built for MSPs, IT providers, and cloud businesses"
          description="The Cloudbox99 Partner Program is open to a wide range of technology and service businesses."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROFILES.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="glass rounded-2xl p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <p.icon className="h-5 w-5 text-accent-violet" />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="FAQ" title="Partner program questions" />

        <div className="mt-12 flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="overflow-hidden rounded-2xl border border-white/[0.06] bg-surface">
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

function PartnerContactModal({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="glass relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-10 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-muted hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <SectionHeading
          eyebrow="Apply"
          title="Become a Cloudbox99 Partner"
          description="Join a partner ecosystem built for MSPs, IT providers, hosting companies, cloud consultants, and digital agencies. Complete the application form and our partnership team will review your submission. Once approved, we'll help you get started with onboarding, technical guidance, and the resources needed to grow your cloud business."
        />

        <div className="mt-10">
          {status === "sent" ? (
            <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center">
              <CheckCircle2 className="h-10 w-10 text-accent-cyan" />
              <h3 className="font-display text-lg font-semibold text-white">Application received</h3>
              <p className="text-sm text-muted">
                Thanks — our partnerships team will review your submission and follow up shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <PartnerField label="Name" name="name" placeholder="Jane Doe" required />
              <PartnerField label="Company" name="company" placeholder="Acme Partners" required />
              <PartnerField label="Work email" name="email" type="email" placeholder="jane@company.com" required />
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your business..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-accent-cyan/50"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {status === "sending" ? "Submitting..." : "Apply to Become a Partner"}
                {status !== "sending" && <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}


function PartnerField({
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
