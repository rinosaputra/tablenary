import { Card, CardContent } from "@/shared/ui/card";

import { contactInfoData } from "../data/contact";

/**
 * ContactInfo — info panel displayed alongside ContactForm on /contact.
 */
export function ContactInfo() {
  return (
    <Card className="shadow-none">
      <CardContent className="space-y-6 p-6">
        <div>
          <h2 className="text-xl font-semibold">Info Kontak</h2>
          <p className="text-muted-foreground mt-1 text-sm">
            Atau hubungi kami melalui salah satu saluran berikut.
          </p>
        </div>

        <ul className="space-y-5">
          {contactInfoData.map((item) => (
            <li key={item.title} className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="bg-muted flex size-10 shrink-0 items-center justify-center rounded-md text-lg"
              >
                {item.icon}
              </span>
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-muted-foreground mt-1 text-sm">
                  {item.content}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default ContactInfo;
