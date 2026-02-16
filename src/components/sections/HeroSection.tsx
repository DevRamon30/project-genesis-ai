import { Brain, Sparkles, TrendingUp, FileText, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import heroVisual from "@/assets/hero-visual.jpg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {value}{suffix}
    </motion.span>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden hero-gradient py-12 sm:py-16 md:py-24">
      {/* Background image */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          backgroundImage: `url(${heroVisual})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(222,47%,11%)]/80 to-[hsl(222,47%,11%)]" />

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container relative px-4 sm:px-6">
        <motion.div 
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            variants={scaleIn}
            className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 sm:px-4 py-1 sm:py-1.5 backdrop-blur-sm"
          >
            <Brain className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Projeto de Gestão de Produtos</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={fadeUp}
            className="mb-3 sm:mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            InsightAI Pro
          </motion.h1>
          <motion.p variants={fadeUp} className="mb-2 text-lg text-blue-200 sm:text-xl md:text-2xl">
            Do Problema ao Produto
          </motion.p>
          <motion.p variants={fadeUp} className="mb-6 sm:mb-8 text-sm text-blue-300/80 sm:text-base md:text-lg max-w-2xl mx-auto">
            Planejamento estratégico de um produto digital com IA Generativa para análise 
            automatizada de dados de atendimento ao cliente
          </motion.p>

          {/* Stats */}
          <motion.div 
            variants={fadeUp}
            className="mb-8 sm:mb-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10"
          >
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center gap-1.5 text-2xl font-bold text-white sm:text-3xl">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                <AnimatedCounter value="IA" />
              </div>
              <p className="text-xs sm:text-sm text-blue-300">Generativa</p>
            </motion.div>
            <div className="h-8 sm:h-10 w-px bg-blue-500/30" />
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl font-bold text-white sm:text-3xl">
                <AnimatedCounter value="MVP" />
              </div>
              <p className="text-xs sm:text-sm text-blue-300">8 semanas</p>
            </motion.div>
            <div className="h-8 sm:h-10 w-px bg-blue-500/30" />
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center gap-1.5 text-2xl font-bold text-white sm:text-3xl">
                <AnimatedCounter value="3" />
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-success" />
              </div>
              <p className="text-xs sm:text-sm text-blue-300">Fases</p>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeUp}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <motion.a 
              href="#visao" 
              className="btn-float inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-primary hover:bg-blue-50 hover:shadow-lg sm:w-auto"
              whileHover={{ y: -4, boxShadow: "0 10px 25px -5px hsl(217 91% 50% / 0.35)" }}
              whileTap={{ scale: 0.97 }}
            >
              <FileText className="h-5 w-5" />
              Ver Documentação
            </motion.a>
            <motion.a 
              href="#docs" 
              className="btn-float inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto"
              whileHover={{ y: -4, boxShadow: "0 10px 25px -5px hsl(0 0% 100% / 0.15)" }}
              whileTap={{ scale: 0.97 }}
            >
              <BookOpen className="h-5 w-5" />
              Ferramentas Utilizadas
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Curso Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm text-blue-300"
        >
          <span className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Fundamentos de Gestão de Projetos
          </span>
          <span className="hidden sm:inline">•</span>
          <span>Curso de IA e Automação Digital</span>
        </motion.div>
      </div>
    </section>
  );
}
