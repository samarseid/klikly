import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, User } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionKicker } from "@/components/section-kicker";

type Msg = { role: "user" | "ai"; text: string };

export function ChatbotSection() {
  const { t } = useI18n();
  const [messages, setMessages] = useState<Msg[]>([
    { role: "ai", text: t("chatbot.a.0").replace(/^.*?: /, "") },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(1);

  const suggestions = [t("chatbot.q.0"), t("chatbot.q.1"), t("chatbot.q.2"), t("chatbot.q.3")];
  const answers = [t("chatbot.a.0"), t("chatbot.a.1"), t("chatbot.a.2"), t("chatbot.a.3")];

  const send = (q: string) => {
    if (!q.trim()) return;
    const idx = suggestions.indexOf(q);
    const reply =
      idx >= 0
        ? answers[idx]
        : answers[step % answers.length];
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "ai", text: reply }]);
      setStep((s) => s + 1);
    }, 600);
  };

  return (
    <section id="chatbot" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionKicker label={t("chatbot.kicker")} />
        <div className="mt-6 max-w-3xl space-y-5">
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {t("chatbot.title")}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">{t("chatbot.subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-4">
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Try a question
            </div>
            {suggestions.map((q, i) => (
              <button
                key={i}
                type="button"
                onClick={() => send(q)}
                className="glass-card group block w-full rounded-xl p-4 text-left text-sm transition-all hover:border-primary/40"
              >
                <span className="text-muted-foreground group-hover:text-foreground">{q}</span>
              </button>
            ))}
          </div>

          <div className="glass-card flex h-[480px] flex-col rounded-2xl lg:col-span-8">
            <div className="flex items-center gap-3 border-b border-white/5 p-4">
              <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-brand-soft">
                <Sparkles className="size-4" />
              </div>
              <div>
                <div className="text-sm font-semibold">Klikly AI</div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
                  Online
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto p-5">
              <AnimatePresence initial={false}>
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-3 ${m.role === "user" ? "justify-end" : ""}`}
                  >
                    {m.role === "ai" && (
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                        <Sparkles className="size-3.5" />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                        m.role === "user"
                          ? "bg-gradient-brand text-primary-foreground"
                          : "border border-white/5 bg-white/[0.03]"
                      }`}
                    >
                      {m.text}
                    </div>
                    {m.role === "user" && (
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-white/5 text-muted-foreground">
                        <User className="size-3.5" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex gap-2 border-t border-white/5 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("chatbot.placeholder")}
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 text-sm font-semibold text-primary-foreground shadow-brand-soft transition-transform hover:scale-105"
              >
                <Send className="size-4" />
                <span className="hidden sm:inline">{t("chatbot.send")}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
