import { ArrowRightIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { cn } from "@/shared/lib/utils";

import { featuresData } from "../data/features";

/**
 * FeaturesSection — adapted from shadcn-studio/blocks/features-section-01.
 * Renders a grid of feature cards with icon, title, and description.
 */
export function FeaturesSection() {
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4 sm:mb-16 lg:mb-24">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Discover the Exclusive Perks Today
          </h2>
          <p className="text-muted-foreground text-xl">
            Explore key features designed to enhance your restaurant operations
            with intuitive navigation, robust security, and seamless
            functionality.
          </p>
          <Button
            nativeButton={false}
            variant="outline"
            className="rounded-lg text-base shadow-none has-[>svg]:px-6"
            size="lg"
            render={(props) => <a href="#features" {...props} />}
          >
            See all features
            <ArrowRightIcon />
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <Card
              key={index}
              className={cn(
                "shadow-none transition-colors duration-300",
                feature.cardBorderColor,
              )}
            >
              <CardContent>
                <Avatar
                  className={cn(
                    "mb-6 size-10 rounded-md",
                    feature.avatarTextColor,
                  )}
                >
                  <AvatarFallback
                    className={cn(
                      "rounded-md [&>svg]:size-6",
                      feature.avatarBgColor,
                    )}
                  >
                    <feature.icon />
                  </AvatarFallback>
                </Avatar>
                <h6 className="mb-2 text-lg font-semibold">{feature.title}</h6>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
