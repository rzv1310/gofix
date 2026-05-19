// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
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

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [noEmDashPlugin()],
  },
});
