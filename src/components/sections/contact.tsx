"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "../ui/glass-card";
import { NeonButton } from "../ui/neon-button";
import { RESUME_DATA } from "@/lib/rag-data";
import { Mail, Phone, MapPin, Send, MessageSquareCode } from "lucide-react";
import CSSGlobe from "../ui/css-globe";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-white/[0.01] border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Establish{" "}
            <span className="bg-gradient-to-r from-primary to-cyan bg-clip-text text-transparent">
              Connection
            </span>
          </h2>
          <p className="text-xs md:text-sm font-mono text-cyan/60">
            PING THE AION-OS NETWORKS TO SECURE AN INTERVIEW AND RECRUIT SANDEEP
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Panel: Coordinates + Globe */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 flex flex-col justify-between h-full"
          >
            <GlassCard glowColor="purple" className="space-y-6">
              <div className="flex items-center space-x-2 text-white border-b border-white/10 pb-3">
                <MessageSquareCode className="w-5 h-5 text-purple" />
                <h3 className="font-heading font-bold text-base">Direct System Coordinates</h3>
              </div>

              <div className="space-y-4 font-mono text-xs md:text-sm">
                <div className="flex items-center space-x-3 text-cyan/80">
                  <div className="p-2 rounded bg-white/5 border border-white/10">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-[10px] text-cyan/40 block">EMAIL ACCESS</span>
                    <a
                      href={`mailto:${RESUME_DATA.personal.email}`}
                      className="hover:text-white transition-colors"
                    >
                      {RESUME_DATA.personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-cyan/80">
                  <div className="p-2 rounded bg-white/5 border border-white/10">
                    <Phone className="w-4 h-4 text-cyan" />
                  </div>
                  <div>
                    <span className="text-[10px] text-cyan/40 block">DIRECT PROTOCOL</span>
                    <a
                      href={`tel:${RESUME_DATA.personal.phone}`}
                      className="hover:text-white transition-colors"
                    >
                      {RESUME_DATA.personal.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-cyan/80">
                  <div className="p-2 rounded bg-white/5 border border-white/10">
                    <MapPin className="w-4 h-4 text-purple" />
                  </div>
                  <div>
                    <span className="text-[10px] text-cyan/40 block">REGIONAL REGISTRY</span>
                    <span>{RESUME_DATA.personal.location}</span>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* CSS Globe Visualizer */}
            <div className="h-[220px] w-full rounded-xl border border-white/10 overflow-hidden bg-black/40 relative">
              <CSSGlobe />
              <div className="absolute bottom-2 left-2 font-mono text-[9px] text-cyan/40 pointer-events-none">
                3D TARGET MATRIX RADIAL GLOBE
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Glassmorphic Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard glowColor="cyan" className="space-y-6">
              <div className="flex items-center space-x-2 text-white border-b border-white/10 pb-3">
                <Send className="w-4 h-4 text-cyan" />
                <h3 className="font-heading font-bold text-base">Transmission Form</h3>
              </div>

              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-white font-heading font-bold">Signal Routed Successfully</p>
                  <p className="text-xs font-mono text-cyan/60">
                    Your message has been transmitted to Sandeep Sagar Madanu.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-[10px] font-mono text-cyan/50 hover:text-white transition-colors underline"
                  >
                    Send another transmission
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div className="space-y-1">
                    <label className="text-cyan/60">Sender Name</label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded bg-white/5 border border-white/10 focus:border-primary outline-none text-white transition-colors"
                      placeholder="Recruiter / Company Name"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-cyan/60">Sender Coordinate (Email)</label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded bg-white/5 border border-white/10 focus:border-primary outline-none text-white transition-colors"
                      placeholder="recruiter@agency.ai"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-cyan/60">Message / Core Instruction Payload</label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-2.5 rounded bg-white/5 border border-white/10 focus:border-primary outline-none text-white transition-colors resize-none"
                      placeholder="Schedule interview, discuss projects, or verify credentials..."
                      required
                    />
                  </div>

                  <NeonButton
                    type="submit"
                    variant="primary"
                    className="w-full text-center py-3.5 select-none"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Routing Signal..." : "Transmit Ingestion Payload"}
                  </NeonButton>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
