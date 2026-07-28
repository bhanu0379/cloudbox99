"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Wallet,
  Headset,
  Tag,
  Megaphone,
  ShieldCheck,
  Layers,
  ClipboardList,
  UserCheck,
  Rocket,
  TrendingUp,
  Server,
  Briefcase,
  Store,
  Plus,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/cn";

const BENEFITS = [
  {
    icon: Wallet,
    title: "Recurring revenue",
    description:
      "Earn on every client you bring to Cloudbox99, for as long as they stay with us — not just a one-time payout.",
  },
  {
    icon: Headset,
    title: "Dedicated partner support",
    description:
      "A real point of contact for partner deals and technical questions — not a shared support queue.",
  },
  {
    icon: Tag,
    title: "Co-branded or white-label",
    description:
      "Resell under your own brand, co-branded with Cloudbox99, or a mix — the choice is yours.",
  },
  {
    icon: Megaphone,
    title: "Sales & marketing enablement",
    description:
      "Battlecards, case studies, and co-marketing support to help you position and close deals.",
  },
  {
    icon: ShieldCheck,
    title: "Deal registration & protection",
    description:
      "Register your deals and we'll protect your pipeline — no undercutting, no channel conflict.",
  },
  {
    icon: Layers,
    title: "The full catalog, one partnership",
    description:
      "Offer VPS, dedicated servers, cloud storage, backup, managed IT, and 24/7 SOC — all under one agreement.",
  },
];

const STEPS = [
  {
    icon: ClipboardList,
    title: "Apply",
    description: "Tell us about your business and the clients you serve.",
  },
  {
    icon: UserCheck,
    title: "Get onboarded",
    description: "We'll walk you through the catalog, partner pricing, and how deal registration works.",
  },
  {
    icon: Rocket,
    title: "Register & sell",
    description: "Register your deals, quote clients, and close with our team backing you up.",
  },
  {
    icon: TrendingUp,
    title: "Earn & scale",
    description: "Get paid on active clients and grow your book with dedicated partner support.",
  },
];

const PROFILES = [
  {
    icon: Server,
    title: "Managed Service Providers",
    description:
      "Extend your stack with enterprise infrastructure and security services without building it in-house.",
  },
  {
    icon: Briefcase,
    title: "Agencies",
    description:
      "Offer your clients reliable hosting and cybersecurity as part of the packages you already sell.",
  },
  {
    icon: Store,
    title: "Resellers",
    description:
      "Build a hosting and infrastructure business on our platform, under your own brand.",
  },
];

const FAQS = [
  {
    q: "How does the partner program work?",
    a: "You bring us the client — as a referral, a resale, or a fully white-labeled deployment — and we handle provisioning, delivery, and support behind the scenes. You stay the face of the relationship.",
  },
  {
    q: "What's the commission structure?",
    a: "Commission and margins depend on the services you sell and your volume, and are finalized during onboarding — we'll walk through the details when you apply rather than quote a blanket number here.",
  },
  {
    q: "Do I need technical expertise to become a partner?",
    a: "No. Our team handles provisioning, monitoring, and support — you focus on the client relationship and the sale.",
  },
  {
    q: "Can I white-label Cloudbox99's services?",
    a: "Yes. Co-branded and fully white-label options are available depending on your partnership tier.",
  },
  {
    q: "Is there a minimum commitment to get started?",
    a: "There's no fixed minimum. We'll talk through what makes sense for your business during onboarding.",
  },
];

export function PartnersContent() {
  return (
    <>
      <Hero />
      <Benefits />
      <HowItWorks />
      <Profiles />
      <PartnerFaq />
      <PartnerContactForm />
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <div
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[480px] w-[480px] -translate-x-1/2 rounded-full opacity-30 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--accent-violet), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent-cyan">
            Channel Sales Partner
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl">
            Built for partners delivering cloud and IT solutions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">
            Whether you&apos;re an MSP, an agency, or a reseller, partner with
            Cloudbox99 to offer enterprise cloud infrastructure and
            cybersecurity under your relationship — backed by our team,
            recurring revenue, and dedicated partner support.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href="#apply"
              className="group glow-cyan inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              Apply to partner
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#how-it-works"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              See how it works
            </a>
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
          eyebrow="Why partner with us"
          title="Everything you need to sell cloud infrastructure, without building it"
          description="A partnership designed around recurring revenue, real support, and a catalog you can actually sell."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
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

function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="How it works" title="From application to active partner" />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-white/[0.06] bg-surface p-6"
            >
              <span className="font-mono text-xs text-accent-violet">0{i + 1}</span>
              <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <step.icon className="h-5 w-5 text-accent-cyan" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
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
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Who this is for" title="Built for the partners already selling to these clients" />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {PROFILES.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-7 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
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

function PartnerContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <section id="apply" className="relative py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="glass overflow-hidden rounded-3xl p-8 sm:p-12">
          <SectionHeading
            eyebrow="Apply"
            title="Become a channel partner"
            description="Tell us a bit about your business — we'll follow up to talk through fit and next steps."
          />

          <div className="mt-10">
            {status === "sent" ? (
              <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center">
                <CheckCircle2 className="h-10 w-10 text-accent-cyan" />
                <h3 className="font-display text-lg font-semibold text-white">Application received</h3>
                <p className="text-sm text-muted">
                  Thanks — our partnerships team will follow up shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <PartnerField label="Name" name="name" placeholder="Jane Doe" required />
                <PartnerField label="Company" name="company" placeholder="Acme Partners" required />
                <PartnerField label="Work email" name="email" type="email" placeholder="jane@company.com" required />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] disabled:opacity-60"
                >
                  {status === "sending" ? "Submitting..." : "Submit application"}
                  {status !== "sending" && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
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
