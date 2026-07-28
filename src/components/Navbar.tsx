"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown, Users, BookOpen, Briefcase, Handshake } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/cn";

const MAIN_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#security", label: "Security" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About Us", icon: Users, desc: "Our story, mission & team" },
  { href: "/case-studies", label: "Case Studies", icon: BookOpen, desc: "Real-world customer success stories" },
  { href: "/careers", label: "Careers", icon: Briefcase, desc: "Join our growing team" },
  { href: "/partners", label: "Partners", icon: Handshake, desc: "Our technology partners" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCompanyOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

  const isCompanyActive = COMPANY_LINKS.some((l) => pathname === l.href);
  const activeCompanyLabel = COMPANY_LINKS.find((l) => pathname === l.href)?.label ?? "Company";

  return (
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
          <Link href="/#top" className="flex items-center">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {MAIN_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "whitespace-nowrap text-sm transition-colors hover:text-white",
                  isActive(link.href) ? "text-white" : "text-muted"
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Company Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 whitespace-nowrap text-sm transition-colors hover:text-white",
                  isCompanyActive ? "text-white" : "text-muted"
                )}
                aria-expanded={companyOpen}
              >
                {activeCompanyLabel}
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    companyOpen ? "rotate-180" : ""
                  )}
                />
              </button>

              <AnimatePresence>
                {companyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2"
                  >
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#05070d]/80 backdrop-blur-xl p-2 shadow-2xl shadow-black/60">
                      {COMPANY_LINKS.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setCompanyOpen(false)}
                          className={cn(
                            "flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5",
                            pathname === link.href ? "bg-white/5" : ""
                          )}
                        >
                          <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 text-accent-cyan">
                            <link.icon className="h-3.5 w-3.5" />
                          </div>
                          <div>
                            <div className={cn("text-sm font-medium", pathname === link.href ? "text-white" : "text-white/80")}>
                              {link.label}
                            </div>
                            <div className="text-[11px] text-muted leading-tight mt-0.5">{link.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
            >
              Start Free Trial
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
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
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm hover:bg-white/5 hover:text-white",
                    isActive(link.href) ? "bg-white/5 text-white" : "text-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile: Company section */}
              <div className="mt-1 border-t border-white/[0.06] pt-2">
                <p className="px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-muted/50">Company</p>
                {COMPANY_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-white/5 hover:text-white",
                      pathname === link.href ? "bg-white/5 text-white" : "text-muted"
                    )}
                  >
                    <link.icon className="h-4 w-4 text-accent-cyan" />
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-white px-3 py-2.5 text-center text-sm font-medium text-black"
              >
                Start Free Trial
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
