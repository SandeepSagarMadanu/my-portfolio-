import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: "blue" | "purple" | "cyan" | "none";
  hoverEffect?: boolean;
}

export function GlassCard({
  children,
  className,
  glowColor = "none",
  hoverEffect = true,
  ...props
}: GlassCardProps) {
  const glowClasses = {
    blue: "hover:shadow-[0_0_20px_rgba(0,210,255,0.15)] hover:border-primary/30",
    purple: "hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:border-purple/30",
    cyan: "hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:border-cyan/30",
    none: "",
  };

  return (
    <div
      className={cn(
        "relative rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-md transition-all duration-300 ease-out",
        hoverEffect && "hover:-translate-y-1 hover:bg-black/50 hover:border-white/20",
        glowColor !== "none" && glowClasses[glowColor],
        className
      )}
      {...props}
    >
      {/* Glare effect inside */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500" />
      {children}
    </div>
  );
}
