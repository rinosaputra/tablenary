import type { FAQItem } from "../types";

/**
 * FAQ — Tablenary.
 * Topik: definisi produk, 4 builder, IndexedDB storage, privacy, import, offline limits, pricing, support.
 */
export const faqData: FAQItem[] = [
  {
    question: "Apa itu Tablenary?",
    answer:
      "Tablenary adalah toolkit data tanpa coding (no-code) untuk pengguna yang terbiasa dengan Excel atau Google Sheets. Terdiri dari 4 builder: Table Builder (kelola data tabular), Form Builder (input via form), Chart Builder (visualisasi), dan PDF Builder (ekspor ke PDF). Data Anda tersimpan lokal di browser — tidak perlu setup server atau database.",
  },
  {
    question: "Dimana data saya disimpan?",
    answer:
      "Semua data Anda tersimpan di IndexedDB browser, yang artinya data tersebut ada di perangkat Anda — bukan di server kami. Pendekatan ini disebut local-first: aplikasi tetap jalan tanpa internet, dan Anda memegang kontrol penuh atas data. Untuk pengguna Pro dan Team, data bisa disinkronkan ke cloud secara opsional.",
  },
  {
    question: "Apakah data saya aman dan privat?",
    answer:
      "Sangat privat. Karena data tersimpan lokal di IndexedDB, data tidak pernah dikirim ke server kecuali Anda mengaktifkan cloud sync (hanya di Pro/Team). Bahkan saat cloud sync aktif, data dienkripsi end-to-end dan hanya Anda yang punya kuncinya.",
  },
  {
    question: "Apakah saya perlu internet untuk pakai Tablenary?",
    answer:
      "Tidak. Semua builder di Tablenary bisa dipakai 100% offline. Anda bisa bikin tabel, isi form, bikin chart, dan ekspor PDF tanpa koneksi internet. Internet hanya dibutuhkan untuk: (1) cloud sync di Pro/Team, dan (2) real-time collaboration di tier Team.",
  },
  {
    question: "Bisakah saya import data dari Excel, CSV, atau Google Sheets?",
    answer:
      "Ya. Tablenary mendukung import langsung dari file Excel (.xlsx), CSV, dan Google Sheets (via export CSV). Data akan masuk ke Table Builder dan langsung bisa dikoneksikan ke Form, Chart, dan PDF Builder. Fitur ini tersedia di semua tier, termasuk Free.",
  },
  {
    question: "Apa saja keterbatasan Tablenary di mode offline?",
    answer:
      "Di mode offline (tanpa internet): semua builder tetap jalan penuh. Yang tidak tersedia adalah cloud sync antar perangkat (fitur Pro/Team) dan real-time collaboration (fitur Team). Sisanya — Table, Form, Chart, PDF Builder — bekerja 100% offline.",
  },
  {
    question: "Berapa harga Tablenary?",
    answer:
      "Tablenary punya 3 tier: Free (Rp 0, semua builder kecuali PDF), Pro (Rp 199.000/tahun, termasuk PDF Builder dan cloud sync), dan Team (Rp 599.000/tahun, termasuk real-time collaboration dan admin controls). Pembayaran tahunan — tidak ada tagihan bulanan.",
  },
  {
    question: "Apakah ada masa coba gratis?",
    answer:
      "Ya. Tier Pro bisa dicoba gratis selama 14 hari tanpa kartu kredit. Setelah masa coba, Anda bisa kembali ke Free atau lanjutkan ke Pro/Team. Tidak ada auto-charge diam-diam.",
  },
  {
    question: "Bagaimana cara mendapatkan dukungan teknis?",
    answer:
      "Pengguna Free mendapat akses ke community forum dan dokumentasi. Pengguna Pro mendapat priority email support dengan respon 1×24 jam kerja. Pengguna Team mendapat dedicated success manager plus SLA guarantee 99.9% uptime untuk cloud sync.",
  },
];
