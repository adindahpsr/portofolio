"use client";

import { useState } from "react";
import { Calendar, Image as ImageIcon } from "lucide-react";
import { useScrollReveal } from "@/components/ui/useScrollReveal";
import { portfolioData } from "@/lib/data";

export default function OrganizationSection() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="organization" ref={ref} className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex items-center gap-3 mb-12 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}>
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            06 — Organization
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className={`transition-all duration-700 delay-150 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="mb-12">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight tracking-tight">
              Pengalaman organisasi &{" "}
              <span className="text-muted/65 italic font-normal">
                kegiatan kepemimpinan.
              </span>
            </h2>
          </div>

          {/* 3 Kolom Card dengan Foto Landscape di Atas Jabatan */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {portfolioData.organizations.map((item, i) => (
              <div
                key={i}
                className="group border border-border bg-white hover:border-ink/30 hover:shadow-md rounded-md overflow-hidden transition-all duration-300 flex flex-col h-full"
                style={{
                  transitionDelay: `${150 + i * 100}ms`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                }}
              >
                {/* Landscape Photo Container */}
                <div className="relative w-full aspect-[16/10] bg-surface overflow-hidden border-b border-border/80">
                  <img
                    src={item.image}
                    alt={item.org}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Tampilan placeholder estetik jika file foto belum ditaruh
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />

                  {/* Fallback Placeholder jika gambar belum tersedia */}
                  <div
                    className="absolute inset-0 flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50/50 p-4 text-center gap-2"
                    style={{ display: "none" }}
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-border shadow-2xs flex items-center justify-center text-muted/60 group-hover:text-accent transition-colors">
                      <ImageIcon size={18} />
                    </div>
                    <span className="font-mono text-[11px] text-muted/80">
                      {item.image?.replace("/images/organizations/", "")}
                    </span>
                  </div>

                  {/* Category Pill Tag di pojok foto */}
                  {item.tag && (
                    <span className="absolute top-3 left-3 font-mono text-[10px] text-accent/80 bg-white/90 backdrop-blur-sm border border-border/80 px-2.5 py-0.5 rounded-full shadow-2xs">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Content di bawah foto */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-display text-lg md:text-xl text-ink group-hover:text-accent transition-colors leading-snug mb-2">
                      {item.role}
                    </h3>

                    <p className="text-sm font-medium text-ink/70 leading-relaxed mb-4">
                      {item.org}
                    </p>
                  </div>

                  {/* Period Badge di bawah */}
                  <div className="pt-3 border-t border-border/60 flex items-center gap-2 text-muted font-mono text-xs">
                    <Calendar size={13} className="text-accent/80" />
                    <span>{item.period}</span>
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