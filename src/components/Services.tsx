"use client";

import { useRef, useState } from "react";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ContactModal } from "./ContactModal";

const SERVICES = [
  {
    icon: Server,
    title: "VPS Hosting",
    description:
      "Scalable VPS hosting with instant provisioning and full control for growing businesses.",
    tags: ["Instant provisioning", "Full root access"],
  },
  {
    icon: Cpu,
    title: "Dedicated Servers",
    description:
      "High-performance bare-metal servers with guaranteed resources for mission-critical workloads.",
    tags: ["Enterprise hardware", "Guaranteed resources"],
  },
  {
    icon: Database,
    title: "Cloud Storage",
    description:
      "Secure, AWS-powered cloud storage for backups, files and long-term data.",
    tags: ["High availability"],
  },
  {
    icon: Camera,
    title: "CCTV Cloud Storage",
    description:
      "Encrypted cloud storage purpose-built for continuous CCTV footage and compliance.",
    tags: ["Real-time backup", "Encrypted footage"],
  },
  {
    icon: RotateCcw,
    title: "Cloud Backup & Recovery",
    description:
      "Automated cloud backups with fast recovery to minimize downtime after incidents.",
    tags: ["Automated snapshots", "Fast restore"],
  },
  {
    icon: Headset,
    title: "Managed IT Services",
    description:
      "End-to-end managed IT support so your team can focus on core business, not infrastructure.",
    tags: ["Remote & onsite", "Dedicated engineers"],
  },
  {
    icon: Radar,
    title: "Cybersecurity Consulting",
    description:
      "Security assessments and protection services to reduce risk and stop threats.",
    tags: ["VA & PEN testing"],
    href: "#security",
  },
  {
    icon: KeyRound,
    title: "Microsoft Licensing",
    description:
      "Microsoft licenses with expert guidance to scale users and workloads efficiently.",
    tags: ["Microsoft partner"],
  },
];

export function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild?.clientWidth ?? 280;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -(cardWidth + 20) : cardWidth + 20,
      behavior: "smooth",
    });
  };

  return (
    <section id="services" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Infrastructure"
          title="Enterprise Cloud Hosting, VPS, Dedicated Servers & Managed IT Services "
          description="Cloudbox99 provides enterprise cloud hosting services, VPS hosting, dedicated servers, cloud storage, cyber security, backup and disaster recovery, and managed IT solutions designed to help businesses scale securely."
        />

        <div className="relative mt-16">
          {/* mobile arrow buttons */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute -left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-sm sm:hidden"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute -right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-sm sm:hidden"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div
            ref={scrollRef}
            className="scrollbar-cyan flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden scroll-smooth px-[11%] pb-4 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4"
          >
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
                className="group glass relative flex w-[78%] flex-shrink-0 snap-center flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 sm:w-auto sm:flex-shrink"
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
                {service.href ? (
                  <a
                    href={service.href}
                    className="relative mt-5 inline-flex items-center gap-1 text-sm font-medium text-white opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100"
                  >
                    Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedService(service.title);
                      setIsModalOpen(true);
                    }}
                    className="relative mt-5 inline-flex items-center gap-1 text-sm font-medium text-white opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100 text-left"
                  >
                    Get a quote <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          defaultNeed={selectedService}
        />
      </div>
    </section>
  );
}
