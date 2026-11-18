# Rencana Kerja & Komunikasi Klien — PT Artha Land Group

Catatan hasil diskusi. Bukan dokumen untuk klien — ini untuk Anda.

Tanggal: 18 November 2026

---

## 1. Temuan utama: website ini bukan "kurang", tapi memang basic sesuai scope

Setelah membaca `prd.md` lengkap, ada koreksi penting terhadap asumsi awal.

`prd.md` menyatakan:

- **§2** — `index.html` adalah desain final **yang sudah disetujui klien**. Tugas: reverse-engineer 1:1 ke Next.js.
- **§3** — Tidak termasuk: CMS, blog/berita, halaman multi-page, form dengan backend, multi-bahasa, e-commerce.
- **§15** — Dilarang: menambah section, halaman, library besar, atau fitur baru.

**Kesimpulan:** website terasa "basic" karena spec-nya memang basic. Itu bukan bug.

Daftar "kekurangan" (Tentang Kami, portofolio, 7 halaman unit, form kontak, testimoni) **bukan cacat implementasi** — itu **scope baru** di luar PRD. Menambahkannya butuh persetujuan klien dan kemungkinan biaya tambahan.

Hal ini penting supaya:

1. Anda tidak mengerjakan pekerjaan yang tidak dibayar.
2. Klien tidak kecewa karena membayangkan "website perusahaan" tapi menerima 1 halaman.

---

## 2. Website ini sebenarnya apa?

Sesuai PRD, ini adalah **kartu nama digital**:

- 1 halaman
- 7 kartu unit usaha
- 4 kartu produk
- Tombol WhatsApp

Tujuannya **bukan** menjual, bukan menjelaskan detail, bukan SEO agresif. Tujuannya: *"kami ada, ini yang kami kerjakan, silakan chat."*

Untuk perusahaan yang belum punya website sama sekali, ini wajar sebagai langkah pertama.

Yang belum jelas **bukan** "websitenya seperti apa" — itu sudah ada di PRD. Yang belum jelas adalah: **apakah klien tahu bahwa ini cuma kartu nama digital?**

Kalau klien membayangkan "company profile lengkap", itu masalah ekspektasi, bukan masalah kode. Dan itu harus diselesaikan **sebelum** meminta konten.

---

## 3. Urutan kerja yang benar

Urutan yang salah: *minta konten dulu → baru tahu ekspektasi klien tidak cocok.*

Urutan yang benar:

| # | Langkah | Butuh klien? | Hasil |
|---|---|---|---|
| 1 | Kirim WA minta jadwal call | ya, 1 menit | jadwal |
| 2 | Call 30 menit (6 pertanyaan) | ya, 30 menit | tujuan website + prioritas unit |
| 3 | Kirim 2 opsi A/B + konsekuensi | ya, pilih | scope terkunci |
| 4 | Kirim 1 halaman konfirmasi scope | balas "setuju" | perlindungan Anda |
| 5 | Kirim link folder Drive + minta voice note | ya, upload | aset |
| 6 | Eksekusi | tidak | hasil |

**Kunci:** langkah 1–4 mengunci ekspektasi. Langkah 5 baru minta materi.

---

## 4. Lapis 1 — Pesan WhatsApp pembuka

Jangan kirim checklist panjang ke klien UMKM. Tidak akan diisi.

Tujuan pesan pertama **hanya satu**: menjadwalkan call.

> Selamat pagi Pak/Bu [nama],
>
> Website Artha Land sudah jadi versi pertamanya dan bisa saya tunjukkan. Sebelum lanjut, saya mau pastikan dulu arahnya sudah sesuai keinginan Bapak/Ibu — karena ada beberapa hal yang bisa dibuat lebih lengkap kalau memang dibutuhkan.
>
> Boleh saya telepon/ketemu sekitar 30 menit minggu ini? Saya perlu tanya sedikit soal bisnisnya, bukan soal teknis.
>
> Kira-kira hari apa Bapak/Ibu longgar?

Perhatikan: tidak ada permintaan dokumen, tidak ada checklist. Klien hanya perlu jawab "hari Kamis".

**Kenapa harus call, bukan chat?**
Kalau ditanya lewat chat, klien akan jawab "yang penting bagus" — dan Anda tetap tidak dapat informasi apa pun.

---

## 5. Lapis 2 — Call 30 menit

Aturan: **jangan tanya soal website.** Tanya soal bisnis.

Kalau klien ditanya "mau website seperti apa", jawabannya selalu tidak berguna.
Kalau ditanya soal bisnis, jawabannya selalu jadi bahan website.

### Enam pertanyaan (tanyakan berurutan)

**1. "Sekarang klien Bapak/Ibu datangnya dari mana?"**
- Kalau jawaban: "kenalan dan WA" → website harus menangkap orang yang belum kenal.
- Kalau jawaban: "lelang/pengadaan pemerintah" → website hampir tidak dipakai cari klien, dan ini mengubah seluruh prioritas.

**2. "Dari 7 unit usaha, mana yang paling menguntungkan?"**
- Unit itu yang harus paling menonjol. Sekarang semua dibuat sama besar, dan itu kemungkinan salah.

**3. "Sebelum orang beli, biasanya mereka tanya apa dulu?"**
- Jawaban ini langsung jadi isi halaman.
- "Tanya sudah berapa lama / pernah kerja sama siapa" → portofolio & pengalaman adalah konten utama.
- "Tanya harga" → daftar layanan/harga.

**4. "Bapak/Ibu mau website ini melakukan apa — supaya orang WA, supaya orang percaya waktu dikirim link, atau supaya muncul di Google?"**
- Tiga jawaban = tiga website berbeda.

**5. "Ada kompetitor yang websitenya Bapak/Ibu suka?"**
- Minta 1–2 link. Cara tercepat tahu selera klien tanpa menjelaskan desain.

**6. "Setelah website ini jadi, siapa yang mengurus isinya?"**
- Menentukan perlu CMS atau tidak.

### Penutup call (wajib diucapkan)

> "Baik, jadi yang paling penting untuk Bapak/Ibu sekarang adalah [X]. Versi sekarang sudah mencakup itu. Kalau mau ditambah [Y], itu pekerjaan terpisah — nanti saya buatkan rinciannya."

Fungsinya: Anda **tidak** menawarkan tambahan di tengah call, hanya mencatat. Tambahan = pekerjaan terpisah.

---

## 6. Lapis 3 — Permintaan aset

Jangan minta file lewat WhatsApp — akan tercecer di 40 pesan.

Buat **satu folder Google Drive** dengan subfolder bernama jelas, kirim satu link:

> Ini folder untuk foto & logo. Cukup upload ke folder yang sesuai, tidak perlu rapi — nanti saya yang atur.
>
> - `01-logo` — logo (kalau ada file asli dari desainer, lebih bagus)
> - `02-foto-kantor` — tampak depan, ruangan, tim
> - `03-per-unit` — foto per unit usaha (pengadaan, percetakan, alkes, alat berat, PS, konstruksi, kuliner)
> - `04-proyek` — foto proyek/pekerjaan yang sudah selesai
> - `05-dokumen` — NIB/izin/sertifikat (kalau boleh ditampilkan)

### Trik untuk klien Indonesia

> Kalau lebih enak, Bapak/Ibu bisa kirim **voice note** saja sambil jelaskan — nanti saya yang tulis ulang jadi teks.

Klien UMKM jauh lebih mau kirim voice note 5 menit daripada mengisi form. Realistis.

---

## 7. Menjawab "saya nggak tahu websitenya seperti apa"

Anda tidak perlu tahu. Anda perlu **memilihkan**.

Setelah call, ajukan 2 opsi konkret — jangan pertanyaan terbuka:

> Dari yang saya tangkap, ada dua arah yang masuk akal:
>
> **Opsi A — Kartu nama digital (yang sekarang).**
> 1 halaman, cepat jadi, fokus bikin orang WA. Cocok kalau tujuan utamanya "biar ada yang bisa dikirim kalau orang tanya".
>
> **Opsi B — Company profile lengkap.**
> Tambah halaman Tentang Kami, portofolio proyek, dan halaman per unit usaha. Cocok kalau website dipakai untuk ikut tender, kirim ke instansi, atau bersaing dengan kompetitor besar.
>
> Bedanya kira-kira [X] hari kerja. Bapak/Ibu lebih butuh yang mana?

Memberi dua opsi dengan konsekuensi jelas jauh lebih berguna daripada bertanya "mau yang seperti apa". Klien akan memilih — itu sifat manusia.

---

## 8. Dokumen konfirmasi scope (melindungi Anda)

Kirim setelah call. **Satu halaman**, bukan dokumen tebal.

Isinya:

1. **Tujuan website** — 1 kalimat dari jawaban pertanyaan no. 4.
2. **Termasuk** — daftar section.
3. **Tidak termasuk** — daftar eksplisit (blog, form, multi-bahasa, CMS).
4. **Yang perlu dari klien** — daftar aset + tenggat.
5. **Apa yang terjadi kalau aset telat** — mis. "website tetap tayang dengan foto sementara; penggantian foto setelah tenggat dihitung revisi."
6. **Jumlah revisi** — mis. 2 putaran.

Poin 5 dan 6 yang paling sering menyelamatkan vendor. Tanpa itu, "ganti fotonya sedikit" berlangsung selamanya.

---

## 9. Daftar konten yang perlu disiapkan klien

Petakan langsung ke field di `src/data/site.ts` supaya jelas.

| Bagian | Yang dibutuhkan | Lokasi di kode |
|---|---|---|
| Identitas | Nama badan hukum persis, tahun berdiri, alamat lengkap + kode pos, jam operasional, telepon kantor, email domain | `COMPANY` |
| Statistik | Angka **beserta periodenya** (mis. "500+ proyek sejak 2015"), atau ganti jadi hal yang bisa dibuktikan | `stats.items` |
| Unit Usaha | Per unit (7): deskripsi 2–3 kalimat, layanan utama, keunggulan | `units[]` |
| Produk | Daftar produk nyata + spesifikasi singkat | `products[]` |
| Sosmed | URL asli IG/TikTok/YouTube/LinkedIn, atau kosongkan (kode sudah menyembunyikan ikon kosong) | `footer.social.links` |
| Legal | Kebijakan Privasi & S&K (sekarang masih `href: "#"`) | `footer.legal` |
| Berita | Kalau ada: 3–5 artikel. Kalau tidak: hapus dari nav | `navLinks` |
| Foto | Foto asli kantor/tim/alat/proyek, min. 1600px, hak pakai jelas | `public/images/` |
| Logo | Vektor `.svg`/`.ai` (sekarang hanya `logo.png` 512px, blur di tab browser) | `public/images/logo.png` |

### Item yang butuh izin tertulis

- Logo mitra/klien yang ditampilkan
- Testimoni (nama + jabatan + perusahaan)
- Foto yang menampilkan orang (terutama foto tim)

---

## 10. Hal teknis yang belum beres (tidak butuh klien)

Semua ini masuk PRD §11 Non-Functional, jadi sah dikerjakan sekarang tanpa mengubah desain:

| Item | Kondisi sekarang | Dampak |
|---|---|---|
| `:focus-visible` | **Tidak ada sama sekali** di `globals.css` | Pengguna keyboard tidak tahu fokus di mana. Gagal aksesibilitas. |
| Skip-link | Tidak ada | Screen reader harus tab melewati seluruh nav. |
| `not-found.tsx` / `error.tsx` / `loading.tsx` | Tidak ada | 404 memakai halaman default Next.js — terlihat belum dikerjakan. |
| `og.jpg` | **File PNG 1,1 MB berekstensi `.jpg`** | Preview link di WhatsApp/LinkedIn bisa gagal. Perlu dikonversi. |
| Security headers | Tidak ada di `next.config.ts` | Standar produksi. |
| JSON-LD `Organization`/`LocalBusiness` | Tidak ada | Berpengaruh ke hasil pencarian Google untuk bisnis lokal. |
| Analytics | Tidak ada sama sekali | Tidak akan tahu berapa orang klik WhatsApp — padahal itu satu-satunya tujuan website. |
| Focus trap menu mobile | Tidak ada | Tab bisa masuk ke konten di belakang menu. |
| `NEXT_PUBLIC_ALLOW_INDEX` | Default `false` | Benar untuk preview. **Jangan lupa ubah saat go-live** atau website tidak terindeks. |

### Link yang masih mati (harus dibereskan atau dihapus)

Sesuai PRD §7 memang boleh `#`, tapi ini yang paling merusak kesan profesional:

- Kartu Unit (`Units.tsx:22`) → `href="#"`
- Kartu Produk (`Products.tsx:21`) → `href="#"`
- "Lihat Semua Unit Usaha" & "Lihat Semua Produk" → menunjuk ke section-nya sendiri (tombol tidak melakukan apa pun)
- Menu "Berita" → `#kontak` (`site.ts:132`)
- Visi & Misi, Struktur Perusahaan, Karir → `#`
- Semua sosmed → `#`
- Kebijakan Privasi & S&K → `#`

---

## 11. Catatan risiko untuk Anda

| Risiko | Kenyataan |
|---|---|
| Email masih Gmail (`Ptarthalandgroup@gmail.com`) | Untuk klien B2B ini sinyal kurang profesional. Perlu diputuskan: bikin email domain atau tidak. |
| Domain `arthalandgroup.com` | Masih asumsi di `site.ts:45`. **Pastikan domain ini benar-benar dimiliki klien** sebelum go-live. |
| Kepemilikan akun Vercel/domain | Harus jelas atas nama siapa. Ini masalah klasik 6 bulan kemudian. |
| Alamat "Kota Serang, Banten" | Terlalu umum untuk bisnis lokal. Butuh alamat lengkap. |
| Foto stok/generik | Pembedaya terbesar antara "template" dan "perusahaan nyata". |

---

## 12. Ringkasan satu paragraf

Website ini adalah kartu nama digital 1 halaman sesuai PRD yang sudah disetujui. Sebelum meminta konten, kunci dulu ekspektasi klien lewat satu call 30 menit dengan 6 pertanyaan bisnis, lalu tawarkan dua opsi konkret (A: tetap kartu nama, B: company profile lengkap) beserta konsekuensi waktu. Setelah scope terkunci, kirim satu halaman konfirmasi yang mencantumkan apa yang termasuk, tidak termasuk, jumlah revisi, dan konsekuensi aset telat. Baru setelah itu minta aset lewat satu folder Drive dan tawarkan voice note. Sementara menunggu, kerjakan perbaikan teknis yang tidak butuh klien dan tidak melanggar PRD.
