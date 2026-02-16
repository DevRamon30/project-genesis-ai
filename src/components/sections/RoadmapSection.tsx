import { Map, Flag, Rocket, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { SectionCard } from "../layout/SectionCard";
import { CustomBadge } from "../common/CustomBadge";

const roadmapPhases = [
  {
    phase: 1,
    name: "Foundation",
    duration: "Semanas 1-8",
    status: "MVP",
    color: "bg-primary",
    objectives: [
      "Validar hipótese central do produto",
      "Estabelecer arquitetura base escalável",
      "Conquistar primeiros 5 clientes piloto",
    ],
    deliverables: [
      "Importação de dados (CSV/API básica)",
      "Classificação por IA (categorias e sentimento)",
      "Dashboard básico de insights",
      "Sumarização automática",
    ],
    metrics: ["5 clientes piloto", "NPS > 7", "Retenção > 80%"],
  },
  {
    phase: 2,
    name: "Growth",
    duration: "Semanas 9-16",
    status: "V1.0",
    color: "bg-success",
    objectives: [
      "Expandir capacidades de análise",
      "Melhorar experiência do usuário",
      "Escalar para 50 clientes",
    ],
    deliverables: [
      "Integrações nativas (Zendesk, Intercom, Freshdesk)",
      "Análise preditiva de tendências",
      "Relatórios customizáveis",
      "API pública para desenvolvedores",
      "Planos de ação automáticos",
    ],
    metrics: ["50 clientes ativos", "MRR $10k", "Churn < 5%"],
  },
  {
    phase: 3,
    name: "Scale",
    duration: "Semanas 17-24",
    status: "V2.0",
    color: "bg-accent",
    objectives: [
      "Diferenciação competitiva",
      "Expansão para enterprise",
      "Automação avançada",
    ],
    deliverables: [
      "Modelos de IA customizados por cliente",
      "Automação de respostas (sugestões de reply)",
      "Inteligência competitiva",
      "SSO e compliance enterprise",
      "Multi-idiomas (PT, EN, ES)",
    ],
    metrics: ["200 clientes", "ARR $500k", "Enterprise tier lançado"],
  },
];

export function RoadmapSection() {
  return (
    <SectionCard
      id="roadmap"
      title="1.3 Roadmap do Produto"
      subtitle="Planejamento estratégico de evolução em 3 fases (24 semanas)"
      icon={Map}
    >
      {/* Timeline Visual */}
      <div className="relative">
        {/* Linha conectora animada */}
        <motion.div 
          className="absolute left-6 top-0 hidden w-0.5 bg-border md:block"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        
        <div className="space-y-8">
          {roadmapPhases.map((phase, index) => (
            <motion.div 
              key={phase.phase} 
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Indicador da fase */}
              <div className="flex gap-4 md:gap-6">
                <motion.div 
                  className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${phase.color}`}
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  {index === 0 && <Rocket className="h-6 w-6 text-white" />}
                  {index === 1 && <TrendingUp className="h-6 w-6 text-white" />}
                  {index === 2 && <Flag className="h-6 w-6 text-white" />}
                </motion.div>
                
                <motion.div 
                  className="flex-1 rounded-xl border bg-card p-5 transition-all"
                  whileHover={{ boxShadow: "0 10px 30px -10px hsl(217 91% 50% / 0.15)", y: -2 }}
                >
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold">Fase {phase.phase}: {phase.name}</h3>
                        <CustomBadge variant={index === 0 ? "destructive" : index === 1 ? "success" : "info"}>
                          {phase.status}
                        </CustomBadge>
                      </div>
                      <p className="text-sm text-muted-foreground">{phase.duration}</p>
                    </div>
                  </div>

                  {/* Objetivos */}
                  <div className="mb-4">
                    <p className="mb-2 text-xs font-medium uppercase text-muted-foreground">Objetivos</p>
                    <ul className="space-y-1">
                      {phase.objectives.map((obj, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Entregáveis */}
                  <div className="mb-4">
                    <p className="mb-2 text-xs font-medium uppercase text-muted-foreground">Entregáveis</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((del, idx) => (
                        <motion.span 
                          key={idx} 
                          className="rounded-lg bg-muted px-2.5 py-1 text-xs font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.15 + idx * 0.05 }}
                          whileHover={{ scale: 1.05, backgroundColor: "hsl(217 91% 50% / 0.1)" }}
                        >
                          {del}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Métricas de Sucesso */}
                  <div>
                    <p className="mb-2 text-xs font-medium uppercase text-muted-foreground">Métricas de Sucesso</p>
                    <div className="flex flex-wrap gap-3">
                      {phase.metrics.map((metric, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1"
                          whileHover={{ scale: 1.08 }}
                        >
                          <span className="h-2 w-2 rounded-full bg-primary" />
                          <span className="text-xs font-medium text-primary">{metric}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Legenda */}
      <motion.div 
        className="mt-6 flex flex-wrap items-center justify-center gap-4 rounded-lg bg-muted/50 p-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <span className="text-xs font-medium text-muted-foreground">Legenda:</span>
        {[
          { color: "bg-primary", label: "MVP (8 semanas)" },
          { color: "bg-success", label: "V1.0 (8 semanas)" },
          { color: "bg-accent", label: "V2.0 (8 semanas)" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className={`h-3 w-3 rounded ${item.color}`} />
            <span className="text-xs">{item.label}</span>
          </div>
        ))}
      </motion.div>
    </SectionCard>
  );
}
