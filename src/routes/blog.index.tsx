import { createFileRoute, Link } from "@tanstack/react-router";
import { sortedBlogPosts, formatRoDate } from "@/lib/blog-posts";

const CANONICAL = "https://vulcanizaremobila-iasi.ro/blog";

export const Route = createFileRoute("/blog/")({
  component: BlogIndexPage,
  head: () => ({
    meta: [
      { title: "Blog Vulcanizare Mobilă Iași | Sfaturi GoFix" },
      {
        name: "description",
        content:
          "Articole și sfaturi practice despre pene de cauciuc, schimb de anvelope și echilibrare roți, de la echipa GoFix Vulcanizare Mobilă Iași.",
      },
      { name: "robots", content: "index,follow" },
      { name: "author", content: "GoFix Vulcanizare Mobilă Iași" },
      { name: "publisher", content: "GoFix Vulcanizare Mobilă Iași" },
      { property: "og:title", content: "Blog Vulcanizare Mobilă Iași | Sfaturi GoFix" },
      {
        property: "og:description",
        content:
          "Sfaturi practice despre pene de cauciuc, anvelope și echilibrare roți, de la echipa GoFix Iași.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
});

function BlogIndexPage() {
  const posts = sortedBlogPosts();

  return (
    <main className="bg-background text-foreground">
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <nav aria-label="Breadcrumb" className="text-sm mb-4">
            <ol className="flex items-center gap-2 text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Acasă</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground" aria-current="page">Blog</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold md:text-4xl">Blog GoFix</h1>
          <p className="mt-3 text-muted-foreground">
            Sfaturi practice despre pene de cauciuc, anvelope și întreținerea roților, din
            experiența intervențiilor noastre din Iași.
          </p>

          <div className="mt-8 grid gap-4">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-lg border border-border bg-card p-5 transition hover:border-primary"
              >
                <p className="text-xs text-muted-foreground">{formatRoDate(post.publishedAt)}</p>
                <h2 className="mt-1 text-xl font-semibold">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="mt-3 inline-block text-sm font-semibold text-primary underline"
                >
                  Citește articolul
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm">
            <a href="/rss.xml" className="text-primary underline">Feed RSS</a>
            {" · "}
            <Link to="/" className="text-primary underline">Înapoi la pagina principală</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
