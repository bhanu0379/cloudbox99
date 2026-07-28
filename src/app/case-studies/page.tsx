"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Quote, BookOpen } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative min-h-screen bg-background pt-24 pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mx-auto max-w-3xl"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent-cyan">
                  <BookOpen className="h-3 w-3" /> Case Studies
                </span>
                <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                  Customer Success Stories
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  See how organizations rely on Cloudbox99 to modernize infrastructure, secure their data, and run uninterrupted.
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass relative grid grid-cols-1 gap-12 overflow-hidden rounded-3xl p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-16"
                >
                  <div
                    className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full opacity-25 blur-[100px]"
                    style={{ background: "radial-gradient(circle, var(--accent-cyan), transparent 70%)" }}
                  />

                  <div className="relative">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent-cyan">
                      {study.client}
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                      {study.title}
                    </h2>
                    <p className="mt-4 max-w-lg text-base text-muted">
                      {study.description}
                    </p>
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white"
                    >
                      Read full case study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  <div className="relative flex flex-col gap-4">
                    {study.quote && (
                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                        <Quote className="h-5 w-5 text-accent-cyan" />
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                          "{study.quote.text}"
                        </p>
                      </div>
                    )}
                    <div className="grid grid-cols-3 gap-3">
                      {study.results.map((r) => (
                        <div
                          key={r.label}
                          className="rounded-2xl border border-white/[0.06] bg-surface px-3 py-5 text-center"
                        >
                          <div className="text-gradient font-display text-xl font-bold sm:text-2xl">
                            {r.value}
                          </div>
                          <div className="mt-1 text-[11px] leading-tight text-muted">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
