# Website Company Profile — PT Artha Land Group

Landing page satu halaman, hasil konversi 1:1 dari desain `index.html` (source of truth) ke Next.js.
Deploy target: **Cloudflare Pages** (static export).

## Teknologi

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Font Inter via `next/font` (400–800)
- Ikon SVG inline (konversi dari sprite `<symbol>` di `index.html`) — tanpa library ikon
- Animasi scroll fade-up via `IntersectionObserver` — tanpa library animasi
- Static export (`output: "export"`) → hasil build di folder `out/`, tanpa server
- Tanpa backend, tanpa database

## Menjalankan di lokal

```bash
npm install
npm run dev        # buka http://localhost:3000
```

Build produksi (menghasilkan folder `out/`):

```bash
npm run build
npm run preview    # cek hasil build seperti di hosting
```

Lint & type-check:

```bash
npm run lint
npx tsc --noEmit
```

## Optimasi gambar (penting)

Karena memakai static export, Next.js **tidak** mengoptimasi gambar otomatis.
Semua foto dikirim apa adanya dari `public/images/`. Setelah mengganti foto, jalankan:

```bash
npm run images
```

Script ini mengompres JPEG ke kualitas wajar dan mengecilkan lebar maksimum ke 1600px.
`og.jpg` dipaksa menjadi JPEG asli 1200×675 (sebelumnya file PNG 1,1 MB dengan
ekstensi `.jpg`, yang bisa membuat preview link WhatsApp/LinkedIn gagal tampil).


## Mengganti konten (semua di satu tempat)

### Logo & foto

Ganti file di `public/images/` — **nama file tetap, kode tidak perlu diubah**:

| File | Isi |
|---|---|
| `logo.png` | Logo perusahaan (muncul di header & favicon) |
| `hero.jpg` | Foto gedung kantor (hero + kartu CTA) |
| `pengadaan.jpg` | Gudang / logistik |
| `percetakan.jpg` | Mesin cetak digital |
| `alkes.jpg` | Peralatan medis |
| `alatberat.jpg` | Ekskavator / alat berat |
| `playstation.jpg` | Konsol PlayStation |
| `konstruksi.jpg` | Proyek konstruksi |
| `kuliner.jpg` | Burger & minuman |

Selama file belum ada, bagian terkait otomatis menampilkan gradient navy (fallback, tidak error).
Alt text tiap foto juga bisa diubah di `src/data/site.ts` (objek `photos`).

### Nomor WhatsApp

Ada dua cara, pilih satu:

1. Edit `waNumber` / `phoneDisplay` di `src/data/site.ts`, **atau**
2. Set env `NEXT_PUBLIC_WA_NUMBER=6285220590574` (format internasional, tanpa `+`).

Semua tombol WhatsApp (header, CTA banner, tombol melayang) memakai satu sumber ini,
dengan pesan awal: *"Halo Artha Land Group, saya ingin konsultasi"* (variabel `waMessage` di `site.ts`).

### Link sosmed

Edit array `footer.social.links` di `src/data/site.ts`. Isi `href` dengan URL asli;
kosongkan (`""`) untuk menyembunyikan ikonnya. Saat ini dikosongkan karena akun
resmi belum diberikan klien — ikon tidak ditampilkan sama sekali, bukan link mati.

### Teks lain (unit usaha, produk, statistik, dll)

Semua ada di `src/data/site.ts` — komponen tidak menyimpan konten sendiri.

Kartu unit usaha dan kartu produk **bisa diklik** dan langsung membuka WhatsApp
dengan pesan yang sesuai unitnya (fungsi `waLink()` di `site.ts`). Ini pengganti
halaman detail per unit tanpa menambah halaman baru.

## SEO

Website ini dirancang supaya muncul di Google:

- Judul halaman menyertakan lokasi: *"PT Artha Land Group — Pengadaan, Konstruksi
  & Percetakan di Serang, Banten"* (`seo.titleTemplate` di `site.ts`).
- `keywords` diisi kata kunci lokal (pengadaan Serang, percetakan Serang, dst).
- **JSON-LD** `Organization` + `WebSite` + `WebPage` (`src/components/JsonLd.tsx`)
  memberi Google informasi entitas bisnis: nama, logo, alamat kota, telepon, email,
  dan bidang usaha.
- `robots.txt` + `sitemap.xml` dibuat otomatis saat build.
- Semua gambar punya `alt` yang deskriptif.

Default sekarang **boleh diindeks**. Untuk mematikan sementara (mis. saat masih
setengah jadi), set `NEXT_PUBLIC_ALLOW_INDEX=false` lalu build ulang.

**Penting saat domain final dibeli:** set `NEXT_PUBLIC_SITE_DOMAIN` ke domain asli
(tanpa `https://`) lalu build ulang. Nilai ini dipakai untuk canonical, Open Graph,
sitemap, robots, dan JSON-LD — kalau salah, Google bisa menganggap ini duplikat
domain lain.

## Deploy ke Cloudflare Pages

Project ini memakai **static export**, jadi tidak butuh Node server.

### Cara 1 — Upload langsung (paling cepat)

```bash
npm run build
```

1. Buka [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Beri nama project (mis. `arthaland`).
3. Upload **isi** folder `out/` (bukan foldernya).
4. Setelah dapat URL `*.pages.dev`, cek dulu tampilannya.
5. Setelah domain aktif, **Custom domains** → tambahkan domain.

### Cara 2 — Lewat Git (otomatis setiap push)

1. Push project ke GitHub/GitLab.
2. **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Setting build:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
4. Environment variables (opsional):
   - `NEXT_PUBLIC_SITE_DOMAIN` = domain asli
   - `NEXT_PUBLIC_WA_NUMBER` = nomor WhatsApp
   - `NEXT_PUBLIC_ALLOW_INDEX` = `true`

### Yang sudah disiapkan untuk Cloudflare

- `public/_headers` → header keamanan (`X-Frame-Options`, `HSTS`, `nosniff`,
  `Referrer-Policy`) + cache 1 tahun untuk gambar dan aset `_next/static`.
  Cloudflare membaca file ini otomatis dari root hasil build.
- `trailingSlash: true` → URL konsisten (`/` bukan `/index.html`).

### Setelah domain aktif — checklist

- [ ] `NEXT_PUBLIC_SITE_DOMAIN` sudah domain asli, lalu build ulang.
- [ ] Buka `https://domainanda.com/robots.txt` → pastikan `Allow: /` dan ada `Sitemap:`.
- [ ] Buka `https://domainanda.com/sitemap.xml` → pastikan URL-nya domain asli.
- [ ] Daftarkan ke [Google Search Console](https://search.google.com/search-console)
      → tambahkan domain → submit sitemap.
- [ ] Tes preview link: kirim URL ke WhatsApp, pastikan gambar OG muncul.
- [ ] Cek kecepatan di [PageSpeed Insights](https://pagespeed.web.dev).


## Struktur project

```
src/
  app/
    layout.tsx        // font Inter, metadata SEO, skip-link, JSON-LD
    page.tsx          // menyusun semua section
    not-found.tsx     // halaman 404 (tanpa ini tampil default Next.js)
    globals.css       // design token + CSS section + focus-visible + 404
    sitemap.ts robots.ts
  components/         // Header, Hero, TrustBar, Units, Products, Stats,
                      // CtaBanner, Footer, FloatingWhatsApp, Reveal, Logo,
                      // JsonLd, icons/
  data/site.ts        // SEMUA konten & kontak (satu tempat)
  lib/scroll.ts       // smooth scroll dengan offset header 72px
public/images/        // logo & foto (ganti file di sini)
public/_headers       // header keamanan + cache untuk Cloudflare Pages
scripts/optimize-images.mjs  // kompresi gambar untuk static export
```

Desain referensi: `index.html` (root) — dipakai sebagai pembanding visual, tidak ikut ter-build.
