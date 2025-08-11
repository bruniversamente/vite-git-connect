import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Section from "../../../components/layout/Section";
import { Container } from "../../../components/layout/Containers";
import CampoTexto from "../../../components/CampoTexto";
import CampoSelect from "../../../components/CampoSelect";
import CampoTextarea from "../../../components/CampoTextarea";
import CampoFile from "../../../components/CampoFile";

export default function Page() {
  const [step, setStep] = useState(1);

  const next = () => setStep((s) => Math.min(4, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const StepHeader = (
    <header className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold">Cadastro de OPEA — Etapa {step}/4</h1>
      </div>
    </header>
  );

  return (
    <Section className="pt-10">
      <Helmet>
        <title>{`Cadastro OPEA — Etapa ${step}/4 | smartOPEA`}</title>
        <meta name="description" content={`Formulário de cadastro OPEA etapa ${step} de 4`} />
        <link rel="canonical" href={`https://smartopea.com/painel/formulario?etapa=${step}`} />
      </Helmet>
      <Container>
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card shadow-sm p-6 md:p-8 bg-gradient-to-b from-card to-muted animate-fade-in">
          {StepHeader}

          {step === 1 && (
            <div className="grid gap-4">
              <section className="grid gap-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">📑 Dados do Objeto</h2>
                <CampoTexto label="Nome do Empreendimento" placeholder="Ex: Residencial Aurora" />
                <CampoTexto label="Endereço completo da obra" placeholder="Ex: Rua Itupava, 1411, Curitiba" />
                <CampoTexto label="Telefone" placeholder="(41) 99999-0000" />
                <CampoTexto label="Tipologia" placeholder="Ex: Edifício Comercial" />
                <CampoTexto label="Material" placeholder="Ex: Concreto Armado" />
                <div className="grid md:grid-cols-2 gap-4">
                  <CampoTexto label="Latitude (opcional)" placeholder="-25.4284" />
                  <CampoTexto label="Longitude (opcional)" placeholder="-49.2733" />
                </div>
              </section>

              <section className="grid gap-3 mt-2">
                <h3 className="font-medium text-foreground/90">📁 Documentos</h3>
                <CampoFile label="Levantamento topográfico do terreno (.dwg)" accept=".dwg" />
                <CampoFile label="Implantação do projeto (.dwg)" accept=".dwg" />
                <CampoFile label="Elevação ou corte do projeto (.dwg)" accept=".dwg" />
                <CampoFile label="Imagens do terreno" accept="image/*" />
                <CampoFile label="Arquivos complementares" />
              </section>

              <div className="flex items-center justify-end gap-3 pt-4">
                <button onClick={next} className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 transition hover:opacity-90">
                  Próximo →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-4">
              <section className="grid gap-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">🏗️ Implantação da Obra</h2>
                <CampoSelect label="Situação da Obra" defaultValue="">
                  <option value="" disabled>Selecione…</option>
                  <option>Planejada</option>
                  <option>Em andamento</option>
                  <option>Concluída</option>
                </CampoSelect>
                <div className="grid md:grid-cols-2 gap-4">
                  <CampoTexto label="Data de Início da Obra" placeholder="dd/mm/aaaa" type="date" />
                  <CampoTexto label="Data de Término da Obra" placeholder="dd/mm/aaaa" type="date" />
                </div>
                <CampoSelect label="Equipamentos Temporários?" defaultValue="Não">
                  <option>Não</option>
                  <option>Sim</option>
                </CampoSelect>
              </section>

              <div className="flex items-center justify-between gap-3 pt-4">
                <button onClick={prev} className="text-primary hover:underline">← Voltar</button>
                <button onClick={next} className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 transition hover:opacity-90">Próximo →</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="grid gap-4">
              <section className="grid gap-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">👤 Dados do Interessado</h2>
                <div className="grid gap-2">
                  <span className="text-sm text-muted-foreground">Tipo de Documento</span>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="doc" defaultChecked />
                      <span>CPF</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="doc" />
                      <span>CNPJ</span>
                    </label>
                  </div>
                </div>

                <CampoTexto label="CPF" placeholder="000.000.000-00" />
                <CampoTexto label="Nome do Proprietário" placeholder="Ex: João da Silva" />
                <CampoTexto label="Endereço do Proprietário" placeholder="Ex: Rua Itupava, 1411, Curitiba" />
                <CampoTexto label="Telefone do Proprietário" placeholder="(41) 98888-0000" />
                <CampoTexto label="E-mail do Proprietário" placeholder="Ex: joao@email.com" type="email" />

                <CampoFile label="Cópia do Contrato Social" />
                <CampoFile label="Termo de Outorga de Poderes" />
              </section>

              <div className="flex items-center justify-between gap-3 pt-4">
                <button onClick={prev} className="text-primary hover:underline">← Voltar</button>
                <button onClick={next} className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 transition hover:opacity-90">Próximo →</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="grid gap-4">
              <section className="grid gap-2">
                <h2 className="text-lg font-semibold flex items-center gap-2">✅ Confirmação</h2>
                <p className="text-muted-foreground">
                  Ao enviar este cadastro, a equipe smartOPEA dará andamento à análise técnica. Você poderá acompanhar em {" "}
                  <Link to="/painel/meus-processos" className="text-primary hover:underline">Meus Processos</Link>.
                </p>
              </section>

              <div className="flex items-center justify-between gap-3 pt-4">
                <button onClick={prev} className="text-primary hover:underline">← Voltar</button>
                <button onClick={() => alert("Simulação de envio realizada.")} className="inline-flex items-center gap-2 rounded-lg bg-green-600 text-white px-4 py-2 transition hover:brightness-110">Enviar Cadastro</button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
