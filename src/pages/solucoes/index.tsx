import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiCheck } from "react-icons/fi";

export default function Solucoes() {
  return (
    <main>
      <Helmet>
        <title>Soluções | smartOPEA</title>
        <meta name="description" content="Nossas soluções em viabilidade e aprovação aeronáutica (OPEA). Atuação estratégica do estudo preliminar à aprovação no COMAER." />
        <link rel="canonical" href="/solucoes" />
      </Helmet>

      <section className="bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Nossas Soluções</h1>
          <p className="mt-3 text-neutral-600 max-w-2xl">Atuamos de forma estratégica desde a análise preliminar até a aprovação oficial do seu projeto.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <article className="bg-white rounded-2xl border shadow-sm p-6">
              <h2 className="text-2xl font-semibold">Estudo de Viabilidade Aeronáutica</h2>
              <p className="mt-2 text-neutral-600">Para quem está iniciando: analisamos a viabilidade técnica do seu projeto antes mesmo da aquisição do terreno ou do protocolo na prefeitura.</p>
              <hr className="my-5 border-neutral-200" />
              <h3 className="text-sm font-medium text-neutral-500 uppercase">Aplicações típicas:</h3>
              <ul className="mt-3 space-y-2 text-neutral-700">
                <li className="flex gap-2"><FiCheck className="text-green-600 mt-1" /><span>Prospecção de terrenos com segurança técnica</span></li>
                <li className="flex gap-2"><FiCheck className="text-green-600 mt-1" /><span>Estudos de viabilidade para investidores</span></li>
                <li className="flex gap-2"><FiCheck className="text-green-600 mt-1" /><span>Avaliação prévia com base no PBZPA ou PBZPANA</span></li>
                <li className="flex gap-2"><FiCheck className="text-green-600 mt-1" /><span>Evita retrabalho, embargos e gastos desnecessários</span></li>
              </ul>
              <div className="mt-6">
                <Link to="/solucoes/viabilidade" className="inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 transition-colors">Solicitar Estudo</Link>
              </div>
            </article>

            <article className="bg-white rounded-2xl border shadow-sm p-6">
              <h2 className="text-2xl font-semibold">Aprovação Aeronáutica (OPEA)</h2>
              <p className="mt-2 text-neutral-600">Para quem já possui projeto e precisa de anuência do COMAER. Cuidamos de todo o processo técnico e regulatório.</p>
              <hr className="my-5 border-neutral-200" />
              <h3 className="text-sm font-medium text-neutral-500 uppercase">Inclui:</h3>
              <ul className="mt-3 space-y-2 text-neutral-700">
                <li className="flex gap-2"><FiCheck className="text-green-600 mt-1" /><span>Pré-análise técnica com base no SysAGA</span></li>
                <li className="flex gap-2"><FiCheck className="text-green-600 mt-1" /><span>Preparação e submissão do processo</span></li>
                <li className="flex gap-2"><FiCheck className="text-green-600 mt-1" /><span>Acompanhamento no COMAER (COMAR)</span></li>
                <li className="flex gap-2"><FiCheck className="text-green-600 mt-1" /><span>Parecer técnico e documentação final</span></li>
                <li className="flex gap-2"><FiCheck className="text-green-600 mt-1" /><span>Painel online de acompanhamento</span></li>
              </ul>
              <div className="mt-6">
                <Link to="/solucoes/aprovacao" className="inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 transition-colors">Simular Aprovação</Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
