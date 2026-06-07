## Context
`__root.tsx` nu conține nicio schemă JSON-LD. Fiecare din cele 3 rute are propria schemă completă (LocalBusiness + WebSite + WebPage + Service + FAQPage), ceea ce duplică LocalBusiness și WebSite pe fiecare pagină.

## Obiectiv
Centralizează schema LocalBusiness + WebSite în `__root.tsx` (schemă globală), păstrând în fiecare rută doar elementele specifice (WebPage, Service, FAQPage). Adresa fizică rămâne identică pe toate rutele.

## Pași de implementare

### 1. Adaugă schema globală în `__root.tsx`
- Extinde blocul `head()` cu un script `application/ld+json`
- Include `LocalBusiness` (AutoRepair, TireShop) cu:
  - `streetAddress: "Strada Golia 3"`
  - `addressLocality: "Iași"`
  - `addressRegion: "Iași"`
  - `postalCode: "700259"`
  - `addressCountry: "RO"`
  - `geo` cu lat/long (47.1664, 27.5795)
  - `telephone: "+40332630507"`
  - `openingHoursSpecification` non-stop
  - `contactPoint` customer service
  - `areaServed` — lista completă de zone din `index.tsx` (cea mai cuprinzătoare)
  - `hasOfferCatalog` cu lista de servicii generale
- Include `WebSite` cu `@id`, `url`, `name`, `publisher` (referință la LocalBusiness), `inLanguage: "ro-RO"`

### 2. Refactorizează `src/routes/index.tsx`
- Elimină LocalBusiness și WebSite din JSON-LD
- Păstrează doar:
  - `WebPage` (homepage)
  - `Service` (vulcanizare mobilă Iași)
  - `FAQPage`
- Menține referințele `@id` la `https://vulcanizaremobila-iasi.ro/#localbusiness` și `/#website`

### 3. Refactorizează `src/routes/vulcanizare-mobila-miroslava.tsx`
- Elimină LocalBusiness și WebSite din JSON-LD
- Păstrează doar:
  - `WebPage` (Miroslava)
  - `Service` (vulcanizare mobilă Miroslava)
- Menține referințele `@id`

### 4. Refactorizează `src/routes/vulcanizare-pacurari.tsx`
- Elimină LocalBusiness și WebSite din JSON-LD
- Păstrează doar:
  - `WebPage` (Păcurari)
  - `Service` (vulcanizare mobilă Păcurari)
- Menține referințele `@id`

### 5. Verificări
- Adresa în schema globală să fie identică cu adresa din footer: `Strada Golia 3, 700259 Iași, România`
- Schema să nu fie duplicată pe nicio pagină
- Build TypeScript să treacă fără erori