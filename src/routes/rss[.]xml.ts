import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_BASE_URL, SITE_NAME } from "@/lib/site-pages";
import { sortedBlogPosts } from "@/lib/blog-posts";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRfc822(iso: string): string {
  return new Date(`${iso}T09:00:00Z`).toUTCString();
}

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async () => {
        const posts = sortedBlogPosts();

        const items = posts.map((post) => {
          const url = `${SITE_BASE_URL}/blog/${post.slug}`;
          return [
            `    <item>`,
            `      <title>${escapeXml(post.title)}</title>`,
            `      <link>${url}</link>`,
            `      <guid isPermaLink="true">${url}</guid>`,
            `      <description>${escapeXml(post.description)}</description>`,
            `      <pubDate>${toRfc822(post.publishedAt)}</pubDate>`,
            `    </item>`,
          ].join("\n");
        });

        const lastBuild = posts.length
          ? toRfc822(posts[0].publishedAt)
          : new Date().toUTCString();

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">`,
          `  <channel>`,
          `    <title>${escapeXml(`Blog ${SITE_NAME}`)}</title>`,
          `    <link>${SITE_BASE_URL}/blog</link>`,
          `    <description>Sfaturi practice despre pene de cauciuc, anvelope si echilibrare roti, de la echipa GoFix Iasi.</description>`,
          `    <language>ro-ro</language>`,
          `    <lastBuildDate>${lastBuild}</lastBuildDate>`,
          `    <atom:link href="${SITE_BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />`,
          ...items,
          `  </channel>`,
          `</rss>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
