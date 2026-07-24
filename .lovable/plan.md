## Obiectiv

Sitemap dedicat pentru paginile locale, index de sitemap-uri, `lastmod` bazat pe modificări reale (nu bulk-update).

## Modificări

### 1. `src/lib/site-pages.ts`
- Adaug `group: "core" | "locations" | "legal"` pe fiecare pagină.
- `updatedAt`:
  - `/`, `/vulcanizare-pacurari`, `/vulcanizare-mobila-miroslava` → `2026-07-24` (HTML randat s-a modificat: schema `AutoRepair`/`WebSite`/`FAQPage` refăcută în turul anterior).
  - `/gdpr`, `/termeni`, `/cookies` → rămân la `2026-05-20` (nicio modificare reală de conținut sau schemă).

Paginile legale sunt indexabile (`robots: index,follow`), deci rămân în `/sitemap.xml`.

### 2. `src/routes/sitemap[.]xml.ts` (existent)
Filtrez `SITE_PAGES` la `group !== "locations"`. Rămân: `/`, `/gdpr`, `/termeni`, `/cookies`. Content-Type devine `application/xml; charset=utf-8`.

### 3. `src/routes/sitemap-locatii[.]xml.ts` (nou)
Doar paginile cu `group === "locations"`. Aceleași URL-uri canonice indexabile. Content-Type `application/xml; charset=utf-8`.

### 4. `src/routes/sitemap-index[.]xml.ts` (nou)
`lastmod` calculat dinamic: pentru fiecare sitemap referențiat, ia `max(updatedAt)` din paginile care îi aparțin. La fiecare bump viitor al unei pagini, indexul reflectă automat noua dată — fără valori hardcodate.

```
<sitemap>
  <loc>.../sitemap.xml</loc>
  <lastmod>{max updatedAt din core+legal}</lastmod>
</sitemap>
<sitemap>
  <loc>.../sitemap-locatii.xml</loc>
  <lastmod>{max updatedAt din locations}</lastmod>
</sitemap>
```

### 5. `public/robots.txt`
`Sitemap:` → `https://vulcanizaremobila-iasi.ro/sitemap-index.xml`. Un singur index simplifică administrarea, trimiterea și monitorizarea în Google Search Console (Google acceptă și trimiteri separate, și index — nu declară o preferință).

## Neatins

- **FAQPage pe paginile locale**: deja adaptat per pagină (`url`, `@id`, `mainEntity` din `FAQS` local).
- **`#localbusiness`**: identic pe tot site-ul.
- **Linkuri interne HTML** către paginile locale: confirmat prezente în `src/routes/index.tsx` (secțiuni cartiere/localități + footer).

## După implementare (task user)

1. Republică.
2. GSC → Sitemaps: trimite `sitemap-index.xml`.
3. Opțional: URL Inspection → Request indexing pe cele 2 pagini locale.
