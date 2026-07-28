"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Wifi,
  Cable,
  ShieldCheck,
  MonitorPlay,
  Camera,
  ClipboardCheck,
  Quote,
} from "lucide-react";

const META = [
  { label: "Client", value: "Rockwell Business School (RBS)" },
  { label: "Industry", value: "Education" },
  { label: "Services", value: "Network Infrastructure · Managed IT" },
  { label: "Scale", value: "1,000+ students & staff" },
];

const SNAPSHOT = [
  { value: "99.9%", label: "Uptime after rollout" },
  { value: "1,000+", label: "Users connected" },
  { value: "0", label: "Complaints in 2 weeks" },
];

const SOLUTION_NETWORK = [
  { icon: Cable, title: "Full infrastructure audit", description: "A floor-by-floor audit identified the aging equipment and wiring bottlenecks causing dropouts — especially the 2nd floor, RBS's most notorious dead zone." },
  { icon: Wifi, title: "High-speed fiber backbone", description: "Replaced the legacy backbone with high-speed fiber to eliminate the bandwidth ceiling that was throttling classrooms to as low as 1.2 Mbps." },
  { icon: ShieldCheck, title: "Enterprise-grade hardware & security", description: "Installed enterprise networking equipment across campus and introduced robust network security protocols to protect student and staff data." },
];

const SOLUTION_MANAGED = [
  { icon: MonitorPlay, title: "Smart classroom support", description: "Daily health checks on every smart screen, session setup, and live troubleshooting for tools like Instashare 2 wireless screen sharing during lectures and events." },
  { icon: Camera, title: "Campus CCTV monitoring", description: "Daily checks on server-room CCTV devices, maintaining a 10-day video backup retention window, with escalation to hardware experts on any failure." },
  { icon: ClipboardCheck, title: "Monthly IT asset audits", description: "Full monthly audits of laptops, printers, switches, and cabling to catch failing hardware before it becomes a classroom outage." },
];

export function CaseStudyContent() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
        <div
          className="pointer-events-none absolute left-1/2 top-[-10%] h-[480px] w-[480px] -translate-x-1/2 rounded-full opacity-30 blur-[110px]"
          style={{ background: "radial-gradient(circle, var(--accent-violet), transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-4xl px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link
              href="/#services"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Cloudbox99
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent-cyan">
              Case Study · Education
            </span>
            <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl">
              From 1.2 Mbps dropouts to a network 1,000+ students rely on every day
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted sm:text-lg">
              Rockwell Business School&apos;s campus network couldn&apos;t keep up
              with intelligent classrooms and cloud-based learning platforms.
              Here&apos;s how Cloudbox99 rebuilt it from the ground up — and now
              runs it day to day.
            </p>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass mt-10 grid grid-cols-2 gap-x-6 gap-y-5 rounded-2xl p-6 sm:grid-cols-4"
          >
            {META.map((item) => (
              <div key={item.label}>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">{item.label}</dt>
                <dd className="mt-1.5 text-sm font-medium text-white">{item.value}</dd>
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
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-accent-cyan">
              The Challenge
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              An unreliable network was stalling classes and admin work
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              RBS runs on technology — intelligent classrooms, cloud-enabled
              platforms like MyClassBoard, and hundreds of daily online
              sessions. But the campus network wasn&apos;t built for that load.
              Faculty reported speeds as low as 1.2 Mbps and sudden dropouts;
              the 2nd floor became notorious for unreliable access, repeatedly
              halting lectures and administrative work mid-session.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-accent-cyan">
              The Solution
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              Rebuild the backbone, then run it every day
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Cloudbox99 approached RBS in two phases: a ground-up
              infrastructure overhaul, followed by ongoing managed IT services
              to keep every part of campus technology running.
            </p>
          </motion.div>

          <h3 className="mt-10 font-display text-sm font-semibold uppercase tracking-widest text-white/70">
            Phase 1 — Network overhaul
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {SOLUTION_NETWORK.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/[0.06] bg-surface p-5"
              >
                <item.icon className="h-5 w-5 text-accent-cyan" />
                <h4 className="mt-4 font-display text-base font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="mt-12 font-display text-sm font-semibold uppercase tracking-widest text-white/70">
            Phase 2 — Ongoing managed IT
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {SOLUTION_MANAGED.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/[0.06] bg-surface p-5"
              >
                <item.icon className="h-5 w-5 text-accent-violet" />
                <h4 className="mt-4 font-display text-base font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass overflow-hidden rounded-3xl p-8 sm:p-12"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-accent-cyan">
              The Results
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              A network that disappeared into the background — the way it should
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {SNAPSHOT.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-6 text-center">
                  <div className="text-gradient font-display text-3xl font-bold">{stat.value}</div>
                  <div className="mt-1.5 text-xs text-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <Quote className="mt-0.5 h-5 w-5 shrink-0 text-accent-cyan" />
              <p className="text-sm leading-relaxed text-muted">
                Combining user insights, technical tools, and hands-on teamwork,
                Cloudbox99 turned RBS&apos;s internet from a liability into a
                reliable asset — zero complaints for two weeks straight, a
                record for RBS since going online.
              </p>
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
              Facing similar infrastructure challenges?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted sm:text-base">
              Tell us what&apos;s breaking down and we&apos;ll put together a plan —
              the same way we did for RBS.
            </p>
            <Link
              href="/#contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
