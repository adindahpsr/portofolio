"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, ImageIcon, FileText, Calendar, Layers, ArrowRight } from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";
import { portfolioData, ProjectItem } from "@/lib/data";

const toolLogos: Record<string, string> = {
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

export default function ProjectDetailClient({ project }: { project: ProjectItem }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  const otherProjects = portfolioData.projects.filter((p) => p.slug !== project.slug);

  return (
    <main className="min-h-screen bg-white">
      {/* Sticky Navigation Bar */}
      <div className="border-b border-border sticky top-0 bg-white/95 backdrop-blur-md z-50">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-ink transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Kembali</span>
          </Link>
          <Link href="/" className="font-display text-sm text-ink hover:text-accent transition-colors">
            {portfolioData.name.split(" ")[0]}<span className="text-accent">.</span>
          </Link>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-6 pt-12 pb-24">
        {/* Header Section */}
        <div
          className={`mb-8 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Breadcrumb Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-4 font-mono text-xs">
            {project.featured && (
              <span className="text-accent border border-accent/25 bg-blue-50/70 px-2.5 py-0.5 rounded-full uppercase tracking-wider text-[10px] font-semibold">
                Featured Project
              </span>
            )}
            {project.period && (
              <span className="inline-flex items-center gap-1.5 text-muted border border-border/80 bg-surface px-2.5 py-0.5 rounded-full text-[11px]">
                <Calendar size={11} className="text-accent" />
                {project.period}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink mb-5 leading-[1.15] tracking-tight">
            {project.title}
          </h1>

          {/* Subtitle / Lead */}
          <p className="text-base sm:text-lg text-muted/95 leading-relaxed max-w-3xl font-body">
            {project.description}
          </p>

          {/* Quick Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-6">
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ink text-white px-5 py-2.5 text-xs font-mono font-medium hover:bg-accent transition-all duration-200 rounded-sm shadow-xs active:scale-[0.98]"
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
                className="inline-flex items-center gap-2 border border-border text-ink bg-white px-5 py-2.5 text-xs font-mono font-medium hover:border-ink hover:bg-surface transition-all duration-200 rounded-sm shadow-2xs active:scale-[0.98]"
              >
                <Github size={14} />
                <span>Source Code ↗</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Image Showcase with Browser Frame Mockup */}
        <div
          className={`mb-12 transition-all duration-700 delay-150 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="w-full rounded-sm overflow-hidden border border-border bg-surface shadow-sm">
            {/* Browser Header Bar */}
            <div className="h-9 bg-slate-100/90 border-b border-border/80 px-4 flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="flex-1 max-w-sm mx-auto h-5 bg-white border border-border/60 rounded-xs px-2.5 flex items-center text-[10px] font-mono text-muted/70 truncate">
                {project.link && project.link !== "#" ? project.link : `project/${project.slug}`}
              </div>
            </div>

            {/* Image Container */}
            <div className="relative aspect-video w-full bg-surface group overflow-hidden">
              {project.image ? (
                <NextImage
                  src={project.image}
                  alt={`Screenshot ${project.title}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface gap-3">
                  <div className="w-14 h-14 rounded-full bg-border flex items-center justify-center">
                    <ImageIcon size={24} className="text-muted" />
                  </div>
                  <p className="font-mono text-xs text-muted text-center">
                    Screenshot Project
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Academic Publication Highlight Banner (if exists) */}
        {project.publication && (
          <div
            className={`mb-12 border border-emerald-300/80 bg-gradient-to-r from-emerald-50/70 to-blue-50/40 p-5 sm:p-6 rounded-sm shadow-2xs transition-all duration-700 delay-200 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-sm bg-white border border-emerald-200/90 flex items-center justify-center text-emerald-700 flex-shrink-0 shadow-2xs">
                  <FileText size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-xs font-medium">
                      Published Research
                    </span>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl text-ink font-semibold leading-snug">
                    Naskah Publikasi Ilmiah Resmi
                  </h3>
                  <p className="text-xs sm:text-sm font-body text-muted leading-relaxed mt-0.5">
                    Hasil riset tugas akhir klasifikasi teks ini telah dipublikasikan dan terindeks di Repositori Digital Perpustakaan UMS (ePrints).
                  </p>
                </div>
              </div>
              <a
                href={project.publication}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-mono font-medium px-4 py-2.5 rounded-sm transition-colors flex-shrink-0 shadow-2xs"
              >
                <FileText size={14} /> Baca Naskah (PDF) ↗
              </a>
            </div>
          </div>
        )}

        {/* Tech Stack Strip with Logos */}
        <div
          className={`mb-12 transition-all duration-700 delay-200 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Layers size={14} className="text-accent" />
            <h2 className="font-mono text-xs text-accent uppercase tracking-widest">
              Teknologi & Tools yang Digunakan
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 font-mono text-xs text-ink/90 bg-surface border border-border/80 px-3 py-1.5 rounded-sm shadow-2xs hover:border-accent/40 hover:bg-white transition-colors"
              >
                {toolLogos[tag] && (
                  <img
                    src={toolLogos[tag]}
                    alt={`${tag} logo`}
                    className="w-4 h-4 object-contain"
                    loading="lazy"
                  />
                )}
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="h-px bg-border mb-12" />

        {/* Narrative: Tentang Project */}
        <div
          className={`mb-12 transition-all duration-700 delay-250 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-display text-2xl sm:text-3xl text-ink leading-tight tracking-tight mb-6">
            Latar Belakang &{" "}
            <span className="text-muted/65 italic font-normal">
              Riset Implementasi.
            </span>
          </h2>
          <div className="space-y-5 text-[15px] sm:text-base text-muted/90 font-body leading-relaxed max-w-4xl">
            {project.longDescription.split("\n\n").map((para, i) => (
              <p key={i} className="leading-relaxed">
                {para.trim()}
              </p>
            ))}
          </div>
        </div>

        {/* Key Features / Implementation Highlights */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div
            className={`mb-14 transition-all duration-700 delay-300 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="font-display text-2xl sm:text-3xl text-ink leading-tight tracking-tight mb-6">
              Fitur Utama &{" "}
              <span className="text-muted/65 italic font-normal">
                Karakteristik Teknis.
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.keyFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-sm border border-border/80 bg-surface/40 hover:bg-white hover:border-accent/40 hover:shadow-2xs transition-all duration-200"
                >
                  <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-body text-ink/90 leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="h-px bg-border mb-12" />

        {/* Explore Other Projects Navigation */}
        <div
          className={`transition-all duration-700 delay-350 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl sm:text-2xl text-ink">
              Jelajahi Proyek Lainnya
            </h3>
            <Link
              href="/#projects"
              className="text-xs font-mono text-accent hover:underline inline-flex items-center gap-1"
            >
              Semua Proyek <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {otherProjects.slice(0, 3).map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.slug}`}
                className="group border border-border bg-white hover:border-accent/50 hover:shadow-2xs p-4 rounded-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-muted mb-2">
                    <span>{p.period ?? "Project"}</span>
                    <ArrowRight size={13} className="group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="font-display text-sm sm:text-base text-ink group-hover:text-accent font-semibold leading-snug line-clamp-2 mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs font-body text-muted line-clamp-2 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
