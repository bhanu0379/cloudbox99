import Link from "next/link";
import { Logo } from "./Logo";
import { IsoBadge } from "./IsoBadge";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.878h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.195 0 7.458 2.986 7.458 6.969 0 4.168-2.628 7.525-6.282 7.525-1.226 0-2.378-.636-2.772-1.385l-.756 2.87c-.274 1.04-1.018 2.34-1.518 3.136 1.413.434 2.91.667 4.453.667 6.621 0 11.988-5.367 11.988-11.987C23.993 5.367 18.638 0 12.017 0z" />
    </svg>
  );
}

const COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "VPS Hosting", href: "/#services" },
      { label: "Dedicated Servers", href: "/#services" },
      { label: "Cloud Storage", href: "/#services" },
      { label: "CCTV Cloud Storage", href: "/#services" },
      { label: "Backup & Recovery", href: "/#services" },
      { label: "Managed IT Services", href: "/#services" },
      { label: "Security Operations Center", href: "/#security" },
      { label: "Cybersecurity Consulting", href: "/#security" },
      { label: "Microsoft Licensing", href: "/#services" },
    ],
  },
  {
    title: "Information Link",
    links: [
      { label: "Home", href: "/" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Partners", href: "/partners" },
      { label: "Careers", href: "/careers" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo tagline />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Enterprise cloud infrastructure and cybersecurity — VPS,
              dedicated servers, storage, backup, managed IT, and a 24/7 Service —
              built for reliability and scale.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://www.facebook.com/Cloudbox99india"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cloudbox99 on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-white/30 hover:text-white"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://in.linkedin.com/company/cloudbox99"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cloudbox99 on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-white/30 hover:text-white"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://www.instagram.com/cloudbox99/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cloudbox99 on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-white/30 hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://x.com/Cloudbox99_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cloudbox99 on X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-white/30 hover:text-white"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.youtube.com/channel/UCnriq2eWNklV4WkZjOj1DZw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cloudbox99 on YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-white/30 hover:text-white"
              >
                <YoutubeIcon />
              </a>
              <a
                href="https://www.pinterest.com/cloudbox9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cloudbox99 on Pinterest"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-white/30 hover:text-white"
              >
                <PinterestIcon />
              </a>
            </div>
            <div className="mt-6">
              <IsoBadge size="sm" showLabel />
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Cloudbox99. All rights reserved.</p>
          <p>Hyderabad, India</p>
        </div>
      </div>
    </footer>
  );
}
