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
            05 — Education
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className={`transition-all duration-700 delay-150 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="mb-10">
            <h2 className="font-display text-4xl md:text-5xl text-ink">
              Latar <span className="text-accent italic">Pendidikan</span>
            </h2>
          </div>

          <div className="space-y-6">
            {portfolioData.education.map((edu, i) => (
              <div
                key={i}
                className="group border border-border hover:border-accent/40 bg-white hover:shadow-lg rounded-sm transition-all duration-500 ease-out overflow-hidden"
                style={{
                  transitionDelay: `${200 + i * 100}ms`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(32px)",
                }}
              >
                <div className="flex">
                  {/* Left accent bar */}
                  <div className="w-1.5 flex-shrink-0 bg-accent/30 group-hover:bg-accent transition-colors duration-300" />

                  {/* Main content */}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2.5 mb-2">
                          <span className="p-1.5 bg-blue-50 text-accent rounded-sm">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                            </svg>
                          </span>
                          <h3 className="font-display text-lg md:text-xl text-ink group-hover:text-accent transition-colors leading-snug">
                            {edu.institution}
                          </h3>
                        </div>

                        <p className="text-muted text-base font-body mb-4 ml-9">
                          {edu.degree}
                        </p>

                        <div className="flex flex-wrap gap-2 ml-9">
                          <span className="font-mono text-xs text-muted border border-border bg-surface px-3 py-1 rounded-sm">
                            {edu.year}
                          </span>
                          {(edu as any).status && (
                            <span className="font-mono text-xs text-emerald-700 border border-emerald-300/80 bg-emerald-50 px-3 py-1 rounded-sm">
                              {(edu as any).status}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* GPA Badge */}
                      <div className="self-start md:self-center flex flex-col items-center justify-center border border-accent/20 bg-blue-50/50 rounded-sm p-4 md:px-6 md:py-4 group-hover:border-accent/50 transition-colors">
                        <span className="font-mono text-[10px] text-muted uppercase tracking-widest mb-0.5">
                          Grade Point
                        </span>
                        <div className="flex items-baseline gap-0.5">
                          <span className="font-display text-3xl md:text-4xl text-accent font-semibold leading-none">
                            {edu.gpa}
                          </span>
                          <span className="font-mono text-xs text-muted">
                            /{edu.gpaMax}
                          </span>
                        </div>
                        <span className="font-mono text-[9px] text-emerald-600 font-medium uppercase tracking-wider mt-1.5">
                          Sangat Memuaskan
                        </span>
                      </div>
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
