import Image from "next/image";
import { productImages } from "@/data/images";
import { BRAND_NAME, TAGLINE } from "@/lib/constants";
import { createWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

const heroStats = ["Mie Sop Medan", "Roti Ketawa Siantar", "Siap acara keluarga"];
const mainImage = productImages.mieSopCloseup;
const supportingImage = productImages.rotiKetawaDisplay;

export default function HeroSection() {
  return (
    <section id="hero" className="relative isolate overflow-hidden pb-20 pt-12 sm:pt-16 lg:pb-28">
      <div className="absolute left-0 top-16 -z-10 h-72 w-72 rounded-full bg-jabutta-gold/15 blur-3xl" />
      <div className="absolute bottom-10 right-0 -z-10 h-96 w-96 rounded-full bg-jabutta-maroon/10 blur-3xl" />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="section-kicker">{BRAND_NAME}</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-[0.95] text-jabutta-deep sm:text-6xl lg:text-7xl">
            {TAGLINE}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-jabutta-brown sm:text-xl">
            Nikmati Mie Sop Medan hangat dan Roti Ketawa Siantar renyah dari Kedai Jabutta. Cocok untuk teman kumpul,
            arisan, partangiangan, dan mengobati rindu kampung halaman.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={createWhatsAppLink(whatsappMessages.general)} target="_blank" rel="noreferrer" className="btn-primary">
              Pesan via WhatsApp
            </a>
            <a href="#produk" className="btn-secondary">
              Lihat Menu
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item} className="rounded-3xl border border-jabutta-maroon/10 bg-jabutta-ivory/75 px-4 py-4 shadow-sm">
                <span className="block text-xs font-bold uppercase tracking-[0.18em] text-jabutta-gold">Favorit</span>
                <span className="mt-1 block font-heading text-xl font-bold text-jabutta-deep">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl pb-12 sm:pb-16">
          <div className="absolute -left-4 top-8 h-24 w-24 rounded-full border border-jabutta-gold/40 sm:-left-8" />
          <div className="absolute -right-4 bottom-16 h-32 w-32 rounded-full bg-jabutta-maroon/10" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-jabutta-ivory p-3 shadow-soft">
            <div className="relative aspect-[1219/1140] overflow-hidden rounded-[1.5rem] bg-jabutta-cream">
              <Image
                src={mainImage.src}
                alt={mainImage.alt}
                width={mainImage.width}
                height={mainImage.height}
                priority
                sizes="(min-width: 1024px) 46vw, 92vw"
                className="h-full w-full object-cover"
                style={{ objectPosition: mainImage.objectPosition }}
              />
              <div className="absolute inset-x-4 bottom-4 rounded-3xl border border-white/60 bg-jabutta-ivory/90 p-4 shadow-card backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-jabutta-gold">Siap dipesan</p>
                <p className="mt-1 font-heading text-2xl font-bold text-jabutta-deep">Hangat, renyah, rumahan.</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-1 right-4 w-36 rounded-3xl border border-jabutta-maroon/10 bg-jabutta-ivory p-2 shadow-card sm:-bottom-2 sm:right-auto sm:left-4 sm:w-48">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-jabutta-cream">
              <Image
                src={supportingImage.src}
                alt={supportingImage.alt}
                width={supportingImage.width}
                height={supportingImage.height}
                sizes="(min-width: 640px) 12rem, 9rem"
                className="h-full w-full object-cover"
                style={{ objectPosition: supportingImage.objectPosition }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
