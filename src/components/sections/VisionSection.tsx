import { Target, Users, Sparkles, CheckCircle2 } from "lucide-react";
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
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
            <span><strong>Times de Customer Success e Suporte:</strong> Gestores e analistas que precisam processar alto volume de interações diariamente</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
            <span><strong>Gerentes de Operações:</strong> Profissionais responsáveis por métricas de atendimento e satisfação do cliente (CSAT, NPS)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
            <span><strong>Empresas de médio/grande porte:</strong> Organizações com +1.000 tickets/mês que enfrentam gargalos na análise manual</span>
          </li>
        </ul>
      </InfoCard>

      {/* Problema Atendido */}
      <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-5">
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
      </div>

      {/* Proposta de Valor */}
      <div className="rounded-xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent p-6 border border-primary/20">
        <h3 className="mb-4 text-lg font-bold gradient-text">Proposta de Valor</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <span className="text-xl font-bold text-primary">80%</span>
            </div>
            <p className="text-sm font-medium">Redução no tempo de análise</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
              <span className="text-xl font-bold text-success">3x</span>
            </div>
            <p className="text-sm font-medium">Mais rápido na priorização</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <span className="text-xl font-bold text-accent">100%</span>
            </div>
            <p className="text-sm font-medium">Das interações analisadas</p>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          "Transforme dados de atendimento em ações estratégicas em minutos, não em dias."
        </p>
      </div>
    </SectionCard>
  );
}