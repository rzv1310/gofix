## Ce e de făcut

Meta tag-urile `og:image` și `twitter:image` din `src/routes/vulcanizare-pacurari.tsx` indică deja către `https://vulcanizaremobila-iasi.ro/og-pacurari.jpg` (liniile 536 și 546). Nu e nevoie să modific codul.

Tot ce trebuie făcut este să **înlocuiesc fișierul** `public/og-pacurari.jpg` cu imaginea pe care ai atașat-o (banner-ul cu duba GoFix și textul "VULCANIZARE MOBILĂ PĂCURARI · IAȘI" + numărul 0332 630 508).

## Pași

1. Copiez `user-uploads://vulcanizare_mobila_pacurari.jpg` peste `public/og-pacurari.jpg` (overwrite).
2. Verific dimensiunile (ar trebui 1200×630 — dacă diferă, redimensionez la 1200×630 ca să corespundă cu `og:image:width/height` din meta).
3. Confirm că noua imagine apare la URL-ul publicat.

## Nu modific

- Nu schimb codul din `vulcanizare-pacurari.tsx` — meta-urile sunt deja corecte.
- Nu ating `og-home.jpg` sau `og-miroslava.jpg`.
- Nu schimb `og:image:alt` / `twitter:image:alt` — descrierea actuală se potrivește cu noul banner.
