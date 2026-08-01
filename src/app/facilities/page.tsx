"use client";

import { Palette, Dumbbell, Trees } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { PageHero, Reveal, Section } from "@/components/Section";

export default function Facilities() {
  const { t } = useLanguage();

  const facilities = [
    {
      icon: Palette,
      title: t("facilities.f1.title"),
      text: t("facilities.f1.text"),
      img: "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785556355/7_gbycss.png",
    },
    {
      icon: Dumbbell,
      title: t("facilities.f2.title"),
      text: t("facilities.f2.text"),
      img: "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785327274/WhatsApp_Image_2026-07-27_at_11.59.09_PM_2_yhimdw.jpg",
    },
    {
      icon: Trees,
      title: t("facilities.f3.title"),
      text: t("facilities.f3.text"),
      img: "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785555880/copy_of_6_v0ma2r.png",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("facilities.hero.eyebrow")}
        title={t("facilities.hero.title")}
        intro={t("facilities.hero.intro")}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <article className="card-elegant h-full overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <f.icon className="h-5 w-5 text-gold" strokeWidth={1.4} />
                  <h3 className="mt-4 font-display text-xl font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
