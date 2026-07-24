// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import type { Plugin } from "vite";

// Guard: prevent em-dash (U+2014) and other dash variants (U+2010..U+2015, U+2212)
// from sneaking into any source or public file. Only the ASCII hyphen "-" is allowed.
function noEmDashPlugin(): Plugin {
  const FORBIDDEN = /[\u2010-\u2015\u2212]/g;
  const ROOTS = ["src", "public"];
  const EXCLUDE_FILES = new Set(["routeTree.gen.ts"]);
  const TEXT_EXT = /\.(tsx?|jsx?|css|html|json|md|txt|xml|svg)$/i;

  function walk(dir: string, out: string[] = []): string[] {
    let entries: string[];
    try { entries = readdirSync(dir); } catch { return out; }
    for (const name of entries) {
      if (EXCLUDE_FILES.has(name)) continue;
      const full = join(dir, name);
      const st = statSync(full);
      if (st.isDirectory()) walk(full, out);
      else if (TEXT_EXT.test(name)) out.push(full);
    }
    return out;
  }

  return {
    name: "gofix:no-em-dash",
    enforce: "pre",
    buildStart() {
      const offenders: string[] = [];
      for (const root of ROOTS) {
        for (const file of walk(root)) {
          const content = readFileSync(file, "utf8");
          const lines = content.split("\n");
          lines.forEach((line, i) => {
            if (FORBIDDEN.test(line)) {
              offenders.push(`  ${file}:${i + 1}  ${line.trim().slice(0, 120)}`);
            }
            FORBIDDEN.lastIndex = 0;
          });
        }
      }
      if (offenders.length) {
        this.error(
          `Forbidden dash character detected (use ASCII "-" only).\n` +
          `Replace any of: — – ‒ ― − with "-".\n` +
          offenders.join("\n")
        );
      }
    },
  };
}

// The Netlify plugin only needs to run during `vite build`, where it bundles the
// server entry into a Netlify function. Running it during `vite dev` would load
// Netlify's full platform emulation middleware, which can 404 requests behind the
// Lovable editor preview proxy. Dev uses TanStack Start's native handler instead.
const isBuild = process.argv.includes("build");
// Netlify sets NETLIFY=true during builds. Disable Lovable's Nitro/Cloudflare
// adapter there so TanStack Start emits dist/client for Netlify to publish.
// Other environments keep Lovable's default deployment target.
const isNetlifyBuild = process.env.NETLIFY === "true";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// At build, the Netlify plugin bundles that entry into a Netlify serverless function.
export default defineConfig({
  ...(isNetlifyBuild ? { nitro: false } : {}),
  tanstackStart: {
    server: { entry: "server" },
  },
  // Appended after the preset's internal tanstackStart() plugin (required ordering).
  plugins: isBuild ? [netlify()] : [],
  vite: {
    plugins: [noEmDashPlugin()],
    // The preset defaults local dev to port 8080, which collides with Docker
    // Desktop on this machine (127.0.0.1:8080). Use 5173 instead. The Lovable
    // sandbox ignores this and forces 8080 - fine, it has no such conflict.
    server: { port: 5173 },
  },
});
