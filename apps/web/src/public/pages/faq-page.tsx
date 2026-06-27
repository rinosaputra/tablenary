import { FAQSection } from "../components/faq-section";
import { CTASection } from "../components/cta-section";

/**
 * FAQPage — dedicated FAQ landing for /faq.
 * Reuses FAQSection with full data and CTASection.
 */
export function FAQPage() {
  return (
    <>
      <section className="flex justify-center bg-gradient-to-b from-background to-muted/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl leading-[1.2] font-bold text-balance sm:text-4xl lg:text-5xl">
            Pertanyaan yang Sering Diajukan
          </h1>
          <p className="text-muted-foreground text-base text-balance sm:text-lg lg:text-xl max-w-2xl">
            Temukan jawaban atas pertanyaan umum tentang Tablenary: cara kerja,
            penyimpanan data lokal, pricing, dan dukungan pelanggan.
          </p>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </>
  );
}

export default FAQPage;
