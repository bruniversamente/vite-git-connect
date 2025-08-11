import { Helmet } from "react-helmet-async";
import { Container } from "../../../components/layout/Containers";
import SectionHeaderApple from "../../../components/SectionHeaderApple";

export default function SolucaoAprovacao() {
  return (
    <main>
      <Helmet>
        <title>Aprovação Aeronáutica (OPEA) | smartOPEA</title>
        <meta name="description" content="Preparação e submissão do processo, acompanhamento no COMAER e documentação final." />
        <link rel="canonical" href={`${window.location.origin}/solucoes/aprovacao`} />
      </Helmet>
      <Container className="py-12">
        <SectionHeaderApple as="h1" align="left" title="Aprovação Aeronáutica (OPEA)" subtitle="Do protocolo ao parecer final, cuidamos de toda a jornada." />
        <article className="prose prose-neutral max-w-none mt-6">
          <h2>Escopo</h2>
          <ul>
            <li>Pré-análise técnica baseada no SysAGA</li>
            <li>Montagem e submissão do processo</li>
            <li>Acompanhamento no COMAER (COMAR)</li>
            <li>Relatório técnico e documentação final</li>
          </ul>
        </article>
      </Container>
    </main>
  );
}

