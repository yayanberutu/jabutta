import Image from "next/image";
import type { Product } from "@/data/products";
import { createWhatsAppLink } from "@/lib/whatsapp";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const image = product.image;

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-jabutta-maroon/10 bg-jabutta-ivory shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <div className={`relative ${image.aspectClass} overflow-hidden bg-jabutta-cream`}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 42vw, 92vw"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          style={{ objectPosition: image.objectPosition }}
        />
        <div className="absolute left-5 top-5 rounded-full bg-jabutta-maroon px-4 py-2 text-sm font-bold text-white shadow-card">
          {product.price}
        </div>
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="font-heading text-3xl font-bold text-jabutta-deep sm:text-4xl">{product.name}</h3>
        <p className="mt-4 text-base leading-8 text-jabutta-brown">{product.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.highlights.map((highlight) => (
            <span key={highlight} className="rounded-full border border-jabutta-gold/20 bg-jabutta-cream px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-jabutta-brown">
              {highlight}
            </span>
          ))}
        </div>
        <a href={createWhatsAppLink(product.whatsappMessage)} target="_blank" rel="noreferrer" className="btn-primary mt-7 w-full sm:w-auto">
          {product.ctaLabel}
        </a>
      </div>
    </article>
  );
}
