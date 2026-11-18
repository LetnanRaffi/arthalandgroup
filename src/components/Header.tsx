"use client";

import { useCallback, useEffect, useState, type MouseEvent } from "react";
import { BurgerIcon, Icon } from "@/components/icons/Icon";
import { Logo } from "@/components/Logo";
import { navLinks, waUrl } from "@/data/site";
import { scrollToAnchor } from "@/lib/scroll";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Link yang sedang aktif (awalnya "Beranda" seperti index.html).
  const [active, setActive] = useState<string>(navLinks[0].href);

  /* 1. Navbar berubah warna saat halaman di-scroll (threshold 30px) */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* 2. Tutup menu dengan tombol Esc */
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  /* Cegah konten di belakang ikut ter-scroll saat menu mobile terbuka */
  useEffect(() => {
    document.body.style.overflow = menuOpen && window.innerWidth <= 860 ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Tutup menu otomatis bila layar diperbesar ke desktop */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 860px)");
    const onChange = () => {
      if (!mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  /* 3. Sorot link nav sesuai section yang sedang terlihat */
  useEffect(() => {
    const ids = Array.from(
      new Set(
        navLinks
          .map((link) => link.href)
          .filter((href) => href.startsWith("#"))
          .map((href) => href.slice(1)),
      ),
    );
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      () => {
        const offset = 72 + 8;
        let current = sections[0].id;
        for (const section of sections) {
          if (section.getBoundingClientRect().top - offset <= 0) current = section.id;
        }
        setActive(`#${current}`);
      },
      { rootMargin: "-70px 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, []);

  const handleAnchorClick = useCallback((e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return; // link eksternal (WA) -> biarkan browser
    e.preventDefault();
    setMenuOpen(false);
    setActive(href);
    scrollToAnchor(href);
  }, []);

  return (
    <>
      <header id="header" className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="container nav">
          <a
            href="#beranda"
            className="logo"
            aria-label="Artha Land Group"
            onClick={(e) => handleAnchorClick(e, "#beranda")}
          >
            <Logo />
          </a>

          <nav id="nav" className={`main-nav${menuOpen ? " open" : ""}`} aria-label="Navigasi utama">
            <ul>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={active === link.href ? "active" : undefined}
                    aria-current={active === link.href ? "true" : undefined}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-right">
            <a className="btn-outline" href={waUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={18} className="fill-white" /> Hubungi Kami
            </a>
            <button
              type="button"
              className="burger"
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
              aria-controls="nav"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <BurgerIcon />
            </button>
          </div>
        </div>
      </header>

      {/* backdrop untuk menutup menu mobile dengan klik di luar */}
      <div
        aria-hidden="true"
        className={`nav-backdrop${menuOpen ? " show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}
