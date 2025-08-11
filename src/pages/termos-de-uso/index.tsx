import { Helmet } from "react-helmet-async";
import { Container } from "../../components/layout/Containers";
import SectionHeaderApple from "../../components/SectionHeaderApple";

export default function TermosDeUso() {
  return (
    <main>
      <Helmet>
        <title>Termos de Uso | smartOPEA</title>
        <meta name="description" content="Condições de uso do site e da plataforma smartOPEA." />
        <link rel="canonical" href={`${window.location.origin}/termos-de-uso`} />
      </Helmet>
      <Container className="py-12">
        <SectionHeaderApple as="h1" align="left" title="Termos de Uso" />
        <article className="prose prose-neutral max-w-none mt-6">
          <p>Estes são termos de uso temporários. Substitua pelo conteúdo oficial.</p>
          <h2>Uso permitido</h2>
          <p>Condições para uso do site e da plataforma.</p>
          <h2>Limitações</h2>
          <p>Responsabilidades, garantias e limitações.</p>
        </article>
      </Container>
    </main>
  );
}

