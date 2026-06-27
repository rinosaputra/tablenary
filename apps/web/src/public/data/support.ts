/**
 * Help & Support categories for the Support page — Tablenary.
 */

import {
  BookOpenIcon,
  CreditCardIcon,
  HeadphonesIcon,
  KeyIcon,
  MessageCircleIcon,
  RocketIcon,
  SettingsIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react";

export interface HelpCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  color: string;
}

export const helpCategoriesData: HelpCategory[] = [
  {
    icon: RocketIcon,
    title: "Getting Started",
    description:
      "Panduan memulai Tablenary dari nol: registrasi, setup project pertama, dan navigasi dasar.",
    href: "/docs/getting-started",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
  },
  {
    icon: BookOpenIcon,
    title: "Table Builder",
    description:
      "Cara membuat dan mengelola tabel, relasi, filter, dan operasi CRUD di Table Builder.",
    href: "/docs/table-builder",
    color: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
  },
  {
    icon: KeyIcon,
    title: "Form Builder",
    description:
      "Membangun form input custom, validasi, dan koneksi ke Table Builder untuk pengumpulan data.",
    href: "/docs/form-builder",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
  },
  {
    icon: SettingsIcon,
    title: "Chart Builder",
    description:
      "Visualisasi data: bar, line, pie, scatter plots, dan konfigurasi tema grafik.",
    href: "/docs/chart-builder",
    color: "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
  },
  {
    icon: CreditCardIcon,
    title: "Billing & Subscription",
    description:
      "Informasi pricing, cara upgrade/downgrade, pembayaran, dan kebijakan refund.",
    href: "/pricing",
    color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
  },
  {
    icon: HeadphonesIcon,
    title: "Troubleshooting",
    description:
      "Solusi masalah umum: IndexedDB full, import gagal, sync error, dan performa.",
    href: "/faq",
    color: "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
  },
  {
    icon: UsersIcon,
    title: "Team Collaboration",
    description:
      "Fitur untuk pengguna Team: invite member, role management, audit log, dan sharing.",
    href: "#",
    color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300",
  },
  {
    icon: MessageCircleIcon,
    title: "Contact Support",
    description:
      "Butuh bantuan lebih lanjut? Hubungi tim kami melalui form kontak atau email.",
    href: "/contact",
    color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300",
  },
];
