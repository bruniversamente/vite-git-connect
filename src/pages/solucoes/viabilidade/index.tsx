import { Helmet } from "react-helmet-async";
import { Container } from "../../../components/layout/Containers";
import SectionHeaderApple from "../../../components/SectionHeaderApple";

export default function SolucaoViabilidade() {
  return (
    <main>
      <Helmet>
        <title>Estudo de Viabilidade Aeronáutica | smartOPEA</title>
        <meta name="description" content="Pré-análise de gabarito, consulta a bases públicas e relatórios para decisão de investimento." />
        <link rel="canonical" href={`${window.location.origin}/solucoes/viabilidade`} />
      </Helmet>
      <Container className="py-12">
        <SectionHeaderApple as="h1" align="left" title="Estudo de Viabilidade Aeronáutica" subtitle="Entenda a viabilidade antes de investir e evite retrabalho." />
        <article className="prose prose-neutral max-w-none mt-6">
          <h2>O que entregamos</h2>
          <ul>
            <li>Pré-análise com base no PBZPA/PBZPANA</li>
            <li>Consulta a bases públicas e SysAGA</li>
            <li>Relatório executivo com parecer técnico</li>
          </ul>
        </article>
      </Container>
    </main>
  );
}

