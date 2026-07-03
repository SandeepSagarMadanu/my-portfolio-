"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "purple" | "cyan" | "outline";
  size?: "sm" | "md" | "lg";
}

export function NeonButton({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: NeonButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center font-mono rounded-lg overflow-hidden transition-all duration-300 font-semibold active:scale-95 select-none z-10 cursor-pointer";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantStyles = {
    primary: "bg-primary text-background shadow-[0_0_15px_rgba(0,210,255,0.4)] hover:shadow-[0_0_25px_rgba(0,210,255,0.7)] hover:bg-[#00e1ff]",
    purple: "bg-purple text-foreground shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:shadow-[0_0_25px_rgba(139,92,246,0.7)] hover:bg-[#9a6eff]",
    cyan: "bg-cyan text-background shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] hover:bg-[#2effff]",
    outline: "border border-white/20 text-foreground hover:bg-white/10 hover:border-white/40",
  };

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant !== "outline" && (
        <span className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
      )}
    </button>
  );
}
