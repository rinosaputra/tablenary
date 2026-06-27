/**
 * Community platform cards — Tablenary.
 */

import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandX,
  type TablerIcon,
} from "@tabler/icons-react";

export interface CommunityPlatform {
  icon: TablerIcon;
  name: string;
  description: string;
  href: string;
  members: string;
  accent: string;
  bgAccent: string;
}

export const communityPlatformsData: CommunityPlatform[] = [
  {
    icon: IconBrandDiscord,
    name: "Discord",
    description:
      "Diskusi real-time dengan komunitas Tablenary. Dapatkan bantuan cepat, berbagi tips, dan update terbaru dari tim pengembangan.",
    href: "https://discord.gg/tablenary",
    members: "2k+ Members",
    accent: "text-violet-600 dark:text-violet-400",
    bgAccent: "bg-violet-100 dark:bg-violet-500/20",
  },
  {
    icon: IconBrandGithub,
    name: "GitHub",
    description:
      "Laporkan bug, ajukan fitur baru, lihat kode sumber, dan berkontribusi pada project open-source Tablenary.",
    href: "https://github.com/tablenary",
    members: "500+ Stars",
    accent: "text-gray-700 dark:text-gray-300",
    bgAccent: "bg-gray-100 dark:bg-gray-500/20",
  },
  {
    icon: IconBrandX,
    name: "Twitter / X",
    description:
      "Ikuti update resmi Tablenary, tips & tricks, pengumuman fitur baru, dan showcase hasil karya komunitas.",
    href: "https://twitter.com/tablenary",
    members: "1k+ Followers",
    accent: "text-blue-600 dark:text-blue-400",
    bgAccent: "bg-blue-100 dark:bg-blue-500/20",
  },
];
