import {
  BarChart3Icon,
  BellIcon,
  CheckIcon,
  ShieldIcon,
  SmartphoneIcon,
  ZapIcon,
  type LucideIcon,
} from "lucide-react";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  cardBorderColor: string;
  avatarTextColor: string;
  avatarBgColor: string;
}

export const featuresData: FeatureItem[] = [
  {
    icon: ZapIcon,
    title: "Instant Setup",
    description:
      "Get your restaurant up and running in minutes. No technical skills required — our intuitive setup wizard guides you through every step.",
    cardBorderColor: "hover:border-primary",
    avatarTextColor: "text-primary",
    avatarBgColor: "bg-primary/10",
  },
  {
    icon: SmartphoneIcon,
    title: "Mobile-First Design",
    description:
      "Manage your business on the go. Our platform is fully optimized for mobile devices, so you can take orders and update menus anywhere.",
    cardBorderColor: "hover:border-chart-1",
    avatarTextColor: "text-chart-1",
    avatarBgColor: "bg-chart-1/10",
  },
  {
    icon: BarChart3Icon,
    title: "Real-Time Analytics",
    description:
      "Track sales, monitor trends, and understand customer behavior with our comprehensive analytics dashboard.",
    cardBorderColor: "hover:border-chart-2",
    avatarTextColor: "text-chart-2",
    avatarBgColor: "bg-chart-2/10",
  },
  {
    icon: BellIcon,
    title: "Smart Notifications",
    description:
      "Stay informed with real-time alerts for new orders, low inventory, and important customer interactions.",
    cardBorderColor: "hover:border-chart-3",
    avatarTextColor: "text-chart-3",
    avatarBgColor: "bg-chart-3/10",
  },
  {
    icon: ShieldIcon,
    title: "Bank-Grade Security",
    description:
      "Your data is protected with enterprise-level encryption, PCI compliance, and regular security audits.",
    cardBorderColor: "hover:border-chart-4",
    avatarTextColor: "text-chart-4",
    avatarBgColor: "bg-chart-4/10",
  },
  {
    icon: CheckIcon,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to help you succeed with personalized guidance.",
    cardBorderColor: "hover:border-chart-5",
    avatarTextColor: "text-chart-5",
    avatarBgColor: "bg-chart-5/10",
  },
];


// ---------------------------------------------------------------------------
// Features-Section 22 data (RealTime, EarningReport, SocialMedia)
// ---------------------------------------------------------------------------

import type {
  RealTimeDataItem,
  EarningReportItem,
  EarningReportChartItem,
  SocialMediaItem,
} from "../types";

export const defaultRealTimeData: RealTimeDataItem[] = [
  {
    title: "Users",
    badgeContent: "Last 6 months",
    value: "8.14k",
    changePercentage: 18.2,
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="20" r="10" className="fill-primary/20" />
        <path d="M12 52c0-11.046 8.954-20 20-20s20 8.954 20 20" className="stroke-primary/20" strokeWidth="4" />
      </svg>
    ),
  },
  {
    title: "Sessions",
    badgeContent: "Last month",
    value: "12.2k",
    changePercentage: -25.5,
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="24" className="stroke-primary/20" strokeWidth="4" />
        <path d="M32 16v16l10 10" className="stroke-primary/40" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Customers",
    badgeContent: "Daily customers",
    value: "42.4k",
    changePercentage: 9.2,
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="16" width="48" height="32" rx="4" className="fill-primary/10 stroke-primary/20" strokeWidth="2" />
        <circle cx="32" cy="32" r="6" className="fill-primary/30" />
      </svg>
    ),
  },
  {
    title: "Total Orders",
    badgeContent: "Last week",
    value: "42.5k",
    changePercentage: 10.8,
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <path d="M12 20h40l-4 24H16L12 20z" className="fill-primary/10 stroke-primary/20" strokeWidth="2" />
        <circle cx="24" cy="50" r="4" className="fill-primary/30" />
        <circle cx="40" cy="50" r="4" className="fill-primary/30" />
      </svg>
    ),
  },
];

export const defaultEarningReportData: EarningReportItem[] = [
  {
    icon: <></>,
    title: "Revenue",
    department: "Sales",
    value: "$1,623",
    trend: "up",
    percentage: 20.3,
  },
  {
    icon: <></>,
    title: "Income",
    department: "Affiliation",
    value: "$5,600",
    trend: "up",
    percentage: 16.2,
  },
  {
    icon: <></>,
    title: "Expense",
    department: "Marketing",
    value: "$3,200",
    trend: "up",
    percentage: 10.5,
  },
];

export const defaultEarningReportChartData: EarningReportChartItem[] = [
  { day: "Mon", earning: 48, fill: "color-mix(in oklab, var(--primary) 10%, transparent)" },
  { day: "Tue", earning: 147, fill: "color-mix(in oklab, var(--primary) 10%, transparent)" },
  { day: "Wed", earning: 106, fill: "color-mix(in oklab, var(--primary) 10%, transparent)" },
  { day: "Thu", earning: 180, fill: "var(--primary)" },
  { day: "Fri", earning: 75, fill: "color-mix(in oklab, var(--primary) 10%, transparent)" },
  { day: "Sat", earning: 60, fill: "color-mix(in oklab, var(--primary) 10%, transparent)" },
  { day: "Sun", earning: 128, fill: "color-mix(in oklab, var(--primary) 10%, transparent)" },
];

export const defaultSocialMediaData: SocialMediaItem[] = [
  { image: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/instagram-icon.png", name: "Instagram" },
  { image: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/twitter-icon.png", name: "Twitter" },
  { image: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/facebook-icon.png", name: "Facebook" },
  { image: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/linkdin-icon.png", name: "LinkedIn" },
  { image: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/github-white.png", name: "Github" },
];
