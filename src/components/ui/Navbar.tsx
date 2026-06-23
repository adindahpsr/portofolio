"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { portfolioData } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Use scroll position to determine active section — more reliable than IntersectionObserver for all sections
    const getActiveSection = () => {
      const offsets = navLinks.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: el.getBoundingClientRect().top };
      });

      // Find the section whose top is closest to (but not past) 120px from top
      const passed = offsets.filter((o) => o.top <= 120);
      if (passed.length === 0) {
        setActiveSection(offsets[0]?.id ?? "");
        return;
      }
      // Pick the one closest to 120px (the last one that crossed)
      const active = passed.reduce((a, b) => (a.top > b.top ? a : b));
      setActiveSection(active.id);
    };

    getActiveSection();
    window.addEventListener("scroll", getActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", getActiveSection);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl text-ink hover:text-accent transition-colors">
          {portfolioData.name.split(" ")[0]}<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-sm font-body transition-colors relative group ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                  )}
                  {link.label}
                  <span className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href={`mailto:${portfolioData.email}`}
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 border border-ink text-ink hover:bg-ink hover:text-white transition-all duration-200 rounded-sm"
        >
          Hire Me
        </a>

        <button className="md:hidden text-ink" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-border px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm transition-colors py-1 ${
                activeSection === link.id ? "text-accent font-medium" : "text-muted hover:text-ink"
              }`}
            >
              {activeSection === link.id && "→ "}{link.label}
            </a>
          ))}
          <a href={`mailto:${portfolioData.email}`} className="block text-sm font-medium text-accent pt-2">
            Hire Me →
          </a>
        </div>
      )}
    </header>
  );
}
