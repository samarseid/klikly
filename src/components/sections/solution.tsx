import { motion } from "framer-motion";
import { Check, Search, Sparkles, CreditCard } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionKicker } from "@/components/section-kicker";

const STEP_ICONS = [Search, Sparkles, CreditCard];

export function SolutionSection() {
  const { t } = useI18n();

  return (
    <section id="solution" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionKicker label={t("solution.kicker")} variant="success" />
        <div className="mt-6 max-w-3xl space-y-5">
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {t("solution.title")}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">{t("solution.subtitle")}</p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card relative rounded-2xl p-7"
              >
                <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-brand-soft">
                  <Icon className="size-5" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{t(`solution.steps.${i}.title`)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`solution.steps.${i}.body`)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Feature checklist */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4"
            >
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check className="size-4" />
              </div>
              <span className="text-sm font-medium">{t(`solution.feature.${i}`)}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
