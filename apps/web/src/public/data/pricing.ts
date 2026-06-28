import type { PricingFeature, PricingComparisonPlan } from "../types";

/**
 * Pricing feature rows for table comparison.
 * Order matters — last row is the CTA row.
 */
export const pricingFeatures: PricingFeature[] = [
  { key: "tableBuilder", label: "Table Builder" },
  { key: "formBuilder", label: "Form Builder" },
  { key: "chartBuilder", label: "Chart Builder" },
  { key: "localData", label: "Offline (IndexedDB)" },
  { key: "pdfBuilder", label: "PDF Builder" },
  { key: "cloudSync", label: "Cloud Sync" },
  { key: "importData", label: "Import Excel / CSV" },
  { key: "realtimeCollab", label: "Real-time Collaboration" },
  { key: "adminControls", label: "Admin Controls" },
  { key: "auditLog", label: "Audit Log" },
  { key: "prioritySupport", label: "Priority Email Support" },
  { key: "dedicatedManager", label: "Dedicated Success Manager" },
  { key: "slaGuarantee", label: "SLA 99.9% Uptime" },
];

/**
 * Pricing tiers — Tablenary (Table comparison format).
 */
export const pricingPlans: PricingComparisonPlan[] = [
  {
    name: "Free",
    price: "Rp0",
    period: "/tahun",
    features: {
      tableBuilder: true,
      formBuilder: true,
      chartBuilder: true,
      localData: true,
      pdfBuilder: false,
      cloudSync: false,
      importData: false,
      realtimeCollab: false,
      adminControls: false,
      auditLog: false,
      prioritySupport: false,
      dedicatedManager: false,
      slaGuarantee: false,
      cta: "Mulai Gratis",
    },
  },
  {
    name: "Pro",
    price: "Rp199.000",
    period: "/tahun",
    isPopular: true,
    features: {
      tableBuilder: true,
      formBuilder: true,
      chartBuilder: true,
      localData: true,
      pdfBuilder: true,
      cloudSync: true,
      importData: true,
      realtimeCollab: false,
      adminControls: false,
      auditLog: false,
      prioritySupport: true,
      dedicatedManager: false,
      slaGuarantee: false,
      cta: "Coba Pro Gratis",
    },
  },
  {
    name: "Team",
    price: "Rp599.000",
    period: "/tahun",
    features: {
      tableBuilder: true,
      formBuilder: true,
      chartBuilder: true,
      localData: true,
      pdfBuilder: true,
      cloudSync: true,
      importData: true,
      realtimeCollab: true,
      adminControls: true,
      auditLog: true,
      prioritySupport: true,
      dedicatedManager: true,
      slaGuarantee: true,
      cta: "Hubungi Tim Sales",
    },
  },
];
