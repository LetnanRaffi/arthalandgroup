import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

// Wajib untuk static export: sitemap dibuat sekali saat build, bukan per-request.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Landing page 1 halaman saja.
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
