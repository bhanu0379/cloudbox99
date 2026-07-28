import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PartnersContent } from "@/components/PartnersContent";

export const metadata: Metadata = {
  title: "Channel Sales Partner Program — Cloudbox99",
  description:
    "Become a Cloudbox99 channel sales partner. Resell or refer VPS hosting, dedicated servers, managed IT, and 24/7 security services — with dedicated partner support and recurring revenue.",
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
