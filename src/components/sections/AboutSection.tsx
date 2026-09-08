"use client";

import { useScrollReveal } from "@/components/ui/useScrollReveal";
import { portfolioData } from "@/lib/data";

export default function AboutSection() {
  const { ref, visible } = useScrollReveal(0.15);

  return (
    <section id="about" ref={ref} className="pt-12 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`flex items-center gap-3 mb-10 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest">01 — About Me</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div
          className={`transition-all duration-700 delay-100 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Two-tone Section Title */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight tracking-tight mb-10">
            Membangun aplikasi web, mengolah data,{" "}
            <span className="text-muted/65 italic font-normal">
              dan bereksperimen dengan AI.
            </span>
          </h2>

          {/* Two-Column Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Column: Big Lead Statement */}
            {/* <div className="lg:col-span-4">
              <p className="font-display text-2xl sm:text-3xl text-ink leading-snug tracking-tight font-medium text-balance">
                Fresh graduate Teknik Informatika dengan minat pada NLP, Data Analytics, maupun Web Development.
              </p>
            </div> */}

            {/* Right Column: Narrative */}
            <div className="lg:col-span-12 space-y-4 text-muted leading-relaxed text-[15px]">
              <p>
                Lulusan S1 Teknik Informatika dari Universitas Muhammadiyah Surakarta dengan predikat kelulusan <strong className="text-ink font-semibold">Sangat Memuaskan (IPK 3.76)</strong>. Selama kuliah, saya aktif mendalami analisis data, pemrosesan bahasa alami (NLP), serta pembuatan aplikasi web dari sisi frontend maupun backend.
              </p>
              <p>
                Berbekal pengalaman eksplorasi data analitik, riset tugas akhir klasifikasi teks, dan beberapa proyek web, saya bersemangat untuk terus belajar dan berkontribusi langsung dalam tim NLP, Data Analytics, maupun Web Development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
