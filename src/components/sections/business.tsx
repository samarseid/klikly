import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { SectionKicker } from "@/components/section-kicker";
import { TrendingUp } from "lucide-react";

export function BusinessSection() {
  const { t } = useI18n();

  return (
    <section id="business" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionKicker label={t("business.kicker")} />
        <div className="mt-6 max-w-3xl space-y-5">
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {t("business.title")}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">{t("business.subtitle")}</p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-card rounded-2xl p-6 transition-all hover:border-primary/40 hover:shadow-brand-soft"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {t(`business.streams.${i}.label`)}
              </div>
              <div className="mt-3 text-3xl font-bold text-gradient-brand">
                {t(`business.streams.${i}.value`)}
              </div>
              <div className="mt-3 text-sm text-muted-foreground">
                {t(`business.streams.${i}.desc`)}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel mt-10 grid gap-8 rounded-2xl p-8 sm:p-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
              <TrendingUp className="size-4" />
              {t("business.proj.title")}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t("business.proj.note")}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 lg:col-span-8">
            {[t("business.proj.y1"), t("business.proj.y2"), t("business.proj.y3")].map(
              (line, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-3 text-lg font-semibold leading-snug">{line}</div>
                </div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
