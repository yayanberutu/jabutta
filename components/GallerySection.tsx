import Image from "next/image";
import { galleryItems } from "@/data/gallery";

export default function GallerySection() {
  return (
    <section id="galeri" className="py-20 sm:py-24">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="section-kicker">Galeri produk</p>
          <h2 className="section-title">Foto Produk Kedai Jabutta</h2>
          <p className="section-copy">
            Gunakan galeri ini untuk menampilkan foto asli Roti Ketawa, Mie Sop Medan, dan packing pesanan saat aset final sudah siap.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {galleryItems.map((item, index) => (
            <article
              key={item.id}
              className={`group overflow-hidden rounded-[1.75rem] border border-jabutta-maroon/10 bg-jabutta-ivory shadow-sm transition hover:-translate-y-1 hover:shadow-card ${
                index === 0 || index === 3 ? "lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-jabutta-cream">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-2xl font-bold text-jabutta-deep">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-jabutta-brown">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
