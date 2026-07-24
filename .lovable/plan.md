## Obiectiv

Fac `sameAs` explicit pe fiecare pagină, atașat unui nod `LocalBusiness` care corespunde paginii curente, nu doar în blocul global din `__root.tsx`.

## Modificări

### 1. `src/routes/index.tsx`
În `@graph`-ul paginii adaug un nod suplimentar care re-declară afacerea cu același `@id` global și include `sameAs` local:

```
{
  "@type": ["LocalBusiness", "AutoRepair", "TireShop"],
  "@id": "https://vulcanizaremobila-iasi.ro/#localbusiness",
  name: "GoFix Vulcanizare Mobilă Iași",
  url: "https://vulcanizaremobila-iasi.ro/",
  sameAs: [
    "https://www.linkedin.com/company/gofix-vulcanizare-mobil%C4%83-ia%C8%99i/",
    "https://x.com/GoFixIasi",
    "https://www.facebook.com/profile.php?id=61582917103139",
    "https://www.instagram.com/gofixiasi/"
  ]
}
```

### 2. `src/routes/vulcanizare-pacurari.tsx`
Adaug în `@graph` același nod `LocalBusiness` cu `sameAs`, plus îl leg de `#webpage` prin `about`/`mainEntity` la nivel de pagină, astfel încât validatorul să vadă `sameAs` atașat direct entității paginii curente.

### 3. `src/routes/vulcanizare-mobila-miroslava.tsx`
Identic cu pagina Păcurari.

### 4. `__root.tsx`
Rămâne neschimbat — `sameAs` continuă să existe și la nivel global pe entitatea `#localbusiness`. Duplicarea cu același `@id` pe pagini este validă în JSON-LD (nodurile cu același `@id` sunt îmbinate) și garantează că validatorul asociază `sameAs` cu entitatea paginii curente.

## Verificare

După implementare:
1. Build.
2. Testez fiecare din cele 3 pagini în [Schema Markup Validator](https://validator.schema.org/) și confirm că `sameAs` apare pe nodul `LocalBusiness` al paginii curente.
3. Rulez și Google Rich Results Test pentru a confirma că nu apar erori.

## Notă tehnică

`sameAs` nu produce rich snippet vizibil, deci nu va apărea în panoul „Rezultate îmbogățite" din Google Rich Results Test — dar va apărea în „Vizualizează codul testat" și în Schema Markup Validator, ceea ce confirmă că Google îl citește.
