import Image from "next/image";
import { Icon } from "@/components/icons/Icon";
import { Reveal } from "@/components/Reveal";
import { photos, units, waLink } from "@/data/site";

export function Units() {
  return (
    <section className="section" id="unit">
      <div className="container">
        <Reveal className="sec-head">
          <h2>Unit Bisnis Kami</h2>
          <a
            className="link-more"
            href={waLink("Halo Artha Land Group, saya ingin informasi mengenai unit usaha Anda")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tanya Semua Unit Usaha <Icon name="arrow" size={14} className="stroke-current" />
          </a>
        </Reveal>

        <div className="units">
          {units.map((unit, i) => {
            const photo = photos[unit.photo];
            const [line1, line2] = unit.label.split("\n");
            const plainLabel = unit.label.replace("\n", " ");
            return (
              <Reveal
                as="a"
                href={waLink(`Halo Artha Land Group, saya ingin informasi tentang ${plainLabel}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="unit"
                delayMs={i * 70}
                key={unit.photo}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 560px) 50vw, (max-width: 1100px) 25vw, 170px"
                  className="unit-photo"
                />
                <Icon name={unit.icon} />
                <b>
                  {line1}
                  <br />
                  {line2}
                </b>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
