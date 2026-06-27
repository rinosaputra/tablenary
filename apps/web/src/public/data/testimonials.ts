import type { Testimonial } from "../types";

/**
 * Testimonials — Tablenary.
 * Persona: office workers (admin/finance/HR/researcher) yang bertransisi dari Excel/Google Sheets.
 */
export const testimonialsData: Testimonial[] = [
  {
    name: "Andini Pratiwi",
    role: "Finance Staff",
    company: "PT Distribusi Nusantara",
    avatar: "/placeholder.svg",
    content:
      "Dulu saya rekap laporan keuangan bulanan pakai Excel yang sering crash. Sekarang pakai Tablenary Form Builder — tim tinggal isi form, data langsung masuk ke Table, dan Chart Builder langsung bikin visualisasinya. Tidak perlu kirim file Excel bolak-balik.",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    role: "HR Coordinator",
    company: "Klinik Sehat Sentosa",
    avatar: "/placeholder.svg",
    content:
      "Paling suka karena datanya offline — kami di klinik sering mati lampu dan internet sering putus. Semua data absensi, lembur, dan cuti tetap aman di IndexedDB. PDF Builder juga praktis untuk cetak slip gaji bulanan.",
    rating: 5,
  },
  {
    name: "Citra Maharani",
    role: "Research Associate",
    company: "Lembaga Riset Independen",
    avatar: "/placeholder.svg",
    content:
      "Import data dari CSV hasil survey sangat mudah. Saya bisa langsung bikin form untuk enumerator lapangan, dan datanya otomatis masuk ke tabel. Chart Builder-nya cukup intuitif untuk quick analysis.",
    rating: 4.5,
  },
  {
    name: "Dimas Wibowo",
    role: "Admin Operasional",
    company: "CV Mitra Logistik",
    avatar: "/placeholder.svg",
    content:
      "Yang paling kerasa bedanya: tidak perlu minta IT untuk setup database. Saya bikin sendiri tabel inventaris, form untuk input stok masuk/keluar, dan PDF Builder untuk laporan mingguan ke direksi.",
    rating: 5,
  },
  {
    name: "Eka Putri",
    role: "Data Entry Lead",
    company: "Kantor Akuntan Publik",
    avatar: "/placeholder.svg",
    content:
      "Tim saya awalnya skeptis pindah dari Google Sheets, tapi Form Builder-nya yang terkoneksi langsung ke Table bikin workflow mereka jauh lebih cepat. Plus, tidak ada lagi masalah versi file yang bentrok.",
    rating: 4.5,
  },
];
