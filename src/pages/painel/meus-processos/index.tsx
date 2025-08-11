import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Section from "../../../components/layout/Section";
import { Container } from "../../../components/layout/Containers";
import { getAllProcessos, type Processo } from "../../../lib/processos";

export default function Page() {
  const [itens, setItens] = useState<Processo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getAllProcessos()
      .then(setItens)
      .catch((e) => setError(e.message || "Erro ao carregar"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Section className="pt-20">
      <Helmet>
        <title>{`Meus Processos | smartOPEA`}</title>
        <meta name="description" content="Acompanhe seus processos na smartOPEA" />
        <link rel="canonical" href="https://smartopea.com/painel/meus-processos" />
      </Helmet>
      <Container>
        <h1 className="text-3xl font-semibold mb-6">Meus processos</h1>
        {loading && <div>Carregando…</div>}
        {error && <div className="text-red-600">{error}</div>}
        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {itens.length === 0 && (
              <div className="col-span-full text-muted-foreground">Nenhum processo encontrado.</div>
            )}
            {itens.map((p) => (
              <a key={p.id} href={`/painel/meus-processos/${p.id}`} className="block rounded-xl border bg-white p-4 hover:shadow transition">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Protocolo</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-xs">{p.status || "—"}</span>
                </div>
                <div className="text-lg font-medium">{p.protocolo || `#${p.id}`}</div>
                {p.resumo && <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{p.resumo}</p>}
                {p.createdAt && <div className="text-xs text-muted-foreground mt-3">Criado em {new Date(p.createdAt).toLocaleDateString("pt-BR")}</div>}
              </a>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
