"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language";
import { PageHero, Reveal, Section } from "@/components/Section";
import { cn } from "@/lib/utils";

type Category = "All" | "Campus" | "Sport" | "Culture";

const filters: { key: Category; labelKey: string }[] = [
  { key: "All", labelKey: "gallery.filter1" },
  { key: "Campus", labelKey: "gallery.filter2" },
  { key: "Culture", labelKey: "gallery.filterCulture" },
  { key: "Sport", labelKey: "gallery.filter4" },
];

const sportImages = [
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785327271/WhatsApp_Image_2026-07-27_at_11.59.06_PM_1_nm5haq.jpg",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785327266/WhatsApp_Image_2026-07-27_at_11.59.00_PM_3_kyi9yn.jpg",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785326265/4_zkgbso.jpg",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785327256/WhatsApp_Image_2026-07-27_at_11.58.48_PM_wgxnqk.jpg",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785327256/WhatsApp_Image_2026-07-27_at_11.58.48_PM_1_xwjuef.jpg",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785327274/WhatsApp_Image_2026-07-27_at_11.59.09_PM_2_yhimdw.jpg",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785327265/WhatsApp_Image_2026-07-27_at_11.58.59_PM_1_gsjaqc.jpg",
];

const otherImages = [
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785327256/WhatsApp_Image_2026-07-27_at_11.58.49_PM_1_frkcmo.jpg",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785327256/WhatsApp_Image_2026-07-27_at_11.58.49_PM_2_ptwkqk.jpg",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785327257/WhatsApp_Image_2026-07-27_at_11.58.49_PM_3_lsoypn.jpg",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785327257/WhatsApp_Image_2026-07-27_at_11.58.50_PM_1_gmcg77.jpg",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785327257/WhatsApp_Image_2026-07-27_at_11.58.50_PM_finim4.jpg",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785327263/WhatsApp_Image_2026-07-27_at_11.58.56_PM_eidtt0.jpg",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785327266/WhatsApp_Image_2026-07-27_at_11.58.59_PM_ctzg97.jpg",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785327267/WhatsApp_Image_2026-07-27_at_11.59.01_PM_evg5qz.jpg",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785327273/WhatsApp_Image_2026-07-27_at_11.59.07_PM_ik7nl1.jpg",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785327272/WhatsApp_Image_2026-07-27_at_11.59.06_PM_kdrhxc.jpg",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785327271/WhatsApp_Image_2026-07-27_at_11.59.05_PM_2_p1xgwu.jpg",
];

const campusImages = [
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785327267/WhatsApp_Image_2026-07-27_at_11.59.00_PM_xzb6ib.jpg",
];

const cultureImages = [
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785553783/2_aixckg.png",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785553775/4_rkxlaz.png",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785553773/1_rjkawi.png",
  "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785553772/3_pdwawt.png",
];

const otherCategories: Category[] = ["Campus", "Culture"];

const items = [
  ...sportImages.map((src, i) => ({
    src,
    category: "Sport" as Category,
    ratio: (i % 2 === 0 ? "3/4" : "4/3") as "4/3" | "3/4",
  })),
  ...otherImages.map((src, i) => ({
    src,
    category: otherCategories[i % otherCategories.length],
    ratio: (i % 3 === 0 ? "3/4" : "4/3") as "4/3" | "3/4",
  })),
  ...campusImages.map((src, i) => ({
    src,
    category: "Campus" as Category,
    ratio: (i % 2 === 0 ? "3/4" : "4/3") as "4/3" | "3/4",
  })),
  ...cultureImages.map((src, i) => ({
    src,
    category: "Culture" as Category,
    ratio: (i % 2 === 0 ? "3/4" : "4/3") as "4/3" | "3/4",
  })),
];

export default function Gallery() {
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
            <Reveal key={i} delay={(i % 6) * 0.05} className="break-inside-avoid">
              <img
                src={item.src}
                alt=""
                className="w-full rounded-2xl object-cover"
                style={{ aspectRatio: item.ratio }}
              />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
