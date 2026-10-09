"use client";

import { useEffect, useState } from "react";
import { portfolioData } from "@/lib/data";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle grid background with smooth bottom fade-out */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />
      {/* Bottom soft gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      {/* Accent circle blur */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-50/70 rounded-full blur-3xl opacity-70 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-14 md:pt-36 md:pb-20">
        {/* 2-Column Hero Grid with Mobile-First Order */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center mb-12 lg:mb-16">
          {/* Photo Column: Appears First on Mobile, Right on Desktop */}
          <div
            className={`order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end transition-all duration-700 delay-100 ease-out mb-4 lg:mb-0 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative group w-[220px] sm:w-[270px] lg:w-[320px]">
              {/* Outer soft aura & contour ring */}
              <div className="absolute inset-0 rounded-[60%_40%_55%_45%/50%_45%_55%_50%] border-2 border-accent/25 scale-105 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-4 rounded-full bg-blue-100/50 blur-2xl group-hover:bg-blue-200/50 transition-colors duration-500" />

              <div
                className="relative overflow-hidden bg-surface shadow-md border border-border/60"
                style={{
                  borderRadius: "60% 40% 55% 45% / 50% 45% 55% 50%",
                  aspectRatio: "1 / 1",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(26,86,219,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src="/placeholder-photo.jpg"
                  alt={portfolioData.name}
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div className="absolute inset-0 flex-col items-center justify-center bg-surface gap-3" style={{ display: "none" }}>
                  <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-border/70 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <p className="font-mono text-[10px] sm:text-[11px] text-muted text-center px-4">
                    Photo Profile<br />
                    <span className="text-accent text-[9px] sm:text-[10px]">public/placeholder-photo.jpg</span>
                  </p>
                </div>
              </div>

              {/* Floating Pill Top Left */}
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 bg-white/95 backdrop-blur-md border border-border shadow-xs sm:shadow-md rounded-full px-2.5 py-1 sm:px-3.5 sm:py-1.5 flex items-center gap-1.5 transform -rotate-3 hover:rotate-0 transition-transform">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent" />
                <span className="font-mono text-[10px] sm:text-[11px] text-ink font-medium">Data & Web Enthusiast</span>
              </div>

              {/* Floating Pill Bottom Right */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-white/95 backdrop-blur-md border border-border shadow-xs sm:shadow-md rounded-full px-2.5 py-1 sm:px-3.5 sm:py-1.5 flex items-center gap-1.5 transform rotate-3 hover:rotate-0 transition-transform">
                <span className="text-accent text-xs">✦</span>
                <span className="font-mono text-[10px] sm:text-[11px] text-ink font-medium">Fresh Graduate</span>
              </div>
            </div>
          </div>

          {/* Text Column: Appears Below Photo on Mobile, Left on Desktop */}
          <div
            className={`order-2 lg:order-1 lg:col-span-7 text-center lg:text-left transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Availability status badge */}
            <div className="inline-flex items-center gap-2 text-xs font-mono border border-emerald-300/80 bg-emerald-50/80 text-emerald-800 px-3.5 py-1.5 rounded-full shadow-2xs mb-5 mx-auto lg:mx-0">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_6px_2px_rgba(16,185,129,0.5)]" />
              <span className="font-semibold tracking-wide">Available for Work & Collaboration</span>
            </div>

            {/* Headline Two-Tone */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.08] tracking-tight mb-4 sm:mb-5">
              Halo, saya <span className="text-accent italic font-normal">{portfolioData.name}.</span>
            </h1>

            {/* Bio text */}
            <p className="text-base sm:text-lg text-muted/90 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-7 sm:mb-8 font-body">
              Fresh graduate S1 Teknik Informatika UMS dengan fokus riset Machine Learning & NLP, eksplorasi data analitik berbasis insight, dan perancangan web full-stack yang terstruktur.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-accent transition-all duration-200 rounded-sm shadow-sm hover:shadow-md active:scale-[0.98]"
              >
                Lihat Projects <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

