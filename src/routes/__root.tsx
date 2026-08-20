import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-semibold text-foreground">404</h1>
        <h2 className="mt-4 font-sans text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-sans text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mabasa Studio — Wall Painting & Illusion Design" },
      {
        name: "description",
        content:
          "Bespoke wall painting, decorative finishes, and artistic illusion design for residential and commercial interiors.",
      },
      { name: "author", content: "Mabasa Studio" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap",
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
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm font-semibold text-ink-foreground transition-transform duration-500 group-hover:rotate-12">
            M
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Mabasa <span className="italic text-vermilion">Studio</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-foreground" }}
              className="brush-link text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/50 hover:bg-foreground/5"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              hash="quote"
              className="rounded-full bg-vermilion px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_-12px_var(--vermilion)] transition-transform hover:-translate-y-0.5"
            >
              Request a Quote
            </Link>
          </div>
        </nav>

        <button
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span
            className="h-0.5 w-6 rounded-full bg-foreground transition-transform"
            style={{ transform: isOpen ? "rotate(45deg) translateY(5px)" : "none" }}
          />
          <span
            className="h-0.5 w-4 self-end rounded-full bg-vermilion transition-all"
            style={{ opacity: isOpen ? 0 : 1, width: isOpen ? "1.5rem" : "1rem" }}
          />
          <span
            className="h-0.5 w-6 rounded-full bg-foreground transition-transform"
            style={{ transform: isOpen ? "rotate(-45deg) translateY(-7px)" : "none" }}
          />
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border/50 bg-background lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                activeProps={{ className: "text-foreground" }}
                className="py-2 font-serif text-2xl font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-full border border-foreground/20 px-4 py-3 text-center text-sm font-semibold text-foreground"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              hash="quote"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-vermilion px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-ink text-ink-foreground">
      <div
        aria-hidden
        className="paint-wash pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-vermilion"
      />
      <div
        aria-hidden
        className="paint-wash pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-cobalt"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="font-serif text-3xl font-semibold">
              Mabasa <span className="italic text-ochre">Studio</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-foreground/70">
              Hand-painted murals, decorative finishes, and illusion art for interiors that deserve more than
              paint on a wall.
            </p>
            <div className="mt-6 flex gap-2" aria-hidden>
              {["bg-vermilion", "bg-ochre", "bg-viridian", "bg-cobalt", "bg-magenta"].map((c) => (
                <span key={c} className={`h-3 w-8 rounded-full ${c}`} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-ink-foreground/60">
              Explore
            </h3>
            <nav className="mt-5 flex flex-col gap-3">
              {[
                { to: "/services", label: "Services" },
                { to: "/gallery", label: "Gallery" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="w-fit text-sm text-ink-foreground/75 transition-colors hover:text-ochre"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-ink-foreground/60">
              Studio
            </h3>
            <address className="mt-5 not-italic">
              <p className="text-sm text-ink-foreground/75">hello@mabasastudio.com</p>
              <p className="mt-2 text-sm text-ink-foreground/75">+27 12 345 6789</p>
              <p className="mt-2 text-sm text-ink-foreground/75">Johannesburg, South Africa</p>
            </address>
            <Link
              to="/contact"
              hash="quote"
              className="mt-6 inline-flex rounded-full bg-ochre px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-ink-foreground/15 pt-8">
          <p className="text-xs text-ink-foreground/50">
            © {new Date().getFullYear()} Mabasa Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

