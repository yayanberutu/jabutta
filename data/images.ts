export type ImageAsset = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition: string;
  aspectClass: string;
};

export const productImages = {
  mieSopCloseup: {
    id: "mie-sop-closeup",
    src: "/images/mie-sop-closeup.jpeg",
    alt: "Mie Sop Medan Kedai Jabutta dengan telur rebus, ayam suwir, sambal hijau, dan kerupuk pink",
    width: 1219,
    height: 1140,
    objectPosition: "center",
    aspectClass: "aspect-[1219/1140]",
  },
  mieSopBanyak: {
    id: "mie-sop-banyak",
    src: "/images/mie-sop-banyak.jpeg",
    alt: "Pesanan Mie Sop Medan Kedai Jabutta dalam banyak paper bowl untuk arisan dan acara keluarga",
    width: 1152,
    height: 1536,
    objectPosition: "center",
    aspectClass: "aspect-[3/4]",
  },
  rotiKetawaDisplay: {
    id: "roti-ketawa-display",
    src: "/images/roti-ketawa-display.jpeg",
    alt: "Roti Ketawa Siantar Kedai Jabutta dalam standing pouch transparan",
    width: 1152,
    height: 1536,
    objectPosition: "center",
    aspectClass: "aspect-[3/4]",
  },
  rotiKetawaHandheld: {
    id: "roti-ketawa-handheld",
    src: "/images/roti-ketawa-handheld.jpeg",
    alt: "Roti Ketawa Siantar Kedai Jabutta dalam kemasan pouch yang siap dipesan",
    width: 1152,
    height: 1536,
    objectPosition: "center",
    aspectClass: "aspect-[3/4]",
  },
} satisfies Record<string, ImageAsset>;

export const openGraphImage = productImages.rotiKetawaDisplay;
