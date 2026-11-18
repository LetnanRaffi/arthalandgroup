# Website Company Profile — PT Artha Land Group

Landing page satu halaman, hasil konversi 1:1 dari desain `index.html` (source of truth) ke Next.js.
Deploy target: **Vercel**.

## Teknologi

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Font Inter via `next/font` (400–800)
- Ikon SVG inline (konversi dari sprite `<symbol>` di `index.html`) — tanpa library ikon
- Animasi scroll fade-up via `IntersectionObserver` — tanpa library animasi
- Tanpa backend, tanpa database

## Menjalankan di lokal

```bash
npm install
npm run dev        # buka http://localhost:3000
```

Build produksi:

```bash
npm run build
npm run start
```

Lint & type-check:

```bash
npm run lint
npx tsc --noEmit
```

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
kosongkan (`""`) untuk menyembunyikan ikonnya. Saat ini masih placeholder `#`.

### Teks lain (unit usaha, produk, statistik, dll)

Semua ada di `src/data/site.ts` — komponen tidak menyimpan konten sendiri.

## SEO / noindex

Saat masa preview, website otomatis `noindex, nofollow` (default).

**Saat go-live**, dua langkah:

1. Set env `NEXT_PUBLIC_ALLOW_INDEX=true` (lihat `.env.example`).
2. Pastikan domain produksi sudah benar di `domain` (`src/data/site.ts`) — dipakai untuk
   canonical, Open Graph, `sitemap.xml`, dan `robots.txt`.

## Deploy ke Vercel

1. Push project ini ke GitHub/GitLab.
2. Di [vercel.com](https://vercel.com) → **Add New Project** → pilih repo.
3. Framework terdeteksi otomatis **Next.js** — tidak perlu ubah setting build.
4. Tambahkan Environment Variable (Settings → Environment Variables):
   - `NEXT_PUBLIC_ALLOW_INDEX` = `false` saat preview, `true` saat go-live.
   - `NEXT_PUBLIC_WA_NUMBER` = `6285220590574` (opsional; sudah ada default di `site.ts`).
5. Deploy → setelah domain aktif, set `NEXT_PUBLIC_ALLOW_INDEX=true` dan redeploy.

## Struktur project

```
src/
  app/
    layout.tsx        // font Inter, metadata, noindex toggle
    page.tsx          // menyusun semua section
    globals.css       // design token + CSS section (dari index.html)
    sitemap.ts robots.ts
  components/         // Header, Hero, TrustBar, Units, Products, Stats,
                      // CtaBanner, Footer, FloatingWhatsApp, Reveal, Logo, icons/
  data/site.ts        // SEMUA konten & kontak (satu tempat)
  lib/scroll.ts       // smooth scroll dengan offset header 72px
public/images/        // logo & foto (ganti file di sini)
```

Desain referensi: `index.html` (root) — dipakai sebagai pembanding visual, tidak ikut ter-build.
