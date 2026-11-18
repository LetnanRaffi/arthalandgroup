"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/icons/Icon";
import { Reveal } from "@/components/Reveal";
import { cta, photos, waUrl } from "@/data/site";

export function CtaBanner() {
  const photo = photos.hero;
  const [line1, line2] = cta.title.split("\n");
  // index.html: gambar disembunyikan sampai file ada, jadi gradient navy tampil
  // (bukan ikon gambar rusak). Ikuti perilaku yang sama bila foto gagal dimuat.
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section className="cta-wrap" id="portofolio">
      <div className="container">
        <Reveal className="cta">
          <div className={photoLoaded ? "img loaded" : "img"}>
            {!photoFailed && (
              <Image
                src={photo.src}
                alt=""
                fill
                sizes="(max-width: 860px) 100vw, 240px"
                className="object-cover"
                onLoad={() => setPhotoLoaded(true)}
                onError={() => setPhotoFailed(true)}
              />
            )}
          </div>
          <div>
            <h3>
              {line1}
              <br />
              {line2}
            </h3>
            <p>{cta.text}</p>
          </div>
          <a className="btn" href={waUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={20} className="fill-white" /> {cta.button}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
