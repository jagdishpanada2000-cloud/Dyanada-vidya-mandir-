"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { PageHero, Reveal, Section } from "@/components/Section";

export default function Contact() {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "");
    const message = String(data.get("message") || "");
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:enquiry@dvmedu.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const details = [
    { icon: MapPin, label: t("contact.detail1.label"), value: "मानेरेगाव रोड, सेक्शन २५, रामरक्षा हॉस्पिटल जवळ, उल्हासनगर, जिल्हा ठाणे, पिन कोड - ४२१००४" },
    { icon: Phone, label: t("contact.detail2.label"), value: "+91 92726 98531" },
    { icon: Mail, label: t("contact.detail3.label"), value: "enquiry@dvmedu.co.in" },
    { icon: Clock, label: t("contact.detail4.label"), value: t("contact.hours") },
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
              onSubmit={handleSubmit}
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
                      name={f.id}
                      type={f.type}
                      required
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
                    name="message"
                    rows={5}
                    required
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
      <div className="flex justify-center py-8">
        <img src="https://res.cloudinary.com/dwta5v9wi/image/upload/v1785330324/copy_of_section_end_uqkgou.png" alt="" className="h-5 opacity-40 sm:h-10" />
      </div>

      <Section alt>
        <Reveal>
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.76!2d73.1554675!3d19.2070663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7945e2dc2d085%3A0x53676eff1b9fbcfb!2sDnyanada%20Vidya%20Mandir!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dnyanada Vidya Mandir Location"
            />
            <a
              href="https://www.google.com/maps/place/Dnyanada+Vidya+Mandir/@19.2070663,73.1554675,16.55z/data=!4m6!3m5!1s0x3be7945e2dc2d085:0x53676eff1b9fbcfb!8m2!3d19.2069162!4d73.1580918!16s%2Fg%2F1hm4zdf8h?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <MapPin className="h-4 w-4" strokeWidth={1.5} />
              {t("contact.viewMap")}
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
