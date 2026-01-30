import { ReactNode, useEffect, useRef, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={id} 
      className={`section-animate ${isVisible ? 'visible' : ''} ${className}`}
    >
      <div className="card-elevated p-4 sm:p-6 md:p-8">
        <div className="mb-4 sm:mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
            {subtitle && (
              <p className="mt-1 text-sm sm:text-base text-muted-foreground">{subtitle}</p>
            )}
          </div>
        </div>
        <div className="space-y-4 sm:space-y-6">
          {children}
        </div>
      </div>
    </section>
  );
}
