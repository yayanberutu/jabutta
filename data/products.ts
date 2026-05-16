import { productImages, type ImageAsset } from "@/data/images";
import { whatsappMessages } from "@/lib/whatsapp";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: ImageAsset;
  ctaLabel: string;
  whatsappMessage: string;
  highlights: string[];
};

export const products: Product[] = [
  {
    id: "roti-ketawa-siantar",
    name: "Roti Ketawa Siantar",
    description:
      "Camilan renyah dengan rasa manis gurih, cocok untuk teman cerita, kumpul keluarga, dan oleh-oleh.",
    price: "Rp20.000 / bungkus",
    image: productImages.rotiKetawaDisplay,
    ctaLabel: "Pesan Roti Ketawa",
    whatsappMessage: whatsappMessages.rotiKetawa,
    highlights: ["Renyah", "Manis gurih", "Cocok untuk oleh-oleh"],
  },
  {
    id: "mie-sop-medan",
    name: "Mie Sop Medan",
    description:
      "Hidangan hangat khas Medan dengan mie/bihun, ayam suwir, telur rebus, sambal hijau, dan kerupuk pink.",
    price: "Rp30.000 / porsi",
    image: productImages.mieSopCloseup,
    ctaLabel: "Pesan Mie Sop Medan",
    whatsappMessage: whatsappMessages.mieSop,
    highlights: ["Hangat", "Gurih nikmat", "Lengkap dengan topping"],
  },
];
