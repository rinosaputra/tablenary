import { useState } from "react";
import type { FormEvent } from "react";

import { MailIcon, PhoneIcon, SendIcon } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { NativeSelect } from "@/shared/ui/native-select";
import { Textarea } from "@/shared/ui/textarea";

import { contactInfoData, contactSubjects } from "../../data/contact";

type FormState = "idle" | "submitting" | "success";

/** Lucide icon mapping by contact info title. */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Email: MailIcon,
  "Waktu Respon": PhoneIcon,
  "Komunitas Discord": PhoneIcon,
};

/**
 * ContactInfoPanel — complete contact page body.
 * Adapted from shadcn-studio/blocks/contact-us-page-02:
 *   - Compact centered hero header
 *   - Grid layout: form left, primary-bg info panel right
 */
export function ContactInfoPanel() {
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Compact hero header */}
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Hubungi Kami
          </h2>
          <p className="text-muted-foreground text-xl">
            Ada pertanyaan atau butuh bantuan? Kami siap membantu!
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Left: Form */}
          <div className="lg:col-span-3 xl:col-span-4">
            <ContactFormInline />
          </div>

          {/* Right: Info Panel — bg-primary */}
          <div className="lg:col-span-3 xl:col-span-2">
            <div className="bg-primary py-8">
              <div className="space-y-7 px-6 text-primary-foreground">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold">Info Kontak</h2>
                  <p className="text-sm text-primary-foreground/80">
                    Atau hubungi kami melalui salah satu saluran berikut.
                  </p>
                </div>

                <div className="space-y-7">
                  {contactInfoData.map((item) => {
                    const Icon = iconMap[item.title] ?? PhoneIcon;
                    return (
                      <div
                        key={item.title}
                        className="flex items-start gap-4 text-lg font-semibold"
                      >
                        <Icon className="size-7 shrink-0" />
                        <div>
                          <p>{item.title}</p>
                          <p className="text-sm font-normal text-primary-foreground/80">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    );
                  })}

                  {/* Phone / WhatsApp */}
                  <div className="flex items-start gap-4 text-lg font-semibold">
                    <PhoneIcon className="size-7 shrink-0" />
                    <div>
                      <p>Telepon / WhatsApp</p>
                      <a
                        href="tel:+6281234567890"
                        className="underline decoration-primary-foreground/40 hover:decoration-primary-foreground"
                      >
                        +62 812-3456-7890
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Inline form — stateful with submission simulation. */
function ContactFormInline() {
  const [state, setState] = useState<FormState>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    console.info("[ContactForm] submit", payload);

    setState("submitting");
    window.setTimeout(() => {
      setState("success");
      form.reset();
      window.setTimeout(() => setState("idle"), 3500);
    }, 600);
  }

  if (state === "success") {
    return (
      <div className="rounded-lg border-2 border-dashed border-primary/40 bg-primary/5 p-8 text-center">
        <p className="text-lg font-semibold text-primary">
          Pesan Terkirim ✓
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Terima kasih telah menghubungi kami. Kami akan merespon dalam 1×24 jam
          kerja ke email Anda.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name + Email row */}
      <div className="flex w-full flex-wrap gap-6">
        <div className="w-auto grow space-y-2">
          <Label htmlFor="cp-name">Nama Lengkap</Label>
          <Input
            type="text"
            id="cp-name"
            name="name"
            className="h-10"
            placeholder="Citra Wijaya"
            required
            autoComplete="name"
          />
        </div>
        <div className="w-auto grow space-y-2">
          <Label htmlFor="cp-email">Email</Label>
          <Input
            type="email"
            id="cp-email"
            name="email"
            className="h-10"
            placeholder="citra@contoh.com"
            required
            autoComplete="email"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <Label htmlFor="cp-subject">Perihal</Label>
        <NativeSelect
          id="cp-subject"
          name="subject"
          defaultValue={contactSubjects[0]?.value}
          required
        >
          {contactSubjects.map((subject) => (
            <option key={subject.value} value={subject.value}>
              {subject.label}
            </option>
          ))}
        </NativeSelect>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="cp-message">Pesan</Label>
        <Textarea
          id="cp-message"
          name="message"
          className="h-28 resize-none"
          placeholder="Ceritakan pertanyaan atau kebutuhan Anda…"
          required
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        disabled={state === "submitting"}
        className="rounded-lg text-base shadow-sm has-[>svg]:px-6"
      >
        {state === "submitting" ? "Mengirim…" : "Kirim Pesan"}
        <SendIcon className="size-5" />
      </Button>
    </form>
  );
}

export default ContactInfoPanel;
