// src/pages/blog/slug.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getPostBySlug, coverUrl } from "../../lib/posts";
import Loading from "../../components/Loading";
import { Container } from "../../components/layout/Containers";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    setError(null);

    getPostBySlug(slug)
      .then((data) => {
        if (!data) {
          setError("Post não encontrado.");
        } else {
          setPost(data);
        }
      })
      .catch(() => {
        setError("Erro ao carregar o post.");
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center text-red-500">
        {error}
      </div>
    );
  }

  if (!post) return null;

  const cover = coverUrl(post);

  return (
    <main>
      <Helmet>
        <title>{`${post.title} | Blog smartOPEA`}</title>
        <meta name="description" content={(post.excerpt || post.title).slice(0, 150)} />
        <link rel="canonical" href={`${window.location.origin}/blog/${post.slug || slug}`} />
      </Helmet>
      <Container className="py-10">
        <article className="max-w-3xl mx-auto">
          {cover && (
            <img
              src={cover}
              alt={post.cover?.data?.attributes?.alternativeText || post.title}
              className="mb-6 rounded-xl border border-border"
              loading="lazy"
            />
          )}

          <h1 className="text-3xl md:text-4xl font-semibold mb-3">{post.title}</h1>

          {post.postDate && (
            <p className="text-sm text-muted-foreground mb-6">
              {new Date(post.postDate).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}

          {post.content ? (
            <div
              className="prose prose-neutral prose-headings:tracking-tight max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p>Sem conteúdo.</p>
          )}
        </article>
      </Container>
    </main>
  );
}
