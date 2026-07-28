"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language";
import { PageHero, Reveal, Section, SectionHeading } from "@/components/Section";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

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

  const dates = [
    { label: t("admissions.date1.label"), value: "15 January 2026" },
    { label: t("admissions.date2.label"), value: "28 February 2026" },
    { label: t("admissions.date3.label"), value: "10 – 20 March 2026" },
    { label: t("admissions.date4.label"), value: "15 June 2026" },
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

      <Section alt>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={t("admissions.dates.eyebrow")} title={t("admissions.dates.title")} />
            <div className="mt-10">
              {dates.map((d, i) => (
                <Reveal key={d.label} delay={i * 0.06}>
                  <div className="flex items-baseline justify-between gap-6 border-t border-border py-5">
                    <span className="text-sm text-muted-foreground">{d.label}</span>
                    <span className="font-display text-lg font-semibold text-primary">
                      {d.value}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
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
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <ImagePlaceholder label={t("admissions.office")} ratio="4/3" />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow={t("admissions.visit.eyebrow")}
              title={t("admissions.visit.title")}
              intro={t("admissions.visit.intro")}
            />
            <Reveal delay={0.1}>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-lift"
              >
                {t("admissions.visit.cta")}
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
