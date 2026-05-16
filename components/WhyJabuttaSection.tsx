import Image from "next/image";
import { productImages } from "@/data/images";

const reasons = [
  {
    title: "Rasa yang Mengingatkan Kampung",
    text: "Menu dibuat untuk menghadirkan rasa rumahan khas Sumatera Utara.",
  },
  {
    title: "Cocok untuk Banyak Momen",
    text: "Pas untuk camilan harian, arisan, partangiangan, dan acara keluarga.",
  },
  {
    title: "Pesan Mudah via WhatsApp",
    text: "Tinggal chat, pilih menu, tentukan jumlah, lalu konfirmasi pesanan.",
  },
];

const reasonImage = productImages.rotiKetawaHandheld;

export default function WhyJabuttaSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <div className="rounded-[2rem] border border-jabutta-maroon/10 bg-jabutta-deep p-6 text-jabutta-ivory shadow-soft sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-jabutta-gold">Kenapa Jabutta?</p>
              <h2 className="mt-3 font-heading text-4xl font-bold leading-tight sm:text-5xl">Dekat, hangat, dan siap menemani meja kumpul.</h2>
              <div className="mt-8 max-w-sm rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-2 shadow-card">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.35rem] bg-jabutta-cream">
                  <Image
                    src={reasonImage.src}
                    alt={reasonImage.alt}
                    width={reasonImage.width}
                    height={reasonImage.height}
                    sizes="(min-width: 1024px) 22vw, 80vw"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: reasonImage.objectPosition }}
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {reasons.map((reason, index) => (
                <article key={reason.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                  <span className="text-sm font-bold text-jabutta-gold">0{index + 1}</span>
                  <h3 className="mt-4 font-heading text-2xl font-bold">{reason.title}</h3>
                  <p className="mt-3 leading-7 text-jabutta-cream/80">{reason.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
