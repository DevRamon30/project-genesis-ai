import { 
  Grid3X3, Target, Users, Lightbulb, TrendingUp, 
  DollarSign, Megaphone, Award, Package 
} from "lucide-react";
import { SectionCard } from "../layout/SectionCard";

const canvasData = {
  problema: [
    "Volume gigantesco de tickets impossibilita análise manual",
    "Incapacidade de identificar temas críticos rapidamente",
    "Decisões baseadas em amostras não representativas",
    "Demora na geração de planos de ação",
  ],
  segmentoClientes: [
    "Times de Customer Success (empresas B2B SaaS)",
    "Equipes de Suporte com +1.000 tickets/mês",
    "Gerentes de Operações de CX",
    "Empresas médio/grande porte",
  ],
  propostaValor: [
    "Análise 100% automatizada de todas as interações",
    "Insights acionáveis em minutos, não dias",
    "Priorização inteligente baseada em impacto",
    "Planos de ação gerados automaticamente",
  ],
  solucao: [
    "Plataforma SaaS com IA Generativa",
    "Classificação automática por tema/urgência/sentimento",
    "Dashboard de insights em tempo real",
    "Sumarização executiva automática",
  ],
  canais: [
    "Inside Sales B2B direto",
    "Parcerias com plataformas de suporte (Zendesk, Intercom)",
    "Marketing de conteúdo (SEO, webinars)",
    "Eventos e conferências de CX",
  ],
  fonteReceita: [
    "Assinatura SaaS mensal/anual",
    "Tiers: Starter ($299), Pro ($799), Enterprise (custom)",
    "Volume-based pricing (por ticket processado)",
    "Add-ons: integrações premium, modelos customizados",
  ],
  estruturaCustos: [
    "Infraestrutura cloud (AWS/GCP)",
    "Custos de API de LLM (OpenAI, Anthropic)",
    "Equipe de desenvolvimento (eng + produto)",
    "Customer Success e Suporte",
    "Marketing e vendas",
  ],
  metricasChave: [
    "MRR (Monthly Recurring Revenue)",
    "Churn rate < 5%",
    "NPS > 40",
    "Time-to-value < 30 min",
    "Tickets processados/mês",
  ],
  vantagemCompetitiva: [
    "UX simplificada vs. ferramentas complexas de BI",
    "Time-to-value em minutos (não semanas)",
    "Modelos de IA fine-tuned por vertical",
    "Integrações nativas com principais plataformas",
  ],
};

const CanvasBlock = ({ 
  title, 
  icon: Icon, 
  items, 
  color = "primary" 
}: { 
  title: string; 
  icon: any; 
  items: string[]; 
  color?: string; 
}) => (
  <div className="h-full rounded-xl border bg-card p-4">
    <div className="mb-3 flex items-center gap-2">
      <Icon className={`h-4 w-4 text-${color}`} />
      <h4 className="text-sm font-semibold">{title}</h4>
    </div>
    <ul className="space-y-1.5">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
          <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full bg-${color}`} />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export function LeanCanvasSection() {
  return (
    <SectionCard
      id="canvas"
      title="Lean Canvas"
      subtitle="Modelo de negócio do InsightAI Pro em uma página"
      icon={Grid3X3}
    >
      <div className="grid gap-4 lg:grid-cols-5">
        {/* Linha 1 */}
        <div className="lg:col-span-2">
          <CanvasBlock
            title="Problema"
            icon={Target}
            items={canvasData.problema}
            color="destructive"
          />
        </div>
        <div className="lg:row-span-2">
          <div className="h-full">
            <CanvasBlock
              title="Proposta de Valor"
              icon={Award}
              items={canvasData.propostaValor}
              color="primary"
            />
          </div>
        </div>
        <div className="lg:col-span-2">
          <CanvasBlock
            title="Solução"
            icon={Lightbulb}
            items={canvasData.solucao}
            color="success"
          />
        </div>

        {/* Linha 2 */}
        <div>
          <CanvasBlock
            title="Métricas-Chave"
            icon={TrendingUp}
            items={canvasData.metricasChave}
            color="info"
          />
        </div>
        <div>
          <CanvasBlock
            title="Vantagem Competitiva"
            icon={Award}
            items={canvasData.vantagemCompetitiva}
            color="warning"
          />
        </div>
        <div>
          <CanvasBlock
            title="Canais"
            icon={Megaphone}
            items={canvasData.canais}
            color="accent"
          />
        </div>
        <div>
          <CanvasBlock
            title="Segmento de Clientes"
            icon={Users}
            items={canvasData.segmentoClientes}
            color="primary"
          />
        </div>

        {/* Linha 3 */}
        <div className="lg:col-span-2">
          <CanvasBlock
            title="Estrutura de Custos"
            icon={DollarSign}
            items={canvasData.estruturaCustos}
            color="destructive"
          />
        </div>
        <div className="lg:col-span-3">
          <CanvasBlock
            title="Fontes de Receita"
            icon={Package}
            items={canvasData.fonteReceita}
            color="success"
          />
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-muted/50 p-4 text-center">
        <p className="text-sm text-muted-foreground">
          Este Lean Canvas representa a modelagem inicial do negócio. 
          Deve ser iterado conforme validações de mercado e feedback de clientes piloto.
        </p>
      </div>
    </SectionCard>
  );
}