import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustMarquee } from "@/components/TrustMarquee";
import { ServicesMarquee } from "@/components/ServicesMarquee";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { Security } from "@/components/Security";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cloud Hosting, Dedicated Servers, VPS & Cloud Storage",
  description:
    "Cloudbox99 provides secure cloud hosting, VPS, dedicated servers, cloud storage, managed hosting, backup solutions, and IT infrastructure services. Experience high performance, 24/7 support, and scalable cloud solutions for businesses.",
  keywords:
    "Cloud Hosting,Cloud hosting provider,web hosting,cloud hosting in hyderabad,cloud hosting in india,  VPS Hosting, Dedicated Servers, Cloud Storage, Managed Hosting, Enterprise Cloud Solutions, Backup Solutions, Virtual Private Server, Data Storage, Secure Cloud, Business Hosting, IT Infrastructure, Cloudbox99",
  robots: "index, follow",
  authors: [{ name: "Cloudbox99" }],
  verification: {
    google: "lYimAE5K602WU1K1t-aBUuaojBoq-vUFrXpC4RKCNRw",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustMarquee />
        <Services />
        <ServicesMarquee />
        <Stats />
        <Features />
        <Security />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
