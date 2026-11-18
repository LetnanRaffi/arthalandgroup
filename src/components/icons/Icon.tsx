import type { ReactNode } from "react";
import type { IconName } from "@/data/site";

/**
 * Ikon SVG inline — dikonversi apa adanya dari sprite <symbol> di index.html.
 * Hanya geometri path/geometry yang dipindah; isian (fill/stroke) diatur oleh
 * CSS/className masing-masing section, sama seperti di index.html.
 */
const shapes: Record<IconName, ReactNode> = {
  logo: (
    <>
      <path d="M24 4 6 44h8l10-24 4 10-7 0-3 7h18z" fill="#fff" />
      <path d="M8 40c10-2 22-9 34-8-12 0-22 4-34 8z" fill="#c8963e" />
    </>
  ),
  whatsapp: (
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7a11.600 11.600 0 0 1-4.800-4.200c-.4-.5-1.200-1.600-1.200-3s.7-2 1-2.300.6-.3.800-.3h.600c.2 0 .4 0 .6.500l.8 2c.1.2.1.400 0 .600l-.4.600-.4.4c-.1.200-.3.300-.1.600a7 7 0 0 0 3.400 2.800c.3.100.5.100.7-.1l.9-1c.2-.3.400-.2.700-.1l1.900.9c.3.100.5.200.5.400.1.100.1.700-.1 1.300z" />
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />,
  box: (
    <path
      d="M12 3 3 7.500v9L12 21l9-4.500v-9zM3 7.500 12 12m0 0 9-4.500M12 12v9"
      strokeLinejoin="round"
    />
  ),
  print: <path d="M7 9V3h10v6M7 17H4v-7h16v7h-3M7 14h10v7H7z" strokeLinejoin="round" />,
  med: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5h6v2M12 10.500v6M9 13.500h6" />
    </>
  ),
  hat: (
    <path d="M4 18h16M5 18a7 7 0 0 1 14 0M12 8V5M9 11l-1-3M15 11l1-3" strokeLinecap="round" />
  ),
  game: (
    <path
      d="M7 8h10a4 4 0 0 1 4 4v3a3 3 0 0 1-5 2l-1.500-2h-5L8 17a3 3 0 0 1-5-2v-3a4 4 0 0 1 4-4zM8 11v3M6.500 12.500h3M15.500 11.500h.01M17.500 13.500h.01"
      strokeLinecap="round"
    />
  ),
  build: (
    <path
      d="M4 21V5l9-2v18M13 8h7v13M8 8h2M8 12h2M8 16h2M16 12h1M16 16h1M3 21h18"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  cup: (
    <path
      d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM17 10h1.500a2.500 2.500 0 0 1 0 5H17M7 3c0 1.500 1 1.500 1 3M11 3c0 1.500 1 1.500 1 3"
      strokeLinecap="round"
    />
  ),
  hand: <path d="M3 11l5-4 4 2 4-2 5 4-8 8zM8 7l-3 5M16 7l3 5" strokeLinejoin="round" />,
  award: (
    <>
      <circle cx="12" cy="9" r="5.500" />
      <path d="M8.500 14 7 21l5-3 5 3-1.500-7" strokeLinejoin="round" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7z" strokeLinejoin="round" />,
  shield: (
    <>
      <path d="M12 3 4 6v6c0 5 3.500 8 8 9 4.500-1 8-4 8-9V6z" />
      <path d="m8.500 12 2.500 2.500 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  users: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.500" />
      <path d="M2 20c0-3.500 2.500-6 6-6s6 2.500 6 6M15 14c3 0 6 1.500 6 5" />
    </>
  ),
  bag: (
    <>
      <path d="M5 8h14l1 13H4zM8.500 8V6a3.500 3.500 0 0 1 7 0v2" />
      <path d="m9 14 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  pin: (
    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.500A2.500 2.500 0 1 1 12 6.500a2.500 2.500 0 0 1 0 5z" />
  ),
  phone: (
    <path d="M6.600 10.800a15 15 0 0 0 6.600 6.600l2.200-2.200a1 1 0 0 1 1-.2 11 11 0 0 0 3.600.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.500a1 1 0 0 1 1 1c0 1.200.2 2.400.6 3.600a1 1 0 0 1-.2 1z" />
  ),
  mail: <path d="M3 5h18v14H3zM3 6l9 7 9-7" fill="none" stroke="#fff" strokeWidth={1.8} />,
  instagram: (
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.500A4.500 4.500 0 1 1 7.500 12 4.500 4.500 0 0 1 12 7.500zm0 2A2.500 2.500 0 1 0 14.500 12 2.500 2.500 0 0 0 12 9.500zM17.500 5.500a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
  ),
  tiktok: <path d="M16 3a5 5 0 0 0 4 4v3a8 8 0 0 1-4-1.200V15a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3z" />,
  youtube: (
    <path d="M22 8a3 3 0 0 0-2-2c-1.700-.5-8-.5-8-.5s-6.300 0-8 .5a3 3 0 0 0-2 2c-.5 1.700-.5 4-.5 4s0 2.300.5 4a3 3 0 0 0 2 2c1.700.5 8 .5 8 .5s6.300 0 8-.5a3 3 0 0 0 2-2c.5-1.700.5-4 .5-4s0-2.300-.5-4zM10 15V9l5 3z" />
  ),
  linkedin: (
    <path d="M4 9h4v12H4zM6 3a2.200 2.200 0 1 1 0 4.400A2.200 2.200 0 0 1 6 3zM10 9h3.800v1.700c.6-1 1.900-2 3.900-2 4 0 4.300 2.600 4.300 5.800V21h-4v-5.800c0-1.400 0-3.200-2-3.200s-2.100 1.500-2.100 3.100V21h-4z" />
  ),
};

/** Hanya logo yang memakai viewBox 48; ikon lain 0 0 24 24. */
const viewBoxes: Partial<Record<IconName, string>> = {
  logo: "0 0 48 48",
};

interface IconProps {
  name: IconName;
  className?: string;
  /** Ukuran dalam px (width & height). */
  size?: number | string;
  /** Aria-label; jika kosong ikon dekoratif (aria-hidden). */
  title?: string;
}

export function Icon({ name, className, size, title }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={viewBoxes[name] ?? "0 0 24 24"}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {shapes[name]}
    </svg>
  );
}

/** Ikon burger (tidak ada di sprite; diambil dari markup header index.html). */
export function BurgerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={26}
      height={26}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
