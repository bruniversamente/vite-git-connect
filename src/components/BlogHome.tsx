import { Link } from "react-router-dom";
import { Container } from "./layout/Containers";
export default function BlogHome(){
  return (
    <Container className="py-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Artigos recentes do nosso blog</h2>
        <Link to="/blog" className="rounded-full border px-4 py-2 bg-white shadow">Ver todos os artigos →</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {Array.from({length:3}).map((_,i)=>(
          <article key={i} className="rounded-xl border bg-white p-4">
            <div className="text-xs text-neutral-500">Artigo</div>
            <h3 className="font-semibold mt-1">Como evitar rejeição por altura #{i+1}</h3>
            <p className="text-sm text-neutral-600 mt-1">Dicas práticas para não errar no gabarito aeronáutico.</p>
            <Link className="text-blue-600 text-sm mt-2 inline-block" to={`/blog/post-${i+1}`}>Ler</Link>
          </article>
        ))}
      </div>
    </Container>
  );
}
