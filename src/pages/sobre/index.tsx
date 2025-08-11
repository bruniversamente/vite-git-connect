import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Container } from "../../components/layout/Containers";
import SectionHeaderApple from "../../components/SectionHeaderApple";
import CardApple from "../../components/CardApple";
import AppleLink from "../../components/AppleLink";

export default function Sobre() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeaderApple
          as="h1"
          title="Sobre a smartOPEA"
          subtitle="Plataforma para simplificar aprovações aeronáuticas (OPEA) com experiência digital de ponta."
        />
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Link to="/sobre/adoniran" className="block">
            <CardApple title="Adoniran" description="Especialista em AGA e processos OPEA.">
              <AppleLink to="/sobre/adoniran">Conhecer perfil</AppleLink>
            </CardApple>
          </Link>
          <Link to="/sobre/adachi" className="block">
            <CardApple title="Adachi" description="Engenharia e inovação.">
              <AppleLink to="/sobre/adachi">Conhecer perfil</AppleLink>
            </CardApple>
          </Link>
        </div>
      </Container>
    </section>
  );
}
