import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

// LOGOLAR
import logoDark from "@/assets/Logo.png";        // dark uchun
import logoLight from "@/assets/logo-light.png"; // light uchun

export function SiteFooter() {
  const { t } = useI18n();
  const { theme } = useTheme();
  const year = new Date().getFullYear();

  // 🔥 THEME GA QARAB LOGO
  const currentLogo = theme === "dark" ? logoDark : logoLight;

  return (
    <footer className="border-t border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="section-shell py-16">
        <div className="grid gap-12 md:grid-cols-4">
          
          {/* LEFT */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img
                key={theme} // smooth change
                src={currentLogo}
                alt="Klikly app preview"
                className="transition-all duration-300"
                width={120}
                height={120}
              />
            </div>

            <p className="max-w-xs text-sm text-muted-foreground">
              {t("footer.tagline")}
            </p>

            <div className="flex items-center gap-3">
              {/* Twitter */}
              <a
                href="https://twitter.com/klikly"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-2.5 text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter className="size-4" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/klikly"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-2.5 text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/kliklyuz"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-2.5 text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="size-4" />
              </a>

              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@klikly.uz&su=Klikly haqida savol&body=Assalomu alaykum"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-2.5 text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          {/* PRODUCT */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {t("footer.product")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#solution" className="hover:text-primary">Solution</a></li>
              <li><a href="#business" className="hover:text-primary">Business</a></li>
              <li><a href="#demo" className="hover:text-primary">Demo</a></li>
              <li><a href="#download" className="hover:text-primary">Download</a></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {t("footer.company")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#team" className="hover:text-primary">Team</a></li>
              <li><a href="#why" className="hover:text-primary">Why Klikly</a></li>
              <li><a href="mailto:hello@klikly.app" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {year} Klikly. {t("footer.rights")}</div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}