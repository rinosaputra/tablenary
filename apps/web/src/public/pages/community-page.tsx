import { Card, CardContent } from "@/shared/ui/card";
import { cn } from "@/shared/lib/utils";

import { PageHeader } from "../components/page-header";
import { CTASection } from "../components/cta-section";
import { communityPlatformsData } from "../data/community";

/**
 * CommunityPage — community platform showcase for /community.
 */
export function CommunityPage() {
  return (
    <>
      <PageHeader
        title="Bergabung dengan Komunitas"
        subtitle="Terhubung dengan pengguna dan pengembang Tablenary di berbagai platform."
      />

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {communityPlatformsData.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="shadow-none transition-colors group-hover:bg-muted/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div
                        className={cn(
                          "flex size-10 items-center justify-center rounded-md",
                          platform.bgAccent,
                        )}
                      >
                        <platform.icon className={cn("size-5", platform.accent)} />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold">
                          {platform.name}
                        </h3>
                        <p className="text-muted-foreground mt-1 text-sm">
                          {platform.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-muted-foreground text-xs font-medium">
                          {platform.members}
                        </span>
                        <span className="text-primary text-sm font-medium group-hover:underline">
                          Kunjungi →
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default CommunityPage;
