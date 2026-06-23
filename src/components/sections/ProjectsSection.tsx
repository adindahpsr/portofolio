"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { useScrollReveal } from "@/components/ui/useScrollReveal";
import { portfolioData } from "@/lib/data";

const INITIAL_SHOW = 4;

export default function ProjectsSection() {
  const { ref, visible } = useScrollReveal(0.1);
  const [showAll, setShowAll] = useState(false);

  const projects = portfolioData.projects.filter((p) => !(p as any).future);
  const displayed = showAll ? projects : projects.slice(0, INITIAL_SHOW);
  const hasMore = projects.length > INITIAL_SHOW;

  return (
    <section id="projects" ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex items-center gap-3 mb-12 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}>
          <span className="font-mono text-xs text-accent uppercase tracking-widest">04 — Projects</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className={`mb-12 transition-all duration-700 delay-100 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          <h2 className="font-display text-4xl md:text-5xl text-ink">
            Project <span className="text-accent italic">pilihan</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {displayed.map((project, i) => {
            const img = (project as any).image as string | undefined;
            return (
              <div
                key={project.id}
                className="group border border-border hover:border-accent/40 bg-white hover:shadow-lg rounded-sm overflow-hidden transition-all duration-500 ease-out"
                style={{
                  transitionDelay: `${200 + i * 100}ms`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(32px)",
                }}
              >
                {/* Image area */}
                <div className="relative w-full h-48 bg-surface overflow-hidden">
                  {img ? (
                    <Image
                      src={img}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
                      <div className="flex flex-col items-center gap-2 opacity-40">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                          <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
                        </svg>
                        <span className="font-mono text-xs text-muted">No image</span>
                      </div>
                    </div>
                  )}
                  {project.featured && (
                    <span className="absolute top-3 left-3 font-mono text-[10px] text-accent uppercase tracking-widest border border-accent/30 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <a href={`/projects/${project.slug}`}>
                    <h3 className="font-display text-xl text-ink mb-3 group-hover:text-accent transition-colors cursor-pointer">
                      {project.title}
                    </h3>
                  </a>
                  <p className="text-sm text-muted leading-relaxed mb-5">{project.description}</p>
                  {/* <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs text-muted border border-border px-2 py-0.5 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div> */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <a href={`/projects/${project.slug}`} className="flex items-center gap-1.5 text-xs text-accent hover:text-ink transition-colors font-medium">
                      Lihat Detail →
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors">
                      <ExternalLink size={13} /> Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-muted hover:text-ink transition-colors">
                      <Github size={13} /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show more / less button */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 border border-border hover:border-accent text-muted hover:text-accent px-6 py-3 text-sm font-medium transition-all duration-200 rounded-sm"
            >
              {showAll ? (
                <><ChevronUp size={15} className="transition-transform group-hover:-translate-y-0.5" /> Sembunyikan</>
              ) : (
                <><ChevronDown size={15} className="transition-transform group-hover:translate-y-0.5" /> Lihat Selengkapnya ({projects.length - INITIAL_SHOW} lagi)</>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
