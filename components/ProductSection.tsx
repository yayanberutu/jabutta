import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductSection() {
  return (
    <section id="produk" className="py-20 sm:py-24">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="section-kicker">Menu utama</p>
          <h2 className="section-title">Duo Favorit Jabutta</h2>
          <p className="section-copy">
            Dua rasa yang jadi alasan orang kembali: sop hangat khas Medan dan camilan renyah dari Siantar.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
