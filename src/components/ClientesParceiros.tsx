import { Container } from "./layout/Containers";

const logos = ["/logos/ccr.png","/logos/cpfl.png","/logos/cyrela.png","/logos/votorantim.png","/logos/unimed.png","/logos/mrv.png"];

export default function ClientesParceiros(){
  return (
    <div className="border-y bg-neutral-50">
      <Container className="py-16">
        <div className="text-center text-2xl font-semibold text-neutral-800 mb-8">Confiado por equipes líderes no Brasil</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((src,i)=>(<img key={i} src={src} alt="Logo de empresa parceira smartOPEA" className="h-8 object-contain mx-auto" loading="lazy" />))}
        </div>
      </Container>
    </div>
  );
}
