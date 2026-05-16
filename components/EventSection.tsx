import type { EventUseCase } from "@/data/events";
import { eventUseCases } from "@/data/events";
import { createWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

function EventIcon({ icon }: { icon: EventUseCase["icon"] }) {
  const common = "h-7 w-7";

  if (icon === "plate") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (icon === "cross") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 4v16M7 9h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "home") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 11.5 12 5l8 6.5V20H6v-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "cup") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 8h10v5a5 5 0 0 1-10 0V8Zm10 2h1.5a2.5 2.5 0 0 1 0 5H16M7 20h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "briefcase") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 8V6h8v2m-11 3h14v8H5v-8Zm0 0V8h14v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 10h14v10H5V10Zm7 0v10M4 7h16v3H4V7Zm8 0s-1-4-4-3c-2 1 0 3 4 3Zm0 0s1-4 4-3c2 1 0 3-4 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function EventSection() {
  return (
    <section id="acara" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-x-0 top-12 -z-10 h-72 bg-jabutta-maroon/5" />
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="section-kicker">Untuk momen kumpul</p>
            <h2 className="section-title">Cocok untuk Kumpul dan Acara Keluarga</h2>
          </div>
          <div>
            <p className="section-copy mt-0">
              Mau pesan untuk acara kecil atau besar? Jabutta siap bantu siapkan hidangan hangat dan camilan renyah untuk
              momen kumpulmu.
            </p>
            <a href={createWhatsAppLink(whatsappMessages.acara)} target="_blank" rel="noreferrer" className="btn-primary mt-6">
              Konsultasi Pesanan via WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {eventUseCases.map((item) => (
            <article key={item.title} className="rounded-3xl border border-jabutta-maroon/10 bg-jabutta-ivory p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-jabutta-maroon text-jabutta-ivory">
                <EventIcon icon={item.icon} />
              </div>
              <h3 className="mt-5 font-heading text-2xl font-bold text-jabutta-deep">{item.title}</h3>
              <p className="mt-2 leading-7 text-jabutta-brown">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
