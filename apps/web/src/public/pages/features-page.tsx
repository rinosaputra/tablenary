import { DatabaseIcon } from "lucide-react";

import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { paths } from "@/routes/route-definitions";

import { FeaturesSection } from "../components/features-section";
import { CTASection } from "../components/cta-section";

/**
 * FeaturesPage — full-featured landing for /features.
 * Reuses HeroSection with contextual copy, full FeaturesSection, and CTASection.
 */
export function FeaturesPage() {
  return (
    <>
      {/* Compact hero replacing the tall index hero */}
      <section className="flex justify-center bg-gradient-to-b from-background to-muted/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <Badge variant="outline" className="gap-1.5">
            <DatabaseIcon className="h-3.5 w-3.5" />
            Fitur Lengkap
          </Badge>
          <h1 className="text-3xl leading-[1.2] font-bold text-balance sm:text-4xl lg:text-5xl">
            Satu toolkit, empat builder
          </h1>
          <p className="text-muted-foreground text-base text-balance sm:text-lg lg:text-xl max-w-2xl">
            Jelajahi keempat builder utama Tablenary — Table, Form, Chart, dan
            PDF — serta bagaimana mereka bekerja bersama membentuk alur kerja
            data tanpa coding yang utuh.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Button
              size="lg"
              render={(props) => (
                <a href="#detail" {...props}>
                  Lihat Detail
                </a>
              )}
            >
              Mulai Gratis
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={(props) => (
                <a
                  href={paths.public.$.docs.$buildPath({})}
                  {...props}
                >
                  Dokumentasi
                </a>
              )}
            >
              Baca Docs
            </Button>
          </div>
        </div>
      </section>

      <div id="detail">
        <FeaturesSection />
      </div>
      <CTASection />
    </>
  );
}

export default FeaturesPage;
