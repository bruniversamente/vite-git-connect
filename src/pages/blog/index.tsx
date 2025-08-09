import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPosts, coverUrl } from "../../lib/posts";
import type { Post } from "../../types/content";

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

  if (loading) return <div className="p-8">Carregando…</div>;

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Blog</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.slug} className="border rounded-lg overflow-hidden bg-white">
            {coverUrl(p) && (
              <img src={coverUrl(p)} alt={p.cover?.data?.attributes?.alternativeText || p.title} className="w-full h-40 object-cover" />
            )}
            <div className="p-4">
              <h2 className="text-lg font-medium leading-snug line-clamp-2 min-h-[3.25rem]">
                <Link to={`/blog/${p.slug}`} className="hover:underline">{p.title}</Link>
              </h2>
              <div className="mt-3">
                <Link
                  to={`/blog/${p.slug}`}
                  className="inline-block text-sm px-3 py-1 rounded-full bg-gray-900 text-white hover:bg-gray-700"
                >
                  Ler artigo
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

