import Image from "next/image";
import { cn } from "@/lib/cn";
import logoFullDark from "../../public/logo-full-dark.png";
import logoMarkWhite from "../../public/logo-mark-white.png";

export function Logo({
  className,
  tagline = false,
}: {
  className?: string;
  tagline?: boolean;
}) {
  if (tagline) {
    return (
      <Image
        src={logoFullDark}
        alt="Cloudbox99 — Empowering Cloud, Securely"
        width={681}
        height={466}
        priority
        className={cn("h-auto w-[190px] select-none", className)}
      />
    );
  }

  return (
    <div className={cn("flex items-center gap-2.5 select-none", className)}>
      <Image
        src={logoMarkWhite}
        alt=""
        width={354}
        height={312}
        priority
        className="h-7 w-auto shrink-0"
      />
      <span className="font-display text-[17px] font-bold tracking-tight text-white">
        Cloudbox99
      </span>
    </div>
  );
}
