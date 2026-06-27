import { PageHeader } from "../components/page-header";
import { CTASection } from "../components/cta-section";
import { cookiesContent } from "../data/legal";

/**
 * CookiesPage — Cookie Policy for /cookies.
 */
export function CookiesPage() {
  return (
    <>
      <PageHeader
        title="Kebijakan Cookie"
        subtitle="Informasi tentang penggunaan cookie dan teknologi serupa di Tablenary."
      />

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-neutral max-w-none dark:prose-invert">
            {cookiesContent.map((section) => (
              <section key={section.heading} className="mb-10 last:mb-0">
                <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
                  {section.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.body}
                </p>
              </section>
            ))}
          </article>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default CookiesPage;
