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
      <ContactInfoPanel />
      <CTASection />
    </>
  );
}

export default ContactPage;
