import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/gdpr")({
  component: GdprPage,
  head: () => ({
    meta: [
      { title: "Politică de Confidențialitate (GDPR) | GoFix Vulcanizare Mobilă Iași" },
      {
        name: "description",
        content:
          "Politica de confidențialitate GoFix Vulcanizare Mobilă Iași: ce date colectăm, cum sunt folosite și drepturile utilizatorilor conform GDPR.",
      },
      { name: "robots", content: "index,follow" },
    ],
  }),
});

function GdprPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="legal-page privacy-page py-12 md:py-16">
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
              <li className="text-foreground" aria-current="page">Politică de Confidențialitate</li>
            </ol>
          </nav>

          <h1>Politică de Confidențialitate</h1>
          <p>Ultima actualizare: 20.05.2026</p>

          <h2>1. Introducere</h2>
          <p>
            Această Politică de Confidențialitate explică modul în care sunt colectate, utilizate, stocate și protejate datele personale ale utilizatorilor care accesează site-ul{" "}
            <strong>gofix-vulcanizaremobila-iasi.ro</strong>, denumit în continuare „Site-ul”.
          </p>
          <p>
            Site-ul GoFix Vulcanizare Mobilă Iași funcționează ca platformă de intermediere / generare solicitări pentru servicii de vulcanizare mobilă în Iași și zona metropolitană. Prin intermediul Site-ului, utilizatorii pot transmite solicitări care pot fi redirecționate către vulcanizatori independenți.
          </p>
          <p>
            Prin utilizarea Site-ului, transmiterea unei solicitări prin telefon, WhatsApp, formular sau alte mijloace de contact, confirmați că ați citit și înțeles prezenta Politică de Confidențialitate.
          </p>

          <h2>2. Operatorul datelor personale</h2>
          <p>
            Operatorul datelor personale colectate prin intermediul acestui Site este <strong>Mexpera SRL</strong>, CUI: <strong>47359702</strong>, J<strong>2022024913403</strong>, din București, sector 3, email: <strong>rzv131005@gmail.com</strong>, telefon: <strong>0332630507</strong>.
            GoFix Vulcanizare Mobilă Iași este denumirea comercială / brandul sub care funcționează Site-ul.
          </p>

          <h2>3. Ce date personale putem colecta</h2>
          <p>În funcție de modul în care interacționați cu Site-ul, putem colecta următoarele categorii de date:</p>
          <ul>
            <li>nume și prenume, dacă sunt furnizate voluntar;</li>
            <li>număr de telefon;</li>
            <li>adresă de e-mail, dacă este furnizată;</li>
            <li>locația aproximativă sau exactă unde este necesară intervenția;</li>
            <li>detalii despre vehicul;</li>
            <li>detalii despre problema anvelopei sau roții;</li>
            <li>fotografii transmise de utilizator, de exemplu poze cu roata, anvelopa sau locația;</li>
            <li>conținutul mesajelor transmise prin formular, WhatsApp, SMS sau alte canale de comunicare;</li>
            <li>date tehnice privind utilizarea Site-ului, cum ar fi adresa IP, tipul dispozitivului, browserul, paginile accesate și ora accesării.</li>
          </ul>
          <p>Nu solicităm în mod intenționat date sensibile, cum ar fi date medicale, date privind convingeri religioase, opinii politice sau alte categorii speciale de date.</p>

          <h2>4. Cum colectăm datele</h2>
          <p>Datele personale pot fi colectate prin:</p>
          <ul>
            <li>apel telefonic către numărul afișat pe Site;</li>
            <li>mesaje transmise prin WhatsApp;</li>
            <li>formulare de contact de pe Site;</li>
            <li>mesaje transmise prin alte canale de comunicare afișate pe Site;</li>
            <li>cookie-uri și tehnologii similare;</li>
            <li>instrumente de analiză sau monitorizare a traficului, dacă sunt activate.</li>
          </ul>

          <h2>5. Scopurile prelucrării datelor</h2>
          <p>Datele personale sunt colectate și prelucrate pentru următoarele scopuri:</p>
          <ul>
            <li>preluarea solicitărilor pentru servicii de vulcanizare mobilă;</li>
            <li>contactarea utilizatorului pentru confirmarea detaliilor intervenției;</li>
            <li>transmiterea solicitării către unul sau mai mulți vulcanizatori independenți;</li>
            <li>facilitarea comunicării dintre utilizator și prestator;</li>
            <li>estimarea disponibilității, locației și tipului de intervenție necesară;</li>
            <li>gestionarea solicitărilor, reclamațiilor sau întrebărilor primite;</li>
            <li>îmbunătățirea Site-ului și a experienței utilizatorilor;</li>
            <li>măsurarea performanței campaniilor de promovare;</li>
            <li>respectarea obligațiilor legale aplicabile.</li>
          </ul>

          <h2>6. Temeiul legal al prelucrării</h2>
          <p>Prelucrăm datele personale în baza unuia sau mai multor temeiuri legale, după caz:</p>
          <ul>
            <li><strong>Consimțământul utilizatorului</strong> - atunci când transmiteți voluntar date prin formular, WhatsApp sau alte canale de comunicare.</li>
            <li><strong>Interesul legitim</strong> - pentru gestionarea solicitărilor, redirecționarea acestora către prestatori, prevenirea abuzurilor și îmbunătățirea Site-ului.</li>
            <li><strong>Executarea unor demersuri la cererea utilizatorului</strong> - atunci când solicitați să fiți contactat sau să vi se faciliteze o intervenție.</li>
            <li><strong>Obligații legale</strong> - atunci când păstrarea sau transmiterea unor date este necesară conform legislației aplicabile.</li>
          </ul>

          <h2>7. Transmiterea datelor către vulcanizatori independenți</h2>
          <p>Prin transmiterea unei solicitări, înțelegeți și acceptați că datele furnizate pot fi transmise către unul sau mai mulți vulcanizatori independenți din Iași și zona metropolitană, pentru analizarea și eventual preluarea intervenției.</p>
          <p>Datele transmise pot include numărul de telefon, locația, detalii despre vehicul, descrierea problemei și fotografii relevante, dacă acestea au fost furnizate.</p>
          <p>Prestatorii independenți primesc aceste date doar în scopul evaluării și gestionării solicitării dumneavoastră. După preluarea solicitării, relația privind intervenția tehnică, prețul, plata și garanția se stabilește direct între utilizator și prestator.</p>

          <h2>8. Alte categorii de destinatari ai datelor</h2>
          <p>Pe lângă vulcanizatorii independenți, datele pot fi accesate sau prelucrate, dacă este necesar, de:</p>
          <ul>
            <li>furnizori de hosting și mentenanță web;</li>
            <li>furnizori de servicii de e-mail, telefonie, WhatsApp sau comunicare;</li>
            <li>furnizori de servicii de analiză trafic și marketing online;</li>
            <li>consultanți contabili, fiscali sau juridici;</li>
            <li>autorități publice, dacă există o obligație legală.</li>
          </ul>
          <p>Nu vindem datele personale ale utilizatorilor către terți.</p>

          <h2>9. Durata de stocare a datelor</h2>
          <p>Datele personale sunt păstrate doar atât timp cât este necesar pentru scopurile pentru care au fost colectate.</p>
          <p>În general, solicitările transmise prin telefon, WhatsApp sau formular pot fi păstrate pentru o perioadă rezonabilă necesară gestionării cererii, verificării istoricului comunicării, soluționării eventualelor reclamații și respectării obligațiilor legale.</p>
          <p>Datele folosite în scopuri contabile, fiscale sau juridice pot fi păstrate pe durata impusă de legislația aplicabilă.</p>

          <h2>10. Cookie-uri și tehnologii similare</h2>
          <p>Site-ul poate utiliza cookie-uri și tehnologii similare pentru funcționarea corectă a paginilor, analizarea traficului, îmbunătățirea experienței utilizatorilor și măsurarea eficienței campaniilor de promovare.</p>
          <p>Cookie-urile pot fi:</p>
          <ul>
            <li><strong>necesare</strong> - pentru funcționarea tehnică a Site-ului;</li>
            <li><strong>analitice</strong> - pentru măsurarea traficului și a comportamentului utilizatorilor;</li>
            <li><strong>marketing</strong> - pentru măsurarea și optimizarea campaniilor publicitare.</li>
          </ul>
          <p>Dacă Site-ul utilizează cookie-uri non-esențiale, acestea ar trebui activate doar după acordul utilizatorului, printr-un banner de consimțământ.</p>
          <p>Detalii suplimentare pot fi prezentate într-o Politică de Cookie-uri separată.</p>

          <h2>11. Google Analytics, Google Ads, Meta Pixel și alte instrumente</h2>
          <p>Site-ul poate utiliza instrumente de analiză și marketing, precum Google Analytics, Google Ads, Meta Pixel, Google Tag Manager sau alte servicii similare.</p>
          <p>Aceste instrumente pot colecta informații despre modul în care utilizatorii interacționează cu Site-ul, paginile vizitate, dispozitivul folosit, sursa traficului și acțiunile efectuate, cum ar fi click pe telefon, click pe WhatsApp sau trimiterea unui formular.</p>
          <p>Activarea acestor tehnologii se face conform setărilor Site-ului și, acolo unde este necesar, în baza consimțământului utilizatorului.</p>

          <h2>12. Transferul datelor în afara Uniunii Europene</h2>
          <p>Anumiți furnizori de servicii utilizați de Site, cum ar fi platformele de analiză, comunicare sau marketing, pot prelucra date în afara Uniunii Europene sau Spațiului Economic European.</p>
          <p>În astfel de situații, transferul datelor se realizează conform mecanismelor legale aplicabile, cum ar fi clauze contractuale standard sau alte garanții recunoscute de legislația privind protecția datelor.</p>

          <h2>13. Securitatea datelor</h2>
          <p>Luăm măsuri rezonabile pentru protejarea datelor personale împotriva accesului neautorizat, pierderii, modificării, divulgării sau distrugerii.</p>
          <p>Totuși, nicio metodă de transmitere a datelor prin internet sau prin servicii de comunicare electronică nu este complet sigură. Utilizatorii sunt încurajați să nu transmită informații sensibile prin formulare sau mesaje nesecurizate.</p>

          <h2>14. Drepturile utilizatorilor</h2>
          <p>Conform legislației privind protecția datelor, aveți următoarele drepturi:</p>
          <ul>
            <li>dreptul de acces la datele personale;</li>
            <li>dreptul la rectificarea datelor incorecte sau incomplete;</li>
            <li>dreptul la ștergerea datelor, în condițiile legii;</li>
            <li>dreptul la restricționarea prelucrării;</li>
            <li>dreptul la opoziție față de prelucrare;</li>
            <li>dreptul la portabilitatea datelor, acolo unde este aplicabil;</li>
            <li>dreptul de a retrage consimțământul, atunci când prelucrarea se bazează pe consimțământ;</li>
            <li>dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal.</li>
          </ul>
          <p>Pentru exercitarea acestor drepturi, ne puteți contacta folosind datele din secțiunea „Contact”.</p>

          <h2>15. Datele copiilor</h2>
          <p>Site-ul nu este destinat persoanelor sub 16 ani și nu colectăm în mod intenționat date personale de la minori.</p>
          <p>Dacă aflăm că au fost colectate date de la un minor fără acordul părintelui sau tutorelui legal, vom lua măsuri pentru ștergerea acestora.</p>

          <h2>16. Linkuri către alte site-uri</h2>
          <p>Site-ul poate conține linkuri către servicii sau platforme externe, cum ar fi Google Maps, WhatsApp, Facebook, Instagram sau alte website-uri.</p>
          <p>Nu suntem responsabili pentru politicile de confidențialitate, conținutul sau practicile acestor platforme. Vă recomandăm să citiți politicile de confidențialitate ale fiecărui serviciu extern accesat.</p>

          <h2>17. Modificarea Politicii de Confidențialitate</h2>
          <p>Ne rezervăm dreptul de a modifica această Politică de Confidențialitate în orice moment. Versiunea actualizată va fi publicată pe această pagină și va intra în vigoare de la data publicării.</p>
          <p>Vă recomandăm să verificați periodic această pagină pentru a fi informat cu privire la eventualele modificări.</p>

          <h2>18. Contact</h2>
          <p>Pentru întrebări privind această Politică de Confidențialitate sau modul în care sunt prelucrate datele personale, ne puteți contacta la:</p>
          <p>
            Operator: <strong>[DENUMIRE SRL / PFA]</strong><br />
            E-mail: <strong>[EMAIL]</strong><br />
            Telefon: 0332 630 507
          </p>

          <p className="mt-8 not-prose">
            <Link to="/" className="text-primary underline">← Înapoi la pagina principală</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
