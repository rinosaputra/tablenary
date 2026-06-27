import { useState } from "react";
import type { FormEvent } from "react";

import { SendIcon } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { NativeSelect } from "@/shared/ui/native-select";
import { Textarea } from "@/shared/ui/textarea";

import { contactSubjects } from "../data/contact";

type FormState = "idle" | "submitting" | "success";

/**
 * ContactForm — UI-only form for /contact.
 * No backend wiring yet; submit logs to console and simulates success.
 */
export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // TODO(wire-backend): replace with real submit handler.
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
      <div className="border-primary/40 bg-primary/5 rounded-lg border-2 border-dashed p-8 text-center">
        <p className="text-primary text-lg font-semibold">Pesan Terkirim ✓</p>
        <p className="text-muted-foreground mt-2 text-sm">
          Terima kasih telah menghubungi kami. Kami akan merespon dalam 1×24 jam
          kerja ke email Anda.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Nama Lengkap</Label>
          <Input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Citra Wijaya"
            required
            autoComplete="name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            placeholder="citra@contoh.com"
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-subject">Perihal</Label>
        <NativeSelect
          id="contact-subject"
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

      <div className="space-y-2">
        <Label htmlFor="contact-message">Pesan</Label>
        <Textarea
          id="contact-message"
          name="message"
          rows={6}
          placeholder="Ceritakan pertanyaan atau kebutuhan Anda…"
          required
        />
      </div>

      <Button type="submit" size="lg" disabled={state === "submitting"}>
        <SendIcon />
        {state === "submitting" ? "Mengirim…" : "Kirim Pesan"}
      </Button>
    </form>
  );
}

export default ContactForm;
