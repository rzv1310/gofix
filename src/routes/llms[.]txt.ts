import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_BASE_URL, SITE_NAME, SITE_PAGES } from "@/lib/site-pages";

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async () => {
        const lines: string[] = [
          `# ${SITE_NAME}`,
          ``,
          `> Serviciu non-stop de vulcanizare mobilă în Iași și zona metropolitană: reparații pene de cauciuc, schimb anvelope și echilibrare roți la domiciliu, birou sau pe marginea drumului.`,
          ``,
          `GoFix intervine 24/7 pentru autoturisme, autoutilitare, dube și camioane. Contact: 0332 630 507 sau WhatsApp +40 750 291 020.`,
          ``,
          `## Pages`,
          ``,
        ];

        for (const p of SITE_PAGES) {
          lines.push(`- [${p.title}](${SITE_BASE_URL}${p.path}): ${p.description}`);
        }
        lines.push(``);

        return new Response(lines.join("\n"), {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
