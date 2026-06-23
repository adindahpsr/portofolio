"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Image } from "lucide-react";
import { portfolioData } from "@/lib/data";

type Project = (typeof portfolioData.projects)[0];

export default function ProjectDetailClient({ project }: { project: Project }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const anim = (delay: number) =>
    `transition-all duration-700 ease-out ${delay === 0 ? "" : `delay-[${delay}ms]`} ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return (
    <main className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="border-b border-border sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/#projects" className="flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors">
            <ArrowLeft size={15} /> Kembali
          </a>
          <span className="font-display text-sm text-ink">
            {portfolioData.name.split(" ")[0]}<span className="text-accent">.</span>
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className={`mb-12 ${anim(0)}`}>
          {project.featured && (
            <span className="inline-block font-mono text-[10px] text-accent uppercase tracking-widest mb-4 border border-accent/20 bg-blue-50 px-2 py-0.5 rounded-full">
              Featured Project
            </span>
          )}
          <h1 className="font-display text-4xl md:text-6xl text-ink mb-4 leading-tight">{project.title}</h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">{project.description}</p>
        </div>

        {/* Project Image */}
        <div className={`mb-12 transition-all duration-700 delay-100 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          <div className="w-full aspect-video rounded-sm overflow-hidden border border-border bg-surface relative group">
            {/* Ganti src dengan gambar project kamu — taruh di public/projects/nama-project.jpg */}
            <img
              src={`/projects/${project.slug}.jpg`}
              alt={`Screenshot ${project.title}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            {/* Fallback */}
            <div className="absolute inset-0 flex-col items-center justify-center bg-surface gap-3" style={{ display: "none" }}>
              <div className="w-14 h-14 rounded-full bg-border flex items-center justify-center">
                <Image size={24} className="text-muted" />
              </div>
              <p className="font-mono text-xs text-muted text-center">
                Tambah screenshot di<br/>
                <span className="text-accent">public/projects/{project.slug}.jpg</span>
              </p>
            </div>
          </div>
        </div>

        {/* Tech stack */}
        <div className={`mb-12 transition-all duration-700 delay-200 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          <h2 className="font-mono text-xs text-accent uppercase tracking-widest mb-4">Teknologi yang Digunakan</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono text-sm text-ink border border-border px-3 py-1.5 rounded-sm hover:border-accent/40 hover:bg-surface transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="h-px bg-border mb-12" />

        {/* Description */}
        <div className={`mb-12 transition-all duration-700 delay-300 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          <h2 className="font-mono text-xs text-accent uppercase tracking-widest mb-6">Tentang Project</h2>
          <div className="space-y-4">
            {project.longDescription.split("\n\n").map((para, i) => (
              <p key={i} className="text-[15px] text-muted leading-relaxed">{para.trim()}</p>
            ))}
          </div>
        </div>

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className={`mb-12 transition-all duration-700 delay-[400ms] ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>
            <h2 className="font-mono text-xs text-accent uppercase tracking-widest mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.keyFeatures.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[15px] text-ink"
                  style={{
                    transitionDelay: `${400 + i * 60}ms`,
                    opacity: visible ? 1 : 0,
                    transform: visible ? "none" : "translateX(-10px)",
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                  }}
                >
                  <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="h-px bg-border mb-12" />

        {/* CTA Links */}
        <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-[500ms] ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          {project.link && project.link !== "#" && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-ink text-white px-6 py-3 text-sm font-medium hover:bg-accent transition-colors rounded-sm">
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          {project.github && project.github !== "#" && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border text-ink px-6 py-3 text-sm font-medium hover:border-ink transition-colors rounded-sm">
              <Github size={14} /> Source Code
            </a>
          )}
          <a href="/#projects" className="inline-flex items-center justify-center gap-2 text-sm text-muted hover:text-ink transition-colors px-6 py-3">
            <ArrowLeft size={14} /> Lihat Project Lain
          </a>
        </div>
      </div>
    </main>
  );
}
