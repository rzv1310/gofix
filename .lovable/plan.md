## URL-urile

- Lista articolelor: `https://vulcanizaremobila-iasi.ro/blog`
- Un articol: `https://vulcanizaremobila-iasi.ro/blog/nume-articol` (ex. `/blog/cum-repari-o-pana-de-cauciuc`)
- Feed RSS: `https://vulcanizaremobila-iasi.ro/rss.xml`

## Obiectiv

Secțiune de blog cu articole scrise în cod (fără bază de date) + feed RSS generat automat din aceleași articole.

## Modificări

### 1. `src/lib/blog-posts.ts` (nou)
Sursa unică de adevăr pentru articole:

```ts
export interface BlogPost {
  slug: string;
  title: string;        // titlu H1 + <title>
  description: string;  // meta description + <description> în RSS
  publishedAt: string;  // 2026-08-01
  updatedAt: string;
  image?: string;       // og:image (URL absolut)
  content: ReactNode;   // corpul articolului
}
```

Pornesc cu 2-3 articole demonstrative pe teme relevante (pană de cauciuc, schimb anvelope sezonier, echilibrare roți), pe care le poți înlocui/extinde ulterior.

### 2. `src/routes/blog.index.tsx` (nou) - `/blog`
Listă de carduri cu titlu, dată, descriere scurtă, link către articol. Același header/footer ca restul site-ului. `head()` propriu (title, description, og:*, canonical).

### 3. `src/routes/blog.$slug.tsx` (nou) - `/blog/{slug}`
Pagina articolului. Dacă slug-ul nu există -> `notFound()`. `head()` per articol: title, description, canonical, og:title/description/image, twitter:card. JSON-LD `BlogPosting` legat de `#localbusiness` ca `publisher`.

### 4. `src/routes/rss[.]xml.ts` (nou) - `/rss.xml`
Feed RSS 2.0 din `BLOG_POSTS`, sortat descrescător după `publishedAt`: `<title>`, `<link>`, `<description>`, `<pubDate>` (RFC 822), `<guid isPermaLink="true">`, plus `<atom:link rel="self">`. Content-Type `application/rss+xml; charset=utf-8`.

### 5. Sitemap
- `src/lib/site-pages.ts`: adaug `/blog` cu `group: "core"`.
- `src/routes/sitemap[.]xml.ts`: adaug articolele de blog (URL, `lastmod` din `updatedAt`, `changefreq: monthly`, `priority: 0.6`).

### 6. Legături
- `<link rel="alternate" type="application/rss+xml" href="/rss.xml">` în `__root.tsx`.
- Link "Blog" în navigația din header și în footer, pe toate paginile.
- `robots.txt` rămâne neschimbat (indexul de sitemap acoperă deja totul).

## Note

- Articolele se adaugă editând `src/lib/blog-posts.ts` - fără backend, fără costuri suplimentare.
- Dacă vrei ulterior să scrii articole dintr-o interfață de admin, e nevoie de Lovable Cloud (bază de date); pot face migrarea oricând.
