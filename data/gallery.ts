export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "roti-pouch",
    title: "Roti Ketawa dalam standing pouch",
    description: "Rapi untuk camilan di rumah atau oleh-oleh.",
    image: "/images/roti-ketawa-1.jpg",
    alt: "Roti Ketawa Siantar dalam standing pouch",
  },
  {
    id: "roti-closeup",
    title: "Close-up Roti Ketawa",
    description: "Tekstur renyah dengan rasa manis gurih.",
    image: "/images/roti-ketawa-2.jpg",
    alt: "Close-up Roti Ketawa Siantar",
  },
  {
    id: "mie-bowl",
    title: "Mie Sop Medan paper bowl",
    description: "Hangat, gurih, dan lengkap dengan topping.",
    image: "/images/mie-sop-1.jpg",
    alt: "Mie Sop Medan dalam paper bowl",
  },
  {
    id: "mie-banyak",
    title: "Pesanan beberapa bowl Mie Sop",
    description: "Siap untuk arisan, partangiangan, dan kumpul keluarga.",
    image: "/images/mie-sop-2.jpg",
    alt: "Beberapa bowl Mie Sop Medan untuk acara",
  },
  {
    id: "packing",
    title: "Packing pesanan Jabutta",
    description: "Disiapkan rapi untuk pesanan kecil dan besar.",
    image: "/images/packing-jabutta.jpg",
    alt: "Packing pesanan Kedai Jabutta",
  },
];
