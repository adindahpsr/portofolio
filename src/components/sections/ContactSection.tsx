"use client";

import { useState } from "react";
import { Send, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { useScrollReveal } from "@/components/ui/useScrollReveal";
import { portfolioData } from "@/lib/data";

// ✅ Ganti dengan URL Formspree kamu setelah daftar di https://formspree.io
// Contoh: "https://formspree.io/f/xbjnkpzq"
const FORMSPREE_URL = "https://formspree.io/f/mykanpqy";

export default function ContactSection() {
  const { ref, visible } = useScrollReveal(0.1);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const socials = [
    { icon: Github, label: "GitHub", href: portfolioData.socials.github },
    { icon: Linkedin, label: "LinkedIn", href: portfolioData.socials.linkedin },
    { icon: Instagram, label: "Instagram", href: portfolioData.socials.instagram },
    { icon: Mail, label: "Email", href: `mailto:${portfolioData.email}` },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex items-center gap-3 mb-12 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}>
          <span className="font-mono text-xs text-accent uppercase tracking-widest">05 — Contact</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className={`transition-all duration-700 delay-100 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>
            <h2 className="font-display text-4xl md:text-5xl text-ink mb-6 leading-tight">
              Mari <span className="text-accent italic">berkolaborasi</span>
            </h2>
            <p className="text-muted leading-relaxed mb-10 text-[15px]">
              Terbuka untuk peluang kerja, freelance, atau sekadar ngobrol tentang proyek yang menarik. Jangan ragu untuk menghubungi saya!
            </p>
            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted hover:text-ink group transition-colors">
                  <span className="w-8 h-8 border border-border rounded-sm flex items-center justify-center group-hover:border-accent/40 group-hover:bg-white transition-all">
                    <Icon size={14} />
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-300 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-mono text-xs text-muted uppercase tracking-widest mb-2">Nama</label>
                <input type="text" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Nama kamu"
                  className="w-full border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors rounded-sm" />
              </div>
              <div>
                <label className="block font-mono text-xs text-muted uppercase tracking-widest mb-2">Email</label>
                <input type="email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="email@kamu.com"
                  className="w-full border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors rounded-sm" />
              </div>
              <div>
                <label className="block font-mono text-xs text-muted uppercase tracking-widest mb-2">Pesan</label>
                <textarea required rows={5} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Ceritakan proyekmu..."
                  className="w-full border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors rounded-sm resize-none" />
              </div>

              <button type="submit"
                disabled={status === "sending" || status === "sent"}
                className="w-full flex items-center justify-center gap-2 bg-ink text-white py-3 text-sm font-medium hover:bg-accent disabled:opacity-60 transition-all duration-200 rounded-sm">
                {status === "sending" ? (
                  <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Mengirim...</>
                ) : status === "sent" ? (
                  <>✓ Pesan Terkirim!</>
                ) : (
                  <><Send size={14} /> Kirim Pesan</>
                )}
              </button>

              {status === "sent" && (
                <div className="flex items-center gap-2 justify-center py-2 px-4 bg-green-50 border border-green-200 rounded-sm">
                  <span className="text-green-600 text-sm">✓</span>
                  <p className="text-sm text-green-700">Terima kasih! Pesanmu sudah terkirim ke inbox saya.</p>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 justify-center py-2 px-4 bg-red-50 border border-red-200 rounded-sm">
                  <p className="text-sm text-red-600">Gagal mengirim. Coba lagi atau hubungi langsung via email.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
