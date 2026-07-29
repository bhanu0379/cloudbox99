"use client";

import { useState, useRef } from "react";

import { motion } from "framer-motion";
import {
  Users, Globe, TrendingUp, HeartHandshake,
  Laptop, GraduationCap, Award, Zap,
  Mail, Phone, Send, Briefcase, CheckCircle2, ChevronLeft, ChevronRight
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PERKS = [
  {
    title: "Work with Visionaries",
    description: "Work with industry leaders driving innovation in cloud technology, AI, and smart storage solutions.",
    icon: Users
  },
  {
    title: "Impact Beyond Boundaries",
    description: "Your work will empower businesses and individuals across the globe, making a real difference in the digital world.",
    icon: Globe
  },
  {
    title: "Craft Your Career",
    description: "We offer customized career paths, ensuring you achieve both personal and professional growth.",
    icon: TrendingUp
  },
  {
    title: "A Place to Belong",
    description: "Be part of a diverse, inclusive, and supportive workplace where your ideas are valued and celebrated.",
    icon: HeartHandshake
  },
  {
    title: "Technology at Your Fingertips",
    description: "Experience hands-on access to the latest tools and platforms that redefine industry standards.",
    icon: Laptop
  },
  {
    title: "Learn, Evolve, Lead",
    description: "Upskill with advanced training programs, certifications, and opportunities to lead innovative projects.",
    icon: GraduationCap
  },
  {
    title: "Recognized Excellence",
    description: "Join a company that's trusted by clients and recognized for its cutting-edge solutions in cloud technology.",
    icon: Award
  },
  {
    title: "Be a Change-Maker",
    description: "Your role at Cloudbox99 is not just a job; it's an opportunity to shape the future of technology.",
    icon: Zap
  }
];

const POSITIONS = [
  {
    title: "Networking",
    location: "Hyderabad, India",
    type: "Full-time",
    qualifications: "Any Degree",
    responsibilities: [
      "Design, implement, and maintain computer networks to meet organizational needs.",
      "Monitor network performance and troubleshoot issues to ensure minimal downtime.",
      "Configure and install routers, switches, firewalls, and other network devices.",
      "Manage and optimize network infrastructure for scalability and reliability.",
      "Conduct routine testing of network systems and perform disaster recovery operations.",
      "Collaborate with teams to implement and enforce network security protocols.",
      "Document network configurations, changes, and incidents to maintain accurate records.",
      "Ensure compliance with industry standards and organizational policies."
    ],
    requirements: [
      "Proven experience in network administration or a related field.",
      "Strong understanding of networking concepts such as TCP/IP, DNS, DHCP, and VPNs.",
      "Hands-on experience with routing and switching protocols (e.g., BGP, OSPF).",
      "Knowledge of network security measures, including firewalls, IDS, and IPS.",
      "Familiarity with network monitoring tools (e.g., Wireshark, SolarWinds).",
      "Excellent troubleshooting and problem-solving skills.",
      "Relevant certifications like CCNA, CCNP, or equivalent are a plus.",
      "Ability to manage multiple projects and meet deadlines."
    ]
  },
  {
    title: "Cloud Sales",
    location: "Hyderabad, India",
    type: "Full-time",
    qualifications: "Any Degree",
    responsibilities: [
      "Develop and execute sales strategies to promote cloud solutions to potential clients.",
      "Identify and qualify leads through research, networking, and customer engagement.",
      "Present and demonstrate Cloudbox99's cloud services, including storage, GPUs, and eye cloud storage.",
      "Build strong relationships with clients to understand their needs and provide tailored solutions.",
      "Collaborate with technical teams to ensure seamless customer onboarding and service delivery.",
      "Meet or exceed sales targets by closing deals and managing customer accounts.",
      "Stay updated on market trends, competitors, and emerging cloud technologies.",
      "Prepare and deliver detailed proposals, presentations, and sales reports."
    ],
    requirements: [
      "Proven experience in cloud sales, IT sales, or a related field.",
      "Strong knowledge of cloud technologies, including IaaS, PaaS, and SaaS models.",
      "Excellent communication and negotiation skills.",
      "Ability to explain complex technical solutions in simple terms to non-technical audiences.",
      "Experience with CRM software and sales tracking tools.",
      "Self-motivated with the ability to work independently and in a team environment.",
      "Familiarity with Cloudbox99's service offerings or similar cloud solutions.",
      "A degree in business, IT, or a related field is preferred."
    ]
  }
];

const PROCESS = [
  "Application Review",
  "Initial Interview",
  "Technical Assessment",
  "Final Interview"
];

function JobPositionCard({ pos, i }: { pos: typeof POSITIONS[0], i: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.2 }}
      className="glass rounded-3xl border border-white/5 p-8 sm:p-10 flex flex-col"
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h3 className="font-display text-2xl font-semibold text-white">{pos.title}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              {pos.location}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              {pos.type}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              {pos.qualifications}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1">
        {expanded && (
          <div className="mb-8 animate-in fade-in slide-in-from-top-4 duration-300">
            <h4 className="mb-4 font-semibold text-white">Responsibilities:</h4>
            <ul className="space-y-3 mb-8">
              {pos.responsibilities.map((req, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-muted">
                  <div className="mt-0.5 rounded-full bg-accent-cyan/20 p-0.5 text-accent-cyan">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <span className="leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>

            <h4 className="mb-4 font-semibold text-white">Requirements and skills:</h4>
            <ul className="space-y-3">
              {pos.requirements.map((req, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-muted">
                  <div className="mt-0.5 rounded-full bg-accent-cyan/20 p-0.5 text-accent-cyan">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <span className="leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
    </motion.div>
  );
}

export default function CareersPage() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const w = scrollRef.current.firstElementChild?.clientWidth ?? 260;
    scrollRef.current.scrollBy({ left: dir === "left" ? -(w + 20) : w + 20, behavior: "smooth" });
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+91 8978772727");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hr@cloudbox99.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="relative min-h-screen bg-background pt-24">
          {/* Hero Section */}
          <section className="relative px-6 py-20 text-center lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent-cyan">
                <Briefcase className="h-3 w-3" /> Careers
              </span>
              <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                Join Our Team
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                At Cloudbox99, we are not just building solutions; we are shaping the future of cloud technology. Join a team of passionate professionals committed to delivering top-tier services like Storage as a Service, GPU solutions, Cloud Services, and more.
              </p>
            </motion.div>
          </section>

          {/* Why Work With Us */}
          <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="font-display text-3xl font-semibold text-white">Why Cloudbox99 for Your Career?</h2>
            </div>
            <div className="relative mt-12">
              <button type="button" onClick={() => scroll("left")} aria-label="Scroll left"
                className="absolute -left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-sm sm:hidden">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => scroll("right")} aria-label="Scroll right"
                className="absolute -right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-sm sm:hidden">
                <ChevronRight className="h-4 w-4" />
              </button>

              <div
                ref={scrollRef}
                className="scrollbar-cyan flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden scroll-smooth pb-4 px-[11%] sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4"
              >
                {PERKS.map((perk, i) => (
                  <motion.div
                    key={perk.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group glass w-[78%] flex-shrink-0 snap-center relative overflow-hidden rounded-2xl border border-white/5 p-6 hover:border-white/10 sm:w-auto sm:flex-shrink"
                  >
                    <div className="mb-4 inline-flex rounded-xl bg-accent-cyan/10 p-3 text-accent-cyan">
                      <perk.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-display text-lg font-semibold text-white">
                      {perk.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {perk.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Open Positions */}
          <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="font-display text-3xl font-semibold text-white">Open Positions</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-start">
              {POSITIONS.map((pos, i) => (
                <JobPositionCard key={pos.title} pos={pos} i={i} />
              ))}
            </div>
          </section>

          {/* Recruitment Process & Application Form */}
          <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

              {/* Left Side: Process & Contact */}
              <div>
                <div className="mb-12">
                  <h2 className="mb-6 font-display text-3xl font-semibold text-white">Recruitment Process</h2>
                  <div className="space-y-4">
                    {PROCESS.map((step, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-accent-cyan/30 bg-accent-cyan/10 font-mono text-sm font-semibold text-accent-cyan">
                          {i + 1}
                        </div>
                        <span className="text-lg text-muted">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl border border-white/5 p-8">
                  <h3 className="mb-6 font-display text-xl font-semibold text-white">Contact HR</h3>
                  <div className="space-y-4">
                    <button onClick={handleCopyPhone} className="group flex w-full items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-left transition-colors hover:border-accent-cyan/30 hover:bg-white/[0.04]">
                      <div className="rounded-full bg-accent-cyan/10 p-2.5 text-accent-cyan transition-colors group-hover:bg-accent-cyan/20">
                        {copiedPhone ? <CheckCircle2 className="h-5 w-5 text-green-400" /> : <Phone className="h-5 w-5" />}
                      </div>
                      <div>
                        <div className="text-sm text-muted">Phone</div>
                        <div className="font-medium text-white">
                          +91 8978772727
                          {copiedPhone && <span className="ml-2 text-xs text-green-400">Copied!</span>}
                        </div>
                      </div>
                    </button>
                    <button onClick={handleCopyEmail} className="group flex w-full items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-left transition-colors hover:border-accent-cyan/30 hover:bg-white/[0.04]">
                      <div className="rounded-full bg-accent-cyan/10 p-2.5 text-accent-cyan transition-colors group-hover:bg-accent-cyan/20">
                        {copiedEmail ? <CheckCircle2 className="h-5 w-5 text-green-400" /> : <Mail className="h-5 w-5" />}
                      </div>
                      <div>
                        <div className="text-sm text-muted">Email</div>
                        <div className="font-medium text-white">
                          hr(at)cloudbox99.com
                          {copiedEmail && <span className="ml-2 text-xs text-green-400">Copied!</span>}
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="glass rounded-3xl border border-white/5 p-8 sm:p-10">
                <h2 className="mb-6 font-display text-2xl font-semibold text-white">Job Application Form</h2>

                <form action="/form-handler.php" method="POST" encType="multipart/form-data" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent-cyan/50 focus:bg-white/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent-cyan/50 focus:bg-white/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/80">Phone</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Enter your phone number"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent-cyan/50 focus:bg-white/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="resume" className="mb-2 block text-sm font-medium text-white/80">Upload Resume</label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white file:mr-4 file:rounded-full file:border-0 file:bg-accent-cyan/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-accent-cyan hover:file:bg-accent-cyan/20 cursor-pointer outline-none transition-colors focus:border-accent-cyan/50 focus:bg-white/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent-cyan px-4 py-3.5 font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Apply Now
                  </button>
                </form>
              </div>

            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
