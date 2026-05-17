import { createWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

const steps = [
  "Klik tombol WhatsApp",
  "Pilih menu dan jumlah pesanan",
  "Konfirmasi jadwal pengambilan / pengiriman",
  "Pesanan disiapkan oleh Kedai Jabutta",
];

export default function OrderStepsSection() {
  return (
    <section id="cara-pesan" className="py-20 sm:py-24">
      <div className="container-page">
        <div className="grid gap-10 rounded-[2rem] border border-jabutta-maroon/10 bg-jabutta-ivory p-6 shadow-card sm:p-10 lg:grid-cols-[0.75fr_1fr] lg:p-12">
          <div>
            <p className="section-kicker">Cara pesan</p>
            <h2 className="section-title">Pesan langsung tanpa checkout ribet.</h2>
            <p className="section-copy">
              Website ini dibuat untuk mempercepat pemesanan. Klik WhatsApp, tulis kebutuhanmu, lalu Jabutta bantu siapkan.
            </p>
            <a href={createWhatsAppLink(whatsappMessages.general)} target="_blank" rel="noreferrer" className="btn-primary mt-7">
              Pesan Sekarang via WhatsApp
            </a>
          </div>

          <ol className="grid gap-4">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-4 rounded-3xl border border-jabutta-maroon/10 bg-jabutta-cream/70 p-4 sm:p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-jabutta-maroon font-heading text-xl font-bold text-white">
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-jabutta-deep break-words">{step}</h3>
                  <p className="mt-1 text-sm leading-6 text-jabutta-brown">
                    {index === 0
                      ? "Tombol di halaman ini sudah berisi pesan awal agar chat lebih cepat."
                      : "Tim Jabutta akan menyesuaikan detail pesanan dan waktu yang kamu butuhkan."}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
