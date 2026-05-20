import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termeni")({
  component: TermeniPage,
  head: () => ({
    meta: [
      { title: "Termeni și Condiții | GoFix Vulcanizare Mobilă Iași" },
      {
        name: "description",
        content:
          "Termenii și condițiile de utilizare a site-ului GoFix Vulcanizare Mobilă Iași și a serviciului de intermediere a solicitărilor.",
      },
      { name: "robots", content: "index,follow" },
    ],
  }),
});

function TermeniPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="legal-page terms-page py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 prose prose-neutral max-w-none
          [&_h1]:text-3xl md:[&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mb-4
          [&_h2]:text-xl md:[&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3
          [&_p]:my-3 [&_p]:leading-relaxed
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-3 [&_li]:my-1
          [&_a]:text-primary [&_a]:underline hover:[&_a]:opacity-80">
          <nav aria-label="Breadcrumb" className="text-sm mb-4 not-prose">
            <ol className="flex items-center gap-2 text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Acasă</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground" aria-current="page">Termeni și Condiții</li>
            </ol>
          </nav>
          <h1>Termeni și Condiții</h1>
          <p>Ultima actualizare: 20.05.2026</p>

          <h2>1. Introducere</h2>
          <p>
            Bine ați venit pe site-ul GoFix Vulcanizare Mobilă Iași, disponibil la adresa{" "}
            <strong>gofix-vulcanizaremobila-iasi.ro</strong>.
          </p>
          <p>
            Acești Termeni și Condiții stabilesc regulile de utilizare a site-ului și modul în care funcționează serviciul de intermediere a solicitărilor pentru vulcanizare mobilă în Iași și zona metropolitană.
          </p>
          <p>
            Prin accesarea sau utilizarea site-ului, sunteți de acord cu acești Termeni și Condiții. Dacă nu sunteți de acord cu prevederile de mai jos, vă rugăm să nu utilizați site-ul.
          </p>

          <h2>2. Rolul site-ului GoFix Vulcanizare Mobilă Iași</h2>
          <p>
            GoFix Vulcanizare Mobilă Iași funcționează ca site de intermediere / generare solicitări pentru servicii de vulcanizare mobilă în Iași și zona metropolitană.
          </p>
          <p>
            Prin intermediul site-ului, utilizatorii pot transmite solicitări pentru servicii precum reparații pene, schimb anvelope, echilibrare roți, intervenții pentru autoturisme, autoutilitare, dube, camioane sau tiruri.
          </p>
          <p>
            Solicitările primite prin telefon, WhatsApp, formular de contact sau alte mijloace de comunicare pot fi transmise către unul sau mai mulți vulcanizatori independenți din Iași și zona metropolitană.
          </p>
          <p>
            GoFix nu execută direct lucrările de vulcanizare, nu deține în mod necesar autospecialele folosite pentru intervenții și nu este parte în contractul de prestări servicii încheiat între utilizator și vulcanizatorul care acceptă lucrarea.
          </p>

          <h2>3. Relația dintre utilizator și prestator</h2>
          <p>
            Serviciile tehnice de vulcanizare sunt prestate de vulcanizatori independenți. Orice intervenție efectivă, inclusiv prețul final, timpul de sosire, condițiile lucrării, plata, garanția și eventualele reclamații privind lucrarea se stabilesc direct între utilizator și prestatorul care acceptă solicitarea.
          </p>
          <p>
            Utilizatorul înțelege și acceptă că GoFix are rol de intermediar al solicitării și nu garantează că o anumită cerere va fi acceptată de un prestator.
          </p>
          <p>
            Transmiterea unei solicitări prin site, telefon sau WhatsApp nu reprezintă o confirmare automată a intervenției. Intervenția depinde de disponibilitatea prestatorilor, locație, distanță, trafic, condiții meteo, tipul vehiculului, tipul anvelopei și natura problemei semnalate.
          </p>

          <h2>4. Servicii care pot fi solicitate prin GoFix</h2>
          <p>
            Prin intermediul GoFix, utilizatorii pot solicita, cu titlu informativ și în funcție de disponibilitatea prestatorilor, servicii precum:
          </p>
          <ul>
            <li>vulcanizare mobilă în Iași și zona metropolitană;</li>
            <li>reparații pene de cauciuc;</li>
            <li>schimb anvelope vară / iarnă;</li>
            <li>echilibrare roți pe loc;</li>
            <li>intervenții pentru autoturisme;</li>
            <li>intervenții pentru autoutilitare și dube;</li>
            <li>intervenții pentru camioane și tiruri, în funcție de disponibilitatea prestatorilor.</li>
          </ul>
          <p>
            Lista de mai sus este orientativă și nu garantează disponibilitatea tuturor serviciilor în orice moment sau în orice locație.
          </p>

          <h2>5. Prețuri, plăți și estimări</h2>
          <p>
            GoFix nu stabilește în mod obligatoriu prețul final al intervențiilor și nu încasează plata de la utilizatorul final pentru lucrarea efectuată de prestator.
          </p>
          <p>
            Orice preț comunicat telefonic, prin WhatsApp sau prin intermediul site-ului are caracter estimativ, dacă nu se precizează expres altfel. Prețul final poate depinde de mai mulți factori, inclusiv:
          </p>
          <ul>
            <li>locația exactă a utilizatorului;</li>
            <li>ora solicitării;</li>
            <li>tipul vehiculului;</li>
            <li>dimensiunea roții;</li>
            <li>starea anvelopei sau a jantei;</li>
            <li>tipul intervenției necesare;</li>
            <li>condițiile de acces la vehicul;</li>
            <li>disponibilitatea prestatorului.</li>
          </ul>
          <p>
            Plata serviciului se face direct către prestatorul care efectuează intervenția, conform condițiilor stabilite între utilizator și prestator.
          </p>
          <p>
            Relațiile comerciale dintre GoFix și prestatorii parteneri sunt reglementate separat și nu afectează contractul direct dintre utilizator și prestator.
          </p>

          <h2>6. Obligațiile utilizatorului</h2>
          <p>
            Utilizatorul se obligă să furnizeze informații corecte și complete atunci când solicită o intervenție, inclusiv:
          </p>
          <ul>
            <li>locația exactă sau aproximativă;</li>
            <li>numărul de telefon corect;</li>
            <li>tipul vehiculului;</li>
            <li>descrierea problemei;</li>
            <li>informații despre accesul la vehicul;</li>
            <li>eventuale fotografii relevante, dacă sunt solicitate.</li>
          </ul>
          <p>
            Utilizatorul este responsabil pentru corectitudinea informațiilor transmise. GoFix și prestatorii independenți nu răspund pentru întârzieri, imposibilitatea intervenției sau costuri suplimentare cauzate de informații greșite, incomplete sau înșelătoare.
          </p>

          <h2>7. Limitarea răspunderii</h2>
          <p>
            GoFix are rol de intermediar și nu răspunde pentru calitatea lucrărilor executate de vulcanizatorii independenți, pentru eventuale întârzieri, daune, garanții, refuzuri de intervenție, modificări de preț sau dispute apărute între utilizator și prestator.
          </p>
          <p>GoFix nu răspunde pentru:</p>
          <ul>
            <li>calitatea serviciilor prestate de vulcanizatori independenți;</li>
            <li>daune directe sau indirecte produse vehiculului în timpul intervenției;</li>
            <li>întârzieri cauzate de trafic, vreme, distanță sau disponibilitatea prestatorilor;</li>
            <li>imposibilitatea efectuării unei reparații din cauza stării anvelopei, jantei sau vehiculului;</li>
            <li>prețurile finale comunicate de prestatori;</li>
            <li>garanțiile oferite sau refuzate de prestatori;</li>
            <li>disputele dintre utilizator și prestator.</li>
          </ul>
          <p>
            Orice reclamație privind lucrarea efectivă trebuie adresată prestatorului care a executat intervenția.
          </p>

          <h2>8. Disponibilitatea serviciului</h2>
          <p>
            GoFix poate afișa pe site informații precum „non-stop”, „intervenții rapide” sau formulări similare. Acestea descriu intenția de a facilita solicitări în intervale extinse, inclusiv în afara programului obișnuit, însă nu garantează disponibilitatea unui prestator în orice moment.
          </p>
          <p>
            Disponibilitatea efectivă depinde de prestatorii independenți, de volumul de solicitări, de locație, de condițiile de trafic, de condițiile meteo și de tipul intervenției solicitate.
          </p>

          <h2>9. Utilizarea site-ului</h2>
          <p>
            Utilizatorii se obligă să folosească site-ul doar în scopuri legale și în conformitate cu acești Termeni și Condiții.
          </p>
          <p>Este interzisă:</p>
          <ul>
            <li>utilizarea site-ului într-un mod care poate afecta funcționarea acestuia;</li>
            <li>transmiterea de solicitări false, abuzive sau înșelătoare;</li>
            <li>utilizarea de roboți, scripturi automate sau alte mijloace tehnice pentru accesarea abuzivă a site-ului;</li>
            <li>încercarea de acces neautorizat la sistemele sau datele site-ului;</li>
            <li>hărțuirea, amenințarea sau intimidarea prestatorilor, colaboratorilor sau altor persoane implicate.</li>
          </ul>

          <h2>10. Date personale</h2>
          <p>
            Pentru gestionarea solicitărilor, pot fi colectate date precum numele, numărul de telefon, locația, detalii despre vehicul, descrierea problemei și eventuale fotografii transmise de utilizator.
          </p>
          <p>
            Prin transmiterea unei solicitări, utilizatorul înțelege că datele furnizate pot fi transmise către vulcanizatori independenți, în scopul analizării, acceptării și efectuării intervenției.
          </p>
          <p>
            Mai multe informații despre modul în care sunt colectate, utilizate și protejate datele personale se regăsesc în Politica de Confidențialitate disponibilă pe site.
          </p>

          <h2>11. Linkuri către terți</h2>
          <p>
            Site-ul poate conține linkuri către platforme externe, precum Google Maps, WhatsApp, rețele sociale sau alte servicii terțe.
          </p>
          <p>
            GoFix nu controlează aceste platforme externe și nu răspunde pentru conținutul, politicile sau modul lor de funcționare. Utilizarea acestor platforme se face conform termenilor și politicilor fiecărui furnizor.
          </p>

          <h2>12. Modificarea Termenilor și Condițiilor</h2>
          <p>
            GoFix își rezervă dreptul de a modifica acești Termeni și Condiții în orice moment. Versiunea actualizată va fi publicată pe această pagină și va intra în vigoare de la data publicării, dacă nu se precizează altfel.
          </p>
          <p>
            Continuarea utilizării site-ului după actualizarea Termenilor și Condițiilor reprezintă acceptarea modificărilor.
          </p>

          <h2>13. Legea aplicabilă</h2>
          <p>Acești Termeni și Condiții sunt guvernați de legislația din România.</p>
          <p>
            Eventualele dispute care nu pot fi soluționate pe cale amiabilă vor fi soluționate de instanțele competente, conform legislației aplicabile.
          </p>

          <h2>14. Contact</h2>
          <p>
            Pentru întrebări privind acești Termeni și Condiții sau funcționarea site-ului, ne puteți contacta la:
          </p>
          <p>
            Telefon: <a href="tel:+40332630507">0332 630 507</a>
          </p>

          <p>
            Pentru sesizări privind funcționarea site-ului GoFix, ne puteți contacta la
            <a href="tel:+40332630507">0332 630 507</a>.
            Pentru litigii privind serviciile efective de vulcanizare, utilizatorul se va adresa prestatorului care a executat intervenția.
          </p>

          <p>
            Consumatorii pot accesa informații privind soluționarea alternativă a litigiilor prin ANPC:
            <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener">SAL - ANPC</a>
            sau platforma europeană de soluționare online a litigiilor:
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener">SOL - Comisia Europeană</a>.
          </p>

          <div className="mt-6 not-prose flex flex-wrap gap-4 text-sm">
            <span className="text-muted-foreground">Pagini legale:</span>
            <Link to="/gdpr" className="text-primary underline">GDPR</Link>
            <Link to="/cookies" className="text-primary underline">Politică de Cookies</Link>
          </div>

          <p className="mt-8">
            <Link to="/" className="text-primary underline">← Înapoi la pagina principală</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
