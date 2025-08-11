import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getAllCasos } from "../../lib/portfolio";
import type { Portfolio } from "../../types/content";
import { imageURL } from "../../lib/strapi";
import { Container } from "../../components/layout/Containers";
import SectionHeaderApple from "../../components/SectionHeaderApple";

export default function CasosIndex() {
  const [casos, setCasos] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllCasos()
      .then((data) => setCasos(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <Helmet>
        <title>Casos de Sucesso | smartOPEA</title>
        <meta name="description" content="Projetos aprovados com excelência aeronáutica. Veja nossos casos reais." />
        <link rel="canonical" href={`${window.location.origin}/casosdesucesso`} />
      </Helmet>
      <section>
        <Container className="py-12">
          <SectionHeaderApple as="h1" align="left" title="Casos de Sucesso" subtitle="Alguns projetos que aceleramos com análise e aprovação aeronáutica." />
          {loading ? (
            <div className="mt-8 text-muted-foreground">Carregando…</div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {casos.map((c) => {
                const cover = imageURL(c.cover?.data?.attributes?.url);
                const alt = c.cover?.data?.attributes?.alternativeText || c.title;
                return (
                  <article key={c.slug} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow transition-shadow">
                    {cover && (
                      <img src={cover} alt={alt} className="w-full h-40 object-cover" loading="lazy" />
                    )}
                    <div className="p-5">
                      <h2 className="text-lg font-semibold leading-snug line-clamp-2 min-h-[3.25rem]">
                        <Link to={`/casosdesucesso/${c.slug}`} className="story-link">{c.title}</Link>
                      </h2>
                      {c.location && <p className="text-sm text-muted-foreground mt-1">{c.location}</p>}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
