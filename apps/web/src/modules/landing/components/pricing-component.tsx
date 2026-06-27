import { CheckIcon } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { Separator } from "@/shared/ui/separator";
import { Badge } from "@/shared/ui/badge";
import { cn } from "@/shared/lib/utils";

import { pricingData } from "../data/pricing";

/**
 * PricingComponent — adapted from shadcn-studio/blocks/pricing-component-01.
 * Annual-only billing (no monthly toggle). IDR currency display.
 */

function formatIDR(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function PricingComponent() {
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:space-y-24 lg:px-8">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
              Pilih Paket Sesuai Kebutuhan
            </h2>
            <p className="text-muted-foreground text-xl">
              Mulai gratis, upgrade kapan saja. Semua harga adalah harga
              tahunan.
            </p>
          </div>
        </div>

        <div className="flex items-stretch justify-center gap-6 max-lg:flex-col">
          {pricingData.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative w-full shadow-none sm:w-lg",
                plan.popular && "border-primary ring-primary/20 ring-2",
              )}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Paling Populer
                </Badge>
              )}
              <CardContent className="flex flex-col gap-6 p-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-semibold">{plan.name}</h3>
                  <p className="text-muted-foreground text-base">
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-end gap-1">
                  <span className="text-primary text-5xl font-bold">
                    {formatIDR(plan.annualPrice)}
                  </span>
                  <span className="text-muted-foreground mb-1 ml-1 text-lg">
                    /tahun
                  </span>
                </div>

                <Button className="w-full">{plan.cta}</Button>

                <Separator />

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon className="text-primary mt-0.5 size-5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingComponent;
