import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone, MessageCircle, MapPin, Clock, Wrench, Truck, Car, Gauge,
  ShieldCheck, Zap, CheckCircle2, ChevronDown, Menu, X, Navigation,
  Settings, AlertTriangle,
} from "lucide-react";
import logo from "@/assets/gofix-logo.png";
import heroVan from "@/assets/hero-van-desktop.png";
import heroVanMobile from "@/assets/hero-van-mobile.png";
import whyUs from "@/assets/why-us.jpg";


const FAQS: Array<[string, string]> = [
  ["GoFix vine la domiciliu în Miroslava?", "Da. Putem interveni la domiciliu, la birou, în curte, în parcare sau într-o altă locație accesibilă autospecialei."],
  ["Interveniți și în Uricani, Horpaz sau Valea Adâncă?", "Da. Intervenim în Miroslava și în satele apropiate din comună, inclusiv Uricani, Horpaz, Valea Adâncă, Valea Ursului, Balciu, Brătuleni, Ciurbești, Cornești, Dancaș, Găureni, Proselnici și Vorovești, în funcție de disponibilitate."],
  ["Reparați pana direct pe loc?", "Da, dacă anvelopa poate fi reparată în siguranță. Dacă deteriorarea este prea mare sau poziția penei nu permite reparația, îți vom spune ce opțiuni ai."],
  ["Faceți schimb anvelope vară / iarnă la domiciliu?", "Da. Putem face schimb sezonier de anvelope direct la domiciliu sau la sediul firmei, în funcție de program și disponibilitate."],
  ["Faceți echilibrare roți în Miroslava?", "Da, oferim echilibrare roți pe loc cu echipamente mobile profesionale, în funcție de tipul roții și de condițiile de lucru."],
  ["Lucrați și pentru dube, camioane sau tiruri?", "Da, putem interveni și pentru autoutilitare, dube, camioane și tiruri. Pentru o estimare corectă, transmite tipul vehiculului, dimensiunea roții și locația exactă."],
  ["Cât costă o intervenție de vulcanizare mobilă în Miroslava?", "Costul depinde de locația exactă, ora solicitării, tipul vehiculului și serviciul necesar. Sună la +40 332 630 507 pentru estimare rapidă."],
  ["Pot trimite locația pe WhatsApp?", "Da. Poți trimite locația pe WhatsApp, împreună cu o poză a roții și câteva detalii despre problemă."],
];

const AREAS = ["Miroslava","Uricani","Horpaz","Valea Adâncă","Valea Ursului","Balciu","Brătuleni","Ciurbești","Cornești","Dancaș","Găureni","Proselnici","Vorovești"];



const PHONE = "0332630507";
const PHONE_DISPLAY = "0332 630 507";
const WHATSAPP = "40750291020";
const WA_LINK = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Salut! Am nevoie de vulcanizare mobilă în Miroslava. Mă puteți ajuta?")}`;

const NAV = [
  { href: "#servicii", label: "Servicii" },
  { href: "#zone", label: "Zone deservite" },
  { href: "#faq", label: "Întrebări" },
  { href: "#contact", label: "Contact" },
];

function CallBtn({ className = "", label = "Sună Non-Stop" }: { className?: string; label?: string }) {
  return (
    <a href={`tel:${PHONE}`} className={`group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-display text-base font-bold uppercase tracking-wide text-primary-foreground shadow-glow transition hover:brightness-110 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${className}`}>
      <Phone className="h-4 w-4" /> {label}
    </a>
  );
}
function WaBtn({ className = "", label = "WhatsApp" }: { className?: string; label?: string }) {
  return (
    <a href={WA_LINK} target="_blank" rel="noopener" className={`inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-5 py-3 font-display text-base font-bold uppercase tracking-wide text-whatsapp-foreground transition hover:brightness-110 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${className}`}>
      <MessageCircle className="h-4 w-4" /> {label}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 lg:py-3">
        <div className="flex items-center gap-2">
          <Link to="/" aria-label="Mergi la pagina principală GoFix" className="flex items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
            <img src={logo} alt="GoFix Vulcanizare Mobilă Iași" className="h-12 w-auto lg:h-14" />
          </Link>
          <button onClick={() => setOpen(v => !v)} aria-label="Meniu" className="rounded-md border border-border p-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent lg:hidden">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map(n => (
            <a key={n.href} href={n.href} className="rounded-sm text-sm font-semibold text-foreground/80 transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">{n.label}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <div className="text-right">
            <CallBtn />
            <p className="mt-1 text-[11px] font-medium text-muted-foreground">Disponibil 24/7 în Miroslava și Iași</p>
          </div>
          <WaBtn />
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <a href={`tel:${PHONE}`} aria-label="Sună" className="rounded-md bg-primary p-2.5 text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"><Phone className="h-5 w-5" /></a>
          <a href={WA_LINK} aria-label="WhatsApp" className="rounded-md bg-whatsapp p-2.5 text-whatsapp-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"><MessageCircle className="h-5 w-5" /></a>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {NAV.map(n => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-border py-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm">{n.label}</a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function SectionHeading({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker && <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">{kicker}</p>}
      <h2 className="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{sub}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-0 opacity-60">
        <picture>
          <source media="(min-width: 1024px)" srcSet={heroVan} />
          <img src={heroVanMobile} alt="" width={1920} height={1080} fetchPriority="high" decoding="async" className="h-full w-full object-cover" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/70 to-secondary/40" />
      </div>
      <div className="speed-lines relative mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:py-24">
        <div className="relative z-10">
          <p className="text-xs text-secondary-foreground/70"><Link to="/" className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm">Acasă</Link> / Vulcanizare mobilă Miroslava</p>
          <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-green/50 bg-brand-green/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-green" /> Non-stop în Miroslava
          </span>
          <h1 className="mt-5 font-display text-4xl leading-[0.95] text-white sm:text-5xl lg:text-7xl">
            GO<span className="text-primary">FIX</span> Vulcanizare Mobilă Miroslava
          </h1>
          <p className="mt-5 max-w-xl text-base text-secondary-foreground/80 sm:text-lg">
            Ai făcut pană în Miroslava, Uricani, Horpaz sau Valea Adâncă? Venim la tine pentru reparații pene, schimb anvelope și echilibrare roți pe loc.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {["Disponibil NON STOP", "Intervenții în toată comuna Miroslava", "Autoturisme, dube, camioane, tiruri", "Plată corectă, emitem factură"].map(t => (
              <li key={t} className="flex items-start gap-2 text-sm text-secondary-foreground/90">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-green" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row">
            <CallBtn label={`Sună acum: ${PHONE_DISPLAY}`} className="w-full text-base lg:text-lg" />
            <WaBtn label="Trimite locația pe WhatsApp" className="w-full" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://www.google.com/search?q=GoFix+Vulcanizare+Mobila+Iasi" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
              <span className="flex text-yellow-400">{'\u2605'.repeat(5)}</span>
              <span>5.0 · Recenzii Google</span>
            </a>
            <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white">
              <Navigation className="h-4 w-4 text-white" /> Venim la locația ta în Miroslava
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmergencyBar() {
  return (
    <section className="mx-2.5 mt-20 border-4 border-primary bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-10 lg:grid-cols-[1.2fr_2fr_auto]">
        <div className="flex items-center gap-3">
          <AlertTriangle className="h-8 w-8 flex-shrink-0 text-primary" />
          <h2 className="font-display text-xl uppercase leading-tight text-primary sm:text-2xl">
            AI PANĂ ÎN MIROSLAVA ACUM?
            <br />
            NU TE DEPLASA CU ROATA AVARIATĂ.
          </h2>
        </div>
        <ol className="grid gap-3 sm:grid-cols-3">
          {["Suni sau scrii pe WhatsApp", "Ne trimiți locația exactă", "Venim și rezolvăm pe loc"].map((t, i) => (
            <li key={t} className="flex items-start gap-3 rounded-md bg-primary/10 p-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-white">{i + 1}</span>
              <span className="text-sm font-semibold text-foreground">{t}</span>
            </li>
          ))}
        </ol>
        <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-5 py-4 font-display text-base font-bold uppercase tracking-wide text-secondary-foreground transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
          <Phone className="h-4 w-4" /> Solicită intervenție
        </a>
      </div>
    </section>
  );
}

function ForWhom() {
  const items = [
    { i: AlertTriangle, t: "Pană în drum spre Iași", d: "Pentru cei care fac naveta zilnic din Miroslava spre Iași, intervenim direct pe traseu." },
    { i: Car, t: "Roată dezumflată acasă", d: "Te ajutăm dacă găsești roata dezumflată în curte, în fața casei sau în parcare." },
    { i: Wrench, t: "Schimb sezonier de anvelope", d: "Schimbăm anvelopele de vară/iarnă la domiciliu, în Miroslava și satele apropiate." },
    { i: Truck, t: "Flotă, dubă sau camion", d: "Intervenim pentru autoutilitare, dube de marfă, camioane și tiruri din zona Miroslava." },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading kicker="Pentru cine" title="Când ai nevoie de vulcanizare mobilă în Miroslava" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ i: I, t, d }) => (
            <article key={t} className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-card">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"><I className="h-6 w-6" /></div>
              <h3 className="font-display text-lg">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { i: Wrench, t: "Reparații pene cauciuc", d: "Verificăm anvelopa și reparăm pana pe loc atunci când starea ei permite intervenția în siguranță." },
    { i: Car, t: "Schimb anvelope la domiciliu", d: "Schimbăm anvelopele direct la locația ta în Miroslava, fără drum până la o vulcanizare fixă." },
    { i: Gauge, t: "Echilibrare roți pe loc", d: "Echilibrare profesională cu echipamente mobile, pentru confort și stabilitate la drum." },
    { i: Settings, t: "Schimb cauciuc deteriorat", d: "Înlocuire roată sau anvelopă când pana nu mai poate fi reparată în siguranță." },
    { i: ShieldCheck, t: "Verificare TPMS", d: "Verificări pentru senzori de presiune și probleme legate de sistemul TPMS." },
    { i: Truck, t: "Vulcanizare dube și tiruri", d: "Intervenții pentru autoutilitare, camioane și tiruri în Miroslava și împrejurimi." },
  ];
  return (
    <section id="servicii" className="bg-secondary py-20 text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading kicker="Servicii" title="Servicii de vulcanizare mobilă în Miroslava" sub="Tot ce ai nevoie pentru roți și anvelope, direct la locația ta." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ i: I, t, d }) => (
            <article key={t} className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-6 transition hover:border-primary">
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-primary/20 blur-2xl transition group-hover:bg-primary/40" />
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground"><I className="h-6 w-6" /></div>
              <h3 className="font-display text-xl">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/70">{d}</p>
              <a href={WA_LINK} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm">
                Solicită intervenție →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { t: "Venim noi la tine", d: "Nu mai pierzi timp cu drumul până la service — intervenim direct în Miroslava." },
    { t: "Disponibilitate non-stop", d: "Intervenim 24/7 în Miroslava și zona metropolitană Iași." },
    { t: "Echipamente profesionale", d: "Autospeciale dotate pentru vulcanizare, schimb anvelope și echilibrare roți." },
    { t: "Pentru orice vehicul", d: "Autoturisme, autoutilitare, dube, camioane și tiruri." },
    
  ];
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img src={whyUs} alt="Autospecială GoFix în Miroslava" width={1200} height={1400} loading="lazy" className="rounded-2xl object-cover shadow-card" />
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-glow sm:block">
            <p className="font-display text-4xl leading-none">24/7</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider">Non-Stop Miroslava</p>
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">De ce GoFix</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">De ce aleg șoferii din Miroslava GoFix</h2>
          <ul className="mt-8 space-y-5">
            {items.map((it, i) => (
              <li key={it.t} className="flex gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary font-display text-secondary-foreground">{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg">{it.t}</h3>
                  <p className="text-sm text-muted-foreground">{it.d}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8"><CallBtn label="Sună GoFix acum" /></div>
        </div>
      </div>
    </section>
  );
}


function Zones() {
  return (
    <section id="zone" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading kicker="Acoperire" title="Zone deservite în comuna Miroslava" sub="Intervenim în Miroslava și satele apropiate, în funcție de disponibilitate și acces." />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-secondary p-2 text-secondary-foreground">
            <iframe
              title="Hartă comuna Miroslava"
              src="https://www.openstreetmap.org/export/embed.html?bbox=27.45%2C47.10%2C27.62%2C47.20&layer=mapnik&marker=47.1428%2C27.5028"
              className="h-80 w-full rounded-xl border-0 lg:h-full"
              loading="lazy"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl text-primary">Sate deservite</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {AREAS.map(a => (
                  <span key={a} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-semibold">{a}</span>
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Dacă nu ești sigur că ajungem la adresa ta, sună și îți confirmăm rapid disponibilitatea.</p>
            <WaBtn label="Verifică disponibilitatea în zona ta" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen(v => !v)} className="flex w-full items-center justify-between gap-4 py-5 text-left">
        <span className="font-display text-base sm:text-lg">{q}</span>
        <ChevronDown className={`h-5 w-5 flex-shrink-0 text-primary transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-5 text-sm text-muted-foreground sm:text-base">{a}</p>}
    </div>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading kicker="FAQ" title="Ce ne întreabă clienții" />
        <div className="mt-10 rounded-2xl border border-border bg-card px-6 shadow-card">
          {FAQS.map(([q, a]) => <FAQItem key={q} q={q} a={a} />)}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-checker py-20 text-secondary-foreground">
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Acționează acum</p>
        <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">Ai nevoie de vulcanizare mobilă în Miroslava <span className="text-primary">chiar acum?</span></h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-secondary-foreground/80 sm:text-lg">Nu risca să mergi cu roata avariată. GoFix vine direct la tine, non-stop, oriunde te afli în Miroslava sau împrejurimi.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <CallBtn label={`Sună acum: ${PHONE_DISPLAY}`} className="text-base lg:text-lg" />
          <WaBtn label="Trimite locația pe WhatsApp" />
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider text-secondary-foreground/80">
          <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Non-stop</span>
          <span className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> Intervenție rapidă</span>
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Miroslava + Iași</span>
          <span className="flex items-center gap-2"><Settings className="h-4 w-4 text-primary" /> Autospeciale dotate</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const servicii = ["Vulcanizare mobilă", "Reparații pene", "Schimb anvelope", "Echilibrare roți", "Verificări TPMS", "Tractări auto"];
  return (
    <footer id="contact" className="bg-black text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="font-display text-2xl text-white"><Link to="/" aria-label="Mergi la pagina principală GoFix Vulcanizare Mobilă Iași" className="hover:text-primary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">GoFix Vulcanizare Mobilă Iași</Link></h2>
            <p className="mt-3 text-sm">Serviciu non-stop de vulcanizare mobilă în Iași, Miroslava și zona metropolitană.</p>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-display text-base text-white">Contact</h3>
            <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <li><a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm"><Phone className="h-4 w-4 text-primary" />{PHONE_DISPLAY}</a></li>
              <li><a href={WA_LINK} className="flex items-center gap-2 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm"><MessageCircle className="h-4 w-4 text-primary" />0750 291 020</a></li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" />Strada Golia 3, 700259 Iași</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />Deschis non-stop</li>
            </ul>
          </div>
        </div>
        <div className="my-12 border-t border-white/10" />
        <div>
          <h3 className="font-display text-xl text-white">Servicii</h3>
          <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {servicii.map(s => (<li key={s}><a href="#servicii" className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm">{s}</a></li>))}
          </ul>
        </div>
        <div className="my-12 border-t border-white/10" />
        <div>
          <h3 className="font-display text-xl text-white">Sate deservite în Miroslava</h3>
          <ul className="mt-4 grid gap-x-4 gap-y-2 text-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {AREAS.map(l => (<li key={l}>{l}</li>))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} GoFix Vulcanizare Mobilă Iași. Toate drepturile rezervate.</p>
          <div className="flex gap-4"><Link to="/" className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm">Acasă</Link></div>
        </div>
      </div>
    </footer>
  );
}

function MobileStickyBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-2 backdrop-blur transition-transform duration-300 lg:hidden ${show ? "translate-y-0" : "translate-y-full"}`}>
      <a href={`tel:${PHONE}`} aria-label="Sună acum la GoFix" className="flex items-center justify-center gap-2 rounded-md bg-primary py-3 font-display text-sm font-bold uppercase text-primary-foreground shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
        <Phone className="h-4 w-4" /> Sună acum
      </a>
      <a href={WA_LINK} target="_blank" rel="noopener" aria-label="Scrie pe WhatsApp" className="flex items-center justify-center gap-2 rounded-md bg-whatsapp py-3 font-display text-sm font-bold uppercase text-whatsapp-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
    </div>
  );
}

function MiroslavaPage() {
  return (
    <div className="pb-20 lg:pb-0">
      <Header />
      <main>
        <Hero />
        <EmergencyBar />
        <ForWhom />
        <Services />
        <WhyUs />
        <Zones />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}

export const Route = createFileRoute("/vulcanizare-mobila-miroslava")({
  head: () => ({
    meta: [
      { title: "Vulcanizare Mobilă Miroslava Non-Stop | GoFix Iași" },
      { name: "description", content: "Ai făcut pană în Miroslava? GoFix vine la tine pentru vulcanizare mobilă, reparații pene, schimb anvelope și echilibrare roți pe loc. Intervenții non-stop în Miroslava și împrejurimi." },
      { name: "keywords", content: "vulcanizare mobila Miroslava, vulcanizare Uricani, vulcanizare Valea Adanca, vulcanizare Horpaz, schimb anvelope Miroslava, pana cauciuc Miroslava, GoFix Miroslava" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "author", content: "GoFix Vulcanizare Mobilă Iași" },
      { name: "publisher", content: "GoFix Vulcanizare Mobilă Iași" },
      { name: "language", content: "ro" },
      { httpEquiv: "content-language", content: "ro" },
      { property: "og:locale", content: "ro_RO" },
      { property: "og:site_name", content: "GoFix Vulcanizare Mobilă Iași" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Vulcanizare Mobilă Miroslava Non-Stop | GoFix Iași" },
      { property: "og:description", content: "Vulcanizare mobilă în Miroslava și satele apropiate (Uricani, Horpaz, Valea Adâncă): reparații pene, schimb anvelope și echilibrare roți la domiciliu." },
      { property: "og:url", content: "https://gofix.lovable.app/vulcanizare-mobila-miroslava" },
      { property: "og:image", content: "https://gofix.lovable.app/og-miroslava.jpg" },
      { property: "og:image:secure_url", content: "https://gofix.lovable.app/og-miroslava.jpg" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "GoFix Vulcanizare Mobilă Miroslava — autospecială GoFix, intervenții non-stop pentru pene, schimb anvelope și echilibrare roți la domiciliu." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@gofix_iasi" },
      { name: "twitter:title", content: "Vulcanizare Mobilă Miroslava 24/7 — Pene, Anvelope la Domiciliu | GoFix" },
      { name: "twitter:description", content: "Intervenim în Miroslava, Uricani, Horpaz, Valea Adâncă pentru pene, schimb anvelope și echilibrare roți. Sună 0332 630 507." },
      { name: "twitter:image", content: "https://gofix.lovable.app/og-miroslava.jpg" },
      { name: "twitter:image:alt", content: "GoFix Vulcanizare Mobilă Miroslava — autospecială GoFix, intervenții non-stop pentru pene, schimb anvelope și echilibrare roți la domiciliu." },
    ],
    links: [
      { rel: "canonical", href: "https://gofix.lovable.app/vulcanizare-mobila-miroslava" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["AutoRepair", "TireShop"],
              "@id": "https://gofix.lovable.app/#localbusiness",
              name: "GoFix Vulcanizare Mobilă Iași",
              description: "Serviciu non-stop de vulcanizare mobilă în Iași și zona metropolitană. Intervenții pentru reparații pene, schimb anvelope, echilibrare roți și servicii pentru autoturisme, autoutilitare, dube, camioane și tiruri.",
              url: "https://gofix.lovable.app/",
              logo: "https://gofix.lovable.app/gofix-logo-og.png",
              image: "https://gofix.lovable.app/gofix-logo-og.png",
              telephone: "+40332630507",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Strada Golia 3",
                addressLocality: "Iași",
                addressRegion: "Iași",
                postalCode: "700259",
                addressCountry: "RO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.1664,
                longitude: 27.5795,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "23:59",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+40332630507",
                contactType: "customer service",
                areaServed: "RO",
                availableLanguage: ["ro"],
              },
              areaServed: [
                { "@type": "City", name: "Iași" },
                {
                  "@type": "Place",
                  name: "Miroslava",
                  sameAs: "https://ro.wikipedia.org/wiki/Comuna_Miroslava%2C_Ia%C8%99i",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Uricani",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Horpaz",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Valea Adâncă",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Valea Ursului",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Balciu",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Brătuleni",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Ciurbești",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Cornești",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Dancaș",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Găureni",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Proselnici",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Vorovești",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://gofix.lovable.app/#website",
              url: "https://gofix.lovable.app/",
              name: "GoFix Vulcanizare Mobilă Iași",
              publisher: { "@id": "https://gofix.lovable.app/#localbusiness" },
              inLanguage: "ro-RO",
            },
            {
              "@type": "WebPage",
              "@id": "https://gofix.lovable.app/vulcanizare-mobila-miroslava/#webpage",
              url: "https://gofix.lovable.app/vulcanizare-mobila-miroslava/",
              name: "Vulcanizare Mobilă Miroslava Non-Stop | GoFix Iași",
              description: "Ai făcut pană în Miroslava? GoFix vine la tine pentru vulcanizare mobilă, reparații pene, schimb anvelope și echilibrare roți pe loc.",
              isPartOf: { "@id": "https://gofix.lovable.app/#website" },
              about: { "@id": "https://gofix.lovable.app/vulcanizare-mobila-miroslava/#service" },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://gofix.lovable.app/gofix-logo-og.png",
              },
              breadcrumb: { "@id": "https://gofix.lovable.app/vulcanizare-mobila-miroslava/#breadcrumb" },
              inLanguage: "ro-RO",
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gofix.lovable.app/vulcanizare-mobila-miroslava/#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Acasă",
                  item: "https://gofix.lovable.app/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Vulcanizare mobilă Miroslava",
                  item: "https://gofix.lovable.app/vulcanizare-mobila-miroslava/",
                },
              ],
            },
            {
              "@type": "Service",
              "@id": "https://gofix.lovable.app/vulcanizare-mobila-miroslava/#service",
              name: "Vulcanizare mobilă Miroslava",
              alternateName: [
                "Reparații pene Miroslava",
                "Schimb anvelope la domiciliu Miroslava",
                "Echilibrare roți Miroslava",
              ],
              serviceType: "Vulcanizare mobilă",
              description: "Serviciu de vulcanizare mobilă în Miroslava pentru reparații pene, schimb anvelope, echilibrare roți și intervenții pentru autoturisme, dube, autoutilitare, camioane și tiruri.",
              provider: { "@id": "https://gofix.lovable.app/#localbusiness" },
              areaServed: [
                {
                  "@type": "Place",
                  name: "Miroslava",
                  sameAs: "https://ro.wikipedia.org/wiki/Comuna_Miroslava%2C_Ia%C8%99i",
                  containedInPlace: { "@type": "AdministrativeArea", name: "Județul Iași" },
                },
                {
                  "@type": "Place",
                  name: "Uricani",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Horpaz",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Valea Adâncă",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
                {
                  "@type": "Place",
                  name: "Valea Ursului",
                  containedInPlace: { "@type": "Place", name: "Comuna Miroslava" },
                },
              ],
              availableChannel: {
                "@type": "ServiceChannel",
                servicePhone: {
                  "@type": "ContactPoint",
                  telephone: "+40332630507",
                  contactType: "customer service",
                  availableLanguage: ["ro"],
                },
                serviceUrl: "https://gofix.lovable.app/vulcanizare-mobila-miroslava/",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicii de vulcanizare mobilă în Miroslava",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Reparații pene cauciuc în Miroslava",
                    itemOffered: {
                      "@type": "Service",
                      name: "Reparații pene cauciuc în Miroslava",
                      serviceType: "Reparații anvelope",
                      provider: { "@id": "https://gofix.lovable.app/#localbusiness" },
                      areaServed: { "@type": "Place", name: "Miroslava" },
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Schimb anvelope la domiciliu în Miroslava",
                    itemOffered: {
                      "@type": "Service",
                      name: "Schimb anvelope la domiciliu în Miroslava",
                      serviceType: "Schimb anvelope",
                      provider: { "@id": "https://gofix.lovable.app/#localbusiness" },
                      areaServed: { "@type": "Place", name: "Miroslava" },
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Echilibrare roți în Miroslava",
                    itemOffered: {
                      "@type": "Service",
                      name: "Echilibrare roți în Miroslava",
                      serviceType: "Echilibrare roți",
                      provider: { "@id": "https://gofix.lovable.app/#localbusiness" },
                      areaServed: { "@type": "Place", name: "Miroslava" },
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Vulcanizare pentru dube, camioane și tiruri în Miroslava",
                    itemOffered: {
                      "@type": "Service",
                      name: "Vulcanizare pentru dube, camioane și tiruri în Miroslava",
                      serviceType: "Vulcanizare vehicule comerciale",
                      provider: { "@id": "https://gofix.lovable.app/#localbusiness" },
                      areaServed: { "@type": "Place", name: "Miroslava" },
                    },
                  },
                ],
              },
            },
            {
              "@type": "FAQPage",
              "@id": "https://gofix.lovable.app/vulcanizare-mobila-miroslava/#faq",
              url: "https://gofix.lovable.app/vulcanizare-mobila-miroslava/",
              name: "Întrebări frecvente despre vulcanizare mobilă în Miroslava",
              isPartOf: { "@id": "https://gofix.lovable.app/vulcanizare-mobila-miroslava/#webpage" },
              about: { "@id": "https://gofix.lovable.app/vulcanizare-mobila-miroslava/#service" },
              inLanguage: "ro-RO",
              mainEntity: FAQS.map(([q, a]) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: MiroslavaPage,
});
