"use client";

import { BookOpen, Heart, Scale, Shield, Handshake, Users, Lightbulb, HeartHandshake, Globe, Flag } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language";
import { PageHero, Reveal, Section, SectionHeading } from "@/components/Section";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const coreValueData = [
  { mr: "ज्ञान", en: "Knowledge", icon: BookOpen },
  { mr: "संस्कार", en: "Values", icon: Heart },
  { mr: "शिस्त", en: "Discipline", icon: Scale },
  { mr: "प्रामाणिकपणा", en: "Honesty", icon: Shield },
  { mr: "आदर", en: "Respect", icon: Handshake },
  { mr: "सहकार्य", en: "Cooperation", icon: Users },
  { mr: "सर्जनशीलता", en: "Creativity", icon: Lightbulb },
  { mr: "करुणा", en: "Compassion", icon: HeartHandshake },
  { mr: "सामाजिक बांधिलकी", en: "Social Commitment", icon: Globe },
  { mr: "देशप्रेम", en: "Patriotism", icon: Flag },
];

export default function About() {
  const { t, language } = useLanguage();
  const values = coreValueData;

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
        <Reveal delay={0.08} className="mt-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col items-center rounded-2xl border border-gold/20 bg-surface p-5 text-center shadow-soft transition-all duration-300 hover:border-gold/60 hover:shadow-lift"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="mt-3 font-display text-sm font-semibold leading-tight text-primary">
                    {language === "en" ? v.en : v.mr}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </Reveal>
      </Section>
    </>
  );
}
