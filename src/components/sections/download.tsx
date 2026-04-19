import { motion } from "framer-motion";
import { Users, HardHat, Download } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionKicker } from "@/components/section-kicker";

const APPS = [
  {
    icon: Users,
    key: "users",
    file: "/apps/users.apk",
  },
  {
    icon: HardHat,
    key: "workers",
    file: "/apps/workers.apk",
  },
] as const;

export function DownloadSection() {
  const { t } = useI18n();

  return (
    <section id="download" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionKicker label={t("download.kicker")} />

        <div className="mt-6 max-w-3xl space-y-5">
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {t("download.title")}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            {t("download.subtitle")}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {APPS.map(({ icon: Icon, key, file }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card group relative overflow-hidden rounded-3xl p-8"
            >
              <div
                className="absolute -right-20 -top-20 size-60 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-50"
                style={{ background: "oklch(0.62 0.19 255 / 0.6)" }}
              />

              <div className="relative">
                <div className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-brand-soft">
                  <Icon className="size-6" />
                </div>

                <h3 className="text-2xl font-bold">
                  {t(`download.${key}.title`)}
                </h3>

                <p className="mt-3 text-base text-muted-foreground">
                  {t(`download.${key}.body`)}
                </p>

                {/* DOWNLOAD BUTTON */}
                <a
                  href={file}
                  download
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-brand-soft transition-transform hover:scale-105"
                >
                  <Download className="size-4" />
                  {t(`download.${key}.cta`)}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}