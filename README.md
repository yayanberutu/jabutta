# Kedai Jabutta Web

Landing page promosi Kedai Jabutta untuk Mie Sop Medan dan Roti Ketawa Siantar di Jakarta. Website ini statis, tanpa backend, tanpa database, dan fokus pada pemesanan via WhatsApp.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Docker production build
- Caddy reverse proxy di VPS

## Install Local

```bash
npm install
```

## Run Development

```bash
npm run dev
```

Buka `http://localhost:3000`.

## Build Production

```bash
npm run build
npm run start
```

Default production server berjalan di `http://localhost:3000`.

## Run Dengan Docker

Build dan jalankan container:

```bash
docker compose up -d --build
```

Aplikasi Next.js berjalan di container port `3000` dan diekspos ke host port `3001`:

```yaml
ports:
  - "3001:3000"
```

Cek container:

```bash
docker compose ps
```

Lihat log aplikasi:

```bash
docker compose logs -f jabutta-web
```

Stop aplikasi:

```bash
docker compose down
```

## Deploy Ke VPS Dengan Docker + Caddy

1. Clone repository ke VPS.
2. Masuk ke folder project.
3. Jalankan Docker Compose:

```bash
docker compose up -d --build
```

4. Pastikan aplikasi bisa diakses dari VPS:

```bash
curl http://127.0.0.1:3001
```

5. Tambahkan konfigurasi Caddy untuk domain yang dipakai.

Deployment ini menggunakan Caddy sebagai reverse proxy utama.

## Contoh Caddyfile

Edit `/etc/caddy/Caddyfile`:

```caddyfile
jabutta.berutu.dev {
    reverse_proxy 127.0.0.1:3001
}
```

Validasi Caddyfile:

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
```

Reload Caddy:

```bash
sudo systemctl reload caddy
```

Lihat log Caddy jika terjadi error:

```bash
sudo journalctl -u caddy -f
```

## Hal Yang Perlu Diganti

- Domain sementara `jabutta.berutu.dev` di `lib/constants.ts`, metadata `app/layout.tsx`, dan Caddyfile.
- Foto produk di `public/images/`:
  - `hero-jabutta.jpg`
  - `roti-ketawa-1.jpg`
  - `roti-ketawa-2.jpg`
  - `mie-sop-1.jpg`
  - `mie-sop-2.jpg`
  - `packing-jabutta.jpg`
  - `og-image.jpg`
- Metadata SEO dan Open Graph di `app/layout.tsx` jika copy, domain, atau gambar utama berubah.
- Nomor WhatsApp di `lib/constants.ts` jika nomor berubah.
- Data produk, galeri, dan acara di folder `data/` jika menu atau harga berubah.
