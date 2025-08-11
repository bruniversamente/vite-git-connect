import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Container } from "../../components/layout/Containers";
import SectionHeaderApple from "../../components/SectionHeaderApple";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // TODO: integrar com sua API / Strapi (cole aqui o endpoint).
      setSent(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <Helmet>
        <title>Fale com a smartOPEA</title>
        <meta name="description" content="Envie sua mensagem e acelere sua aprovação aeronáutica com a smartOPEA." />
        <link rel="canonical" href={`${window.location.origin}/contato`} />
      </Helmet>
      <section>
        <Container className="py-12">
          <SectionHeaderApple as="h1" align="left" title="Fale com a smartOPEA" subtitle="Responderemos rapidamente para acelerar seu projeto." />
          {!sent ? (
            <form onSubmit={onSubmit} className="mt-6 max-w-2xl space-y-4">
              <div>
                <label className="block text-sm font-medium">Nome</label>
                <input name="nome" value={form.nome} onChange={onChange} className="mt-1 w-full border border-border bg-background rounded px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium">E-mail</label>
                <input type="email" name="email" value={form.email} onChange={onChange} className="mt-1 w-full border border-border bg-background rounded px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium">Mensagem</label>
                <textarea name="mensagem" value={form.mensagem} onChange={onChange} rows={5} className="mt-1 w-full border border-border bg-background rounded px-3 py-2" required />
              </div>
              <button className="px-5 py-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors">Enviar</button>
            </form>
          ) : (
            <div className="mt-6 p-6 rounded-2xl border border-border bg-card">Recebemos sua mensagem. Em breve retornaremos!</div>
          )}
        </Container>
      </section>
    </main>
  );
}

