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
