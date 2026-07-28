"use client";

import { useLanguage } from "@/lib/language";
import { PageHero, Reveal, Section, SectionHeading } from "@/components/Section";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const coreValues = [
  "ज्ञान", "संस्कार", "शिस्त", "प्रामाणिकपणा", "आदर",
  "सहकार्य", "सर्जनशीलता", "करुणा", "सामाजिक बांधिलकी", "देशप्रेम",
];

const coreValuesEn = [
  "Knowledge (ज्ञान)", "Values (संस्कार)", "Discipline (शिस्त)", "Honesty (प्रामाणिकपणा)", "Respect (आदर)",
  "Cooperation (सहकार्य)", "Creativity (सर्जनशीलता)", "Compassion (करुणा)", "Social Commitment (सामाजिक बांधिलकी)", "Patriotism (देशप्रेम)",
];

export default function About() {
  const { t, language } = useLanguage();
  const values = language === "en" ? coreValuesEn : coreValues;

  return (
    <>
      <PageHero
        eyebrow="About Us | आमच्याबद्दल"
        title={t("home.hero.title")}
        intro={t("about.history.p1")}
      />

      <Section>
        <SectionHeading
          eyebrow="Brief History of the School"
          title="शाळेचा संक्षिप्त इतिहास"
          intro={t("about.history.p2")}
        />
        <Reveal delay={0.08}>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            {t("about.history.p3")}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {t("about.history.p4")}
          </p>
        </Reveal>
      </Section>

      <Section alt>
        <SectionHeading
          eyebrow={language === "en" ? "School Motto / Tagline" : "शाळेचे ब्रीदवाक्य"}
          title={t("home.hero.tagline")}
          center
        />
      </Section>

      <Section>
        <SectionHeading
          eyebrow={language === "en" ? "Our Mission" : "आमचे ध्येय"}
          title=""
          intro={t("about.mission.text")}
          center
        />
      </Section>

      <Section alt>
        <SectionHeading
          eyebrow={language === "en" ? "School Logo & Motto" : "शाळेचा लोगो आणि ब्रीदवाक्य"}
          title={t("home.hero.motto")}
          center
        />
        <Reveal delay={0.08} className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t("about.logo.text")}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {t("about.logo.motto")}
          </p>
          <div className="mt-8">
            <ImagePlaceholder label="School Logo" ratio="1/1" className="mx-auto h-40 w-40 rounded-full" />
          </div>
        </Reveal>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={language === "en" ? "Our Core Values" : "आमची मूलभूत मूल्ये"}
          title=""
          center
        />
        <Reveal delay={0.08} className="mt-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {values.map((v, i) => (
              <span
                key={i}
                className="rounded-full border border-gold/40 bg-surface px-5 py-2 font-display text-sm font-medium text-primary shadow-soft"
              >
                {v}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>
    </>
  );
}
