import { Container } from "./layout/Containers";
import AppleArrowButton from "./AppleArrowButton";
export default function CasosSucesso(){
  return (
    <div className="bg-neutral-50/60 border-t">
      <Container className="py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Projetos aprovados com a smartOPEA</h2>
          <a href="/casosdesucesso" className="rounded-full border px-4 py-2 bg-white shadow">Ver todos os projetos →</a>
        </div>
        <div className="relative">
          <div data-casos className="grid grid-flow-col auto-cols-[minmax(280px,1fr)] gap-4 overflow-x-auto pb-2">
            <div className="col-span-full text-neutral-500">Nenhum projeto encontrado.</div>
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
