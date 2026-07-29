"use client";

import { useLanguage } from "@/lib/language";
import { PageHero, Reveal, Section, SectionHeading } from "@/components/Section";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export default function Academics() {
  const { t } = useLanguage();

  const stages = [
    { name: t("academics.stage1.name"), grades: t("academics.stage1.grades"), text: t("academics.stage1.text") },
    { name: t("academics.stage2.name"), grades: t("academics.stage2.grades"), text: t("academics.stage2.text") },
    { name: t("academics.stage3.name"), grades: t("academics.stage3.grades"), text: t("academics.stage3.text") },
    { name: t("academics.stage4.name"), grades: t("academics.stage4.grades"), text: t("academics.stage4.text") },
  ];

  const approach = [
    t("academics.approach1"),
    t("academics.approach2"),
    t("academics.approach3"),
    t("academics.approach4"),
  ];

  return (
    <>
      <PageHero
        eyebrow={t("academics.hero.eyebrow")}
        title={t("academics.hero.title")}
        intro={t("academics.hero.intro")}
      />

      <Section>
        <SectionHeading eyebrow={t("academics.stages.eyebrow")} title={t("academics.stages.title")} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {stages.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.07}>
              <article className="card-elegant h-full p-8">
                <span className="eyebrow">{s.grades}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold">{s.name}</h3>
                <div className="rule-gold mt-4" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <div className="flex justify-center py-8">
        <img src="https://res.cloudinary.com/dwta5v9wi/image/upload/v1785330324/copy_of_section_end_uqkgou.png" alt="" className="h-5 opacity-40 sm:h-10" />
      </div>

      <Section alt>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow={t("academics.approach.eyebrow")}
              title={t("academics.approach.title")}
              intro={t("academics.approach.intro")}
            />
            <ul className="mt-8 space-y-4">
              {approach.map((a, i) => (
                <Reveal key={a} delay={i * 0.06}>
                  <li className="flex gap-4 border-b border-border pb-4 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {a}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={0.1}>
            <ImagePlaceholder label={t("academics.classroom")} ratio="4/3" />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
