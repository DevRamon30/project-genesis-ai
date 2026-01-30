import { BarChart3, Search, TestTube, Rocket, RefreshCw, ArrowRight } from "lucide-react";
import { SectionCard } from "../layout/SectionCard";

const lifecyclePhases = [
  {
    id: 1,
    name: "Descoberta",
    icon: Search,
    description: "Investigação profunda do problema e validação da oportunidade",
    duration: "2-3 semanas",
    color: "from-blue-500 to-blue-600",
    activities: [
      "Entrevistas com stakeholders e usuários-alvo",
      "Análise de concorrência e mercado",
      "Definição de personas e jobs-to-be-done",
      "Documentação da visão de produto",
    ],
    criteria: [
      "Problem-Solution Fit validado",
      "Mínimo 10 entrevistas realizadas",
      "Canvas de Proposta de Valor aprovado",
    ],
    artifacts: ["Lean Canvas", "Personas", "Mapa de Empatia"],
  },
  {
    id: 2,
    name: "Validação",
    icon: TestTube,
    description: "Prototipação e teste de hipóteses críticas com usuários reais",
    duration: "3-4 semanas",
    color: "from-amber-500 to-orange-500",
    activities: [
      "Criação de protótipos de baixa/alta fidelidade",
      "Testes de usabilidade com usuários",
      "Validação técnica de viabilidade IA",
      "Definição e priorização do backlog do MVP",
    ],
    criteria: [
      "Protótipo validado com 80% de aprovação",
      "Arquitetura técnica definida",
      "Backlog do MVP priorizado",
    ],
    artifacts: ["Protótipo Figma", "Documento de Arquitetura", "Backlog"],
  },
  {
    id: 3,
    name: "Entrega",
    icon: Rocket,
    description: "Desenvolvimento incremental e lançamento do MVP",
    duration: "6-8 semanas",
    color: "from-green-500 to-emerald-500",
    activities: [
      "Desenvolvimento em sprints de 2 semanas",
      "Integração contínua e deploy automatizado",
      "Testes de qualidade e performance",
      "Onboarding de clientes piloto",
    ],
    criteria: [
      "MVP funcional em produção",
      "5+ clientes piloto utilizando",
      "Zero bugs críticos",
    ],
    artifacts: ["Código em produção", "Documentação técnica", "Métricas iniciais"],
  },
  {
    id: 4,
    name: "Evolução",
    icon: RefreshCw,
    description: "Iteração contínua baseada em dados e feedback",
    duration: "Contínuo",
    color: "from-purple-500 to-violet-500",
    activities: [
      "Análise de métricas de uso e NPS",
      "Coleta sistemática de feedback",
      "Priorização de melhorias e novas features",
      "Expansão para novos segmentos",
    ],
    criteria: [
      "Product-Market Fit alcançado (NPS > 40)",
      "Crescimento sustentável de usuários",
      "Modelo de negócio validado",
    ],
    artifacts: ["Dashboards de métricas", "Roadmap atualizado", "OKRs do produto"],
  },
];

export function LifecycleSection() {
  return (
    <SectionCard
      id="ciclo"
      title="1.4 Ciclo de Vida da Aplicação"
      subtitle="Fases de evolução do produto desde a descoberta até a maturidade"
      icon={BarChart3}
    >
      {/* Diagrama Visual */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {lifecyclePhases.map((phase, index) => (
          <div key={phase.id} className="flex items-center">
            <div className={`flex items-center gap-2 rounded-full bg-gradient-to-r ${phase.color} px-4 py-2`}>
              <phase.icon className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">{phase.name}</span>
            </div>
            {index < lifecyclePhases.length - 1 && (
              <ArrowRight className="mx-2 h-5 w-5 text-muted-foreground hidden sm:block" />
            )}
          </div>
        ))}
      </div>

      {/* Detalhes das Fases */}
      <div className="grid gap-6 md:grid-cols-2">
        {lifecyclePhases.map((phase) => (
          <div 
            key={phase.id} 
            className="rounded-xl border bg-card p-5 transition-all hover:shadow-md"
          >
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r ${phase.color}`}>
                  <phase.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">{phase.name}</h3>
                  <p className="text-xs text-muted-foreground">{phase.duration}</p>
                </div>
              </div>
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium">
                Fase {phase.id}
              </span>
            </div>
            
            <p className="mb-4 text-sm text-muted-foreground">{phase.description}</p>

            {/* Atividades */}
            <div className="mb-4">
              <p className="mb-2 text-xs font-medium uppercase text-muted-foreground">Atividades Principais</p>
              <ul className="space-y-1">
                {phase.activities.slice(0, 3).map((activity, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>

            {/* Critérios de Avanço */}
            <div className="rounded-lg bg-muted/50 p-3">
              <p className="mb-2 text-xs font-medium uppercase text-muted-foreground">Critérios para Avançar</p>
              <ul className="space-y-1">
                {phase.criteria.map((criterion, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="text-success">✓</span>
                    {criterion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}