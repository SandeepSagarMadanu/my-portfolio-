"use client";

import React from "react";

export default function CSSGlobe() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-transparent">
      {/* Outer glow halo */}
      <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-cyan/10 via-purple/5 to-transparent blur-2xl animate-pulse" />

      {/* Globe shell */}
      <div
        className="relative w-36 h-36 rounded-full border border-cyan/20"
        style={{
          background:
            "radial-gradient(ellipse at 35% 35%, rgba(0,210,255,0.08) 0%, rgba(9,9,11,0.95) 70%)",
          boxShadow:
            "0 0 40px rgba(0,210,255,0.12), inset 0 0 30px rgba(0,210,255,0.04)",
        }}
      >
        {/* Equatorial rings */}
        {[0, 20, 40, 60, 80, -20, -40].map((deg, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-cyan/10"
            style={{
              transform: `rotateX(${deg}deg)`,
              borderRadius: "50%",
              animation: `globe-spin ${18 + i * 3}s linear infinite`,
              animationDirection: i % 2 === 0 ? "normal" : "reverse",
            }}
          />
        ))}

        {/* Meridian lines */}
        {[0, 30, 60, 90, 120, 150].map((deg, i) => (
          <div
            key={i}
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: `rotateY(${deg}deg)` }}
          >
            <div
              className="w-full h-full rounded-full border border-cyan/8"
              style={{
                borderRadius: "50%",
                animation: `globe-spin ${22 + i * 2}s linear infinite`,
              }}
            />
          </div>
        ))}

        {/* Data pulse dots */}
        {[
          { top: "20%", left: "35%", delay: "0s" },
          { top: "55%", left: "65%", delay: "0.6s" },
          { top: "70%", left: "25%", delay: "1.2s" },
          { top: "35%", left: "70%", delay: "1.8s" },
          { top: "80%", left: "55%", delay: "0.3s" },
        ].map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-cyan"
            style={{
              top: dot.top,
              left: dot.left,
              boxShadow: "0 0 6px rgba(0,210,255,0.8)",
              animation: `ping-glow 2.5s ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}

        {/* Highlight sheen */}
        <div
          className="absolute top-3 left-5 w-8 h-5 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.6), transparent)",
            filter: "blur(4px)",
          }}
        />

        {/* Center crosshair */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-[1px] bg-cyan/40" />
          <div className="absolute w-[1px] h-3 bg-cyan/40" />
        </div>
      </div>

      {/* Orbit ring */}
      <div
        className="absolute w-52 h-52 rounded-full border border-purple/10"
        style={{ animation: "globe-spin 30s linear infinite" }}
      >
        {/* Orbiting dot */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple"
          style={{ boxShadow: "0 0 8px rgba(139,92,246,0.9)" }}
        />
      </div>

      {/* Grid scan lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(0,210,255,0.3) 20px, rgba(0,210,255,0.3) 21px)",
        }}
      />
    </div>
  );
}
