"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "../ui/glass-card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, ZAxis } from "recharts";
import { Cpu, Play, BarChart3, Database } from "lucide-react";

export default function Analytics() {
  const [activeTab, setActiveTab] = useState<"loss" | "pca">("loss");
  const [selectedDataset, setSelectedDataset] = useState<"mri" | "pneumonia">("mri");

  // Mock Training Loss Convergence
  const mriLossData = [
    { epoch: 1, trainLoss: 0.95, valLoss: 0.98 },
    { epoch: 5, trainLoss: 0.62, valLoss: 0.68 },
    { epoch: 10, trainLoss: 0.41, valLoss: 0.48 },
    { epoch: 15, trainLoss: 0.28, valLoss: 0.36 },
    { epoch: 20, trainLoss: 0.19, valLoss: 0.29 },
    { epoch: 25, trainLoss: 0.12, valLoss: 0.24 },
    { epoch: 30, trainLoss: 0.08, valLoss: 0.21 },
  ];

  const pneumoniaLossData = [
    { epoch: 1, trainLoss: 0.88, valLoss: 0.92 },
    { epoch: 5, trainLoss: 0.55, valLoss: 0.61 },
    { epoch: 10, trainLoss: 0.35, valLoss: 0.42 },
    { epoch: 15, trainLoss: 0.22, valLoss: 0.31 },
    { epoch: 20, trainLoss: 0.15, valLoss: 0.26 },
    { epoch: 25, trainLoss: 0.10, valLoss: 0.22 },
    { epoch: 30, trainLoss: 0.07, valLoss: 0.19 },
  ];

  // Mock PCA Scatter clusters
  const mriPcaClusters = [
    { x: 1.2, y: 2.1, class: "Tumor core", fill: "#00d2ff" },
    { x: 1.5, y: 1.8, class: "Tumor core", fill: "#00d2ff" },
    { x: 0.8, y: 2.5, class: "Tumor core", fill: "#00d2ff" },
    { x: -1.2, y: -0.8, class: "Normal cell", fill: "#8b5cf6" },
    { x: -1.5, y: -1.2, class: "Normal cell", fill: "#8b5cf6" },
    { x: -0.9, y: -1.5, class: "Normal cell", fill: "#8b5cf6" },
  ];

  const pneumoniaPcaClusters = [
    { x: 2.2, y: 0.5, class: "Bacterial inf", fill: "#00d2ff" },
    { x: 1.9, y: 0.9, class: "Bacterial inf", fill: "#00d2ff" },
    { x: -0.2, y: 2.2, class: "Viral inf", fill: "#8b5cf6" },
    { x: -0.5, y: 1.8, class: "Viral inf", fill: "#8b5cf6" },
    { x: -1.8, y: -1.5, class: "Normal healthy", fill: "#00f0ff" },
    { x: -2.1, y: -1.2, class: "Normal healthy", fill: "#00f0ff" },
  ];

  const currentLossData = selectedDataset === "mri" ? mriLossData : pneumoniaLossData;
  const currentPcaData = selectedDataset === "mri" ? mriPcaClusters : pneumoniaPcaClusters;

  return (
    <section id="analytics" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Model Analytics <span className="bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">Control Room</span>
          </h2>
          <p className="text-xs md:text-sm font-mono text-cyan/60">
            INTERACTIVE MONITORING FOR CNN & CLUSTER REPRESENTATIONS TRAINING EPOCSH
          </p>
        </div>

        {/* Dashboard KPIs Container */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-cyan">
          <GlassCard glowColor="cyan" className="p-4 text-center space-y-1">
            <span className="text-[10px] text-cyan/50 block">CLASSIFIER ACCURACY</span>
            <span className="text-2xl font-bold font-heading text-white">92%+</span>
          </GlassCard>
          <GlassCard glowColor="purple" className="p-4 text-center space-y-1">
            <span className="text-[10px] text-cyan/50 block">MACRO-F1 PERFORMANCE</span>
            <span className="text-2xl font-bold font-heading text-white">0.89</span>
          </GlassCard>
          <GlassCard glowColor="cyan" className="p-4 text-center space-y-1">
            <span className="text-[10px] text-cyan/50 block">ROWS PROCESSED</span>
            <span className="text-2xl font-bold font-heading text-white">10K+</span>
          </GlassCard>
          <GlassCard glowColor="purple" className="p-4 text-center space-y-1">
            <span className="text-[10px] text-cyan/50 block">DIAGNOSTIC FPS</span>
            <span className="text-2xl font-bold font-heading text-white">30+ FPS</span>
          </GlassCard>
        </div>

        {/* Main interactive chart dashboard card */}
        <GlassCard glowColor="cyan" className="space-y-6">

          {/* Header Dashboard tabs and selections */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span className="text-white text-xs font-bold uppercase tracking-wider">Live Inference Diagnostics</span>
            </div>

            {/* Selector Buttons */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-[10px]">
              <div className="flex rounded-lg overflow-hidden border border-white/15 bg-black/40">
                <button
                  onClick={() => setActiveTab("loss")}
                  className={`px-3 py-1.5 transition-colors select-none cursor-pointer ${activeTab === "loss" ? "bg-primary text-background font-bold" : "text-cyan/70 hover:bg-white/5"
                    }`}
                >
                  Convergence (Loss)
                </button>
                <button
                  onClick={() => setActiveTab("pca")}
                  className={`px-3 py-1.5 transition-colors select-none cursor-pointer ${activeTab === "pca" ? "bg-primary text-background font-bold" : "text-cyan/70 hover:bg-white/5"
                    }`}
                >
                  t-SNE / PCA Clusters
                </button>
              </div>

              <div className="flex rounded-lg overflow-hidden border border-white/15 bg-black/40">
                <button
                  onClick={() => setSelectedDataset("mri")}
                  className={`px-3 py-1.5 transition-colors select-none cursor-pointer ${selectedDataset === "mri" ? "bg-purple text-white font-bold" : "text-cyan/70 hover:bg-white/5"
                    }`}
                >
                  Brain Tumor
                </button>
                <button
                  onClick={() => setSelectedDataset("pneumonia")}
                  className={`px-3 py-1.5 transition-colors select-none cursor-pointer ${selectedDataset === "pneumonia" ? "bg-purple text-white font-bold" : "text-cyan/70 hover:bg-white/5"
                    }`}
                >
                  Pneumonia
                </button>
              </div>
            </div>
          </div>

          {/* Active Chart rendering */}
          <div className="w-full h-[280px] bg-slate-950/40 rounded-xl border border-white/10 p-4">
            <ResponsiveContainer width="100%" height="100%">
              {activeTab === "loss" ? (
                /* Convergence curves using Recharts */
                <LineChart data={currentLossData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="epoch" stroke="rgba(255,255,255,0.4)" fontSize={9} />
                  <YAxis stroke="rgba(255,255,255,0.4)" fontSize={9} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0,0,0,0.9)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      fontSize: 10,
                      fontFamily: "monospace",
                      color: "#00d2ff"
                    }}
                  />
                  <Line type="monotone" dataKey="trainLoss" stroke="#00d2ff" name="Training Loss" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="valLoss" stroke="#8b5cf6" name="Validation Loss" strokeWidth={2} dot={{ r: 3 }} />
                </LineChart>
              ) : (
                /* PCA Cluster points using Recharts ScatterChart */
                <ScatterChart margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                  <CartesianGrid stroke="rgba(255,255,255,0.05)" />
                  <XAxis type="number" dataKey="x" stroke="rgba(255,255,255,0.4)" fontSize={9} name="Dimension 1" />
                  <YAxis type="number" dataKey="y" stroke="rgba(255,255,255,0.4)" fontSize={9} name="Dimension 2" />
                  <ZAxis type="category" dataKey="class" />
                  <Tooltip
                    cursor={{ strokeDasharray: "3 3" }}
                    contentStyle={{
                      backgroundColor: "rgba(0,0,0,0.9)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      fontSize: 10,
                      fontFamily: "monospace",
                      color: "#00d2ff"
                    }}
                  />
                  <Scatter name="Clusters" data={currentPcaData} fill="#00d2ff" shape="circle" />
                </ScatterChart>
              )}
            </ResponsiveContainer>
          </div>

          <div className="flex items-center space-x-2 text-[10px] text-cyan/50 font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive graph parameters computed asynchronously using localized mock vector arrays.</span>
          </div>

        </GlassCard>

      </div>
    </section>
  );
}
