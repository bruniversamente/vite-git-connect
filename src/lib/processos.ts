// src/lib/processos.ts
import { fetchJSON } from "./strapi";

export type Processo = {
  id: number;
  protocolo?: string | null;
  status?: string | null;
  resumo?: string | null;
  createdAt?: string | null;
  notificacoes?: any[];
};

type StrapiList<T> = { data: any[] };

function mapProcesso(a: any): Processo {
  const attrs = a?.attributes ?? a;
  return {
    id: a?.id ?? attrs.id,
    protocolo: attrs.protocolo ?? null,
    status: attrs.status ?? null,
    resumo: attrs.resumo ?? null,
    createdAt: attrs.createdAt ?? null,
    notificacoes: attrs.notificacoes ?? [],
  };
}

export async function getAllProcessos(params: Record<string, any> = {}): Promise<Processo[]> {
  const json = await fetchJSON<StrapiList<Processo>>("processos", {
    query: { populate: "notificacoes", sort: "createdAt:desc", ...params },
  });
  return (json.data ?? []).map(mapProcesso);
}

export async function getProcessoByDocumentId(documentId: string): Promise<Processo | null> {
  const json = await fetchJSON<StrapiList<Processo>>("processos", {
    query: { "filters[documentId][$eq]": documentId, populate: "notificacoes" },
  });
  const first = json.data?.[0];
  return first ? mapProcesso(first) : null;
}
