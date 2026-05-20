import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  component: CookiesPage,
  head: () => ({
    meta: [
      { title: "Politică de Cookies | GoFix Vulcanizare Mobilă Iași" },
      {
        name: "description",
        content:
          "Politică de cookies GoFix Vulcanizare Mobilă Iași: ce cookie-uri sunt folosite, cum gestionăm consimțământul și cum le puteți dezactiva.",
      },
      { name: "robots", content: "index,follow" },
    ],
  }),
});

function CookiesPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="legal-page cookies-page py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 prose prose-neutral max-w-none
          [&_h1]:text-3xl md:[&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mb-4
          [&_h2]:text-xl md:[&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3
          [&_h3]:text-lg md:[&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2
          [&_p]:my-3 [&_p]:leading-relaxed
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-3 [&_li]:my-1
          [&_a]:text-primary [&_a]:underline hover:[&_a]:opacity-80">

          <nav aria-label="Breadcrumb" className="text-sm mb-4 not-prose">
            <ol className="flex items-center gap-2 text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Acasă</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground" aria-current="page">Politică de Cookies</li>
            </ol>
          </nav>

          <h1>Politică de Cookies</h1>
          <p>Ultima actualizare: 20.05.2026</p>

          <h2>1. Introducere</h2>
          <p>
            Această Politică de Cookies explică modul în care site-ul{" "}
            <strong>vulcanizaremobila-iasi.ro</strong>, denumit în continuă „Site-ul”, utilizează cookie-uri și tehnologii similare.
          </p>
          <p>
            Site-ul GoFix Vulcanizare Mobilă Iași funcționează ca platformă de intermediare / generare solicitări pentru servicii de vulcanizare mobilă în Iași și zona metropolitană.
          </p>
          <p>
            Prin utilizarea Site-ului, puteți accepta, refuza sau modifica preferințele privind cookie-urile, în funcție de opțiunile disponibile în bannerul de consimțământ.
          </p>

          <h2>2. Ce sunt cookie-urile?</h2>
          <p>
            Cookie-urile sunt fișiere mici de text stocate pe dispozitivul dumneavoastră atunci când vizitați un website. Acestea permit site-ului să rețină anumite informații despre vizita dumneavoastră, cum ar fi preferințele, setările, paginile accesate sau interacțiunile efectuate.
          </p>
          <p>
            Cookie-urile pot fi setate direct de Site-ul nostru sau de servicii terțe integrate în Site, cum ar fi instrumente de analiză, publicitate, hărți, formulare sau platforme de comunicare.
          </p>

          <h2>3. Tipuri de cookie-uri utilizate</h2>
          <p>Site-ul poate utiliza următoarele categorii de cookie-uri:</p>

          <h3>3.1. Cookie-uri necesare</h3>
          <p>
            Aceste cookie-uri sunt esențiale pentru funcționarea corectă a Site-ului și nu pot fi dezactivate din sistemele noastre. Ele permit funcții de bază, cum ar fi navigarea pe site, securitatea, afișarea corectă a paginilor și memorarea preferințelor strict necesare.
          </p>
          <p>Aceste cookie-uri nu necesită consimțământ, deoarece sunt necesare pentru funcționarea Site-ului.</p>

          <h3>3.2. Cookie-uri de preferințe</h3>
          <p>
            Aceste cookie-uri permit Site-ului să rețină anumite alegeri făcute de utilizator, cum ar fi preferințele privind cookie-urile, limba, regiunea sau alte setări de afișare.
          </p>

          <h3>3.3. Cookie-uri analitice</h3>
          <p>
            Cookie-urile analitice ne ajută să înțelegem cum este utilizat Site-ul, ce pagini sunt accesate, cât timp petrec utilizatorii pe site și ce acțiuni realizează. Aceste informații sunt folosite pentru îmbunătățirea conținutului, structurii și experienței utilizatorilor.
          </p>
          <p>
            Exemple de informații care pot fi colectate: pagini vizitate, sursa traficului, tipul dispozitivului, browserul folosit, ora accesării și interacțiuni precum click pe telefon, click pe WhatsApp sau trimitere formular.
          </p>

          <h3>3.4. Cookie-uri de marketing</h3>
          <p>
            Cookie-urile de marketing pot fi utilizate pentru măsurarea eficienței campaniilor publicitare și pentru afișarea de reclame relevante pe alte platforme, precum Google sau Meta/Facebook.
          </p>
          <p>
            Aceste cookie-uri pot urmări interacțiuni precum accesarea unei pagini, click pe butonul de telefon, click pe WhatsApp, trimiterea unui formular sau alte acțiuni relevante pentru măsurarea conversiilor.
          </p>

          <h2>4. Tehnologii și servicii terțe care pot folosi cookie-uri</h2>
          <p>Site-ul poate utiliza sau integra servicii terțe, precum:</p>
          <ul>
            <li>Google Tag Manager;</li>
            <li>Google Analytics;</li>
            <li>Google Ads / conversii Google Ads;</li>
            <li>Meta Pixel / Facebook Pixel;</li>
            <li>Google Maps;</li>
            <li>WhatsApp;</li>
            <li>servicii de hosting, securitate și monitorizare tehnică;</li>
            <li>alte instrumente de analiză, publicitate sau optimizare a Site-ului.</li>
          </ul>
          <p>
            Aceste servicii pot seta propriile cookie-uri sau tehnologii similare, în funcție de configurarea Site-ului și de consimțământul acordat de utilizator.
          </p>

          <h2>5. Cookie-uri necesare pentru funcționarea site-ului</h2>
          <p>Cookie-urile necesare sunt folosite pentru:</p>
          <ul>
            <li>afișarea corectă a paginilor;</li>
            <li>menținerea securității Site-ului;</li>
            <li>memorarea preferințelor privind consimțământul pentru cookie-uri;</li>
            <li>prevenirea erorilor tehnice;</li>
            <li>funcționarea formularelor sau a elementelor interactive, dacă există.</li>
          </ul>
          <p>Fără aceste cookie-uri, Site-ul poate să nu funcționeze corect.</p>

          <h2>6. Cookie-uri pentru analiză și performanță</h2>
          <p>
            Dacă sunt activate, cookie-urile analitice ne ajută să măsurăm performanța Site-ului și să înțelegem comportamentul utilizatorilor. De exemplu, putem analiza:
          </p>
          <ul>
            <li>ce pagini sunt accesate cel mai des;</li>
            <li>ce zone sau servicii atrag interes;</li>
            <li>câte persoane dau click pe telefon sau WhatsApp;</li>
            <li>ce dispozitive sunt folosite cel mai frecvent;</li>
            <li>din ce surse ajung utilizatorii pe Site.</li>
          </ul>
          <p>Aceste informații sunt folosite pentru îmbunătățirea Site-ului și a campaniilor de promovare.</p>

          <h2>7. Cookie-uri pentru marketing și conversii</h2>
          <p>
            Cookie-urile de marketing pot fi folosite pentru măsurarea rezultatelor campaniilor publicitare și pentru optimizarea promovării serviciilor GoFix.
          </p>
          <p>De exemplu, aceste tehnologii pot ajuta la măsurarea unor acțiuni precum:</p>
          <ul>
            <li>click pe numărul de telefon;</li>
            <li>click pe butonul WhatsApp;</li>
            <li>trimiterea unui formular;</li>
            <li>vizitarea unei pagini de serviciu;</li>
            <li>revenirea utilizatorului pe Site după accesarea unei reclame.</li>
          </ul>
          <p>
            Cookie-urile de marketing sunt activate doar dacă utilizatorul își exprimă consimțământul, acolo unde legea impune acest lucru.
          </p>

          <h2>8. Durata de viață a cookie-urilor</h2>
          <p>Cookie-urile pot fi:</p>
          <ul>
            <li>
              <strong>cookie-uri de sesiune</strong> - sunt șterse automat atunci când închideți browserul;
            </li>
            <li>
              <strong>cookie-uri persistente</strong> - rămân stocate pe dispozitiv pentru o perioadă determinată sau până când sunt șterse manual.
            </li>
          </ul>
          <p>
            Durata exactă de stocare depinde de tipul cookie-ului, de furnizorul acestuia și de setările browserului sau ale bannerului de consimțământ.
          </p>

          <h2>9. Gestionarea consimțământului</h2>
          <p>
            La prima accesare a Site-ului, poate fi afișat un banner de cookies prin care puteți accepta, refuza sau personaliza categoriile de cookie-uri utilizate.
          </p>
          <p>
            Cookie-urile necesare funcționării Site-ului pot fi setate fără consimțământ, însă cookie-urile analitice și de marketing ar trebui activate doar după acordul utilizatorului.
          </p>
          <p>
            Puteți modifica oricând preferințele privind cookie-urile, dacă Site-ul oferă o opțiune de administrare a consimțământului.
          </p>

          <h2>10. Cum puteți dezactiva cookie-urile din browser</h2>
          <p>
            Puteți controla sau șterge cookie-urile și din setările browserului utilizat. Majoritatea browserelor permit:
          </p>
          <ul>
            <li>vizualizarea cookie-urilor stocate;</li>
            <li>ștergerea cookie-urilor existente;</li>
            <li>blocarea cookie-urilor pentru anumite site-uri;</li>
            <li>blocarea tuturor cookie-urilor;</li>
            <li>setarea unei notificări înainte de plasarea cookie-urilor.</li>
          </ul>
          <p>
            Dezactivarea anumitor cookie-uri poate afecta funcționarea Site-ului sau poate limita unele funcționalități.
          </p>

          <h2>11. Linkuri către platforme externe</h2>
          <p>
            Site-ul poate include linkuri sau butoane către platforme externe, precum WhatsApp, Google Maps, Facebook, Instagram sau alte servicii terțe.
          </p>
          <p>
            Atunci când accesați aceste platforme, se aplică politicile lor proprii de confidențialitate și cookies. GoFix nu controlează cookie-urile setate de aceste platforme externe după părăsirea Site-ului.
          </p>

          <h2>12. Date personale și cookies</h2>
          <p>
            Unele cookie-uri sau tehnologii similare pot colecta date care, direct sau indirect, pot fi considerate date personale, cum ar fi adresa IP, identificatori online, informații despre dispozitiv sau comportamentul de navigare.
          </p>
          <p>
            Pentru mai multe informații despre modul în care prelucrăm datele personale, vă rugăm să consultați Politica de Confidențialitate disponibilă pe Site.
          </p>

          <h2>13. Actualizarea Politicii de Cookies</h2>
          <p>
            Ne rezervăm dreptul de a modifica această Politică de Cookies în orice moment, pentru a reflecta modificări ale Site-ului, ale tehnologiilor utilizate sau ale cerințelor legale.
          </p>
          <p>
            Versiunea actualizată va fi publicată pe această pagină și va intra în vigoare de la data publicării.
          </p>

          <h2>14. Contact</h2>
          <p>Pentru întrebări privind utilizarea cookie-urilor pe Site, ne puteți contacta la email rzv131005@gmail.com</p>

          <div className="mt-6 not-prose flex flex-wrap gap-4 text-sm">
            <span className="text-muted-foreground">Pagini legale:</span>
            <Link to="/gdpr" className="text-primary underline">GDPR</Link>
            <Link to="/termeni" className="text-primary underline">Termeni și Condiții</Link>
          </div>

          <p className="mt-8 not-prose">
            <Link to="/" className="text-primary underline">← Înapoi la pagina principală</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
