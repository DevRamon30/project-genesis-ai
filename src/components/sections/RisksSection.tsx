import { Shield, AlertTriangle, TrendingDown, Users, Server, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { SectionCard } from "../layout/SectionCard";
import { CustomBadge } from "../common/CustomBadge";

const risks = [
  {
    id: 1, name: "Qualidade dos Modelos de IA", category: "Técnico", icon: Server,
    description: "Classificação imprecisa ou alucinações do modelo LLM gerando insights incorretos",
    probability: "Alta", impact: "Alto", level: "Crítico",
    mitigation: ["Implementar human-in-the-loop para validação inicial", "Criar pipeline de fine-tuning com dados do cliente", "Monitoramento contínuo de acurácia com alertas"],
    responsible: "Tech Lead",
  },
  {
    id: 2, name: "Segurança e Privacidade de Dados", category: "Compliance", icon: Lock,
    description: "Vazamento ou uso inadequado de dados sensíveis de atendimento ao cliente",
    probability: "Média", impact: "Muito Alto", level: "Crítico",
    mitigation: ["Criptografia end-to-end e anonimização", "Compliance LGPD/GDPR desde o design", "Auditorias de segurança trimestrais"],
    responsible: "CISO / DPO",
  },
  {
    id: 3, name: "Adoção pelo Usuário", category: "Mercado", icon: Users,
    description: "Resistência das equipes em confiar nas análises geradas por IA",
    probability: "Média", impact: "Alto", level: "Alto",
    mitigation: ["Programa de change management com treinamentos", "Demonstração clara de ROI com casos de sucesso", "Interface intuitiva com explicabilidade das decisões"],
    responsible: "Product Manager",
  },
  {
    id: 4, name: "Escalabilidade Técnica", category: "Técnico", icon: TrendingDown,
    description: "Sistema não suportar volume de dados em crescimento exponencial",
    probability: "Média", impact: "Alto", level: "Alto",
    mitigation: ["Arquitetura cloud-native com auto-scaling", "Processamento assíncrono em filas", "Testes de carga regulares (stress testing)"],
    responsible: "DevOps Lead",
  },
  {
    id: 5, name: "Dependência de APIs Externas", category: "Técnico", icon: AlertTriangle,
    description: "Indisponibilidade ou mudanças em APIs de LLM (OpenAI, Anthropic)",
    probability: "Baixa", impact: "Alto", level: "Médio",
    mitigation: ["Arquitetura multi-provider com fallback", "Cache de respostas para operações críticas", "Monitoramento de SLAs dos fornecedores"],
    responsible: "Tech Lead",
  },
  {
    id: 6, name: "Competição de Mercado", category: "Mercado", icon: Users,
    description: "Entrada de competidores estabelecidos ou startups com soluções similares",
    probability: "Alta", impact: "Médio", level: "Médio",
    mitigation: ["Foco em diferenciação por UX e time-to-value", "Construção de moats via integrações profundas", "Roadmap ágil para resposta rápida ao mercado"],
    responsible: "CEO / CPO",
  },
];

const getRiskColor = (level: string) => {
  switch (level) { case "Crítico": return "destructive"; case "Alto": return "warning"; case "Médio": return "info"; default: return "default"; }
};

const getProbabilityColor = (prob: string) => {
  switch (prob) { case "Alta": return "text-destructive"; case "Média": return "text-warning"; case "Baixa": return "text-success"; default: return "text-muted-foreground"; }
};

export function RisksSection() {
  return (
    <SectionCard
      id="riscos"
      title="1.5 Gerenciamento de Riscos"
      subtitle="Identificação, classificação e estratégias de mitigação"
      icon={Shield}
    >
      {/* Matriz de Riscos */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="px-4 py-3 text-left font-medium">Risco</th>
              <th className="px-4 py-3 text-left font-medium">Categoria</th>
              <th className="px-4 py-3 text-center font-medium">Probabilidade</th>
              <th className="px-4 py-3 text-center font-medium">Impacto</th>
              <th className="px-4 py-3 text-center font-medium">Nível</th>
              <th className="px-4 py-3 text-left font-medium">Responsável</th>
            </tr>
          </thead>
          <tbody>
            {risks.map((risk, index) => (
              <motion.tr
                key={risk.id}
                className="border-b transition-colors hover:bg-muted/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <risk.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{risk.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{risk.category}</td>
                <td className={`px-4 py-3 text-center font-medium ${getProbabilityColor(risk.probability)}`}>
                  {risk.probability}
                </td>
                <td className={`px-4 py-3 text-center font-medium ${getProbabilityColor(risk.impact === "Muito Alto" ? "Alta" : risk.impact)}`}>
                  {risk.impact}
                </td>
                <td className="px-4 py-3 text-center">
                  <CustomBadge variant={getRiskColor(risk.level) as any}>
                    {risk.level}
                  </CustomBadge>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{risk.responsible}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detalhes e Mitigação */}
      <div className="mt-6">
        <h3 className="mb-4 font-semibold">Planos de Mitigação Detalhados</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {risks.slice(0, 4).map((risk, index) => (
            <motion.div
              key={risk.id}
              className="rounded-xl border p-4"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: "0 8px 25px -10px hsl(217 91% 50% / 0.12)" }}
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <risk.icon className="h-5 w-5 text-primary" />
                  <h4 className="font-medium">{risk.name}</h4>
                </div>
                <CustomBadge variant={getRiskColor(risk.level) as any} size="sm">
                  {risk.level}
                </CustomBadge>
              </div>
              <p className="mb-3 text-xs text-muted-foreground">{risk.description}</p>
              <div>
                <p className="mb-2 text-xs font-medium uppercase text-muted-foreground">Estratégias de Mitigação</p>
                <ul className="space-y-1">
                  {risk.mitigation.map((m, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}
