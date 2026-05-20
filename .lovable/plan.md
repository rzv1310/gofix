
## Obiectiv

Înlocuiește pe tot proiectul orice referință la `gofix.lovable.app` și `gofix-vulcanizaremobila-iasi.ro` cu domeniul nou `https://vulcanizaremobila-iasi.ro` (fără slash final, cu excepția URL-urilor care îl au deja, ex. `/`).

## Fișiere afectate

- `src/lib/site-pages.ts` — `SITE_BASE_URL` → `https://vulcanizaremobila-iasi.ro`
- `public/robots.txt` — directiva `Sitemap:`
- `src/routes/index.tsx` — `og:url`, `og:image`, `twitter:image`, `canonical`, toate `@id` și `url` din JSON-LD
- `src/routes/vulcanizare-mobila-miroslava.tsx` — la fel (meta + JSON-LD, inclusiv `@id`-uri cu `gofix-vulcanizaremobila-iasi.ro`)
- `src/routes/vulcanizare-pacurari.tsx` — la fel
- `src/routes/gdpr.tsx` — textul `gofix-vulcanizaremobila-iasi.ro` → `vulcanizaremobila-iasi.ro`
- `src/routes/termeni.tsx` — la fel

Sitemap-ul (`src/routes/sitemap[.]xml.ts`) și `llms.txt` folosesc deja `SITE_BASE_URL` din `site-pages.ts`, deci se actualizează automat.

## Metodă

Un singur `sed -i` global pe toate fișierele relevante care înlocuiește ambele variante vechi cu noul domeniu, apoi verificare cu `rg` că nu mai apare nimic și că build-ul trece.

## Ce NU se schimbă

- Asset-urile locale `@/assets/gofix-logo.webp` (nume de fișier, nu URL)
- Numele brandului „GoFix" din copy
- Handle-ul Twitter `@gofix_iasi`
