import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us — Cloudbox99",
  description:
    "Cloudbox99 is a Hyderabad-based cloud infrastructure and cybersecurity company, founded in 2019, empowering startups, SMEs, and enterprises with VPS hosting, dedicated servers, managed IT, and 24/7 security operations.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
