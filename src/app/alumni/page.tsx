"use client";

import { Quote } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/language";
import { PageHero, Reveal, Section, SectionHeading } from "@/components/Section";

const voiceKeys = [
  { nameKey: "alumni.v1.name", batchKey: "alumni.v1.batch", roleKey: "alumni.v1.role", quoteKey: "alumni.v1.quote", img: "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785253869/Rahul_Sonawane_rvtisp.jpg" },
  { nameKey: "alumni.v2.name", batchKey: "alumni.v2.batch", roleKey: "alumni.v2.role", quoteKey: "alumni.v2.quote", img: "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785253868/Mangesh_Gopale_m1vuod.jpg" },
  { nameKey: "alumni.v3.name", batchKey: "alumni.v3.batch", roleKey: "alumni.v3.role", quoteKey: "alumni.v3.quote", img: "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785253873/Roshan_Kalake_yg5zkk.jpg" },
  { nameKey: "alumni.v4.name", batchKey: "alumni.v4.batch", roleKey: "alumni.v4.role", quoteKey: "alumni.v4.quote", img: "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785253868/Jyotsna_Suralkar_cx6zeb.jpg" },
  { nameKey: "alumni.v5.name", batchKey: "alumni.v5.batch", roleKey: "alumni.v5.role", quoteKey: "alumni.v5.quote", img: "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785253871/Rakesh_Shinde_mwpbit.jpg" },
  { nameKey: "alumni.v6.name", batchKey: "alumni.v6.batch", roleKey: "alumni.v6.role", quoteKey: "alumni.v6.quote", img: "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785253870/Sopan_Avhad_wtacjv.jpg" },
  { nameKey: "alumni.v7.name", batchKey: "alumni.v7.batch", roleKey: "alumni.v7.role", quoteKey: "alumni.v7.quote", img: "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785560836/WhatsApp_Image_2026-08-01_at_10.35.55_AM_qorygu.jpg" },
];

export default function Alumni() {
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
            <Reveal key={v.nameKey} delay={i * 0.08} className="min-w-0">
              <article className="card-elegant flex h-full flex-col p-8">
                <Quote className="h-6 w-6 text-gold" strokeWidth={1.3} />
                <p className="mt-5 flex-1 font-display text-xl leading-snug text-foreground">
                  &ldquo;{t(v.quoteKey)}&rdquo;
                </p>
                <div className="mt-7 flex items-center gap-4 border-t border-border pt-6">
                  <Image src={v.img} alt={t(v.nameKey)} width={56} height={56} className="h-14 w-14 shrink-0 rounded-full object-cover" />
                  <div className="min-w-0">
                    <p className="truncate font-medium text-primary">{t(v.nameKey)}</p>
                    <p className="truncate text-xs text-muted-foreground">{t(v.batchKey)}</p>
                    <p className="truncate text-xs text-muted-foreground">{t(v.roleKey)}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfhV3fh7iDxtp0Jcj8q2yZCwM9Sf6g-JurNGK4_JpYv8O4Naw/viewform?usp=sharing&ouid=102128050377368930988"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl border border-gold bg-gold/10 px-8 py-4 text-base font-medium text-primary transition-colors hover:bg-gold/20"
          >
            {t("alumni.connect.feedback")}
          </a>
        </Reveal>
      </Section>
      <div className="flex justify-center py-8">
        <img src="https://res.cloudinary.com/dwta5v9wi/image/upload/v1785330324/copy_of_section_end_uqkgou.png" alt="" className="h-5 opacity-40 sm:h-10" />
      </div>

      <Section alt>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="https://res.cloudinary.com/dwta5v9wi/image/upload/v1785557303/reunion_filwwi.png"
                alt={t("alumni.reunion")}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="font-display text-4xl leading-tight font-semibold sm:text-5xl">
                {t("alumni.reunion")}
              </h2>
              <div className="rule-gold mt-5" />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${t("alumni.email")}`}
                  className="inline-flex items-center rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-lift"
                >
                  {t("alumni.connect.cta")}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
