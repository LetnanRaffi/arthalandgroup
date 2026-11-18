import { company, logo, seo, siteUrl } from "@/data/site";

/**
 * Structured data (JSON-LD) untuk Google.
 *
 * `LocalBusiness` dipakai karena bisnis ini beroperasi di kota tertentu dan
 * melayani area sekitar — format ini yang dipakai Google untuk hasil pencarian
 * lokal. Tanpa ini, Google hanya membaca teks halaman tanpa tahu ini entitas
 * bisnis apa.
 *
 * Catatan: sengaja hanya memakai data yang benar-benar ada (nama, kota, telepon,
 * email, URL). Jangan tambahkan alamat/koordinat palsu — data salah di JSON-LD
 * bisa menurunkan kepercayaan, bukan menaikkan.
 */
export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: company.name,
    alternateName: "Artha Land Group",
    url: siteUrl,
    logo: `${siteUrl}${logo.src}`,
    image: `${siteUrl}/images/og.jpg`,
    description: seo.description,
    email: company.email,
    telephone: `+${company.waNumber}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressRegion: company.region,
      addressCountry: company.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${company.waNumber}`,
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["id"],
    },
    knowsAbout: [
      "Pengadaan Barang dan Jasa",
      "Percetakan dan Digital Printing",
      "Alat Kesehatan",
      "Alat Berat",
      "Rental PlayStation",
      "Konstruksi dan Kontraktor",
      "Kuliner dan Café",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: company.name,
    inLanguage: "id-ID",
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: seo.titleTemplate,
    description: seo.description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    inLanguage: "id-ID",
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify aman: seluruh isi berasal dari konstanta di src/data/site.ts,
      // bukan input pengguna.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organization, website, webpage]),
      }}
    />
  );
}
