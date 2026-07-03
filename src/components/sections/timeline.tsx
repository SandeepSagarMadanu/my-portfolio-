"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "../ui/glass-card";
import { RESUME_DATA } from "@/lib/rag-data";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function Timeline() {
  // Combine Experience and Education into a chronologically sorted timeline
  const milestones = [
    {
      type: "work",
      title: RESUME_DATA.experience[0].role,
      institution: RESUME_DATA.experience[0].company,
      location: RESUME_DATA.experience[0].location,
      period: RESUME_DATA.experience[0].period,
      details: RESUME_DATA.experience[0].points,
      tags: RESUME_DATA.experience[0].skillsUsed,
    },
    {
      type: "work",
      title: RESUME_DATA.experience[1].role,
      institution: RESUME_DATA.experience[1].company,
      location: RESUME_DATA.experience[1].location,
      period: RESUME_DATA.experience[1].period,
      details: RESUME_DATA.experience[1].points,
      tags: RESUME_DATA.experience[1].skillsUsed,
    },
    {
      type: "education",
      title: RESUME_DATA.education[0].degree,
      institution: RESUME_DATA.education[0].institution,
      location: "Hyderabad, India",
      period: RESUME_DATA.education[0].period,
      details: [
        "Specialized in Artificial Intelligence, predictive modeling, statistics, deep learning architecture models, and advanced visual classifiers.",
        "Engineered multiple practical projects in CNN detection, NLP agents, and time-series analytics."
      ],
      tags: ["AI", "Machine Learning", "Deep Learning", "Data Analytics"],
    },
    {
      type: "work",
      title: RESUME_DATA.experience[2].role,
      institution: RESUME_DATA.experience[2].company,
      location: RESUME_DATA.experience[2].location,
      period: RESUME_DATA.experience[2].period,
      details: RESUME_DATA.experience[2].points,
      tags: RESUME_DATA.experience[2].skillsUsed,
    },
    {
      type: "education",
      title: RESUME_DATA.education[1].degree,
      institution: RESUME_DATA.education[1].institution,
      location: "Vijayawada, India",
      period: RESUME_DATA.education[1].period,
      details: [
        "Acquired foundational computing, DBMS database querying, statistics, and business economics metrics."
      ],
      tags: ["Commerce", "Database Management", "Computer Applications"],
    }
  ];

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center md:text-left mb-16 space-y-3">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            My <span className="bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">Professional Journey</span>
          </h2>
          <p className="text-xs md:text-sm font-mono text-cyan/60">
            CHRONOLOGICAL TIMELINE OF WORK EXPERIENCE AND ACADEMIC CHECKPOINTS
          </p>
        </div>

        {/* Timeline Track Grid */}
        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Left timeline tracking dot */}
              <div className="absolute -left-[13px] top-1.5 w-6 h-6 rounded-full border border-white/10 bg-background flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_10px_rgba(0,210,255,0.4)]">
                {item.type === "work" ? (
                  <Briefcase className="w-3.5 h-3.5 text-cyan" />
                ) : (
                  <GraduationCap className="w-3.5 h-3.5 text-purple" />
                )}
              </div>

              {/* Glass milestone item card */}
              <GlassCard
                glowColor={item.type === "work" ? "cyan" : "purple"}
                className="space-y-4"
              >
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <h4 className="text-sm font-mono text-cyan/80 font-medium">
                      {item.institution}
                    </h4>
                  </div>
                  
                  {/* Period and Location indicators */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-cyan/50">
                    <span className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Point details lists */}
                <ul className="space-y-2 text-xs md:text-sm text-cyan/70 font-mono pl-4 list-disc marker:text-primary">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="leading-relaxed">
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Skill tag overlays */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-cyan/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
