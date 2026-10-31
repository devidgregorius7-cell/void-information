# Void Informations V1.0 — Prototype

Ini adalah prototype frontend statis untuk proyek Void Informations.

## Cara mencoba
1. Ekstrak file ZIP.
2. Buka `index.html` di browser.
3. Coba pencarian, filter platform/kategori, tombol bahasa, dan tema.

## Yang sudah berfungsi
- Tampilan responsive untuk HP dan desktop.
- Pencarian lokal pada contoh game.
- Filter kategori contoh.
- Toggle Dark Mode / Light Mode (preferensi disimpan di browser).
- Toggle bahasa Indonesia / Inggris untuk teks utama.
- Tampilan Void AI Chatbot dengan kolom pesan dan saran pertanyaan (masih preview, belum terhubung ke model AI).
- Navigasi menu mobile.

## Yang masih berupa demo
- Void AI belum terhubung ke model AI.
- Artikel masih konten contoh, belum dibuat otomatis.
- Database game masih data contoh lokal.
- Login, registrasi, database, dan panel admin belum dibuat.
- Account Market belum menerima transaksi atau data akun.

## Void AI Chatbot
Chat UI sudah ditambahkan sebagai prototype. Saat ini pengiriman pesan hanya menampilkan pemberitahuan bahwa backend AI belum aktif; tidak ada jawaban AI palsu. Untuk mengaktifkan AI sungguhan, siapkan backend/serverless function dan simpan API key hanya sebagai secret di sisi server. Jangan pernah menaruh API key di `app.js` atau file frontend.

## Tahap berikutnya
Untuk website online dengan AI dan admin sungguhan, proyek perlu backend, database, autentikasi admin, API AI yang disimpan aman di server, serta sumber data game yang dapat diverifikasi. Jangan menaruh API key rahasia di file JavaScript frontend.

Email kontak admin pada prototype: `xNyxenvo.id@gmail.com`. WhatsApp, Discord, dan tautan grup masih menunggu detail kontak resmi.


## New Games 2026
Homepage includes an initial cross-platform release tracker with selected PC, console, Android and iOS releases. Dates and availability can change; every entry links to a source. This is a curated starter batch, not a complete worldwide game database.

### Updating release information
Check publisher/developer announcements before changing a date or marking a game as released. Keep regional launch restrictions visible and do not present unconfirmed dates as facts.
