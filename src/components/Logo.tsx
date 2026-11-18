import Image from "next/image";
import { logo } from "@/data/site";

interface LogoProps {
  /** Ukuran logo di footer lebih besar (46px) daripada di header (38px). */
  variant?: "header" | "footer";
}

/**
 * Logo = mark + teks "ARTHA LAND" / "GROUP".
 * Mark memakai file dari public/images/logo.png (ganti file, kode tidak berubah).
 * Kotak mark sudah navy, jadi bila foto/logo gagal dimuat tetap rapi.
 */
export function Logo({ variant = "header" }: LogoProps) {
  const isFooter = variant === "footer";
  const size = isFooter ? 46 : 38;

  return (
    <span className="logo">
      <span
        className="logo-mark shrink-0 overflow-hidden rounded-lg bg-navy"
        style={{ width: size, height: size }}
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          sizes={`${size}px`}
          className="h-full w-full object-contain"
        />
      </span>
      <span className="logo-text">
        <b style={isFooter ? { fontSize: 20 } : undefined}>{logo.brand}</b>
        <small>{logo.brandSuffix}</small>
      </span>
    </span>
  );
}
