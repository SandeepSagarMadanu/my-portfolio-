"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NeonButton } from "../ui/neon-button";
import { ArrowRight, Github, Linkedin, FileDown } from "lucide-react";
import confetti from "canvas-confetti";
import Image from "next/image";

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const roles = [
    "Data Scientist",
    "AI Engineer",
    "ML Engineer",
    "LLM Engineer",
    "Computer Vision Engineer",
    "Independent Researcher",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  const triggerConfetti = () => {
    const duration = 2.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
    const intervalId: ReturnType<typeof setInterval> = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(intervalId);
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const handleDownload = () => {
    triggerConfetti();
    const link = document.createElement("a");
    link.href = "/api/resume";
    link.download = "Sandeep_Sagar_Madanu_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden"
    >
      {/* ── Two-column hero layout ── */}
      <div className="relative max-w-6xl mx-auto px-6 w-full z-10 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

        {/* ── LEFT: Text Content ── */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-7">

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary select-none"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>AION-OS Core Activated: Active IST Zone</span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white leading-tight"
            >
              I Build{" "}
              <span className="bg-gradient-to-r from-primary via-cyan to-purple bg-clip-text text-transparent">
                Intelligent Systems
              </span>
              .
            </motion.h1>

            {/* Rotating Role */}
            <div className="h-10 md:h-12 overflow-hidden flex justify-center md:justify-start items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIdx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-xl md:text-2xl font-mono font-bold text-cyan"
                >
                  {roles[roleIdx]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Pitch */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-xl text-sm md:text-base text-cyan/70 font-mono leading-relaxed"
          >
            Data Scientist &amp; AI Engineer pioneering Explainable AI (XAI) diagnostics, multi-modal
            ingestion systems, and autonomous computer vision models. Building systems that learn,
            reason, and solve complex real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-3"
          >
            <NeonButton
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              variant="primary"
              size="lg"
              className="group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </NeonButton>

            <NeonButton
              onClick={handleDownload}
              variant="outline"
              size="lg"
              className="group hover:text-cyan border-cyan/20"
            >
              <FileDown className="w-4 h-4 mr-2" />
              Get Resume
            </NeonButton>

            <NeonButton
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              variant="purple"
              size="lg"
            >
              Let&apos;s Connect
            </NeonButton>
          </motion.div>

          {/* Social Anchors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex items-center justify-center md:justify-start gap-4"
          >
            <a
              href="https://github.com/SandeepSagarMadanu"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-cyan/70 text-xs font-mono hover:text-white hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(0,210,255,0.2)] transition-all duration-300"
            >
              <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="font-semibold tracking-wide">GitHub</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            </a>

            <div className="w-px h-6 bg-white/10" />

            <a
              href="https://www.linkedin.com/in/madanu-sandeep-sagar/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#0077b5]/30 bg-[#0077b5]/10 backdrop-blur-sm text-[#0ea5e9]/80 text-xs font-mono hover:text-white hover:border-[#0077b5]/60 hover:bg-[#0077b5]/20 hover:shadow-[0_0_20px_rgba(0,119,181,0.3)] transition-all duration-300"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="font-semibold tracking-wide">LinkedIn</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0077b5] animate-pulse" />
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT: Animated Profile Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-shrink-0 flex items-center justify-center"
        >
          {/* Outer slow orbit ring */}
          <div
            aria-hidden="true"
            className="absolute rounded-full border border-cyan/10"
            style={{ width: 360, height: 360, animation: "border-spin 28s linear infinite" }}
          >
            {/* Orbiting glow dot */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan"
              style={{ boxShadow: "0 0 10px 3px rgba(0,210,255,0.7)" }}
            />
          </div>

          {/* Inner counter-orbit ring */}
          <div
            aria-hidden="true"
            className="absolute rounded-full border border-purple/10"
            style={{ width: 310, height: 310, animation: "border-spin 18s linear infinite reverse" }}
          >
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-purple"
              style={{ boxShadow: "0 0 8px 2px rgba(139,92,246,0.7)" }}
            />
          </div>

          {/* Gradient glow border frame */}
          <div
            className="relative rounded-2xl p-[2px]"
            style={{
              background: "linear-gradient(135deg, rgba(0,210,255,0.7) 0%, rgba(139,92,246,0.5) 50%, rgba(0,210,255,0.7) 100%)",
              boxShadow: "0 0 40px rgba(0,210,255,0.2), 0 0 80px rgba(139,92,246,0.1)",
            }}
          >
            {/* Inner photo container — transparent-bg full-body photo */}
            <div
              className="relative overflow-hidden"
              style={{
                width: 260,
                height: 440,
                background: "transparent",
                animation: "hero-float 5s ease-in-out infinite",
              }}
            >
              {/* CRT scanlines overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,210,255,0.015) 3px, rgba(0,210,255,0.015) 4px)",
                }}
              />

              {/* Corner tech accents */}
              {[
                "top-2 left-2 border-t-2 border-l-2",
                "top-2 right-2 border-t-2 border-r-2",
                "bottom-2 left-2 border-b-2 border-l-2",
                "bottom-2 right-2 border-b-2 border-r-2",
              ].map((cls, i) => (
                <div
                  key={i}
                  aria-hidden="true"
                  className={`absolute z-20 w-4 h-4 border-cyan/50 pointer-events-none ${cls}`}
                />
              ))}

              {/* Transparent-background profile photo */}
              <Image
                src="/image.png"
                alt="Sandeep Sagar Madanu"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

          {/* "Available for work" status chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-green-400/30 backdrop-blur-sm text-[10px] font-mono text-green-400 select-none whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Open to Opportunities
          </motion.div>

          {/* Floating skill chips */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="absolute -left-10 top-1/4 px-2.5 py-1.5 rounded-lg bg-black/60 border border-cyan/20 backdrop-blur-sm text-[9px] font-mono text-cyan/80 select-none"
          >
            PyTorch · TF
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute -right-10 top-1/2 px-2.5 py-1.5 rounded-lg bg-black/60 border border-purple/20 backdrop-blur-sm text-[9px] font-mono text-purple/80 select-none"
          >
            LangGraph
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            className="absolute -left-8 top-2/3 px-2.5 py-1.5 rounded-lg bg-black/60 border border-primary/20 backdrop-blur-sm text-[9px] font-mono text-primary/80 select-none"
          >
            Grad-CAM
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
