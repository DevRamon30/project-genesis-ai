import { Brain, Sparkles, TrendingUp, FileText, BookOpen } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden hero-gradient py-16 md:py-24">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-20"
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
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
            <Brain className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Projeto de Gestão • UniFECAF</span>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            InsightAI Pro
          </h1>
          <p className="mb-2 text-xl text-blue-200 md:text-2xl">
            Do Problema ao Produto
          </p>
          <p className="mb-8 text-base text-blue-300/80 md:text-lg max-w-2xl mx-auto">
            Planejamento estratégico de um produto digital com IA Generativa para análise 
            automatizada de dados de atendimento ao cliente
          </p>

          {/* Stats */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 text-3xl font-bold text-white">
                <Sparkles className="h-6 w-6 text-accent" />
                IA
              </div>
              <p className="text-sm text-blue-300">Generativa</p>
            </div>
            <div className="h-10 w-px bg-blue-500/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">MVP</div>
              <p className="text-sm text-blue-300">8 semanas</p>
            </div>
            <div className="h-10 w-px bg-blue-500/30" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 text-3xl font-bold text-white">
                3
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
              <p className="text-sm text-blue-300">Fases</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="#visao" 
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-primary transition-all hover:bg-blue-50 hover:shadow-lg"
            >
              <FileText className="h-5 w-5" />
              Ver Documentação
            </a>
            <a 
              href="#docs" 
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <BookOpen className="h-5 w-5" />
              Ferramentas Utilizadas
            </a>
          </div>
        </div>

        {/* Curso Info */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-300">
          <span className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Fundamentos de Gestão de Projetos
          </span>
          <span className="hidden sm:inline">•</span>
          <span>Curso de IA e Automação Digital</span>
        </div>
      </div>
    </section>
  );
}