```markdown
# Product Requirements Document (PRD): Clean Developer Portfolio

## 1. Product Overview
* **Product Name:** Personal Developer Portfolio & Tech Case Studies
* **Owner:** Muhammad Habib (Bos)
* **Platform:** Web (Static Site Generation - SSG)
* **Tech Stack:** Astro 4/5, Tailwind CSS, TypeScript, MDX
* **Deployment:** Cloudflare Pages / Vercel
* **Primary Goal:** Membangun portofolio web ultra-cepat (Lighthouse 100) yang memamerkan keahlian rekayasa perangkat lunak *end-to-end* (full-stack, mobile, infrastruktur) tanpa menggunakan desain generik atau kesan *AI slop*.

## 2. Design System & Aesthetics (Anti-AI Slop)
Tampilan web harus terasa seperti *engineering tool* atau dokumentasi teknis kelas atas. Bersih, fungsional, dan berpusat pada keterbacaan data.

* **Tema Utama:** Default Dark Mode (Deep Slate/Zinc) dengan fitur perpindahan ke Light Mode yang mulus tanpa *FOUC (Flash of Unstyled Content)*.
* **Anti-Pattern (Dilarang):** Gradien teks ungu/pink neon, kartu dengan efek *glowing/blur* berlebihan, animasi partikel *canvas*, atau ilustrasi 3D generik.
* **Tipografi:**
  * *Sans-serif (Body/Heading):* Inter, Geist, atau system-ui.
  * *Monospace (Code/Tech Data):* JetBrains Mono atau Fira Code untuk menampilkan *stack*, metrik angka, atau nama berkas.
* **Palet Warna (Dark Mode):**
  * Background: `#090a0f` (Solid dark, bukan abu-abu pudar)
  * Surface/Cards: `#13151b`
  * Text Primary: `#f1f3f7`
  * Text Secondary: `#94a3b8`
  * Accent/Borders: `#232734` dengan sentuhan Cyan (`#38bdf8`) untuk elemen teknis/link.

## 3. Sitemap & Information Architecture

### 3.1 Homepage (`/`)
* **Header/Nav:** Nama domain `habib.dev` atau gaya terminal `~/muhammad-habib`. Navigasi ringkas (About, Projects, Experience, Resume) dan *toggle* tema gelap/terang.
* **Hero Section:**
  * Badge ketersediaan: `● Open for Internships & Software Engineering Roles`
  * Headline: "Mahasiswa Sistem Informasi Semester 5 & Software Engineer."
  * Narasi Profil: Menyoroti pengalaman praktis di *full-stack web* (Next.js, Express, Laravel), aplikasi *mobile* (Flutter), dan Docker/Linux, didukung fondasi logis dari pengalaman mengajar struktur data.
  * CTA: Unduh CV PDF, Lihat Repositori.
* **Tech Stack Matrix:** Dikelompokkan rapi (hindari pemakaian *progress bar* persentase).
  * *Web & API:* Next.js, Express, Laravel, REST APIs.
  * *Mobile & Spatial:* Flutter, QGIS, spatial routing.
  * *Infrastructure & DevOps:* Linux, Docker, Nginx, VPS Deployment.
* **Experience & Leadership Timeline:**
  * Asisten Laboratorium Pemrograman.
  * UKM Neo Telemetri (Kesekretariatan & Sub Divisi Mobile Programming).
* **Featured Projects:** Menampilkan 3 proyek dengan impak terbesar (contoh: Siaga Padang, PajakWajar, SentryMed) dengan label *stack* yang digunakan.

### 3.2 Projects Grid (`/projects`)
* Daftar lengkap portofolio teknis (termasuk proyek seperti Sistem Lembur Pegawai atau CampuShift).
* Filter kategori: Web Systems, Mobile Apps, DevOps/Infrastructure, GIS.
* Tampilan kartu bersih: Judul, deskripsi 2 baris, *tech stack tags*, dan tautan *repository*.

### 3.3 Project Case Studies (`/projects/[slug]`)
Halaman detail berbasis file `.mdx` yang di-render menjadi HTML statis.
* **Meta Header:** Peran proyek, durasi, tautan GitHub/Demo.
* **Problem Statement:** Konteks mengapa aplikasi dibuat (misal: kebutuhan navigasi evakuasi *offline* atau efisiensi integrasi OCR).
* **System Architecture:** Diagram alur *client-server* atau integrasi komponen backend dan mobile.
* **Implementation & Challenges:** Solusi teknis dan cara *deployment* di server.

## 4. Technical Specifications & Content Schema

Gunakan Astro Content Collections untuk memastikan penulisan artikel proyek *type-safe* menggunakan Zod.

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(80),
    summary: z.string().max(200),
    role: z.string(),
    category: z.enum(['Full-Stack', 'Mobile', 'DevOps & Systems', 'Data & GIS']),
    techStack: z.array(z.string()),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  projects: projectsCollection,
};

```

## 5. Non-Functional Requirements

* **Performance (Core Web Vitals):**
* First Contentful Paint (FCP) < 0.8s.
* Cumulative Layout Shift (CLS) = 0.
* Total Blocking Time (TBT) = 0ms (Memaksimalkan fitur *Zero-JS* Astro).


* **SEO & Accessibility:**
* Skor kontras teks standar WCAG AA (minimal 4.5:1).
* Generate sitemap `sitemap-index.xml` dan meta tag OpenGraph otomatis untuk memunculkan *preview* yang profesional saat tautan disebar ke LinkedIn/Twitter.


* **Zero JS by Default:** Skrip klien hanya dibolehkan untuk fungsi *toggle* tema yang sangat ringan.

## 6. Implementation Steps

1. **Setup & Base Configuration:** Inisialisasi Astro, instal Tailwind CSS, konfigurasi `tsconfig.json` ke mode *strict* agar struktur data terkontrol sejak awal.
2. **Theming & Layouting:** Buat variabel CSS untuk *Dark/Light mode*, pasang skrip *inline* di `<head>` untuk *theme toggle*, dan buat `BaseLayout.astro` sebagai kerangka utama.
3. **Content Architecture:** Rancang skema Zod di `src/content/config.ts`, buat direktori untuk *file* MDX (contoh: `siaga-padang.mdx`), dan desain halaman tangkapan dinamis `[slug].astro`.
4. **Homepage Assembly:** Bangun UI untuk *Hero*, *Tech Matrix*, dan *Timeline* untuk memasukkan jejak akademik dan organisasi (Lab & UKM Neo Telemetri).
5. **Optimization & Deployment:** Lakukan tes Lighthouse secara lokal, lengkapi metadata SEO, dan dorong repositori ke GitHub agar *pipeline build* otomatis berjalan di Cloudflare Pages atau Vercel.

```

```