# 🚀 Portfolio — Next.js

Portfolio website minimalis & clean dibangun dengan Next.js, Tailwind CSS, dan animasi halus.

## ✨ Fitur

- **Hero** — Nama, role, tagline, social links, & scroll indicator
- **About** — Bio singkat + stats card
- **Skills** — Grid per kategori + marquee animation
- **Projects** — Grid dengan filter "Semua / Featured"
- **Contact** — Form kirim pesan + social links
- **Navbar** — Sticky dengan efek blur on scroll
- **Animasi** — Fade-up on scroll di setiap section
- **Responsive** — Mobile friendly

## 🛠 Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (icons)

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev

# Buka di browser
http://localhost:3000
```

## ✏️ Cara Kustomisasi

Semua data portfolio ada di satu file:

```
src/lib/data.ts
```

Edit bagian ini:
- `name` — Nama kamu
- `role` — Pekerjaan / title
- `tagline` — Kalimat singkat di hero
- `about` — Bio panjang
- `email` — Email kontak
- `socials` — Link GitHub, LinkedIn, Twitter
- `skills` — Skills per kategori
- `projects` — List project

## 📁 Struktur Project

```
src/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Halaman utama
│   └── globals.css       # Global styles + font
├── components/
│   ├── ui/
│   │   ├── Navbar.tsx    # Navigasi
│   │   └── Footer.tsx    # Footer
│   └── sections/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── SkillsSection.tsx
│       ├── ProjectsSection.tsx
│       └── ContactSection.tsx
└── lib/
    └── data.ts           # 📝 EDIT INI untuk kustomisasi
```

## 🌐 Deploy ke Vercel

```bash
npm install -g vercel
vercel
```

Atau push ke GitHub dan connect ke [vercel.com](https://vercel.com) secara otomatis.
