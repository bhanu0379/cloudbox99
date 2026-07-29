"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Globe2,
  Target,
  LifeBuoy,
  Wallet,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

import { Testimonials } from "./Testimonials";

const FACTS = [
  { icon: Calendar, value: "2019", label: "Founded in Hyderabad" },
  { icon: MapPin, value: "Hyderabad", label: "Headquarters, India" },
];

const VALUES = [
  {
    icon: LifeBuoy,
    title: "Support that doesn't stop",
    description:
      "24/7 support at no extra cost — for as long as you're a customer. Not a tier you have to pay up for.",
  },
  {
    icon: Wallet,
    title: "Transparent, honest pricing",
    description:
      "Predictable infrastructure pricing with no hidden fees. Custom plans are quoted clearly, not buried in fine print.",
  },
  {
    icon: ShieldCheck,
    title: "Security as a default",
    description:
      "Every plan ships with monitoring, encryption, and firewalls built in — security isn't an upsell here.",
  },
  {
    icon: Rocket,
    title: "We grow with you",
    description:
      "From a client's first small VPS to a multi-region footprint, we scale alongside the businesses we serve.",
  },
];

const DIRECTORS = [
  { name: "Chakradhar Yerneni", role: "CEO" },
  { name: "Anand Teja Swaroop Yerneni", role: "Director" },
];

export function AboutContent() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
        <div
          className="pointer-events-none absolute left-1/2 top-[-10%] h-[480px] w-[480px] -translate-x-1/2 rounded-full opacity-30 blur-[110px]"
          style={{ background: "radial-gradient(circle, var(--accent-violet), transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent-cyan">
              About Us
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl">
              Cloud hosting with reliable infrastructure and responsive support.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">
              Cloudbox99 is a Hyderabad‑based cloud infrastructure provider offering infrastructure‑as‑a‑service (IaaS) through enterprise cloud hosting, VPS hosting, dedicated server hosting, cloud storage solutions, managed IT services, cyber security services and backup & disaster recovery within our enterprise cloud solutions.
            </p>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass mx-auto mt-14 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 rounded-2xl p-8"
          >
            {FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col items-center gap-2">
                <fact.icon className="h-4 w-4 text-accent-cyan" />
                <dt className="font-display text-xl font-semibold text-white">{fact.value}</dt>
                <dd className="text-xs text-muted">{fact.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-10 sm:grid-cols-[auto_1fr] sm:items-start"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <Target className="h-5 w-5 text-accent-violet" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Our mission
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                We’re dedicated to helping businesses reach their full potential by leveraging robust IT infrastructure through an infrastructure‑as‑a‑service (IaaS) model, using enterprise cloud hosting, managed cloud hosting, VPS hosting, dedicated server hosting, cloud storage solutions, managed IT services, cyber security services and backup & disaster recovery so startups, SMEs and enterprises can scale with confidence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      <Testimonials />

      {/* <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What we stand for"
            title="The values behind every deployment"
          />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/[0.06] bg-surface p-6"
              >
                <value.icon className="h-5 w-5 text-accent-cyan" />
                <h3 className="mt-4 font-display text-base font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 sm:p-12"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-accent-cyan">
              Leadership
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              Led by the people who built it
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
              Cloudbox99 Private Limited was incorporated in 2019 in Hyderabad, Telangana and is directed by Chakradhar Yerneni and Anand Teja Swaroop Yerneni.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {DIRECTORS.map((director) => (
                <div
                  key={director.name}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-cyan to-accent-violet text-xs font-bold text-black">
                    {director.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">{director.name}</span>
                    <span className="text-xs text-muted">{director.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Want to work with us?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted sm:text-base">
              Our team can help you choose and run the right mix of enterprise cloud hosting, cloud storage solutions, managed IT services and backup & disaster recovery for your business.
            </p>
            <Link
              href="/#contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
