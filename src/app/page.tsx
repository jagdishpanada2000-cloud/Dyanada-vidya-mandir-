"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Heart, Scale, Shield, Handshake, Users, Lightbulb, HeartHandshake, Globe, Flag } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { Reveal, Section } from "@/components/Section";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { toMarathiNum } from "@/lib/utils";

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

const missionImages = [
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785325918/2_erqz3m.jpg",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785326265/3_jrpjcl.jpg",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785326265/4_zkgbso.jpg",
];

export default function Home() {
  const { t, language } = useLanguage();
  const [missionImg, setMissionImg] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setMissionImg((i) => (i + 1) % missionImages.length), 4000);
    return () => clearInterval(id);
  }, []);

  const stats = [
    { value: "1975", label: t("home.stats.founded") },
    { value: "250", label: t("home.stats.students") },
    { value: "77%", label: t("home.stats.results") },
  ];

  const values = coreValueData;

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">{t("home.hero.eyebrow")}</span>
            <p className="mt-3 font-display text-lg italic text-gold sm:text-xl">
              {t("home.hero.motto")}
            </p>
            <h1 className="mt-4 font-display text-[2.75rem] leading-[1.02] font-semibold sm:text-6xl lg:text-7xl">
              {t("home.hero.title")}
            </h1>
            <div className="rule-gold mt-7" />
            <p className="mt-6 font-display text-xl font-semibold text-primary sm:text-2xl">
              {t("home.hero.tagline")}
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t("home.hero.desc")}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/admissions"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-lift"
              >
                {t("home.hero.cta")}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={1.6}
                />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-xl border border-border bg-surface px-6 py-3.5 text-sm font-medium text-primary transition-colors hover:border-gold"
              >
                {t("home.hero.cta2")}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <img src="https://res.cloudinary.com/dwta5v9wi/image/upload/v1785325733/1_ayyjy1.jpg" alt="Dnyanada Vidya Mandir Campus" className="h-full w-full rounded-2xl object-cover shadow-lift" />
            <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl border border-border bg-surface/80 p-5 shadow-soft backdrop-blur-md sm:block">
              <span className="font-display text-3xl font-semibold text-primary">{language === "mr" ? toMarathiNum("50+") : "50+"}</span>
              <p className="mt-1 text-xs tracking-[0.16em] uppercase text-muted-foreground">
                {t("home.hero.badge")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border bg-beige">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-14 sm:grid-cols-3 lg:grid-cols-3 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07} className="text-center">
              <div className="font-display text-4xl font-semibold text-primary sm:text-5xl">
                {language === "mr" ? toMarathiNum(s.value) : s.value}
              </div>
              <p className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="flex justify-center py-8">
        <img src="https://res.cloudinary.com/dwta5v9wi/image/upload/v1785330324/copy_of_section_end_uqkgou.png" alt="" className="h-5 opacity-40 sm:h-10" />
      </div>

      <section className="border-b border-border bg-beige py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl leading-tight font-semibold sm:text-4xl">
              {language === "en" ? "Our Core Values" : "आमची मूलभूत मूल्ये"}
            </h2>
            <div className="rule-gold mx-auto mt-5" />
          </Reveal>
          <Reveal delay={0.08} className="mt-12">
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
        </div>
      </section>

      <div className="flex justify-center py-8">
        <img src="https://res.cloudinary.com/dwta5v9wi/image/upload/v1785330324/copy_of_section_end_uqkgou.png" alt="" className="h-5 opacity-40 sm:h-10" />
      </div>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={missionImg}
                  src={missionImages[missionImg]}
                  alt="School Building"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                />
              </AnimatePresence>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="eyebrow">{language === "en" ? "Our Mission" : "आमचे ध्येय"}</span>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {t("about.mission.text")}
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <div className="flex justify-center py-8">
        <img src="https://res.cloudinary.com/dwta5v9wi/image/upload/v1785330324/copy_of_section_end_uqkgou.png" alt="" className="h-5 opacity-40 sm:h-10" />
      </div>

      <section className="bg-primary py-16 text-center text-primary-foreground">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal>
            <p className="font-display text-2xl leading-snug font-semibold sm:text-3xl">
              {t("home.closing")}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
