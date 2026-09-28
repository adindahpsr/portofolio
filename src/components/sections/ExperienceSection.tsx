"use client";

import { Briefcase, Building2, Calendar } from "lucide-react";
import { useScrollReveal } from "@/components/ui/useScrollReveal";
import { portfolioData } from "@/lib/data";

export default function ExperienceSection() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="experience" ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex items-center gap-3 mb-12 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}>
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            04 — Experience
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className={`transition-all duration-700 delay-150 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="mb-12">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight tracking-tight">
              Pengalaman kerja &{" "}
              <span className="text-muted/65 italic font-normal">
                rekam jejak profesional.
              </span>
            </h2>
          </div>

          {/* Kotak Sejajar (3 Kolom Estetik & Clean) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {portfolioData.experience.map((exp, i) => (
              <div
                key={i}
                className="group relative border border-border hover:border-accent/40 bg-white hover:shadow-lg rounded-sm transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden"
                style={{
                  transitionDelay: `${150 + i * 100}ms`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                }}
              >
                {/* Top Accent Line */}
                <div className="h-1 w-full bg-border group-hover:bg-accent transition-colors duration-300" />

                <div className="p-7 md:p-8 flex flex-col justify-between flex-1">
                  <div>
                    {/* Header: Icon & Period Badge */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-10 h-10 rounded-sm bg-blue-50 border border-blue-100 text-accent flex items-center justify-center group-hover:scale-105 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <Briefcase size={18} />
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-xs text-muted border border-border/80 bg-surface px-3 py-1 rounded-sm">
                        <Calendar size={12} className="text-accent" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Role Title with consistent typography */}
                    <h3 className="font-display text-lg md:text-xl text-ink group-hover:text-accent transition-colors leading-snug mb-2">
                      {exp.role}
                    </h3>

                    {/* Company Name with Icon */}
                    <div className="flex items-center gap-2 text-sm text-ink/70 font-medium">
                      <Building2 size={15} className="text-muted/70 flex-shrink-0" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}