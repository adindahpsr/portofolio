export interface SkillItem {
  name: string;
  icon: string;
  fallbackText?: string;
}

export interface SkillCategory {
  category: string;
  description?: string;
  items: SkillItem[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  gpa: string;
  gpaMax: string;
  year: string;
  status?: string;
  highlights: string[];
}

export interface ProjectItem {
  id: number;
  image?: string;
  title: string;
  slug: string;
  period?: string;
  description: string;
  longDescription: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  future?: boolean;
  publication?: string;
  keyFeatures?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface OrganizationItem {
  role: string;
  org: string;
  period: string;
  image?: string;
  tag?: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  tagline: string;
  about: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
  };
  skills: SkillCategory[];
  education: EducationItem[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  organizations: OrganizationItem[];
}

export const portfolioData: PortfolioData = {
  name: "Adinda",
  role: "Data Science & Analytics Enthusiast • Web Developer",
  tagline: "Fresh graduate Teknik Informatika UMS dengan fokus pada Machine Learning / NLP, analisis data berbasis insight, dan web development.",
  about: `Fresh graduate S1 Teknik Informatika dari Universitas Muhammadiyah Surakarta.

Saya memiliki minat mendalam pada Data Science & Analytics serta Web Development. Berbekal pengalaman riset machine learning dan pengembangan aplikasi web full-stack, saya terbiasa memecahkan masalah melalui eksplorasi data serta rekayasa perangkat lunak yang terstruktur.

Adaptif, senang mengeksplorasi teknologi baru, dan siap berkontribusi secara profesional baik di bidang data maupun pengembangan web.`,
  email: "adindaahapsari@gmail.com",
  socials: {
    github: "https://github.com/adindahpsr",
    linkedin: "https://linkedin.com/in/adinda-aulia-hapsari",
    instagram: "https://instagram.com/adinda.hps",
  },
  skills: [
    {
      category: "Data & Machine Learning",
      // description: "Pemodelan prediktif, NLP, dan deep learning (fokus skripsi)",
      items: [
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        },
        {
          name: "Scikit-Learn",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
        },
        {
          name: "Pandas",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
        },
        {
          name: "NumPy",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
        },
        {
          name: "Streamlit",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
        },
        {
          name: "MySQL / SQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        },
      ],
    },
    {
      category: "Web Development",
      // description: "Pembangunan web interaktif & full-stack",
      items: [
        {
          name: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        },
        {
          name: "C#",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
        },
        {
          name: "ASP.NET",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
        },
        {
          name: "Laravel",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
      ],
    },
    {
      category: "Tools & Environment",
      // description: "Code editor, notebook AI, version control, dan data tools",
      items: [
        {
          name: "VS Code",
          icon: "/icons/vscode.svg",
        },
        {
          name: "Google Colab",
          icon: "/icons/googlecolab.svg",
        },
        {
          name: "Microsoft Excel",
          icon: "/icons/excel.svg",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        },
        {
          name: "Vercel",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
        },
        {
          name: "Railway",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/railway/railway-original.svg",
        },
      ],
    },
  ],
  education: [
    {
      institution: "Universitas Muhammadiyah Surakarta",
      degree: "S1 Teknik Informatika",
      gpa: "3.76",
      gpaMax: "4.00",
      year: "2022 – 2026",
      status: "Fresh Graduate",
      highlights: [
        "Fokus Riset Skripsi: NLP & Automated Multi-label Text Classification",
        "Penerima Predikat Kelulusan Sangat Memuaskan (IPK 3.76/4.00)",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      image: "/images/projects/thesis.png",
      title: "[Thesis Project] Implementasi Automated Text Classification Pada Repositori Digital",
      slug: "thesis-analisis-data",
      period: "Sept 2025 - Jan 2026",
      description:
        "Sistem klasifikasi teks multi-label otomatis untuk menentukan subjek skripsi pada 2.810 dokumen repositori digital UMS menggunakan model SVM, CNB, dan Bi-LSTM terintegrasi ke web Streamlit.",
      longDescription: `Mengembangkan sistem klasifikasi teks multi-label otomatis untuk menentukan subjek skripsi pada repositori digital Fakultas Komunikasi dan Informatika UMS, menggunakan dataset 2.810 dokumen skripsi yang mencakup 30 subjek dengan karakteristik multi-label, class imbalance ekstrem, dan teks dwibahasa (Indonesia & Inggris).
 
Membandingkan tiga algoritma, SVM dan Complement Naive Bayes (CNB) dengan TF-IDF, serta Bi-LSTM dengan GloVe embedding, disertai hyperparameter tuning, class weighting, dan threshold optimization.
 
Model terbaik (SVM/LinearSVC, threshold optimal -0.330) mencapai F1-Macro 0.2038 dan F1-Micro 0.4100 pada test set; skor F1-Macro yang relatif rendah merefleksikan tingkat label imbalance ekstrem antar 30 subjek serta tumpang tindih terminologi antar subjek. Model terbaik diintegrasikan ke dalam prototipe web real-time menggunakan Streamlit.`,
      tags: ["Python", "Machine Learning", "NLP", "Streamlit", "Scikit-Learn"],
      link: "https://lihat-subjekmu.streamlit.app/",
      github: "https://github.com/adindahpsr/klasifikasi-subjek",
      featured: true,
      publication: "https://eprints.ums.ac.id/143306/1/NASKAH%20PUBLIKASI.pdf",
      keyFeatures: [
        "Klasifikasi teks multi-label dengan SVM, CNB, dan Bi-LSTM",
        "Penanganan class imbalance ekstrem & teks dwibahasa",
        "Hyperparameter tuning, class weighting, threshold optimization",
        "Prototipe web real-time dengan Streamlit",
      ],
    },
    {
      id: 2,
      image: "/images/projects/dua.png",
      title: "Multi-Label Text Classification for Academic Documents Based on Study Program Concentration",
      slug: "analisis-data",
      period: "Jan 2026",
      description:
        "Sistem klasifikasi otomatis dokumen skripsi Informatika ke 3 konsentrasi riset (RPL, SIC, JARKOM) dengan F1-Macro 0.89 dan akurasi 85% berbasis web Streamlit.",
      longDescription: `Mengembangkan sistem klasifikasi teks otomatis untuk repositori digital skripsi Prodi Informatika UMS guna mendukung pemetaan riset pada tiga konsentrasi (RPL, SIC, JARKOM), menggunakan dataset multi-label dan imbalanced sebanyak 1.588 dokumen skripsi berbahasa campuran (Indonesia & Inggris).
 
Membandingkan algoritma machine learning tradisional (SVM, CNB) dengan deep learning (Bi-LSTM).
 
Model terbaik (SVM/LinearSVC, threshold optimal -0.040) mencapai F1-Macro 0.8924, F1-Micro 0.9130, Precision 0.9012, dan Accuracy 0.8459 pada test set. Model diintegrasikan ke dalam proof-of-concept web application menggunakan Streamlit untuk klasifikasi real-time.`,
      tags: ["Python", "Machine Learning", "NLP", "Streamlit"],
      link: "https://klasifikasi-skripsi.streamlit.app/",
      github: "https://github.com/adindahpsr/klasifikasi-skripsi",
      featured: false,
      keyFeatures: [
        "Klasifikasi multi-label untuk 3 konsentrasi prodi (RPL, SIC, JARKOM)",
        "Perbandingan SVM, CNB, dan Bi-LSTM",
        "F1-Macro 0.89 & Accuracy 0.85 pada test set",
        "Proof-of-concept web app dengan Streamlit",
      ],
    },
    {
      id: 3,
      image: "/images/projects/tiga.png",
      title: "Tautin - URL Shortening Website with Encryption & QR Code Generator",
      slug: "tautin",
      period: "Mar - Jun 2025",
      description:
        "Aplikasi web URL shortener aman dengan custom alias, QR code generator, one-time secret message, dan enkripsi AES dengan pengujian SUS skor 73,42.",
      longDescription: `Mengembangkan aplikasi web URL shortener yang aman sebagai Capstone Project menggunakan Laravel 11 dan MySQL, dengan fitur custom alias, QR code generator, one-time secret messages, pengaturan link expiration, dan enkripsi AES untuk keamanan data. 
      
Mengevaluasi sistem menggunakan Blackbox Testing dan System Usability Scale (SUS) dengan 30 responden, mencapai skor SUS rata-rata 73,42 (kategori good usability).`,
      tags: ["Laravel", "MySQL", "AES Encryption", "PHP"],
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
//     {
//       id: 4,
//       image: "/images/projects/empat.png",
//       title: "[COMING SOON] Personal Blog & Storytelling Platform",
//       slug: "personal-blog",
//       period: "Jun 2026 - Present",
//       description:
//         "Platform membaca & menulis artikel/cerita interaktif berbasis Next.js dan TypeScript pada frontend dengan Laravel REST API pada backend.",
//       longDescription: `Mengembangkan platform menulis dan membaca artikel/cerita serupa Medium dan Wattpad menggunakan Next.js dan TypeScript untuk frontend, dengan Laravel sebagai backend dan REST API.
 
// Mengimplementasikan fitur autentikasi pengguna, CRUD artikel/cerita, like, dan komentar..`,
//       tags: ["Next.js", "TypeScript", "Laravel", "REST API", "Tailwind CSS"],
//       link: "#",
//       github: "#",
//       featured: false,
//       keyFeatures: [
//         "Autentikasi pengguna",
//         "CRUD artikel/cerita",
//         "Fitur like & komentar",
//         "Next.js + TypeScript (frontend), Laravel REST API (backend)",
//       ],
//     },
  ],
  experience: [
    {
      role: "IT Programmer (Internship)",
      company: "PT Tri Usaha Sejahtera Pratama",
      period: "Sep 2026 – Present",
      description: ["Program internship melalui Maganghub Kemnaker."],
    },
    {
      role: "Staff IT & Media (Freelance)",
      company: "SD Muhammadiyah Terpadu Masaran",
      period: "Apr 2026 – Present",
      description: [
        "Mengelola operasional konten dan publikasi media sosial institusi secara terencana dan konsisten.",
        "Merancang materi visual promosi kegiatan dan branding sekolah menggunakan Canva.",
        "Melakukan dokumentasi seluruh agenda serta memproduksi konten video berkualitas untuk engagement publik.",
      ],
    },
    {
      role: "Back-End Developer (Internship)",
      company: "PT. Tri Bintang Emas Mulia",
      period: "Mar 2025 – Apr 2025",
      description: [
        "Melakukan migrasi sistem dan penyesuaian codebase backend dari PHP 5 ke PHP 7.4.",
        "Melakukan maintenance berkala, perbaikan bug, dan optimasi query database aplikasi existing.",
        "Berkolaborasi dengan tim developer untuk memastikan stabilitas serta keandalan fungsionalitas sistem.",
      ],
    },
  ],
  organizations: [
    {
      role: "Sekretaris Departemen Pengembangan Materi dan Evaluasi",
      org: "Koordinator Mentoring Fakultas Komunikasi dan Informatika UMS",
      period: "Sep 2023 – Sep 2024",
      image: "/images/organizations/mentoring.jpeg",
      tag: "Academic & Mentoring",
    },
    {
      role: "Anggota Bidang Organisasi",
      org: "Ikatan Mahasiswa Muhammadiyah (IMM) Komisariat Adam Malik FKI UMS",
      period: "Nov 2023 – Jul 2025",
      image: "/images/organizations/imm.JPG",
      tag: "Leadership & Kaderisasi",
    },
    {
      role: "Staff Divisi Keorganisasian",
      org: "Forum Open Source Teknik Informatika (FOSTI) UMS",
      period: "Okt 2022 – Des 2024",
      image: "/images/organizations/fosti.jpeg",
      tag: "Tech Community & Event",
    },
  ],
};
