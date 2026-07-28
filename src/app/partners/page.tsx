import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PartnersContent } from "@/components/PartnersContent";

export const metadata: Metadata = {
  title: "Cloudbox99 Partner Program | Cloud Reseller & MSP Partnership",
  description:
    "Join the Cloudbox99 Partner Program and grow your business with enterprise cloud infrastructure, hosting, backup, cybersecurity, and managed IT solutions. Build recurring revenue with trusted cloud services.",
};

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PartnersContent />
      </main>
      <Footer />
    </>
  );
}
