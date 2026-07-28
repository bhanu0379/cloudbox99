import { ShieldCheck } from "lucide-react";

interface IsoBadgeProps {
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function IsoBadge({ size = "md", showLabel = false }: IsoBadgeProps) {
  const sizeMap = {
    sm: { outer: "h-12 w-12", icon: "h-4 w-4", text: "text-[8px]", label: "text-[7px]" },
    md: { outer: "h-16 w-16", icon: "h-5 w-5", text: "text-[9px]", label: "text-[8px]" },
    lg: { outer: "h-20 w-20", icon: "h-6 w-6", text: "text-[11px]", label: "text-[9px]" },
  };

  const s = sizeMap[size];

  return (
    <div className="flex items-center gap-3">
      <div
        className={`${s.outer} relative flex flex-col items-center justify-center rounded-full border border-accent-cyan/30 bg-accent-cyan/5 backdrop-blur-sm ring-1 ring-inset ring-white/5 transition-all duration-300 hover:border-accent-cyan/60 hover:bg-accent-cyan/10`}
      >
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-accent-cyan/5 blur-md" />
        <ShieldCheck className={`${s.icon} relative text-accent-cyan`} />
        <span className={`${s.text} relative font-mono font-bold leading-tight tracking-tight text-white`}>
          27001
        </span>
      </div>
      {showLabel && (
        <div>
          <div className="text-sm font-semibold text-white">ISO 27001 Certified</div>
          <div className="text-xs text-muted">Information Security Management</div>
        </div>
      )}
    </div>
  );
}
