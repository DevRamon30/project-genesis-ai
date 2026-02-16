import { Lightbulb, Zap, Star, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionCard } from "../layout/SectionCard";
import { CustomBadge } from "../common/CustomBadge";

const mvpFeatures = [
  {
    id: 1,
    name: "Importação de Dados",
    description: "Upload de arquivos CSV/Excel com tickets e integração básica via API com plataformas de suporte (Zendesk, Freshdesk)",
    priority: "Essencial",
    acceptance: [
      "Suporte a CSV e Excel até 50MB",
      "Mapeamento automático de colunas",
      "Validação de dados com relatório de erros",
    ],
    effort: "Médio",
    value: "Alto",
  },
  {
    id: 2,
    name: "Classificação Automática por IA",
    description: "Categorização inteligente de tickets por tema, urgência e sentimento utilizando modelos LLM",
    priority: "Essencial",
    acceptance: [
      "Classificação em até 10 categorias customizáveis",
      "Score de sentimento (positivo/neutro/negativo)",
      "Nível de urgência (baixo/médio/alto/crítico)",
    ],
    effort: "Alto",
    value: "Muito Alto",
  },
  {
    id: 3,
    name: "Dashboard de Insights",
    description: "Visualização dos principais indicadores: volume por categoria, tendências, sentimento geral e alertas",
    priority: "Essencial",
    acceptance: [
      "Gráficos de tendência temporal",
      "Top 10 temas mais frequentes",
      "Filtros por período e categoria",
    ],
    effort: "Médio",
    value: "Alto",
  },
  {
    id: 4,
    name: "Sumarização Automática",
    description: "Geração de resumos executivos diários/semanais com principais insights e recomendações",
    priority: "Importante",
    acceptance: [
      "Resumo em linguagem natural",
      "Destaques dos problemas críticos",
      "Exportação em PDF",
    ],
    effort: "Médio",
    value: "Alto",
  },
  {
    id: 5,
    name: "Alertas Inteligentes",
    description: "Notificações automáticas quando padrões críticos são detectados (picos de reclamação, quedas de NPS)",
    priority: "Desejável",
    acceptance: [
      "Regras configuráveis de alertas",
      "Notificação por e-mail",
      "Histórico de alertas no sistema",
    ],
    effort: "Baixo",
    value: "Médio",
  },
];

export function MVPSection() {
  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case "Essencial": return "destructive";
      case "Importante": return "warning";
      case "Desejável": return "info";
      default: return "default";
    }
  };

  const getEffortColor = (effort: string) => {
    switch (effort) {
      case "Baixo": return "text-success";
      case "Médio": return "text-warning";
      case "Alto": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  return (
    <SectionCard
      id="mvp"
      title="1.2 Definição do MVP"
      subtitle="Funcionalidades essenciais para validação inicial do produto"
      icon={Lightbulb}
    >
      {/* Justificativa de Priorização */}
      <div className="rounded-xl border bg-muted/30 p-5">
        <h3 className="mb-3 flex items-center gap-2 font-semibold">
          <Star className="h-5 w-5 text-warning" />
          Justificativa de Priorização
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A priorização foi baseada na matriz <strong>Valor x Esforço</strong>, focando em:
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { icon: Zap, color: "text-warning", title: "Time-to-Value", desc: "Entrega rápida de valor" },
            { icon: Clock, color: "text-info", title: "Viabilidade Técnica", desc: "Desenvolvimento em 8 semanas" },
            { icon: ArrowRight, color: "text-success", title: "Validação de Hipóteses", desc: "Feedback real do mercado" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="flex items-center gap-2 rounded-lg bg-background p-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <item.icon className={`h-5 w-5 ${item.color}`} />
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lista de Funcionalidades */}
      <div>
        <h3 className="mb-4 font-semibold">Funcionalidades do MVP</h3>
        <div className="space-y-4">
          {mvpFeatures.map((feature, index) => (
            <motion.div 
              key={feature.id} 
              className="card-interactive rounded-xl border p-5"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.01, y: -3 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <motion.span 
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    {feature.id}
                  </motion.span>
                  <div>
                    <h4 className="font-semibold">{feature.name}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
                <CustomBadge variant={getPriorityVariant(feature.priority) as any} size="md">
                  {feature.priority}
                </CustomBadge>
              </div>
              
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-medium uppercase text-muted-foreground">Critérios de Aceitação</p>
                  <ul className="space-y-1">
                    {feature.acceptance.map((criteria, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {criteria}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-6">
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase text-muted-foreground">Esforço</p>
                    <p className={`font-semibold ${getEffortColor(feature.effort)}`}>{feature.effort}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase text-muted-foreground">Valor</p>
                    <p className="font-semibold text-success">{feature.value}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}
