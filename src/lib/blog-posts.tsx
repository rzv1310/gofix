import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle?: string;
  h1?: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  content: ReactNode;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ce-faci-cand-ai-pana-de-cauciuc-in-iasi",
    title: "Ce faci când ai pană de cauciuc în Iași",
    description:
      "Pașii corecți când rămâi cu pană de cauciuc în Iași: cum te oprești în siguranță, ce verifici și când ai nevoie de vulcanizare mobilă.",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-01",
    content: (
      <>
        <p>
          O pană de cauciuc apare mereu în cel mai prost moment. Vestea bună este că, dacă
          reacționezi calm și corect, riscul de a strica janta sau anvelopa scade considerabil.
        </p>

        <h2>1. Oprește-te în siguranță</h2>
        <p>
          Redu viteza treptat, fără frâne bruște, semnalizează și trage pe dreapta într-un loc
          vizibil. Pune triunghiurile reflectorizante și vesta reflectorizantă înainte de a coborî
          din mașină.
        </p>

        <h2>2. Nu continua drumul pe roata dezumflată</h2>
        <p>
          Câteva sute de metri rulați pe o anvelopă complet dezumflată pot distruge flancul
          anvelopei și pot deforma janta. O reparație simplă se transformă astfel într-o anvelopă
          nouă.
        </p>

        <h2>3. Verifică ce fel de pană este</h2>
        <ul>
          <li>cui sau șurub în banda de rulare - de obicei reparabil pe loc;</li>
          <li>tăietură pe flanc - anvelopa trebuie înlocuită;</li>
          <li>ventil defect sau jantă lovită - se rezolvă pe loc, cu echipament potrivit.</li>
        </ul>

        <h2>4. Sună la vulcanizare mobilă</h2>
        <p>
          Dacă nu ai roată de rezervă, cric sau pur și simplu nu vrei să schimbi roata în trafic,
          cea mai rapidă soluție este o intervenție mobilă. Venim la tine în Iași și în zona
          metropolitană, non-stop, cu tot echipamentul necesar.
        </p>
      </>
    ),
  },
  {
    slug: "cand-schimbi-anvelopele-de-iarna-si-de-vara",
    title: "Anvelope de Iarnă/Vară în Iași: Ce spune Legea și cât e amenda",
    metaTitle: "Anvelope de Iarnă/Vară în Iași: Ce spune Legea și cât e amenda | GoFix",
    h1: "Când schimbi anvelopele de iarnă și de vară: ce spune legea",
    description:
      "Când sunt obligatorii anvelopele de iarnă în Iași? Ce amenzi riști și cum faci schimbul de anvelope la domiciliu, rapid și fără cozi. Sună +40 332 630 507.",
    publishedAt: "2026-08-10",
    updatedAt: "2026-08-10",
    content: (
      <>
        <p>
          În fiecare toamnă și fiecare primăvară șoferii din Iași se confruntă cu aceeași întrebare: „Chiar acum trebuie să schimb anvelopele, sau mai pot aștepta?". Între vremea capricioasă din Copou, gerul din Bucium și primele burnițe din Nicolina, momentul potrivit pentru schimbul de sezon nu ține de o dată fixă din calendar, ci de ce spune legea și de ce se întâmplă efectiv pe drum. Îți explicăm exact ce prevede legislația din România, ce riști dacă întârzii și de ce tot mai mulți șoferi din Iași aleg să facă schimbul de anvelope direct acasă sau la birou, fără să mai piardă timp la coadă.
        </p>

        <h2>Ce spune legea despre anvelopele de iarnă în România</h2>
        <p>
          Contrar unei păreri foarte răspândite, în România nu există o dată calendaristică (gen „1 noiembrie") de la care anvelopele de iarnă devin obligatorii. Legislația rutieră (OUG 195/2002, modificată prin Ordonanța 5/2011) leagă obligativitatea de starea drumului, nu de sezon: anvelopele de iarnă (sau all-season omologate corespunzător) sunt obligatorii oricând circuli pe un drum public acoperit cu zăpadă, gheață sau polei - fie că este 20 noiembrie sau 15 martie.
        </p>
        <p>Practic, asta înseamnă că:</p>
        <ul>
          <li>Poți circula legal cu anvelope de vară în plin ianuarie, atât timp cât carosabilul e uscat sau curat.</li>
          <li>Dacă ninge sau îngheață pe neașteptate, iar tu ai anvelope de vară montate, ești în contravenție chiar dacă suntem în octombrie.</li>
          <li>Pentru vehiculele de transport marfă peste 3,5 tone sau de persoane cu peste 9 locuri, obligația e și mai strictă: anvelope de iarnă pe axa/axele de tracțiune sau lanțuri antiderapante omologate.</li>
        </ul>
        <p>
          Recomandarea general acceptată de specialiști este să montezi anvelopele de iarnă atunci când temperaturile medii scad constant sub 7°C, indiferent dacă a nins sau nu - la temperaturi joase, cauciucul de vară se întărește și își pierde aderența, chiar pe carosabil uscat.
        </p>

        <h2>Cât te costă dacă ești prins nepregătit</h2>
        <p>
          Dacă Poliția te oprește pe un drum acoperit de zăpadă, gheață sau polei și constată că nu ai anvelope de iarnă montate, riști o amendă din clasa a IV-a de sancțiuni - în practică, undeva între aproximativ 1.800 și 4.000 de lei, în funcție de punctajul aplicat. La aceasta se pot adăuga și alte măsuri complementare, în funcție de situația constatată de agent. Pe lângă riscul financiar, rămâne evident și cel mai important argument: pe zăpadă sau polei, distanța de frânare cu anvelope de vară poate fi de câteva ori mai mare decât cu anvelope de iarnă.
        </p>

        <h2>M+S sau 3PMSF? Ce simbol contează cu adevărat</h2>
        <p>
          Multe anvelope „all-season" au inscripționat M+S (Mud+Snow), dar acest simbol nu garantează singur performanță reală pe zăpadă - el poate fi obținut destul de ușor de producători. Simbolul de încredere este pictograma cu fulg de nea pe fundal de munte (3PMSF - Three Peak Mountain Snow Flake), care certifică faptul că anvelopa a trecut teste standardizate de aderență pe zăpadă. Dacă vrei să fii sigur că anvelopele tale sunt conforme și pentru zilele friguroase din Iași, verifică flancul cauciucului pentru acest simbol, nu doar pentru „M+S".
        </p>

        <h2>Greșeli frecvente la schimbul de sezon</h2>
        <ul>
          <li>
            <strong>Amânarea până la prima ninsoare.</strong> În acel moment, toate vulcanizările din Iași au coadă, iar tu rămâi expus riscului de amendă sau accident chiar în ziua respectivă.
          </li>
          <li>
            <strong>Ignorarea presiunii corecte după montaj.</strong> Diferența de temperatură dintre anotimpuri modifică presiunea din anvelope; verific-o mereu după schimb.
          </li>
          <li>
            <strong>Montarea anvelopelor uzate „pentru încă un sezon".</strong> Sub 1,6 mm adâncime a profilului (limita legală), aderența pe zăpadă sau ploaie scade dramatic, indiferent de tipul anvelopei.
          </li>
          <li>
            <strong>Ne-echilibrarea roților.</strong> Dacă anvelopele stau depozitate un sezon întreg, e recomandat să reechilibrezi roțile la montaj - reduce vibrațiile și uzura neuniformă.
          </li>
        </ul>

        <h2>De ce tot mai mulți șoferi din Iași aleg schimbul de anvelope la domiciliu</h2>
        <p>
          În perioadele de vârf (mijlocul lui octombrie sau primele zile de ninsoare), vulcanizările fixe din Iași devin aglomerate, iar o operațiune care durează normal 20-30 de minute se poate transforma într-o oră sau 2 ore de așteptat la coadă - timp în care tu ai putea fi la birou sau acasă.
        </p>
        <p>
          <Link to="/" className="text-primary underline hover:opacity-80">GoFix</Link> vine cu echipamentul mobil direct la tine, oriunde te-ar prinde nevoia de schimb sezonier:
        </p>
        <ul>
          <li>
            În cartierele Iașiului - Copou, Centrul istoric, Țicău, Tudor Vladimirescu, Tătărași, <Link to="/vulcanizare-pacurari" className="text-primary underline hover:opacity-80">Păcurari</Link>, C.U.G., Cantemir, Nicolina;
          </li>
          <li>
            În zona metropolitană - <Link to="/vulcanizare-mobila-miroslava" className="text-primary underline hover:opacity-80">Miroslava</Link>, Ciurea, Holboca, Lețcani, Bârnova, Aroneanu, Rediu, Valea Lupului, Ungheni, Tomești și celelalte localități deservite;
          </li>
          <li>
            La birou, dacă lucrezi în zona universitară sau în parcurile de business din Iași, fără să-ți întrerupi ziua de lucru.
          </li>
        </ul>
        <p>
          Trimiți locația pe WhatsApp, ne spui tipul mașinii, iar noi venim cu autospeciala dotată pentru schimb de anvelope și echilibrare roți pe loc - non-stop, 24/7, indiferent dacă e weekend sau miezul nopții.
        </p>

        <h2>Întrebările șoferilor</h2>
        <p>
          <strong>Când ar trebui să montez anvelopele de iarnă în Iași?</strong> Nu există o dată fixă, dar recomandarea practică este să faci schimbul când temperaturile medii scad constant sub 7°C - de obicei, în Iași, undeva spre finalul lunii octombrie sau începutul lui noiembrie.
        </p>
        <p>
          <strong>Pot circula cu anvelope all-season în loc de anvelope de iarnă?</strong> Da, dacă acestea sunt omologate corespunzător și au simbolul 3PMSF (fulg de nea pe fundal de munte), nu doar inscripția M+S.
        </p>
        <p>
          <strong>Ce se întâmplă dacă mă prinde ninsoarea cu anvelope de vară montate?</strong> Ești în contravenție dacă circuli pe drum acoperit cu zăpadă, gheață sau polei, indiferent de dată, și riști o amendă considerabilă, pe lângă riscul real de accident.
        </p>
        <p>
          <strong>Faceți schimb de anvelope și la birou, nu doar acasă?</strong> Da, <Link to="/" className="text-primary underline hover:opacity-80">GoFix</Link> vine oriunde te afli în Iași sau în zona metropolitană - acasă, la birou sau chiar pe marginea drumului.
        </p>
        <p>
          <strong>Cât durează un schimb de anvelope la domiciliu?</strong> De obicei între 20 și 40 de minute per vehicul, în funcție de tipul mașinii și de serviciile suplimentare solicitate (echilibrare inclusiv).
        </p>

        <h2>Nu aștepta prima ninsoare ca să faci schimbul de anvelope</h2>
        <p>
          Programează-ți din timp schimbul sezonier și evită cozile de la vulcanizările fixe din Iași. <Link to="/" className="text-primary underline hover:opacity-80">GoFix</Link> vine la tine, non-stop, oriunde te-ai afla în oraș sau în zona metropolitană.
        </p>
        <p>
          Sună acum: <a href="tel:+40332630507" className="text-primary underline hover:opacity-80">+40 332 630 507</a> ·{" "}
          <a
            href="https://wa.me/40750291020?text=Salut!%20Am%20nevoie%20de%20un%20schimb%20de%20anvelope%20%C3%AEn%20Ia%C8%99i."
            target="_blank"
            rel="noopener noreferrer"
            className="text-whatsapp underline hover:opacity-80"
          >
            Trimite locația pe WhatsApp
          </a>
        </p>
      </>
    ),
  },
  {
    slug: "de-ce-conteaza-echilibrarea-rotilor",
    title: "De ce contează echilibrarea roților",
    description:
      "Semnele că roțile nu sunt echilibrate, ce se strică dacă ignori vibrațiile și cât de des ar trebui făcută echilibrarea.",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-01",
    content: (
      <>
        <p>
          Echilibrarea roților corectează diferențele mici de greutate dintre anvelopă și jantă.
          Fără ea, la viteze mari apar vibrații care uzează prematur mai multe componente.
        </p>

        <h2>Semne că roțile nu sunt echilibrate</h2>
        <ul>
          <li>volanul vibrează între 80 și 120 km/h;</li>
          <li>vibrații în scaun sau în podea;</li>
          <li>uzură neuniformă, în pete, pe banda de rulare;</li>
          <li>zgomot care crește odată cu viteza.</li>
        </ul>

        <h2>Ce se strică dacă ignori problema</h2>
        <p>
          Vibrațiile constante solicită rulmenții, amortizoarele, bieletele și capetele de bară.
          Reparația acestora costă de câteva ori mai mult decât o echilibrare.
        </p>

        <h2>Cât de des se face</h2>
        <p>
          La fiecare schimb de anvelope, după orice reparație de pană și ori de câte ori ai lovit
          o groapă serioasă. Facem echilibrarea cu echipament mobil, direct la locația ta din Iași.
        </p>
      </>
    ),
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function sortedBlogPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function formatRoDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}
