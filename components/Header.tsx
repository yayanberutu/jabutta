"use client";

import { useState } from "react";
import { BRAND_NAME } from "@/lib/constants";
import { createWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

const navItems = [
  { label: "Produk", href: "#produk" },
  { label: "Untuk Acara", href: "#acara" },
  { label: "Galeri", href: "#galeri" },
  { label: "Cara Pesan", href: "#cara-pesan" },
  { label: "Kontak", href: "#kontak" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappHref = createWhatsAppLink(whatsappMessages.general);

  return (
    <header className="sticky top-0 z-50 border-b border-jabutta-maroon/10 bg-jabutta-cream/90 backdrop-blur-xl">
      <div className="container-page flex min-h-20 items-center justify-between gap-4">
        <a href="#hero" className="group inline-flex items-center gap-3" aria-label="Kembali ke hero">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-jabutta-maroon text-lg font-black text-jabutta-ivory shadow-card transition group-hover:bg-jabutta-deep">
            J
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-2xl font-bold text-jabutta-deep">{BRAND_NAME}</span>
            <span className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-jabutta-gold">
              Sumut di Jakarta
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-jabutta-brown transition hover:text-jabutta-maroon">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-primary">
            Pesan Sekarang
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-jabutta-maroon/15 bg-jabutta-ivory text-jabutta-maroon shadow-sm lg:hidden"
          aria-label="Buka menu navigasi"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition ${isOpen ? "top-2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition ${isOpen ? "top-2 -rotate-45" : "top-4"}`} />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-jabutta-maroon/10 bg-jabutta-ivory px-5 pb-5 pt-3 shadow-card lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2" aria-label="Navigasi mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-jabutta-brown hover:bg-jabutta-cream hover:text-jabutta-maroon"
              >
                {item.label}
              </a>
            ))}
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-primary mt-2 w-full" onClick={() => setIsOpen(false)}>
              Pesan Sekarang
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
