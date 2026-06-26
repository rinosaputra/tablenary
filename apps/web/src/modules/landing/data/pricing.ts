import type { PricingPlan } from "../types";

export const pricingData: PricingPlan[] = [
  {
    name: "Starter",
    description: "Perfect for small restaurants just getting started",
    monthlyPrice: 19,
    annualPrice: 190,
    features: [
      "Up to 50 menu items",
      "Basic analytics",
      "Email support",
      "1 staff account",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    description: "For growing restaurants with higher demand",
    monthlyPrice: 49,
    annualPrice: 490,
    features: [
      "Unlimited menu items",
      "Advanced analytics",
      "Priority support",
      "Up to 10 staff accounts",
      "Custom branding",
      "Multi-location support",
    ],
    popular: true,
    cta: "Get Professional",
  },
  {
    name: "Enterprise",
    description: "For large operations with custom needs",
    monthlyPrice: 99,
    annualPrice: 990,
    features: [
      "Everything in Professional",
      "Unlimited staff accounts",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "White-label options",
    ],
    cta: "Contact Sales",
  },
];
