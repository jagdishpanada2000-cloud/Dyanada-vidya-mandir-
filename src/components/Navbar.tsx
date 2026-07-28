"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "./nav-links";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language";

const navKey: Record<string, string> = {
  "/": "nav.home",
  "/about": "nav.about",
  "/academics": "nav.academics",
  "/facilities": "nav.facilities",
  "/highlights": "nav.highlights",
  "/gallery": "nav.gallery",
  "/alumni": "nav.alumni",
  "/contact": "nav.contact",
  "/admissions": "nav.admissions",
};

function LangToggle() {
  const { language, setLanguage } = useLanguage();
  return (
    <button
      type="button"
      onClick={() => setLanguage(language === "en" ? "mr" : "en")}
      className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-surface text-[0.65rem] font-semibold tracking-wider text-primary transition-colors hover:border-gold sm:h-9 sm:w-9 sm:rounded-xl"
      aria-label="Toggle language"
    >
      {language === "en" ? "म" : "EN"}
    </button>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-navbar/85 backdrop-blur-md transition-all duration-500",
        scrolled ? "border-border shadow-soft" : "border-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 transition-all duration-500 lg:px-8",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span
            className={cn(
              "grid shrink-0 place-items-center rounded-full bg-primary font-display text-primary-foreground transition-all duration-500",
              scrolled ? "h-9 w-9 text-sm" : "h-11 w-11 text-base",
            )}
          >
            ज्ञा
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-tight font-semibold text-primary sm:text-xl">
              ज्ञानदा विद्या मंदिर
            </span>
            <span className="hidden text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground sm:block">
              {t("footer.tagline")}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => {
            const active =
              link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                href={link.to}
                className="group relative px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {t(navKey[link.to])}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            );
          })}
          <LangToggle />
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <LangToggle />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface text-primary transition-colors hover:border-gold"
          >
            <Menu className="h-5 w-5" strokeWidth={1.6} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex h-dvh flex-col bg-background xl:hidden"
          >
            <div className="flex h-14 items-center justify-between border-b border-border px-5 sm:h-20 sm:border-b-0">
              <span className="font-display text-base font-semibold text-primary sm:text-xl">{t("nav.menu")}</span>
              <div className="flex items-center gap-2">
                <LangToggle />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-surface text-primary sm:h-10 sm:w-10 sm:rounded-xl"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.6} />
                </button>
              </div>
            </div>
            <nav className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-5 pb-6 sm:pb-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.035 }}
                >
                  <Link
                    href={link.to}
                    className="block border-b border-border/70 py-3 text-xl sm:py-4 sm:text-2xl font-display text-primary"
                  >
                    {t(navKey[link.to])}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
