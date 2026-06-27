/**
 * Contact form fields, subject options, and contact info — Tablenary.
 */

export const contactSubjects = [
  { value: "general", label: "Pertanyaan Umum" },
  { value: "billing", label: "Billing & Pembayaran" },
  { value: "technical", label: "Masalah Teknis" },
  { value: "feedback", label: "Feedback / Saran" },
  { value: "partnership", label: "Kerja Sama / Partnership" },
  { value: "other", label: "Lainnya" },
] as const;

export interface ContactInfo {
  icon: string;
  title: string;
  content: string;
  accent: string;
}

export const contactInfoData: ContactInfo[] = [
  {
    icon: "✉️",
    title: "Email",
    content: "hello@tablenary.id",
    accent: "text-blue-500",
  },
  {
    icon: "⏱️",
    title: "Waktu Respon",
    content: "Maks. 1×24 jam kerja (Hari Senin–Jumat, 09:00–18:00 WIB)",
    accent: "text-emerald-500",
  },
  {
    icon: "💬",
    title: "Komunitas Discord",
    content: "Gabung diskusi di Discord kami untuk bantuan cepat dari sesama pengguna",
    accent: "text-violet-500",
  },
];
