import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getAllPosts, coverUrl } from "../../lib/posts";
import type { Post } from "../../types/content";
import { Container } from "../../components/layout/Containers";
import SectionHeaderApple from "../../components/SectionHeaderApple";
import AppleLink from "../../components/AppleLink";

export default function BlogIndex() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllPosts()
      .then((data) => setPosts(data))
      .catch((err) => {
        console.error("Erro ao carregar posts:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <Helmet>
        <title>Blog smartOPEA — Artigos sobre aprovação aeronáutica</title>
        <meta name="description" content="Conteúdos para evitar rejeições e acelerar sua aprovação aeronáutica (OPEA)." />
        <link rel="canonical" href={`${window.location.origin}/blog`} />
      </Helmet>

      <section className="border-b border-border bg-background">
        <Container className="py-12">
          <SectionHeaderApple as="h1" align="left" title="Blog" subtitle="Aprenda a reduzir riscos e ganhar velocidade na aprovação aeronáutica." />
          {loading ? (
            <div className="mt-8 text-muted-foreground">Carregando…</div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {posts.map((p) => (
                <article key={p.slug} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow transition-shadow animate-fade-in">
                  {coverUrl(p) && (
                    <img src={coverUrl(p)!} alt={p.cover?.data?.attributes?.alternativeText || p.title} className="w-full h-40 object-cover" loading="lazy" />
                  )}
                  <div className="p-5">
                    <h2 className="text-lg font-semibold leading-snug line-clamp-2 min-h-[3.25rem]">
                      <Link to={`/blog/${p.slug}`} className="story-link">{p.title}</Link>
                    </h2>
                    <div className="mt-3">
                      <AppleLink to={`/blog/${p.slug}`}>Ler artigo</AppleLink>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}


