import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { SectionKicker } from "@/components/section-kicker";
import { Code2, Megaphone, Users, Settings2, ShieldPlus, Target } from "lucide-react";

const ICONS = [Code2, Megaphone, Users, Settings2] as const;

export function InvestmentSection() {
  const { t } = useI18n();

  return (
    <section id="investment" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionKicker label={t("investment.kicker")} />
        <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              {t("investment.title")}
            </h2>
            <p className="text-pretty text-lg text-muted-foreground max-w-2xl">
              {t("investment.subtitle")}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel rounded-2xl p-6 lg:col-span-5"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
              <Target className="size-4" />
              {t("investment.amountLabel")}
            </div>
            <div className="mt-3 text-5xl font-bold text-gradient-brand sm:text-6xl">
              {t("investment.amount")}
            </div>
            <div className="mt-3 text-sm text-muted-foreground">
              {t("investment.reserveLabel")}
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ICONS.map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all hover:border-primary/40 hover:shadow-brand-soft"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <div className="text-5xl font-bold leading-none text-gradient-brand">
                  {t(`investment.alloc.${i}.percent`)}
                </div>
              </div>
              <div className="mt-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {t(`investment.alloc.${i}.label`)}
              </div>
              <div className="mt-1 text-2xl font-semibold">
                {t(`investment.alloc.${i}.amount`)}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(`investment.alloc.${i}.desc`)}
              </p>
              <div
                className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/5"
                aria-hidden
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                  style={{
                    width: t(`investment.alloc.${i}.percent`),
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel mt-10 flex flex-col gap-6 rounded-2xl p-8 sm:flex-row sm:items-center sm:gap-8 sm:p-10"
        >
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <ShieldPlus className="size-6" />
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
              +10% · {t("investment.reserve.title")}
            </div>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("investment.reserve.desc")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
