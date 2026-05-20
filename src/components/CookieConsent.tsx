import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "gofix_cookie_consent_v1";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

function loadConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Consent;
  } catch {
    return null;
  }
}

function saveConsent(c: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
    window.dispatchEvent(new CustomEvent("cookie-consent-changed", { detail: c }));
  } catch {
    /* ignore */
  }
}

export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("cookie-open-settings"));
}

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    setMounted(true);
    const existing = loadConsent();
    if (!existing) {
      setShowBanner(true);
    } else {
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    }

    const openHandler = () => {
      const c = loadConsent();
      if (c) {
        setAnalytics(c.analytics);
        setMarketing(c.marketing);
      }
      setShowSettings(true);
    };
    window.addEventListener("cookie-open-settings", openHandler);

    // Delegate clicks for any element with data-cookie-action="open-settings"
    const clickHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const btn = target?.closest('[data-cookie-action="open-settings"]');
      if (btn) {
        e.preventDefault();
        openHandler();
      }
    };
    document.addEventListener("click", clickHandler);

    return () => {
      window.removeEventListener("cookie-open-settings", openHandler);
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  if (!mounted) return null;

  const persist = (a: boolean, m: boolean) => {
    saveConsent({
      necessary: true,
      analytics: a,
      marketing: m,
      timestamp: new Date().toISOString(),
    });
    setAnalytics(a);
    setMarketing(m);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => persist(true, true);
  const rejectAll = () => persist(false, false);
  const saveSettings = () => persist(analytics, marketing);

  return (
    <>
      {showBanner && !showSettings && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-description"
          className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-4"
        >
          <div className="mx-auto max-w-3xl rounded-xl border border-border bg-background/95 p-5 shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-background/80">
            <h2 id="cookie-title" className="text-lg font-semibold text-foreground">
              Folosim cookie-uri
            </h2>
            <p id="cookie-description" className="mt-2 text-sm text-muted-foreground">
              Site-ul GoFix Vulcanizare Mobilă Iași folosește cookie-uri necesare pentru funcționarea
              corectă a site-ului și, doar cu acordul tău, cookie-uri pentru analiză și marketing.
              Acestea ne ajută să măsurăm interacțiuni precum click pe telefon, click pe WhatsApp,
              pagini vizitate și eficiența campaniilor de promovare.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Poți accepta toate cookie-urile, le poți respinge pe cele neesențiale sau îți poți
              personaliza preferințele.
            </p>
            <div className="mt-3 flex flex-row gap-4 text-sm">
              <Link to="/gdpr" className="text-primary underline hover:opacity-80">
                GDPR
              </Link>
              <Link to="/cookies" className="text-primary underline hover:opacity-80">
                Politica Cookies
              </Link>
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={rejectAll}
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-accent"
              >
                Resping
              </button>
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-accent"
              >
                Setări
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="mt-[15px] inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 sm:mt-0"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}

      {showSettings && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
          aria-describedby="cookie-settings-description"
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget && !showBanner) setShowSettings(false);
          }}
        >
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-border bg-background p-6 shadow-2xl">
            <h2 id="cookie-settings-title" className="text-xl font-semibold text-foreground">
              Setări cookie-uri
            </h2>
            <p id="cookie-settings-description" className="mt-2 text-sm text-muted-foreground">
              Alege ce categorii de cookie-uri accepți. Cookie-urile necesare sunt active permanent,
              deoarece sunt esențiale pentru funcționarea site-ului.
            </p>

            <form className="mt-5 space-y-4" onSubmit={(e) => { e.preventDefault(); saveSettings(); }}>
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold text-foreground">Cookie-uri necesare</h3>
                  <span className="text-xs font-medium text-muted-foreground">Întotdeauna active</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Aceste cookie-uri sunt necesare pentru funcționarea site-ului, securitate,
                  afișarea corectă a paginilor și memorarea preferințelor de consimțământ.
                </p>
                <label className="mt-2 flex items-center gap-2 text-sm text-foreground">
                  <input type="checkbox" checked disabled />
                  Necesare
                </label>
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="text-base font-semibold text-foreground">Cookie-uri analitice</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ne ajută să înțelegem cum este folosit site-ul: pagini vizitate, surse de trafic,
                  dispozitive folosite și interacțiuni precum click pe telefon sau WhatsApp.
                </p>
                <label className="mt-2 flex items-center gap-2 text-sm text-foreground">
                  <input
                    type="checkbox"
                    name="analytics"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                  />
                  Accept cookie-uri analitice
                </label>
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="text-base font-semibold text-foreground">Cookie-uri de marketing</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ne ajută să măsurăm eficiența campaniilor și conversiile din Google Ads,
                  Meta/Facebook sau alte platforme de promovare.
                </p>
                <label className="mt-2 flex items-center gap-2 text-sm text-foreground">
                  <input
                    type="checkbox"
                    name="marketing"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                  />
                  Accept cookie-uri de marketing
                </label>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={rejectAll}
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-accent"
                >
                  Respinge toate
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  Salvează preferințele
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-accent"
                >
                  Accept toate
                </button>
                {!showBanner && (
                  <button
                    type="button"
                    onClick={() => setShowSettings(false)}
                    className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground sm:ml-auto"
                  >
                    Închide
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
