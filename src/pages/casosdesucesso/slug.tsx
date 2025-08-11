import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getCasoBySlug } from "../../lib/portfolio";
import type { Portfolio } from "../../types/content";
import { imageURL } from "../../lib/strapi";
import { Container } from "../../components/layout/Containers";

export default function CasoSlug() {
  const { slug } = useParams();
  const [caso, setCaso] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    getCasoBySlug(slug as string)
      .then((data) => setCaso(data))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="p-8">Carregando…</div>;
  if (!caso) return <div className="p-8">Caso não encontrado.</div>;

  const cover = imageURL(caso.cover?.data?.attributes?.url);
  const alt = caso.cover?.data?.attributes?.alternativeText || caso.title;

  return (
    <main>
      <Helmet>
        <title>{`${caso.title} | Casos de Sucesso smartOPEA`}</title>
        <meta name="description" content={`Projeto em ${caso.location || "local não informado"}.`} />
        <link rel="canonical" href={`${window.location.origin}/casosdesucesso/${caso.slug || slug}`} />
      </Helmet>
      <Container className="py-10">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold">{caso.title}</h1>
          {caso.location && <div className="text-sm text-muted-foreground">{caso.location}</div>}
          {cover && (
            <img src={cover} alt={alt} className="w-full mt-6 rounded-xl border border-border" loading="lazy" />
          )}
          {caso.content && (
            <div className="prose prose-neutral mt-6 whitespace-pre-wrap">
              {caso.content}
            </div>
          )}
          {caso.gallery?.data && caso.gallery.data.length > 0 && (
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {caso.gallery.data.map((g, i) => {
                const url = imageURL(g.attributes?.url);
                const gAlt = g.attributes?.alternativeText || "";
                return url ? (
                  <img key={i} src={url} alt={gAlt} className="w-full h-40 object-cover rounded" loading="lazy" />
                ) : null;
              })}
            </div>
          )}
        </article>
      </Container>
    </main>
  );
}
