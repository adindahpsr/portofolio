"use client";

import { useScrollReveal } from "@/components/ui/useScrollReveal";
import { portfolioData } from "@/lib/data";

export default function EducationSection() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="education" ref={ref} className="pt-14 pb-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex items-center gap-3 mb-12 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}>
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            03 — Education
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className={`transition-all duration-700 delay-150 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="font-display text-4xl md:text-5xl text-ink mb-12">
            Latar <span className="text-accent italic">Pendidikan</span>
          </h2>

          <div className="space-y-6">
            {portfolioData.education.map((edu, i) => (
              <div
                key={i}
                className="group border border-border hover:border-accent/40 bg-white hover:shadow-md rounded-sm transition-all duration-500 ease-out overflow-hidden"
                style={{
                  transitionDelay: `${200 + i * 100}ms`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(32px)",
                }}
              >
                <div className="flex">
                  {/* Left accent bar */}
                  <div className="w-1 flex-shrink-0 bg-accent/30 group-hover:bg-accent transition-colors duration-300" />

                  {/* Main content */}
                  <div className="flex-1 p-5 md:p-6">
                    <div className="flex items-start justify-between gap-4">
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        {/* Institution */}
                        <div className="flex items-center gap-2 mb-1">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent flex-shrink-0 mt-0.5">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                          </svg>
                          <h3 className="font-display text-base md:text-lg text-ink group-hover:text-accent transition-colors leading-snug">
                            {edu.institution}
                          </h3>
                        </div>

                        {/* Degree */}
                        <p className="text-muted text-sm ml-[22px] mb-4">
                          {edu.degree}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 ml-[22px]">
                          <span className="font-mono text-xs text-muted border border-border bg-surface px-2.5 py-1 rounded-sm">
                            {edu.year}
                          </span>
                          <span className="font-mono text-xs text-accent border border-accent/30 bg-blue-50 px-2.5 py-1 rounded-sm">
                            IPK {edu.gpa}/{edu.gpaMax}
                          </span>
                        </div>
                      </div>

                      {/* GPA Badge — compact on mobile, bigger on md+ */}
                      {/* <div className="flex-shrink-0 flex flex-col items-center justify-center border border-border bg-surface rounded-sm w-14 h-14 md:w-18 md:h-18 group-hover:border-accent/40 transition-colors">
                        <span className="font-display text-lg md:text-xl text-accent leading-none">
                          {edu.gpa}
                        </span>
                        <span className="font-mono text-[8px] md:text-[9px] text-muted mt-0.5">
                          /{edu.gpaMax}
                        </span>
                        <span className="font-mono text-[7px] md:text-[8px] text-muted uppercase tracking-wider mt-0.5">
                          GPA
                        </span>
                      </div> */}
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
