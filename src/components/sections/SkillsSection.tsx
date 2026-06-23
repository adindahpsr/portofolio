"use client";

import { useScrollReveal } from "@/components/ui/useScrollReveal";
import { portfolioData } from "@/lib/data";

const allSkills = portfolioData.skills.flatMap((s) => s.items);
const marqueeItems = [...allSkills, ...allSkills, ...allSkills];

export default function SkillsSection() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="skills" ref={ref} className="pt-24 pb-8 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex items-center gap-3 mb-12 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}>
          <span className="font-mono text-xs text-accent uppercase tracking-widest">02 — Skills</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className={`mb-12 transition-all duration-700 delay-100 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          <h2 className="font-display text-4xl md:text-5xl text-ink">
            Apa yang saya <span className="text-accent italic">kuasai</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {portfolioData.skills.map((group, i) => (
            <div
              key={group.category}
              className="bg-white border border-border p-6 rounded-sm hover:shadow-sm transition-all duration-500 ease-out"
              style={{
                transitionDelay: `${150 + i * 80}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
              }}
            >
              <h3 className="font-mono text-xs text-accent uppercase tracking-widest mb-4">{group.category}</h3>
              <ul className="space-y-2">
                {group.items.map((skill) => (
                  <li key={skill} className="text-sm text-ink flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="overflow-hidden border-t border-b border-border py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {marqueeItems.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-4 mx-4 text-sm font-mono text-muted">
                {item}<span className="text-accent/40">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
