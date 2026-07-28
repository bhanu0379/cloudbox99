import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, AlertTriangle, Target, LineChart, Quote } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }));
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="relative min-h-screen bg-background pt-32 pb-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            
            {/* Back Link */}
            <div className="mb-12">
              <Link
                href="/case-studies"
                className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Case Studies
              </Link>
            </div>

            {/* Header */}
            <header className="mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent-cyan">
                {study.client}
              </span>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                {study.title}
              </h1>
            </header>

            {/* Metrics */}
            <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {study.results.map((r) => (
                <div
                  key={r.label}
                  className="rounded-2xl border border-white/[0.06] bg-surface p-6 text-center"
                >
                  <div className="text-gradient font-display text-3xl font-bold">
                    {r.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-muted">{r.label}</div>
                </div>
              ))}
            </div>

            {/* Content Sections */}
            <div className="space-y-16">
              
              {/* Overview */}
              <section>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-cyan/10 text-accent-cyan">
                    <Target className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-white">Client Overview</h2>
                </div>
                <p className="text-lg leading-relaxed text-muted">
                  {study.overview}
                </p>
              </section>

              {/* Challenges */}
              <section className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 sm:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-violet/10 text-accent-violet">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-white">Key Challenges</h2>
                </div>
                <ul className="space-y-4">
                  {study.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-violet" />
                      <span className="leading-relaxed text-muted">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Solution */}
              <section>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-cyan/10 text-accent-cyan">
                    <study.icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-white">The Cloudbox99 Solution</h2>
                </div>
                <ul className="space-y-4">
                  {study.solution.map((sol, idx) => (
                    <li key={idx} className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                      <div className="mt-0.5 text-accent-cyan">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <span className="leading-relaxed text-muted">{sol}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Impact */}
              <section>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                    <LineChart className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-white">Business Impact</h2>
                </div>
                <ul className="space-y-4">
                  {study.impact.map((impact, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/40" />
                      <span className="leading-relaxed text-muted">{impact}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Quote */}
              {study.quote && (
                <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center sm:p-12">
                  <Quote className="mx-auto mb-6 h-8 w-8 text-accent-cyan opacity-50" />
                  <p className="font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
                    "{study.quote.text}"
                  </p>
                  <div className="mt-6 text-sm font-semibold text-muted uppercase tracking-wider">
                    — {study.quote.author}
                  </div>
                </section>
              )}

            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
