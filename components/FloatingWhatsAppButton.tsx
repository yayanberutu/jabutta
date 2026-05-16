import { createWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={createWhatsAppLink(whatsappMessages.general)}
      target="_blank"
      rel="noreferrer"
      aria-label="Pesan Kedai Jabutta via WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#1f8f4d] px-5 py-4 text-sm font-bold text-white shadow-soft transition hover:-translate-y-1 hover:bg-[#16783f] focus:outline-none focus:ring-4 focus:ring-[#1f8f4d]/30"
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5.5 18.5 6.6 15A7 7 0 1 1 9 17.4l-3.5 1.1Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.4 9.1c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.6 1.3c.1.3.1.5-.1.7l-.4.5c.5.9 1.2 1.6 2.2 2.1l.5-.4c.2-.2.5-.2.7-.1l1.3.6c.3.1.4.3.4.6v.5c0 .3-.1.6-.5.7-.5.2-1 .3-1.5.2-2.7-.4-5.1-2.8-5.4-5.4-.1-.5 0-.9.2-1.2Z"
          fill="currentColor"
        />
      </svg>
      <span className="hidden sm:inline">Pesan WhatsApp</span>
      <span className="sm:hidden">Pesan</span>
    </a>
  );
}
