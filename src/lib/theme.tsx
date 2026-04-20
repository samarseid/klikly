import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "klikly-theme";

// 🔥 ENG MUHIM — initial theme
function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;

    if (stored === "light" || stored === "dark") {
      return stored;
    }

    return "light";
  } catch {
    return "light";
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // 🔥 FIX: function orqali initialize
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  // 🔥 DOM + localStorage sync
  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(theme);

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
  }, [theme]);

  const setTheme = (t: Theme) => setThemeState(t);

  const toggleTheme = () =>
    setThemeState((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
