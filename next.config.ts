import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Hosting: Cloudflare Pages (statis, tanpa Node server).
   * `output: "export"` menghasilkan folder `out/` berisi HTML/CSS/JS siap upload.
   * Konsekuensi: tidak ada Image Optimization API dan tidak ada route dinamis,
   * jadi `images.unoptimized` aktif dan semua gambar sudah dioptimasi lebih dulu
   * (lihat `scripts/optimize-images.mjs`).
   */
  output: "export",
  trailingSlash: true,
  images: {
    // Wajib untuk static export: gambar disajikan apa adanya dari /public.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
