import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { CookieConsent } from "../components/CookieConsent";
import notFoundDesktop from "@/assets/404-desktop.png";
import notFoundMobile from "@/assets/404-mobile.png";

function NotFoundComponent() {
  return (
    <Link
      to="/"
      aria-label="Înapoi la homepage"
      className="block h-dvh w-screen overflow-hidden bg-background"
    >
      <picture>
        <source media="(max-width: 767px)" srcSet={notFoundMobile} />
        <img
          src={notFoundDesktop}
          alt="404 - Pagina a făcut pană. Înapoi la homepage."
          className="h-full w-full object-cover"
        />
      </picture>
    </Link>
  );
}


function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
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
      { title: "GoFix Vulcanizare Mobilă Iași Non-Stop" },
      { name: "description", content: "Vulcanizare mobilă Iași non-stop. Reparații pene de cauciuc, schimb anvelope și echilibrare roți la domiciliu sau pe drum. Sună la +40 332 630 507." },
      { name: "author", content: "GoFix Vulcanizare Mobilă Iași" },
      { name: "publisher", content: "GoFix Vulcanizare Mobilă Iași" },
      { property: "og:title", content: "GoFix Vulcanizare Mobilă Iași Non-Stop" },
      { property: "og:description", content: "Vulcanizare mobilă Iași non-stop. Reparații pene de cauciuc, schimb anvelope și echilibrare roți la domiciliu sau pe drum. Sună la +40 332 630 507." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "GoFix Vulcanizare Mobilă Iași Non-Stop" },
      { name: "twitter:description", content: "Vulcanizare mobilă Iași non-stop. Reparații pene de cauciuc, schimb anvelope și echilibrare roți la domiciliu sau pe drum. Sună la +40 332 630 507." },
      { property: "og:image", content: "https://vulcanizaremobila-iasi.ro/gofix-logo-og.png" },
      { name: "twitter:image", content: "https://vulcanizaremobila-iasi.ro/gofix-logo-og.png" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["AutoRepair", "TireShop"],
              "@id": "https://vulcanizaremobila-iasi.ro/#localbusiness",
              name: "GoFix Vulcanizare Mobilă Iași",
              description: "Serviciu non-stop de vulcanizare mobilă în Iași și zona metropolitană. Intervenții rapide pentru pană de cauciuc, schimb anvelope, echilibrare roți și servicii pentru autoturisme, autoutilitare, dube, camioane și tiruri.",
              url: "https://vulcanizaremobila-iasi.ro/",
              logo: "https://vulcanizaremobila-iasi.ro/gofix-logo-og.png",
              image: "https://vulcanizaremobila-iasi.ro/gofix-logo-og.png",
              telephone: "+40332630507",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Strada Golia 3",
                addressLocality: "Iași",
                addressRegion: "Iași",
                postalCode: "700259",
                addressCountry: "RO",
              },
              hasMap: "https://maps.app.goo.gl/7NQtYKPg1FpQjsv89",
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.1664,
                longitude: 27.5795,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  opens: "00:00",
                  closes: "23:59",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+40332630507",
                contactType: "customer service",
                areaServed: "RO",
                availableLanguage: ["ro"],
              },
              areaServed: [
                { "@type": "City", name: "Iași" },
                { "@type": "AdministrativeArea", name: "Județul Iași" },
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://vulcanizaremobila-iasi.ro/#website",
              url: "https://vulcanizaremobila-iasi.ro/",
              name: "GoFix Vulcanizare Mobilă Iași",
              publisher: { "@id": "https://vulcanizaremobila-iasi.ro/#localbusiness" },
              inLanguage: "ro-RO",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
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
  const router = useRouter();

  useEffect(() => {
    // Try to scroll to a hash target; retry briefly to wait for lazy/late content.
    // Falls back to top if the element is never found.
    const scrollToHash = (hash: string) => {
      const id = hash.replace(/^#/, "");
      if (!id) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        return;
      }
      let tries = 0;
      const maxTries = 20; // ~1s at 50ms
      const tick = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        if (++tries >= maxTries) {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          return;
        }
        setTimeout(tick, 50);
      };
      requestAnimationFrame(tick);
    };

    // Handle initial page load with a hash in the URL
    if (window.location.hash) {
      scrollToHash(window.location.hash);
    }

    // Handle in-page anchor clicks (e.g. <a href="#contact">) on the same route
    const onHashChange = () => {
      if (window.location.hash) scrollToHash(window.location.hash);
    };
    window.addEventListener("hashchange", onHashChange);

    let isPop = false;
    const onPop = () => { isPop = true; };
    window.addEventListener("popstate", onPop);

    const unsub = router.subscribe("onResolved", ({ toLocation, fromLocation }) => {
      if (toLocation.hash) {
        scrollToHash(toLocation.hash);
        isPop = false;
        return;
      }

      // Back/forward → let browser's native scroll restoration handle it
      if (isPop) {
        isPop = false;
        return;
      }

      // Same path, no hash change → don't scroll
      if (fromLocation && fromLocation.pathname === toLocation.pathname) return;

      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("popstate", onPop);
      unsub();
    };
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <CookieConsent />
    </QueryClientProvider>
  );
}
