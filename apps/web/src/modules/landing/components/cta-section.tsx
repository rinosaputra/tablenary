import { Card, CardContent } from "@/shared/ui/card";
import { AppleIcon, SmartphoneIcon } from "lucide-react";

/**
 * CTASection — adapted from shadcn-studio/blocks/cta-section-01.
 * Final call-to-action encouraging users to start with Tablenary.
 * Uses local lucide icons for store badges (replace with brand SVGs when available).
 */
export function CTASection() {
  return (
    <section className="bg-muted py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="rounded-3xl border-none py-8 shadow-lg sm:py-16 lg:py-24">
          <CardContent className="flex flex-wrap items-center justify-between gap-8 px-8 sm:flex-nowrap sm:px-16 lg:px-24">
            <div className="max-w-xs lg:max-w-lg">
              <h2 className="mb-4 text-3xl font-bold">
                Start managing your restaurant today
              </h2>
              <p className="text-muted-foreground text-lg font-medium">
                With a variety of powerful tools, you can effortlessly run your
                restaurant without any technical skills. Build your next chapter
                with Tablenary.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 max-md:w-full max-md:flex-col md:justify-end">
              <a
                href="/register"
                className="bg-card-foreground text-card flex w-[200px] items-center gap-4 rounded-md px-6 py-3"
              >
                <AppleIcon className="size-8.5" />
                <div className="flex flex-col items-start">
                  <p className="text-xs leading-4">Sign up on the</p>
                  <p className="text-base leading-6 font-medium opacity-90">
                    Web App
                  </p>
                </div>
              </a>

              <a
                href="/register"
                className="bg-card-foreground text-card flex w-[200px] items-center gap-4 rounded-md px-6 py-3"
              >
                <SmartphoneIcon className="size-8.5" />
                <div className="flex flex-col items-start">
                  <p className="text-xs leading-4">Get it on</p>
                  <p className="text-base leading-6 font-medium opacity-90">
                    Mobile
                  </p>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default CTASection;
