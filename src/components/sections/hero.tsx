import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

// 👇 2 ta rasm
import heroMockupLight from "@/assets/her-app-mockup-light.png";
import heroMockupDark from "@/assets/hero-app-mockup-dark.jpg";

export function HeroSection() {
  const { t } = useI18n();
  const { theme } = useTheme(); // 👈 MUHIM

  // 👇 theme ga qarab rasm tanlanadi
  const heroMockup =
    theme === "dark" ? heroMockupDark : heroMockupLight;

  return (
    <section id="home" className="relative pt-12 pb-24 sm:pt-20 sm:pb-32">
      <div className="section-shell grid items-center gap-16 lg:grid-cols-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 lg:col-span-6"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            {t("hero.badge")}
          </div>

          <h1 className="text-balance text-5xl font-bold leading-[1.0] tracking-tighter sm:text-6xl lg:text-7xl">
            {t("hero.title1")} <br />
            <span className="text-gradient-brand">{t("hero.title2")}</span>
          </h1>

          <p className="max-w-[52ch] text-pretty text-lg text-muted-foreground sm:text-xl">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#demo"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-7 py-4 text-base font-semibold text-primary-foreground shadow-brand-soft transition-transform hover:scale-105"
            >
              {t("hero.cta.demo")}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#download"
              className="glass-card inline-flex items-center gap-2 rounded-xl px-7 py-4 text-base font-semibold transition-colors hover:bg-white/8"
            >
              <Download className="size-4" />
              {t("hero.cta.download")}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 pt-6">
            <Stat icon={ShieldCheck} value="14,000+" label={t("hero.stat1")} />
            <div className="hidden h-8 w-px bg-white/10 sm:block" />
            <Stat icon={Sparkles} value="3,000" label={t("hero.stat2")} />
            <div className="hidden h-8 w-px bg-white/10 sm:block" />
            <Stat icon={Zap} value="0.8s" label={t("hero.stat3")} />
          </div>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:col-span-6"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">

            {/* Glow */}
            <div
              className="absolute inset-10 rounded-full blur-[80px]"
              style={{
                background:
                  theme === "dark"
                    ? "oklch(0.62 0.19 255 / 0.45)"
                    : "oklch(0.75 0.18 255 / 0.25)",
              }}
              aria-hidden
            />

            {/* HERO IMAGE (SWAP) */}
            <img
              src={heroMockup}
              alt="Klikly app preview"
              className="relative z-10 size-full object-contain animate-float transition-all duration-500"
              width={1024}
              height={1024}
            />

            {/* Floating cards unchanged */}
            <div className="glass-card absolute left-0 top-12 z-20 hidden rounded-2xl p-4 sm:block">
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-emerald-400 animate-pulse-glow" />
                <div>
                  <div className="text-xs font-semibold">AI Match Found</div>
                  <div className="text-[10px] text-muted-foreground">
                    98% confidence
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card absolute -right-2 bottom-16 z-20 hidden w-56 space-y-2 rounded-2xl p-4 sm:block">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Market Pulse
                </span>
                <span className="text-[10px] font-bold text-emerald-400">
                  +4.2%
                </span>
              </div>
              <div className="flex h-10 items-end gap-1">
                {[40, 60, 90, 70, 50, 80, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-primary/40 to-primary"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-primary">
        <Icon className="size-4" />
      </div>
      <div>
        <div className="text-lg font-bold tabular-nums">{value}</div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
      </div>
    </div>
  );
}