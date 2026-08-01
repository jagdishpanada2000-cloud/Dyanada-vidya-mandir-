"use client";

import { useLanguage } from "@/lib/language";
import { PageHero, Reveal, Section, SectionHeading } from "@/components/Section";

export default function About() {
  const { t, language } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow="About Us | आमच्याबद्दल"
        title={t("home.hero.title")}
        intro={t("about.history.p1")}
        titleClassName={language === "en" ? "xl:whitespace-nowrap" : undefined}
      />

      <Section>
        <SectionHeading
          eyebrow="Brief History of the School"
          title={t("about.history.title")}
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
      <div className="flex justify-center py-8">
        <img src="https://res.cloudinary.com/dwta5v9wi/image/upload/v1785330324/copy_of_section_end_uqkgou.png" alt="" className="h-5 opacity-40 sm:h-10" />
      </div>

      <Section alt>
        <SectionHeading
          eyebrow={language === "en" ? "School Motto / Tagline" : "शाळेचे ब्रीदवाक्य"}
          title={t("home.hero.tagline")}
          center
        />
      </Section>
      <div className="flex justify-center py-8">
        <img src="https://res.cloudinary.com/dwta5v9wi/image/upload/v1785330324/copy_of_section_end_uqkgou.png" alt="" className="h-5 opacity-40 sm:h-10" />
      </div>

      <Section>
        <SectionHeading
          eyebrow={language === "en" ? "Our Mission" : "आमचे ध्येय"}
          title=""
          intro={t("about.mission.text")}
          center
        />
      </Section>
      <div className="flex justify-center py-8">
        <img src="https://res.cloudinary.com/dwta5v9wi/image/upload/v1785330324/copy_of_section_end_uqkgou.png" alt="" className="h-5 opacity-40 sm:h-10" />
      </div>

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
            <img
              src="https://res.cloudinary.com/dwta5v9wi/image/upload/v1785258631/LOGO_krcdwh.png"
              alt="Dnyanada Vidya Mandir Logo"
              className="mx-auto h-40 w-40 rounded-full object-cover shadow-soft"
            />
          </div>
        </Reveal>
      </Section>
      <div className="flex justify-center py-8">
        <img src="https://res.cloudinary.com/dwta5v9wi/image/upload/v1785330324/copy_of_section_end_uqkgou.png" alt="" className="h-5 opacity-40 sm:h-10" />
      </div>
    </>
  );
}
