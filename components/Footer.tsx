import { BRAND_NAME, INSTAGRAM_HANDLE, LOCATION, TAGLINE, WHATSAPP_DISPLAY } from "@/lib/constants";
import { createWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

const footerLinks = [
  { label: "Produk", href: "#produk" },
  { label: "Untuk Acara", href: "#acara" },
  { label: "Galeri", href: "#galeri" },
  { label: "Cara Pesan", href: "#cara-pesan" },
];

export default function Footer() {
  return (
    <footer id="kontak" className="border-t border-jabutta-maroon/10 bg-jabutta-deep py-12 text-jabutta-ivory">
      <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-jabutta-gold font-black text-jabutta-deep">J</span>
            <div>
              <h2 className="font-heading text-3xl font-bold">{BRAND_NAME}</h2>
              <p className="mt-1 text-jabutta-cream/80">{TAGLINE}</p>
            </div>
          </div>
          <p className="mt-6 max-w-md leading-8 text-jabutta-cream/80">
            Mie Sop Medan hangat dan Roti Ketawa Siantar renyah untuk keluarga, anak rantau, dan momen kumpul di Jakarta.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-2xl font-bold">Navigasi</h3>
          <div className="mt-4 grid gap-3">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-jabutta-cream/80 transition hover:text-jabutta-gold">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-2xl font-bold">Kontak</h3>
          <div className="mt-4 grid gap-3 text-jabutta-cream/80">
            <a href={createWhatsAppLink(whatsappMessages.general)} target="_blank" rel="noreferrer" className="transition hover:text-jabutta-gold">
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
            <p>
              Instagram:{" "}
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-jabutta-gold"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </p>
            <p>{LOCATION}</p>
            <p className="font-bold text-jabutta-gold">Menerima pesanan partai kecil & besar</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
