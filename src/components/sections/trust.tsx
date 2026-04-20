import { motion } from "framer-motion";
import { ShieldCheck, Star, Lock, BadgeCheck, Banknote, RefreshCw } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionKicker } from "@/components/section-kicker";

const ICONS = [ShieldCheck, BadgeCheck, Lock, Banknote, RefreshCw, Star];

export function TrustSection() {
  const { t } = useI18n();

  return (
    <section id="trust" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionKicker label={t("trust.kicker")} variant="success" />
        <div className="mt-6 max-w-3xl space-y-5">
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {t("trust.title")}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">{t("trust.subtitle")}</p>
        </div>

        {/* Top stats row */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="text-4xl font-bold tracking-tight text-gradient-brand">
                {t(`trust.stats.${i}.value`)}
              </div>
              <div className="mt-2 text-sm font-medium">{t(`trust.stats.${i}.label`)}</div>
              <div className="mt-1 text-xs text-muted-foreground">
                {t(`trust.stats.${i}.note`)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pillars */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-card group rounded-2xl p-6 transition-all hover:border-primary/40"
              >
                <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{t(`trust.pillars.${i}.title`)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`trust.pillars.${i}.body`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
