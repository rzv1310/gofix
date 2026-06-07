## Plan

### 1. `src/routes/index.tsx` (linii 418-423)
Înlocuiesc iframe-ul OSM cu embed-ul Google Maps furnizat (sediul GoFix - Strada Golia 3):

```tsx
<iframe
  title="Hartă sediu GoFix Vulcanizare Mobilă Iași - Strada Golia 3"
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2712.6944963534365!2d27.5896026!3d47.1638375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2875af1345fa17a5%3A0x355982e9bc4cefa9!2sGoFix%20Vulcanizare%20Mobil%C4%83%20Ia%C8%99i!5e0!3m2!1sro!2ses!4v1780824504693!5m2!1sro!2ses"
  className="h-80 w-full rounded-xl border-0 lg:h-full"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  allowFullScreen
/>
```

### 2. `src/routes/vulcanizare-mobila-miroslava.tsx` (linii 345-350)
Înlocuiesc iframe-ul OSM cu Google Maps centrat pe **Miroslava**:

```tsx
<iframe
  title="Hartă vulcanizare mobilă în comuna Miroslava, Iași"
  src="https://maps.google.com/maps?q=Miroslava,%20Ia%C8%99i&z=13&output=embed&hl=ro"
  className="h-80 w-full rounded-xl border-0 lg:h-full"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  allowFullScreen
/>
```

### 3. `src/routes/vulcanizare-pacurari.tsx` (linii 345-350)
Înlocuiesc iframe-ul OSM cu Google Maps centrat pe **Păcurari**:

```tsx
<iframe
  title="Hartă vulcanizare mobilă în Păcurari, Iași"
  src="https://maps.google.com/maps?q=P%C4%83curari,%20Ia%C8%99i&z=14&output=embed&hl=ro"
  className="h-80 w-full rounded-xl border-0 lg:h-full"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  allowFullScreen
/>
```

### 4. Schema JSON-LD
**Nu se modifică.** `hasMap` în `__root.tsx` rămâne URL-ul canonic Google Business Profile (`https://maps.app.goo.gl/7NQtYKPg1FpQjsv89`). URL-urile de embed nu se pun în schema — Google nu le acceptă ca `hasMap`.

### Note
- Embed-urile pentru Miroslava și Păcurari folosesc formatul Google Maps `?q=...&output=embed` care nu necesită API key și e gratuit fără limite.
- Dacă vrei ulterior embed-uri Google Maps "premium" cu pin-uri custom centrate pe Miroslava/Păcurari (de tipul celui furnizat de tine pentru HQ), trebuie generate manual din Google Maps → Partajează → Încorporează o hartă pentru fiecare locație.