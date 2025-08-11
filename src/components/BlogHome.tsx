import { Link } from "react-router-dom";
import { Container } from "./layout/Containers";
import SectionHeaderApple from "./SectionHeaderApple";
import AppleLink from "./AppleLink";

export default function BlogHome(){
  return (
    <Container className="py-16">
      <SectionHeaderApple
        title="Artigos recentes do nosso blog"
        subtitle="Conteúdos para evitar rejeições e acelerar a aprovação aeronáutica."
        right={<Link to="/blog" className="hidden md:inline-block rounded-full border px-4 py-2 bg-card">Ver todos</Link>}
      />
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {Array.from({length:3}).map((_,i)=> (
          <article key={i} className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow transition-shadow">
            <div className="text-xs text-muted-foreground">Artigo</div>
            <h3 className="font-semibold mt-1 text-lg">Como evitar rejeição por altura #{i+1}</h3>
            <p className="text-sm text-muted-foreground mt-1">Dicas práticas para não errar no gabarito aeronáutico.</p>
            <div className="mt-3">
              <AppleLink to={`/blog/post-${i+1}`}>Ler artigo</AppleLink>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
