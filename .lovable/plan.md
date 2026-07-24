## Obiectiv

Aliniez schema JSON-LD la varianta furnizată de user. Schema conține 3 noduri (`LocalBusiness`/AutoRepair, `WebSite`, `FAQPage`) și corespunde homepage-ului.

## Modificări

### 1. `src/routes/__root.tsx` (global, pe toate paginile)
Înlocuiesc nodurile `LocalBusiness` și `WebSite` din `@graph` cu variantele noi:
- `@type` devine doar `"AutoRepair"` (fără `LocalBusiness` și `TireShop` în array), conform noii scheme.
- `geo` actualizat: `latitude: 47.1638211`, `longitude: 27.5895262` (înainte 47.1664 / 27.5795).
- `openingHoursSpecification` devine obiect unic (nu array) — comportament identic pentru validator.
- `contactPoint.areaServed` devine array cu City + AdministrativeArea (înainte era string `"RO"`).
- `contactPoint.availableLanguage` devine string `"ro"` (înainte array).
- `sameAs`, adresă, telefon, logo, image, hasMap, priceRange, description — rămân identice.
- `WebSite` — identic (deja corect).

### 2. `src/routes/index.tsx`
Înlocuiesc `@graph`-ul paginii cu doar nodul `FAQPage` (nodurile `LocalBusiness` și `WebSite` sunt injectate deja global din `__root.tsx`, cu același `@id`, deci pe homepage rezultatul final e exact `@graph`-ul cerut de user).

Conținutul `FAQPage` din user match-uiește deja ce e în cod (aceleași 7 întrebări/răspunsuri, același `@id`, `isPartOf`, `about`, `publisher`) — practic doar elimin nodul duplicat `LocalBusiness` cu `sameAs` care fusese adăugat anterior pentru validator (nu mai e necesar acum că păstrăm nodul global consolidat).

### 3. Pagini locale (`vulcanizare-pacurari.tsx`, `vulcanizare-mobila-miroslava.tsx`)
Nu se modifică schema — nu fac parte din cererea „replace schema" (schema furnizată e homepage-only, cu `url` și `FAQPage` specifice `/`). Nodurile `LocalBusiness` duplicate adăugate anterior în graph-urile lor rămân neatinse.

## Verificare
1. Build.
2. Homepage în [Schema Markup Validator](https://validator.schema.org/) → confirm cele 3 noduri (`AutoRepair`, `WebSite`, `FAQPage`) fără erori.
3. Paginile locale → schema lor existentă nu e afectată.
