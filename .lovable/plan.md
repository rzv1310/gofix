Problema: utilizatorul raportează că `sameAs` nu apare în Google Rich Results Test, deși a fost adăugat în JSON-LD.

Constatări după verificare:
- `sameAs` este prezent în HTML renderizat pe toate cele 3 pagini locale (`/`, `/vulcanizare-pacurari`, `/vulcanizare-mobila-miroslava`).
- URL-urile sociale sunt accesibile și returnează HTTP 200.
- Google Rich Results Test nu expune vizibil câmpul `sameAs` pentru tipurile `AutoRepair`/`TireShop`, pentru că acest câmp nu generează un rich snippet vizibil; el alimentează Knowledge Panel / entity reconciliation.

Plan de acțiune:

1. **Îmbunătățirea entității LocalBusiness în `__root.tsx`**
   - Adaug `LocalBusiness` ca tip explicit în array-ul `@type` (pe lângă `AutoRepair` și `TireShop`), pentru ca Google să identifice clar entitatea locală.
   - Păstrez `@id: #localbusiness` și legăturile `publisher`/`about` existente.

2. **Verificare și curățare URL-uri `sameAs`**
   - Verific dacă URL-ul LinkedIn cu diacritice URL-encoded (`%C4%83`, `%C8%99`) poate fi normalizat la o variantă fără diacritice sau la forma finală de redirect, pentru a reduce riscul de respingere de către parserul Google.
   - Păstrez celelalte URL-uri (X, Facebook, Instagram) dacă sunt stabile.

3. **Testare cu validatori alternativi**
   - Rulez validarea JSON-LD prin Schema Markup Validator (validator.schema.org) și Google Search Console URL Inspection (la nivel conceptual) pentru a confirma că `sameAs` este citit corect.
   - Raportez utilizatorului că Rich Results Test nu este indicatorul potrivit pentru `sameAs`; datele apar în Search Console / Knowledge Panel.

4. **Documentare în memorie și comunicare**
   - Actualizez memoria proiectului cu observația că `sameAs` nu este afișat în Rich Results Test, dar este valid și indexabil.
   - Explic utilizatorului clar de ce nu apare și ce s-a îmbunătățit.

Rezultat așteptat: schema rămâne validă, entitatea LocalBusiness este mai explicită, iar utilizatorul înțelege limitările Rich Results Test și pașii de verificare corecți.