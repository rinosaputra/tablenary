import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";

import { PricingComponent } from "../components/pricing-component";
import { FAQSection } from "../components/faq-section";
import { CTASection } from "../components/cta-section";

/**
 * PricingPage — dedicated pricing landing for /pricing.
 * Reuses PricingComponent (with our pricing data), FAQSection, and CTASection.
 */
export function PricingPage() {
  return (
    <>
      <section className="flex justify-center bg-gradient-to-b from-background to-muted/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <Badge variant="outline" className="bg-primary/5">
            💰 Harga Transparan
          </Badge>
          <h1 className="text-3xl leading-[1.2] font-bold text-balance sm:text-4xl lg:text-5xl">
            Mulai gratis, upgrade kapan saja
          </h1>
          <p className="text-muted-foreground text-base text-balance sm:text-lg lg:text-xl max-w-2xl">
            Semua harga bersifat tahunan dan sudah mencakup seluruh fitur tier.
            Tidak ada biaya tersembunyi. Pro bisa dicoba gratis selama 14 hari.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Button
              size="lg"
              render={(props) => (
                <a href="#plans" {...props}>
                  Lihat Paket
                </a>
              )}
            >
              Lihat Paket
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={(props) => (
                <a href="#faq" {...props}>
                  FAQ
                </a>
              )}
            >
              FAQ
            </Button>
          </div>
        </div>
      </section>

      <div id="plans">
        <PricingComponent />
      </div>

      <div id="faq">
        <FAQSection />
      </div>

      <CTASection />
    </>
  );
}

export default PricingPage;
