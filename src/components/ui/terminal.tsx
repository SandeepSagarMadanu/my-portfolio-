"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Minimize2, Maximize2, X } from "lucide-react";
import { RESUME_DATA } from "@/lib/rag-data";

interface TerminalProps {
  onClose?: () => void;
}

export default function Terminal({ onClose }: TerminalProps) {
  const [history, setHistory] = useState<string[]>([
    "AION-OS [Version 2.0.26]",
    "Initializing neural core...",
    "System diagnostics: SECURE",
    "Welcome, Authorized Recruiter.",
    "Type 'help' to see list of available system commands.",
    ""
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isMaximized, setIsMaximized] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll only within the terminal's own container — never the whole page
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let response: string[] = [];

    switch (trimmedCmd) {
      case "help":
      case "?":
        response = [
          "Available Commands:",
          "  help           - Display this helper prompt",
          "  skills         - List key engineering skills & libraries",
          "  experience     - Show Sandeep's career timeline",
          "  projects       - Display detailed descriptions of core projects",
          "  education      - Print academic certificates and degrees",
          "  contact        - Output verified communication paths",
          "  diagnostics    - Execute deep learning framework diagnostics",
          "  clear / cls    - Wipe console logs history"
        ];
        break;
      case "skills":
        response = [
          "---------------------------------------",
          "🚀 TECHNICAL SKILL MATRICES:",
          "---------------------------------------",
          ...RESUME_DATA.skills.flatMap(sg => [
            `[${sg.category}]`,
            ...sg.skills.map(s => `  • ${s.name} (${s.confidence}% Confidence) | Tools: ${s.tools.join(", ")}`)
          ])
        ];
        break;
      case "experience":
        response = [
          "---------------------------------------",
          "💼 EXPERIENCE & CHRONICLES:",
          "---------------------------------------",
          ...RESUME_DATA.experience.flatMap(exp => [
            `» ${exp.role} @ ${exp.company} (${exp.period})`,
            ...exp.points.map(pt => `  - ${pt}`),
            ""
          ])
        ];
        break;
      case "projects":
        response = [
          "---------------------------------------",
          "📂 PRODUCTION PROJECT PORTFOLIO:",
          "---------------------------------------",
          ...RESUME_DATA.projects.flatMap(p => [
            `» ${p.title} (${p.techStack.join(", ")})`,
            `  Problem : ${p.problem}`,
            `  Solution: ${p.solution}`,
            `  Metrics : ${p.metrics}`,
            ""
          ])
        ];
        break;
      case "education":
        response = [
          "---------------------------------------",
          "🎓 ACADEMIC EDUCATION & CREDENTIALS:",
          "---------------------------------------",
          ...RESUME_DATA.education.map(edu => 
            `🎓 ${edu.degree} - ${edu.institution} (${edu.period})`
          ),
          "",
          "Certifications:",
          ...RESUME_DATA.certifications.map(c => `  ✓ ${c}`)
        ];
        break;
      case "contact":
        response = [
          "---------------------------------------",
          "🌐 SYSTEM COMMUNICATION PATHS:",
          "---------------------------------------",
          `  Email   : ${RESUME_DATA.personal.email}`,
          `  Phone   : ${RESUME_DATA.personal.phone}`,
          `  GitHub  : https://${RESUME_DATA.personal.github}`,
          `  LinkedIn: https://${RESUME_DATA.personal.linkedin}`,
          `  Location: ${RESUME_DATA.personal.location}`
        ];
        break;
      case "diagnostics":
        response = [
          "Running system integrity audit...",
          "Checking PyTorch core components... OK",
          "Verifying CUDA 12.1 device paths... OK",
          "Analyzing TensorFlow / Keras backends... OK",
          "Testing LangGraph multi-agent feedback loop latency... 12ms [OK]",
          "Benchmarking LLM embeddings cosine distances... 0.94 Similarity [OK]",
          "Diagnostics completed. CPU Temp: 38C | GPU load: 0% | STATUS: OPTIMIZED"
        ];
        break;
      case "clear":
      case "cls":
        setHistory([]);
        return;
      case "":
        response = [""];
        break;
      default:
        response = [
          `Command not recognized: '${cmd}'.`,
          "Type 'help' to review available systems commands."
        ];
    }

    setHistory(prev => [...prev, `AION-OS:~$ ${cmd}`, ...response, ""]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputValue);
      setInputValue("");
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      onClick={focusInput}
      className={`rounded-xl border border-white/15 bg-black/85 backdrop-blur-md shadow-2xl transition-all duration-300 font-mono text-sm text-cyan flex flex-col overflow-hidden ${
        isMaximized ? "fixed inset-4 z-50 h-[calc(100vh-32px)]" : "w-full h-[380px] relative"
      }`}
    >
      {/* Terminal Title Bar */}
      <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/10 select-none cursor-default">
        <div className="flex items-center space-x-2">
          <TerminalIcon className="w-4 h-4 text-primary" />
          <span className="text-white text-xs font-semibold">aion-os_terminal.exe</span>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMaximized(!isMaximized);
            }}
            className="hover:text-white transition-colors"
            title="Toggle Fullscreen"
          >
            {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
          {onClose && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="hover:text-red-400 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Terminal Console Logs — scoped scroll container */}
      <div
        ref={scrollContainerRef}
        className="flex-1 p-4 overflow-y-auto space-y-1.5 flex flex-col justify-start scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
      >
        {history.map((line, idx) => (
          <div
            key={idx}
            className={`${
              line.startsWith("AION-OS:~$")
                ? "text-white font-bold"
                : line.includes("🚀") || line.includes("💼") || line.includes("📂") || line.includes("🎓")
                ? "text-purple font-semibold"
                : line.startsWith("  ")
                ? "text-cyan/80 pl-2"
                : "text-cyan/60"
            } whitespace-pre-wrap`}
          >
            {line}
          </div>
        ))}
      </div>

      {/* Terminal Command Input */}
      <div className="p-3 bg-white/5 border-t border-white/10 flex items-center space-x-2">
        <span className="text-white font-bold">aion-os:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none border-none text-white caret-primary"
          placeholder="type a command..."
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </div>
    </div>
  );
}
