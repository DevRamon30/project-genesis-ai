import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.section 
      id={id} 
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="card-elevated p-4 sm:p-6 md:p-8">
        <div className="mb-4 sm:mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
          <motion.div 
            className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10"
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </motion.div>
          <div>
            <motion.h2 
              className="text-xl sm:text-2xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {title}
            </motion.h2>
            {subtitle && (
              <motion.p 
                className="mt-1 text-sm sm:text-base text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </div>
        <motion.div 
          className="space-y-4 sm:space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}
