interface AppleArrowButtonProps {
  direction?: "left" | "right";
  onClick: () => void;
  className?: string;
}
export default function AppleArrowButton({direction="right", onClick, className=""}:AppleArrowButtonProps){
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      aria-label={isLeft ? "Voltar" : "Avançar"}
      className={`group w-12 h-12 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors duration-150 ease-linear ${className}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-muted-foreground group-hover:text-foreground">
        <path d={isLeft ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
