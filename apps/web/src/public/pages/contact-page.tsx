import { PhoneIcon } from "lucide-react";

import { Card, CardContent } from "@/shared/ui/card";

import { PageHeader } from "../components/page-header";
import { ContactForm } from "../components/contact-form";
import { ContactInfo } from "../components/contact-info";
import { CTASection } from "../components/cta-section";

/**
 * ContactPage — dedicated contact form page for /contact.
 * Layout: form on the left, info panel on the right (responsive stacked on mobile).
 */
export function ContactPage() {
  return (
    <>
      <PageHeader
        title="Hubungi Kami"
        subtitle="Ada pertanyaan atau butuh bantuan? Kami senang mendengar dari Anda."
      />

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            {/* Left: Contact Form */}
            <div>
              <h2 className="mb-6 text-xl font-semibold">
                Kirim Pesan Langsung
              </h2>
              <ContactForm />
            </div>

            {/* Right: Info Panel */}
            <div className="hidden space-y-6 lg:block">
              <ContactInfo />

              <Card className="shadow-none">
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary flex size-10 items-center justify-center rounded-full">
                      <PhoneIcon className="text-primary-foreground size-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Telepon / WhatsApp
                      </p>
                      <p className="text-muted-foreground text-sm">
                        +62 812-3456-7890
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default ContactPage;
