"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent circle blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 text-xs font-mono border border-green-300 bg-green-50 px-3 py-1.5 rounded-full mb-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_6px_2px_rgba(34,197,94,0.6)]" />
          <span className="text-green-600 font-semibold">Available for work</span>
        </div>

        {/* Name */}
        <h1
          className={`font-display text-5xl md:text-7xl lg:text-8xl text-ink leading-[1.05] mb-6 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {portfolioData.name.split(" ").map((word, i) => (
            <span key={i} className={i === 1 ? "text-accent italic" : ""}>
              {word}{" "}
            </span>
          ))}
        </h1>

        {/* Role */}
        <p
          className={`text-base md:text-lg font-mono text-muted uppercase tracking-widest mb-6 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {portfolioData.role}
        </p>

        {/* Tagline */}
        <p
          className={`text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-12 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {portfolioData.tagline}
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-ink text-white px-6 py-3 text-sm font-medium hover:bg-accent transition-colors duration-200 rounded-sm"
          >
            Lihat Projects
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink border border-border px-6 py-3 hover:border-ink transition-colors duration-200 rounded-sm"
          >
            Lihat CV
          </a>
        </div>

        {/* Social links */}
        <div
          className={`flex items-center justify-center gap-5 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-ink transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-ink transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={portfolioData.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-ink transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-ink transition-colors animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
