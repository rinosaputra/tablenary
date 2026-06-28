import { PhoneIcon } from "lucide-react";

import { Card, CardContent } from "@/shared/ui/card";

import { PageHeader } from "../components/page-header";
import { CTASection } from "../components/cta-section";
import { ContactInfoPanel } from "../components/contact/contact-info-panel";

/**
 * ContactPage — dedicated contact form page for /contact.
 * Layout: compact hero → form left / bg-primary info panel right → CTA.
 * Body section adapted from shadcn-studio/blocks/contact-us-page-02.
 */
export function ContactPage() {
  return (
    <>
      <PageHeader
        title="Hubungi Kami"
        subtitle="Ada pertanyaan atau butuh bantuan? Kami senang mendengar dari Anda."
      />

      <ContactInfoPanel />

      <CTASection />
    </>
  );
}

export default ContactPage;
