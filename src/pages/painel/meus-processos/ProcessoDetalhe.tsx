import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getProcessoByDocumentId, type Processo } from "../../../lib/processos";

export default function ProcessoDetalhe() {
  const { documentId } = useParams();
  const [processo, setProcesso] = useState<Processo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!documentId) return;
    setLoading(true);
    setError(null);
    getProcessoByDocumentId(String(documentId))
      .then(setProcesso)
      .catch((e) => setError(e.message || "Erro ao carregar"))
      .finally(() => setLoading(false));
  }, [documentId]);

  if (loading) return <div className="p-6">Carregando…</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;
  if (!processo) return <div className="p-6">Processo não encontrado.</div>;

  return (
    <section className="space-y-6 p-6">
      <Helmet>
        <title>{`Processo ${processo.protocolo || `#${processo.id}`} | smartOPEA`}</title>
        <meta name="description" content="Detalhes do processo na smartOPEA" />
        <link rel="canonical" href={`https://smartopea.com/painel/meus-processos/${processo.id}`} />
      </Helmet>
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          Processo <span className="text-muted-foreground text-base">({processo.protocolo || `#${processo.id}`})</span>
        </h1>
        <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm">
          {processo.status || "—"}
        </span>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h2 className="text-lg font-medium">Resumo</h2>
          <p className="text-foreground/80 whitespace-pre-wrap">{processo.resumo || "Sem resumo."}</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-medium">Metadados</h2>
          {processo.createdAt && (
            <div>
              <span className="text-muted-foreground">Criado em:</span> {new Date(processo.createdAt).toLocaleString("pt-BR")}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-medium">Notificações</h2>
        {Array.isArray(processo.notificacoes) && processo.notificacoes.length > 0 ? (
          <ul className="space-y-2">
            {processo.notificacoes.map((n: any, i: number) => (
              <li key={i} className="rounded-lg border border-border bg-card p-3">
                <div className="text-sm text-muted-foreground">{n?.tipo || "Notificação"}</div>
                <div className="font-medium">{n?.mensagem || JSON.stringify(n)}</div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-muted-foreground">Nenhuma notificação.</div>
        )}
      </div>
    </section>
  );
}
