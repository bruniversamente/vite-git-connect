import { Container } from "./layout/Containers";
import { Link } from "react-router-dom";

export default function HeroSmartOPEA(){
  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-background to-muted border-b border-border">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground">Descubra se sua obra precisa de aprovação aeronáutica</h1>
          <p className="mt-4 text-lg text-foreground/80">Simule gratuitamente e evite embargos. Análise aeronáutica simplificada, no estilo Apple: direta, clara e elegante.</p>
          <div className="mt-8">
            <div className="flex items-center gap-3 rounded-full bg-card border border-border shadow-lg px-3 py-2 md:py-3 w-full max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Evite embargos com análise aeronáutica"
                className="flex-1 px-3 py-2 outline-none text-foreground/80 bg-transparent"
                aria-label="Descreva seu projeto"
              />
              <Link to="/simulador" className="rounded-full bg-foreground hover:bg-foreground/90 text-background px-5 py-2 whitespace-nowrap">
                Simular Agora
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
