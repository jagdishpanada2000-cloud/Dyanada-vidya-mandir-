"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { PageHero, Reveal, Section } from "@/components/Section";

export default function Contact() {
  const { t } = useLanguage();

  const details = [
    { icon: MapPin, label: t("contact.detail1.label"), value: "उल्हासनगर-४, ठाणे, महाराष्ट्र" },
    { icon: Phone, label: t("contact.detail2.label"), value: "+91 251 XXX XXXX" },
    { icon: Mail, label: t("contact.detail3.label"), value: "info@dnyanadavm.edu.in" },
    { icon: Clock, label: t("contact.detail4.label"), value: "Monday to Saturday, 8:00 am – 2:30 pm" },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("contact.hero.eyebrow")}
        title={t("contact.hero.title")}
        intro={t("contact.hero.intro")}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.06}>
                <div className="card-elegant flex gap-4 p-6">
                  <d.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                  <div className="min-w-0">
                    <p className="text-[0.68rem] tracking-[0.2em] uppercase text-muted-foreground">
                      {d.label}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground">{d.value}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <form
              className="card-elegant p-8"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h2 className="font-display text-2xl font-semibold">{t("contact.form.title")}</h2>
              <div className="rule-gold mt-4" />
              <div className="mt-7 space-y-5">
                {[
                  { id: "name", label: t("contact.form.name"), type: "text" },
                  { id: "email", label: t("contact.form.email"), type: "email" },
                  { id: "subject", label: t("contact.form.subject"), type: "text" },
                ].map((f) => (
                  <div key={f.id}>
                    <label
                      htmlFor={f.id}
                      className="text-[0.68rem] tracking-[0.18em] uppercase text-muted-foreground"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="message"
                    className="text-[0.68rem] tracking-[0.18em] uppercase text-muted-foreground"
                  >
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-lift"
                >
                  {t("contact.form.submit")}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </Section>

      <Section alt>
        <Reveal>
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <iframe
              src="https://maps.google.com/maps?q=19.2069162,73.1580918&z=16&output=embed&hl=en"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dnyanada Vidya Mandir Location"
            />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
