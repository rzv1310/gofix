## Obiectiv

Înlocuiește pagina 404 existentă (textuală, în `src/routes/__root.tsx → NotFoundComponent`) cu o variantă vizuală bazată pe cele două imagini încărcate. Întreaga imagine devine link către `/`, iar imaginea ocupă tot viewportul.

## Pași

1. **Copiez imaginile** în `src/assets/`:
   - `user-uploads://404_desktop.png` → `src/assets/404-desktop.png`
   - `user-uploads://404_mobile.png` → `src/assets/404-mobile.png`

2. **Rescriu `NotFoundComponent`** din `src/routes/__root.tsx`:
   - Container `<Link to="/">` cu `block w-screen h-screen` (sau `min-h-dvh w-full`), fără padding/margin, fără chenar — clicul oriunde pe imagine duce la homepage.
   - `<picture>` cu `<source media="(max-width: 767px)" srcSet={mobile} />` și `<img src={desktop} />`.
   - Imaginea folosește `object-cover w-full h-full` pentru desktop și `object-contain` pe mobil (sau invers, în funcție de aspect — ambele imagini sunt deja designate să umple ecranul, deci `object-cover` pe ambele, cu `object-position: center`).
   - `alt="404 - Pagina nu a fost găsită. Înapoi la homepage."`
   - SEO: rămâne fără `head()` propriu (e fallback pe root).

3. **Verific** că imaginile sunt importate ca module ES6 (`import notFoundDesktop from "@/assets/404-desktop.png"`) ca să fie bundle-uite/optimizate de Vite.

## Detalii tehnice

```tsx
// src/routes/__root.tsx (înlocuiește doar NotFoundComponent)
import notFoundDesktop from "@/assets/404-desktop.png";
import notFoundMobile from "@/assets/404-mobile.png";

function NotFoundComponent() {
  return (
    <Link to="/" aria-label="Înapoi la homepage" className="block h-dvh w-screen overflow-hidden">
      <picture>
        <source media="(max-width: 767px)" srcSet={notFoundMobile} />
        <img
          src={notFoundDesktop}
          alt="404 - Pagina a făcut pană. Înapoi la homepage."
          className="h-full w-full object-cover"
        />
      </picture>
    </Link>
  );
}
```

## Ce NU se schimbă

- `ErrorComponent` (eroarea SSR „This page didn't load") rămâne neatinsă.
- Restul rutelor și meta tag-urilor.
- Imaginile hero existente.
