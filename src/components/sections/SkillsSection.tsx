"use client";

import { useScrollReveal } from "@/components/ui/useScrollReveal";
import { portfolioData, SkillItem } from "@/lib/data";

const allSkillNames = portfolioData.skills.flatMap((s) => s.items.map((it) => it.name));
const marqueeItems = [...allSkillNames, ...allSkillNames, ...allSkillNames];

const softSkills = [
  "Problem Solving",
  "Analytical Thinking",
  "NLP Research & Experimentation",
  "Data Modeling & Preprocessing",
  "Full-Stack Web Engineering",
  "Team Collaboration & Leadership",
  "Adaptability",
  "Continuous Learning",
];

export default function SkillsSection() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="skills" ref={ref} className="py-24 bg-surface/50 border-t border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`flex items-center gap-3 mb-10 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            03 — Skills & Tools
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Section Heading Two-Tone */}
        <div
          className={`mb-12 transition-all duration-700 delay-100 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight tracking-tight">
            Tech Stack {" "}
            <span className="text-muted/65 italic font-normal">
              & Tools.
            </span>
          </h2>
        </div>

        {/* 3 Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 items-stretch">
          {portfolioData.skills.map((group, i) => (
            <div
              key={group.category}
              className="bg-white border border-border p-6 rounded-sm hover:border-accent/40 hover:shadow-md transition-all duration-500 ease-out flex flex-col justify-between group"
              style={{
                transitionDelay: `${150 + i * 80}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
              }}
            >
              <div>
                <div className="mb-4">
                  <h3 className="font-display text-lg md:text-xl text-ink group-hover:text-accent transition-colors leading-snug tracking-tight mb-1">
                    {group.category}
                  </h3>
                  {group.description && (
                    <p className="text-xs text-muted/80 font-body leading-relaxed">
                      {group.description}
                    </p>
                  )}
                </div>

                {/* Horizontal wrap icon badges */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {group.items.map((skill: SkillItem) => (
                    <div
                      key={skill.name}
                      title={skill.name}
                      aria-label={skill.name}
                      className="group/item relative w-11 h-11 flex items-center justify-center rounded-sm border border-border/70 bg-surface/40 hover:bg-white hover:border-accent/50 hover:shadow-2xs transition-all duration-200 cursor-pointer"
                    >
                      <img
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        className="w-5 h-5 object-contain transition-transform group-hover/item:scale-110"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            const dot = document.createElement("span");
                            dot.className = "w-2.5 h-2.5 rounded-full bg-accent";
                            parent.appendChild(dot);
                          }
                        }}
                      />
                      {/* Tooltip on hover */}
                      <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap rounded bg-ink px-2 py-0.5 text-[10px] font-mono text-white opacity-0 group-hover/item:opacity-100 transition-opacity shadow-sm">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies & Soft Skills Strip */}
        <div
          className={`border border-border/80 bg-white p-6 rounded-sm mb-12 shadow-2xs transition-all duration-700 delay-300 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="block font-mono text-[10px] md:text-[11px] text-muted font-medium uppercase tracking-widest mb-3">
            CORE COMPETENCIES & PROFESSIONAL SKILLS
          </span>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((item) => (
              <span
                key={item}
                className="font-mono text-xs text-ink/85 border border-border bg-surface px-3 py-1.5 rounded-full hover:border-accent/40 hover:text-accent transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Continuous Marquee */}
        <div className="overflow-hidden border-t border-b border-border py-4 bg-white/60">
          <div className="flex animate-marquee whitespace-nowrap">
            {marqueeItems.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-4 mx-4 text-xs font-mono text-muted uppercase tracking-wider">
                {item}<span className="text-accent/40">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

