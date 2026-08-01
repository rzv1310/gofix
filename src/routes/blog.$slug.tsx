import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getBlogPost, formatRoDate } from "@/lib/blog-posts";

const BASE = "https://vulcanizaremobila-iasi.ro";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return {
      slug: post.slug,
      title: post.title,
      description: post.description,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
    };
  },
  head: ({ params, loaderData }) => {
    const url = `${BASE}/blog/${params.slug}`;
    if (!loaderData) {
      return {
        meta: [{ title: "Articol indisponibil | GoFix" }, { name: "robots", content: "noindex" }],
      };
    }
    return {
      meta: [
        { title: `${loaderData.title} | GoFix Vulcanizare Mobilă Iași` },
        { name: "description", content: loaderData.description },
        { name: "robots", content: "index,follow" },
        { name: "author", content: "GoFix Vulcanizare Mobilă Iași" },
        { name: "publisher", content: "GoFix Vulcanizare Mobilă Iași" },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": `${url}#article`,
            headline: loaderData.title,
            description: loaderData.description,
            datePublished: loaderData.publishedAt,
            dateModified: loaderData.updatedAt,
            inLanguage: "ro-RO",
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            author: { "@id": `${BASE}/#localbusiness` },
            publisher: { "@id": `${BASE}/#localbusiness` },
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = getBlogPost(slug);
  if (!post) return null;

  return (
    <main className="bg-background text-foreground">
      <article className="legal-page py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 prose prose-neutral max-w-none
          [&_h1]:text-3xl md:[&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mb-4
          [&_h2]:text-xl md:[&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3
          [&_p]:my-3 [&_p]:leading-relaxed
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-3 [&_li]:my-1
          [&_a]:text-primary [&_a]:underline hover:[&_a]:opacity-80">

          <nav aria-label="Breadcrumb" className="text-sm mb-4 not-prose">
            <ol className="flex flex-wrap items-center gap-2 text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Acasă</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground" aria-current="page">{post.title}</li>
            </ol>
          </nav>

          <h1>{post.title}</h1>
          <p className="text-sm text-muted-foreground">
            Publicat: {formatRoDate(post.publishedAt)}
          </p>

          {post.content}

          <p className="mt-8 not-prose">
            <Link to="/blog" className="text-primary underline">← Înapoi la blog</Link>
          </p>
        </div>
      </article>
    </main>
  );
}
