import Image from "next/image";
import { Icon } from "@/components/icons/Icon";
import { Reveal } from "@/components/Reveal";
import { photos, products } from "@/data/site";

export function Products() {
  return (
    <section className="section" id="produk" style={{ paddingTop: 8 }}>
      <div className="container">
        <Reveal className="sec-head">
          <h2>Produk &amp; Layanan Unggulan</h2>
          <a className="link-more" href="#produk">
            Lihat Semua Produk <Icon name="arrow" size={14} className="stroke-current" />
          </a>
        </Reveal>

        <div className="products">
          {products.map((product, i) => {
            const photo = photos[product.photo];
            return (
              <Reveal as="a" href="#" className="product" delayMs={i * 70} key={product.photo}>
                <div className="ph">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 560px) 100vw, (max-width: 1100px) 50vw, 288px"
                  />
                  <span className="ph-label">{product.photoLabel}</span>
                </div>
                <div className="body">
                  <div>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                  </div>
                  <span className="arrow">
                    <Icon name="arrow" />
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
