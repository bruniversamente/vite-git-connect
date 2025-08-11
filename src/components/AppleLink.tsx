import { Link } from "react-router-dom";
import { AnchorHTMLAttributes, ReactNode } from "react";

type Props = {
  to?: string; // usa Link quando fornecido
  children: ReactNode;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function AppleLink({ to, children, className = "", ...rest }: Props) {
  const content = (
    <span className="inline-flex items-center gap-1 group">
      <span className="underline-offset-4 group-hover:underline transition-[text-decoration]">{children}</span>
      <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );

  const cls = `text-primary ${className}`;

  if (to) return (
    <Link to={to} className={cls} {...(rest as any)}>
      {content}
    </Link>
  );

  return (
    <a className={cls} {...rest}>
      {content}
    </a>
  );
}
