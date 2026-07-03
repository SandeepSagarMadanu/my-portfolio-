"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESUME_DATA } from "@/lib/rag-data";
import { GlassCard } from "../ui/glass-card";


export default function Skills() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white/[0.01] border-y border-white/5">

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Core <span className="bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">Skills Matrix</span>
          </h2>
          <p className="text-xs md:text-sm font-mono text-cyan/60">
            DYNAMICS IN DEEP LEARNING, MACHINE LEARNING, LLMS AND ANALYTICAL ENGINEERING
          </p>
        </div>

        {/* Tab Selection Headers */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {RESUME_DATA.skills.map((group, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategoryIdx(idx)}
              className={`font-mono text-xs px-5 py-2.5 rounded-lg border transition-all duration-300 select-none cursor-pointer ${activeCategoryIdx === idx
                  ? "bg-primary border-primary text-background shadow-[0_0_15px_rgba(0,210,255,0.4)]"
                  : "bg-black/40 border-white/10 text-cyan/70 hover:border-white/20 hover:text-white"
                }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Active Skills List Grid */}
        <div className="min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategoryIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {RESUME_DATA.skills[activeCategoryIdx].skills.map((skill, sIdx) => (
                <div key={sIdx} className="group">
                  <GlassCard glowColor="cyan" className="space-y-4 relative overflow-hidden">

                    {/* Upper Skill title and Confidence slider indicator */}
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="text-base font-heading font-bold text-white group-hover:text-primary transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[10px] font-mono text-cyan/40">
                          {skill.experienceYears} Years Active Experience
                        </span>
                      </div>

                      {/* confidence display */}
                      <div className="flex flex-col items-end">
                        <span className="font-mono text-xs text-primary font-bold">{skill.confidence}%</span>
                        <span className="text-[8px] font-mono text-cyan/40">Confidence Rating</span>
                      </div>
                    </div>

                    {/* Progress tracking line */}
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.confidence}%` }}
                        transition={{ duration: 0.8, delay: sIdx * 0.05 }}
                        className="h-full bg-gradient-to-r from-primary to-purple"
                      />
                    </div>

                    {/* Collapsed sub-tools list */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                      {skill.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-cyan/70"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                  </GlassCard>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
