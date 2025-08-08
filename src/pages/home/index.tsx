import ScrollTabs from "../../components/ScrollTabs";
import HeroSmartOPEA from "../../components/HeroSmartOPEA";
import ClientesParceiros from "../../components/ClientesParceiros";
import CasosSucesso from "../../components/CasosSucesso";
import ProblemaOPEA from "../../components/ProblemaOPEA";
import Planos from "../../components/Planos";
import BlogHome from "../../components/BlogHome";

export default function Home() {
  return (
    <>
      <HeroSmartOPEA />
      <ProblemaOPEA />
      <ScrollTabs />
      <Planos />
      <ClientesParceiros />
      <CasosSucesso />
      <BlogHome />
    </>
  );
}
