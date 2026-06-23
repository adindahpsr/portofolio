"use client";

import { useScrollReveal } from "@/components/ui/useScrollReveal";
import { portfolioData } from "@/lib/data";

export default function AboutSection() {
  const { ref, visible } = useScrollReveal(0.15);

  const t = (delay: number) =>
    `transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  return (
    <section id="about" ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`flex items-center gap-3 mb-12 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest">01 — About</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className={`order-first lg:order-last transition-all duration-700 delay-300 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="flex justify-center">
              <div className="relative group" style={{ width: "min(320px, 80vw)" }}>
                <div className="absolute inset-0 rounded-[60%_40%_55%_45%/50%_45%_55%_50%] border-2 border-accent/20 scale-105 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                <div className="absolute inset-4 rounded-full bg-blue-100/60 blur-2xl group-hover:bg-blue-200/60 transition-all duration-500" />
                <div
                  className="relative overflow-hidden bg-surface"
                  style={{
                    borderRadius: "60% 40% 55% 45% / 50% 45% 55% 50%",
                    aspectRatio: "1 / 1",
                    transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05) rotate(-2deg)";
                    e.currentTarget.style.boxShadow = "0 20px 60px rgba(26,86,219,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <img
                    src="/placeholder-photo.jpg"
                    alt={portfolioData.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div className="absolute inset-0 flex-col items-center justify-center bg-surface gap-3" style={{ display: "none" }}>
                    <div className="w-20 h-20 rounded-full bg-border flex items-center justify-center">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>
                    <p className="font-mono text-xs text-muted text-center px-6">
                      Taruh foto di<br/><span className="text-accent">public/placeholder-photo.jpg</span>
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-border px-4 py-2 rounded-full shadow-sm whitespace-nowrap group-hover:shadow-md transition-shadow duration-300">
                  <p className="font-display text-sm text-ink text-center">{portfolioData.name}</p>
                  <p className="font-mono text-[10px] text-muted text-center">{portfolioData.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={`order-last lg:order-first transition-all duration-700 delay-150 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <h2 className="font-display text-4xl md:text-5xl text-ink mb-8 leading-tight">
              Halo, saya <span className="text-accent italic">{portfolioData.name.split(" ")[0]}</span>
            </h2>
            <div className="space-y-4">
              {portfolioData.about.split("\n\n").map((para, i) => (
                <p key={i} className="text-muted leading-relaxed text-[15px]">{para.trim()}</p>
              ))}
            </div>
            <a
              href={`mailto:${portfolioData.email}`}
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-ink border-b border-ink pb-0.5 hover:text-accent hover:border-accent transition-colors"
            >
              Mari berkolaborasi →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
