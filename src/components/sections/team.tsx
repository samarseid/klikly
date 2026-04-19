import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { SectionKicker } from "@/components/section-kicker";

// 👇 AVATARLAR
import ss from "@/assets/team/ss.jpg";
import ty from "@/assets/team/ty.jpg";
import ax from "@/assets/team/ax.jpg";
import ms from "@/assets/team/ms.jpg";

const TEAM_AVATARS = [ss, ty, ax, ms];

export function TeamSection() {
  const { t } = useI18n();

  return (
    <section id="team" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionKicker label={t("team.kicker")} />

        <div className="mt-6 max-w-3xl space-y-5">
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {t("team.title")}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            {t("team.subtitle")}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all hover:border-primary/40"
            >
              {/* glow background */}
              <div
                className="absolute -right-12 -top-12 size-40 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-60"
                style={{ background: "oklch(0.62 0.19 255 / 0.5)" }}
              />

              <div className="relative">

                {/* 👇 AVATAR (DUMALOQ RASM) */}
                <div className="relative">
                  <div className="size-16 rounded-full overflow-hidden ring-2 ring-primary/30 shadow-brand-soft">
                    <img
                      src={TEAM_AVATARS[i]}
                      alt={t(`team.${i}.name`)}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* NAME */}
                <h3 className="mt-5 text-lg font-bold">
                  {t(`team.${i}.name`)}
                </h3>

                {/* ROLE */}
                <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  {t(`team.${i}.role`)}
                </div>

                {/* BIO */}
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {t(`team.${i}.bio`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}