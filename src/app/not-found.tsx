import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { waUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan",
  robots: { index: false, follow: false },
};

/**
 * Halaman 404. Tanpa file ini, Next.js menampilkan halaman default berbahasa
 * Inggris dengan logo Next.js — terlihat seperti website yang belum selesai.
 */
export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="notfound">
        <div className="container">
          <p className="notfound-code">404</p>
          <h1>Halaman tidak ditemukan</h1>
          <p className="notfound-text">
            Halaman yang Anda cari mungkin sudah dipindahkan atau alamatnya salah ketik.
          </p>
          <div className="notfound-actions">
            <Link className="btn" href="/">
              Kembali ke Beranda
            </Link>
            <a className="btn btn-ghost-dark" href={waUrl} target="_blank" rel="noopener noreferrer">
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
