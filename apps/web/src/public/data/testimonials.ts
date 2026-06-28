import type { TestimonialItem } from "../types";

/**
 * Testimonials — Tablenary (TestimonialItem format — testimonials-component-20).
 * Platform badges sourced from shadcncdn.
 */

const CDN = "https://cdn.shadcnstudio.com/ss-assets/brand-logo";

export const testimonialsData: TestimonialItem[] = [
  {
    name: "Andini Pratiwi",
    handle: "@andini_p",
    avatar: "/placeholder.svg",
    rating: 5,
    title: "Rekap laporan jadi jauh lebih mudah",
    content:
      "Dulu saya rekap laporan keuangan bulanan pakai Excel yang sering crash. Sekarang pakai Tablenary Form Builder — tim tinggal isi form, data langsung masuk ke Table, dan Chart Builder langsung bikin visualisasinya. Tidak perlu kirim file Excel bolak-balik.",
    platformName: "Trustpilot",
    platformImage: `${CDN}/trustpilot`,
  },
  {
    name: "Budi Santoso",
    handle: "@budisantoso",
    avatar: "/placeholder.svg",
    rating: 5,
    title: "Data offline tetap aman di IndexedDB",
    content:
      "Paling suka karena datanya offline — kami di klinik sering mati lampu dan internet sering putus. Semua data absensi, lembur, dan cuti tetap aman di IndexedDB. PDF Builder juga praktis untuk cetak slip gaji bulanan.",
    platformName: "G2",
    platformImage: `${CDN}/g2`,
  },
  {
    name: "Citra Maharani",
    handle: "@citra_m",
    avatar: "/placeholder.svg",
    rating: 4.5,
    title: "Import CSV dan bikin form untuk enumerator",
    content:
      "Import data dari CSV hasil survey sangat mudah. Saya bisa langsung bikin form untuk enumerator lapangan, dan datanya otomatis masuk ke tabel. Chart Builder-nya cukup intuitif untuk quick analysis.",
    platformName: "Twitter",
    platformImage: `${CDN}/twitter-icon.png`,
  },
  {
    name: "Dimas Wibowo",
    handle: "@dimas_w",
    avatar: "/placeholder.svg",
    rating: 5,
    title: "Tidak perlu minta IT untuk setup database",
    content:
      "Yang paling kerasa bedanya: tidak perlu minta IT untuk setup database. Saya bikin sendiri tabel inventaris, form untuk input stok masuk/keluar, dan PDF Builder untuk laporan mingguan ke direksi.",
    platformName: "G2",
    platformImage: `${CDN}/g2`,
  },
  {
    name: "Eka Putri",
    handle: "@ekaputri",
    avatar: "/placeholder.svg",
    rating: 4.5,
    title: "Form Builder terkoneksi langsung ke Table",
    content:
      "Tim saya awalnya skeptis pindah dari Google Sheets, tapi Form Builder-nya yang terkoneksi langsung ke Table bikin workflow mereka jauh lebih cepat. Plus, tidak ada lagi masalah versi file yang bentrok.",
    platformName: "Trustpilot",
    platformImage: `${CDN}/trustpilot`,
  },
];
