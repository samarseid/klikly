import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

// LOGOLAR
import logoDark from "@/assets/Logo.png";        // dark mode uchun
import logoLight from "@/assets/logo-light.png"; // light mode uchun

const NAV_ITEMS = [
  { key: "nav.problem", href: "#problem" },
  { key: "nav.solution", href: "#solution" },
  { key: "nav.business", href: "#business" },
  { key: "nav.team", href: "#team" },
  { key: "nav.demo", href: "#demo" },
];

export function SiteHeader() {
  const { lang, setLang, t } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const langs: Lang[] = ["uz", "en", "ru"];

  // 🔥 THEME GA QARAB LOGO
  const currentLogo = theme === "dark" ? logoDark : logoLight;

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="section-shell flex h-18 items-center justify-between py-4">

        {/* LOGO */}
<Link to="/" className="group flex items-center gap-2.5">
  {/* LIGHT */}
  <img
    src={logoDark}
    alt="Klikly logo"
    className="h-9 w-auto object-contain transition-transform group-hover:scale-105 dark:hidden"
    width={36}
    height={36}
  />

  {/* DARK */}
  <img
    src={logoLight}
    alt="Klikly logo"
    className="h-9 w-auto object-contain transition-transform group-hover:scale-105 hidden dark:block"
    width={36}
    height={36}
  />
</Link>

  <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-secondary/50 text-foreground transition-colors hover:bg-secondary"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <div className="hidden items-center gap-0.5 rounded-full border border-border bg-secondary/50 p-1 sm:flex">
            {langs.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={cn(
                  "rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest transition-all",
                  lang === l
                    ? "bg-gradient-brand text-white shadow-brand-soft"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href="#download"
            className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-brand-soft transition-transform hover:scale-105 sm:inline-flex"
          >
            {t("nav.download")}
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="section-shell flex flex-col gap-4 py-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-foreground"
              >
                {t(item.key)}
              </a>
            ))}
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 self-start sm:hidden">
              {langs.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={cn(
                    "rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest",
                    lang === l ? "bg-gradient-brand text-white" : "text-muted-foreground",
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-brand px-5 py-3 text-center text-sm font-semibold text-primary-foreground sm:hidden"
            >
              {t("nav.download")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
