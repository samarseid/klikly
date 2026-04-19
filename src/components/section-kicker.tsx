import { cn } from "@/lib/utils";

export function SectionKicker({
  label,
  variant = "default",
}: {
  label: string;
  variant?: "default" | "warning" | "success";
}) {
  const styles = {
    default: "border-primary/30 bg-primary/5 text-primary",
    warning: "border-destructive/30 bg-destructive/5 text-destructive",
    success: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400",
  };
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest",
        styles[variant],
      )}
    >
      <span className="size-1.5 rounded-full bg-current animate-pulse-glow" />
      {label}
    </div>
  );
}
