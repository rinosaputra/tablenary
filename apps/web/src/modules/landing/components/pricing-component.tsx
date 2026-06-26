import { useState } from "react";
import { CheckIcon } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { Switch } from "@/shared/ui/switch";
import { Separator } from "@/shared/ui/separator";
import { Badge } from "@/shared/ui/badge";
import { cn } from "@/shared/lib/utils";

import { pricingData } from "../data/pricing";

/**
 * PricingComponent — adapted from shadcn-studio/blocks/pricing-component-01.
 * Three-tier pricing with monthly/annual toggle and feature list per plan.
 */
export function PricingComponent() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-muted py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:space-y-24 lg:px-8">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
              Select the Best Plan for You!
            </h2>
            <p className="text-muted-foreground text-xl">
              Discover Our Flexible Plans, Compare Features, and Choose{" "}
              <br />
              the Ideal Option for Your Needs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-medium">Monthly</span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              aria-label="Toggle annual billing"
            />
            <span className="font-medium">Annually</span>
          </div>
        </div>

        <div className="flex items-stretch justify-center gap-6 max-lg:flex-col">
          {pricingData.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const period = isAnnual ? "year" : "month";
            const monthlyEquivalent = isAnnual
              ? Math.round(plan.annualPrice / 12)
              : null;

            return (
              <Card
                key={plan.name}
                className={cn(
                  "relative w-full shadow-none sm:w-lg",
                  plan.popular && "border-primary ring-primary/20 ring-2",
                )}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
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
                      ${price}
                    </span>
                    <span className="text-muted-foreground ml-1 text-lg">
                      /{period}
                    </span>
                    {monthlyEquivalent !== null && (
                      <span className="ml-2 text-sm text-green-600 font-medium">
                        (${monthlyEquivalent}/mo)
                      </span>
                    )}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PricingComponent;
