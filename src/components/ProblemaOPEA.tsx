import { Container } from "./layout/Containers";
import { Link } from "react-router-dom";

export default function ProblemaOPEA(){
  const bullets = [
    "Antenas, gruas ou caixas d’água elevadas?",
    "Torres ou estruturas provisórias acima de 30 metros?",
    "Obras em regiões próximas de aeroportos ou helipontos?",
  ];
  return (
    <div className="bg-blue-50/70 border-y">
      <Container className="py-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 max-w-3xl">Sua obra pode precisar de aprovação do COMAER</h2>
        <p className="text-neutral-700 mt-4 max-w-3xl">Projetos com mais de 30 metros ou próximos de aeródromos exigem, por lei, análise técnica da Aeronáutica. Muitos profissionais descobrem isso apenas após notificações ou embargos.</p>
        <ul className="grid gap-2 list-disc pl-6 text-neutral-700 mt-6">
          {bullets.map((b)=>(<li key={b}>{b}</li>))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/simulador" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-2">Minha obra precisa de aprovação?</Link>
          <Link to="/solucoes/aprovacao" className="rounded-full border px-5 py-2">O que é OPEA?</Link>
        </div>
      </Container>
    </div>
  );
}
