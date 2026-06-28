import { CircleCheckIcon } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";

import { pricingPlans, pricingFeatures } from "../data/pricing";

/**
 * PricingComponent — adapted from shadcn-studio/blocks/pricing-component-05.
 * Table comparison layout: features × plans.
 */
export function PricingComponent() {
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:space-y-24 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
            Pilih paket yang tepat!
          </h2>
          <p className="text-muted-foreground text-center text-xl">
            Eksplor Paket Kami dan Pilih yang Terbaik Untuk Kebutuhan Anda!
          </p>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-0"></TableHead>
              {pricingPlans.map((plan) => (
                <TableHead
                  key={plan.name}
                  className={cn(
                    "min-w-40 py-3",
                    plan.isPopular && "bg-primary rounded-t-lg",
                  )}
                >
                  <div className="flex flex-col items-center gap-1.5">
                    <h3
                      className={cn("text-xl font-semibold", {
                        "text-primary-foreground": plan.isPopular,
                      })}
                    >
                      {plan.name}
                    </h3>
                    <div
                      className={cn("text-3xl font-bold", {
                        "text-primary-foreground": plan.isPopular,
                      })}
                    >
                      {plan.price}
                    </div>
                    <div
                      className={cn("text-sm font-medium", {
                        "text-primary-foreground": plan.isPopular,
                        "text-muted-foreground": !plan.isPopular,
                      })}
                    >
                      {plan.period}
                    </div>
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {pricingFeatures.map((feature, fIndex) => {
              const isLastRow = fIndex === pricingFeatures.length - 1;

              return (
                <TableRow key={feature.key}>
                  <TableCell
                    className={cn(
                      "h-13 w-80 p-2 text-base font-medium max-lg:min-w-50",
                      !isLastRow && "border-border border-b",
                    )}
                  >
                    {feature.label}
                  </TableCell>
                  {pricingPlans.map((plan) => {
                    const value = plan.features[feature.key];
                    const isPopular = plan.isPopular;

                    return (
                      <TableCell
                        key={plan.name}
                        className={cn(
                          "text-center max-lg:min-w-40",
                          !isLastRow && "border-border border-b",
                          isPopular && !isLastRow && "bg-muted",
                          isPopular &&
                            isLastRow &&
                            "bg-primary rounded-b-lg",
                        )}
                      >
                        {value === true ? (
                          <CircleCheckIcon
                            className={cn(
                              "mx-auto size-6",
                              isPopular &&
                                isLastRow &&
                                "text-primary-foreground",
                            )}
                          />
                        ) : value === false ? (
                          <span
                            className={cn(
                              "text-base font-medium",
                              isPopular &&
                                isLastRow &&
                                "text-primary-foreground",
                            )}
                          >
                            -
                          </span>
                        ) : (
                          <span
                            className={cn(
                              "text-base font-medium",
                              isPopular &&
                                isLastRow &&
                                "text-primary-foreground",
                            )}
                          >
                            {value as string}
                          </span>
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

export default PricingComponent;
