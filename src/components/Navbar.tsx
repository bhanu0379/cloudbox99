"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { ContactModal } from "./ContactModal";
import { cn } from "@/lib/cn";

const MAIN_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/#security", label: "Security" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/partners", label: "Partners" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/careers", label: "Careers" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const sections = MAIN_LINKS.map((link) => link.href.split("#")[1]).filter(Boolean);
      let current = "";

      if (window.scrollY < 100) {
        current = "";
      } else {
        for (const id of sections) {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 200) {
              current = id;
            }
          }
        }
      }

      setActiveHash(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  const isActive = (href: string) => {
    const isAnchor = href.includes("#");
    const linkPath = href.split("#")[0] || "/";
    const linkHash = href.split("#")[1] || "";

    if (pathname !== linkPath) {
      return false;
    }

    if (isAnchor) {
      return activeHash === linkHash;
    } else {
      return !activeHash;
    }
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.includes("#")) return;

    const linkHash = href.split("#")[1];
    // pathname may include the basePath (e.g. /cloudbox99), so check it ends with / or is /
    const isHomePage = pathname === "/" || pathname.endsWith("/cloudbox99") || pathname.endsWith("/cloudbox99/");

    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(linkHash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      window.history.pushState(null, "", href);
      setOpen(false);
    }
  };


  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <div
            className={cn(
              "flex w-full items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300",
              scrolled ? "glass shadow-lg shadow-black/20" : "border border-transparent"
            )}
          >
            <Link
              href="/#top"
              className="flex items-center"
              onClick={(e) => handleScroll(e, "/#top")}
            >
              <Logo />
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {MAIN_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={cn(
                    "whitespace-nowrap text-sm transition-colors hover:text-white",
                    isActive(link.href) ? "text-white font-medium" : "text-white/70"
                  )}
                >
                  {link.label}
                </Link>
              ))}


            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
              >
                Start Free Trial
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mx-6 mt-2 overflow-hidden rounded-2xl lg:hidden"
            >
              <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#05070d] p-4 shadow-2xl shadow-black/60">
                {MAIN_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      handleScroll(e, link.href);
                      setOpen(false);
                    }}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-sm hover:bg-white/5 hover:text-white",
                      isActive(link.href) ? "bg-white/5 text-white font-medium" : "text-white/70"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}



                <button
                  onClick={() => {
                    setOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="mt-2 rounded-lg bg-white px-3 py-2.5 text-center text-sm font-medium text-black"
                >
                  Start Free Trial
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
