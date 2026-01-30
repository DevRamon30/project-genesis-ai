import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
  variant?: "default" | "highlighted" | "muted";
  className?: string;
}

export function InfoCard({ title, icon: Icon, children, variant = "default", className = "" }: InfoCardProps) {
  const variants = {
    default: "bg-background border",
    highlighted: "bg-primary/5 border-primary/20 border",
    muted: "bg-muted/50 border-muted",
  };

  return (
    <div className={`rounded-xl p-5 ${variants[variant]} ${className}`}>
      <div className="mb-3 flex items-center gap-2">
        {Icon && <Icon className="h-5 w-5 text-primary" />}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  );
}