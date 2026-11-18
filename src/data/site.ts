/**
 * Sumber konten & kontak tunggal untuk seluruh website.
 *
 * Ubah teks/data di file ini — komponen tidak menyimpan konten sendiri.
 * Foto & logo diganti lewat folder `public/images/` (nama file tetap).
 */

export type IconName =
  | "logo"
  | "whatsapp"
  | "arrow"
  | "box"
  | "print"
  | "med"
  | "hat"
  | "game"
  | "build"
  | "cup"
  | "hand"
  | "award"
  | "bolt"
  | "shield"
  | "users"
  | "bag"
  | "pin"
  | "phone"
  | "mail"
  | "instagram"
  | "tiktok"
  | "youtube"
  | "linkedin";

/* ------------------------------------------------------------------ */
/* Data perusahaan                                                     */
/* ------------------------------------------------------------------ */

const COMPANY = {
  name: "PT Artha Land Group",
  address: "Kota Serang, Banten",
  /** Nomor WhatsApp untuk link wa.me (format internasional, tanpa "+"). */
  waNumber: process.env.NEXT_PUBLIC_WA_NUMBER?.replace(/[^0-9]/g, "") || "6285220590574",
  /** Nomor yang ditampilkan di website. */
  phoneDisplay: "0852-2059-0574",
  email: "Ptarthalandgroup@gmail.com",
  domain: "arthalandgroup.com",
} as const;

export const company = COMPANY;

export const siteUrl = `https://${COMPANY.domain}`;

/* ------------------------------------------------------------------ */
/* Pesan WhatsApp                                                      */
/* ------------------------------------------------------------------ */

/** Pesan awal untuk semua tombol WhatsApp. */
export const waMessage = "Halo Artha Land Group, saya ingin konsultasi";

/** Link WhatsApp dengan pesan awal. */
export const waUrl = `https://wa.me/${COMPANY.waNumber}?text=${encodeURIComponent(waMessage)}`;

/* ------------------------------------------------------------------ */
/* SEO / metadata                                                      */
/* ------------------------------------------------------------------ */

/** Aktifkan lewat env saat go-live; default noindex selama preview. */
export const allowIndex = process.env.NEXT_PUBLIC_ALLOW_INDEX === "true";

export const seo = {
  title: "Artha Land Group | Solusi Terintegrasi untuk Kebutuhan Bisnis Anda",
  description:
    "PT Artha Land Group menyediakan pengadaan, percetakan, alat kesehatan, alat berat, hiburan, konstruksi, hingga kuliner.",
  ogAlt: "Gedung kantor PT Artha Land Group",
  themeColor: "#0a1a33",
} as const;

/* ------------------------------------------------------------------ */
/* Gambar & logo (file di public/images/, nama file tetap)             */
/* ------------------------------------------------------------------ */

export const favicon = "/images/logo.png";

export const ogImage = {
  src: "/images/og.jpg",
  width: 1200,
  height: 675,
} as const;

export const logo = {
  /** File logo asli (public/images/logo.png). */
  src: "/images/logo.png",
  width: 512,
  height: 512,
  alt: "Logo PT Artha Land Group",
  /** Teks di samping mark logo. */
  brand: "ARTHA LAND",
  brandSuffix: "GROUP",
} as const;

export type PhotoKey =
  | "hero"
  | "pengadaan"
  | "percetakan"
  | "alkes"
  | "alatberat"
  | "playstation"
  | "konstruksi"
  | "kuliner";

export const photos: Record<PhotoKey, { src: string; alt: string }> = {
  hero: { src: "/images/hero.jpg", alt: "Gedung kantor modern PT Artha Land Group" },
  pengadaan: { src: "/images/pengadaan.jpg", alt: "Gudang dan logistik pengadaan barang" },
  percetakan: { src: "/images/percetakan.jpg", alt: "Mesin cetak digital percetakan" },
  alkes: { src: "/images/alkes.jpg", alt: "Peralatan medis alat kesehatan" },
  alatberat: { src: "/images/alatberat.jpg", alt: "Ekskavator alat berat" },
  playstation: { src: "/images/playstation.jpg", alt: "Konsol PlayStation 5" },
  konstruksi: { src: "/images/konstruksi.jpg", alt: "Proyek konstruksi bangunan" },
  kuliner: { src: "/images/kuliner.jpg", alt: "Burger dan minuman café" },
};

/* ------------------------------------------------------------------ */
/* Navigasi                                                            */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Unit Usaha", href: "#unit" },
  { label: "Produk", href: "#produk" },
  { label: "Portofolio", href: "#portofolio" },
  // Belum ada halaman berita -> sementara ke #kontak (PRD §7).
  { label: "Berita", href: "#kontak" },
  { label: "Kontak", href: "#kontak" },
] as const;

/* ------------------------------------------------------------------ */
/* Hero & trust bar                                                    */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "PT ARTHA LAND GROUP",
  title: "Solusi Terintegrasi untuk Kebutuhan Bisnis Anda",
  paragraph:
    "Menyediakan berbagai layanan dan produk unggulan di bidang pengadaan, percetakan, alat kesehatan, alat berat, hiburan, konstruksi, hingga kuliner.",
  primaryCta: { label: "Lihat Produk", href: "#produk" },
  secondaryCta: { label: "Tentang Kami", href: "#tentang" },
} as const;

export const trustItems: { icon: IconName; title: string; text: string }[] = [
  { icon: "hand", title: "Terpercaya", text: "Legal & Berizin Resmi" },
  { icon: "award", title: "Profesional", text: "Tim Berpengalaman" },
  { icon: "box", title: "Produk Lengkap", text: "Berbagai Kebutuhan Usaha" },
  { icon: "bolt", title: "Layanan Cepat", text: "Responsif & Tepat Waktu" },
  { icon: "shield", title: "Kualitas Terjamin", text: "Standar dan Bergaransi" },
];

/* ------------------------------------------------------------------ */
/* Unit bisnis                                                         */
/* ------------------------------------------------------------------ */

export type Unit = {
  icon: IconName;
  /** Judul dengan baris baru sesuai index.html (elemen <br>). */
  label: string;
  /** Foto background kartu. */
  photo: PhotoKey;
};

export const units: Unit[] = [
  { icon: "box", label: "Pengadaan\nBarang & Jasa", photo: "pengadaan" },
  { icon: "print", label: "Percetakan\n& Digital Printing", photo: "percetakan" },
  { icon: "med", label: "Alat\nKesehatan", photo: "alkes" },
  { icon: "hat", label: "Alat Berat\n& Operasional", photo: "alatberat" },
  { icon: "game", label: "Hiburan\n& Rental PlayStation", photo: "playstation" },
  { icon: "build", label: "Konstruksi\n& Kontraktor", photo: "konstruksi" },
  { icon: "cup", label: "Kuliner\n& Café", photo: "kuliner" },
];

/* ------------------------------------------------------------------ */
/* Produk & layanan                                                    */
/* ------------------------------------------------------------------ */

export type Product = {
  title: string;
  description: string;
  photo: PhotoKey;
  /** Label yang tampil bila foto belum tersedia. */
  photoLabel: string;
};

export const products: Product[] = [
  {
    title: "Produk Percetakan",
    description: "Kartu nama, brosur, banner, merchandise, dll",
    photo: "percetakan",
    photoLabel: "Foto Percetakan",
  },
  {
    title: "Alat Kesehatan",
    description: "Perlengkapan medis berkualitas & bersertifikat",
    photo: "alkes",
    photoLabel: "Foto Alat Kesehatan",
  },
  {
    title: "Rental & Penjualan PlayStation",
    description: "PS3, PS4, PS5, game & aksesoris",
    photo: "playstation",
    photoLabel: "Foto PlayStation",
  },
  {
    title: "Kuliner & Café",
    description: "Menu makanan, minuman & ruang santai",
    photo: "kuliner",
    photoLabel: "Foto Kuliner",
  },
];

/* ------------------------------------------------------------------ */
/* Statistik "Mengapa Memilih Kami?"                                   */
/* ------------------------------------------------------------------ */

export type Stat = {
  icon: IconName;
  value: string;
  label: string;
  /** Statistik terakhir memakai ukuran teks lebih kecil (lihat index.html). */
  last?: boolean;
};

export const stats = {
  heading: "Mengapa\nMemilih Kami?",
  items: [
    { icon: "users", value: "100+", label: "Klien & Mitra" },
    { icon: "bag", value: "500+", label: "Proyek & Pengadaan" },
    { icon: "award", value: "7+", label: "Lini Usaha Aktif" },
    {
      icon: "shield",
      value: "Bersertifikat",
      label: "Legal & Berizin Resmi",
      last: true,
    },
  ] as Stat[],
} as const;

/* ------------------------------------------------------------------ */
/* CTA banner                                                          */
/* ------------------------------------------------------------------ */

export const cta = {
  title: "Butuh Solusi untuk\nKebutuhan Usaha Anda?",
  text: "Konsultasikan kebutuhan pengadaan, percetakan, alat kesehatan, hingga layanan lainnya bersama tim kami.",
  button: "Konsultasi Sekarang",
} as const;

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

/** Link yang halamannya belum tersedia cukup memakai "#". */
export const footer = {
  companyInfo: {
    heading: "Informasi Perusahaan",
    links: [
      { label: "Tentang Kami", href: "#tentang" },
      { label: "Visi & Misi", href: "#" },
      { label: "Struktur Perusahaan", href: "#" },
      { label: "Karir", href: "#" },
    ],
  },
  unitUsaha: {
    heading: "Unit Usaha",
    links: [
      { label: "Pengadaan Barang & Jasa", href: "#unit" },
      { label: "Rental PlayStation", href: "#unit" },
      { label: "Percetakan", href: "#unit" },
      { label: "Konstruksi", href: "#unit" },
      { label: "Alat Kesehatan", href: "#unit" },
      { label: "Kuliner & Café", href: "#unit" },
      { label: "Alat Berat", href: "#unit" },
    ],
  },
  contact: {
    heading: "Kontak Kami",
  },
  social: {
    heading: "Ikuti Kami",
    /**
     * Isi URL asli saat tersedia. Kosongkan ("") untuk menyembunyikan ikon.
     */
    links: [
      { label: "Instagram", icon: "instagram" as IconName, href: "#" },
      { label: "TikTok", icon: "tiktok" as IconName, href: "#" },
      { label: "YouTube", icon: "youtube" as IconName, href: "#" },
      { label: "LinkedIn", icon: "linkedin" as IconName, href: "#" },
    ] as { label: string; icon: IconName; href: string }[],
  },
  copyright: "© 2026 PT Artha Land Group. All Rights Reserved.",
  legal: [
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Syarat & Ketentuan", href: "#" },
  ],
} as const;
