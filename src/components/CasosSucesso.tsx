import { useEffect, useState } from "react";
import { Container } from "./layout/Containers";
import AppleArrowButton from "./AppleArrowButton";
import { getAllCasos } from "../lib/portfolio";
import type { Portfolio } from "../types/content";
import { imageURL } from "../lib/strapi";

export default function CasosSucesso(){
  const [itens, setItens] = useState<Portfolio[]>([]);

  useEffect(()=>{
    getAllCasos().then((d)=> setItens(d.slice(0,8))).catch(()=> setItens([]));
  },[]);

  return (
    <div className="bg-muted border-t border-border">
      <Container className="py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">Projetos aprovados com a smartOPEA</h2>
          <a href="/casosdesucesso" className="rounded-full border px-4 py-2 bg-white shadow">Ver todos os projetos →</a>
        </div>
        <div className="relative">
          <div data-casos className="grid grid-flow-col auto-cols-[minmax(280px,1fr)] gap-4 overflow-x-auto pb-2">
            {itens.length === 0 && (
              <div className="col-span-full text-muted-foreground">Nenhum projeto encontrado.</div>
            )}
            {itens.map((c)=>{
              const cover = imageURL(c.cover?.data?.attributes?.url);
              const alt = c.cover?.data?.attributes?.alternativeText || c.title;
              return (
                <a key={c.slug} href={`/casosdesucesso/${c.slug}`} className="block rounded-xl border bg-white overflow-hidden">
                  {cover && <img src={cover} alt={alt} className="w-full h-40 object-cover" />}
                  <div className="p-4">
                    <div className="font-medium leading-snug line-clamp-2 min-h-[3rem]">{c.title}</div>
                    {c.location && <div className="text-sm text-muted-foreground mt-1">{c.location}</div>}
                  </div>
                </a>
              );
            })}
          </div>
          <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2">
            <AppleArrowButton direction="left" onClick={()=>{ const scroller = document.querySelector('[data-casos]') as HTMLElement | null; scroller?.scrollBy({left:-300, behavior:"smooth"}); }} />
          </div>
          <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2">
            <AppleArrowButton direction="right" onClick={()=>{ const scroller = document.querySelector('[data-casos]') as HTMLElement | null; scroller?.scrollBy({left:300, behavior:"smooth"}); }} />
          </div>
        </div>
      </Container>
    </div>
  );
}
