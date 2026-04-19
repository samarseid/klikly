import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient-brand">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-brand-soft"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Klikly — One Super App for Real Estate & Services" },
      {
        name: "description",
        content:
          "Klikly is the AI-powered Super App for real estate and services. Find homes, hire trusted professionals, and manage everything in one platform.",
      },
      { name: "author", content: "Klikly" },
      { property: "og:title", content: "Klikly — One Super App for Real Estate & Services" },
      {
        property: "og:description",
        content:
          "AI-powered marketplace for real estate and services. Verified listings, trusted specialists, instant booking.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Klikly" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('klikly-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.classList.add(t);}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <div className="relative min-h-screen overflow-hidden">
          {/* Ambient background fiber + glows */}
          <div className="pointer-events-none fixed inset-0 fiber-grid opacity-40" aria-hidden />
          <div
            className="pointer-events-none fixed -top-40 -left-40 size-[600px] rounded-full blur-[140px]"
            style={{ background: "oklch(0.46 0.16 258 / 0.25)" }}
            aria-hidden
          />
          <div
            className="pointer-events-none fixed -bottom-40 -right-40 size-[600px] rounded-full blur-[140px]"
            style={{ background: "oklch(0.62 0.19 255 / 0.18)" }}
            aria-hidden
          />
          <div className="relative z-10 flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
              <Outlet />
            </main>
            <SiteFooter />
          </div>
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
}
