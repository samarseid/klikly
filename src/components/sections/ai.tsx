import { motion } from "framer-motion";
import { MessageSquare, Network, LineChart, Brain } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionKicker } from "@/components/section-kicker";

const ICONS = [MessageSquare, Network, LineChart, Brain];

export function AISection() {
  const { t } = useI18n();

  return (
    <section id="ai" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionKicker label={t("ai.kicker")} />
        <div className="mt-6 max-w-3xl space-y-5">
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {t("ai.title")}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">{t("ai.subtitle")}</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card group relative overflow-hidden rounded-2xl p-7"
              >
                <div
                  className="absolute -right-10 -top-10 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "oklch(0.62 0.19 255 / 0.5)" }}
                />
                <div className="relative">
                  <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{t(`ai.modules.${i}.title`)}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(`ai.modules.${i}.body`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
