import { productImages, type ImageAsset } from "@/data/images";

export type GalleryImage = ImageAsset & {
  caption: string;
};

export const galleryImages: GalleryImage[] = [
  {
    ...productImages.mieSopCloseup,
    caption: "Mie Sop Medan hangat dengan kerupuk pink dan telur rebus",
  },
  {
    ...productImages.mieSopBanyak,
    caption: "Pesanan Mie Sop untuk acara dan kumpul keluarga",
  },
  {
    ...productImages.rotiKetawaDisplay,
    caption: "Roti Ketawa Siantar dalam standing pouch",
  },
  {
    ...productImages.rotiKetawaHandheld,
    caption: "Roti Ketawa siap jadi teman cerita",
  },
];
