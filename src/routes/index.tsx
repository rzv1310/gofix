import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Phone, MessageCircle, MapPin, Clock, Wrench, Truck, Car, Gauge,
  ShieldCheck, Zap, CheckCircle2, ChevronDown, Menu, X, Navigation,
  Settings, AlertTriangle, Star, Building2, GraduationCap, Hospital,
  Download, Apple, PlayCircle, MoreVertical, ThumbsUp, Bus,
} from "lucide-react";
import logo from "@/assets/gofix-logo.png";
import heroVan from "@/assets/hero-van-desktop.png";
import heroVanMobile from "@/assets/hero-van-mobile.png";
import appVulcanizareMobila from "@/assets/app-vulcanizare-mobila.jpeg";
import serviceTire from "@/assets/service-tire.jpg";
import whyUs from "@/assets/why-us.jpg";


const FAQS: Array<[string, string]> = [
  ["GoFix este disponibil non-stop în Iași?", "Da, serviciul de vulcanizare mobilă este disponibil non-stop pentru intervenții în Iași și zona metropolitană."],
  ["Veniți la domiciliu sau la birou?", "Da. Putem interveni acasă, la birou, în parcare sau în alte locații accesibile."],
  ["Reparați pene pe loc?", "Da. În funcție de starea anvelopei, putem repara pana direct la locație."],
  ["Faceți și echilibrare roți?", "Da, oferim echilibrare roți pe loc, cu echipamente mobile profesionale."],
  ["Lucrați și pentru dube sau camioane?", "Da, oferim servicii pentru autoturisme, autoutilitare, dube, camioane și tiruri."],
  ["Cât costă intervenția?", "Prețul depinde de locație, tipul vehiculului și serviciul necesar. Cel mai rapid este să suni sau să trimiți mesaj pe WhatsApp pentru estimare."],
  ["În ce zone din Iași ajungeți?", "Ajungem în principalele cartiere din Iași și în localitățile din zona metropolitană: Miroslava, Valea Lupului, Rediu, Tomești, Holboca, Ciurea, Lețcani și altele."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vulcanizare Mobilă Iași Non-Stop 24/7 - GoFix la tine în 30 min" },
      { name: "description", content: "Vulcanizare mobilă Iași non-stop. Reparații pene, schimb anvelope și echilibrare roți la domiciliu, birou sau pe marginea drumului. Sună 0332 630 507." },
      { name: "keywords", content: "vulcanizare mobila Iasi, vulcanizare non-stop Iasi, pana cauciuc Iasi, schimb anvelope la domiciliu, echilibrare roti mobila, GoFix Iasi, asistenta rutiera Iasi 24/7" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "author", content: "GoFix Vulcanizare Mobilă Iași" },
      { name: "publisher", content: "GoFix Vulcanizare Mobilă Iași" },
      { name: "language", content: "ro" },
      { httpEquiv: "content-language", content: "ro" },
      { property: "og:locale", content: "ro_RO" },
      { property: "og:site_name", content: "GoFix Vulcanizare Mobilă Iași" },
      { property: "og:title", content: "Vulcanizare Mobilă Iași Non-Stop 24/7 - GoFix" },
      { property: "og:description", content: "Intervenim 24/7 în Iași și zona metropolitană pentru pene, schimb anvelope și echilibrare roți. Sună 0332 630 507." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gofix.lovable.app/" },
      { property: "og:image", content: "https://gofix.lovable.app/og-home.jpg" },
      { property: "og:image:secure_url", content: "https://gofix.lovable.app/og-home.jpg" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "GoFix Vulcanizare Mobilă Iași - non-stop 24/7, intervenții la domiciliu pentru pene, schimb anvelope și echilibrare roți." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@gofix_iasi" },
      { name: "twitter:title", content: "Vulcanizare Mobilă Iași 24/7 - Pene, Anvelope, Echilibrare | GoFix" },
      { name: "twitter:description", content: "Vulcanizare mobilă non-stop în Iași. Reparații pene, schimb anvelope și echilibrare roți la domiciliu. Sună 0332 630 507." },
      { name: "twitter:image", content: "https://gofix.lovable.app/og-home.jpg" },
      { name: "twitter:image:alt", content: "GoFix Vulcanizare Mobilă Iași - non-stop 24/7, intervenții la domiciliu pentru pene, schimb anvelope și echilibrare roți." },
    ],
    links: [
      { rel: "canonical", href: "https://gofix.lovable.app/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["AutoRepair", "TireShop"],
              "@id": "https://gofix.lovable.app/#localbusiness",
              name: "GoFix Vulcanizare Mobilă Iași",
              description: "Serviciu non-stop de vulcanizare mobilă în Iași și zona metropolitană. Intervenții rapide pentru pană de cauciuc, schimb anvelope, echilibrare roți și servicii pentru autoturisme, autoutilitare, dube, camioane și tiruri.",
              url: "https://gofix.lovable.app/",
              logo: "https://gofix.lovable.app/gofix-logo-og.png",
              image: "https://gofix.lovable.app/gofix-logo-og.png",
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
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.1664,
                longitude: 27.5795,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
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
                {
                  "@type": "Place",
                  name: "Copou",
                  sameAs: "https://ro.wikipedia.org/wiki/Copou",
                  containedInPlace: { "@type": "City", name: "Iași" },
                },
                {
                  "@type": "Place",
                  name: "Centrul istoric",
                  sameAs: "https://ro.wikipedia.org/wiki/Centru%2C_Ia%C8%99i",
                  containedInPlace: { "@type": "City", name: "Iași" },
                },
                {
                  "@type": "Place",
                  name: "Țicău",
                  sameAs: "https://ro.wikipedia.org/wiki/%C8%9Aic%C4%83u",
                  containedInPlace: { "@type": "City", name: "Iași" },
                },
                {
                  "@type": "Place",
                  name: "Tudor Vladimirescu",
                  sameAs: "https://ro.wikipedia.org/wiki/Tudor_Vladimirescu_%28cartier_din_Ia%C8%99i%29",
                  containedInPlace: { "@type": "City", name: "Iași" },
                },
                {
                  "@type": "Place",
                  name: "Tătărași",
                  sameAs: "https://ro.wikipedia.org/wiki/T%C4%83t%C4%83ra%C8%99i%2C_Ia%C8%99i",
                  containedInPlace: { "@type": "City", name: "Iași" },
                },
                {
                  "@type": "Place",
                  name: "Păcurari",
                  sameAs: "https://ro.wikipedia.org/wiki/P%C4%83curari",
                  containedInPlace: { "@type": "City", name: "Iași" },
                },
                {
                  "@type": "Place",
                  name: "C.U.G.",
                  sameAs: "https://ro.wikipedia.org/wiki/C.U.G.",
                  containedInPlace: { "@type": "City", name: "Iași" },
                },
                {
                  "@type": "Place",
                  name: "Cantemir",
                  sameAs: "https://ro.wikipedia.org/wiki/Cantemir%2C_Ia%C8%99i",
                  containedInPlace: { "@type": "City", name: "Iași" },
                },
                {
                  "@type": "Place",
                  name: "Nicolina",
                  sameAs: "https://ro.wikipedia.org/wiki/Nicolina%2C_Ia%C8%99i",
                  containedInPlace: { "@type": "City", name: "Iași" },
                },
                {
                  "@type": "Place",
                  name: "Aroneanu",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Bârnova",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Ciurea",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Holboca",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Lețcani",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Miroslava",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Popricani",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Rediu",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Schitu Duca",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Tomești",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Ungheni",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Valea Lupului",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Victoria",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Comarna",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Costuleni",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Dobrovăț",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Golăiești",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Grajduri",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Mogoșești",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Movileni",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Prisăcani",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Românești",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Scânteia",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Țigănași",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Țuțora",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Voinești",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Horlești",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicii GoFix Vulcanizare Mobilă Iași",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Vulcanizare mobilă Iași",
                    itemOffered: {
                      "@type": "Service",
                      name: "Vulcanizare mobilă Iași",
                      serviceType: "Vulcanizare mobilă",
                      provider: { "@id": "https://gofix.lovable.app/#localbusiness" },
                      areaServed: { "@type": "City", name: "Iași" },
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Reparații pene cauciuc",
                    itemOffered: {
                      "@type": "Service",
                      name: "Reparații pene cauciuc",
                      serviceType: "Reparații anvelope",
                      provider: { "@id": "https://gofix.lovable.app/#localbusiness" },
                      areaServed: { "@type": "City", name: "Iași" },
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Schimb anvelope la domiciliu",
                    itemOffered: {
                      "@type": "Service",
                      name: "Schimb anvelope la domiciliu",
                      serviceType: "Schimb anvelope",
                      provider: { "@id": "https://gofix.lovable.app/#localbusiness" },
                      areaServed: { "@type": "City", name: "Iași" },
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Echilibrare roți pe loc",
                    itemOffered: {
                      "@type": "Service",
                      name: "Echilibrare roți pe loc",
                      serviceType: "Echilibrare roți",
                      provider: { "@id": "https://gofix.lovable.app/#localbusiness" },
                      areaServed: { "@type": "City", name: "Iași" },
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Vulcanizare dube și autoutilitare",
                    itemOffered: {
                      "@type": "Service",
                      name: "Vulcanizare dube și autoutilitare",
                      serviceType: "Vulcanizare autoutilitare",
                      provider: { "@id": "https://gofix.lovable.app/#localbusiness" },
                      areaServed: { "@type": "City", name: "Iași" },
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Vulcanizare camioane și tiruri",
                    itemOffered: {
                      "@type": "Service",
                      name: "Vulcanizare camioane și tiruri",
                      serviceType: "Vulcanizare camioane",
                      provider: { "@id": "https://gofix.lovable.app/#localbusiness" },
                      areaServed: { "@type": "City", name: "Iași" },
                    },
                  },
                ],
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://gofix.lovable.app/#website",
              url: "https://gofix.lovable.app/",
              name: "GoFix Vulcanizare Mobilă Iași",
              publisher: { "@id": "https://gofix.lovable.app/#localbusiness" },
              inLanguage: "ro-RO",
            },
            {
              "@type": "FAQPage",
              "@id": "https://gofix.lovable.app/#faq",
              url: "https://gofix.lovable.app/",
              name: "Întrebări frecvente GoFix Vulcanizare Mobilă Iași",
              isPartOf: { "@id": "https://gofix.lovable.app/#website" },
              about: { "@id": "https://gofix.lovable.app/#localbusiness" },
              inLanguage: "ro-RO",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "GoFix este disponibil non-stop în Iași?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Da, serviciul de vulcanizare mobilă este disponibil non-stop pentru intervenții în Iași și zona metropolitană.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Veniți la domiciliu sau la birou?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Da. Putem interveni acasă, la birou, în parcare sau în alte locații accesibile.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Reparați pene pe loc?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Da. În funcție de starea anvelopei, putem repara pana direct la locație.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Faceți și echilibrare roți?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Da, oferim echilibrare roți pe loc, cu echipamente mobile profesionale.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Lucrați și pentru dube sau camioane?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Da, oferim servicii pentru autoturisme, autoutilitare, dube, camioane și tiruri.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Cât costă intervenția?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Prețul depinde de locație, tipul vehiculului și serviciul necesar. Cel mai rapid este să suni sau să trimiți mesaj pe WhatsApp pentru estimare.",
                  },
                },
                {
                  "@type": "Question",
                  name: "În ce zone din Iași ajungeți?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ajungem în principalele cartiere din Iași și în localitățile din zona metropolitană: Copou, Centrul istoric, Țicău, Tudor Vladimirescu, Tătărași, Păcurari, C.U.G., Cantemir, Nicolina, Miroslava, Valea Lupului, Rediu, Tomești, Holboca, Ciurea, Lețcani și altele.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

const PHONE = "0332630507";
const PHONE_DISPLAY = "0332 630 507";
const WHATSAPP = "40750291020";
const WA_LINK = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Salut! Am nevoie de o vulcanizare mobilă în Iași. Mă puteți ajuta?")}`;

const NAV = [
  { href: "#servicii", label: "Servicii" },
  { href: "#zone", label: "Zone" },
  { href: "#tarife", label: "Tarife" },
  { href: "#recenzii", label: "Recenzii" },
  { href: "#contact", label: "Contact" },
];

function CallBtn({ className = "", label = "Sună Non-Stop" }: { className?: string; label?: string }) {
  return (
    <a href={`tel:${PHONE}`} className={`group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-display text-base font-bold uppercase tracking-wide text-primary-foreground shadow-glow transition hover:brightness-110 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${className}`}>
      <Phone className="h-4 w-4" /> {label}
    </a>
  );
}
function WaBtn({ className = "", label = "WhatsApp" }: { className?: string; label?: string }) {
  return (
    <a href={WA_LINK} target="_blank" rel="noopener" className={`inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-5 py-3 font-display text-base font-bold uppercase tracking-wide text-whatsapp-foreground transition hover:brightness-110 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${className}`}>
      <MessageCircle className="h-4 w-4" /> {label}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 lg:py-3">
        <div className="flex items-center gap-2">
          <Link to="/" aria-label="Mergi la pagina principală GoFix" aria-current="page" className="flex items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
            <img src={logo} alt="GoFix Vulcanizare Mobilă Iași" title="GoFix Vulcanizare Mobilă Iași" className="h-12 w-auto lg:h-14" />
          </Link>
          <button onClick={() => setOpen(v => !v)} aria-label="Meniu" className="rounded-md border border-border p-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent lg:hidden">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map(n => (
            <a key={n.href} href={n.href} className="rounded-sm text-sm font-semibold text-foreground/80 transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">{n.label}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <div className="text-right">
            <CallBtn />
            <p className="mt-1 text-[11px] font-medium text-muted-foreground">Disponibil 24/7 în Iași și zona metropolitană</p>
          </div>
          <WaBtn />
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <a href={`tel:${PHONE}`} aria-label="Sună" className="rounded-md bg-primary p-2.5 text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"><Phone className="h-5 w-5" /></a>
          <a href={WA_LINK} aria-label="WhatsApp" className="rounded-md bg-whatsapp p-2.5 text-whatsapp-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"><MessageCircle className="h-5 w-5" /></a>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {NAV.map(n => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-border py-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm">{n.label}</a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-0 opacity-60">
        <picture>
          <source media="(min-width: 1024px)" srcSet={heroVan} />
          <img src={heroVanMobile} alt="Vulcanizare Non Stop Iasi" title="Vulcanizare Non Stop" width={1920} height={1080} fetchPriority="high" decoding="async" className="h-full w-full object-cover" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/70 to-secondary/40" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-[42px] pb-16 sm:py-16 lg:py-24">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/50 bg-brand-green/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-green" /> 24/7 · Urgent
          </span>
          <h1 className="mt-5 font-display text-4xl leading-[0.95] text-white sm:text-5xl lg:text-7xl">
            Go<span className="text-primary">Fix</span> Vulcanizare Mobilă Iași
          </h1>
          <p className="mt-5 max-w-xl text-base text-secondary-foreground/80 sm:text-lg">
            Ai făcut pană în Iași sau împrejurimi? Intervenim rapid la domiciliu, la birou sau pe marginea drumului pentru reparații pene, schimb anvelope și echilibrare roți pe loc.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {["Disponibil NON STOP", "Deplasare în Iași + zona metropolitană", "Autoturisme, dube, autoutilitare, camioane", "Plată corectă, emitem factură"].map(t => (
              <li key={t} className={`flex items-start gap-2 text-sm text-secondary-foreground/90 ${t === "Autoturisme, dube, autoutilitare, camioane" ? "hidden sm:flex" : ""}`}>
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-green" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row">
            <CallBtn label={`Sună acum: ${PHONE_DISPLAY}`} className="w-full text-base lg:text-lg" />
            <WaBtn label="Trimite locația pe WhatsApp" className="w-full" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://www.google.com/search?q=GoFix+Vulcanizare+Mobila+Iasi" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
              <span className="flex text-yellow-400">{'\u2605'.repeat(5)}</span>
              <span>5.0 · Recenzii Google</span>
            </a>
            <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white">
              <Navigation className="h-4 w-4 text-white" /> Venim la locația ta
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmergencyBar() {
  return (
    <section className="mx-2.5 mt-20 border-4 border-primary bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-10 lg:grid-cols-[1.2fr_2fr_auto]">
        <div className="flex items-center gap-3">
          <AlertTriangle className="h-8 w-8 flex-shrink-0 text-primary" />
          <h2 className="font-display text-xl uppercase leading-tight text-primary sm:text-2xl">
            AI PANĂ DE CAUCIUC CHIAR ACUM?
            <br />
            NU TE DEPLASA CU ROATA AVARIATĂ.
          </h2>
        </div>
        <ol className="grid gap-3 sm:grid-cols-3">
          {[
            "Suni sau scrii pe WhatsApp",
            "Ne trimiți locația exactă",
            "Venim și rezolvăm pe loc",
          ].map((t, i) => (
            <li key={t} className="flex items-start gap-3 rounded-md bg-white p-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-white">{i + 1}</span>
              <span className="text-sm font-semibold text-foreground m-flow-step">{t}</span>
            </li>
          ))}
        </ol>
        <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-5 py-4 font-display text-base font-bold uppercase tracking-wide text-secondary-foreground transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
          <Phone className="h-4 w-4" /> Solicită intervenție
        </a>
      </div>
    </section>
  );
}

function SectionHeading({ kicker, title, sub }: { kicker?: string; title: ReactNode; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker && <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">{kicker}</p>}
      <h2 className="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{sub}</p>}
    </div>
  );
}

function ForWhom() {
  const items = [
    { i: AlertTriangle, t: "Ai făcut pană în trafic", d: "Venim la tine dacă ești blocat pe marginea drumului, în parcare sau în apropierea orașului." },
    { i: Car, t: "Roată dezumflată acasă sau la bloc", d: "Nu mai mergi la service. Intervenim direct la adresa ta." },
    { i: Wrench, t: "Schimb sezonier de anvelope", d: "Schimbăm anvelopele de vară/iarnă la domiciliu sau la birou." },
    { i: Truck, t: "Flotă, dubă sau vehicul de serviciu", d: "Intervenim pentru mașini de firmă, autoutilitare, dube marfă și camioane." },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading kicker="Pentru cine" title="Vulcanizare mobilă pentru orice situație în Iași" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ t, d }) => (
            <article key={t} className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-card">
              <h3 className="text-lg text-primary font-normal">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { i: Wrench, t: "Vulcanizare mobilă", d: "Reparații pene de cauciuc la fața locului, fără să mai cauți un service deschis." },
    { i: Car, t: "Schimb anvelope vară/iarnă", d: "Montaj rapid pentru schimb sezonier, direct acasă, la birou sau în parcare." },
    { i: Gauge, t: "Echilibrare roți pe loc", d: "Echilibrare profesională pentru confort, siguranță și uzură uniformă." },
    { i: Settings, t: "Schimb cauciuc deteriorat", d: "Înlocuire roată/anvelopă când pana nu mai poate fi reparată în siguranță." },
    { i: ShieldCheck, t: "Verificare TPMS", d: "Verificări pentru senzori de presiune și probleme legate de sistemul TPMS." },
    { i: Truck, t: "Tractări & asistență rutieră", d: "Ajutor în cazuri în care problema nu poate fi rezolvată pe loc." },
  ];
  return (
    <section id="servicii" className="bg-secondary py-20 text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading kicker="Servicii" title={<>Servicii Go<span className="text-primary">Fix</span> Vulcanizare Mobilă Iași</>} sub="Tot ce ai nevoie pentru roți și anvelope, direct la locația ta." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ i: I, t, d }) => (
            <article key={t} className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-6 transition hover:border-primary">
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-primary/20 blur-2xl transition group-hover:bg-primary/40" />
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground"><I className="h-6 w-6" /></div>
              <h3 className="font-display text-xl">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/70">{d}</p>
              <a href={WA_LINK} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary hover:underline m-cta-soft">
                Solicită intervenție →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { t: "Nu pierzi timp în service", d: "Venim noi la tine, indiferent dacă ești acasă, la birou sau blocat în trafic." },
    { t: "Disponibilitate non-stop", d: "Intervenim 24/7 în Iași și zona metropolitană." },
    { t: "Echipamente profesionale", d: "Autospeciale dotate pentru vulcanizare, schimb anvelope și echilibrare roți." },
    { t: "Pentru orice tip de vehicul", d: "Autoturisme, autoutilitare, dube, camioane și tiruri." },
    
  ];
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img src={whyUs} alt="Autospecială GoFix pe drum" title="Autospecială GoFix pe drum" width={1200} height={1400} loading="lazy" className="rounded-2xl object-cover shadow-card" />
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-glow sm:block">
            <p className="font-display text-4xl leading-none">24/7</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider">Non-Stop Iași</p>
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">De ce GoFix</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">De ce aleg șoferii din Iași Go<span className="text-primary">Fix</span> Vulcanizare Mobilă</h2>
          <ul className="mt-8 space-y-5">
            {items.map((it, i) => (
              <li key={it.t} className="flex gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary font-display text-secondary-foreground">{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg">{it.t}</h3>
                  <p className="text-sm text-muted-foreground">{it.d}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8"><CallBtn label="Sună GoFix acum" /></div>
        </div>
      </div>
    </section>
  );
}


const CARTIERE = ["Copou", "Centrul istoric", "Țicău", "Tudor Vladimirescu", "Tătărași", "Păcurari", "C.U.G.", "Cantemir", "Nicolina"];
const LOCALITATI = ["Aroneanu","Bârnova","Ciurea","Holboca","Lețcani","Miroslava","Popricani","Rediu","Schitu Duca","Tomești","Ungheni","Valea Lupului","Victoria","Comarna","Costuleni","Dobrovăț","Golăiești","Grajduri","Mogoșești","Movileni","Prisăcani","Românești","Scânteia","Țigănași","Țuțora","Voinești","Horlești"];

function Zones() {
  return (
    <section id="zone" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading kicker="Acoperire" title="Vulcanizare Mobilă în Iași și zona metropolitană" sub="Ne deplasăm rapid în municipiul Iași, cartierele principale și localitățile din jur." />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-secondary p-2 text-secondary-foreground">
            <iframe
              title="Hartă zonă deservită Iași"
              src="https://www.openstreetmap.org/export/embed.html?bbox=27.4%2C47.05%2C27.75%2C47.25&layer=mapnik&marker=47.158%2C27.601"
              className="h-80 w-full rounded-xl border-0 lg:h-full"
              loading="lazy"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl text-primary">Cartiere Iași</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {CARTIERE.map(c => (
                  c === "Păcurari" ? (
                    <Link key={c} to="/vulcanizare-pacurari" className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-semibold hover:text-primary hover:underline">{c}</Link>
                  ) : (
                    <span key={c} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-semibold">{c}</span>
                  )
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl text-primary">Localități deservite</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {LOCALITATI.map(l => (
                  l === "Miroslava" ? (
                    <a key={l} href="/vulcanizare-mobila-miroslava" className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:text-primary hover:underline">{l}</a>
                  ) : (
                    <span key={l} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm">{l}</span>
                  )
                ))}
              </div>
            </div>
            <WaBtn label="Verifică disponibilitatea în zona ta" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Vehicles() {
  const items = [
    { i: Car, t: "Autoturisme", d: "Pentru șoferii din Iași care au pană, roată dezumflată sau nevoie de schimb anvelope." },
    { i: Building2, t: "Vehicule de serviciu", d: "Pentru instituții, companii, spitale, firme locale și echipe mobile." },
    { i: Bus, t: "Microbuze & Autoutilitare", d: "Pentru curieri, transportatori, firme de distribuție și servicii locale." },
    { i: Truck, t: "Camioane & tiruri", d: "Pentru intervenții la vehicule mari, unde deplasarea la service este dificilă." },
  ];
  return (
    <section className="relative overflow-hidden bg-secondary py-20 text-secondary-foreground">
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeading kicker="Tipuri de vehicule" title="Servicii pentru autoturisme, dube, camioane, microbuze și vehicule de serviciu" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ i: I, t, d }) => (
            <article key={t} className="rounded-xl border border-white/10 bg-black/60 p-6 backdrop-blur transition hover:border-primary">
              <div className="flex items-center gap-3">
                <I className="h-8 w-8 shrink-0 text-primary" />
                <h3 className="font-display text-lg">{t}</h3>
              </div>
              <p className="mt-2 text-sm text-secondary-foreground/70">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessSegment() {
  const items = [
    { i: GraduationCap, t: "Studenți & profesori", show: "" },
    { i: Zap, t: "Angajați din IT", show: "" },
    { i: Building2, t: "Birouri & companii", show: "" },
    { i: Hospital, t: "Instituții & spitale", show: "" },
    { i: Bus, t: "Flote auto locale", show: "sm:hidden" },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading kicker="Iași local" title="Intervenții rapide pentru zona universitară, IT și business din Iași" sub="Iași este un oraș activ, cu trafic intens, campusuri universitare, birouri, spitale și zone rezidențiale aglomerate. GoFix te ajută să economisești timp prin intervenții direct la locația ta." />
        <div className="mt-12 grid gap-2 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ i: I, t, show }) => (
            <div key={t} className={`${show} flex items-center gap-3 rounded-xl border border-border bg-card p-3 sm:p-4 transition hover:border-primary hover:shadow-card`}>
              <I className="h-6 w-6 sm:h-7 sm:w-7 text-primary shrink-0" />
              <p className="font-display text-sm sm:text-base m-biz-seg">{t}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center"><CallBtn label="Programează intervenție la birou" /></div>
      </div>
    </section>
  );
}

function Pricing() {
  const rows = [
    ["Vulcanizare mobilă", "Reparație pană la locație"],
    ["Schimb anvelope", "Vară / iarnă"],
    ["Echilibrare roți", "Pe loc, cu echipament mobil"],
    ["Intervenție autoutilitară", "Dube / vehicule comerciale"],
    ["Camioane / tiruri", "În funcție de situație"],
  ];
  return (
    <section id="tarife" className="bg-muted py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading kicker="Tarife" title="Prețuri corecte, comunicate înainte de intervenție" sub="Costul poate varia în funcție de locație, tipul vehiculului, dimensiunea roții și serviciul necesar. Înainte de deplasare, îți comunicăm estimarea clară, fără surprize." />
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <table className="w-full">
            <thead className="bg-secondary text-secondary-foreground">
              <tr>
                <th className="px-5 py-4 text-left font-display text-sm uppercase">Serviciu</th>
                <th className="px-5 py-4 text-left font-display text-sm uppercase">Detalii</th>
                <th className="px-5 py-4 text-left font-display text-sm uppercase">Preț</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([s, d], i) => (
                <tr key={s} className={i % 2 ? "bg-muted/40" : ""}>
                  <td className="px-5 py-4 font-semibold">{s}</td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">{d}</td>
                  <td className="px-5 py-4 text-sm font-semibold text-primary m-price-call">Se comunică telefonic</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 flex flex-col items-center gap-3">
          <WaBtn label="Cere preț pe WhatsApp" />
          <p className="text-center text-sm text-muted-foreground">Trimite-ne locația, tipul mașinii și o poză cu roata pentru o estimare rapidă.</p>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      initials: "A.M.",
      text: "Profesioniști băieții, recomand cu încredere! An de an, schimburile, dar și neprevăzutele au fost rezolvate fără probleme! E probabil cea mai serioasă vulcanizare mobilă din Iași.",
    },
    {
      initials: "R.P.",
      text: "Personal profi, au venit la ora 2 noaptea cu mașina și s-a rezolvat problema în nici 15 minute. Aparatură excelentă. Recomand vulcanizarea mobilă GOFIX, nu degeaba are atâtea recenzii pozitive. Voi suna mereu aici când voi avea o problemă.",
    },
    {
      initials: "C.D.",
      text: "Bine organizați pentru perioada schimbării anvelopelor, angajați amabili. Prețuri decente.",
    },
    {
      initials: "M.I.",
      text: "Au venit foarte rapid, mulțumesc GoFix!",
    },
    {
      initials: "S.B.",
      text: "5 stele pentru o pană de cauciuc noaptea în Iași care s-a rezolvat în 10 minute! Mulțumesc pentru rapiditate!",
    },
    {
      initials: "V.T.",
      text: "Foarte bune servicii. A zis la telefon că ajunge într-o jumătate de oră și a ajuns. Și era duminică. A durat mai puțin să repare cauciucul și asta a fost. Recomand această vulcanizare mobilă.",
    },
  ];
  return (
    <section id="recenzii" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading kicker="Recenzii" title={<>Șoferii din Iași aleg Go<span className="text-primary">Fix</span> pentru intervenții urgente</>} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map(r => (
            <div key={r.initials + r.text.slice(0, 10)} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-white">
                    {r.initials}
                  </div>
                  <div className="flex gap-0.5 text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                </div>
                <MoreVertical className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground">„{r.text}”</p>
              <div className="mt-4 flex items-center gap-2">
                <ThumbsUp className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppSection() {
  return (
    <section className="bg-secondary py-20 text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="relative mx-auto w-fit">
          <div className="absolute -inset-10 rounded-full bg-primary/20 blur-3xl" />
          <img
            src={appVulcanizareMobila}
            alt="Aplicația Vulcanizare Mobilă"
            title="Vulcanizare Mobilă App"
            className="relative h-[440px] w-auto rounded-[2.5rem] shadow-glow"
            loading="lazy"
          />
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Aplicația</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">Descarcă aplicația Vulcanizare Mobilă</h2>
          <p className="mt-4 text-secondary-foreground/80">Pentru intervenții rapide în Iași și zona metropolitană, descarcă aplicația și solicită ajutor direct din telefon.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-3 rounded-md border border-white/20 bg-black px-5 py-3 transition hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm">
              <Apple className="h-7 w-7" />
              <span><span className="block text-[10px] uppercase opacity-70">Descarcă din</span><span className="block font-display text-base">App Store</span></span>
            </a>
            <a href="#" className="inline-flex items-center gap-3 rounded-md border border-white/20 bg-black px-5 py-3 transition hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm">
              <PlayCircle className="h-7 w-7" />
              <span><span className="block text-[10px] uppercase opacity-70">Disponibil pe</span><span className="block font-display text-base">Google Play</span></span>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen(v => !v)} className="flex w-full items-center justify-between gap-4 py-5 text-left">
        <span className="m-faq-q font-display text-base sm:text-lg">{q}</span>
        <ChevronDown className={`h-5 w-5 flex-shrink-0 text-primary transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-5 text-sm text-muted-foreground sm:text-base">{a}</p>}
    </div>
  );
}

function FAQ() {
  const faqs = [
    ["GoFix este disponibil non-stop în Iași?", "Da, serviciul de vulcanizare mobilă este disponibil non-stop pentru intervenții în Iași și zona metropolitană."],
    ["Veniți la domiciliu sau la birou?", "Da. Putem interveni acasă, la birou, în parcare sau în alte locații accesibile."],
    ["Reparați pene pe loc?", "Da. În funcție de starea anvelopei, putem repara pana direct la locație."],
    ["Faceți și echilibrare roți?", "Da, oferim echilibrare roți pe loc, cu echipamente mobile profesionale."],
    ["Lucrați și pentru dube sau camioane?", "Da, oferim servicii pentru autoturisme, autoutilitare, dube, camioane și tiruri."],
    ["Cât costă intervenția?", "Prețul depinde de locație, tipul vehiculului și serviciul necesar. Cel mai rapid este să suni sau să trimiți mesaj pe WhatsApp pentru estimare."],
    ["În ce zone din Iași ajungeți?", "Ajungem în principalele cartiere din Iași și în localitățile din zona metropolitană: Miroslava, Valea Lupului, Rediu, Tomești, Holboca, Ciurea, Lețcani și altele."],
  ];
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading kicker="FAQ" title="Ce ne întreabă clienții" />
        <div className="mt-10 rounded-2xl border border-border bg-card px-6 shadow-card">
          {faqs.map(([q, a]) => <FAQItem key={q} q={q} a={a} />)}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-checker py-20 text-secondary-foreground">
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Acționează acum</p>
        <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">Ai nevoie de vulcanizare mobilă în Iași <span className="text-primary">chiar acum?</span></h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-secondary-foreground/80 sm:text-lg">Nu risca să mergi cu roata avariată și nu pierde timp căutând un service deschis. GoFix vine direct la tine, non-stop, oriunde te afli în Iași sau împrejurimi.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <CallBtn label={`Sună acum: ${PHONE_DISPLAY}`} className="text-base lg:text-lg" />
          <WaBtn label="Trimite locația pe WhatsApp" />
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider text-secondary-foreground/80">
          <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Non-stop</span>
          <span className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> Intervenție rapidă</span>
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Iași + zona metropolitană</span>
          <span className="flex items-center gap-2"><Settings className="h-4 w-4 text-primary" /> Autospeciale dotate</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const metroLocalities = [
    "Aroneanu", "Bârnova", "Ciurea", "Holboca", "Lețcani", "Miroslava", "Popricani",
    "Rediu", "Schitu Duca", "Tomești", "Ungheni", "Valea Lupului", "Victoria",
    "Comarna", "Costuleni", "Dobrovăț", "Golăiești", "Grajduri", "Mogoșești",
    "Movileni", "Prisăcani", "Românești", "Scânteia", "Țigănași", "Țuțora",
    "Voinești", "Horlești",
  ];
  const cartiere = ["Copou", "Centrul istoric", "Țicău", "Tudor Vladimirescu", "Tătărași", "Păcurari", "C.U.G.", "Cantemir", "Nicolina"];
  const servicii = ["Vulcanizare mobilă", "Reparații pene", "Schimb anvelope", "Echilibrare roți", "Verificări TPMS", "Tractări auto"];

  return (
    <footer id="contact" className="bg-black text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Header + Description + Contact */}
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="font-display text-2xl text-white"><Link to="/" aria-label="Mergi la pagina principală GoFix Vulcanizare Mobilă Iași" aria-current="page" className="hover:text-primary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">Go<span className="text-primary">Fix</span> Vulcanizare Mobilă Iași</Link></h2>
            <p className="mt-3 text-sm">GoFix Vulcanizare Mobilă Iași oferă servicii de vulcanizare mobilă, schimb anvelope și echilibrare roți la locație, non-stop.</p>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-display text-base text-white">Contact</h3>
            <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <li><a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm"><Phone className="h-4 w-4 text-primary" />{PHONE_DISPLAY}</a></li>
              <li><a href={WA_LINK} className="flex items-center gap-2 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm"><MessageCircle className="h-4 w-4 text-primary" />0750 291 020</a></li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" />Strada Golia 3, 700259 Iași</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />Deschis non-stop</li>
            </ul>
          </div>
        </div>

        <div className="my-12 border-t border-white/10" />

        {/* Servicii */}
        <div>
          <h3 className="font-display text-xl text-white">Servicii</h3>
          <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {servicii.map(s => (
              <li key={s}><a href="#servicii" className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="my-12 border-t border-white/10" />

        {/* Cartiere deservite */}
        <div>
          <h3 className="font-display text-xl text-white">Cartiere deservite</h3>
          <p className="mt-4 text-sm">
            {cartiere.map((c, i) => (
              <span key={c}>
                {c === "Păcurari" ? (
                  <Link to="/vulcanizare-pacurari" className="hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm">{c}</Link>
                ) : c}
                {i < cartiere.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
        </div>

        <div className="my-12 border-t border-white/10" />

        {/* Zona Metropolitană Iași */}
        <div>
          <h3 className="font-display text-xl text-white">Zona Metropolitană Iași</h3>
          <ul className="mt-4 grid gap-x-4 gap-y-2 text-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {metroLocalities.map(l => (
              <li key={l} className="hover:text-primary">
                {l === "Miroslava" ? (
                  <Link to="/vulcanizare-mobila-miroslava" className="hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm">{l}</Link>
                ) : (
                  l
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} GoFix Vulcanizare Mobilă Iași. Toate drepturile rezervate.</p>
          <div className="flex gap-4">
            <Link to="/" aria-current="page" className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm">Acasă</Link>
            <Link to="/" className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm">Politică de confidențialitate</Link>
            <Link to="/" className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm">Termeni</Link>
            <Link to="/" className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MobileStickyBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-2 backdrop-blur transition-transform duration-300 lg:hidden ${show ? "translate-y-0" : "translate-y-full"}`}>
      <a href={`tel:${PHONE}`} aria-label="Sună acum la GoFix" className="flex items-center justify-center gap-2 rounded-md bg-primary py-3 font-display text-sm font-bold uppercase text-primary-foreground shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
        <Phone className="h-4 w-4" /> Sună acum
      </a>
      <a href={WA_LINK} target="_blank" rel="noopener" aria-label="Scrie pe WhatsApp" className="flex items-center justify-center gap-2 rounded-md bg-whatsapp py-3 font-display text-sm font-bold uppercase text-whatsapp-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
    </div>
  );
}

function HomePage() {
  return (
    <div className="pb-20 lg:pb-0">
      <Header />
      <main>
        <Hero />
        <EmergencyBar />
        <Reviews />
        <ForWhom />
        <Services />
        <WhyUs />
        <Zones />
        <Vehicles />
        <BusinessSegment />
        <Pricing />
        <AppSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
