# PT EzyTekno Solusi Nusantara — Landing Page

Landing page company profile menggunakan **Nuxt 4 + Vue 3 + Tailwind CSS v4**.

## Fitur
- Responsive untuk desktop, tablet, dan mobile
- Hero section dan CTA konsultasi WhatsApp
- Profil perusahaan
- Enam layanan utama
- Showcase produk EzySaham, EzyKasir, dan EzyProperty
- Keunggulan perusahaan
- Alur kerja
- Kontak dan footer
- SEO metadata dasar
- Tidak membutuhkan UI component library tambahan

## Persyaratan
- Node.js versi LTS terbaru yang didukung Nuxt 4
- npm

## Menjalankan di lokal

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Nuxt (biasanya http://localhost:3000).

## Build production

```bash
npm run build
npm run preview
```

## Konfigurasi yang wajib diganti sebelum production

Cari dan ubah data berikut di `app/pages/index.vue`:

1. Nomor WhatsApp pada `whatsappUrl` — ganti `6281234567890` dengan nomor resmi perusahaan, format internasional tanpa `+`.
2. Email `hello@ezytekno.com` — ganti dengan email resmi.
3. Alamat Surabaya — sesuaikan dengan alamat kantor/perusahaan.
4. Tautan produk — saat URL resmi masing-masing produk sudah final, arahkan kartu produk ke URL tersebut.
5. Konten profil, klaim layanan, dan informasi legal — verifikasi agar sesuai kondisi aktual perusahaan.

## Deploy

### Vercel
1. Push repository ke GitHub/GitLab.
2. Import repository ke Vercel.
3. Framework preset: Nuxt.
4. Build command: `npm run build`.
5. Deploy.

### VPS
```bash
npm install
npm run build
node .output/server/index.mjs
```
Jalankan proses menggunakan PM2 atau process manager lain, lalu pasang reverse proxy Nginx dan SSL.

## Struktur proyek

```text
.
├── app/
│   ├── assets/css/main.css
│   ├── pages/index.vue
│   └── app.vue
├── nuxt.config.ts
├── package.json
└── README.md
```

## Catatan
- Tailwind CSS v4 dipasang melalui plugin Vite `@tailwindcss/vite`.
- Nomor WhatsApp, email, dan beberapa informasi kontak di halaman merupakan placeholder.
- Font DM Sans dan Manrope dimuat dari Google Fonts; siapkan fallback lokal jika ingin self-hosted.
