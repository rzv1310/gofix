/**
 * Tracking & analytics, gated by cookie consent.
 *
 * Înlocuiește ID-urile de mai jos cu cele reale din conturile tale.
 * Lasă string gol ("") pentru oricare nu este încă disponibil — scriptul
 * respectiv pur și simplu nu se încarcă.
 *
 * Categorii consimțământ (din CookieConsent.tsx):
 *  - analytics  → GA4
 *  - marketing  → Google Ads, Meta Pixel, TikTok Pixel
 *  - GTM se încarcă dacă oricare din cele două e acceptat
 *    (poți gestiona firing-ul tag-urilor și din interfața GTM).
 *
 * Evenimente conversie trimise automat la click pe link-uri tel: și wa.me:
 *  - dataLayer: { event: "phone_click" | "whatsapp_click", phone_number, page_path }
 *  - GA4 gtag:  phone_click / whatsapp_click
 *  - Google Ads: conversion cu label din GOOGLE_ADS_CONVERSIONS
 *  - Meta Pixel: Contact (telefon) / Lead (WhatsApp)
 *  - TikTok:    Contact (telefon) / SubmitForm (WhatsApp)
 */

export const TRACKING_IDS = {
  GTM_ID: "", // ex: "GTM-XXXXXXX"
  GA4_ID: "", // ex: "G-XXXXXXXXXX"
  GOOGLE_ADS_ID: "", // ex: "AW-1234567890"
  META_PIXEL_ID: "", // ex: "1234567890123456"
  TIKTOK_PIXEL_ID: "", // ex: "CXXXXXXXXXXXXXXXXXXX"
};

// Conversion labels Google Ads: AW-XXXX/abcDEF123
export const GOOGLE_ADS_CONVERSIONS = {
  phone: "", // ex: "AW-1234567890/abcDEF123"
  whatsapp: "", // ex: "AW-1234567890/xyzGHI456"
};

const STORAGE_KEY = "gofix_cookie_consent_v1";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & { callMethod?: unknown; queue?: unknown[]; loaded?: boolean; version?: string; push?: unknown };
    _fbq?: unknown;
    ttq?: {
      load?: (id: string) => void;
      page?: () => void;
      track?: (event: string, params?: Record<string, unknown>) => void;
      methods?: string[];
      setAndDefer?: (t: unknown, m: string) => void;
      instance?: (id: string) => unknown;
      _i?: Record<string, unknown>;
      _t?: Record<string, number>;
      _o?: Record<string, unknown>;
    } & Record<string, unknown>;
    TiktokAnalyticsObject?: string;
  }
}

function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

const loaded = {
  gtm: false,
  ga4: false,
  ads: false,
  meta: false,
  tiktok: false,
};

function injectScript(src: string, attrs: Record<string, string> = {}) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
  document.head.appendChild(s);
  return s;
}

function loadGTM() {
  if (loaded.gtm || !TRACKING_IDS.GTM_ID) return;
  loaded.gtm = true;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  injectScript(`https://www.googletagmanager.com/gtm.js?id=${TRACKING_IDS.GTM_ID}`);
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
    window.gtag("js", new Date());
  }
}

function loadGA4() {
  if (loaded.ga4 || !TRACKING_IDS.GA4_ID) return;
  loaded.ga4 = true;
  ensureGtag();
  injectScript(`https://www.googletagmanager.com/gtag/js?id=${TRACKING_IDS.GA4_ID}`);
  window.gtag!("config", TRACKING_IDS.GA4_ID, { anonymize_ip: true });
}

function loadGoogleAds() {
  if (loaded.ads || !TRACKING_IDS.GOOGLE_ADS_ID) return;
  loaded.ads = true;
  ensureGtag();
  // Dacă GA4 a încărcat deja gtag.js, nu mai e nevoie; altfel încarcă acum.
  if (!loaded.ga4) {
    injectScript(`https://www.googletagmanager.com/gtag/js?id=${TRACKING_IDS.GOOGLE_ADS_ID}`);
  }
  window.gtag!("config", TRACKING_IDS.GOOGLE_ADS_ID);
}

function loadMetaPixel() {
  if (loaded.meta || !TRACKING_IDS.META_PIXEL_ID) return;
  loaded.meta = true;
  /* eslint-disable */
  (function (f: any, b: any, e: any, v: any) {
    if (f.fbq) return;
    const n: any = (f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    });
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    const t = b.createElement(e);
    t.async = true;
    t.src = v;
    const s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  /* eslint-enable */
  window.fbq!("init", TRACKING_IDS.META_PIXEL_ID);
  window.fbq!("track", "PageView");
}

function loadTikTokPixel() {
  if (loaded.tiktok || !TRACKING_IDS.TIKTOK_PIXEL_ID) return;
  loaded.tiktok = true;
  /* eslint-disable */
  (function (w: any, d: any, t: any) {
    w.TiktokAnalyticsObject = t;
    const ttq: any = (w[t] = w[t] || []);
    ttq.methods = [
      "page","track","identify","instances","debug","on","off","once","ready",
      "alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent",
    ];
    ttq.setAndDefer = function (e: any, n: any) {
      e[n] = function () { e.push([n].concat(Array.prototype.slice.call(arguments, 0))); };
    };
    for (let i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
    ttq.instance = function (e: any) {
      const n = ttq._i[e] || [];
      for (let i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(n, ttq.methods[i]);
      return n;
    };
    ttq.load = function (e: any, n: any) {
      const r = "https://analytics.tiktok.com/i18n/pixel/events.js";
      ttq._i = ttq._i || {}; ttq._i[e] = []; ttq._i[e]._u = r;
      ttq._t = ttq._t || {}; ttq._t[e] = +new Date();
      ttq._o = ttq._o || {}; ttq._o[e] = n || {};
      const o = d.createElement("script");
      o.type = "text/javascript"; o.async = !0; o.src = `${r}?sdkid=${e}&lib=${t}`;
      const a = d.getElementsByTagName("script")[0];
      a.parentNode.insertBefore(o, a);
    };
    ttq.load(TRACKING_IDS.TIKTOK_PIXEL_ID);
    ttq.page();
  })(window, document, "ttq");
  /* eslint-enable */
}

function applyConsent(consent: Consent | null) {
  if (!consent) return;
  // GTM încarcă dacă oricare categorie e activă — restul gestionezi din GTM.
  if (consent.analytics || consent.marketing) loadGTM();
  if (consent.analytics) loadGA4();
  if (consent.marketing) {
    loadGoogleAds();
    loadMetaPixel();
    loadTikTokPixel();
  }
}

function findTrackableAnchor(target: EventTarget | null): HTMLAnchorElement | null {
  const el = target as HTMLElement | null;
  if (!el) return null;
  const a = el.closest("a") as HTMLAnchorElement | null;
  if (!a) return null;
  const href = a.getAttribute("href") || "";
  if (href.startsWith("tel:")) return a;
  if (/^https?:\/\/(?:wa\.me|api\.whatsapp\.com)\//i.test(href)) return a;
  return null;
}

function fireConversion(kind: "phone" | "whatsapp", phone: string) {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";
  const event = kind === "phone" ? "phone_click" : "whatsapp_click";

  // dataLayer (GTM)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, phone_number: phone, page_path: path });

  // GA4
  if (loaded.ga4 && window.gtag) {
    window.gtag("event", event, { phone_number: phone, page_path: path });
  }

  // Google Ads conversion
  const adsLabel = kind === "phone" ? GOOGLE_ADS_CONVERSIONS.phone : GOOGLE_ADS_CONVERSIONS.whatsapp;
  if (loaded.ads && adsLabel && window.gtag) {
    window.gtag("event", "conversion", { send_to: adsLabel });
  }

  // Meta Pixel
  if (loaded.meta && window.fbq) {
    window.fbq(kind === "phone" ? "track" : "track", kind === "phone" ? "Contact" : "Lead", {
      content_name: kind === "phone" ? "Phone Click" : "WhatsApp Click",
    });
  }

  // TikTok Pixel
  if (loaded.tiktok && window.ttq?.track) {
    window.ttq.track(kind === "phone" ? "Contact" : "SubmitForm", {
      content_name: kind === "phone" ? "Phone Click" : "WhatsApp Click",
    });
  }
}

function onDocumentClick(e: MouseEvent) {
  const a = findTrackableAnchor(e.target);
  if (!a) return;
  const href = a.getAttribute("href") || "";
  if (href.startsWith("tel:")) {
    fireConversion("phone", href.replace(/^tel:/, ""));
  } else {
    const m = href.match(/wa\.me\/(\d+)|phone=(\d+)/i);
    fireConversion("whatsapp", m?.[1] || m?.[2] || "");
  }
}

let initialized = false;

export function initTracking() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  applyConsent(readConsent());

  window.addEventListener("cookie-consent-changed", ((e: CustomEvent<Consent>) => {
    applyConsent(e.detail ?? readConsent());
  }) as EventListener);

  document.addEventListener("click", onDocumentClick, { capture: true });
}
