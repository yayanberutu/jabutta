import { WHATSAPP_NUMBER } from "./constants";

export const whatsappMessages = {
  general: "Halo Kedai Jabutta, saya mau pesan menu Jabutta.",
  rotiKetawa: "Halo Kedai Jabutta, saya mau pesan Roti Ketawa Siantar.",
  mieSop: "Halo Kedai Jabutta, saya mau pesan Mie Sop Medan.",
  acara: "Halo Kedai Jabutta, saya mau tanya pesanan untuk acara.",
};

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
