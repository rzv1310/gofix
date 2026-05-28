export interface SitePage {
  path: string;
  title: string;
  description: string;
  keywords: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
  updatedAt: string;
}

export const SITE_BASE_URL = "https://vulcanizaremobila-iasi.ro";
export const SITE_NAME = "GoFix Vulcanizare Mobilă Iași";

export const SITE_PAGES: SitePage[] = [
  {
    path: "/",
    title: "Vulcanizare Mobilă Iași Non-Stop 24/7 - GoFix la tine în 30 min",
    description:
      "Vulcanizare mobilă Iași non-stop. Reparații pene, schimb anvelope și echilibrare roți la domiciliu, birou sau pe marginea drumului. Sună +40 332 630 507.",
    keywords:
      "vulcanizare mobila Iasi, vulcanizare non-stop Iasi, pana cauciuc Iasi, schimb anvelope la domiciliu, echilibrare roti mobila, GoFix Iasi, asistenta rutiera Iasi 24/7",
    changefreq: "weekly",
    priority: "1.0",
    updatedAt: "2026-05-20",
  },
  {
    path: "/vulcanizare-mobila-miroslava",
    title: "Vulcanizare Mobilă Miroslava Non-Stop | GoFix Iași",
    description:
      "Vulcanizare mobilă în Miroslava și satele învecinate (Uricani, Valea Adâncă, Horpaz, Brătuleni, Vorovești, Cornești). Reparații pene, schimb anvelope și echilibrare roți la domiciliu.",
    keywords:
      "vulcanizare mobila Miroslava, vulcanizare Uricani, vulcanizare Valea Adanca, vulcanizare Horpaz, schimb anvelope Miroslava, pana cauciuc Miroslava, GoFix Miroslava",
    changefreq: "monthly",
    priority: "0.5",
    updatedAt: "2026-05-20",
  },
  {
    path: "/vulcanizare-pacurari",
    title: "Vulcanizare Păcurari Iași | GoFix Vulcanizare Mobilă Non-Stop",
    description:
      "Vulcanizare mobilă non-stop în cartierul Păcurari și zonele apropiate (Canta, Moara de Foc, Valea Lupului, Galata, Copou). Reparații pene, schimb anvelope și echilibrare roți pe loc.",
    keywords:
      "vulcanizare Pacurari, vulcanizare mobila Pacurari, pana cauciuc Pacurari, schimb anvelope Pacurari, vulcanizare Canta, vulcanizare Moara de Foc, GoFix Pacurari",
    changefreq: "monthly",
    priority: "0.5",
    updatedAt: "2026-05-20",
  },
  {
    path: "/gdpr",
    title: "Politica de Confidențialitate GDPR | GoFix Iași",
    description:
      "Politica de confidențialitate GoFix Vulcanizare Mobilă Iași. Cum colectăm, folosim și protejăm datele personale conform GDPR.",
    keywords:
      "GDPR GoFix, politica confidentialitate vulcanizare Iasi, prelucrare date personale, drepturi utilizatori",
    changefreq: "yearly",
    priority: "0.3",
    updatedAt: "2026-05-20",
  },
  {
    path: "/termeni",
    title: "Termeni și Condiții | GoFix Vulcanizare Mobilă Iași",
    description:
      "Termenii și condițiile de utilizare a site-ului GoFix Vulcanizare Mobilă Iași și a serviciului de intermediere a solicitărilor.",
    keywords:
      "termeni si conditii GoFix, reguli utilizare site vulcanizare, intermediere solicitari",
    changefreq: "yearly",
    priority: "0.3",
    updatedAt: "2026-05-20",
  },
  {
    path: "/cookies",
    title: "Politică de Cookies | GoFix Vulcanizare Mobilă Iași",
    description:
      "Politica de cookies a site-ului GoFix Vulcanizare Mobilă Iași. Ce cookie-uri folosim și cum le gestionăm.",
    keywords:
      "politica cookies GoFix, cookie-uri site vulcanizare, gestionare cookies",
    changefreq: "yearly",
    priority: "0.3",
    updatedAt: "2026-05-20",
  },
];
