export const portfolioData = {
  name: "Adinda Aulia",
  role: "Website & Data Enthusiast",
  tagline: "Building web apps & turning data into insights.",
  about: `Halo! Saya Adinda, fresh graduate Teknik Informatika dari Universitas Muhammadiyah Surakarta.

Saya memiliki ketertarikan di dua bidang sekaligus, yaitu web development dan data science. Di sisi web, saya terbiasa membangun aplikasi full-stack menggunakan Laravel, React, dan Tailwind CSS. Di sisi data, fokus saya ada pada pengolahan dan analisis data, mulai dari klasifikasi, analisis sentimen, hingga clustering dengan tujuan menghasilkan insight yang bermakna.

Saya selalu antusias belajar hal-hal baru dan terbuka untuk berbagai peluang, baik di bidang web maupun data.`,
  email: "adindaahapsari@gmail.com",
  socials: {
    github: "https://github.com/adindahpsr",
    linkedin: "https://linkedin.com/in/adinda-aulia-hapsari",
    instagram: "https://instagram.com/adinda.hps",
  },
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Laravel", "PHP", "MySQL", "REST API"],
    },
    {
      category: "Machine Learning",
      items: ["Python", "Scikit-learn", "Pandas", "LSTM"],
    },
    {
      category: "Tools & Deploy",
      items: ["Git", "Vercel", "Railway", "Streamlit"],
    },
  ],
  education: [
    {
      institution: "Universitas Muhammadiyah Surakarta",
      degree: "S1 Teknik Informatika",
      gpa: "3.76",
      gpaMax: "4.00",
      year: "2022 – 2026",
    },
  ],
  projects: [
    {
      id: 1,
      image: "/images/projects/thesis.png",
      title: "[Thesis Project] Implementasi Automated Text Classification Pada Repositori Digital",
      slug: "thesis-analisis-data",
      description:
        "Sept 2025 - Jan 2026",
      longDescription: `Proyek thesis ini merupakan penelitian di bidang machine learning dan data science yang mencakup beberapa metode analisis data tingkat lanjut.

Penelitian ini berfokus pada penerapan algoritma klasifikasi untuk mengkategorikan data, metode clustering untuk menemukan pola tersembunyi, serta analisis sentimen untuk memahami opini dari data teks.

Hasil penelitian berhasil menunjukkan akurasi yang baik dan di-deploy menggunakan Streamlit agar dapat diakses secara online.`,
      tags: ["Python", "Machine Learning", "Streamlit", "Git"],
      link: "#",
      github: "#",
      featured: true,
      keyFeatures: [
        "Klasifikasi data dengan algoritma machine learning",
        "Clustering untuk menemukan pola data",
        "Analisis sentimen dari data teks",
        "Dashboard interaktif dengan Streamlit",
        "Deploy online via Git",
      ],
    },
    {
      id: 2,
      image: "/images/projects/laravel.png",
      title: "Multi-Label Text Classification for Academic Documents Based on Study Program Concentration",
      slug: "web-app-laravel",
      description:
        "Jan 2026",
      longDescription: `Aplikasi web full-stack yang dibangun dengan framework Laravel. Proyek ini mendemonstrasikan kemampuan dalam membangun sistem web yang lengkap dari backend hingga frontend.

Menggunakan Laravel sebagai backbone dengan fitur autentikasi, CRUD lengkap, dan koneksi ke database MySQL via Laragon untuk development lokal.`,
      tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
      link: "#",
      github: "#",
      featured: true,
      keyFeatures: [
        "Autentikasi user (login, register, role)",
        "CRUD data lengkap",
        "Database MySQL dengan Laragon",
        "UI responsif dengan Tailwind CSS",
        "Deploy via Railway",
      ],
    },
    {
      id: 3,
      image: "/images/projects/react.png",
      title: "Personal Blog & Storytelling Platform",
      slug: "personal-blog",
      description:
        "May - Jun 2026",
      longDescription: `Project frontend yang dibangun menggunakan React dan JavaScript modern. Menampilkan kemampuan dalam membangun UI yang interaktif, responsif, dan performant.

Styling menggunakan Tailwind CSS untuk hasil yang clean dan konsisten, di-deploy ke Vercel untuk akses publik.`,
      tags: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
      link: "#",
      github: "#",
      featured: false,
      keyFeatures: [
        "Komponen React yang reusable",
        "State management",
        "Responsive design",
        "Deploy ke Vercel",
      ],
    },
    {
      id: 4,
      title: "Tautin - URL Shortening Website with Encryption & QR Code Generator",
      slug: "tautin",
      description: "Mar - Jun 2025",
      longDescription: "",
      tags: ["Next.js", "Framer Motion", "TypeScript"],
      link: "#",
      github: "#",
      featured: false,
      future: false,
      keyFeatures: ["hhh"],
    },
    {
      id: 5,
      title: "Portfolio v2",
      slug: "portfolio-v2",
      description: "Redesign portfolio dengan animasi lebih halus dan dark mode support.",
      longDescription: "",
      tags: ["Next.js", "Framer Motion", "TypeScript"],
      link: "#",
      github: "#",
      featured: false,
      future: false,
      keyFeatures: ["hhh"],
    },
  ],
};
