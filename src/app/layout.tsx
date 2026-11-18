import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { allowIndex, favicon, logo, ogImage, seo, siteUrl } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  applicationName: "Artha Land Group",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Artha Land Group",
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
        alt: seo.ogAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [{ url: ogImage.src, alt: seo.ogAlt }],
  },
  // Masa preview: noindex, nofollow. Aktifkan lewat NEXT_PUBLIC_ALLOW_INDEX=true saat go-live.
  robots: allowIndex
    ? { index: true, follow: true, googleBot: { index: true, follow: true } }
    : { index: false, follow: false, googleBot: { index: false, follow: false } },
  icons: {
    icon: [
      { url: favicon, type: "image/png" },
      { url: logo.src, type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: logo.src, sizes: "512x512", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: seo.themeColor,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
