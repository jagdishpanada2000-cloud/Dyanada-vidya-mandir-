import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { PageHero, Reveal, Section, SectionHeading } from "@/components/Section";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const Route = createFileRoute("/highlights")({
  head: () => ({
    meta: [
      { title: "Highlights | Gyanada Vidya Mandir, Ulhasnagar-4" },
      {
        name: "description",
        content:
          "Achievements, events and news from the current academic year at Gyanada Vidya Mandir, Ulhasnagar-4.",
      },
      { property: "og:title", content: "Highlights | Gyanada Vidya Mandir, Ulhasnagar-4" },
      {
        property: "og:description",
        content: "Achievements, events and news from the current academic year.",
      },
    ],
  }),
  component: Highlights,
});

const highlightData = [
  { tagKey: "highlights.h1.tag", titleKey: "highlights.h1.title", textKey: "highlights.h1.text", date: "January 2026" },
  { tagKey: "highlights.h2.tag", titleKey: "highlights.h2.title", textKey: "highlights.h2.text", date: "December 2025" },
  { tagKey: "highlights.h3.tag", titleKey: "highlights.h3.title", textKey: "highlights.h3.text", date: "November 2025" },
  { tagKey: "highlights.h4.tag", titleKey: "highlights.h4.title", textKey: "highlights.h4.text", date: "September 2025" },
];

function Highlights() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero
        eyebrow={t("highlights.hero.eyebrow")}
        title={t("highlights.hero.title")}
        intro={t("highlights.hero.intro")}
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {highlightData.map((h, i) => (
            <Reveal key={h.titleKey} delay={i * 0.07}>
              <article className="card-elegant grid h-full gap-6 p-6 sm:grid-cols-[minmax(0,0.8fr)_1.2fr]">
                <ImagePlaceholder label={t(h.tagKey)} ratio="4/3" />
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-border bg-beige px-3 py-1 text-[0.65rem] tracking-[0.16em] uppercase text-primary">
                      {t(h.tagKey)}
                    </span>
                    <span className="text-xs text-muted-foreground">{h.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl leading-snug font-semibold">
                    {t(h.titleKey)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(h.textKey)}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section alt>
        <SectionHeading
          eyebrow={t("highlights.calendar.eyebrow")}
          title={t("highlights.calendar.title")}
          intro={t("highlights.calendar.intro")}
          center
        />
      </Section>
    </>
  );
}
