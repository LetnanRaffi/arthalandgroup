import Image from "next/image";
import { Icon } from "@/components/icons/Icon";
import { TrustBar } from "@/components/TrustBar";
import { hero, photos } from "@/data/site";

export function Hero() {
  const photo = photos.hero;

  return (
    <section className="hero" id="beranda">
      {/* foto latar (LCP) + gradient navy fallback dari CSS */}
      <div className="hero-media" aria-hidden="true">
        <Image src={photo.src} alt={photo.alt} fill sizes="100vw" preload fetchPriority="high" />
      </div>
      {/* overlay gelap dari kiri */}
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-content">
        <div className="eyebrow">{hero.eyebrow}</div>
        <h1>{hero.title}</h1>
        <p>{hero.paragraph}</p>
        <div className="hero-cta">
          <a href={hero.primaryCta.href} className="btn btn-white">
            {hero.primaryCta.label} <Icon name="arrow" size={16} className="stroke-current" />
          </a>
          <a href={hero.secondaryCta.href} className="btn btn-ghost">
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>

      {/* TrustBar menempel di dasar hero (aliran normal, tidak menimpa konten) */}
      <TrustBar />
    </section>
  );
}
