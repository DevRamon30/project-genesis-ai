import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.div 
      className={`rounded-xl p-5 ${variants[variant]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.01, boxShadow: "0 8px 30px -12px hsl(217 91% 50% / 0.15)" }}
    >
      <div className="mb-3 flex items-center gap-2">
        {Icon && <Icon className="h-5 w-5 text-primary" />}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}
