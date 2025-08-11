import { Helmet } from "react-helmet-async";
import Section from "../../../components/layout/Section";
import { Container } from "../../../components/layout/Containers";
import CampoTexto from "../../../components/CampoTexto";

export default function Page() {
  return (
    <Section className="pt-10">
      <Helmet>
        <title>Perfil | smartOPEA</title>
        <meta name="description" content="Veja seus dados e altere sua senha no painel smartOPEA." />
        <link rel="canonical" href="https://smartopea.com/painel/perfil" />
      </Helmet>
      <Container>
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card shadow-sm p-6 md:p-8 bg-gradient-to-b from-card to-muted animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">👤 Perfil</h1>

          <div className="mt-2 space-y-1">
            <p><span className="font-medium">Nome:</span> <span className="text-muted-foreground">—</span></p>
            <p><span className="font-medium">E-mail:</span> <span className="text-muted-foreground">—</span></p>
          </div>

          <a className="mt-4 inline-flex items-center gap-2 text-primary hover:underline" href="#alterar-senha">🔒 Alterar Senha</a>

          <div id="alterar-senha" className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Alterar Senha</h2>
            <div className="grid gap-3">
              <CampoTexto label="Senha atual:" type="password" />
              <CampoTexto label="Nova senha:" type="password" />
              <CampoTexto label="Confirme a nova senha:" type="password" />
              <div>
                <button className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-4 py-2 hover:opacity-90 transition">Alterar Senha</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
