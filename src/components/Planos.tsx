import { Container } from "./layout/Containers";
import { Link } from "react-router-dom";
export default function Planos(){
  const planos = [
    {nome:"Self-Service", desc:"Para projetos simples. Faça tudo com nosso suporte digital.", to:"/planos/self-service"},
    {nome:"Assistido", desc:"Acompanhamento técnico por um especialista.", to:"/planos/assistido"},
    {nome:"Enterprise", desc:"Para empresas com múltiplos projetos e necessidades avançadas.", to:"/planos/enterprise"},
  ];
  return (
    <div className="bg-primary/5 border-t border-border">
      <Container className="py-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">Encontre o plano ideal para o seu projeto</h2>
        <p className="text-foreground/80 mt-2 max-w-2xl">Self-service ou suporte completo: você escolhe o melhor caminho.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {planos.map((p)=>(
            <article key={p.nome} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{p.nome}</h3>
              <p className="text-neutral-600 mt-2 text-sm">{p.desc}</p>
              <Link to={p.to} className="mt-6 inline-block rounded-full border border-border px-4 py-2 bg-background shadow hover:bg-muted">Saiba mais</Link>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
