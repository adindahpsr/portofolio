"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, ChevronDown, ChevronUp, FileText } from "lucide-react";
import { useScrollReveal } from "@/components/ui/useScrollReveal";
import { portfolioData } from "@/lib/data";

const INITIAL_SHOW = 4;

const toolLogos: Record<string, string> = {
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  Genially: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231a56db' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 12h4m-2-2v4m7-1h.01M18 11h.01'/%3E%3Cpath d='M6.5 7h11a4.5 4.5 0 0 1 4.3 5.8l-1 3a2.5 2.5 0 0 1-4.2 1L14.5 14h-5l-2.1 2.8a2.5 2.5 0 0 1-4.2-1l-1-3A4.5 4.5 0 0 1 6.5 7Z'/%3E%3C/svg%3E",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "Scikit-Learn": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
  Pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  Streamlit: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
  Laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Machine Learning": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  NLP: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "AES Encryption": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231a56db' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/><path d='m9 12 2 2 4-4'/></svg>",
  "REST API": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  "Microsoft Excel": "/icons/excel.svg",
  "VS Code": "/icons/vscode.svg",
  "Google Colab": "/icons/googlecolab.svg",
};

export default function ProjectsSection() {
  const { ref, visible } = useScrollReveal(0.1);
  const [showAll, setShowAll] = useState(false);

  const projects = portfolioData.projects.filter((p) => !p.future);
  const displayed = showAll ? projects : projects.slice(0, INITIAL_SHOW);
  const hasMore = projects.length > INITIAL_SHOW;

  return (
    <section id="projects" ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`flex items-center gap-3 mb-10 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            02 — Selected Work
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
            Project pilihan yang{" "}
            <span className="text-muted/65 italic font-normal">
              pernah saya kerjakan.
            </span>
          </h2>
        </div>

        {/* Horizontal Project Cards */}
        <div className="flex flex-col gap-8">
          {displayed.map((project, i) => {
            const img = project.image;
            return (
              <article
                key={project.id}
                className="group border border-border hover:border-accent/40 bg-white hover:shadow-lg rounded-sm overflow-hidden transition-all duration-500 ease-out grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch p-5 md:p-7"
                style={{
                  transitionDelay: `${150 + i * 80}ms`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                }}
              >
                {/* Image side */}
                <div className="lg:col-span-5 relative w-full min-h-[220px] md:min-h-[260px] aspect-[16/10] bg-surface overflow-hidden rounded-xs border border-border/60">
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
                        <span className="font-mono text-xs text-muted">Preview</span>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <a
                    href={`/projects/${project.slug}`}
                    className="absolute inset-0 bg-ink/70 backdrop-blur-2xs opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 text-white font-medium text-xs gap-1.5 z-10"
                  >
                    <span>Lihat Detail Project</span>
                    <span className="text-accent text-sm">↗</span>
                  </a>

                  {/* Badge Angka & Featured di depan gambar (cukup 1 tulisan featured) */}
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm border border-border/80 px-2.5 py-1 rounded-xs shadow-2xs">
                    <span className="font-mono text-xs font-bold text-ink">
                      0{i + 1}
                    </span>
                    {project.featured && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        <span className="font-mono text-[10px] font-semibold text-accent uppercase tracking-wider">
                          Featured
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Content side */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Header: Judul di kiri, Tanggal di kanan */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                      <a href={`/projects/${project.slug}`} className="flex-1">
                        <h3 className="font-display text-xl md:text-2xl text-ink group-hover:text-accent transition-colors cursor-pointer leading-snug tracking-tight">
                          {project.title}
                        </h3>
                      </a>
                      {project.period && (
                        <span className="shrink-0 font-mono text-xs text-muted/90 border border-border/70 bg-surface/50 px-2.5 py-1 rounded-xs self-start">
                          {project.period}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted leading-relaxed mb-5 font-body">
                      {project.description}
                    </p>

                    {/* Tools (Icons Only with Tooltips) */}
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <div
                          key={tag}
                          title={tag}
                          className="group/tool relative w-8 h-8 rounded-xs border border-border/80 bg-surface/50 hover:bg-white hover:border-accent/50 hover:shadow-2xs flex items-center justify-center transition-all cursor-pointer"
                        >
                          {toolLogos[tag] ? (
                            <img
                              src={toolLogos[tag]}
                              alt={`${tag} logo`}
                              className="w-4 h-4 object-contain transition-transform group-hover/tool:scale-110"
                              loading="lazy"
                            />
                          ) : (
                            <span className="font-mono text-[10px] text-ink font-semibold">{tag.slice(0, 2)}</span>
                          )}
                          {/* Tooltip on hover */}
                          <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap rounded bg-ink px-2 py-0.5 text-[9px] font-mono text-white opacity-0 group-hover/tool:opacity-100 transition-opacity shadow-xs">
                            {tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border flex-wrap mt-auto">
                    <a
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium bg-ink text-white hover:bg-accent px-3.5 py-2 rounded-xs transition-colors shadow-2xs"
                    >
                      <span>Detail Project</span>
                      <span>→</span>
                    </a>

                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-ink border border-border bg-white hover:border-accent hover:text-accent px-3.5 py-2 rounded-xs transition-colors shadow-2xs"
                      >
                        <ExternalLink size={13} />
                        <span>Live Demo ↗</span>
                      </a>
                    )}

                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-ink border border-border bg-white hover:border-accent hover:text-accent px-3.5 py-2 rounded-xs transition-colors shadow-2xs"
                      >
                        <Github size={14} />
                        <span>GitHub ↗</span>
                      </a>
                    )}

                    {project.publication && (
                      <a
                        href={project.publication}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-800 bg-emerald-50/90 border border-emerald-300/80 hover:bg-emerald-100/90 px-3.5 py-2 rounded-xs transition-colors"
                      >
                        <FileText size={13} className="text-emerald-600" />
                        <span>Naskah Publikasi ↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Show more / less button */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 border border-border hover:border-accent text-muted hover:text-accent px-6 py-3 text-sm font-medium transition-all duration-200 rounded-sm bg-white shadow-2xs"
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
