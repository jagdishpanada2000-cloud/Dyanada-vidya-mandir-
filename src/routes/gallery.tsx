import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { PageHero, Reveal, Section } from "@/components/Section";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Gyanada Vidya Mandir, Ulhasnagar-4" },
      {
        name: "description",
        content:
          "Photographs of campus life, events, sport and culture at Gyanada Vidya Mandir, Ulhasnagar-4.",
      },
      { property: "og:title", content: "Gallery | Gyanada Vidya Mandir, Ulhasnagar-4" },
      {
        property: "og:description",
        content: "Photographs of campus life, events, sport and culture at our Ulhasnagar-4 school.",
      },
    ],
  }),
  component: Gallery,
});

type Category = "All" | "Campus" | "Events" | "Sport" | "Culture";

const filters: { key: Category; labelKey: string }[] = [
  { key: "All", labelKey: "gallery.filter1" },
  { key: "Campus", labelKey: "gallery.filter2" },
  { key: "Events", labelKey: "gallery.filter3" },
  { key: "Sport", labelKey: "gallery.filter4" },
  { key: "Culture", labelKey: "gallery.filter5" },
];

const items: { labelKey: string; category: Category; ratio: "4/3" | "3/4" }[] = [
  { labelKey: "gallery.item1", category: "Campus", ratio: "4/3" },
  { labelKey: "gallery.item2", category: "Events", ratio: "3/4" },
  { labelKey: "gallery.item3", category: "Sport", ratio: "4/3" },
  { labelKey: "gallery.item4", category: "Campus", ratio: "4/3" },
  { labelKey: "gallery.item5", category: "Culture", ratio: "3/4" },
  { labelKey: "gallery.item6", category: "Events", ratio: "4/3" },
  { labelKey: "gallery.item7", category: "Sport", ratio: "4/3" },
  { labelKey: "gallery.item8", category: "Campus", ratio: "3/4" },
  { labelKey: "gallery.item9", category: "Culture", ratio: "4/3" },
];

function Gallery() {
  const { t } = useLanguage();
  const [active, setActive] = useState<Category>("All");
  const visible = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <>
      <PageHero
        eyebrow={t("gallery.hero.eyebrow")}
        title={t("gallery.hero.title")}
        intro={t("gallery.hero.intro")}
      />

      <Section>
        <Reveal className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setActive(f.key)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm transition-all",
                active === f.key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-surface text-muted-foreground hover:border-gold hover:text-primary",
              )}
            >
              {t(f.labelKey)}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {visible.map((item, i) => (
            <Reveal key={item.labelKey} delay={(i % 6) * 0.05} className="break-inside-avoid">
              <figure className="group">
                <ImagePlaceholder label={t(item.labelKey)} ratio={item.ratio} />
                <figcaption className="mt-3 text-xs tracking-[0.14em] uppercase text-muted-foreground transition-colors group-hover:text-primary">
                  {t(item.labelKey)}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
