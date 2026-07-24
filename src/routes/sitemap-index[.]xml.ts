import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_BASE_URL, SITE_PAGES } from "@/lib/site-pages";

function maxLastmod(pages: typeof SITE_PAGES): string {
  return pages.map((p) => p.updatedAt).sort().pop() ?? "";
}

export const Route = createFileRoute("/sitemap-index.xml")({
  server: {
    handlers: {
      GET: async () => {
        const mainLastmod = maxLastmod(
          SITE_PAGES.filter((e) => e.group !== "locations"),
        );
        const locationsLastmod = maxLastmod(
          SITE_PAGES.filter((e) => e.group === "locations"),
        );

        const sitemaps = [
          { loc: `${SITE_BASE_URL}/sitemap.xml`, lastmod: mainLastmod },
          { loc: `${SITE_BASE_URL}/sitemap-locatii.xml`, lastmod: locationsLastmod },
        ];

        const entries = sitemaps.map((s) =>
          [
            `  <sitemap>`,
            `    <loc>${s.loc}</loc>`,
            s.lastmod ? `    <lastmod>${s.lastmod}</lastmod>` : null,
            `  </sitemap>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries,
          `</sitemapindex>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
