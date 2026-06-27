export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  popular?: boolean;
  cta: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LogoData {
  name: string;
  url: string;
  icon: React.ElementType;
}
