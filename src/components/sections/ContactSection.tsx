"use client";

import { useScrollReveal } from "@/components/ui/useScrollReveal";
import { portfolioData } from "@/lib/data";

export default function ContactSection() {
  const { ref, visible } = useScrollReveal(0.1);

  const socials = [
    {
      label: "Email",
      handle: portfolioData.email,
      href: `mailto:${portfolioData.email}`,
      icon: "https://cdn.simpleicons.org/gmail",
      bgHover: "hover:border-[#EA4335]/40 hover:bg-red-50/20",
    },
    {
      label: "LinkedIn",
      handle: "adinda-aulia-hapsari",
      href: portfolioData.socials.linkedin,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
      bgHover: "hover:border-[#0A66C2]/40 hover:bg-sky-50/20",
    },
    {
      label: "GitHub",
      handle: "adindahpsr",
      href: portfolioData.socials.github,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      bgHover: "hover:border-ink/40 hover:bg-slate-50",
    },
    {
      label: "Instagram",
      handle: "@adinda.hps",
      href: portfolioData.socials.instagram,
      icon: "https://cdn.simpleicons.org/instagram",
      bgHover: "hover:border-[#E4405F]/40 hover:bg-pink-50/20",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 md:py-24 bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`flex items-center gap-3 mb-10 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            07 — Contact
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Section Heading Two-Tone */}
        <div
          className={`max-w-3xl mb-10 transition-all duration-700 delay-100 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight tracking-tight mb-4">
            Mari berkolaborasi &{" "}
            <span className="text-muted/65 italic font-normal">
              terhubung lebih dekat.
            </span>
          </h2>
          <p className="font-body text-muted leading-relaxed text-[15px] md:text-base">
            Terbuka untuk peluang kerja, freelance, riset data, maupun diskusi seputar pengembangan web. Silakan hubungi saya melalui kanal di bawah:
          </p>
        </div>

        {/* Minimalist Contact Buttons - Berjajar Horizontal dengan Ikon Berwarna */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {socials.map(({ label, handle, href, icon, bgHover }, i) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white border border-border/90 ${bgHover} hover:shadow-2xs p-3.5 sm:p-4 rounded-sm flex items-center justify-between transition-all duration-300 active:scale-[0.98]`}
              style={{
                transitionDelay: `${150 + i * 70}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <div className="flex items-center gap-3 min-w-0">
                {/* Colored Icon Badge */}
                <div className="w-9 h-9 rounded-sm bg-surface border border-border/70 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <img
                    src={icon}
                    alt={`${label} logo`}
                    className="w-4 h-4 object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Text Info */}
                <div className="min-w-0 text-left">
                  <span className="block font-display text-sm sm:text-[15px] font-semibold text-ink group-hover:text-accent transition-colors leading-tight">
                    {label}
                  </span>
                  <span className="block font-mono text-[11px] text-muted truncate mt-0.5">
                    {handle}
                  </span>
                </div>
              </div>

              {/* Arrow Indicator */}
              <span className="font-mono text-xs text-muted/60 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-2">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
