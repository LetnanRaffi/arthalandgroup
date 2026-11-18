import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Halaman ini statis dan tidak memakai data yang berubah per-request.
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Semua gambar lokal, tidak ada remotePatterns (tidak ada hotlink).
    formats: ["image/avif", "image/webp"],
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
