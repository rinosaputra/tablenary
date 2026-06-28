# Tablenary Index Page — Component References

IndexPage (`src/public/pages/index-page.tsx`) komposisi 7 marketing block, masing-masing di-adapt dari shadcn-ui-studio blocks versi `*-01`.

## Component Mapping

| Component           | Import Path                        | Source Block                                           | Adapted File                                    |
| ------------------- | ---------------------------------- | ------------------------------------------------------ | ----------------------------------------------- |
| HeroSection         | `../components/hero-section`       | `shadcn-studio/blocks/hero-section-01`                 | `nextjs/components/shadcn-studio/blocks/hero-section-01/hero-section-01.tsx` |
| LogoCloud           | `../components/logo-cloud`         | `shadcn-studio/blocks/logo-cloud-01`                   | `nextjs/components/shadcn-studio/blocks/logo-cloud-01/logo-cloud-01.tsx` |
| FeaturesSection     | `../components/features-section`   | `shadcn-studio/blocks/features-section-01`             | `nextjs/components/shadcn-studio/blocks/features-section-01/features-section-01.tsx` |
| Testimonials        | `../components/testimonials`       | `shadcn-studio/blocks/testimonials-component-01`       | `nextjs/components/shadcn-studio/blocks/testimonials-component-01/testimonials-component-01.tsx` |
| PricingComponent    | `../components/pricing-component`  | `shadcn-studio/blocks/pricing-component-01`            | `nextjs/components/shadcn-studio/blocks/pricing-component-01/pricing-component-01.tsx` |
| FAQSection          | `../components/faq-section`        | `shadcn-studio/blocks/faq-component-01`                | `nextjs/components/shadcn-studio/blocks/faq-component-01/faq-component-01.tsx` |
| CTASection          | `../components/cta-section`        | `shadcn-studio/blocks/cta-section-01`                  | `nextjs/components/shadcn-studio/blocks/cta-section-01/cta-section-01.tsx` |

## Urutan Render

```
HeroSection → LogoCloud → FeaturesSection → Testimonials → PricingComponent → FAQSection → CTASection
```
