import type { PricingPlan } from "../types";

/**
 * Pricing tiers — Tablenary.
 * Annual-only billing (harga yang ditampilkan adalah harga tahunan per tahun).
 * Free: semua builder kecuali PDF. Pro: semua builder + cloud sync. Team: Pro + real-time collaboration.
 */
export const pricingData: PricingPlan[] = [
  {
    name: "Free",
    description: "Untuk individu yang ingin coba-coba tanpa komitmen",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "Table Builder — kelola data tabular",
      "Form Builder — input via form",
      "Chart Builder — visualisasi data",
      "Semua data tersimpan lokal (IndexedDB)",
      "Pakai offline tanpa batas",
      "Komunitas support",
    ],
    cta: "Mulai Gratis",
  },
  {
    name: "Pro",
    description: "Untuk profesional yang butuh output PDF dan cloud sync",
    monthlyPrice: 199_000,
    annualPrice: 199_000,
    features: [
      "Semua fitur Free",
      "PDF Builder — ekspor Table, Chart, dan Mail Merge",
      "Cloud sync otomatis antar perangkat",
      "Import dari Excel / CSV / Google Sheets",
      "Priority email support",
      "14 hari masa percobaan gratis",
    ],
    popular: true,
    cta: "Coba Pro Gratis",
  },
  {
    name: "Team",
    description: "Untuk tim yang butuh kolaborasi real-time",
    monthlyPrice: 599_000,
    annualPrice: 599_000,
    features: [
      "Semua fitur Pro",
      "Real-time collaboration (multi-user)",
      "Admin controls & role management",
      "Audit log aktivitas tim",
      "Dedicated success manager",
      "SLA guarantee 99.9% uptime",
    ],
    cta: "Hubungi Tim Sales",
  },
];
