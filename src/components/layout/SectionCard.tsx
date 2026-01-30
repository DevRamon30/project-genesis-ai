import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface SectionCardProps {
  id: string;
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  children: ReactNode;
  className?: string;
}

export function SectionCard({ id, title, subtitle, icon: Icon, children, className = "" }: SectionCardProps) {
  return (
    <section id={id} className={`animate-slide-up ${className}`}>
      <div className="card-elevated p-6 md:p-8">
        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            {subtitle && (
              <p className="mt-1 text-muted-foreground">{subtitle}</p>
            )}
          </div>
        </div>
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </section>
  );
}