import { motion } from "framer-motion";
import {
  Layers,
  AlertTriangle,
  ShieldOff,
  Clock,
  Brain,
  CreditCard,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionKicker } from "@/components/section-kicker";

const ICONS = [Layers, AlertTriangle, ShieldOff, Clock, Brain, CreditCard];

export function ProblemSection() {
  const { t } = useI18n();

  return (
    <section id="problem" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionKicker label={t("problem.kicker")} variant="warning" />
        <div className="mt-6 max-w-3xl space-y-5">
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {t("problem.title")}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">{t("problem.subtitle")}</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-card group rounded-2xl p-6 transition-all hover:border-primary/40"
              >
                <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                  <Icon className="size-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{t(`problem.list.${i}.title`)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`problem.list.${i}.body`)}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel mt-12 rounded-2xl p-8 sm:p-10"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-primary">
            {t("problem.scenario.title")}
          </div>
          <p className="mt-4 text-lg italic leading-relaxed text-foreground/90 sm:text-xl">
            {t("problem.scenario.body")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
