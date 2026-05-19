export interface SitePage {
  path: string;
  title: string;
  description: string;
  keywords: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
}

export const SITE_BASE_URL = "https://gofix.lovable.app";
export const SITE_NAME = "GoFix Vulcanizare Mobilă Iași";

export const SITE_PAGES: SitePage[] = [
  {
    path: "/",
    title: "Vulcanizare Mobilă Iași Non-Stop 24/7 — GoFix la tine în 30 min",
    description:
      "Vulcanizare mobilă Iași non-stop. Reparații pene, schimb anvelope și echilibrare roți la domiciliu, birou sau pe marginea drumului. Sună 0332 630 507.",
    keywords:
      "vulcanizare mobila Iasi, vulcanizare non-stop Iasi, pana cauciuc Iasi, schimb anvelope la domiciliu, echilibrare roti mobila, GoFix Iasi, asistenta rutiera Iasi 24/7",
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/vulcanizare-mobila-miroslava",
    title: "Vulcanizare Mobilă Miroslava Non-Stop | GoFix Iași",
    description:
      "Vulcanizare mobilă în Miroslava și satele învecinate (Uricani, Valea Adâncă, Horpaz, Brătuleni, Vorovești, Cornești). Reparații pene, schimb anvelope și echilibrare roți la domiciliu.",
    keywords:
      "vulcanizare mobila Miroslava, vulcanizare Uricani, vulcanizare Valea Adanca, vulcanizare Horpaz, schimb anvelope Miroslava, pana cauciuc Miroslava, GoFix Miroslava",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/vulcanizare-pacurari",
    title: "Vulcanizare Păcurari Iași | GoFix Vulcanizare Mobilă Non-Stop",
    description:
      "Vulcanizare mobilă non-stop în cartierul Păcurari și zonele apropiate (Canta, Moara de Foc, Valea Lupului, Galata, Copou). Reparații pene, schimb anvelope și echilibrare roți pe loc.",
    keywords:
      "vulcanizare Pacurari, vulcanizare mobila Pacurari, pana cauciuc Pacurari, schimb anvelope Pacurari, vulcanizare Canta, vulcanizare Moara de Foc, GoFix Pacurari",
    changefreq: "monthly",
    priority: "0.8",
  },
];
