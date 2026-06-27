import { Card, CardContent } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";

/**
 * CTASection — adapted from shadcn-studio/blocks/cta-section-01.
 * Final call-to-action encouraging users to start with Tablenary.
 * Two buttons: Get Started (register) + Sign In (login). No fake store badges.
 */
export function CTASection() {
  return (
    <section className="bg-muted py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="rounded-3xl border-none py-8 shadow-lg sm:py-16 lg:py-24">
          <CardContent className="flex flex-wrap items-center justify-between gap-8 px-8 sm:flex-nowrap sm:px-16 lg:px-24">
            <div className="max-w-xs lg:max-w-lg">
              <h2 className="mb-4 text-3xl font-bold">
                Siap kelola data Anda tanpa coding?
              </h2>
              <p className="text-muted-foreground text-lg font-medium">
                Mulai gratis hari ini. Tanpa kartu kredit. Bangun tabel, form,
                chart, dan PDF Anda sendiri dalam hitungan menit — semua offline
                dan tersimpan aman di IndexedDB.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 max-md:w-full max-md:flex-col md:justify-end">
              <Button size="lg" variant="default" asChild className="min-w-45">
                <a href="/register">Mulai Gratis</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="min-w-45">
                <a href="/login">Masuk</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default CTASection;
