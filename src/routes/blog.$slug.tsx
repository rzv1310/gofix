import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getBlogPost, formatRoDate } from "@/lib/blog-posts";
import { Calendar, Clock, Phone, MessageCircle, ArrowLeft } from "lucide-react";

const BASE = "https://vulcanizaremobila-iasi.ro";
const WHATSAPP_HREF =
  "https://wa.me/40750291020?text=Salut!%20Am%20nevoie%20de%20un%20schimb%20de%20anvelope%20%C3%AEn%20Ia%C8%99i.";

function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return {
      slug: post.slug,
      title: post.title,
      metaTitle: post.metaTitle,
      h1: post.h1,
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
    const title = loaderData.metaTitle || loaderData.title;
    return {
      meta: [
        { title: title },
        { name: "description", content: loaderData.description },
        { name: "robots", content: "index,follow" },
        { name: "author", content: "GoFix Vulcanizare Mobilă Iași" },
        { name: "publisher", content: "GoFix Vulcanizare Mobilă Iași" },
        { property: "og:title", content: title },
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
            headline: loaderData.h1 || loaderData.title,
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

  const displayTitle = post.h1 || post.title;
  const readingTime = estimateReadingTime(post.description);

  return (
    <main className="bg-background text-foreground">
      {/* Hero header */}
      <header className="relative overflow-hidden border-b border-border bg-muted/40">
        <div className="container mx-auto max-w-3xl px-4 py-12 md:py-20">
          <nav aria-label="Breadcrumb" className="text-sm mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Acasă
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground" aria-current="page">
                {displayTitle}
              </li>
            </ol>
          </nav>

          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
            <span className="rounded-full bg-primary/10 px-3 py-1">Sfaturi auto</span>
            <span className="rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
              Iași
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            {displayTitle}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formatRoDate(post.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {readingTime} min citire
            </span>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className="py-10 md:py-14">
        <div className="container mx-auto max-w-3xl px-4">
          <div
            className="prose prose-neutral max-w-none
              [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:leading-tight
              md:[&_h2]:text-3xl
              [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-bold
              [&_p]:my-4 [&_p]:leading-relaxed [&_p]:text-foreground/90
              [&_ul]:my-5 [&_ul]:space-y-2.5 [&_ul]:pl-0 [&_ul]:list-none
              [&_li]:relative [&_li]:pl-6 [&_li]:leading-relaxed
              [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-2 [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:bg-primary
              [&_a]:font-semibold [&_a]:text-primary [&_a]:underline-offset-2 hover:[&_a]:text-primary/80
              [&_strong]:text-foreground"
          >
            {post.content}
          </div>

          {/* CTA box */}
          <aside className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
            <h2 className="text-xl font-extrabold md:text-2xl">
              Ai nevoie de schimb de anvelope în Iași?
            </h2>
            <p className="mt-2 text-muted-foreground">
              GoFix vine la tine non-stop, 24/7, în Iași și zona metropolitană. Sună sau trimite
              locația pe WhatsApp și intervenim rapid.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+40332630507"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
              >
                <Phone className="h-4 w-4" />
                +40 332 630 507
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-sm font-bold text-whatsapp-foreground transition hover:bg-whatsapp/90"
              >
                <MessageCircle className="h-4 w-4" />
                Trimite locația pe WhatsApp
              </a>
            </div>
          </aside>

          {/* Back to blog */}
          <div className="mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
            >
              <ArrowLeft className="h-4 w-4" />
              Înapoi la blog
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
