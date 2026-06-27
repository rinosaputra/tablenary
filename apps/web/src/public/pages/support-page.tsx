import { Card, CardContent } from "@/shared/ui/card";
import { cn } from "@/shared/lib/utils";
import { ArrowRightIcon } from "lucide-react";

import { PageHeader } from "../components/page-header";
import { helpCategoriesData } from "../data/support";

/**
 * SupportPage — help center landing for /support.
 * Displays help category cards in a responsive grid.
 */
export function SupportPage() {
  return (
    <>
      <PageHeader
        title="Pusat Bantuan"
        subtitle="Temukan panduan, tutorial, dan solusi untuk semua pertanyaan Anda tentang Tablenary."
      />

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {helpCategoriesData.map((cat) => (
              <Card
                key={cat.title}
                className="shadow-none transition-colors hover:bg-muted/50"
              >
                <CardContent className="flex flex-col gap-4 p-6">
                  <div
                    className={cn(
                      "flex size-10 items-center justify-center rounded-md",
                      cat.color,
                    )}
                  >
                    <cat.icon className="size-5" />
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <h3 className="font-semibold">{cat.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {cat.description}
                    </p>
                  </div>
                  <a
                    href={cat.href}
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Selengkapnya <ArrowRightIcon className="size-3.5" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Butuh bantuan tambahan?
          </h2>
          <p className="text-muted-foreground mt-4">
            Tim support kami siap membantu. Hubungi kami melalui{" "}
            <a
              href="/contact"
              className="text-primary underline underline-offset-4 hover:no-underline"
            >
              form kontak
            </a>{" "}
            atau kirim email ke{" "}
            <a
              href="mailto:support@tablenary.id"
              className="text-primary underline underline-offset-4 hover:no-underline"
            >
              support@tablenary.id
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}

export default SupportPage;
