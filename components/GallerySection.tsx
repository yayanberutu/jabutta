import Image from "next/image";
import { galleryImages } from "@/data/gallery";

export default function GallerySection() {
  return (
    <section id="galeri" className="py-20 sm:py-24">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="section-kicker">Galeri produk</p>
          <h2 className="section-title">Foto Produk Kedai Jabutta</h2>
          <p className="section-copy">
            Empat foto asli produk Jabutta: Mie Sop Medan hangat dan Roti Ketawa Siantar dalam kemasan siap pesan.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-[1.75rem] border border-jabutta-maroon/10 bg-jabutta-ivory shadow-sm transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className={`relative ${item.aspectClass} overflow-hidden bg-jabutta-cream`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 92vw"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  style={{ objectPosition: item.objectPosition }}
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-2xl font-bold text-jabutta-deep">{item.caption}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
