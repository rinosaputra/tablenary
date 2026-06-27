import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Orbiting } from "@/shared/shadcn-studio-ui/orbiting";
import { MotionPreset } from "@/shared/shadcn-studio-ui/motion-preset";

type Logos = {
  image: string;
  alt: string;
  size: string;
};

interface LogoCloudProps {
  logos?: Logos[];
}

const defaultLogos: Logos[] = [
  { image: "/logos/webflow.png", alt: "Webflow", size: "size-15" },
  { image: "/logos/netflix.png", alt: "Netflix", size: "size-12" },
  { image: "/logos/stackoverflow.png", alt: "Stack Overflow", size: "size-12.5" },
  { image: "/logos/shopify.png", alt: "Shopify", size: "size-11" },
  { image: "/logos/mailchimp.png", alt: "Mailchimp", size: "size-9.5" },
  { image: "/logos/paypal.png", alt: "PayPal", size: "size-15" },
  { image: "/logos/airbnb.png", alt: "Airbnb", size: "size-12.5" },
  { image: "/logos/huawei.png", alt: "Huawei", size: "size-15" },
  { image: "/logos/dropbox.png", alt: "Dropbox", size: "size-15" },
];

export function LogoCloud({ logos = defaultLogos }: LogoCloudProps = {}) {
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-12 gap-y-32 max-lg:flex-col sm:gap-16 lg:gap-24">
          <div className="space-y-4">
            <MotionPreset
              fade
              slide={{ direction: "up", offset: 50 }}
              blur
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className="text-sm font-normal"
              >
                A Legacy of Trust
              </Badge>
            </MotionPreset>

            <MotionPreset
              component="h2"
              className="text-2xl font-semibold md:text-3xl lg:text-4xl"
              fade
              slide={{ direction: "up", offset: 50 }}
              blur
              transition={{ duration: 0.5 }}
              delay={0.3}
            >
              Helping visionary brands scale & innovate
            </MotionPreset>

            <MotionPreset
              component="p"
              className="text-muted-foreground mb-12 text-xl sm:mb-16 lg:mb-24"
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              transition={{ duration: 0.5 }}
              delay={0.6}
            >
              We power some of the world&apos;s most successful companies,
              helping them and exceed expectations.
            </MotionPreset>

            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              transition={{ duration: 0.5 }}
              delay={0.9}
            >
              <div className="bg-primary/10 flex items-center justify-between gap-4 overflow-hidden rounded-lg px-6 py-4 max-sm:flex-col">
                <p className="text-primary text-xl font-medium">
                  Are you the next one?
                </p>
                <MotionPreset
                  fade
                  blur
                  slide={{ direction: "right", offset: 20 }}
                  transition={{ duration: 0.4 }}
                  delay={1.2}
                >
                  <Button className="text-base max-sm:w-full" size="lg">
                    Join Now
                  </Button>
                </MotionPreset>
              </div>
            </MotionPreset>
          </div>

          <MotionPreset
            className="max-sm:scale-75"
            fade
            blur
            zoom={{ initialScale: 0.8 }}
            transition={{ duration: 0.8 }}
            delay={0.5}
          >
            <div className="relative flex size-96 flex-col items-center justify-center">
              <Orbiting radius={180} dashed={true} dashedGap={12}>
                {logos.slice(0, 6).map((logo, index) => (
                  <img
                    key={index}
                    src={logo.image}
                    alt={logo.alt}
                    className={logo.size}
                  />
                ))}
              </Orbiting>
              <Orbiting
                radius={110}
                reverse
                speed={2}
                dashed={true}
                dashedGap={12}
              >
                {logos.slice(6).map((logo, index) => (
                  <img
                    key={index}
                    src={logo.image}
                    alt={logo.alt}
                    className={logo.size}
                  />
                ))}
              </Orbiting>

              {/* Center logo — ganti dengan Logo Tablenary ketika siap */}
            </div>
          </MotionPreset>
        </div>
      </div>
    </section>
  );
}

export default LogoCloud;
