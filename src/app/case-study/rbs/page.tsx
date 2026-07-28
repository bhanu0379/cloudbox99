import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CaseStudyContent } from "@/components/CaseStudyContent";

export const metadata: Metadata = {
  title: "Case Study: Rockwell Business School (RBS) — Cloudbox99",
  description:
    "How Cloudbox99 rebuilt Rockwell Business School's network from unstable, 1.2 Mbps dropouts to 99.9% uptime for 1,000+ students and staff — and now runs their day-to-day IT.",
};

export default function CaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <CaseStudyContent />
      </main>
      <Footer />
    </>
  );
}
