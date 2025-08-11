import { Container } from "./layout/Containers";
import ButtonApple1 from "./ButtonApple1";
import { Link } from "react-router-dom";

export default function HeroSmartOPEA(){
  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-background to-muted border-b border-border">
      <Container>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 max-w-4xl">Descubra se sua obra precisa de aprovação aeronáutica</h1>
        <div className="mt-8">
          <div className="flex items-center gap-3 rounded-full bg-card border border-border shadow-lg px-3 py-2 md:py-3 w-full max-w-2xl">
            <input
              type="text"
              placeholder="Evite embargos com análise aeronáutica"
              className="flex-1 px-3 py-2 outline-none text-foreground/80"
              aria-label="Descreva seu projeto"
            />
            <Link to="/simulador" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 whitespace-nowrap">
              Simular Agora
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
