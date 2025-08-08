import { Container } from "./layout/Containers";
import { Link } from "react-router-dom";

const steps = [
  {title:"Descubra se sua obra precisa de aprovação", desc:"Faça uma simulação gratuita e receba um parecer técnico por e-mail, sem compromisso.", cta:{label:"Simulador", to:"/simulador"}},
  {title:"Escolha o plano ideal", desc:"Após a simulação gratuita, escolha o nível de suporte ideal:", list:["Self-Service","Assistido","Enterprise"]},
  {title:"Enviamos tudo ao COMAER por você", desc:"Nossa equipe revisa seus dados e protocola o processo completo junto à Aeronáutica.", cta:{label:"Saiba mais sobre os processos OPEA", to:"/solucoes/aprovacao"}},
  {title:"Acompanhe o status da sua aprovação", desc:"Visualize cada etapa do processo em tempo real dentro do painel da plataforma smartOPEA.", cta:{label:"Login", to:"/login"}},
];

export default function EtapasSmartOPEA(){
  return (
    <Container className="py-16">
      <h2 className="sr-only">Como a smartOPEA simplifica sua aprovação</h2>
      <div className="grid md:grid-cols-[220px_1fr] gap-8">
        <ol className="space-y-6 text-sm text-neutral-600">
          {["01 Simulação","02 Escolha do Plano","03 Submissão","04 Acompanhamento"].map((t,i)=>(
            <li key={t} className={`pl-4 border-l ${i===0?"border-neutral-900 text-neutral-900 font-medium":"border-neutral-200"}`}>{t}</li>
          ))}
        </ol>
        <div className="space-y-8">
          {steps.map((s,i)=>(
            <article key={i} className="relative rounded-2xl bg-blue-50/70 border px-6 py-6">
              <h3 className="text-xl font-semibold text-neutral-900">{s.title}</h3>
              <p className="text-neutral-700 mt-2">{s.desc}</p>
              {"list" in s && Array.isArray((s as any).list) && (
                <div className="mt-3 flex gap-3 flex-wrap">
                  {(s as any).list.map((l:string)=>(
                    <span key={l} className="rounded-xl border bg-white/70 px-3 py-2 text-sm shadow-sm">{l}</span>
                  ))}
                </div>
              )}
              {"cta" in s && (s as any).cta && (
                <Link to={(s as any).cta.to} className="inline-block mt-4 rounded-full bg-white text-neutral-900 border px-4 py-2 shadow">{(s as any).cta.label}</Link>
              )}
              <div className="pointer-events-none absolute right-6 bottom-2 text-6xl font-bold text-neutral-200 select-none leading-none">{String(i+1).padStart(2,"0")}</div>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}
