"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, Terminal as TermIcon } from "lucide-react";
import { GlassCard } from "./glass-card";
import { searchKnowledgeBase } from "@/lib/rag-data";

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Greetings. I am AION-OS, Sandeep's virtual assistant daemon. Ask me any details regarding his ML workflows, independent Research, or coordinates." }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll inside the chat box only — never drags the page
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInputVal("");
    setIsTyping(true);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 7000); // 7 seconds timeout

      // API call to Next.js route
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: text }]
        }),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const data = await response.json();
      
      if (data.content) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
      } else {
        throw new Error("Empty API output");
      }
    } catch (err) {
      console.warn("Client chat fetch failed or timed out, using local fallback RAG:", err);
      // Local fallback RAG semantic lookup
      const localResult = searchKnowledgeBase(text);
      setMessages((prev) => [...prev, { role: "assistant", content: localResult }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage(inputVal);
    }
  };

  const quickQuestions = [
    "Tell me about Sandeep's experience",
    "List his core PyTorch/TensorFlow skills",
    "Show Brain Tumor project metrics",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[80] font-mono text-xs">
      {/* Closed Button Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-primary hover:bg-[#00e1ff] text-background flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.5)] transition-transform active:scale-95 cursor-pointer select-none"
          title="Open AI Core"
        >
          <Sparkles className="w-6 h-6 animate-pulse" />
        </button>
      )}

      {/* Chat Windows panel */}
      {isOpen && (
        <GlassCard glowColor="cyan" className="w-[320px] md:w-[360px] h-[450px] flex flex-col justify-between p-4 shadow-2xl relative border-white/20">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2 select-none">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-white text-xs font-bold font-heading">aion-os_chatbot.bin</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-cyan/60 hover:text-white transition-colors cursor-pointer">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Conversation history logs — isolated scroll, won't bubble to page */}
          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto space-y-3 pr-1 py-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
            onWheel={(e) => e.stopPropagation()}
          >
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-2.5 leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-background font-semibold"
                      : "bg-white/5 border border-white/10 text-cyan/90"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-cyan/50 text-[10px] animate-pulse">AION-OS embedding retrieval active...</div>
            )}
          </div>

          {/* Suggestion list */}
          {messages.length === 1 && (
            <div className="space-y-1 py-2 border-t border-white/5">
              <span className="text-[10px] text-cyan/40">SUGGESTED QUERY PATHS:</span>
              <div className="flex flex-col gap-1">
                {quickQuestions.map((q, qIdx) => (
                  <button
                    key={qIdx}
                    onClick={() => handleSendMessage(q)}
                    className="text-left py-1 px-2 rounded bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-cyan/70 hover:text-white transition-all text-[10px] select-none cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Prompt Entry bar */}
          <div className="flex items-center space-x-2 border-t border-white/10 pt-2.5 mt-2 select-none">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-white/5 border border-white/10 focus:border-primary outline-none px-3 py-2 rounded text-white text-[10px]"
              placeholder="Ask AION-OS anything..."
              autoComplete="off"
            />
            <button
              onClick={() => handleSendMessage(inputVal)}
              className="p-2 rounded bg-primary text-background hover:bg-[#00e1ff] transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </GlassCard>
      )}
    </div>
  );
}
