import { Helmet } from "react-helmet-async";
import { Container } from "../../components/layout/Containers";
import SectionHeaderApple from "../../components/SectionHeaderApple";

export default function PoliticaDePrivacidade() {
  return (
    <main>
      <Helmet>
        <title>Política de Privacidade | smartOPEA</title>
        <meta name="description" content="Como tratamos seus dados pessoais e garantimos a privacidade na smartOPEA." />
        <link rel="canonical" href={`${window.location.origin}/politica-de-privacidade`} />
      </Helmet>
      <Container className="py-12">
        <SectionHeaderApple as="h1" align="left" title="Política de Privacidade" />
        <article className="prose prose-neutral max-w-none mt-6">
          <p>Esta é uma versão base para a Política de Privacidade. Substitua pelo conteúdo oficial.</p>
          <h2>Coleta de dados</h2>
          <p>Descreva aqui quais dados são coletados e para que fins.</p>
          <h2>Direitos do titular</h2>
          <p>Explique como o usuário pode solicitar acesso, correção ou exclusão.</p>
          <h2>Contato do DPO</h2>
          <p>Informe e-mail ou canal oficial.</p>
        </article>
      </Container>
    </main>
  );
}

