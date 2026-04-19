import { motion } from "framer-motion";
import { Users, Target, Rocket, Brain } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionKicker } from "@/components/section-kicker";

const ICONS = [Users, Target, Rocket, Brain];

export function WhyUsSection() {
  const { t } = useI18n();

  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionKicker label={t("why.kicker")} />
        <h2 className="mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {t("why.title")}
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-brand-soft">
                  <Icon className="size-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{t(`why.${i}.title`)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`why.${i}.body`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
