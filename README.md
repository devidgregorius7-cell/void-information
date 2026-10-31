# Void Informations — Sidebar Navigation Prototype

**Tagline:** All Games. One Void.

## Isi versi ini
- Sidebar gelap dengan aksen oranye dan logo Void Informations.
- Navigasi halaman terpisah: Home, Game Database, New Games, Gaming News, Void AI, VIP Membership, Global Chat, Leaderboard, dan Contact.
- Sidebar dapat diciutkan pada desktop dan menjadi drawer pada perangkat mobile.
- Halaman VIP menampilkan akses Gratis serta 7 paket VIP. Paket maksimal: Rp87.000 untuk 2 tahun.
- Menu Login dan Register hanya berupa placeholder sampai backend autentikasi siap.
- Global Chat dan Leaderboard ditandai segera hadir; belum memakai database.
- Void AI masih preview; belum terhubung ke layanan AI.
- Pembayaran DANA masih melalui konfirmasi admin. Nomor akun pembayaran tidak ditampilkan di situs.

## File
- `index.html` — struktur halaman dan navigasi.
- `style.css` — tema gelap/oranye, layout sidebar, dan responsif mobile.
- `app.js` — navigasi halaman, filter game, tema, dan interaksi preview.

## Cara memperbarui GitHub Pages
1. Ekstrak ZIP ini.
2. Buka repository `void-information` di GitHub.
3. Upload dan timpa `index.html`, `style.css`, serta `app.js` dari folder `void_informations_v1`.
4. Commit ke branch `main`.
5. Tunggu GitHub Pages selesai memperbarui situs.

## Catatan keamanan dan fitur
GitHub Pages hanya meng-host file statis. Jangan memasukkan API key, password, PIN, OTP, atau kredensial pembayaran ke file frontend/repository publik. Login, registrasi, AI, pembayaran otomatis, aktivasi/masa berlaku VIP, chat realtime, leaderboard, dan Admin Panel membutuhkan backend/database yang aman. Sampai backend tersedia, tombol terkait hanya memberi keterangan dan tidak berpura-pura menjalankan transaksi.
