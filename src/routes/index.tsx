import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { Reveal, Section } from "@/components/Section";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gyanada Vidya Mandir | ज्ञानदा विद्या मंदिर, उल्हासनगर-४" },
      {
        name: "description",
        content: "Gyanada Vidya Mandir, Ulhasnagar-4 — knowledge, values and quality education since 1975.",
      },
      { property: "og:title", content: "Gyanada Vidya Mandir | ज्ञानदा विद्या मंदिर, उल्हासनगर-४" },
      {
        property: "og:description",
        content: "A 50-year legacy of learning in Ulhasnagar-4. Explore academics, facilities, admissions and the Gyanada community.",
      },
    ],
  }),
  component: Home,
});

const coreValues = [
  "ज्ञान", "संस्कार", "शिस्त", "प्रामाणिकपणा", "आदर",
  "सहकार्य", "सर्जनशीलता", "करुणा", "सामाजिक बांधिलकी", "देशप्रेम",
];

const coreValuesEn = [
  "Knowledge (ज्ञान)", "Values (संस्कार)", "Discipline (शिस्त)", "Honesty (प्रामाणिकपणा)", "Respect (आदर)",
  "Cooperation (सहकार्य)", "Creativity (सर्जनशीलता)", "Compassion (करुणा)", "Social Commitment (सामाजिक बांधिलकी)", "Patriotism (देशप्रेम)",
];

function Home() {
  const { t, language } = useLanguage();

  const stats = [
    { value: "1975", label: t("home.stats.founded") },
    { value: "1,200+", label: t("home.stats.students") },
    { value: "80+", label: t("home.stats.educators") },
    { value: "96%", label: t("home.stats.results") },
  ];

  const values = language === "en" ? coreValuesEn : coreValues;

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
                to="/admissions"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-lift"
              >
                {t("home.hero.cta")}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={1.6}
                />
              </Link>
              <Link
                to="/about"
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
            <ImagePlaceholder label="Gyanada Vidya Mandir Campus" ratio="4/5" className="shadow-lift" />
            <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl border border-border bg-surface/80 p-5 shadow-soft backdrop-blur-md sm:block">
              <span className="font-display text-3xl font-semibold text-primary">50+</span>
              <p className="mt-1 text-xs tracking-[0.16em] uppercase text-muted-foreground">
                {t("home.hero.badge")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border bg-beige">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07} className="text-center">
              <div className="font-display text-4xl font-semibold text-primary sm:text-5xl">
                {s.value}
              </div>
              <p className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-beige py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl leading-tight font-semibold sm:text-4xl">
              {language === "en" ? "Our Core Values" : "आमची मूलभूत मूल्ये"}
            </h2>
            <div className="rule-gold mx-auto mt-5" />
          </Reveal>
          <Reveal delay={0.08} className="mt-10">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
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
        </div>
      </section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <ImagePlaceholder label="School Building" ratio="5/4" />
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
