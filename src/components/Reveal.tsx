"use client";

import {
  useEffect,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type RevealBaseProps = {
  className?: string;
  /** Delay transisi (untuk efek muncul berurutan di dalam grid). */
  delayMs?: number;
  style?: CSSProperties;
  children: ReactNode;
};

type RevealProps =
  | ({ as: "a" } & RevealBaseProps & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ as?: "div" | "h2" } & RevealBaseProps & HTMLAttributes<HTMLElement>);

const BASE_CLASSES = "fade-up";

/**
 * Status "tampil" dari IntersectionObserver, padanan `.fade-up` di index.html:
 * threshold 0.12, rootMargin "0px 0px -40px 0px", dan elemen yang sudah terlihat
 * saat halaman dibuka langsung tampil (tanpa transisi agar tidak ada kilatan).
 * prefers-reduced-motion ditangani di CSS.
 *
 * Render awal tetap `fade-up` (opacity 0, sama seperti index.html sebelum JS);
 * jika IntersectionObserver tidak tersedia, elemen langsung diberi `.in`.
 */
function useReveal<T extends HTMLElement>(delayMs?: number) {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => {
      setInstant(true);
      setShown(true);
    };

    // Tidak ada IntersectionObserver: tampilkan semuanya setelah frame berikutnya.
    if (!("IntersectionObserver" in window)) {
      const raf = requestAnimationFrame(show);
      return () => cancelAnimationFrame(raf);
    }

    // Sudah terlihat saat halaman dibuka: langsung tampil, tanpa animasi.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      const raf = requestAnimationFrame(show);
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    io.observe(el);

    // Jaga-jaga: kalau observer tidak pernah memicu padahal sudah di area tampil.
    const failsafe = window.setTimeout(() => {
      if (el.getBoundingClientRect().top < window.innerHeight) setShown(true);
    }, 600);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  const className = [BASE_CLASSES, instant ? "no-anim" : null, shown ? "in" : null].join(" ");

  return { ref, className, delayMs };
}

function styleWithDelay(style: CSSProperties | undefined, delayMs: number | undefined) {
  return delayMs ? { ...style, transitionDelay: `${delayMs}ms` } : style;
}

function FadeAnchor({
  className,
  children,
  style,
  delayMs,
  ...rest
}: RevealBaseProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { ref, className: revealClass } = useReveal<HTMLAnchorElement>(delayMs);
  return (
    <a {...rest} ref={ref} className={`${revealClass} ${className ?? ""}`.trim()} style={styleWithDelay(style, delayMs)}>
      {children}
    </a>
  );
}

function FadeHeading({
  className,
  children,
  style,
  delayMs,
  ...rest
}: RevealBaseProps & HTMLAttributes<HTMLHeadingElement>) {
  const { ref, className: revealClass } = useReveal<HTMLHeadingElement>(delayMs);
  return (
    <h2 {...rest} ref={ref} className={`${revealClass} ${className ?? ""}`.trim()} style={styleWithDelay(style, delayMs)}>
      {children}
    </h2>
  );
}

function FadeBox({
  className,
  children,
  style,
  delayMs,
  ...rest
}: RevealBaseProps & HTMLAttributes<HTMLDivElement>) {
  const { ref, className: revealClass } = useReveal<HTMLDivElement>(delayMs);
  return (
    <div {...rest} ref={ref} className={`${revealClass} ${className ?? ""}`.trim()} style={styleWithDelay(style, delayMs)}>
      {children}
    </div>
  );
}

/** Wrapper animasi fade-up saat elemen masuk viewport (tanpa library). */
export function Reveal(props: RevealProps) {
  if (props.as === "a") {
    return <FadeAnchor {...props} />;
  }
  if (props.as === "h2") {
    return <FadeHeading {...props} />;
  }
  return <FadeBox {...props} />;
}
