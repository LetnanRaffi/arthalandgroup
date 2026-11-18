# PRD: Website Company Profile PT Artha Land Group

Versi 1.0 | Tipe: landing page 1 halaman | Stack: Next.js | Hosting: Vercel

---

## 1. Ringkasan

Website company profile satu halaman untuk **PT Artha Land Group**, perusahaan multi-unit usaha di Kota Serang, Banten (pengadaan barang & jasa, percetakan, alat kesehatan, alat berat, rental & penjualan PlayStation, konstruksi, kuliner & café).

Tujuan website: memberi kesan profesional dan terpercaya, memperkenalkan unit usaha, dan mengarahkan pengunjung menghubungi lewat **WhatsApp**.

## 2. Sumber Desain (Source of Truth)

File **`index.html`** di workspace adalah desain final yang sudah disetujui klien. Tugas utama: **reverse engineer** file ini menjadi project Next.js yang tampilannya identik.

Aturan:
- Tampilan, spacing, warna, tipografi, urutan section, dan teks harus **sama dengan `index.html`**.
- **Jangan menambah fitur, section, atau halaman** di luar dokumen ini.
- **Jangan mengubah teks** (bahasa Indonesia), kecuali data yang disebut di bagian 6.
- Jika ada yang ambigu, ikuti `index.html`, jangan berasumsi.

## 3. Ruang Lingkup

**Termasuk:** 1 halaman (Home), responsif, animasi ringan, tombol WhatsApp, SEO dasar, siap deploy ke Vercel.

**Tidak termasuk:** CMS, blog/berita, halaman multi-page, login, database, form dengan backend, multi-bahasa, e-commerce.

## 4. Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS (token desain dipindah ke theme/CSS variables)
- `next/font` untuk Inter (400, 500, 600, 700, 800)
- `next/image` untuk semua gambar
- Ikon: komponen SVG inline (konversi dari sprite `<symbol>` di `index.html`) atau `lucide-react` jika padanannya identik
- Tanpa library animasi: gunakan CSS + `IntersectionObserver`
- Tanpa backend, tanpa API route

## 5. Design Tokens (ekstrak dari `index.html`)

Ambil dari `:root` di `index.html` dan jadikan theme Tailwind / CSS variables:
- Warna: navy `#0a1a33`, navy-2 `#10264a`, navy-3 `#16356a`, gold `#c8963e`, text `#14213d`, muted `#5b6678`, soft `#f3f6fb`
- Radius 10px, container max-width 1200px dengan padding 20px
- Font: Inter
- Breakpoint mengikuti media query di `index.html`: 1100px, 860px, 560px

## 6. Data & Konten

Semua konten dipisah di **`src/data/site.ts`** (bukan hardcode di komponen) supaya mudah diedit.

Data perusahaan (resmi dari klien):
| Field | Nilai |
|---|---|
| Nama | PT Artha Land Group |
| Alamat | Kota Serang, Banten |
| Telepon / WhatsApp (tampil) | 0852-2059-0574 |
| Nomor WA (format link) | `6285220590574` |
| Email | Ptarthalandgroup@gmail.com |
| Domain | arthalandgroup.com |

Catatan penting:
- **Jangan memasang email pribadi direktur** di website.
- Nomor WA, email, dan alamat disimpan di `site.ts` dan/atau env `NEXT_PUBLIC_WA_NUMBER`, satu tempat saja.
- Link sosmed (Instagram, TikTok, YouTube, LinkedIn) masih placeholder `#`. Siapkan sebagai array di `site.ts`, sembunyikan ikon yang URL-nya kosong.
- Angka statistik (100+, 500+, 7+) dan teks lain pindahkan apa adanya dari `index.html`.

## 7. Struktur Halaman (urut dari atas)

Setiap section jadi satu komponen di `src/components/`:

1. **Header**: logo, nav (Beranda, Tentang Kami, Unit Usaha, Produk, Portofolio, Berita, Kontak), tombol "Hubungi Kami" (WA). Sticky, background menjadi solid setelah scroll 30px. Burger menu di bawah 860px.
2. **Hero**: eyebrow, H1, paragraf, 2 tombol (Lihat Produk, Tentang Kami), foto latar + overlay gradient gelap dari kiri.
3. **TrustBar**: 5 item (Terpercaya, Profesional, Produk Lengkap, Layanan Cepat, Kualitas Terjamin), menempel di bawah hero, tidak menimpa konten hero.
4. **Units**: "Unit Bisnis Kami", 7 kartu bergambar + ikon + judul.
5. **Products**: "Produk & Layanan Unggulan", 4 kartu (Percetakan, Alat Kesehatan, PlayStation, Kuliner).
6. **Stats**: "Mengapa Memilih Kami?", 4 statistik.
7. **CtaBanner**: "Butuh Solusi untuk Kebutuhan Usaha Anda?" + tombol "Konsultasi Sekarang" (WA).
8. **Footer**: logo, Informasi Perusahaan, Unit Usaha, Kontak Kami, Ikuti Kami, copyright, Kebijakan Privasi | Syarat & Ketentuan.
9. **FloatingWhatsApp**: tombol bulat hijau kanan bawah.

Anchor nav: Beranda→`#beranda`, Tentang Kami→`#tentang`, Unit Usaha→`#unit`, Produk→`#produk`, Portofolio→`#portofolio`, Berita→`#kontak` (sementara, belum ada halaman berita). Link footer yang belum punya halaman (Visi & Misi, Karir, dll) cukup `#`.

## 8. Perilaku & Interaksi

- Smooth scroll ke anchor; offset sesuai tinggi header (72px).
- Menu mobile menutup otomatis setelah link diklik.
- Hover kartu: naik 4px + shadow (sesuai `index.html`).
- Animasi muncul saat scroll (fade-up halus, hormati `prefers-reduced-motion`).
- Semua tombol WA membuka `https://wa.me/<nomor>?text=<pesan>` di tab baru, dengan pesan awal: "Halo Artha Land Group, saya ingin konsultasi".

## 9. Aset Gambar

- Simpan di `public/images/`: `hero.jpg`, `pengadaan.jpg`, `percetakan.jpg`, `alkes.jpg`, `alatberat.jpg`, `playstation.jpg`, `konstruksi.jpg`, `kuliner.jpg`, `logo.png` (dan `logo.svg` jika ada).
- **Logo dan foto asli belum tersedia** (menyusul dari klien). Buat `site.ts` mereferensikan file di atas, dan siapkan **fallback** (gradient navy / logo SVG placeholder dari `index.html`) bila file belum ada, supaya build tidak error.
- Jangan hotlink gambar dari situs luar di versi final.
- Semua gambar: `alt` deskriptif, `sizes` benar, hero memakai `priority`.

## 10. SEO & Metadata

- `lang="id"`, title: "Artha Land Group | Solusi Terintegrasi untuk Kebutuhan Bisnis Anda", meta description dari paragraf hero.
- Open Graph + Twitter card dasar (gambar OG memakai foto hero).
- `robots`: set **`noindex, nofollow`** selama masa preview, dikontrol env `NEXT_PUBLIC_ALLOW_INDEX` (default `false`). Aktifkan saat go-live.
- Sediakan `sitemap.xml` dan `robots.txt` (lewat file convention App Router).
- Favicon dari logo.

## 11. Non-Functional

- Responsif tanpa horizontal scroll di 360px, 768px, 1280px, dan 1440px.
- Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.
- Kontras teks memadai, elemen interaktif bisa diakses keyboard, `aria-label` pada tombol ikon, `aria-expanded` pada burger menu.
- Tanpa error/warning di console, `npm run build` dan `npm run lint` bersih.

## 12. Struktur Project yang Diharapkan

```
src/
  app/
    layout.tsx        // font, metadata
    page.tsx          // susun semua section
    globals.css
    sitemap.ts
    robots.ts
  components/
    Header.tsx  Hero.tsx  TrustBar.tsx  Units.tsx  Products.tsx
    Stats.tsx   CtaBanner.tsx  Footer.tsx  FloatingWhatsApp.tsx
    Reveal.tsx        // wrapper IntersectionObserver
    icons/            // komponen SVG
  data/site.ts        // semua konten & kontak
public/images/        // logo & foto
```

## 13. Tahapan Pengerjaan untuk Agent

1. Baca `index.html` penuh, daftar section, token desain, dan ikon.
2. Inisialisasi Next.js + TypeScript + Tailwind, pasang font Inter.
3. Buat `site.ts` dan pindahkan semua konten ke sana.
4. Buat komponen per section, cocokkan dengan `index.html` (spacing dan ukuran sama).
5. Tambah interaksi (header scroll, burger, reveal, smooth scroll, WA).
6. Tambah metadata, noindex toggle, sitemap, robots.
7. Uji responsif di 360/768/1280, perbaiki selisih visual dengan `index.html`.
8. Jalankan build dan lint, perbaiki semua error.
9. Tulis `README.md` singkat: cara jalan, cara ganti logo/foto/nomor WA/sosmed, cara deploy ke Vercel.

## 14. Kriteria Selesai (Acceptance)

- [ ] Tampilan sama dengan `index.html` di desktop dan mobile.
- [ ] Semua teks tidak berubah dari `index.html`, kecuali alamat, email, dan telepon sesuai bagian 6.
- [ ] Semua tombol WA membuka nomor `6285220590574` dengan pesan awal.
- [ ] Logo, foto, nomor WA, dan sosmed bisa diganti hanya lewat `site.ts` / `public/images/`.
- [ ] Tidak ada gambar hotlink eksternal.
- [ ] `noindex` aktif secara default.
- [ ] Build dan lint lolos, tidak ada error console.
- [ ] README tersedia.

## 15. Hal yang Dilarang

- Menambah section, halaman, library besar, atau fitur baru.
- Mengubah copywriting, warna, atau layout tanpa instruksi.
- Memasang data pribadi (email pribadi direktur).
- Menebak URL foto dari internet.
