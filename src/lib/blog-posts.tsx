import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export interface BlogPost {
  slug: string;
  title: string;
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
    title: "Când schimbi anvelopele de iarnă și de vară",
    description:
      "Regula celor 7 grade, termenele legale din România și cum îți programezi schimbul de anvelope fără să pierzi timp la vulcanizare.",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-01",
    content: (
      <>
        <p>
          Momentul potrivit pentru schimbul anvelopelor nu ține de calendar, ci de temperatura
          medie zilnică. Regula practică este cea a celor 7 grade Celsius.
        </p>

        <h2>Regula celor 7 grade</h2>
        <p>
          Sub 7°C, cauciucul anvelopelor de vară se întărește și pierde aderență, chiar și pe
          asfalt uscat. Peste 7°C, anvelopele de iarnă se uzează mult mai repede și cresc distanța
          de frânare.
        </p>

        <h2>Ce spune legea în România</h2>
        <p>
          Anvelopele de iarnă sunt obligatorii atunci când drumul este acoperit cu zăpadă, gheață
          sau polei. În practică, majoritatea șoferilor din zona Iașiului fac schimbul în a doua
          jumătate a lunii noiembrie și revin la anvelope de vară în aprilie.
        </p>

        <h2>Verifică și adâncimea profilului</h2>
        <p>
          Minimul legal este 1,6 mm, dar pentru iarnă se recomandă cel puțin 4 mm. Sub această
          valoare, anvelopa nu mai evacuează eficient apa și zăpada.
        </p>

        <h2>Schimb la tine acasă sau la birou</h2>
        <p>
          În sezonul de vârf, cozile la vulcanizările clasice pot depăși o oră. Cu serviciul mobil
          GoFix, schimbul se face în parcarea de la bloc sau de la birou, fără programare cu
          săptămâni înainte.
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
