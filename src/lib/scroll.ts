/** Tinggi header (fixed header = 72px). */
export const HEADER_HEIGHT = 72;

/**
 * Smooth scroll ke anchor dengan offset tinggi header (padanan script
 * index.html). Link "#" (placeholder) dan target yang tidak ada dibiarkan.
 * Mengembalikan true bila posisi scroll ditangani di sini.
 */
export function scrollToAnchor(href: string): boolean {
  if (!href || href === "#" || !href.startsWith("#")) return false;
  const target = document.getElementById(href.slice(1));
  if (!target) return false;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = target.getBoundingClientRect().top + window.scrollY - (HEADER_HEIGHT - 1);

  window.scrollTo({ top: Math.max(top, 0), behavior: reduce ? "auto" : "smooth" });
  window.history.replaceState(null, "", href);
  return true;
}
