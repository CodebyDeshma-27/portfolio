import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="font-mono text-xs text-primary">404 · not found</div>

        <h1 className="mt-3 text-3xl font-semibold text-foreground">
          This page doesn't exist
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          The link may be broken or the page may have moved.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center rounded-md border border-border bg-surface px-4 py-2 font-mono text-xs text-foreground hover:bg-surface-2 transition-colors"
          >
            ← Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="font-mono text-xs text-destructive">Error</div>

        <h1 className="mt-3 text-xl font-semibold text-foreground">
          This page didn't load
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try again or return to the homepage.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-primary px-4 py-2 font-mono text-xs text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Try Again
          </button>

          <Link
            to="/"
            className="rounded-md border border-border bg-surface px-4 py-2 font-mono text-xs text-foreground hover:bg-surface-2 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

const SITE_TITLE = "Deshma Udayakumar";

const SITE_DESC =
  "Portfolio of Deshma Udayakumar showcasing backend development, AI/ML, cybersecurity projects, certifications, research, and technical experience.";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "author", content: "Deshma Udayakumar" },
      { name: "theme-color", content: "#0f1419" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Deshma Udayakumar" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh flex-col">
        <NavBar />

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </QueryClientProvider>
  );
}
