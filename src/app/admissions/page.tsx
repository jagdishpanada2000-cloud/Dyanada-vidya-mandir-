"use client";

import { useLanguage } from "@/lib/language";
import { PageHero, Reveal, Section, SectionHeading } from "@/components/Section";

export default function Admissions() {
  const { t } = useLanguage();

  const steps = [
    { n: "01", title: t("admissions.step1.title"), text: t("admissions.step1.text") },
    { n: "02", title: t("admissions.step2.title"), text: t("admissions.step2.text") },
    { n: "03", title: t("admissions.step3.title"), text: t("admissions.step3.text") },
    { n: "04", title: t("admissions.step4.title"), text: t("admissions.step4.text") },
  ];

  const documents = [
    t("admissions.doc1"),
    t("admissions.doc2"),
    t("admissions.doc3"),
    t("admissions.doc4"),
    t("admissions.doc5"),
    t("admissions.doc6"),
  ];

  return (
    <>
      <PageHero
        eyebrow={t("admissions.hero.eyebrow")}
        title={t("admissions.hero.title")}
        intro={t("admissions.hero.intro")}
      />

      <Section>
        <SectionHeading eyebrow={t("admissions.process.eyebrow")} title={t("admissions.process.title")} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <article className="card-elegant h-full p-7">
                <span className="font-display text-3xl font-semibold text-gold">{s.n}</span>
                <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <div className="flex justify-center py-8">
        <img src="https://res.cloudinary.com/dwta5v9wi/image/upload/v1785330324/copy_of_section_end_uqkgou.png" alt="" className="h-5 opacity-40 sm:h-10" />
      </div>

      <Section alt>
        <SectionHeading eyebrow={t("admissions.checklist.eyebrow")} title={t("admissions.checklist.title")} />
        <ul className="mt-10 space-y-4">
          {documents.map((d, i) => (
            <Reveal key={d} delay={i * 0.05}>
              <li className="flex gap-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {d}
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
