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

