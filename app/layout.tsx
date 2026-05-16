import type { Metadata, Viewport } from "next";
import "./globals.css";
import { openGraphImage } from "@/data/images";
import { BRAND_NAME, SITE_URL, TAGLINE } from "@/lib/constants";

const title = "Kedai Jabutta - Mie Sop Medan & Roti Ketawa Siantar di Jakarta";
const description =
  "Nikmati Mie Sop Medan hangat dan Roti Ketawa Siantar renyah dari Kedai Jabutta. Cocok untuk arisan, partangiangan, kumpul keluarga, dan rindu kampung halaman.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "Kedai Jabutta",
    "Mie Sop Medan Jakarta",
    "Roti Ketawa Siantar Jakarta",
    "Makanan khas Sumatera Utara Jakarta",
    "Makanan khas Medan Jakarta",
    "Roti Ketawa",
    "Partangiangan",
    "Arisan keluarga",
  ],
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: BRAND_NAME,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: openGraphImage.src,
        width: openGraphImage.width,
        height: openGraphImage.height,
        alt: `${BRAND_NAME} - ${TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [openGraphImage.src],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#6b1f28",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
