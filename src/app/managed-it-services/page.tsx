import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ManagedITServicesContent } from "@/components/ManagedITServicesContent";

export const metadata: Metadata = {
  title: "Managed IT Services — 24/7 IT Support, Network & Infrastructure Management | Cloudbox99",
  description:
    "End-to-end Managed IT Services in Hyderabad & India. 24/7 proactive network monitoring, multi-tier L1–L4 helpdesk support, Microsoft 365, cybersecurity, CCTV management, and predictable costs for growing businesses.",
  keywords:
    "Managed IT Services, IT support, 24/7 network monitoring, IT helpdesk, IT outsourcing, cybersecurity services, Microsoft 365 administration, cloud management, IT infrastructure, Cloudbox99",
  openGraph: {
    title: "Managed IT Services — Cloudbox99",
    description:
      "Reliable IT Managed Services including 24/7 monitoring, cybersecurity, cloud management, and proactive support to keep your business secure and running smoothly.",
    type: "website",
  },
};

export default function ManagedITServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ManagedITServicesContent />
      </main>
      <Footer />
    </>
  );
}
