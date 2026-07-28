import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { PageHero, Reveal, Section, SectionHeading } from "@/components/Section";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const Route = createFileRoute("/alumni")({
  head: () => ({
    meta: [
      { title: "Alumni | Gyanada Vidya Mandir, Ulhasnagar-4" },
      {
        name: "description",
        content:
          "The Gyanada Vidya Mandir alumni network — notable graduates, reunions and ways to stay connected.",
      },
      { property: "og:title", content: "Alumni | Gyanada Vidya Mandir, Ulhasnagar-4" },
      {
        property: "og:description",
        content: "Notable graduates, reunions and ways to stay connected with the school.",
      },
    ],
  }),
  component: Alumni,
});

const voiceKeys = [
  { nameKey: "alumni.v1.name", batchKey: "alumni.v1.batch", roleKey: "alumni.v1.role", quoteKey: "alumni.v1.quote" },
  { nameKey: "alumni.v2.name", batchKey: "alumni.v2.batch", roleKey: "alumni.v2.role", quoteKey: "alumni.v2.quote" },
  { nameKey: "alumni.v3.name", batchKey: "alumni.v3.batch", roleKey: "alumni.v3.role", quoteKey: "alumni.v3.quote" },
];

function Alumni() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero
        eyebrow={t("alumni.hero.eyebrow")}
        title={t("alumni.hero.title")}
        intro={t("alumni.hero.intro")}
      />

      <Section>
        <SectionHeading eyebrow={t("alumni.voices.eyebrow")} title={t("alumni.voices.title")} />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {voiceKeys.map((v, i) => (
            <Reveal key={v.nameKey} delay={i * 0.08}>
              <article className="card-elegant flex h-full flex-col p-8">
                <Quote className="h-6 w-6 text-gold" strokeWidth={1.3} />
                <p className="mt-5 flex-1 font-display text-xl leading-snug text-foreground">
                  &ldquo;{t(v.quoteKey)}&rdquo;
                </p>
                <div className="mt-7 flex items-center gap-4 border-t border-border pt-6">
                  <ImagePlaceholder ratio="1/1" className="h-14 w-14 shrink-0 rounded-full" />
                  <div className="min-w-0">
                    <p className="truncate font-medium text-primary">{t(v.nameKey)}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {t(v.batchKey)} &middot; {t(v.roleKey)}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section alt>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <ImagePlaceholder label={t("alumni.reunion")} ratio="4/3" />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow={t("alumni.connect.eyebrow")}
              title={t("alumni.connect.title")}
              intro={t("alumni.connect.intro")}
            />
            <Reveal delay={0.1}>
              <a
                href={`mailto:${t("alumni.email")}`}
                className="mt-8 inline-flex items-center rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-lift"
              >
                {t("alumni.connect.cta")}
              </a>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
