import { Brain, AlertCircle, Scale, Building2, ShieldCheck, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { SectionCard } from "../layout/SectionCard";
import { InfoCard } from "../layout/InfoCard";

export function AIEthicsSection() {
  return (
    <SectionCard
      id="ia"
      title="1.6 Gestão de Produtos e IA"
      subtitle="Riscos específicos, ética, segurança e impactos organizacionais"
      icon={Brain}
    >
      {/* Riscos Específicos de IA */}
      <div>
        <h3 className="mb-4 flex items-center gap-2 font-semibold">
          <AlertCircle className="h-5 w-5 text-destructive" />
          Riscos Específicos no Uso de IA
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { title: "Alucinações e Informações Falsas", desc: "LLMs podem gerar insights factualmente incorretos ou inventar dados não existentes.", mit: "Mitigação: Validação cruzada com dados originais + indicadores de confiança", borderColor: "border-destructive/20", bgColor: "bg-destructive/5", mitColor: "text-destructive" },
            { title: "Viés Algorítmico", desc: "Modelos podem perpetuar ou amplificar vieses presentes nos dados de treinamento.", mit: "Mitigação: Auditorias de fairness + datasets diversificados + monitoramento contínuo", borderColor: "border-warning/20", bgColor: "bg-warning/5", mitColor: "text-warning" },
            { title: "Dependência Tecnológica", desc: "Alta dependência de providers externos (OpenAI, Anthropic) para funcionalidades core.", mit: "Mitigação: Arquitetura multi-model + capacidade de fallback para modelos open-source", borderColor: "border-info/20", bgColor: "bg-info/5", mitColor: "text-info" },
            { title: "Custos Variáveis de Inferência", desc: "Custos de API podem escalar de forma imprevisível com o volume de uso.", mit: "Mitigação: Caching inteligente + rate limiting + otimização de prompts", borderColor: "border-muted", bgColor: "bg-muted/30", mitColor: "" },
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              className={`rounded-xl border ${item.borderColor} ${item.bgColor} p-4`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <h4 className="mb-2 font-medium">{item.title}</h4>
              <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
              <p className={`text-xs font-medium ${item.mitColor}`}>{item.mit}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Considerações Éticas */}
      <InfoCard title="Considerações Éticas" icon={Scale} variant="highlighted">
        <div className="space-y-3">
          {[
            { title: "Transparência", desc: "Usuários devem ser informados quando interagem com análises geradas por IA. O sistema deve explicar como as conclusões foram alcançadas." },
            { title: "Consentimento", desc: "Dados de clientes finais são processados com base em contratos B2B. Políticas claras sobre uso de dados para treinamento de modelos." },
            { title: "Responsabilidade", desc: "Decisões finais devem ser tomadas por humanos. A IA é ferramenta de suporte, não substituto do julgamento profissional." },
            { title: "Equidade", desc: "Monitoramento ativo para garantir que o sistema não discrimine grupos específicos de clientes ou temas." },
          ].map((item) => (
            <div key={item.title}>
              <h4 className="font-medium text-foreground">{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </InfoCard>

      {/* Segurança e Confiabilidade */}
      <motion.div 
        className="rounded-xl border bg-card p-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="mb-4 flex items-center gap-2 font-semibold">
          <ShieldCheck className="h-5 w-5 text-success" />
          Segurança e Confiabilidade
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Cpu, color: "text-success", bgColor: "bg-success/10", title: "Criptografia", desc: "AES-256 em repouso, TLS 1.3 em trânsito" },
            { icon: ShieldCheck, color: "text-primary", bgColor: "bg-primary/10", title: "Compliance", desc: "LGPD, GDPR, SOC 2 Type II" },
            { icon: Brain, color: "text-info", bgColor: "bg-info/10", title: "Model Governance", desc: "Versionamento, auditoria, rollback" },
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15, type: "spring" }}
              whileHover={{ y: -5 }}
            >
              <div className={`mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full ${item.bgColor}`}>
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Impactos Organizacionais */}
      <InfoCard title="Impactos Organizacionais" icon={Building2}>
        <div className="space-y-3">
          {[
            { sign: "+", signColor: "text-success", bgColor: "bg-success/10", title: "Eficiência Operacional", desc: "Redução de 80% no tempo de análise manual, liberando equipes para atividades estratégicas." },
            { sign: "+", signColor: "text-success", bgColor: "bg-success/10", title: "Qualidade de Decisões", desc: "Insights baseados em 100% dos dados, não em amostras, melhorando a assertividade." },
            { sign: "!", signColor: "text-warning", bgColor: "bg-warning/10", title: "Mudança Cultural", desc: "Necessidade de upskilling das equipes e adaptação de processos para trabalhar com IA." },
            { sign: "!", signColor: "text-warning", bgColor: "bg-warning/10", title: "Governança de Dados", desc: "Exige políticas robustas de data governance e definição clara de ownership dos dados." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded ${item.bgColor} text-xs font-bold ${item.signColor}`}>{item.sign}</span>
              <div>
                <h4 className="font-medium text-foreground">{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </InfoCard>
    </SectionCard>
  );
}
