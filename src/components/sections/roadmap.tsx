import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { SectionKicker } from "@/components/section-kicker";

export function RoadmapSection() {
  const { t } = useI18n();

  return (
    <section id="roadmap" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionKicker label={t("roadmap.kicker")} />
        <h2 className="mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {t("roadmap.title")}
        </h2>

        <div className="relative mt-16">
          {/* Line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-1/2 md:block" />

          <div className="space-y-10">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[direction:rtl]"
                }`}
              >
                <div
                  className={`glass-card rounded-2xl p-6 md:[direction:ltr] ${
                    i === 1 ? "border-primary/40 shadow-brand-soft" : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {String(i + 1).padStart(2, "0")} · {t(`roadmap.${i}.title`)}
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${
                        i === 0
                          ? "bg-emerald-500/10 text-emerald-400"
                          : i === 1
                            ? "bg-primary/15 text-primary"
                            : "bg-white/5 text-muted-foreground"
                      }`}
                    >
                      {t(`roadmap.${i}.tag`)}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {t(`roadmap.${i}.body`)}
                  </p>
                </div>
                {/* Dot */}
                <div className="absolute left-4 top-6 hidden size-3 -translate-x-1/2 rounded-full bg-gradient-brand shadow-brand-glow md:left-1/2 md:block" />
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
