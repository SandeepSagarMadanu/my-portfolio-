"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, FolderGit2, Mail, Award, BookOpen, Settings, Milestone } from "lucide-react";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close command menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("mousedown", handleOutsideClick);
    }
    return () => window.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const items = [
    { name: "Jump to Hero", desc: "System boot core", section: "hero", icon: Settings },
    { name: "Jump to Timeline Journey", desc: "Experience & educational checkpoints", section: "timeline", icon: Milestone },
    { name: "Jump to Skills Matrix", desc: "Interactive training capabilities", section: "skills", icon: Award },
    { name: "Jump to Projects Catalog", desc: "Explainable deep learning dashboards", section: "projects", icon: FolderGit2 },
    { name: "Jump to Research Laboratory", desc: "Independent academic publications", section: "research", icon: BookOpen },
    { name: "Jump to Contact Terminal", desc: "Direct coordinate links", section: "contact", icon: Mail },
  ];

  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.desc.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
      <div
        ref={containerRef}
        className="w-full max-w-lg bg-black/90 border border-white/10 rounded-xl overflow-hidden shadow-2xl font-mono text-sm text-cyan flex flex-col h-[320px]"
      >
        <div className="flex items-center space-x-2 px-4 py-3 bg-white/5 border-b border-white/10">
          <Search className="w-4 h-4 text-primary" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a section name to navigate..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white text-xs font-mono placeholder-cyan/40"
          />
          <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/60 text-[10px]">ESC</kbd>
        </div>

        <div className="flex-1 p-2 overflow-y-auto space-y-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-cyan/40">No matching system routes found.</div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => handleSelect(item.section)}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer text-left"
                >
                  <div className="p-1.5 rounded bg-primary/20 text-primary">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">{item.name}</div>
                    <div className="text-[10px] text-cyan/60">{item.desc}</div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
