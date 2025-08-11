import { ReactNode } from "react";

export default function SectionHeaderApple({
  title,
  subtitle,
  right,
  align = "center",
  as = "h2",
  className = "",
}: {
  title: string;
  subtitle?: string;
  right?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  const alignCls = align === "center" ? "text-center" : "text-left";
  const Tag = as;
  return (
    <div className={`flex items-end justify-between gap-4 ${className} ${alignCls}`}>
      <div className={`flex-1 ${align === "center" ? "mx-auto" : ""}`}>
        <Tag className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</Tag>
        {subtitle && (
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
      {right && <div className="shrink-0 hidden md:block">{right}</div>}
    </div>
  );
}
