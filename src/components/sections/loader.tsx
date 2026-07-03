"use client";

import React, { useState, useEffect } from "react";
import { Terminal } from "lucide-react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState<string[]>([]);

  const systemLogs = [
    "AION-OS kernel bootstrap initial v2.0.26...",
    "Mounting memory space (16.0 GB Virtual)... OK",
    "Initializing neural core connectors... OK",
    "Connecting deep learning framework pipelines... PyTorch 2.1 detected",
    "Checking host graphics environment... WebGL 2.0 active",
    "Loading CNN weights & Vision Transformers... OK",
    "Analyzing Sandeep's credential nodes... 100% matched",
    "System diagnostics validation: SECURE",
    "Ready. Welcome Sandeep Sagar."
  ];

  useEffect(() => {
    // Increment progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    // Add logs line by line
    const logInterval = setInterval(() => {
      setLines((prev) => {
        if (prev.length >= systemLogs.length) {
          clearInterval(logInterval);
          return prev;
        }
        return [...prev, systemLogs[prev.length]];
      });
    }, 280);

    return () => clearInterval(logInterval);
  }, []);

  useEffect(() => {
    if (progress === 100 && lines.length === systemLogs.length) {
      const delay = setTimeout(() => {
        onComplete();
      }, 700);
      return () => clearTimeout(delay);
    }
  }, [progress, lines, onComplete]);

  return (
    <div className="fixed inset-0 bg-background z-[150] flex flex-col justify-between p-6 font-mono text-cyan">
      {/* Top Console Interface */}
      <div className="max-w-2xl w-full mx-auto mt-12 space-y-3">
        <div className="flex items-center space-x-2 border-b border-white/10 pb-2 text-white font-semibold">
          <Terminal className="w-5 h-5 text-primary" />
          <span>aion_boot_sequence.sh</span>
        </div>
        
        {/* Terminal Logs */}
        <div className="h-[220px] overflow-y-auto space-y-1 text-xs text-cyan/70 scrollbar-none">
          {lines.map((line, idx) => (
            <div key={idx} className={idx === lines.length - 1 ? "text-primary font-bold animate-pulse" : ""}>
              {`> ${line}`}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Progress Center */}
      <div className="max-w-md w-full mx-auto mb-16 space-y-4">
        <div className="flex justify-between text-xs font-semibold">
          <span>INITIALIZING INTELLIGENCE</span>
          <span>{progress}%</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-purple transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
