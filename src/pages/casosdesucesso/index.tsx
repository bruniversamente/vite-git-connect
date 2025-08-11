import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCasos } from "../../lib/portfolio";
import type { Portfolio } from "../../types/content";
import { imageURL } from "../../lib/strapi";

export default function CasosIndex() {
  const [casos, setCasos] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllCasos()
      .then((data) => setCasos(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-8">Carregando…</div>;

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Casos de Sucesso</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {casos.map((c) => {
          const cover = imageURL(c.cover?.data?.attributes?.url);
          const alt = c.cover?.data?.attributes?.alternativeText || c.title;
          return (
            <article key={c.slug} className="border rounded-lg overflow-hidden bg-white">
              {cover && (
                <img src={cover} alt={alt} className="w-full h-40 object-cover" />
              )}
              <div className="p-4">
                <h2 className="text-lg font-medium leading-snug line-clamp-2 min-h-[3.25rem]">
                  <Link to={`/casosdesucesso/${c.slug}`} className="hover:underline">{c.title}</Link>
                </h2>
                {c.location && <p className="text-sm text-gray-500">{c.location}</p>}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
