"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import {
  Terminal as TerminalIcon,
  Search,
  Shield,
  Settings,
  Menu,
  X,
} from "lucide-react";

import ParticleCanvas from "@/components/ui/particle-canvas";
import Loader from "@/components/sections/loader";
import Hero from "@/components/sections/hero";
import ProfessionalExperience from "@/components/sections/ProfessionalExperience";
import AcademicEducation from "@/components/sections/AcademicEducation";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Research from "@/components/sections/research";
import Analytics from "@/components/sections/analytics";
import Contact from "@/components/sections/contact";
import Terminal from "@/components/ui/terminal";
import CommandMenu from "@/components/sections/command-menu";
import FloatingChatbot from "@/components/ui/floating-chatbot";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Tracks if the user has scrolled past the hero section
  const [pastHero, setPastHero] = useState(false);

  // Always start at the very top — disable browser scroll restoration
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  // Initialize Lenis smooth scroll after loader completes
  useEffect(() => {
    if (loading) return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => { lenis.destroy(); };
  }, [loading]);

  // Scroll watcher — detect when hero section leaves the viewport
  useEffect(() => {
    if (loading) return;
    const onScroll = () => {
      const heroEl = document.getElementById("hero");
      if (!heroEl) return;
      const rect = heroEl.getBoundingClientRect();
      // Hero is "past" when its bottom edge has scrolled above the header
      setPastHero(rect.bottom < 64);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [loading]);

  // Ctrl+K / Cmd+K opens command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setCommandMenuOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Experience", id: "professional" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Research Lab", id: "research" },
    { name: "Control Room", id: "analytics" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  if (loading) {
    return (
      <>
        <ParticleCanvas />
        <Loader onComplete={() => setLoading(false)} />
      </>
    );
  }

  // Dynamic header text color based on scroll position
  // Over hero: slightly translucent for contrast with bright photo bg
  // Past hero: full cyan/white palette
  const navTextClass = pastHero
    ? "text-cyan/70 hover:text-white"
    : "text-white/80 hover:text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]";

  const headerBgClass = pastHero
    ? "bg-background/80 border-white/5 backdrop-blur-md"
    : "bg-background/30 border-white/10 backdrop-blur-sm";

  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <ParticleCanvas />
      <FloatingChatbot />
      <CommandMenu isOpen={commandMenuOpen} onClose={() => setCommandMenuOpen(false)} />

      {/* Glass Navigation Header */}
      <header
        className={`fixed top-0 inset-x-0 border-b z-40 transition-all duration-500 select-none ${headerBgClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-4">

          {/* Logo — full name, no badge, nowrap */}
          <div className="flex-shrink-0">
            <span className="font-heading font-extrabold text-base md:text-xl tracking-wide whitespace-nowrap animate-gradient-text">
              Sandeep Sagar Madanu
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className={`hidden lg:flex items-center gap-4 text-xs font-mono transition-colors duration-500 ${navTextClass}`}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors cursor-pointer select-none ${navTextClass}`}
              >
                {link.name}
              </button>
            ))}

            <span className="h-4 w-[1px] bg-white/10" />

            {/* Terminal toggle */}
            <button
              onClick={() => setTerminalOpen(!terminalOpen)}
              className={`p-1.5 rounded transition-all select-none cursor-pointer ${terminalOpen
                ? "bg-primary/20 text-primary border border-primary/30"
                : navTextClass
                }`}
              title="Toggle System Terminal"
            >
              <TerminalIcon className="w-4 h-4" />
            </button>

            {/* Search launcher */}
            <button
              onClick={() => setCommandMenuOpen(true)}
              className="flex items-center space-x-2 px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-cyan/50 hover:text-white transition-colors select-none cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search</span>
              <kbd className="px-1 py-0.5 rounded bg-white/10 text-[9px] text-white/50">
                Ctrl+K
              </kbd>
            </button>
          </nav>

          {/* Mobile Nav Controls */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={() => setCommandMenuOpen(true)}
              className="p-1.5 rounded border border-white/10 bg-white/5 text-cyan/70"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-cyan/70 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-white/10 bg-background/95 backdrop-blur-lg px-6 py-4 flex flex-col space-y-4 text-sm font-mono text-cyan/70">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left py-1 hover:text-white transition-colors select-none cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                setTerminalOpen(!terminalOpen);
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 hover:text-white flex items-center space-x-2 select-none cursor-pointer"
            >
              <TerminalIcon className="w-4 h-4 text-primary" />
              <span>Toggle System Terminal</span>
            </button>
          </div>
        )}
      </header>

      {/* Main Sections */}
      <main className="relative z-10 w-full pt-14">
        <Hero />
        <ProfessionalExperience />
        <AcademicEducation />
        <Skills />
        <Projects />
        <Research />
        <Analytics />

        {/* Embedded Terminal Shell */}
        {terminalOpen && (
          <section id="terminal-section" className="py-12 max-w-5xl mx-auto px-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-cyan/60">
                <span className="flex items-center space-x-1.5">
                  <Shield className="w-4 h-4 text-primary animate-pulse" />
                  <span>AION-OS SYSTEM MONITORS: STANDBY</span>
                </span>
                <span>Type &apos;help&apos; for instruction list</span>
              </div>
              <Terminal onClose={() => setTerminalOpen(false)} />
            </div>
          </section>
        )}

        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 bg-black/60 font-mono text-[10px] text-cyan/40 select-none text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-1.5">
            <Settings className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "8s" }} />
            <span>AION-OS Kernel 2.0.26. Operating region Hyderabad, IN.</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} Sandeep Sagar Madanu. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
