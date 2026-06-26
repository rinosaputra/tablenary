import { Card, CardContent } from "@/shared/ui/card";
import { Building2Icon } from "lucide-react";

/**
 * LogoCloud — adapted from shadcn-studio/blocks/logo-cloud-01.
 * Shows partner/trusted brands. Uses a placeholder list until real logos
 * are available in /public/logos/.
 */
const partners = [
  { name: "Brew Co.", Icon: Building2Icon },
  { name: "Bistro Group", Icon: Building2Icon },
  { name: "Gourmet Hub", Icon: Building2Icon },
  { name: "Kitchen Pro", Icon: Building2Icon },
  { name: "Seafood House", Icon: Building2Icon },
  { name: "Sweet Spot", Icon: Building2Icon },
];

export function LogoCloud() {
  return (
    <section className="bg-muted py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            <span>A thriving</span>{" "}
            <span className="relative z-1">
              community of restaurants
              <span className="bg-primary absolute bottom-1 left-0 -z-1 h-px w-full"></span>
            </span>{" "}
            <span>driving innovation</span>
          </h2>
          <p className="text-muted-foreground text-xl">
            Proudly partnering with top brands to drive success.
          </p>
        </div>

        <Card className="py-14 shadow-lg">
          <CardContent className="px-14">
            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 max-sm:flex-col">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="text-muted-foreground flex items-center gap-2"
                >
                  <partner.Icon className="size-7" />
                  <span className="text-lg font-semibold">{partner.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default LogoCloud;
