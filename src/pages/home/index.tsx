import HeroSmartOPEA from "../../components/HeroSmartOPEA";
import ClientesParceiros from "../../components/ClientesParceiros";
import CasosSucesso from "../../components/CasosSucesso";
import ProblemaOPEA from "../../components/ProblemaOPEA";
import Planos from "../../components/Planos";
import BlogHome from "../../components/BlogHome";
import EtapasSmartOPEA from "../../components/EtapasSmartOPEA";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Descubra se sua obra precisa de aprovação aeronáutica | smartOPEA</title>
        <meta name="description" content="Simule gratuitamente e saiba se sua obra precisa de aprovação OPEA. Evite embargos e ganhe agilidade com a smartOPEA." />
        <link rel="canonical" href={`${window.location.origin}/`} />
      </Helmet>
      <HeroSmartOPEA />
      <ProblemaOPEA />
      <EtapasSmartOPEA />
      <Planos />
      <ClientesParceiros />
      <CasosSucesso />
      <BlogHome />
    </>
  );
}
