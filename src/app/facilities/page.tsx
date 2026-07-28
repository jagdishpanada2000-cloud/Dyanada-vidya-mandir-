"use client";

import { BookMarked, Dumbbell, FlaskConical, Laptop, Music, Trees } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { PageHero, Reveal, Section, SectionHeading } from "@/components/Section";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export default function Facilities() {
  const { t } = useLanguage();

  const facilities = [
    { icon: FlaskConical, title: t("facilities.f1.title"), text: t("facilities.f1.text") },
    { icon: Laptop, title: t("facilities.f2.title"), text: t("facilities.f2.text") },
    { icon: BookMarked, title: t("facilities.f3.title"), text: t("facilities.f3.text") },
    { icon: Dumbbell, title: t("facilities.f4.title"), text: t("facilities.f4.text") },
    { icon: Music, title: t("facilities.f5.title"), text: t("facilities.f5.text") },
    { icon: Trees, title: t("facilities.f6.title"), text: t("facilities.f6.text") },
  ];

  const buildingLabels = [t("facilities.building1"), t("facilities.building2"), t("facilities.building3")];

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
                <ImagePlaceholder label={f.title} ratio="16/10" className="rounded-none border-0 border-b" />
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

      <Section alt>
        <SectionHeading
          eyebrow={t("facilities.campus.eyebrow")}
          title={t("facilities.campus.title")}
          intro={t("facilities.campus.intro")}
          center
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {buildingLabels.map((l, i) => (
            <Reveal key={l} delay={i * 0.08}>
              <ImagePlaceholder label={l} ratio="3/4" />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
