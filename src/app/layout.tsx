import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { allowIndex, favicon, logo, ogImage, seo, siteUrl } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.titleTemplate,
    template: "%s | Artha Land Group",
  },
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: "Artha Land Group",
  authors: [{ name: "PT Artha Land Group" }],
  creator: "PT Artha Land Group",
  publisher: "PT Artha Land Group",
  category: "business",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Artha Land Group",
    title: seo.titleTemplate,
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
    title: seo.titleTemplate,
    description: seo.description,
    images: [{ url: ogImage.src, alt: seo.ogAlt }],
  },
  robots: allowIndex
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
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
      <body>
        <a className="skip-link" href="#main">
          Lewati ke konten utama
        </a>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
