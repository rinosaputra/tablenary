import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Card, CardContent } from "@/shared/ui/card";
import { Rating } from "@/shared/shadcn-studio-ui";
import { Marquee } from "@/shared/shadcn-studio-ui/marquee";
import { MotionPreset } from "@/shared/shadcn-studio-ui/motion-preset";

import { testimonialsData } from "../../data/testimonials";

export type TestimonialItem = {
  name: string;
  handle: string;
  avatar: string;
  rating: number;
  title: string;
  content: string;
  platformName: string;
  platformImage: string;
};

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialItem }) => {
  return (
    <Card className="max-w-sm break-inside-avoid">
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Rating readOnly variant="yellow" size={24} value={testimonial.rating} precision={0.5} />
          <div className="flex items-center gap-1.5">
            <img
              src={testimonial.platformImage}
              alt={testimonial.platformName}
              className="w-5.5 h-5.5"
            />
            <span className="text-sm">{testimonial.platformName}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{testimonial.title}</h3>
          <p className="text-muted-foreground">{testimonial.content}</p>
        </div>

        <div className="flex items-center gap-3">
          <Avatar className="size-12">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback className="text-sm">
              {testimonial.name
                .split(" ", 2)
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-0.5">
            <h4 className="font-medium">{testimonial.name}</h4>
            <p className="text-muted-foreground">{testimonial.handle}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

/**
 * Testimonials — adapted from shadcn-studio/blocks/testimonials-component-20.
 * 2-column layout: left heading + CTA, right Marquee grid (2 vertical columns desktop, 2 horizontal mobile).
 */
export function Testimonials({
  testimonials,
}: {
  testimonials?: TestimonialItem[];
}) {
  const data = testimonials ?? testimonialsData;

  return (
    <section className="flex min-h-screen flex-1 flex-col">
      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-4 max-xl:py-16 max-sm:py-8 sm:px-6 md:gap-16 lg:gap-24 lg:px-8 xl:grid-cols-2">
        {/* Left Content */}
        <div className="space-y-4">
          <MotionPreset
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="text-sm font-normal">
              Testimonials
            </Badge>
          </MotionPreset>

          <MotionPreset
            delay={0.3}
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
              We believe in the power of community
            </h2>
          </MotionPreset>

          <MotionPreset
            delay={0.6}
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground text-xl">
              Our goal is to create a product and service that you&apos;re
              satisfied with and use it every day. This is why we&apos;re
              constantly working on our services to make it better every day and
              really listen to what our users have to say.
            </p>
          </MotionPreset>

          <MotionPreset
            delay={0.9}
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              size="lg"
              className="relative overflow-hidden rounded-lg text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]"
              render={(props) => <a href="#contact" {...props} />}
            >
              More user stories
            </Button>
          </MotionPreset>
        </div>

        {/* Right Content — Marquee Grid */}
        <MotionPreset
          fade
          blur
          delay={0.3}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 xl:grid-cols-2"
        >
          {/* Desktop: 2 vertical marquee columns */}
          <Marquee
            vertical
            pauseOnHover
            duration={22}
            gap={1.5}
            className="h-screen min-h-[46rem] overflow-hidden px-2.5 max-xl:hidden"
          >
            {data.slice(0, 4).map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>

          <Marquee
            vertical
            pauseOnHover
            duration={22}
            gap={1.5}
            reverse
            className="h-screen min-h-[46rem] overflow-hidden px-2.5 max-xl:hidden"
          >
            {data.slice(4).map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>

          {/* Mobile: 2 horizontal marquee rows */}
          <Marquee pauseOnHover duration={22} gap={1.5} className="overflow-hidden xl:hidden">
            {data.slice(0, 4).map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>

          <Marquee
            pauseOnHover
            duration={22}
            gap={1.5}
            reverse
            className="overflow-hidden xl:hidden"
          >
            {data.slice(4).map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>
        </MotionPreset>
      </div>
    </section>
  );
}

export default Testimonials;
