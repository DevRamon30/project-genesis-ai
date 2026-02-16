import { Target, Users, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { SectionCard } from "../layout/SectionCard";
import { InfoCard } from "../layout/InfoCard";

export function VisionSection() {
  return (
    <SectionCard
      id="visao"
      title="1.1 Visão de Produto"
      subtitle="Descrição estratégica do produto digital InsightAI Pro"
      icon={Target}
    >
      {/* Descrição do Produto */}
      <InfoCard title="Descrição do Produto" icon={Sparkles} variant="highlighted">
        <p className="mb-3">
          O <strong>InsightAI Pro</strong> é uma plataforma digital SaaS baseada em Inteligência Artificial Generativa 
          que transforma dados brutos de atendimento ao cliente (tickets, chats, e-mails) em insights acionáveis 
          e planos de ação automatizados.
        </p>
        <p>
          A solução utiliza modelos de linguagem avançados (LLMs) para classificar, priorizar e sumarizar 
          grandes volumes de interações, identificando padrões críticos, sentimentos predominantes e 
          oportunidades de melhoria em tempo real.
        </p>
      </InfoCard>

      {/* Público-Alvo */}
      <InfoCard title="Público-Alvo" icon={Users}>
        <ul className="space-y-2">
          {[
            { bold: "Times de Customer Success e Suporte:", text: "Gestores e analistas que precisam processar alto volume de interações diariamente" },
            { bold: "Gerentes de Operações:", text: "Profissionais responsáveis por métricas de atendimento e satisfação do cliente (CSAT, NPS)" },
            { bold: "Empresas de médio/grande porte:", text: "Organizações com +1.000 tickets/mês que enfrentam gargalos na análise manual" },
          ].map((item, i) => (
            <motion.li 
              key={i}
              className="flex items-start gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
              <span><strong>{item.bold}</strong> {item.text}</span>
            </motion.li>
          ))}
        </ul>
      </InfoCard>

      {/* Problema Atendido */}
      <motion.div 
        className="rounded-xl border border-destructive/20 bg-destructive/5 p-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
      >
        <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
          <Target className="h-5 w-5" />
          Problema Atendido
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Times de atendimento enfrentam <strong>volumes gigantescos de interações</strong> diariamente, 
          tornando impossível a análise manual eficiente. Isso resulta em:
        </p>
        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <li>• Incapacidade de identificar temas críticos rapidamente</li>
          <li>• Demora na geração de planos de ação</li>
          <li>• Perda de insights valiosos enterrados nos dados</li>
          <li>• Decisões baseadas em amostras não representativas</li>
        </ul>
      </motion.div>

      {/* Proposta de Valor */}
      <motion.div 
        className="rounded-xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent p-6 border border-primary/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="mb-4 text-lg font-bold gradient-text">Proposta de Valor</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { value: "80%", label: "Redução no tempo de análise", bgColor: "bg-primary/10", textColor: "text-primary" },
            { value: "3x", label: "Mais rápido na priorização", bgColor: "bg-success/10", textColor: "text-success" },
            { value: "100%", label: "Das interações analisadas", bgColor: "bg-accent/10", textColor: "text-accent" },
          ].map((item, i) => (
            <motion.div 
              key={item.value}
              className="text-center"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <div className={`mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full ${item.bgColor}`}>
                <span className={`text-xl font-bold ${item.textColor}`}>{item.value}</span>
              </div>
              <p className="text-sm font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          "Transforme dados de atendimento em ações estratégicas em minutos, não em dias."
        </p>
      </motion.div>
    </SectionCard>
  );
}
