import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "./nav-links";
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

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="max-w-sm">
          <span className="font-display text-2xl font-semibold text-primary-foreground">
            ज्ञानदा विद्या मंदिर
          </span>
          <div className="mt-4 h-px w-14 bg-gold" />
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/75">
            {t("footer.desc")}
          </p>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.22em] uppercase text-gold">{t("footer.explore")}</h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-primary-foreground/75 transition-colors hover:text-gold"
                >
                  {t(navKey[link.to])}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.22em] uppercase text-gold">{t("footer.reachUs")}</h3>
          <ul className="mt-5 space-y-3.5 text-sm text-primary-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.6} />
              उल्हासनगर-४, ठाणे, महाराष्ट्र
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.6} />
              +91 251 XXX XXXX
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.6} />
              info@gyanadavm.edu.in
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>&copy; {new Date().getFullYear()} ज्ञानदा विद्या मंदिर. {t("footer.rights")}</span>
          <span>{t("footer.affiliation")}</span>
        </div>
      </div>
    </footer>
  );
}
