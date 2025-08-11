import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiCheck } from "react-icons/fi";
import { Container } from "../../components/layout/Containers";
import SectionHeaderApple from "../../components/SectionHeaderApple";

export default function Solucoes() {
  return (
    <main>
      <Helmet>
        <title>Soluções de Viabilidade e Aprovação Aeronáutica | smartOPEA</title>
        <meta name="description" content="Viabilidade aeronáutica e aprovação (OPEA) com experiência Apple-like: clara, objetiva e elegante." />
        <link rel="canonical" href={`${window.location.origin}/solucoes`} />
      </Helmet>

      <section className="bg-background border-b border-border">
        <Container className="py-16">
          <SectionHeaderApple
            as="h1"
            align="left"
            title="Nossas soluções"
            subtitle="Atuamos de forma estratégica desde a análise preliminar até a aprovação oficial do seu projeto."
          />
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow transition-shadow">
              <h2 className="text-2xl font-semibold">Estudo de Viabilidade Aeronáutica</h2>
              <p className="mt-2 text-muted-foreground">
                Para quem está iniciando: analisamos a viabilidade técnica do seu projeto antes mesmo da aquisição do terreno ou do protocolo na prefeitura.
              </p>
              <hr className="my-5 border-border" />
              <h3 className="text-sm font-medium text-muted-foreground uppercase">Aplicações típicas</h3>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-2"><FiCheck className="text-primary mt-1" /><span>Prospecção de terrenos com segurança técnica</span></li>
                <li className="flex gap-2"><FiCheck className="text-primary mt-1" /><span>Estudos de viabilidade para investidores</span></li>
                <li className="flex gap-2"><FiCheck className="text-primary mt-1" /><span>Avaliação prévia com base no PBZPA ou PBZPANA</span></li>
                <li className="flex gap-2"><FiCheck className="text-primary mt-1" /><span>Evita retrabalho, embargos e gastos desnecessários</span></li>
              </ul>
              <div className="mt-6">
                <Link to="/solucoes/viabilidade" className="inline-flex items-center justify-center rounded-full bg-foreground hover:bg-foreground/90 text-background px-5 py-2 transition-colors">Solicitar Estudo</Link>
              </div>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow transition-shadow">
              <h2 className="text-2xl font-semibold">Aprovação Aeronáutica (OPEA)</h2>
              <p className="mt-2 text-muted-foreground">
                Para quem já possui projeto e precisa de anuência do COMAER. Cuidamos de todo o processo técnico e regulatório.
              </p>
              <hr className="my-5 border-border" />
              <h3 className="text-sm font-medium text-muted-foreground uppercase">Inclui</h3>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-2"><FiCheck className="text-primary mt-1" /><span>Pré-análise técnica com base no SysAGA</span></li>
                <li className="flex gap-2"><FiCheck className="text-primary mt-1" /><span>Preparação e submissão do processo</span></li>
                <li className="flex gap-2"><FiCheck className="text-primary mt-1" /><span>Acompanhamento no COMAER (COMAR)</span></li>
                <li className="flex gap-2"><FiCheck className="text-primary mt-1" /><span>Parecer técnico e documentação final</span></li>
                <li className="flex gap-2"><FiCheck className="text-primary mt-1" /><span>Painel online de acompanhamento</span></li>
              </ul>
              <div className="mt-6">
                <Link to="/solucoes/aprovacao" className="inline-flex items-center justify-center rounded-full bg-foreground hover:bg-foreground/90 text-background px-5 py-2 transition-colors">Simular Aprovação</Link>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
