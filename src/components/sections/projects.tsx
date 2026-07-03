"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESUME_DATA, ProjectItem } from "@/lib/rag-data";
import { GlassCard } from "../ui/glass-card";
import { NeonButton } from "../ui/neon-button";
import { Github, ExternalLink, Cpu, BarChart3, Eye, FileSearch, Sparkles } from "lucide-react";


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [xaiMode, setXaiMode] = useState<"none" | "gradcam" | "shap">("none");

  const openProjectDetails = (project: ProjectItem) => {
    setSelectedProject(project);
    setXaiMode("none");
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Projects <span className="bg-gradient-to-r from-primary to-cyan bg-clip-text text-transparent">Dashboard</span>
          </h2>
          <p className="text-xs md:text-sm font-mono text-cyan/60">
            PRODUCTION INTELLIGENCE, COMPUTER VISION MODEL PIPELINES AND AGENTIC GRAPHS
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESUME_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <GlassCard
                glowColor={idx % 2 === 0 ? "cyan" : "purple"}
                className="h-full flex flex-col justify-between space-y-5 group cursor-pointer"
                onClick={() => openProjectDetails(project)}
              >
                <div className="space-y-3">
                  {/* Category Pill and Metrics */}
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-primary/20 text-primary border border-primary/30">
                      {project.category}
                    </span>
                    <span className="text-cyan/60">{project.metrics.split("|")[0]}</span>
                  </div>

                  {/* Title */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan/80">{project.subtitle}</p>
                  </div>

                  {/* High level summary */}
                  <p className="text-xs text-cyan/70 font-mono leading-relaxed line-clamp-3">
                    {project.solution}
                  </p>
                </div>

                {/* Tech stack pills and actions bar */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[10px] font-mono text-primary flex items-center space-x-1">
                      <span>Inspect Details</span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                    </span>
                    
                    <div className="flex items-center space-x-3 text-cyan/60">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Detailed Modal Window (Apple Vision Pro inspired style) */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
                className="w-full max-w-4xl bg-card border border-white/15 rounded-2xl overflow-hidden shadow-2xl font-mono text-cyan flex flex-col md:flex-row h-auto md:h-[620px]"
              >
                {/* Left Section: Information panel */}
                <div className="flex-1 p-6 md:p-8 space-y-6 overflow-y-auto border-b md:border-b-0 md:border-r border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary border border-primary/20">
                      {selectedProject.category}
                    </span>
                    <button
                      onClick={closeProjectDetails}
                      className="text-cyan/60 hover:text-white transition-colors md:hidden text-xs"
                    >
                      [CLOSE]
                    </button>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-heading font-extrabold text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs text-primary font-bold">{selectedProject.subtitle}</p>
                  </div>

                  <div className="space-y-4 text-xs md:text-sm">
                    {/* Problem / Solution statement */}
                    <div className="space-y-2">
                      <div className="text-white font-bold flex items-center space-x-1.5">
                        <FileSearch className="w-4 h-4 text-cyan" />
                        <span>Problem Statement</span>
                      </div>
                      <p className="text-cyan/70 leading-relaxed pl-6">{selectedProject.problem}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-white font-bold flex items-center space-x-1.5">
                        <Cpu className="w-4 h-4 text-primary" />
                        <span>Proposed Solution</span>
                      </div>
                      <p className="text-cyan/70 leading-relaxed pl-6">{selectedProject.solution}</p>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2">
                      <div className="text-white font-bold flex items-center space-x-1.5">
                        <Sparkles className="w-4 h-4 text-purple" />
                        <span>Core Features</span>
                      </div>
                      <ul className="list-disc pl-10 space-y-1 text-cyan/70">
                        {selectedProject.features.map((feature, fIdx) => (
                          <li key={fIdx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Architecture flows */}
                  {selectedProject.architecture && (
                    <div className="space-y-2 border-t border-white/5 pt-4">
                      <div className="text-xs text-white font-bold">Neural Core Architecture Map:</div>
                      <div className="p-3 bg-white/5 rounded border border-white/10 text-[10px] text-cyan/80 leading-relaxed">
                        {selectedProject.architecture}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center space-x-4 pt-4 border-t border-white/5 text-xs">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Codebase</span>
                    </a>
                  </div>
                </div>

                {/* Right Section: Active XAI Explainability Visualizer / Media panel */}
                <div className="w-full md:w-[380px] bg-black/60 p-6 flex flex-col justify-between space-y-6">
                  <div className="hidden md:flex justify-end">
                    <button
                      onClick={closeProjectDetails}
                      className="text-xs font-semibold px-3 py-1.5 rounded border border-white/15 hover:bg-white/10 text-white/60 hover:text-white transition-colors select-none cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>

                  {/* Interactive XAI visualizer or default stats */}
                  <div className="flex-1 flex flex-col justify-center space-y-4">
                    <h4 className="text-xs text-white font-bold tracking-wider uppercase border-b border-white/15 pb-2">
                      {selectedProject.id === "medical-xai" ? "Explainable AI (XAI) Laboratory" : "Model Ingestion metrics"}
                    </h4>

                    {selectedProject.id === "medical-xai" ? (
                      /* Explainable AI scan tool */
                      <div className="space-y-4">
                        <div className="relative aspect-square w-full rounded-xl border border-white/15 bg-slate-900/60 overflow-hidden flex items-center justify-center">
                          {/* Outer MRI Grid */}
                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black opacity-90" />
                          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-25">
                            {Array.from({ length: 36 }).map((_, i) => (
                              <div key={i} className="border border-cyan/40" />
                            ))}
                          </div>

                          {/* Brain Lobe contours overlay */}
                          <div className="absolute w-36 h-36 rounded-[45%_55%_45%_55%] border border-cyan/40 animate-pulse" />
                          <div className="absolute w-24 h-28 rounded-[55%_45%_55%_45%] border border-purple/30" />

                          {/* Pathology Tumor region */}
                          <div className="absolute top-1/3 left-1/3 w-10 h-10 rounded-[35%_65%_45%_55%] border border-dashed border-red-500/60" />

                          {/* Grad-CAM attention heatmap overlay */}
                          {xaiMode === "gradcam" && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 0.85 }}
                              className="absolute top-1/3 left-1/3 w-12 h-12 rounded-full bg-gradient-radial from-red-500 via-amber-400 to-transparent blur-sm pointer-events-none"
                            />
                          )}

                          {/* SHAP explanation arrows overlay */}
                          {xaiMode === "shap" && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 0.9 }}
                              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-[10px]"
                            >
                              <div className="px-2 py-1 bg-black/90 border border-green-500 rounded text-green-400">
                                Feature weights:
                                <br />
                                ✦ Texture contrast: +0.42
                                <br />
                                ✦ Lobe asymmetry: +0.28
                                <br />✓ SHAP output: MGMT Methylated
                              </div>
                            </motion.div>
                          )}

                          <span className="absolute bottom-2 right-2 text-[8px] text-white/50">MRI BRAIN TRANSVERSAL SECTION</span>
                        </div>

                        {/* Control toggles */}
                        <div className="flex gap-2 text-[10px]">
                          <button
                            onClick={() => setXaiMode(xaiMode === "gradcam" ? "none" : "gradcam")}
                            className={`flex-1 py-2 rounded border font-bold text-center select-none cursor-pointer ${
                              xaiMode === "gradcam"
                                ? "bg-red-500/20 border-red-500 text-red-400"
                                : "border-white/10 hover:bg-white/5"
                            }`}
                          >
                            Toggle Grad-CAM
                          </button>
                          <button
                            onClick={() => setXaiMode(xaiMode === "shap" ? "none" : "shap")}
                            className={`flex-1 py-2 rounded border font-bold text-center select-none cursor-pointer ${
                              xaiMode === "shap"
                                ? "bg-green-500/20 border-green-500 text-green-400"
                                : "border-white/10 hover:bg-white/5"
                            }`}
                          >
                            Toggle SHAP weights
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Default Stats block for other projects */
                      <div className="space-y-4">
                        <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-3 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-white/60">Execution Latency:</span>
                            <span className="text-primary font-bold">{selectedProject.metrics.split("|")[2] || "<150ms"}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-white/60">Precision:</span>
                            <span className="text-purple font-bold">High/Stable</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-white/60">Verification Status:</span>
                            <span className="text-green-400 font-bold">Active Build</span>
                          </div>
                        </div>
                        
                        <div className="text-[10px] text-cyan/50 leading-relaxed text-center">
                          Performance verified against hold-out sets and real-time telemetry inputs.
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Summary performance metric pill */}
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center">
                    <span className="text-[10px] text-white/50 block mb-1">AUDIT SUMMARY METRICS</span>
                    <span className="text-xs text-white font-bold">{selectedProject.metrics}</span>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
