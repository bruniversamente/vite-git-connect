import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Container } from "../../components/layout/Containers";
import SectionHeaderApple from "../../components/SectionHeaderApple";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    // TODO: integrar com sua API (ex.: Strapi /auth/local)
    alert("Login de demonstração — conecte ao seu backend.");
  };

  return (
    <main>
      <Helmet>
        <title>Entrar | smartOPEA</title>
        <meta name="description" content="Acesse o painel da smartOPEA para acompanhar seus processos." />
        <link rel="canonical" href={`${window.location.origin}/login`} />
      </Helmet>
      <Container className="py-16">
        <SectionHeaderApple as="h1" align="left" title="Entrar" />
        <form onSubmit={onSubmit} className="mt-6 max-w-md space-y-4">
          <div>
            <label className="block text-sm font-medium">E-mail</label>
            <input value={email} onChange={e => setEmail(e.target.value)} className="mt-1 w-full border border-border bg-background rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Senha</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-1 w-full border border-border bg-background rounded px-3 py-2" required />
          </div>
          <button className="px-5 py-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors w-full">Acessar</button>
        </form>
      </Container>
    </main>
  );
}

