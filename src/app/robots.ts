import type { MetadataRoute } from "next";
import { allowIndex, siteUrl } from "@/data/site";

// Wajib untuk static export: robots.txt dibuat sekali saat build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Masa preview (default): semua crawler dilarang mengindeks.
  if (!allowIndex) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
