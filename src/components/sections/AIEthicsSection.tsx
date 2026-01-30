import { Brain, AlertCircle, Scale, Building2, ShieldCheck, Cpu } from "lucide-react";
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
          <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
            <h4 className="mb-2 font-medium">Alucinações e Informações Falsas</h4>
            <p className="text-sm text-muted-foreground mb-2">
              LLMs podem gerar insights factualmente incorretos ou inventar dados não existentes.
            </p>
            <p className="text-xs text-destructive font-medium">
              Mitigação: Validação cruzada com dados originais + indicadores de confiança
            </p>
          </div>
          <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
            <h4 className="mb-2 font-medium">Viés Algorítmico</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Modelos podem perpetuar ou amplificar vieses presentes nos dados de treinamento.
            </p>
            <p className="text-xs text-warning font-medium">
              Mitigação: Auditorias de fairness + datasets diversificados + monitoramento contínuo
            </p>
          </div>
          <div className="rounded-xl border border-info/20 bg-info/5 p-4">
            <h4 className="mb-2 font-medium">Dependência Tecnológica</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Alta dependência de providers externos (OpenAI, Anthropic) para funcionalidades core.
            </p>
            <p className="text-xs text-info font-medium">
              Mitigação: Arquitetura multi-model + capacidade de fallback para modelos open-source
            </p>
          </div>
          <div className="rounded-xl border border-muted bg-muted/30 p-4">
            <h4 className="mb-2 font-medium">Custos Variáveis de Inferência</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Custos de API podem escalar de forma imprevisível com o volume de uso.
            </p>
            <p className="text-xs font-medium">
              Mitigação: Caching inteligente + rate limiting + otimização de prompts
            </p>
          </div>
        </div>
      </div>

      {/* Considerações Éticas */}
      <InfoCard title="Considerações Éticas" icon={Scale} variant="highlighted">
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-foreground">Transparência</h4>
            <p>Usuários devem ser informados quando interagem com análises geradas por IA. O sistema deve explicar como as conclusões foram alcançadas.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground">Consentimento</h4>
            <p>Dados de clientes finais são processados com base em contratos B2B. Políticas claras sobre uso de dados para treinamento de modelos.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground">Responsabilidade</h4>
            <p>Decisões finais devem ser tomadas por humanos. A IA é ferramenta de suporte, não substituto do julgamento profissional.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground">Equidade</h4>
            <p>Monitoramento ativo para garantir que o sistema não discrimine grupos específicos de clientes ou temas.</p>
          </div>
        </div>
      </InfoCard>

      {/* Segurança e Confiabilidade */}
      <div className="rounded-xl border bg-card p-5">
        <h3 className="mb-4 flex items-center gap-2 font-semibold">
          <ShieldCheck className="h-5 w-5 text-success" />
          Segurança e Confiabilidade
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
              <Cpu className="h-6 w-6 text-success" />
            </div>
            <h4 className="font-medium">Criptografia</h4>
            <p className="text-xs text-muted-foreground">AES-256 em repouso, TLS 1.3 em trânsito</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">Compliance</h4>
            <p className="text-xs text-muted-foreground">LGPD, GDPR, SOC 2 Type II</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-info/10">
              <Brain className="h-6 w-6 text-info" />
            </div>
            <h4 className="font-medium">Model Governance</h4>
            <p className="text-xs text-muted-foreground">Versionamento, auditoria, rollback</p>
          </div>
        </div>
      </div>

      {/* Impactos Organizacionais */}
      <InfoCard title="Impactos Organizacionais" icon={Building2}>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-success/10 text-xs font-bold text-success">+</span>
            <div>
              <h4 className="font-medium text-foreground">Eficiência Operacional</h4>
              <p>Redução de 80% no tempo de análise manual, liberando equipes para atividades estratégicas.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-success/10 text-xs font-bold text-success">+</span>
            <div>
              <h4 className="font-medium text-foreground">Qualidade de Decisões</h4>
              <p>Insights baseados em 100% dos dados, não em amostras, melhorando a assertividade.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-warning/10 text-xs font-bold text-warning">!</span>
            <div>
              <h4 className="font-medium text-foreground">Mudança Cultural</h4>
              <p>Necessidade de upskilling das equipes e adaptação de processos para trabalhar com IA.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-warning/10 text-xs font-bold text-warning">!</span>
            <div>
              <h4 className="font-medium text-foreground">Governança de Dados</h4>
              <p>Exige políticas robustas de data governance e definição clara de ownership dos dados.</p>
            </div>
          </div>
        </div>
      </InfoCard>
    </SectionCard>
  );
}