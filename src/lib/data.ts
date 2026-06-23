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
      longDescription: `Mengembangkan sistem klasifikasi teks multi-label otomatis untuk menentukan subjek skripsi pada repositori digital Fakultas Komunikasi dan Informatika UMS, menggunakan dataset 2.810 dokumen skripsi yang mencakup 30 subjek dengan karakteristik multi-label, class imbalance ekstrem, dan teks dwibahasa (Indonesia & Inggris).
 
Membandingkan tiga algoritma, SVM dan Complement Naive Bayes (CNB) dengan TF-IDF, serta Bi-LSTM dengan GloVe embedding, disertai hyperparameter tuning, class weighting, dan threshold optimization.
 
Model terbaik (SVM/LinearSVC, threshold optimal -0.330) mencapai F1-Macro 0.2038 dan F1-Micro 0.4100 pada test set; skor F1-Macro yang relatif rendah merefleksikan tingkat label imbalance ekstrem antar 30 subjek serta tumpang tindih terminologi antar subjek. Model terbaik diintegrasikan ke dalam prototipe web real-time menggunakan Streamlit.`,
      tags: ["Python", "Machine Learning", "NLP", "Streamlit"],
      link: "#",
      github: "https://github.com/adindahpsr/klasifikasi-subjek",
      featured: true,
      keyFeatures: [
        "Klasifikasi teks multi-label dengan SVM, CNB, dan Bi-LSTM",
        "Penanganan class imbalance ekstrem & teks dwibahasa",
        "Hyperparameter tuning, class weighting, threshold optimization",
        "Prototipe web real-time dengan Streamlit",
      ],
    },
    {
      id: 2,
      image: "/images/projects/laravel.png",
      title: "Multi-Label Text Classification for Academic Documents Based on Study Program Concentration",
      slug: "analisis-data",
      description:
        "Jan 2026",
      longDescription: `Mengembangkan sistem klasifikasi teks otomatis untuk repositori digital skripsi Prodi Informatika UMS guna mendukung pemetaan riset pada tiga konsentrasi (RPL, SIC, JARKOM), menggunakan dataset multi-label dan imbalanced sebanyak 1.588 dokumen skripsi berbahasa campuran (Indonesia & Inggris).
 
Membandingkan algoritma machine learning tradisional (SVM, CNB) dengan deep learning (Bi-LSTM).
 
Model terbaik (SVM/LinearSVC, threshold optimal -0.040) mencapai F1-Macro 0.8924, F1-Micro 0.9130, Precision 0.9012, dan Accuracy 0.8459 pada test set. Model diintegrasikan ke dalam proof-of-concept web application menggunakan Streamlit untuk klasifikasi real-time.`,
      tags: ["Python", "Machine Learning", "NLP", "Streamlit"],
      link: "https://klasifikasi-skripsi.streamlit.app/",
      github: "https://github.com/adindahpsr/klasifikasi-skripsi",
      featured: true,
      keyFeatures: [
        "Klasifikasi multi-label untuk 3 konsentrasi prodi (RPL, SIC, JARKOM)",
        "Perbandingan SVM, CNB, dan Bi-LSTM",
        "F1-Macro 0.89 & Accuracy 0.85 pada test set",
        "Proof-of-concept web app dengan Streamlit"
      ],
    },
    {
      id: 3,
      image: "/images/projects/react.png",
      title: "Personal Blog & Storytelling Platform",
      slug: "personal-blog",
      description:
        "Jun 2026 - Present",
      longDescription: `Mengembangkan platform menulis dan membaca artikel/cerita serupa Medium dan Wattpad menggunakan Next.js dan TypeScript untuk frontend, dengan Laravel sebagai backend dan REST API.
 
Mengimplementasikan fitur autentikasi pengguna, CRUD artikel/cerita, like, dan komentar..`,
      tags: ["Next.js", "TypeScript", "Laravel", "REST API"],
      link: "#",
      github: "#",
      featured: false,
      keyFeatures: [
        "Autentikasi pengguna",
        "CRUD artikel/cerita",
        "Fitur like & komentar",
        "Next.js + TypeScript (frontend), Laravel REST API (backend)",
      ],
    },
    {
      id: 4,
      title: "Tautin - URL Shortening Website with Encryption & QR Code Generator",
      slug: "tautin",
      description: "Mar - Jun 2025",
      longDescription: `Mengembangkan aplikasi web URL shortener yang aman sebagai Capstone Project menggunakan Laravel 11 dan MySQL, dengan fitur custom alias, QR code generator, one-time secret messages, pengaturan link expiration, dan enkripsi AES untuk keamanan data. 
      
      Mengevaluasi sistem menggunakan Blackbox Testing dan System Usability Scale (SUS) dengan 30 responden, mencapai skor SUS rata-rata 73,42 (kategori good usability).`,
      tags: ["Laravel", "MySQL", "AES Encryption"],
      link: "#",
      github: "https://github.com/adindahpsr/tautin-laravel",
      featured: false,
      future: false,
      keyFeatures: [
        "Custom alias & QR code generator",
        "One-time secret messages & link expiration",
        "Enkripsi AES untuk keamanan data",
        "SUS score rata-rata 73,42 (good usability)",
      ],
    },
    {
      id: 5,
      title: "Analisis Sentimen ",
      slug: "portfolio-v2",
      description: "Redesign portfolio dengan animasi lebih halus dan dark mode support.",
      longDescription: "",
      tags: ["Next.js", "Framer Motion", "TypeScript"],
      link: "#",
      github: "#",
      featured: false,
      future: true,
      keyFeatures: ["hhh"],
    },
  ],
};
