import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { SectionKicker } from "@/components/section-kicker";

export function DemoSection() {
  const { t } = useI18n();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // progress update
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const update = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener("timeupdate", update);
    video.addEventListener("loadedmetadata", () => {
      setDuration(video.duration);
    });

    return () => {
      video.removeEventListener("timeupdate", update);
    };
  }, []);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      await video.play();
      setIsPlaying(true);
    }
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const time = (Number(e.target.value) / 100) * video.duration;
    video.currentTime = time;
    setProgress(Number(e.target.value));
  };

  const formatTime = (t: number) =>
    isNaN(t) ? "0:00" : `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;

  return (
    <section id="demo" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionKicker label={t("demo.kicker")} />

        <div className="mt-6 max-w-3xl space-y-5">
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {t("demo.title")}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            {t("demo.subtitle")}
          </p>
        </div>

        {/* CARD (UNCHANGED DESIGN) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card group relative mt-12 overflow-hidden rounded-3xl"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.46 0.16 258 / 0.4), oklch(0.13 0.03 260) 70%)",
            }}
          />

          <div className="fiber-grid absolute inset-0 opacity-30" />

          {/* labels */}
          <div className="absolute left-8 top-8 z-10 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Klikly · Demo Reel
          </div>

          <div className="absolute right-8 top-8 z-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary">
            <span className="size-1.5 rounded-full bg-primary animate-pulse-glow" />
            {formatTime(duration)}
          </div>

          {/* VIDEO */}
          <div className="relative mx-auto aspect-[9/16] w-full max-w-[420px] py-10">
            <video
              ref={videoRef}
              src="/videos/demo.mp4"
              className="h-full w-full object-contain bg-black"
              onEnded={() => setIsPlaying(false)}
              playsInline
            />

            {/* play button */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 z-30 flex items-center justify-center"
              >
                <div className="flex size-20 items-center justify-center rounded-full bg-gradient-brand text-white shadow-brand-glow">
                  <Play className="size-8 ml-1" fill="currentColor" />
                </div>
              </button>
            )}
          </div>

          {/* CONTROLS (NEW BUT CLEAN) */}
          <div className="absolute bottom-6 left-6 right-6 z-20 space-y-3">
            <div className="flex items-center justify-between text-xs text-white/70">
              <span>{formatTime((videoRef.current?.currentTime) || 0)}</span>
              <span>{formatTime(duration)}</span>
            </div>

            {/* progress bar */}
            <input
              type="range"
              value={progress}
              onChange={seek}
              className="w-full accent-primary"
            />

            {/* title */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl font-bold text-white">
                  {t("demo.cta")}
                </div>
                <div className="text-sm text-white/60">
                  Register → Home Booking → Pay → Service Booking → Rate
                </div>
              </div>

              <button
                onClick={togglePlay}
                className="rounded-full bg-black/40 p-3 text-white backdrop-blur"
              >
                {isPlaying ? <Pause className="size-5" /> : <Play className="size-5" />}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}