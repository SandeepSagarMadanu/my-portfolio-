import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "../ui/glass-card";
import { RESUME_DATA } from "@/lib/rag-data";
import { Calendar, MapPin, Briefcase } from "lucide-react";


export default function ProfessionalExperience() {
  const workMilestones = RESUME_DATA.experience.map((exp) => ({
    title: exp.role,
    institution: exp.company,
    location: exp.location,
    period: exp.period,
    details: exp.points,
    tags: exp.skillsUsed,
  }));

  return (
    <section id="professional" className="py-24 relative overflow-hidden">

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center md:text-left mb-16 space-y-3">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Professional Journey
          </h2>
          <p className="text-xs md:text-sm font-mono text-cyan/60">
            Chronological timeline of work experience.
          </p>
        </div>
        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
          {workMilestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              <div className="absolute -left-[13px] top-1.5 w-6 h-6 rounded-full border border-white/10 bg-background flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_10px_rgba(0,210,255,0.4)]">
                <Briefcase className="w-3.5 h-3.5 text-cyan" />
              </div>
              <GlassCard glowColor="cyan" className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <h4 className="text-sm font-mono text-cyan/80 font-medium">
                      {item.institution}
                    </h4>
                  </div>
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
                <ul className="space-y-2 text-xs md:text-sm text-cyan/70 font-mono pl-4 list-disc marker:text-primary">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="leading-relaxed">
                      {detail}
                    </li>
                  ))}
                </ul>
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
