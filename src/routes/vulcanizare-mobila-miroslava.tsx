import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone, MessageCircle, MapPin, Clock, Wrench, Truck, Car, Gauge,
  ShieldCheck, Zap, CheckCircle2, ChevronDown, Menu, X, Navigation,
  Settings, AlertTriangle,
} from "lucide-react";
import logo from "@/assets/gofix-logo.png";
import heroVan from "@/assets/hero-van-desktop.png";
import heroVanMobile from "@/assets/hero-van-mobile.png";
import whyUs from "@/assets/why-us.jpg";



const PAGE_CSS = `
:root{--bg-dark:#0f172a;--bg-soft:#f8fafc;--text:#0f172a;--muted:#475569;--accent:#f97316;--accent-dark:#ea580c;--border:#e2e8f0;--white:#ffffff;--green:#16a34a}
.vm-page *{box-sizing:border-box}
.vm-page{font-family:Arial,Helvetica,sans-serif;color:var(--text);background:var(--white);line-height:1.6}
.vm-page a{color:inherit}
.vm-page img{max-width:100%;height:auto}
.vm-container{width:min(1120px,calc(100% - 32px));margin:0 auto}
.vm-top-bar{background:#020617;color:#fff;font-size:14px;padding:8px 0}
.vm-top-bar .vm-container{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
.vm-site-header{background:#fff;border-bottom:1px solid var(--border);position:sticky;top:0;z-index:20}
.vm-header-inner{display:flex;justify-content:space-between;align-items:center;padding:14px 0;gap:20px}
.vm-logo{display:flex;align-items:center;gap:10px;font-weight:800;text-decoration:none;font-size:20px;color:var(--text)}
.vm-logo img{width:44px;height:44px;border-radius:10px}
.vm-nav{display:flex;gap:18px;align-items:center;font-size:15px}
.vm-nav a{text-decoration:none;color:var(--text);font-weight:600}
.vm-header-cta{display:inline-flex;align-items:center;justify-content:center;background:var(--accent);color:#fff;padding:10px 16px;border-radius:999px;text-decoration:none;font-weight:800}
.vm-hero{background:radial-gradient(circle at top right,rgba(249,115,22,.18),transparent 32%),linear-gradient(135deg,#020617 0%,#111827 45%,#1e293b 100%);color:#fff;padding:72px 0 56px}
.vm-hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:48px;align-items:center}
.vm-eyebrow{display:inline-flex;align-items:center;gap:8px;background:rgba(249,115,22,.14);color:#fed7aa;border:1px solid rgba(249,115,22,.35);padding:7px 12px;border-radius:999px;font-size:14px;font-weight:700;margin-bottom:18px}
.vm-page h1{font-size:clamp(34px,5vw,58px);line-height:1.05;margin:0 0 20px;letter-spacing:-1.2px;color:#fff}
.vm-hero p{font-size:19px;color:#dbeafe;margin:0 0 24px;max-width:680px}
.vm-hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin:28px 0}
.vm-btn{display:inline-flex;align-items:center;justify-content:center;padding:14px 20px;border-radius:12px;font-weight:800;text-decoration:none;border:1px solid transparent;min-height:52px}
.vm-btn-primary{background:var(--accent);color:#fff}
.vm-btn-primary:hover{background:var(--accent-dark)}
.vm-btn-secondary{background:rgba(255,255,255,.08);color:#fff;border-color:rgba(255,255,255,.24)}
.vm-trust-row{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:26px}
.vm-trust-card{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);border-radius:16px;padding:16px}
.vm-trust-card strong{display:block;color:#fff;font-size:17px;margin-bottom:4px}
.vm-trust-card span{color:#cbd5e1;font-size:14px}
.vm-hero-card{background:#fff;color:var(--text);border-radius:28px;padding:26px;box-shadow:0 24px 80px rgba(0,0,0,.28)}
.vm-hero-card h2{font-size:26px;margin:0 0 12px}
.vm-hero-card ul{padding-left:20px;margin:14px 0 0}
.vm-hero-card li{margin-bottom:10px;color:var(--muted)}
.vm-section{padding:70px 0}
.vm-section-soft{background:var(--bg-soft)}
.vm-section-dark{background:var(--bg-dark);color:#fff}
.vm-section-title{max-width:780px;margin-bottom:34px}
.vm-section-title h2{font-size:clamp(28px,4vw,42px);line-height:1.15;margin:0 0 14px;letter-spacing:-.6px}
.vm-section-title p{color:var(--muted);font-size:18px;margin:0}
.vm-section-dark .vm-section-title p{color:#cbd5e1}
.vm-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.vm-grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:26px}
.vm-card{background:#fff;border:1px solid var(--border);border-radius:22px;padding:24px;box-shadow:0 10px 30px rgba(15,23,42,.04)}
.vm-card h3{margin:0 0 10px;font-size:22px;line-height:1.25}
.vm-card p{margin:0;color:var(--muted)}
.vm-icon{width:42px;height:42px;display:inline-flex;align-items:center;justify-content:center;background:#ffedd5;color:var(--accent-dark);border-radius:12px;font-weight:900;margin-bottom:14px}
.vm-local-highlight{background:#fff7ed;border:1px solid #fed7aa;border-radius:24px;padding:28px}
.vm-local-highlight h2{margin-top:0;font-size:32px}
.vm-area-list{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}
.vm-area-list span{background:#fff;border:1px solid #fed7aa;color:#9a3412;padding:8px 12px;border-radius:999px;font-size:15px;font-weight:700}
.vm-step{position:relative;padding-left:64px}
.vm-step-num{position:absolute;left:0;top:0;width:42px;height:42px;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900}
.vm-service-list{display:grid;gap:14px}
.vm-service-item{display:flex;gap:14px;background:#fff;border:1px solid var(--border);border-radius:18px;padding:18px}
.vm-service-item strong{display:block;margin-bottom:4px;font-size:18px}
.vm-service-item span{color:var(--muted)}
.vm-check{color:var(--green);font-weight:900;font-size:20px;line-height:1.2}
.vm-cta-box{background:linear-gradient(135deg,#ea580c 0%,#f97316 100%);color:#fff;border-radius:30px;padding:40px;display:grid;grid-template-columns:1.1fr .9fr;gap:30px;align-items:center}
.vm-cta-box h2{margin:0 0 12px;font-size:clamp(28px,4vw,42px);line-height:1.12;color:#fff}
.vm-cta-box p{margin:0;font-size:18px;color:#fff7ed}
.vm-cta-buttons{display:flex;gap:12px;flex-wrap:wrap;justify-content:flex-end}
.vm-cta-buttons .vm-btn{background:#fff;color:#9a3412}
.vm-cta-buttons .vm-btn-secondary{background:rgba(255,255,255,.12);color:#fff;border-color:rgba(255,255,255,.35)}
.vm-faq{display:grid;gap:14px}
.vm-faq details{background:#fff;border:1px solid var(--border);border-radius:16px;padding:18px 20px}
.vm-faq summary{cursor:pointer;font-weight:800;font-size:18px}
.vm-faq p{color:var(--muted);margin-bottom:0;margin-top:10px}
.vm-breadcrumb{font-size:14px;margin-bottom:20px;color:#cbd5e1}
.vm-breadcrumb a{color:#fff;text-decoration:underline}
.vm-footer{background:#020617;color:#cbd5e1;padding:38px 0}
.vm-footer-grid{display:grid;grid-template-columns:1.2fr .8fr .8fr;gap:26px}
.vm-footer h2,.vm-footer h3{color:#fff;margin-top:0}
.vm-footer a{color:#fff}
@media (max-width:900px){.vm-hero-grid,.vm-grid-2,.vm-cta-box,.vm-footer-grid{grid-template-columns:1fr}.vm-grid-3,.vm-trust-row{grid-template-columns:1fr}.vm-nav{display:none}.vm-cta-buttons{justify-content:flex-start}.vm-section{padding:52px 0}.vm-hero{padding:46px 0}}
`;

const FAQS: Array<[string, string]> = [
  ["GoFix vine la domiciliu în Miroslava?", "Da. Putem interveni la domiciliu, la birou, în curte, în parcare sau într-o altă locație accesibilă autospecialei."],
  ["Interveniți și în Uricani, Horpaz sau Valea Adâncă?", "Da. Intervenim în Miroslava și în satele apropiate din comună, inclusiv Uricani, Horpaz, Valea Adâncă, Valea Ursului, Balciu, Brătuleni, Ciurbești, Cornești, Dancaș, Găureni, Proselnici și Vorovești, în funcție de disponibilitate."],
  ["Reparați pana direct pe loc?", "Da, dacă anvelopa poate fi reparată în siguranță. Dacă deteriorarea este prea mare sau poziția penei nu permite reparația, îți vom spune ce opțiuni ai."],
  ["Faceți schimb anvelope vară / iarnă la domiciliu?", "Da. Putem face schimb sezonier de anvelope direct la domiciliu sau la sediul firmei, în funcție de program și disponibilitate."],
  ["Faceți echilibrare roți în Miroslava?", "Da, oferim echilibrare roți pe loc cu echipamente mobile profesionale, în funcție de tipul roții și de condițiile de lucru."],
  ["Lucrați și pentru dube, camioane sau tiruri?", "Da, putem interveni și pentru autoutilitare, dube, camioane și tiruri. Pentru o estimare corectă, transmite tipul vehiculului, dimensiunea roții și locația exactă."],
  ["Cât costă o intervenție de vulcanizare mobilă în Miroslava?", "Costul depinde de locația exactă, ora solicitării, tipul vehiculului și serviciul necesar. Sună la +40 332 630 507 pentru estimare rapidă."],
  ["Pot trimite locația pe WhatsApp?", "Da. Poți trimite locația pe WhatsApp, împreună cu o poză a roții și câteva detalii despre problemă."],
];

const AREAS = ["Miroslava","Uricani","Horpaz","Valea Adâncă","Valea Ursului","Balciu","Brătuleni","Ciurbești","Cornești","Dancaș","Găureni","Proselnici","Vorovești"];

export const Route = createFileRoute("/vulcanizare-mobila-miroslava")({
  head: () => ({
    meta: [
      { title: "Vulcanizare Mobilă Miroslava Non-Stop | GoFix Iași" },
      { name: "description", content: "Ai făcut pană în Miroslava? GoFix vine la tine pentru vulcanizare mobilă, reparații pene, schimb anvelope și echilibrare roți pe loc. Intervenții non-stop în Miroslava și împrejurimi." },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Vulcanizare Mobilă Miroslava Non-Stop | GoFix Iași" },
      { property: "og:description", content: "Vulcanizare mobilă în Miroslava: reparații pene, schimb anvelope, echilibrare roți și intervenții pentru autoturisme, dube, camioane și tiruri." },
      { property: "og:url", content: "https://gofix.lovable.app/vulcanizare-mobila-miroslava/" },
      { property: "og:image", content: "https://gofix.lovable.app/gofix-logo-og.png" },
    ],
    links: [
      { rel: "canonical", href: "https://gofix.lovable.app/vulcanizare-mobila-miroslava/" },
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
              description: "Serviciu non-stop de vulcanizare mobilă în Iași și zona metropolitană. Intervenții pentru reparații pene, schimb anvelope, echilibrare roți și servicii pentru autoturisme, autoutilitare, dube, camioane și tiruri.",
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
                  name: "Miroslava",
                  sameAs: "https://ro.wikipedia.org/wiki/Comuna_Miroslava%2C_Ia%C8%99i",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Uricani",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Horpaz",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Valea Adâncă",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Valea Ursului",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Balciu",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Brătuleni",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Ciurbești",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Cornești",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Dancaș",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Găureni",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Proselnici",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Vorovești",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
              ],
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
              "@type": "WebPage",
              "@id": "https://gofix.lovable.app/vulcanizare-mobila-miroslava/#webpage",
              url: "https://gofix.lovable.app/vulcanizare-mobila-miroslava/",
              name: "Vulcanizare Mobilă Miroslava Non-Stop | GoFix Iași",
              description: "Ai făcut pană în Miroslava? GoFix vine la tine pentru vulcanizare mobilă, reparații pene, schimb anvelope și echilibrare roți pe loc.",
              isPartOf: { "@id": "https://gofix.lovable.app/#website" },
              about: { "@id": "https://gofix.lovable.app/vulcanizare-mobila-miroslava/#service" },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://gofix.lovable.app/gofix-logo-og.png",
              },
              breadcrumb: { "@id": "https://gofix.lovable.app/vulcanizare-mobila-miroslava/#breadcrumb" },
              inLanguage: "ro-RO",
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gofix.lovable.app/vulcanizare-mobila-miroslava/#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Acasă",
                  item: "https://gofix.lovable.app/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Vulcanizare mobilă Miroslava",
                  item: "https://gofix.lovable.app/vulcanizare-mobila-miroslava/",
                },
              ],
            },
            {
              "@type": "Service",
              "@id": "https://gofix.lovable.app/vulcanizare-mobila-miroslava/#service",
              name: "Vulcanizare mobilă Miroslava",
              alternateName: [
                "Reparații pene Miroslava",
                "Schimb anvelope la domiciliu Miroslava",
                "Echilibrare roți Miroslava",
              ],
              serviceType: "Vulcanizare mobilă",
              description: "Serviciu de vulcanizare mobilă în Miroslava pentru reparații pene, schimb anvelope, echilibrare roți și intervenții pentru autoturisme, dube, autoutilitare, camioane și tiruri.",
              provider: { "@id": "https://gofix.lovable.app/#localbusiness" },
              areaServed: [
                {
                  "@type": "Place",
                  name: "Miroslava",
                  sameAs: "https://ro.wikipedia.org/wiki/Comuna_Miroslava%2C_Ia%C8%99i",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Uricani",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Horpaz",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Valea Adâncă",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Valea Ursului",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
              ],
              availableChannel: {
                "@type": "ServiceChannel",
                servicePhone: {
                  "@type": "ContactPoint",
                  telephone: "+40332630507",
                  contactType: "customer service",
                  availableLanguage: ["ro"],
                },
                serviceUrl: "https://gofix.lovable.app/vulcanizare-mobila-miroslava/",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicii de vulcanizare mobilă în Miroslava",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Reparații pene cauciuc în Miroslava",
                    itemOffered: {
                      "@type": "Service",
                      name: "Reparații pene cauciuc în Miroslava",
                      serviceType: "Reparații anvelope",
                      provider: { "@id": "https://gofix.lovable.app/#localbusiness" },
                      areaServed: { "@type": "Place", name: "Miroslava" },
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Schimb anvelope la domiciliu în Miroslava",
                    itemOffered: {
                      "@type": "Service",
                      name: "Schimb anvelope la domiciliu în Miroslava",
                      serviceType: "Schimb anvelope",
                      provider: { "@id": "https://gofix.lovable.app/#localbusiness" },
                      areaServed: { "@type": "Place", name: "Miroslava" },
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Echilibrare roți în Miroslava",
                    itemOffered: {
                      "@type": "Service",
                      name: "Echilibrare roți în Miroslava",
                      serviceType: "Echilibrare roți",
                      provider: { "@id": "https://gofix.lovable.app/#localbusiness" },
                      areaServed: { "@type": "Place", name: "Miroslava" },
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Vulcanizare pentru dube, camioane și tiruri în Miroslava",
                    itemOffered: {
                      "@type": "Service",
                      name: "Vulcanizare pentru dube, camioane și tiruri în Miroslava",
                      serviceType: "Vulcanizare vehicule comerciale",
                      provider: { "@id": "https://gofix.lovable.app/#localbusiness" },
                      areaServed: { "@type": "Place", name: "Miroslava" },
                    },
                  },
                ],
              },
            },
            {
              "@type": "FAQPage",
              "@id": "https://gofix.lovable.app/vulcanizare-mobila-miroslava/#faq",
              url: "https://gofix.lovable.app/vulcanizare-mobila-miroslava/",
              name: "Întrebări frecvente despre vulcanizare mobilă în Miroslava",
              isPartOf: { "@id": "https://gofix.lovable.app/vulcanizare-mobila-miroslava/#webpage" },
              about: { "@id": "https://gofix.lovable.app/vulcanizare-mobila-miroslava/#service" },
              inLanguage: "ro-RO",
              mainEntity: FAQS.map(([q, a]) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: MiroslavaPage,
});

function MiroslavaPage() {
  const tel = "+40332630507";
  const wa = "https://wa.me/40332630507";
  return (
    <div className="vm-page">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <div className="vm-top-bar">
        <div className="vm-container">
          <span>Vulcanizare mobilă NON-STOP în Miroslava și zona metropolitană Iași</span>
          <a href={`tel:${tel}`}>Sună: +40 332 630 507</a>
        </div>
      </div>

      <header className="vm-site-header">
        <div className="vm-container vm-header-inner">
          <a href="/" className="vm-logo">
            <img src={logo} alt="GoFix" />
            <span>GoFix</span>
          </a>
          <nav className="vm-nav">
            <a href="#servicii">Servicii</a>
            <a href="#zone">Zone deservite</a>
            <a href="#cum">Cum funcționează</a>
            <a href="#faq">Întrebări</a>
          </nav>
          <a href={`tel:${tel}`} className="vm-header-cta">Sună acum</a>
        </div>
      </header>

      <section className="vm-hero">
        <div className="vm-container">
          <div className="vm-hero-grid">
            <div>
              <div className="vm-breadcrumb">
                <a href="/">Acasă</a> / Vulcanizare mobilă Miroslava
              </div>
              <span className="vm-eyebrow">Disponibil non-stop în Miroslava</span>
              <h1>Vulcanizare mobilă Miroslava – venim la tine pentru pană, schimb anvelope și echilibrare roți</h1>
              <p>
                Ai găsit roata dezumflată dimineața, ai făcut pană în drum spre Iași sau nu vrei să pierzi timp la o vulcanizare fixă?
                GoFix intervine direct la locația ta în Miroslava, Uricani, Horpaz, Valea Adâncă, Valea Ursului și zonele apropiate.
              </p>
              <div className="vm-hero-actions">
                <a href={`tel:${tel}`} className="vm-btn vm-btn-primary">Sună pentru intervenție</a>
                <a href={wa} className="vm-btn vm-btn-secondary">Trimite WhatsApp</a>
              </div>
              <div className="vm-trust-row">
                <div className="vm-trust-card"><strong>Non-stop</strong><span>intervenții în funcție de disponibilitate</span></div>
                <div className="vm-trust-card"><strong>La locația ta</strong><span>acasă, la birou, în parcare sau pe drum</span></div>
                <div className="vm-trust-card"><strong>Dotare mobilă</strong><span>pentru reparații, schimb și echilibrare</span></div>
              </div>
            </div>
            <div className="vm-hero-card">
              <h2>Ai nevoie de ajutor acum?</h2>
              <p style={{ color: "var(--muted)", margin: 0 }}>
                Spune-ne unde ești în Miroslava, ce tip de vehicul ai și ce s-a întâmplat cu roata. Îți confirmăm rapid disponibilitatea și costul estimativ.
              </p>
              <ul>
                <li>Reparații pene cauciuc pe loc</li>
                <li>Schimb anvelope vară / iarnă</li>
                <li>Echilibrare roți cu echipamente mobile</li>
                <li>Autoturisme, dube, autoutilitare, camioane și tiruri</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="vm-section">
        <div className="vm-container">
          <div className="vm-section-title">
            <h2>Când ai nevoie de vulcanizare mobilă în Miroslava?</h2>
            <p>Serviciul este util atunci când nu poți deplasa mașina în siguranță sau când vrei să eviți timpul pierdut cu drumul până la service.</p>
          </div>
          <div className="vm-grid-3">
            {[
              ["1", "Pană acasă sau în parcare", "Dacă ai găsit roata dezumflată în curte, în fața blocului sau într-o parcare rezidențială, intervenim direct la locație."],
              ["2", "Problemă în drum spre Iași", "Pentru cei care fac naveta zilnic din Miroslava spre Iași, o pană poate bloca programul. Ne poți suna pentru asistență mobilă."],
              ["3", "Schimb sezonier fără deplasare", "Venim pentru schimb anvelope vară / iarnă direct la domiciliu, la birou sau la sediul firmei, în funcție de disponibilitate."],
            ].map(([n, t, d]) => (
              <div key={n} className="vm-card">
                <div className="vm-icon">{n}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicii" className="vm-section vm-section-soft">
        <div className="vm-container">
          <div className="vm-grid-2">
            <div>
              <div className="vm-section-title">
                <h2>Servicii de vulcanizare mobilă disponibile în Miroslava</h2>
                <p>GoFix oferă intervenții mobile pentru cele mai frecvente probleme legate de anvelope și roți.</p>
              </div>
              <div className="vm-service-list">
                {[
                  ["Reparații pene cauciuc", "Verificăm anvelopa și reparăm pana pe loc atunci când starea anvelopei permite intervenția în siguranță."],
                  ["Schimb anvelope la domiciliu", "Schimbăm anvelopele direct la locația ta, fără drum până la o vulcanizare fixă."],
                  ["Echilibrare roți pe loc", "Oferim echilibrare roți cu echipamente mobile, pentru confort și stabilitate la drum."],
                  ["Vulcanizare pentru dube, camioane și tiruri", "Intervenim și pentru vehicule comerciale, în funcție de locație, dimensiunea roții și tipul problemei."],
                ].map(([t, d]) => (
                  <div key={t} className="vm-service-item">
                    <span className="vm-check">✓</span>
                    <div>
                      <strong>{t}</strong>
                      <span>{d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="zone" className="vm-local-highlight">
              <h2>Zone deservite în comuna Miroslava</h2>
              <p style={{ color: "var(--muted)", margin: 0 }}>
                Intervenim în Miroslava și în satele apropiate din comună, în funcție de disponibilitate și acces.
                Dacă nu ești sigur că ajungem la adresa ta, sună și îți confirmăm rapid.
              </p>
              <div className="vm-area-list">
                {AREAS.map((a) => <span key={a}>{a}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cum" className="vm-section">
        <div className="vm-container">
          <div className="vm-section-title">
            <h2>Cum funcționează intervenția?</h2>
            <p>Proces simplu, potrivit pentru urgențe, dar și pentru schimburi de anvelope programate.</p>
          </div>
          <div className="vm-grid-3">
            {[
              ["Ne spui locația", "Trimiți adresa sau pin-ul din Miroslava și câteva detalii despre problemă: pană, roată dezumflată, schimb anvelope sau echilibrare."],
              ["Primești estimarea", "Îți confirmăm disponibilitatea, costul estimativ și ce informații mai sunt necesare: tip vehicul, dimensiune roată sau acces la locație."],
              ["Intervenim pe loc", "Venim cu autospeciala dotată și rezolvăm problema direct la tine, dacă anvelopa și condițiile permit intervenția în siguranță."],
            ].map(([t, d], i) => (
              <div key={t} className="vm-card vm-step">
                <span className="vm-step-num">{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vm-section vm-section-soft">
        <div className="vm-container">
          <div className="vm-section-title">
            <h2>De ce să alegi GoFix pentru vulcanizare mobilă în Miroslava?</h2>
            <p>Miroslava este o zonă rezidențială și de tranzit importantă lângă Iași. Când ai o problemă cu roata, timpul pierdut poate însemna program dat peste cap, drumuri anulate sau mașină blocată în parcare.</p>
          </div>
          <div className="vm-grid-3">
            {[
              ["Nu mai cauți platformă", "În multe cazuri, nu trebuie să deplasezi mașina până la service. Venim noi la tine și verificăm ce se poate rezolva pe loc."],
              ["Potrivit pentru familii și firme", "Intervenim pentru mașini personale, dar și pentru autoutilitare sau vehicule comerciale, în funcție de situație."],
              ["Disponibilitate extinsă", "Serviciul este disponibil non-stop în Iași și zona metropolitană, inclusiv Miroslava, cu confirmare telefonică înainte de deplasare."],
            ].map(([t, d]) => (
              <div key={t} className="vm-card">
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vm-section">
        <div className="vm-container">
          <div className="vm-cta-box">
            <div>
              <h2>Ai pană în Miroslava sau ai nevoie de schimb anvelope la locație?</h2>
              <p>Sună acum și spune-ne unde ești. Îți confirmăm disponibilitatea, costul estimativ și următorii pași.</p>
            </div>
            <div className="vm-cta-buttons">
              <a href={`tel:${tel}`} className="vm-btn">Sună +40 332 630 507</a>
              <a href={wa} className="vm-btn vm-btn-secondary">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="vm-section vm-section-soft">
        <div className="vm-container">
          <div className="vm-section-title">
            <h2>Întrebări frecvente despre vulcanizare mobilă în Miroslava</h2>
            <p>Răspunsuri rapide pentru cele mai comune situații întâlnite în Miroslava și împrejurimi.</p>
          </div>
          <div className="vm-faq">
            {FAQS.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="vm-section vm-section-dark">
        <div className="vm-container">
          <div className="vm-section-title">
            <h2>Serviciu local pentru Miroslava și zona metropolitană Iași</h2>
            <p>Pagina este dedicată intervențiilor de vulcanizare mobilă în Miroslava. Pentru alte zone, poți consulta pagina principală GoFix sau poți suna direct pentru confirmare.</p>
          </div>
          <div className="vm-card" style={{ background: "#0b1220", borderColor: "#1e293b", color: "#cbd5e1" }}>
            <h3 style={{ color: "#fff" }}>Ai nevoie de intervenție rapidă?</h3>
            <p style={{ color: "#cbd5e1" }}>
              Cel mai simplu este să suni, să ne spui locația exactă și problema roții. Îți spunem rapid dacă putem interveni și ce cost estimativ are deplasarea.
            </p>
            <div style={{ marginTop: 16 }}>
              <a href={`tel:${tel}`} className="vm-btn vm-btn-primary">Sună pentru vulcanizare mobilă</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="vm-footer">
        <div className="vm-container">
          <div className="vm-footer-grid">
            <div>
              <h2>GoFix Vulcanizare Mobilă Iași</h2>
              <p>Serviciu non-stop de vulcanizare mobilă în Iași, Miroslava și zona metropolitană.</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p><a href={`tel:${tel}`}>+40 332 630 507</a></p>
              <p><a href={wa}>WhatsApp GoFix</a></p>
            </div>
            <div>
              <h3>Adresă</h3>
              <p>Strada Golia 3<br />Iași, 700259<br />România</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
