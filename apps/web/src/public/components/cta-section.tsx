import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router";

import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { MotionPreset } from "@/shared/shadcn-studio-ui/motion-preset";
import { paths } from "@/routes/route-definitions";

/**
 * CTASection — adapted from shadcn-studio/blocks/cta-section-04.
 * Dark card with dashboard image (floating animation) + CTA button.
 */
export function CTASection() {
  return (
    <section className="bg-muted py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="relative rounded-3xl border-none bg-black py-16 shadow-none">
          <CardContent className="flex items-center gap-16 px-6 sm:max-lg:flex-col md:px-12">
            {/* Dashboard Image with floating animation */}
            <MotionPreset
              className="relative w-full max-sm:hidden"
              fade
              motionProps={{
                animate: {
                  y: [0, -10, 0],
                  opacity: 1,
                },
                transition: {
                  y: {
                    duration: 1.7,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.5,
                  },
                },
              }}
            >
              <img
                src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/cta/image-7.png"
                alt="Dashboard Analytics"
                className="max-lg:mx-auto max-lg:max-h-80 lg:absolute lg:-translate-y-1/2 lg:scale-105 dark:hidden"
              />
              <img
                src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/cta/image-7-dark.png"
                alt="Dashboard Analytics"
                className="hidden max-lg:mx-auto max-lg:max-h-80 lg:absolute lg:-translate-y-1/2 lg:scale-105 dark:inline-block"
              />
            </MotionPreset>

            {/* Text + CTA */}
            <div className="space-y-4 xl:justify-self-end">
              <MotionPreset
                component="h2"
                className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl"
                fade
                blur
                slide={{ direction: "up", offset: 50 }}
                transition={{ duration: 0.5 }}
              >
                Mulai kelola data tanpa coding
              </MotionPreset>

              <MotionPreset
                component="p"
                className="text-xl text-white"
                fade
                blur
                slide={{ direction: "up", offset: 50 }}
                delay={0.3}
                transition={{ duration: 0.5 }}
              >
                Bangun tabel, form, chart, dan PDF Anda sendiri dalam hitungan
                menit — semua offline dan tersimpan aman di IndexedDB.
              </MotionPreset>

              <MotionPreset
                fade
                blur
                slide={{ direction: "up", offset: 50 }}
                delay={0.6}
                transition={{ duration: 0.5 }}
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-lg text-base has-[>svg]:px-6"
                  render={(props) => (
                    <Link to={paths.public.$.register.$buildPath({})} {...props} />
                  )}
                >
                  Mulai Gratis
                  <ArrowRightIcon className="size-5" />
                </Button>
              </MotionPreset>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default CTASection;
