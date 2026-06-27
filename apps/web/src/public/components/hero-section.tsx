import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { DatabaseIcon } from "lucide-react";

/**
 * HeroSection — adapted from shadcn-studio/blocks/hero-section-01.
 * Hero section for Tablenary: no-code data toolkit with 4 builders (Table, Form, Chart, PDF).
 * Local-first IndexedDB storage, online only for paid users.
 */
export function HeroSection() {
  return (
    <section className="flex min-h-[calc(100dvh-4rem)] flex-1 flex-col justify-between gap-12 overflow-x-hidden pt-8 sm:gap-16 sm:pt-16 lg:gap-24 lg:pt-24">
      {/* Hero Content */}
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8">
        <div className="bg-muted flex items-center gap-2.5 rounded-full border px-3 py-2">
          <Badge variant="outline">
            <DatabaseIcon className="mr-1 h-3.5 w-3.5" />
            Offline-first
          </Badge>
          <span className="text-muted-foreground">
            Online hanya untuk pengguna berbayar
          </span>
        </div>

        <h1 className="text-3xl leading-[1.29167] font-bold text-balance sm:text-4xl lg:text-5xl">
          Toolkit data tanpa coding.
          <br />
          <span className="text-muted-foreground text-xl sm:text-2xl lg:text-3xl font-normal">
            Bangun tabel, kumpulkan via form, visualisasikan dengan chart,
            <br />
            ekspor ke PDF — semua offline, data di IndexedDB.
          </span>
        </h1>

        <p className="text-muted-foreground text-balance max-w-2xl">
          Tablenary membantu Anda bertransisi dari Excel/Google Sheets ke
          aplikasi data lengkap. Tanpa instalasi server, tanpa database
          terpisah. Semua berjalan lokal di browser Anda.
        </p>

        <Button
          nativeButton={false}
          size="lg"
          variant="default"
          render={(props) => <a href="#features" {...props} />}
        >
          Coba Sekarang
        </Button>
      </div>

      {/* Image */}
      <img
        src="/placeholder.svg"
        alt="Tablenary dashboard preview"
        className="min-h-67 w-full object-cover"
      />
    </section>
  );
}

export default HeroSection;
