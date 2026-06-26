import { HeroSection } from "../components/hero-section";
import { LogoCloud } from "../components/logo-cloud";
import { FeaturesSection } from "../components/features-section";
import { Testimonials } from "../components/testimonials";
import { PricingComponent } from "../components/pricing-component";
import { FAQSection } from "../components/faq-section";
import { CTASection } from "../components/cta-section";

/**
 * IndexPage — public landing page.
 * Composes all marketing blocks in order: Hero -> Logos -> Features ->
 * Testimonials -> Pricing -> FAQ -> CTA.
 */
export function IndexPage() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <FeaturesSection />
      <Testimonials />
      <PricingComponent />
      <FAQSection />
      <CTASection />
    </>
  );
}

export default IndexPage;
