"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "../ui/glass-card";
import { BookOpen, Network, FileText, CheckCircle2, ChevronRight } from "lucide-react";


export default function Research() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const vitSteps = [
    { title: "Image Patch Projection", desc: "Divide MRI sequence scan slices into grid patches (e.g. 16x16 pixels) and project them into linear embeddings." },
    { title: "Position Embeddings", desc: "Attach 1D spatial coordinates sequence to the grid elements to preserve spatial context." },
    { title: "Multi-Head Self-Attention", desc: "Run self-attention checks to evaluate which areas (e.g. tumor cores vs margins) hold pathologically related weight features." },
    { title: "Explainable Heatmaps", desc: "Use backpropagated gradients (Grad-CAM) to draw overlay overlays over the focus areas, validating clinical inference." }
  ];

  return (
    <section id="research" className="py-24 relative overflow-hidden bg-white/[0.01] border-y border-white/5">

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Research <span className="bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">Laboratory</span>
          </h2>
          <p className="text-xs md:text-sm font-mono text-cyan/60">
            ADVANCING CLINICAL TRUST IN MEDICAL IMAGING AI VIA EXPLAINABLE VISION TRANSFORMERS
          </p>
        </div>

        {/* Lab Panel Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Left panel: Publication parameters */}
          <div className="lg:col-span-2 space-y-6 flex flex-col justify-between">
            <GlassCard glowColor="purple" className="flex-1 space-y-5">
              <div className="flex items-center space-x-2 text-white border-b border-white/10 pb-3">
                <BookOpen className="w-5 h-5 text-purple" />
                <h3 className="font-heading font-bold text-lg">Active Academic Research</h3>
              </div>

              <div className="space-y-4 text-xs md:text-sm font-mono leading-relaxed">
                <div>
                  <h4 className="text-white font-bold text-sm">MGMT Methylation Prediction on MRI Scans</h4>
                  <span className="text-[10px] text-purple font-semibold">Independent Investigation | Target: Scopus-indexed Medical AI / XAI</span>
                </div>

                <p className="text-cyan/70">
                  Directing research on hybrid Convolutional-Vision Transformer models to predict MGMT promoter methylation directly from raw brain MRI scans, bypassing invasive surgical biopsy procedures.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-3 bg-white/5 rounded border border-white/15 space-y-1">
                    <span className="text-[10px] text-white/50 block">Dataset Scopes:</span>
                    <span className="text-xs font-bold text-cyan">500+ MRI Sequences</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded border border-white/15 space-y-1">
                    <span className="text-[10px] text-white/50 block">Ingestion Formats:</span>
                    <span className="text-xs font-bold text-purple">MRI, Radiomics, Clinical Data</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-xs text-white font-bold">Key Ingestion Steps:</div>
                  <div className="space-y-1.5 pl-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>5-fold cross-validation pipelines to guarantee reproducible benchmarks</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Multi-modal alignment mapping spatial textures to tabular clinical folders</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right panel: Transformer Architecture flow map */}
          <div className="lg:col-span-1">
            <GlassCard glowColor="cyan" className="h-full flex flex-col justify-between space-y-6">
              <div className="flex items-center space-x-2 text-white border-b border-white/10 pb-3">
                <Network className="w-5 h-5 text-cyan" />
                <h3 className="font-heading font-bold text-sm">Vision Transformer (ViT) Pipe</h3>
              </div>

              {/* Steps workflow list */}
              <div className="space-y-4 flex-1 flex flex-col justify-center">
                {vitSteps.map((step, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredStep(idx)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={`relative p-3 rounded-lg border transition-all duration-300 cursor-default ${
                      hoveredStep === idx
                        ? "bg-white/10 border-primary shadow-[0_0_10px_rgba(0,210,255,0.25)]"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-primary font-mono">{`STEP 0${idx + 1}`}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-cyan/40" />
                    </div>
                    <h4 className="text-xs font-heading font-bold text-white">{step.title}</h4>
                    {hoveredStep === idx && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-[10px] text-cyan/70 font-mono mt-1.5 leading-relaxed"
                      >
                        {step.desc}
                      </motion.p>
                    )}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
}
