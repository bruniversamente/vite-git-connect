import { useState } from "react";
import EnderecoAutocompleteGoogle from "../../components/EnderecoAutocompleteGoogle";
import { LoadScript } from "@react-google-maps/api";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet-async";
import { Container } from "../../components/layout/Containers";

export default function Simulador() {
  const [alturaProjeto, setAlturaProjeto] = useState<number | null>(null);
  const [coordenadas, setCoordenadas] = useState<{ lat: number; lng: number } | null>(null);
  const [endereco, setEndereco] = useState<string | null>(null);
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState("");
  const [resultado, setResultado] = useState<string | null>(null);

  const handleSimular = async () => {
    if (!coordenadas || alturaProjeto === null || !email || !endereco || !nome) {
      setResultado("Por favor, preencha todos os campos para continuar.");
      return;
    }

    await fetch(`/api/gabarito?lat=${coordenadas.lat}&lon=${coordenadas.lng}`);

    await fetch(`${import.meta.env.VITE_STRAPI_URL || "http://localhost:1337"}/api/simulacaos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: { nome, email, endereco, latitude: coordenadas.lat, longitude: coordenadas.lng, altura: alturaProjeto },
      }),
    });

    try {
      const response = await emailjs.send(
        "service_x0x3ref",
        "template_a66h6yh",
        { email, endereco, altura: alturaProjeto, nome },
        "c5627R7pxhS_kUt51"
      );

      console.log("Resposta do EmailJS:", response);
      setResultado(
        `📩 Parecer técnico enviado com sucesso para ${email}!\n\nVerifique sua caixa de entrada nos próximos minutos.`
      );
    } catch (error: any) {
      console.error("Erro ao enviar e-mail:", error?.text || error);
      setResultado("❌ Ocorreu um erro ao enviar o e-mail. Verifique os dados e tente novamente.");
    }
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={["places"]}>
      <Helmet>
        <title>Simulador de Viabilidade Aeronáutica | smartOPEA</title>
        <meta name="description" content="Descubra se seu projeto precisa de aprovação OPEA e receba um parecer por e-mail." />
        <link rel="canonical" href={`${window.location.origin}/simulador`} />
      </Helmet>
      <main className="max-w-[1280px] mx-auto px-6 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">Descubra se seu projeto precisa de aprovação</h1>
        <p className="text-lg text-foreground/80 mt-3 max-w-2xl">Faça uma simulação gratuita e receba um parecer técnico por e-mail.</p>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
          <div>
            <label className="block mb-2 font-medium text-foreground">Seu nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-2 border border-border bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="mt-4">
            <span className="block mb-2 font-medium text-foreground">Endereço completo da área do projeto</span>
            <EnderecoAutocompleteGoogle
              label="Endereço completo da área do projeto"
              onSelecionado={(info: any) => {
                setCoordenadas({ lat: info.lat, lng: info.lng });
                setEndereco(info.endereco);
              }}
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 font-medium text-foreground">Altura da estrutura (em metros)</label>
            <input
              type="number"
              value={alturaProjeto !== null ? String(alturaProjeto) : ""}
              onChange={(e) => {
                const valor = e.target.value;
                setAlturaProjeto(valor === "" ? null : parseFloat(valor));
              }}
              className="w-full px-4 py-2 border border-border bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="Ex: 38"
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 font-medium text-foreground">Seu e-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-border bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="nome@exemplo.com"
              required
            />
          </div>

          <button
            onClick={handleSimular}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 hover:bg-foreground/90 transition-colors"
          >
            Receba uma avaliação
          </button>

          <AnimatePresence>
            {resultado && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className="mt-6 p-4 border border-border bg-card rounded-xl text-sm whitespace-pre-line text-foreground"
              >
                {resultado}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </LoadScript>
  );
}
