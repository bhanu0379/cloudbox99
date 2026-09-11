"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import rockwellLogo from "../../public/clients/rockwellSchoolLogo.png";
import uniprotechLogo from "../../public/clients/Uniprotech-2.png";
import kendraLogo from "../../public/clients/Kendra.png";
import {
  ArrowRight,
  Headset,
  Wifi,
  Laptop,
  Cloud,
  ShieldCheck,
  Camera,
  CheckCircle2,
  Clock,
  Activity,
  TrendingDown,
  Building,
  GraduationCap,
  Building2,
  Stethoscope,
  Briefcase,
  Plus,
  Quote,
  MessageCircle,
  PhoneCall,
  Sparkles,
  Check,
  ChevronRight,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ContactModal } from "./ContactModal";
import { cn } from "@/lib/cn";

const METRICS = [
  {
    value: "15-min",
    label: "Response Time",
    sublabel: "Rapid SLA-backed engineering response",
    icon: Clock,
  },
  {
    value: "99.9%",
    label: "Assured Uptime",
    sublabel: "High-availability proactive monitoring",
    icon: Activity,
  },
  {
    value: "Up to 40%",
    label: "Cost Savings",
    sublabel: "Versus maintaining a full in-house IT team",
    icon: TrendingDown,
  },
  {
    value: "Enterprise",
    label: "Grade Reliability",
    sublabel: "L1–L4 multi-tier certified engineers",
    icon: Building,
  },
];

const CORE_SERVICES = [
  {
    id: "asset-tracking",
    icon: Laptop,
    tag: "Asset Lifecycle",
    title: "Asset Tracking & Lifecycle Management",
    description:
      "Seamless lifecycle management of laptops, desktops, tablets, smart boards, and all workplace technology assets.",
    features: [
      "Hardware inventory & automated asset tagging",
      "Automated OS patch deployment & updates",
      "Warranty tracking & scheduled refresh cycles",
      "Zero-touch employee onboarding setup",
    ],
  },
  {
    id: "network-wifi",
    icon: Wifi,
    tag: "Connectivity",
    title: "Network & WiFi Management",
    description:
      "High-speed, enterprise-grade network infrastructure with rock-solid WiFi coverage and zero dead zones.",
    features: [
      "Routers, firewalls, and managed switches setup",
      "High-density WiFi access point optimization",
      "Corporate & guest network SSID isolation",
      "Bandwidth prioritization & QoS controls",
    ],
  },
  {
    id: "helpdesk",
    icon: Headset,
    tag: "Multi-Tier Desk",
    title: "IT Helpdesk & Support (L1–L4)",
    description:
      "Comprehensive multi-tier support spanning fast daily troubleshooting to advanced system engineering.",
    features: [
      "L1/L2 fast desk for software & user issues",
      "L3/L4 expert escalation for complex architectures",
      "Remote desktop & rapid screen-share troubleshooting",
      "Scheduled & emergency onsite technician visits",
    ],
  },
  {
    id: "cloud-apps",
    icon: Cloud,
    tag: "Productivity & SaaS",
    title: "Cloud & Application Management",
    description:
      "End-to-end administration of cloud environments, SaaS productivity suites, and digital platforms.",
    features: [
      "Microsoft 365 (Teams, SharePoint, Outlook) admin",
      "Google Workspace configuration & security",
      "Identity management, single sign-on (SSO) & MFA",
      "SaaS license audits to eliminate unused seats",
    ],
  },
  {
    id: "cybersecurity",
    icon: ShieldCheck,
    tag: "Compliance & Security",
    title: "Cybersecurity & Compliance",
    description:
      "Airtight cybersecurity posture, endpoint protection, and compliance enforcement to safeguard your company data.",
    features: [
      "Next-gen endpoint detection & antivirus (EDR)",
      "Automated vulnerability scans & CVE patching",
      "Role-based access controls & data encryption",
      "Audit-ready security policies (ISO 27001 aligned)",
    ],
  },
  {
    id: "cctv",
    icon: Camera,
    tag: "EyeCloud Surveillance",
    title: "CCTV & Physical Surveillance Management",
    description:
      "Complete camera installation, health monitoring, NVR/DVR maintenance, and secure cloud video storage.",
    features: [
      "Camera setup, alignment, and NVR maintenance",
      "EyeCloud encrypted cloud video storage backup",
      "24/7 camera offline alerts & health monitoring",
      "Multi-branch centralized remote feed access",
    ],
  },
];



const INDUSTRIES = [
  {
    icon: GraduationCap,
    title: "Educational Institutes",
    description:
      "Campus-wide high-density WiFi, smart classroom boards, student lab device lockdowns, digital attendance, and asset lifecycle tracking.",
  },
  {
    icon: Building2,
    title: "Co-Working Spaces",
    description:
      "Multi-tenant bandwidth management, high-concurrency WiFi, visitor access control, meeting room AV support, and 24/7 CCTV cloud retention.",
  },
  {
    icon: Stethoscope,
    title: "Clinics & Healthcare",
    description:
      "Zero-downtime medical ERP server operations, HIPAA-level patient data security, diagnostic workstation setup, and encrypted offsite backups.",
  },
  {
    icon: Briefcase,
    title: "IT & Professional Firms",
    description:
      "Secure remote work setups, VPN tunnels, DevOps server infrastructure, M365 migration, and compliance audits for enterprise clients.",
  },
];

const TESTIMONIALS = [
  {
    title: "Wonderful Support!",
    quote:
      "Cloudbox99's technical expertise and proactive support ensure smooth, secure IT operations. Exceptional problem-solving and professionalism boost efficiency highly valued at 4.9/5.",
    client: "Rockwell Business School of Management",
    initials: "RS",
    logo: rockwellLogo,
  },
  {
    title: "Awesome Services!",
    quote:
      "We got in alliance with Cloudbox99 when it was a small startup and probably that was the best decision we made while choosing a service. They grew along with us and helped us to fulfil our client requirements with utmost priority and care.",
    client: "UNIPRO TECH",
    initials: "UT",
    logo: uniprotechLogo,
  },
  {
    title: "Great & Talented Team!",
    quote:
      "Cloudbox99 has been a great cloud partner for us. Their uptime is unmatched and they have a great customer service team.",
    client: "Kendra Business Technologies Private Limited",
    initials: "KB",
    logo: kendraLogo,
  },
];

const FAQS = [
  {
    q: "Why should my business use Managed IT Services?",
    a: "Managed IT Services allow you to eliminate costly unexpected downtime, improve organizational cybersecurity, reduce fixed IT hiring costs, and free up your leadership to focus on core business growth rather than daily technical fires.",
  },
  {
    q: "What size businesses and industries do you support?",
    a: "We support startups, growing SMEs, and multi-branch enterprises across diverse industries, including educational institutions, co-working spaces, healthcare clinics, legal and accounting firms, software companies, and retail businesses.",
  },
  {
    q: "What is the difference between your L1/L2 and L3/L4 support tiers?",
    a: "Our L1/L2 engineers handle daily user operations such as desktop troubleshooting, software crashes, email configuration, printer setups, and connectivity. Our L3/L4 senior architects handle core infrastructure, complex firewall routing, hypervisors, server migrations, disaster recovery, and strategic system optimization.",
  },
  {
    q: "What specific infrastructure and cloud environments do you manage?",
    a: "We provide complete administration for Windows and Linux servers, Microsoft 365 (Teams, SharePoint, Exchange), Google Workspace, bare-metal dedicated servers, virtualization hypervisors (VMware, Proxmox), enterprise switches, routers, and firewalls.",
  },
  {
    q: "How do we contact support when an issue arises?",
    a: "Support is available 24/7/365 via phone hotline, WhatsApp direct dispatch, email, and our centralized ticketing portal. Critical incidents are escalated immediately to an on-duty L3 engineer within our guaranteed 15-minute SLA.",
  },
  {
    q: "How do you deliver your services (Remote vs. Onsite)?",
    a: "We offer customized hybrid delivery models: lightning-fast remote desktop support that solves over 85% of issues in minutes, backed by scheduled or dedicated onsite engineer visits (3 to 6 days per week) depending on your tier and physical site requirements.",
  },
  {
    q: "What systems and cloud environments do you manage?",
    a: "We manage local office networks, on-premise server racks, hybrid cloud setups, and major SaaS ecosystems. This includes full tenant migrations, user license audits to eliminate duplicate spend, and automated cloud backup scheduling.",
  },
  {
    q: "How do you handle Network and System Administration?",
    a: "We manage your entire core infrastructure from end to end: enterprise gateways, edge routers, managed PoE switches, high-density WiFi access points, VPN tunnels, and automated failover connections, ensuring reliable high-speed throughput and airtight perimeter security.",
  },
];

export function ManagedITServicesContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDefaultNeed, setModalDefaultNeed] = useState("Managed IT Services - 7-Day Free Trial");

  // Automatically trigger the 7-day free trial pop up when visiting the Managed IT Services page
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = (need: string) => {
    setModalDefaultNeed(need);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
        <div
          className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-35 blur-[120px]"
          style={{ background: "radial-gradient(circle, var(--accent-violet), transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute right-[10%] top-[30%] h-[380px] w-[380px] rounded-full opacity-20 blur-[100px]"
          style={{ background: "radial-gradient(circle, var(--accent-cyan), transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-accent-cyan">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse" />
              Managed IT Services
            </span>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">
              Focus on Your Business. <br className="hidden sm:inline" />
              <span className="text-gradient">We&apos;ll Handle Your IT.</span>
            </h1>

            <h2 className="mt-4 font-display text-lg font-medium text-accent-cyan/90 sm:text-2xl">
              Reliable IT. Predictable Costs. Zero Surprises.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              Stop firefighting tech problems. Cloudbox99 delivers enterprise-grade IT support for
              educational institutes, co-working spaces, specialized clinics, professional services
              firms, IT companies, and growing businesses.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => handleOpenModal("Managed IT Services - Free IT Health Check")}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-white/10"
              >
                Get Your Free IT Health Check
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="https://wa.me/918978772727"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-7 py-4 text-sm font-semibold text-emerald-300 transition-all hover:bg-emerald-500/20 hover:border-emerald-500/50"
              >
                <MessageCircle className="h-4 w-4" />
                Talk To Us On WhatsApp
              </a>
            </div>

            {/* Quick trust strip */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-mono text-muted/80">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent-cyan" />
                24/7/365 Proactive Monitoring
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent-cyan" />
                Multi-Tier L1–L4 Support
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent-cyan" />
                Remote & Onsite Technicians
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent-cyan" />
                15-Min Response SLA
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* METRICS & STATS SECTION */}
      <section className="relative border-y border-white/[0.06] bg-surface/40 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-10">
            <span className="font-mono text-[11px] uppercase tracking-widest text-accent-cyan">
              Proven Track Record
            </span>
            <h3 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
              Performance Metrics That Power Your Growth
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass relative flex flex-col items-center rounded-2xl p-6 text-center"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 mb-3">
                  <metric.icon className="h-5 w-5 text-accent-cyan" />
                </div>
                <div className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {metric.value}
                </div>
                <div className="mt-1 font-display text-base font-semibold text-white">
                  {metric.label}
                </div>
                <p className="mt-1.5 text-xs text-muted">{metric.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTION (6 PILLARS) */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Proactive IT Operations"
            title="We Don't Just Fix Problems. We Prevent Them."
            description="Proactive IT management that eliminates downtime and keeps your business running smoothly around the clock."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CORE_SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass group relative flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-cyan-500/5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-transform group-hover:scale-110">
                      <service.icon className="h-6 w-6 text-accent-cyan" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>

                  <div className="mt-6 border-t border-white/[0.06] pt-5">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-accent-cyan mb-3">
                      Key Capabilities:
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs text-muted">
                          <Check className="h-3.5 w-3.5 shrink-0 text-accent-cyan mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-7 pt-4">
                  <button
                    type="button"
                    onClick={() => handleOpenModal(`Managed IT - ${service.title}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-accent-cyan transition-colors"
                  >
                    Consult on this service
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* INDUSTRY SPECIFIC SOLUTIONS */}
      <section className="relative border-y border-white/[0.06] bg-surface/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Specialized Verticals"
            title="Tailored for Your Industry"
            description="Different businesses have different technology challenges. We deliver customized setups for your specific ecosystem."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 hover:border-white/20 transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 mb-4">
                  <ind.icon className="h-5 w-5 text-accent-cyan" />
                </div>
                <h4 className="font-display text-lg font-semibold text-white">{ind.title}</h4>
                <p className="mt-2.5 text-xs leading-relaxed text-muted">{ind.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Client Success"
            title="Trusted Across Industries"
            description="See what business leaders say about Cloudbox99's managed IT reliability."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.client}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass relative flex flex-col justify-between rounded-2xl p-7 hover:border-white/20 transition-all"
              >
                <div>
                  <Quote className="h-6 w-6 text-accent-cyan" />
                  <h4 className="mt-4 font-display text-base font-semibold text-white">
                    {t.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted">&ldquo;{t.quote}&rdquo;</p>
                </div>

                <div className="mt-6 flex items-center gap-3.5 border-t border-white/[0.06] pt-5">
                  {t.logo ? (
                    <div className="relative h-9 w-24 shrink-0 flex items-center justify-start">
                      <Image
                        src={t.logo}
                        alt={t.client}
                        className="max-h-8 w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-cyan to-accent-violet text-xs font-bold text-black">
                      {t.initials}
                    </div>
                  )}
                  <div className="text-xs font-medium text-white leading-snug">{t.client}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="relative border-t border-white/[0.06] bg-surface/30 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            description="Everything you need to know about our Managed IT Services operations, SLAs, and onboarding."
          />

          <div className="mt-14 flex flex-col gap-3.5">
            {FAQS.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-2xl border border-white/[0.06] bg-surface transition-colors hover:border-white/15"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-medium text-white">
                      {item.q}
                    </span>
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

          <div className="mt-12 text-center">
            <p className="text-sm text-muted">Still have questions?</p>
            <button
              type="button"
              onClick={() => handleOpenModal("Managed IT Services - Custom Questions")}
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10 hover:border-white/30"
            >
              Contact Our Engineering Team
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* FINAL HIGH-IMPACT CTA */}
      <section className="relative overflow-hidden py-24">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[120px]"
          style={{ background: "radial-gradient(circle, var(--accent-cyan), var(--accent-violet) 80%, transparent)" }}
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 sm:p-14 border border-white/15"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-accent-cyan">
              <Sparkles className="h-3 w-3" />
              Transform Your Infrastructure
            </span>

            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Stop Managing Servers and Start <br className="hidden sm:inline" />
              Focusing on Your Mission.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              Let&apos;s talk about how we can optimize your networks, eliminate downtime, and reduce
              your IT overhead with our end-to-end managed service packages.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => handleOpenModal("Managed IT Services - Free IT Assessment Schedule")}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg"
              >
                Schedule Your Free IT Assessment
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="https://wa.me/918978772727"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-7 py-4 text-sm font-semibold text-emerald-300 transition-colors hover:bg-emerald-500/20"
              >
                <PhoneCall className="h-4 w-4" />
                +91 89787 72727
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7-DAY FREE TRIAL / CONTACT MODAL */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultNeed={modalDefaultNeed}
        title="Start a 7-day free trial"
        subtitle="Experience our enterprise-grade managed IT support with zero risk. Tell us about your setup to get started."
        submitText="Start 7-Day Free Trial"
      />
    </>
  );
}
