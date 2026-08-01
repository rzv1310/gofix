import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_BASE_URL, SITE_PAGES } from "@/lib/site-pages";
import { sortedBlogPosts } from "@/lib/blog-posts";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          ...SITE_PAGES.filter((e) => e.group !== "locations").map((e) => ({
            path: e.path,
            lastmod: e.updatedAt,
            changefreq: e.changefreq,
            priority: e.priority,
          })),
          ...sortedBlogPosts().map((p) => ({
            path: `/blog/${p.slug}`,
            lastmod: p.updatedAt,
            changefreq: "monthly",
            priority: "0.6",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${SITE_BASE_URL}${e.path}</loc>`,
            `    <lastmod>${e.lastmod}</lastmod>`,
            `    <changefreq>${e.changefreq}</changefreq>`,
            `    <priority>${e.priority}</priority>`,
            `  </url>`,
          ].join("\n"),
        );


        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
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
