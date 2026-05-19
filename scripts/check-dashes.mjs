#!/usr/bin/env node
// Raport detaliat: găsește orice dash Unicode (— – ‒ ― −) în surse și/sau în HTML SSR.
//
// Utilizare:
//   node scripts/check-dashes.mjs                 # scanează doar sursele (src/ + public/)
//   node scripts/check-dashes.mjs --live          # + fetch HTML live de pe producție
//   node scripts/check-dashes.mjs --live --preview # + fetch și de pe preview
//
// Iese cu cod 1 dacă găsește orice dash Unicode, 0 dacă totul e curat.

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join as pjoin } from "node:path";

const FORBIDDEN = /[\u2010-\u2015\u2212]/g;
const DASH_NAMES = {
  "\u2010": "U+2010 HYPHEN",
  "\u2011": "U+2011 NON-BREAKING HYPHEN",
  "\u2012": "U+2012 FIGURE DASH",
  "\u2013": "U+2013 EN DASH (–)",
  "\u2014": "U+2014 EM DASH (—)",
  "\u2015": "U+2015 HORIZONTAL BAR",
  "\u2212": "U+2212 MINUS SIGN",
};

const ROOTS = ["src", "public"];
const EXCLUDE = new Set(["routeTree.gen.ts", "node_modules", ".git", "dist", ".output"]);
const TEXT_EXT = /\.(tsx?|jsx?|css|html|json|md|txt|xml|svg|mjs|cjs)$/i;

const LIVE_URLS = {
  production: [
    "https://gofix.lovable.app/",
    "https://gofix.lovable.app/vulcanizare-pacurari",
    "https://gofix.lovable.app/vulcanizare-mobila-miroslava",
  ],
  preview: [
    "https://id-preview--739199e0-7493-493d-9226-414cc44b26d5.lovable.app/",
    "https://id-preview--739199e0-7493-493d-9226-414cc44b26d5.lovable.app/vulcanizare-pacurari",
    "https://id-preview--739199e0-7493-493d-9226-414cc44b26d5.lovable.app/vulcanizare-mobila-miroslava",
  ],
};

const args = new Set(process.argv.slice(2));
const liveMode = args.has("--live");
const includePreview = args.has("--preview");

let offenders = 0;

function walk(dir, out = []) {
  let entries;
  try { entries = readdirSync(dir); } catch { return out; }
  for (const name of entries) {
    if (EXCLUDE.has(name)) continue;
    const full = pjoin(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (TEXT_EXT.test(name)) out.push(full);
  }
  return out;
}

function describeChars(s) {
  const found = new Set();
  for (const ch of s) if (FORBIDDEN.test(ch)) found.add(DASH_NAMES[ch] ?? `U+${ch.charCodeAt(0).toString(16).toUpperCase()}`);
  FORBIDDEN.lastIndex = 0;
  return [...found].join(", ");
}

function scanSources() {
  console.log("\n=== SURSE (src/ + public/) ===");
  const files = ROOTS.flatMap((r) => walk(r));
  let local = 0;
  for (const file of files) {
    const content = readFileSync(file, "utf8");
    const lines = content.split("\n");
    lines.forEach((line, i) => {
      if (FORBIDDEN.test(line)) {
        local++;
        offenders++;
        console.log(`  ${file}:${i + 1}`);
        console.log(`    char(s): ${describeChars(line)}`);
        console.log(`    text   : ${line.trim().slice(0, 160)}`);
      }
      FORBIDDEN.lastIndex = 0;
    });
  }
  console.log(local === 0 ? "  ✓ Nicio apariție în surse." : `  ✗ ${local} apariții în surse.`);
}

async function scanLive(label, urls) {
  console.log(`\n=== HTML LIVE (${label}) ===`);
  let local = 0;
  for (const url of urls) {
    let html;
    try {
      const res = await fetch(url, { redirect: "follow" });
      html = await res.text();
    } catch (err) {
      console.log(`  ${url}  -> FETCH ERROR: ${err.message}`);
      continue;
    }

    const tagRegex = /<(meta|title|link|script)\b[^>]*>([\s\S]*?<\/\1>)?/gi;
    const tagHits = [];
    let m;
    while ((m = tagRegex.exec(html))) {
      const tag = m[0];
      if (FORBIDDEN.test(tag)) {
        tagHits.push(tag);
      }
      FORBIDDEN.lastIndex = 0;
    }

    const allHits = html.match(FORBIDDEN) ?? [];
    FORBIDDEN.lastIndex = 0;

    if (allHits.length === 0) {
      console.log(`  ✓ ${url}`);
      continue;
    }

    local += allHits.length;
    offenders += allHits.length;
    console.log(`  ✗ ${url}  (${allHits.length} apariții, ${tagHits.length} în <head>)`);
    for (const tag of tagHits) {
      const attrMatch = tag.match(/(?:property|name|rel|http-equiv)\s*=\s*"([^"]+)"/i);
      const contentMatch = tag.match(/content\s*=\s*"([^"]*)"/i);
      const field = attrMatch ? attrMatch[1] : tag.match(/^<(\w+)/)?.[1] ?? "?";
      const value = contentMatch ? contentMatch[1] : tag.slice(0, 160);
      console.log(`     field: ${field}`);
      console.log(`     chars: ${describeChars(tag)}`);
      console.log(`     value: ${value.slice(0, 160)}`);
    }
  }
  console.log(local === 0 ? `  ✓ ${label}: curat.` : `  ✗ ${label}: ${local} apariții.`);
}

(async () => {
  scanSources();
  if (liveMode) {
    await scanLive("producție", LIVE_URLS.production);
    if (includePreview) await scanLive("preview", LIVE_URLS.preview);
  }
  console.log(`\nTotal apariții: ${offenders}`);
  if (offenders > 0) process.exit(1);
})();
