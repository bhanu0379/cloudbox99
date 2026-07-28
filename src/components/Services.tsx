"use client";

import { motion } from "framer-motion";
import {
  Server,
  Cpu,
  Database,
  RotateCcw,
  Radar,
  Headset,
  Camera,
  KeyRound,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const SERVICES = [
  {
    icon: Server,
    title: "VPS Hosting",
    description:
      "Top-tier virtual private servers tailored for business growth — provision in minutes and scale resources up or down as demand changes.",
    tags: ["Instant provisioning", "Full root access"],
  },
  {
    icon: Cpu,
    title: "Dedicated Servers",
    description:
      "Bare-metal power on advanced hardware hosted in top-tier data centers, built for workloads that need guaranteed performance.",
    tags: ["Enterprise hardware", "Guaranteed resources"],
  },
  {
    icon: Database,
    title: "Cloud Storage",
    description:
      "Storage as a Service built on a partnership with AWS — secure, flexible, and cost-effective storage that scales with your data.",
    tags: ["AWS-powered", "High availability"],
  },
  {
    icon: Camera,
    title: "CCTV Cloud Storage",
    description:
      "Scalable cloud storage purpose-built for surveillance footage, with real-time backups and advanced encryption.",
    tags: ["Real-time backup", "Encrypted footage"],
  },
  {
    icon: RotateCcw,
    title: "Cloud Backup & Recovery",
    description:
      "Automated backup and disaster recovery solutions that keep your business running when the unexpected happens.",
    tags: ["Automated snapshots", "Fast restore"],
  },
  {
    icon: Headset,
    title: "Managed IT Services",
    description:
      "End-to-end managed IT and remote support — from onboarding to day-to-day operations, handled by our engineers.",
    tags: ["Remote & onsite", "Dedicated engineers"],
  },
  {
    icon: Radar,
    title: "Cybersecurity Consulting",
    description:
      "Vulnerability assessments, penetration testing, DLP, email security, and MDR/XDR — safeguarding your business against evolving threats.",
    tags: ["VA & PEN testing", "MDR/XDR"],
    href: "#security",
  },
  {
    icon: KeyRound,
    title: "Microsoft Licensing",
    description:
      "As a trusted Microsoft partner, we provide genuine Microsoft licenses and products backed by support and scalability.",
    tags: ["Microsoft partner", "Genuine licenses"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Infrastructure"
          title="Enterprise Cloud Hosting, VPS, Dedicated Servers & Managed IT Services "
          description="Cloudbox99 provides enterprise cloud hosting services, VPS hosting, dedicated servers, cloud storage, cyber security, backup and disaster recovery, and managed IT solutions designed to help businesses scale securely."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className="group glass relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
                style={{ background: "radial-gradient(circle, var(--accent-cyan), transparent 70%)" }}
              />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <service.icon className="h-5 w-5 text-accent-cyan" />
              </div>
              <h3 className="relative mt-5 font-display text-base font-semibold text-white">
                {service.title}
              </h3>
              <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={service.href ?? "#contact"}
                className="relative mt-5 inline-flex items-center gap-1 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100"
              >
                {service.href ? "Learn more" : "Get a quote"} <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
