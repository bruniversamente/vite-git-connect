import { Helmet } from "react-helmet-async";
import Section from "../../../components/layout/Section";
import { Container } from "../../../components/layout/Containers";

export default function Page() {
  return (
    <Section className="pt-10">
      <Helmet>
        <title>Notificações | smartOPEA</title>
        <meta name="description" content="Atualizações importantes dos seus processos e mensagens da equipe técnica." />
        <link rel="canonical" href="https://smartopea.com/painel/notificacoes" />
      </Helmet>
      <Container>
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card shadow-sm p-6 md:p-8 bg-gradient-to-b from-card to-muted animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">🔔 Notificações</h1>
          <p className="mt-1 text-muted-foreground">Aqui serão exibidas atualizações importantes dos seus processos e mensagens da equipe técnica.</p>

          <div className="mt-6 text-muted-foreground italic">Nenhuma notificação no momento.</div>
        </div>
      </Container>
    </Section>
  );
}
